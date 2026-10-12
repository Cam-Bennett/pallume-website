import { site2026 } from "@/content/siteContent";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import FirstLightHero from "@/components/sections/FirstLightHero";
import TwoTone from "@/components/site/TwoTone";
import Paragraphs from "@/components/site/Paragraphs";
import Testimonials from "@/components/site/Testimonials";
import Founder from "@/components/site/Founder";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({ ...site2026.meta, path: "" });

// The product leads, straight after the opener; consulting is a footnote to it
// (Camden, 10/12/2026). Both lines come from the site description until
// Productization gives them their own keys.
const [productLine, ...restOfDescription] = site2026.meta.description.split(/(?<=\.)\s+/);
const consultingFootnote = restOfDescription.join(" ");

export default function Home() {
  const { hero, opener, diagnosis, howItWorks, requirements, privacy, closing } = site2026;

  return (
    <>
      <Nav overHero />
      <main>
        <FirstLightHero wordmark={hero.wordmark} imageAlt={hero.imageAlt} />

        <section className="pl-section" style={{ paddingTop: "48px" }}>
          <div className="pl-container">
            <div className="pl-reading">
              <TwoTone lines={opener.headline} />
              <Paragraphs items={opener.paragraphs} />
            </div>
          </div>
        </section>

        <section className="pl-section" style={{ background: "var(--night-raised)" }}>
          <div className="pl-container">
            <div className="pl-reading">
              <h2 className="pl-h2" style={{ margin: 0, color: "var(--text)" }}>
                {productLine}
              </h2>
              <div style={{ marginTop: "48px" }}>
                <TwoTone lines={howItWorks.headline} as="h2" className="pl-h3" />
              </div>
            </div>
            <ol style={{ listStyle: "none", margin: "64px 0 0", padding: 0, maxWidth: "880px" }}>
              {howItWorks.steps.map((step, i) => (
                <li
                  key={step.name}
                  className="grid md:grid-cols-[64px_1fr_1.6fr]"
                  style={{ gap: "8px 24px", padding: "32px 0", borderTop: "1px solid var(--line)" }}
                >
                  <span className="pl-label" aria-hidden="true" style={{ paddingTop: "8px" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="pl-h3" style={{ margin: 0, color: "var(--text)" }}>
                    {step.name}
                  </h3>
                  <p className="pl-body" style={{ margin: 0, paddingTop: "4px" }}>
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
            <p className="pl-label" style={{ margin: "64px 0 0", paddingTop: "24px", borderTop: "1px solid var(--line)", fontSize: "15px" }}>
              <a href="/consulting" className="pl-link" style={{ color: "var(--text-soft)" }}>
                {consultingFootnote}
              </a>
            </p>
          </div>
        </section>

        <section className="pl-section" style={{ borderTop: "1px solid var(--line)" }}>
          <div className="pl-container">
            <div className="pl-reading">
              <TwoTone lines={diagnosis.headline} />
              <Paragraphs items={diagnosis.paragraphs} />
            </div>
          </div>
        </section>


        <section className="pl-section">
          <div className="pl-container">
            <div className="pl-reading">
              <TwoTone lines={requirements.headline} />
              <Paragraphs items={requirements.paragraphs} />
              <ul style={{ listStyle: "none", margin: "40px 0 0", padding: 0 }}>
                {requirements.list.map((item) => (
                  <li
                    key={item}
                    className="pl-body"
                    style={{ padding: "16px 0 16px 24px", borderTop: "1px solid var(--line)", position: "relative" }}
                  >
                    <span
                      aria-hidden="true"
                      style={{ position: "absolute", left: 0, top: "29px", width: "8px", height: "1px", background: "var(--text-muted)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="pl-section" style={{ borderTop: "1px solid var(--line)" }}>
          <div className="pl-container">
            <div className="pl-reading">
              <h2 className="pl-h2" style={{ margin: 0, color: "var(--text)" }}>
                {privacy.headline}
              </h2>
              <Paragraphs items={[privacy.body]} />
            </div>
          </div>
        </section>

        <section className="pl-section" style={{ background: "var(--night-raised)" }}>
          <Testimonials />
        </section>

        <section className="pl-section" style={{ borderTop: "1px solid var(--line)" }}>
          <Founder />
        </section>

        <section className="pl-section" style={{ borderTop: "1px solid var(--line)", textAlign: "center" }}>
          <div className="pl-container flex flex-col items-center">
            <p className="pl-display" style={{ margin: 0, maxWidth: "960px", fontSize: "clamp(44px, 7vw, 96px)" }}>
              {closing.tenet}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
