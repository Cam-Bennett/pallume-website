import { site2026 } from "@/content/siteContent";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import ConsultingSection from "@/components/site/ConsultingSection";
import { pageMeta, breadcrumb, JsonLd } from "@/lib/metadata";

export const metadata = pageMeta({ ...site2026.consultingPage.meta, path: "/consulting" });

const consultingLabel = site2026.nav.links.find((l) => l.href === "/consulting")?.label ?? "Consulting";

export default function ConsultingPage() {
  return (
    <>
      <JsonLd data={breadcrumb(consultingLabel, "/consulting")} />
      <Nav />
      <main>
        <section className="pl-section" style={{ paddingTop: "176px" }}>
          <ConsultingSection headingLevel="h1" note={site2026.consultingPage.applyNote} />
        </section>
      </main>
      <Footer />
    </>
  );
}
