import Link from "next/link";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function NotFound() {
  return (
    <main style={{ paddingTop: "64px" }}>
      <Nav />
      <SectionWrapper
        style={{
          background:
            "radial-gradient(ellipse at 60% 0%, rgba(200,155,60,0.06) 0%, transparent 55%), #0F1B2D",
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: "560px" }}>
          <p
            className="font-body font-semibold text-primary uppercase tracking-widest mb-4"
            style={{ fontSize: "11px", letterSpacing: "0.14em" }}
          >
            404
          </p>
          <h1
            className="font-heading font-bold text-text-main mb-4"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Page not found.
          </h1>
          <p
            className="font-body text-text-soft mb-10"
            style={{ fontSize: "17px", lineHeight: 1.75 }}
          >
            This page doesn&apos;t exist or has moved.
          </p>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", alignItems: "center" }}>
            <Link
              href="/"
              className="font-body font-semibold"
              style={{
                fontSize: "15px",
                color: "#C89B3C",
                textDecoration: "none",
                borderBottom: "1px solid rgba(200,155,60,0.3)",
                paddingBottom: "2px",
              }}
            >
              Go home
            </Link>
            <Link
              href="/apply"
              className="font-body font-semibold"
              style={{
                fontSize: "15px",
                color: "#C89B3C",
                textDecoration: "none",
                borderBottom: "1px solid rgba(200,155,60,0.3)",
                paddingBottom: "2px",
              }}
            >
              Apply to work with Pallume
            </Link>
          </div>
        </div>
      </SectionWrapper>
      <Footer />
    </main>
  );
}
