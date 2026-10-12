import type { Metadata } from "next";
import FirstLightHero from "@/components/sections/FirstLightHero";
import TwoTone from "@/components/site/TwoTone";
import { site2026 } from "@/content/siteContent";

// Private design preview. Not linked, not indexed, not in the sitemap.
export const metadata: Metadata = {
  title: "Hero Preview — Pallume",
};

export default function HeroPreviewPage() {
  const { hero, opener } = site2026;

  return (
    <main>
      <FirstLightHero wordmark={hero.wordmark} imageAlt={hero.imageAlt} />
      <section className="pl-section" style={{ paddingTop: "48px" }}>
        <div className="pl-container">
          <div className="pl-reading">
            <TwoTone lines={opener.headline} />
          </div>
        </div>
      </section>
    </main>
  );
}
