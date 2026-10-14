"use client";

import { REOPEN_EVENT } from "@/components/site/Consent";
import { site2026 } from "@/content/siteContent";

// Footer control that reopens the analytics choice.
export default function ConsentSettingsLink() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(REOPEN_EVENT))}
      className="hover:!text-[var(--text-soft)] transition-colors duration-150"
      style={{ background: "none", border: 0, padding: 0, color: "var(--text-muted)", fontSize: "15px", fontFamily: "inherit" }}
    >
      {site2026.analyticsConsent.settings}
    </button>
  );
}
