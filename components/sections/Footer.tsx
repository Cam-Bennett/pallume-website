import { site2026 } from "@/content/siteContent";

// Voice Signature rule 8: the tagline closes every page.
export default function Footer() {
  const { footer } = site2026;

  return (
    <footer style={{ background: "var(--night)", borderTop: "1px solid var(--line)", padding: "64px 16px 48px" }}>
      <div className="pl-container">
        <p className="font-serif" style={{ fontSize: "clamp(28px, 4vw, 40px)", lineHeight: 1.15, color: "var(--text)", margin: 0 }}>
          {footer.tagline}
        </p>

        <div
          className="flex flex-wrap items-center"
          style={{ gap: "16px 32px", marginTop: "40px", fontSize: "15px" }}
        >
          <a href={`mailto:${footer.contact}`} className="pl-link">
            {footer.contact}
          </a>
          {footer.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{ color: "var(--text-muted)", textDecoration: "none" }}
              className="hover:!text-[var(--text-soft)] transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
