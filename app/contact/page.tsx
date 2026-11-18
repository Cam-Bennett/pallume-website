import { site2026 } from "@/content/siteContent";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import PageHeader from "@/components/site/PageHeader";
import Paragraphs from "@/components/site/Paragraphs";
import ContactForm from "@/components/site/ContactForm";
import { WEBINAR_ROUTE } from "@/lib/routes";
import { pageMeta, breadcrumb, JsonLd } from "@/lib/metadata";

export const metadata = pageMeta({ ...site2026.contactPage.meta, path: "/contact" });

// The contact page, its own page since D-426 (11/17/2026); the old /contact
// redirect to /consulting is gone.
export default function ContactPage() {
  const { contactPage } = site2026;

  return (
    <>
      <JsonLd data={breadcrumb(contactPage.headline, "/contact")} />
      <Nav />
      <main>
        <PageHeader>
          <h1 className="pl-h2" style={{ margin: 0 }}>
            {contactPage.headline}
          </h1>
          <Paragraphs items={contactPage.paragraphs} first="32px" />
        </PageHeader>

        <section id="contact" className="pl-section" style={{ paddingTop: "64px" }}>
          <div className="pl-container">
            <ContactForm />

            <div
              className="flex flex-wrap items-center"
              style={{ gap: "16px 24px", marginTop: "64px", paddingTop: "32px", borderTop: "1px solid var(--line)", maxWidth: "680px" }}
            >
              <p className="pl-body" style={{ margin: 0 }}>
                {contactPage.webinarPrompt}
              </p>
              <a href={WEBINAR_ROUTE} className="pl-button">
                {contactPage.webinarButton}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
