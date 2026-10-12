"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

// Google Analytics loads only after the visitor says yes. Nothing is set
// before that. A Global Privacy Control signal counts as no, with no banner.
// UI strings are not in site2026 yet; Productization should move them there.
const GA_ID = "G-RJNKS81J3G";
const KEY = "pallume-analytics-consent";
export const REOPEN_EVENT = "pallume:consent-reopen";

type Choice = "granted" | "denied" | null;

function readChoice(): Choice {
  try {
    const v = window.localStorage.getItem(KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

function saveChoice(v: Exclude<Choice, null>) {
  try {
    window.localStorage.setItem(KEY, v);
  } catch {
    // Storage blocked: the choice holds for this page view only.
  }
}

// Remove GA's cookies when a visitor withdraws consent.
function clearAnalyticsCookies() {
  const host = window.location.hostname;
  const domains = ["", host, `.${host}`, `.${host.replace(/^www\./, "")}`];
  document.cookie.split(";").forEach((c) => {
    const name = c.split("=")[0].trim();
    if (!name.startsWith("_ga")) return;
    domains.forEach((d) => {
      document.cookie = `${name}=; Max-Age=0; path=/${d ? `; domain=${d}` : ""}`;
    });
  });
}

export default function Consent() {
  const [choice, setChoice] = useState<Choice>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const gpc = (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true;
    const saved = readChoice();
    // Clear any GA cookies left from before this banner existed.
    if (saved !== "granted") clearAnalyticsCookies();
    if (saved) setChoice(saved);
    else if (gpc) setChoice("denied");
    else setOpen(true);

    const reopen = () => setOpen(true);
    window.addEventListener(REOPEN_EVENT, reopen);
    return () => window.removeEventListener(REOPEN_EVENT, reopen);
  }, []);

  function decide(next: "granted" | "denied") {
    const wasGranted = choice === "granted";
    saveChoice(next);
    setChoice(next);
    setOpen(false);
    if (next === "denied" && wasGranted) {
      clearAnalyticsCookies();
      window.location.reload(); // unloads the GA script already on the page
    }
  }

  const buttonStyle = {
    height: "40px",
    padding: "0 16px",
    borderRadius: "8px",
    border: "1px solid var(--line)",
    background: "transparent",
    color: "var(--text)",
    fontSize: "15px",
    fontWeight: 500,
  } as const;

  return (
    <>
      {choice === "granted" && <GoogleAnalytics gaId={GA_ID} />}
      {open && (
        <div
          role="dialog"
          aria-label="Analytics consent"
          style={{
            position: "fixed",
            left: "16px",
            right: "16px",
            bottom: "16px",
            zIndex: 60,
            maxWidth: "560px",
            marginLeft: "auto",
            background: "var(--night-raised)",
            border: "1px solid var(--line)",
            borderRadius: "8px",
            padding: "20px 24px",
          }}
        >
          <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.6, color: "var(--text-soft)" }}>
            May this site use Google Analytics to count visits? It sets cookies. Nothing loads unless you say yes.{" "}
            <a href="/privacy-policy" className="pl-link">
              Privacy
            </a>
          </p>
          <div className="flex flex-wrap" style={{ gap: "12px", marginTop: "16px" }}>
            <button type="button" style={buttonStyle} onClick={() => decide("granted")}>
              Allow
            </button>
            <button type="button" style={buttonStyle} onClick={() => decide("denied")}>
              No thanks
            </button>
          </div>
        </div>
      )}
    </>
  );
}
