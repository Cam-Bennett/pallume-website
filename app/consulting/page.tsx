import { site2026 } from "@/content/siteContent";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import ConsultingSection from "@/components/site/ConsultingSection";
import ContactForm from "@/components/site/ContactForm";
import { pageMeta, breadcrumb, JsonLd } from "@/lib/metadata";

export const metadata = pageMeta({ ...site2026.consultingPage.meta, path: "/consulting" });

const consultingLabel = site2026.nav.links.find((l) => l.href === "/consulting")?.label ?? "Consulting";

// The site's one contact form lives here (Camden, 10/12/2026).
export default function ConsultingPage() {
  return (
    <>
      <JsonLd data={breadcrumb(consultingLabel, "/consulting")} />
      <Nav />
      <main>
        <section className="pl-section" style={{ paddingTop: "176px" }}>
          <ConsultingSection headingLevel="h1" />
        </section>
        <section id="contact" className="pl-section" style={{ background: "var(--night-raised)" }}>
          <div className="pl-container">
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
