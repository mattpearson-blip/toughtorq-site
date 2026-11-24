import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const ALLOWED_FORM_TYPES = new Set([
  "contact",
  "find_a_distributor",
  "become_a_distributor",
  "quote_request",
] as const);

type FormType =
  | "contact"
  | "find_a_distributor"
  | "become_a_distributor"
  | "quote_request";

const SUBJECTS: Record<FormType, string> = {
  contact: "ToughTorq Contact Form Submission",
  find_a_distributor: "ToughTorq Find a Distributor Submission",
  become_a_distributor: "ToughTorq Distributor Application Submission",
  quote_request: "New ToughTorq Quote Request",
};

function value(form: FormData, names: string[], max = 4000) {
  for (const name of names) {
    const raw = form.get(name);
    if (typeof raw === "string" && raw.trim()) return raw.trim().slice(0, max);
  }
  return "";
}

function safePayload(form: FormData) {
  const payload: Record<string, string> = {};
  for (const [key, raw] of form.entries()) {
    if (typeof raw !== "string") continue;
    if (["_honey", "_next", "_template", "_subject"].includes(key)) continue;
    payload[key.slice(0, 120)] = raw.trim().slice(0, 12000);
  }
  return payload;
}

function validEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

function env(name: string) {
  const result = process.env[name]?.trim();
  if (!result) throw new Error(`Missing server configuration: ${name}`);
  return result;
}

async function supabaseRequest(path: string, init: RequestInit = {}) {
  const url = env("SUPABASE_URL").replace(/\/$/, "") + path;
  const key = env("SUPABASE_SECRET_KEY");
  const headers = new Headers(init.headers);
  headers.set("apikey", key);
  headers.set("content-type", "application/json");
  const response = await fetch(url, { ...init, headers, cache: "no-store" });
  if (!response.ok) {
    const detail = (await response.text().catch(() => "")).slice(0, 500);
    throw new Error(`Supabase request failed (${response.status}): ${detail}`);
  }
  return response;
}

async function organizationId() {
  const response = await supabaseRequest(
    "/rest/v1/organizations?slug=eq.jam-torque&select=id&limit=1",
  );
  const rows = (await response.json()) as Array<{ id?: string }>;
  const id = rows[0]?.id;
  if (!id) throw new Error("JAM Torque organization record was not found.");
  return id;
}

async function saveSubmission(input: {
  organizationId: string;
  formType: FormType;
  contactName: string;
  companyName: string;
  email: string;
  phone: string;
  sourceUrl: string;
  payload: Record<string, string>;
}) {
  const response = await supabaseRequest("/rest/v1/toughtorq_web_submissions", {
    method: "POST",
    headers: { Prefer: "return=representation" },
    body: JSON.stringify({
      organization_id: input.organizationId,
      form_type: input.formType,
      contact_name: input.contactName || null,
      company_name: input.companyName || null,
      email: input.email,
      phone: input.phone || null,
      subject: SUBJECTS[input.formType],
      source_url: input.sourceUrl || null,
      payload: input.payload,
      status: "new",
      delivery_status: "pending",
    }),
  });
  const rows = (await response.json()) as Array<{ id?: string }>;
  const id = rows[0]?.id;
  if (!id) throw new Error("Submission was stored without a record ID.");
  return id;
}

async function updateDelivery(
  id: string,
  values: {
    delivery_status: "sent" | "failed";
    delivery_provider: string;
    delivery_error?: string | null;
    delivered_at?: string | null;
  },
) {
  await supabaseRequest(
    `/rest/v1/toughtorq_web_submissions?id=eq.${encodeURIComponent(id)}`,
    {
      method: "PATCH",
      headers: { Prefer: "return=minimal" },
      body: JSON.stringify({ ...values, updated_at: new Date().toISOString() }),
    },
  );
}

async function microsoftToken() {
  const tenant = env("MICROSOFT_TENANT_ID");
  const response = await fetch(
    `https://login.microsoftonline.com/${encodeURIComponent(tenant)}/oauth2/v2.0/token`,
    {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: env("MICROSOFT_GRAPH_CLIENT_ID"),
        client_secret: env("MICROSOFT_GRAPH_CLIENT_SECRET"),
        scope: "https://graph.microsoft.com/.default",
        grant_type: "client_credentials",
      }),
      cache: "no-store",
    },
  );
  const payload = (await response.json().catch(() => ({}))) as {
    access_token?: string;
    error_description?: string;
    error?: string;
  };
  if (!response.ok || !payload.access_token) {
    throw new Error(
      `Microsoft token request failed (${response.status}): ${payload.error_description || payload.error || "unknown error"}`,
    );
  }
  return payload.access_token;
}

function emailBody(input: {
  formType: FormType;
  contactName: string;
  companyName: string;
  email: string;
  phone: string;
  sourceUrl: string;
  payload: Record<string, string>;
  submissionId: string;
}) {
  const details = Object.entries(input.payload)
    .filter(([key]) => key !== "form_type")
    .map(([key, val]) => `${key}: ${val || "—"}`)
    .join("\n");

  return [
    SUBJECTS[input.formType],
    "",
    `Submission ID: ${input.submissionId}`,
    `Received: ${new Date().toISOString()}`,
    `Source: ${input.sourceUrl || "ToughTorq.com"}`,
    "",
    `Name: ${input.contactName || "—"}`,
    `Company: ${input.companyName || "—"}`,
    `Email: ${input.email}`,
    `Phone: ${input.phone || "—"}`,
    "",
    "Submitted details:",
    details || "No additional fields.",
    "",
    "This submission was saved to the JAM Torque Supabase database before this notification was sent.",
  ].join("\n");
}

async function sendNotification(input: {
  formType: FormType;
  contactName: string;
  companyName: string;
  email: string;
  phone: string;
  sourceUrl: string;
  payload: Record<string, string>;
  submissionId: string;
}) {
  const token = await microsoftToken();
  const sender = env("TOUGHTORQ_FORM_SENDER");
  const recipient = env("TOUGHTORQ_FORM_RECIPIENT");
  const response = await fetch(
    `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(sender)}/sendMail`,
    {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        message: {
          subject: SUBJECTS[input.formType],
          body: { contentType: "Text", content: emailBody(input) },
          toRecipients: [{ emailAddress: { address: recipient } }],
          replyTo: [{ emailAddress: { address: input.email, name: input.contactName || undefined } }],
        },
        saveToSentItems: true,
      }),
      cache: "no-store",
    },
  );
  if (!response.ok) {
    const detail = (await response.text().catch(() => "")).slice(0, 500);
    throw new Error(`Microsoft mail send failed (${response.status}): ${detail}`);
  }
}

export async function POST(request: NextRequest) {
  try {
    const origin = request.headers.get("origin");
    if (origin && new URL(origin).host !== request.nextUrl.host) {
      return new NextResponse("Invalid form origin.", { status: 403 });
    }

    const form = await request.formData();
    if (value(form, ["_honey"], 500)) {
      return NextResponse.redirect(new URL("/thank-you", request.url), 303);
    }

    const rawType = value(form, ["form_type"], 80);
    if (!ALLOWED_FORM_TYPES.has(rawType as FormType)) {
      return new NextResponse("Unknown form type.", { status: 400 });
    }
    const formType = rawType as FormType;

    const first = value(form, ["First Name"], 120);
    const last = value(form, ["Last Name"], 120);
    const contactName =
      value(form, ["name", "primary_contact_name"], 240) ||
      [first, last].filter(Boolean).join(" ");

    const companyName = value(form, ["company", "company_name", "Company"], 240);
    const email = value(form, ["email", "Email"], 254).toLowerCase();
    const phone = value(form, ["phone", "Phone"], 100);
    if (!validEmail(email)) {
      return new NextResponse("Please provide a valid email address.", { status: 400 });
    }

    const payload = safePayload(form);
    const sourceUrl = (request.headers.get("referer") || "").slice(0, 1000);
    const orgId = await organizationId();
    const submissionId = await saveSubmission({
      organizationId: orgId,
      formType,
      contactName,
      companyName,
      email,
      phone,
      sourceUrl,
      payload,
    });

    try {
      await sendNotification({
        formType,
        contactName,
        companyName,
        email,
        phone,
        sourceUrl,
        payload,
        submissionId,
      });
      await updateDelivery(submissionId, {
        delivery_status: "sent",
        delivery_provider: "microsoft_graph",
        delivery_error: null,
        delivered_at: new Date().toISOString(),
      });
    } catch (error) {
      const reason = error instanceof Error ? error.message : "Notification failed.";
      try {
        await updateDelivery(submissionId, {
          delivery_status: "failed",
          delivery_provider: "microsoft_graph",
          delivery_error: reason.slice(0, 1000),
          delivered_at: null,
        });
      } catch {
        // The submission itself is already durable. Do not turn a notification
        // audit failure into a false "submission lost" message for the visitor.
      }
    }

    return NextResponse.redirect(new URL("/thank-you", request.url), 303);
  } catch (error) {
    console.error(
      "ToughTorq form submission failed before durable capture:",
      error instanceof Error ? error.message : "Unknown error",
    );
    return NextResponse.redirect(new URL("/submission-error", request.url), 303);
  }
}
