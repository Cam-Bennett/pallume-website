import Script from "next/script";
import { site2026 } from "@/content/siteContent";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import PageHeader from "@/components/site/PageHeader";
import TwoTone from "@/components/site/TwoTone";
import { TallyTracker } from "@/components/ui/TallyTracker";
import { pageMeta, breadcrumb, JsonLd } from "@/lib/metadata";

export const metadata = pageMeta({
  title: `${site2026.nav.cta} — Pallume`,
  description: site2026.consultingPage.meta.description,
  path: "/apply",
});

export default function ApplyPage() {
  const { consulting, consultingPage } = site2026;

  return (
    <>
      <JsonLd data={breadcrumb(site2026.nav.cta, "/apply")} />
      <TallyTracker />
      <Script async src="https://tally.so/widgets/embed.js" />
      <Nav />
      <main>
        <PageHeader>
          <TwoTone lines={consulting.headline} as="h1" />
          <p className="pl-body" style={{ margin: "32px 0 0" }}>
            {consultingPage.applyNote}
          </p>
        </PageHeader>

        <section className="pl-section" style={{ paddingTop: "64px" }}>
          <div className="pl-container">
            {/* Tally form Gxop2o lives in Camden's Tally account; the embed is unchanged.
                The form still uses Tally's light theme (dark text), so it sits on a light
                panel to stay readable. Drop the panel once the form is set to a dark theme. */}
            <div style={{ maxWidth: "720px", background: "var(--text)", borderRadius: "8px", padding: "24px 16px" }}>
              <iframe
                src="https://tally.so/embed/Gxop2o?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="800"
                style={{ border: 0, minHeight: "800px" }}
                title="Pallume Client Application"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
