"use client";

import { useEffect } from "react";

export function TallyTracker() {
  useEffect(() => {
    function handleMessage(e: MessageEvent) {
      if (e.data?.type === "TallyFormSubmitted") {
        if (typeof (window as { gtag?: (...args: unknown[]) => void }).gtag === "function") {
          (window as { gtag?: (...args: unknown[]) => void }).gtag!("event", "generate_lead", {
            event_category: "form",
            event_label: "Pallume Application",
          });
        }
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return null;
}
