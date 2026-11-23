import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// The webinar sign-up list (D-391, D-436; Resend chosen by Camden 11/23/2026 11:40 AM, "Yes, use Resend").
// It does one thing: add one email address to one Resend segment. No name, no other field, no email sent here.
// Needs RESEND_API_KEY (already set for the contact form) and RESEND_WEBINAR_SEGMENT_ID (the segment's id).
const EMAIL = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad request" }, { status: 400 });
  }

  // Bots fill the hidden field; accept silently and store nothing.
  if (typeof body.company === "string" && body.company.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase().slice(0, 200) : "";
  if (!EMAIL.test(email)) {
    return NextResponse.json({ error: "bad email" }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  const segment = process.env.RESEND_WEBINAR_SEGMENT_ID;
  if (!key || !segment) {
    console.error("webinar: RESEND_API_KEY or RESEND_WEBINAR_SEGMENT_ID is not set");
    return NextResponse.json({ error: "not configured" }, { status: 503 });
  }

  const resend = new Resend(key);
  const { error } = await resend.contacts.create({ email, segments: [{ id: segment }] });

  // Someone who signs up twice is already on the list: tell them it worked.
  if (error && !/already exists/i.test(error.message ?? "")) {
    console.error("webinar: contact create failed", error.name);
    return NextResponse.json({ error: "save failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
