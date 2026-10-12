import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Consulting page contact form. Fixed recipient, plain-text body, length caps,
// and a honeypot: it can only ever send one kind of note to one inbox.
const TO = process.env.CONTACT_TO ?? "camden@pallume.com";
const FROM = process.env.CONTACT_FROM ?? "Pallume Website <onboarding@resend.dev>";
const EMAIL = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.replace(/[\r\n]+/g, " ").trim().slice(0, max) : "";
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad request" }, { status: 400 });
  }

  // Bots fill the hidden field; accept silently and send nothing.
  if (typeof body.company === "string" && body.company.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const message = typeof body.message === "string" ? body.message.trim().slice(0, 5000) : "";

  if (!name || !EMAIL.test(email) || message.length < 2) {
    return NextResponse.json({ error: "missing fields" }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("contact: RESEND_API_KEY is not set");
    return NextResponse.json({ error: "not configured" }, { status: 503 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: email,
    subject: `Consulting inquiry from ${name}`,
    text: `From: ${name} <${email}>\nPage: pallume.com/consulting\n\n${message}`,
  });

  if (error) {
    console.error("contact: send failed", error);
    return NextResponse.json({ error: "send failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
