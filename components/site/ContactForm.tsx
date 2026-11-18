"use client";

import { useState, type FormEvent } from "react";
import { site2026 } from "@/content/siteContent";

// The site's one contact form (D-426): name, email, purpose, message; Send.
// Words live in site2026.contactForm. Pass `purpose` to preset it (the
// consulting page sends "Consulting"); the selector is then left off.
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
type Purpose = (typeof site2026.contactForm.purposes)[number];

export default function ContactForm({ purpose }: { purpose?: Purpose }) {
  const [status, setStatus] = useState<Status>("idle");
  const words = site2026.contactForm;

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
        {words.sent}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col" style={{ gap: "24px", maxWidth: "680px" }}>
      <label className="flex flex-col pl-label" style={{ gap: "8px", color: "var(--text-soft)" }}>
        {words.nameLabel}
        <input name="name" required maxLength={120} autoComplete="name" style={fieldStyle} />
      </label>
      <label className="flex flex-col pl-label" style={{ gap: "8px", color: "var(--text-soft)" }}>
        {words.emailLabel}
        <input name="email" type="email" required maxLength={200} autoComplete="email" style={fieldStyle} />
      </label>
      {purpose ? (
        <input type="hidden" name="purpose" value={purpose} />
      ) : (
        <label className="flex flex-col pl-label" style={{ gap: "8px", color: "var(--text-soft)" }}>
          {words.purposeLabel}
          {/* Required, no default, so every message arrives sorted. */}
          <select name="purpose" required defaultValue="" style={fieldStyle}>
            <option value="" disabled hidden></option>
            {words.purposes.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </label>
      )}
      <label className="flex flex-col pl-label" style={{ gap: "8px", color: "var(--text-soft)" }}>
        {words.messageLabel}
        <textarea name="message" required maxLength={5000} rows={6} style={{ ...fieldStyle, resize: "vertical" }} />
      </label>
      {/* Honeypot: hidden from people, filled by bots. */}
      <input name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px" }} />
      <div className="flex flex-wrap items-center" style={{ gap: "16px 24px" }}>
        <button type="submit" className="pl-button" disabled={status === "sending"} style={{ border: 0 }}>
          {words.send}
        </button>
        {status === "error" && (
          <p className="pl-label" role="alert" style={{ margin: 0, color: "var(--text-soft)" }}>
            {words.error}
          </p>
        )}
      </div>
    </form>
  );
}
