import type { Metadata } from "next";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Btn from "@/components/ui/Btn";
import { testimonials } from "@/content/siteContent";

export const metadata: Metadata = {
  title: "Client Reviews — Pallume",
  description:
    "Read what Pallume clients say about the AI accountability system — in their own words, unedited.",
  alternates: {
    canonical: "https://pallume.com/reviews",
  },
  openGraph: {
    title: "Client Reviews — Pallume",
    description:
      "Read what Pallume clients say about the AI accountability system — in their own words, unedited.",
    url: "https://pallume.com/reviews",
    siteName: "Pallume",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pallume — AI Execution Coaching",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Reviews — Pallume",
    description:
      "Read what Pallume clients say about the AI accountability system — in their own words, unedited.",
    images: ["/images/og-image.png"],
  },
};

const reviewsBreadcrumb = {
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
      name: "Reviews",
      item: "https://pallume.com/reviews",
    },
  ],
};

export default function ReviewsPage() {
  const activeReviews = testimonials.items.filter((item) => item.name && item.paragraphs.length > 0);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsBreadcrumb) }}
      />

      <main style={{ paddingTop: "64px" }}>
        <Nav />

        {/* ── Header ─────────────────────────────────────────────── */}
        <section
          style={{
            background: "#0F1B2D",
            padding: "80px 24px 64px",
          }}
        >
          <div className="max-w-site mx-auto w-full">
            <p
              className="font-body font-semibold text-primary uppercase tracking-widest mb-4"
              style={{ fontSize: "11px", letterSpacing: "0.14em" }}
            >
              {testimonials.label}
            </p>
            <h1
              className="font-heading font-bold text-text-main"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                maxWidth: "720px",
                textShadow: "0 2px 20px rgba(0,0,0,0.5)",
              }}
            >
              In their own words.
            </h1>
            <p
              className="font-body"
              style={{
                fontSize: "16px",
                lineHeight: 1.75,
                color: "#B0B8C4",
                marginTop: "16px",
                maxWidth: "560px",
              }}
            >
              Unedited. These are real clients describing what changed and why.
            </p>
          </div>
        </section>

        {/* ── Reviews ────────────────────────────────────────────── */}
        <SectionWrapper variant="light" style={{ paddingTop: "48px", paddingBottom: "64px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "48px",
              maxWidth: "760px",
            }}
          >
            {activeReviews.map((item, i) => (
              <article
                key={i}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E5E1D8",
                  borderRadius: "12px",
                  padding: "40px 40px 32px",
                  position: "relative",
                }}
              >
                {/* Gold accent bar */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "40px",
                    width: "32px",
                    height: "3px",
                    background: "#C89B3C",
                    borderRadius: "0 0 2px 2px",
                  }}
                />

                {/* Review body */}
                <div style={{ marginTop: "8px" }}>
                  {item.paragraphs.map((para, j) => (
                    <p
                      key={j}
                      className="font-body"
                      style={{
                        fontSize: "17px",
                        lineHeight: 1.8,
                        color: "#6B7280",
                        marginBottom: j < item.paragraphs.length - 1 ? "20px" : "0",
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>

                {/* Attribution */}
                <footer
                  style={{
                    marginTop: "28px",
                    paddingTop: "20px",
                    borderTop: "1px solid #E5E1D8",
                  }}
                >
                  <p
                    className="font-body font-semibold"
                    style={{ fontSize: "15px", color: "#1A1A1A" }}
                  >
                    {item.name}
                  </p>
                  {item.title && (
                    <p
                      className="font-body"
                      style={{ fontSize: "13px", color: "#6B7280", marginTop: "2px" }}
                    >
                      {item.title}
                    </p>
                  )}
                </footer>
              </article>
            ))}
          </div>
        </SectionWrapper>

        {/* ── Bottom CTA ─────────────────────────────────────────── */}
        <SectionWrapper
          style={{
            background:
              "radial-gradient(ellipse at 30% 80%, rgba(200,155,60,0.05) 0%, transparent 55%), #0F1B2D",
          }}
        >
          <div style={{ maxWidth: "560px" }}>
            <p
              className="font-body font-semibold text-primary uppercase tracking-widest mb-4"
              style={{ fontSize: "11px", letterSpacing: "0.14em" }}
            >
              GET STARTED
            </p>
            <h2
              className="font-heading font-bold text-text-main mb-4"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Find out which path is yours.
            </h2>
            <p
              className="font-body text-text-soft mb-8"
              style={{ fontSize: "16px", lineHeight: 1.8 }}
            >
              Nine questions. 5 minutes. If it&apos;s a fit, we&apos;ll talk.
            </p>
            <Btn as="a" href="/apply" size="lg">
              See If You Qualify
            </Btn>
          </div>
        </SectionWrapper>

        <Footer />
      </main>
    </>
  );
}
