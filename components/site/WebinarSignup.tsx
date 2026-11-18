"use client";

import { useState } from "react";
import { site2026 } from "@/content/siteContent";
import styles from "./Webinar.module.css";

// Waiting-state form (D-343, D-436). NOT WIRED: no email service holds the list yet, so this
// preview only shows the confirmation and stores nothing. Wire it before this page goes live.
export default function WebinarSignup() {
  const w = site2026.webinarPage.waiting;
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <p className={styles.confirm} role="status">
        {w.confirmation}
      </p>
    );
  }

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <p className={styles.status}>{w.status}</p>
      <p className={styles.formLine}>{w.line}</p>
      <div className={styles.row}>
        <label className="sr-only" htmlFor="webinar-email">
          {w.emailLabel}
        </label>
        <input id="webinar-email" type="email" required autoComplete="email" placeholder={w.emailLabel} className={styles.input} />
        <button type="submit" className={styles.button}>
          {w.button}
        </button>
      </div>
    </form>
  );
}
