import { footer } from "@/content/siteContent";

export default function Footer() {
  return (
    <footer
      className="px-6 py-10"
      style={{
        background: "#0F1B2D",
        borderTop: "1px solid rgba(200,155,60,0.15)",
      }}
    >
      <div className="max-w-site mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <a
            href="/"
            className="font-serif font-bold text-textLight"
            style={{ fontSize: "18px", textDecoration: "none" }}
          >
            {footer.logo}
          </a>

          {/* Nav links + email as a single right-aligned group */}
          <div className="flex flex-wrap items-center gap-6">
            {footer.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-textMuted hover:text-textLightMuted transition-colors duration-150"
                style={{ fontSize: "13px", textDecoration: "none" }}
              >
                {link.label}
              </a>
            ))}

            {/* Divider */}
            <span
              aria-hidden="true"
              style={{ color: "rgba(200,155,60,0.25)", fontSize: "13px" }}
            >
              |
            </span>

            {/* Email — visually distinct from nav links */}
            <a
              href={`mailto:${footer.email}`}
              className="font-sans hover:text-textLightMuted transition-colors duration-150"
              style={{
                fontSize: "13px",
                textDecoration: "none",
                color: "#C89B3C",
              }}
            >
              {footer.email}
            </a>
          </div>

          <span
            className="font-sans text-textMuted"
            style={{ fontSize: "12px", opacity: 0.7 }}
          >
            {footer.location}
          </span>
        </div>
      </div>
    </footer>
  );
}
