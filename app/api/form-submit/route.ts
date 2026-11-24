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
    if (Object.keys(payload).length >= 80) break;
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

export async function POST(request: NextRequest) {
  try {
    const origin = request.headers.get("origin");
    if (origin && new URL(origin).host !== request.nextUrl.host) {
      return new NextResponse("Invalid form origin.", { status: 403 });
    }

    const form = await request.formData();

    // Honeypot spam submissions are discarded without telling the bot.
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

    const relayUrl = env("JAM_TOUGHTORQ_FORM_RELAY_URL");
    const relaySecret = env("TOUGHTORQ_FORM_RELAY_SECRET");
    const sourceUrl = (request.headers.get("referer") || request.nextUrl.origin).slice(0, 1000);

    const response = await fetch(relayUrl, {
      method: "POST",
      headers: {
        authorization: `Bearer ${relaySecret}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        formType,
        contactName,
        companyName,
        email,
        phone,
        sourceUrl,
        payload: safePayload(form),
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(15000),
    });

    const result = (await response.json().catch(() => ({}))) as {
      ok?: boolean;
      submissionId?: string;
    };

    if (!response.ok || !result.ok || !result.submissionId) {
      throw new Error(`JAM form relay did not confirm durable capture (${response.status}).`);
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


/** Preview-only end-to-end health check. Removed before production merge. */
export async function GET(request: NextRequest) {
  const expected = process.env.TOUGHTORQ_FORM_SMOKE_TOKEN?.trim() || "";
  const supplied = request.nextUrl.searchParams.get("token") || "";
  if (!expected || supplied !== expected) {
    return new NextResponse(null, { status: 404 });
  }

  try {
    const response = await fetch(env("JAM_TOUGHTORQ_FORM_RELAY_URL"), {
      method: "POST",
      headers: {
        authorization: `Bearer ${env("TOUGHTORQ_FORM_RELAY_SECRET")}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        formType: "contact",
        contactName: "ToughTorq Form Health Check",
        companyName: "Internal Test",
        email: "office@jamtorque.com",
        phone: "",
        sourceUrl: request.nextUrl.origin + "/api/form-submit?smoke=test",
        payload: {
          form_type: "contact",
          message: "Automated preview health check for durable ToughTorq form intake.",
          internal_test: "true",
        },
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(15000),
    });

    const result = (await response.json().catch(() => ({}))) as {
      ok?: boolean;
      submissionId?: string;
      deliveryStatus?: string;
    };

    return NextResponse.json(
      {
        ok: response.ok && result.ok === true,
        upstreamStatus: response.status,
        submissionId: result.submissionId || null,
        deliveryStatus: result.deliveryStatus || null,
      },
      { status: response.ok && result.ok ? 200 : 502 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : "Smoke test failed.",
      },
      { status: 502 },
    );
  }
}
