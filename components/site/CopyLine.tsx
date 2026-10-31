"use client";

import { useState } from "react";

type Props = {
  text: string;
  copyLabel: string;
  copiedLabel: string;
};

// A line the reader copies into Claude. The control is a plain text link, not a
// button-styled call to action (CLAUDE.md: no call-to-action buttons).
export default function CopyLine({ text, copyLabel, copiedLabel }: Props) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      style={{
        marginTop: "24px",
        padding: "16px",
        background: "var(--night-raised)",
        border: "1px solid var(--line)",
        borderRadius: "8px",
      }}
    >
      <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.6, color: "var(--text)", userSelect: "all" }}>{text}</p>
      <button
        type="button"
        onClick={copy}
        className="pl-link"
        aria-live="polite"
        style={{ marginTop: "16px", background: "none", border: 0, padding: 0, fontSize: "16px", fontFamily: "inherit" }}
      >
        {copied ? copiedLabel : copyLabel}
      </button>
    </div>
  );
}
