"use client";

import { useId, useState } from "react";
import { site2026 } from "@/content/siteContent";
import styles from "./Webinar.module.css";

// Waiting-state form (D-343, D-436). Sends the address to /api/webinar, which adds it to the
// Resend webinar segment (Camden 11/23/2026 11:40 AM, "Yes, use Resend").
export default function WebinarSignup() {
  const w = site2026.webinarPage.waiting;
  const id = useId();
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  if (state === "sent") {
    return (
      <p className={styles.confirm} role="status">
        {w.confirmation}
      </p>
    );
  }

  return (
    <form
      className={styles.form}
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        setState("sending");
        try {
          const res = await fetch("/api/webinar", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: data.get("email"), company: data.get("company") }),
          });
          setState(res.ok ? "sent" : "error");
        } catch {
          setState("error");
        }
      }}
    >
      <p className={styles.status}>{w.status}</p>
      <p className={styles.formLine}>{w.line}</p>
      <div className={styles.row}>
        <label className="sr-only" htmlFor={`${id}-email`}>
          {w.emailLabel}
        </label>
        <input id={`${id}-email`} name="email" type="email" required autoComplete="email" placeholder={w.emailLabel} className={styles.input} />
        {/* Honeypot: hidden from people, filled by bots. */}
        <input name="company" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: "1px", height: "1px" }} />
        <button type="submit" className={styles.button} disabled={state === "sending"}>
          {w.button}
        </button>
      </div>
      {state === "error" && (
        <p className={styles.formLine} role="alert">
          {w.error}
        </p>
      )}
    </form>
  );
}
