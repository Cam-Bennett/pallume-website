"use client";

import { useState, type FormEvent } from "react";
import { site2026 } from "@/content/siteContent";

// UI strings below are not in site2026 yet; Productization should move them there.
// Field names follow the Site and Offer Plan §5.2: name, email, message; Send.
const fieldStyle = {
  width: "100%",
  background: "var(--night-raised)",
  border: "1px solid var(--line)",
  borderRadius: "8px",
  padding: "12px 16px",
  color: "var(--text)",
  fontSize: "17px",
  fontFamily: "inherit",
} as const;

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const email = site2026.footer.contact;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p className="pl-body" role="status" style={{ margin: 0, color: "var(--text)" }}>
        Sent. Thank you.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col" style={{ gap: "24px", maxWidth: "680px" }}>
      <label className="flex flex-col pl-label" style={{ gap: "8px", color: "var(--text-soft)" }}>
        Name
        <input name="name" required maxLength={120} autoComplete="name" style={fieldStyle} />
      </label>
      <label className="flex flex-col pl-label" style={{ gap: "8px", color: "var(--text-soft)" }}>
        Email
        <input name="email" type="email" required maxLength={200} autoComplete="email" style={fieldStyle} />
      </label>
      <label className="flex flex-col pl-label" style={{ gap: "8px", color: "var(--text-soft)" }}>
        Message
        <textarea name="message" required maxLength={5000} rows={6} style={{ ...fieldStyle, resize: "vertical" }} />
      </label>
      {/* Honeypot: hidden from people, filled by bots. */}
      <input name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px" }} />
      <div className="flex flex-wrap items-center" style={{ gap: "16px 24px" }}>
        <button type="submit" className="pl-button" disabled={status === "sending"} style={{ border: 0 }}>
          Send
        </button>
        {status === "error" && (
          <p className="pl-label" role="alert" style={{ margin: 0, color: "var(--text-soft)" }}>
            That didn&apos;t send. Email <a href={`mailto:${email}`} className="pl-link">{email}</a> instead.
          </p>
        )}
      </div>
    </form>
  );
}
