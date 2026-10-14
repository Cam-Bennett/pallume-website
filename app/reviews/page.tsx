import { site2026 } from "@/content/siteContent";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import PageHeader from "@/components/site/PageHeader";
import Testimonials from "@/components/site/Testimonials";
import { pageMeta, breadcrumb, JsonLd } from "@/lib/metadata";

export const metadata = pageMeta({ ...site2026.reviewsPage.meta, path: "/reviews" });

export default function ReviewsPage() {
  return (
    <>
      <JsonLd data={breadcrumb("Reviews", "/reviews")} />
      <Nav />
      <main>
        <PageHeader>
          <h1 className="pl-h2" style={{ margin: 0 }}>
            {site2026.reviewsPage.headline}
          </h1>
          <p className="pl-body" style={{ margin: "32px 0 0" }}>
            {site2026.reviewsPage.lead}
          </p>
        </PageHeader>

        <section className="pl-section" style={{ paddingTop: "64px" }}>
          <Testimonials full />
        </section>

      </main>
      <Footer />
    </>
  );
}
