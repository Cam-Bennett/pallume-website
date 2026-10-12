import type { Metadata } from "next";
import { Cormorant_Garamond, Hanken_Grotesk } from "next/font/google";
import FirstLightHero from "@/components/sections/FirstLightHero";
import { nav, hero, site2026 } from "@/content/siteContent";

// Private design preview. Not linked, not indexed, not in the sitemap.
export const metadata: Metadata = {
  title: "Hero Preview — Pallume",
  robots: { index: false, follow: false },
};

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400"], display: "swap" });
const hanken = Hanken_Grotesk({ subsets: ["latin"], weight: ["400"], display: "swap" });

export default function HeroPreviewPage() {
  // Two-tone headline preview: first sentence bright, second sentence muted.
  const [lineOne, ...rest] = hero.headline.split(". ");
  const lineTwo = rest.join(". ");

  return (
    <main style={{ background: "#0A1120", minHeight: "100vh" }}>
      <FirstLightHero wordmark={nav.logo} imageAlt={site2026.hero.imageAlt} wordmarkClassName={cormorant.className} />

      <section style={{ padding: "96px 24px 160px", background: "#0A1120" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h2
            className={cormorant.className}
            style={{
              fontSize: "clamp(36px, 5.5vw, 72px)",
              fontWeight: 400,
              lineHeight: 1.08,
              letterSpacing: "-0.01em",
              margin: 0,
            }}
          >
            <span style={{ color: "#F8F6F0" }}>{lineOne}.</span>{" "}
            <span style={{ color: "#6E7A8E" }}>{lineTwo}</span>
          </h2>
          <p
            className={hanken.className}
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#B0B8C4",
              maxWidth: "680px",
              margin: "32px 0 0",
            }}
          >
            {hero.subtitle}
          </p>
        </div>
      </section>
    </main>
  );
}
