"use client";

import { useEffect, useState } from "react";
import { site2026 } from "@/content/siteContent";
import { isLiveRoute } from "@/lib/routes";

type Props = {
  // Transparent over the homepage hero until the visitor scrolls (DESIGN.md §7).
  overHero?: boolean;
};

export default function Nav({ overHero = false }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const links = site2026.nav.links.filter((link) => isLiveRoute(link.href));

  useEffect(() => {
    if (!overHero) return;
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overHero]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = !overHero || scrolled || open;

  return (
    <nav
      aria-label="Main"
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: solid ? "rgba(10,17,32,0.88)" : "transparent",
        backdropFilter: solid ? "blur(16px)" : "none",
        WebkitBackdropFilter: solid ? "blur(16px)" : "none",
        borderBottom: `1px solid ${solid ? "var(--line)" : "transparent"}`,
        transition: "background-color 200ms ease, border-color 200ms ease",
      }}
    >
      <div
        className="pl-container flex items-center justify-between"
        style={{ height: "72px", padding: "0 16px" }}
      >
        <a
          href="/"
          className="font-serif"
          // Over the hero the hero's own wordmark leads; the nav's appears once it's gone.
          style={{
            fontSize: "28px",
            fontWeight: 600,
            color: "var(--text)",
            textDecoration: "none",
            lineHeight: 1,
            opacity: solid ? 1 : 0,
            transition: "opacity 200ms ease",
          }}
        >
          {site2026.hero.wordmark}
        </a>

        <div className="hidden md:flex items-center" style={{ gap: "32px" }}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{ fontSize: "15px", fontWeight: 500, color: "var(--text-soft)", textDecoration: "none" }}
              className="hover:!text-[var(--text)] transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
          <a href={site2026.nav.ctaHref} className="pl-button pl-button-sm">
            {site2026.nav.cta}
          </a>
        </div>

        <button
          type="button"
          className="md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          style={{
            height: "40px",
            padding: "0 16px",
            borderRadius: "8px",
            border: "1px solid var(--line)",
            background: "transparent",
            color: "var(--text)",
            fontSize: "15px",
            fontWeight: 500,
          }}
        >
          Menu
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="md:hidden"
          style={{
            padding: "8px 16px 32px",
            borderTop: "1px solid var(--line)",
            background: "var(--night)",
            height: "calc(100dvh - 72px)",
            overflowY: "auto",
          }}
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {links.map((link) => (
              <li key={link.href} style={{ borderBottom: "1px solid var(--line)" }}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-serif"
                  style={{ display: "block", padding: "16px 0", fontSize: "28px", color: "var(--text)", textDecoration: "none" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={site2026.nav.ctaHref} className="pl-button" style={{ marginTop: "24px", width: "100%" }}>
            {site2026.nav.cta}
          </a>
        </div>
      )}
    </nav>
  );
}
