import { site2026 } from "@/content/siteContent";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import PageHeader from "@/components/site/PageHeader";
import TwoTone from "@/components/site/TwoTone";
import Testimonials from "@/components/site/Testimonials";
import { pageMeta, breadcrumb, JsonLd } from "@/lib/metadata";

// The header lines below predate site2026 and are kept as they were (May 2026).
export const metadata = pageMeta({
  title: "Client Reviews — Pallume",
  description: site2026.meta.description,
  path: "/reviews",
});

export default function ReviewsPage() {
  const { consulting } = site2026;

  return (
    <>
      <JsonLd data={breadcrumb("Reviews", "/reviews")} />
      <Nav />
      <main>
        <PageHeader>
          <h1 className="pl-h2" style={{ margin: 0 }}>
            In their own words.
          </h1>
          <p className="pl-body" style={{ margin: "32px 0 0" }}>
            Unedited. These are real clients describing what changed and why.
          </p>
        </PageHeader>

        <section className="pl-section" style={{ paddingTop: "64px" }}>
          <Testimonials full />
        </section>

        <section className="pl-section" style={{ background: "var(--night-raised)" }}>
          <div className="pl-container">
            <div className="pl-reading">
              <TwoTone lines={consulting.headline} />
            </div>
            <a href={consulting.ctaHref} className="pl-button" style={{ marginTop: "48px" }}>
              {consulting.cta}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
