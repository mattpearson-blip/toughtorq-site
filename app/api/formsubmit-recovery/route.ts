import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  try {
    const response = await fetch(
      "https://formsubmit.co/api/get-apikey/support%40toughtorq.com",
      { method: "GET", cache: "no-store", signal: AbortSignal.timeout(15000) },
    );
    const text = await response.text();
    return NextResponse.json({
      ok: response.ok,
      status: response.status,
      response: text.slice(0, 1000),
    });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : "request_failed" },
      { status: 502 },
    );
  }
}
