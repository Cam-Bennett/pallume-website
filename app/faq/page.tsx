import { site2026 } from "@/content/siteContent";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import PageHeader from "@/components/site/PageHeader";
import { FAQSchema } from "@/components/ui/FAQSchema";
import { pageMeta, breadcrumb, JsonLd } from "@/lib/metadata";

const faqLabel = site2026.nav.links.find((l) => l.href === "/faq")?.label ?? "FAQ";

export const metadata = pageMeta({ ...site2026.faqPage.meta, path: "/faq" });

export default function FAQPage() {
  const { faq } = site2026;

  return (
    <>
      <FAQSchema items={faq.map((item) => ({ question: item.q, answer: item.a }))} />
      <JsonLd data={breadcrumb(faqLabel, "/faq")} />
      <Nav />
      <main>
        <PageHeader>
          <h1 className="pl-h2" style={{ margin: 0 }}>
            {site2026.faqPage.headline}
          </h1>
        </PageHeader>

        <section className="pl-section" style={{ paddingTop: "64px" }}>
          <div className="pl-container">
            <div style={{ maxWidth: "800px" }}>
              {faq.map((item) => (
                <details key={item.q} className="pl-faq" style={{ borderTop: "1px solid var(--line)" }}>
                  <summary
                    className="font-serif"
                    style={{ padding: "24px 40px 24px 0", fontSize: "26px", lineHeight: 1.25, color: "var(--text)", position: "relative" }}
                  >
                    {item.q}
                  </summary>
                  <p className="pl-body" style={{ margin: "0 0 32px" }}>
                    {item.a}
                  </p>
                </details>
              ))}
              <hr className="pl-rule" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
