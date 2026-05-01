import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Btn from "@/components/ui/Btn";
import { articles } from "@/content/articles";
import { theWork } from "@/content/siteContent";

export const metadata: Metadata = {
  title: "The Work — Pallume",
  description:
    "Articles on AI execution systems, why productivity tools fail, and how custom AI accountability coaching works for business owners.",
  alternates: {
    canonical: "https://pallume.com/the-work",
  },
  openGraph: {
    title: "The Work — Pallume",
    description:
      "Articles on AI execution systems, why productivity tools fail, and how custom AI accountability coaching works for business owners.",
    url: "https://pallume.com/the-work",
    siteName: "Pallume",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Work — Pallume",
    description:
      "Articles on AI execution systems, why productivity tools fail, and how custom AI accountability coaching works for business owners.",
  },
};

const theWorkBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://pallume.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "The Work",
      item: "https://pallume.com/the-work",
    },
  ],
};

export default function TheWorkPage() {
  return (
    <main style={{ paddingTop: "64px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(theWorkBreadcrumb) }}
      />
      <Nav />

      {/* ── Header ─────────────────────────────────────────────────── */}
      <SectionWrapper
        style={{
          background:
            "radial-gradient(ellipse at 60% 0%, rgba(200,155,60,0.06) 0%, transparent 55%), #0F1B2D",
        }}
      >
        <p
          className="font-body font-semibold text-primary uppercase tracking-widest mb-4"
          style={{ fontSize: "11px", letterSpacing: "0.14em" }}
        >
          THE WORK
        </p>
        <h1
          className="font-heading font-bold text-text-main"
          style={{
            fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            maxWidth: "680px",
          }}
        >
          How the system works — and why everything else didn&apos;t.
        </h1>
      </SectionWrapper>

      {/* ── Article list ───────────────────────────────────────────── */}
      <SectionWrapper variant="light">
        <div
          className="flex flex-col"
          style={{ maxWidth: "720px", gap: "0" }}
        >
          {articles.map((article, i) => (
            <Link
              key={article.slug}
              href={`/the-work/${article.slug}`}
              style={{ textDecoration: "none" }}
            >
              <article
                style={{
                  padding: "40px 0",
                  borderBottom:
                    i < articles.length - 1
                      ? "1px solid #E5E1D8"
                      : "none",
                  cursor: "pointer",
                }}
                className="group"
              >
                <h2
                  className="font-heading font-bold mb-3"
                  style={{
                    fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                    lineHeight: 1.2,
                    letterSpacing: "-0.01em",
                    color: "#1A1A1A",
                  }}
                >
                  {article.title}
                </h2>
                <p
                  className="font-body mb-4"
                  style={{ fontSize: "16px", lineHeight: 1.7, maxWidth: "580px", color: "#6B7280" }}
                >
                  {article.excerpt}
                </p>
                <span
                  className="font-body font-semibold text-primary"
                  style={{ fontSize: "14px", letterSpacing: "0.02em" }}
                >
                  Read →
                </span>
              </article>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Bottom CTA ─────────────────────────────────────────────── */}
      <SectionWrapper>
        <div style={{ maxWidth: "600px" }}>
          <p
            className="font-body font-semibold text-primary uppercase tracking-widest mb-6"
            style={{ fontSize: "11px", letterSpacing: "0.14em" }}
          >
            {theWork.cta.eyebrow}
          </p>
          <p
            className="font-body mb-8"
            style={{ fontSize: "17px", lineHeight: 1.8, color: "#6B7280" }}
          >
            {theWork.cta.body}
          </p>
          <Btn as="a" href={theWork.cta.buttonHref} size="lg">
            {theWork.cta.buttonLabel}
          </Btn>
        </div>
      </SectionWrapper>

      <Footer />
    </main>
  );
}
