import { site2026, testimonials } from "@/content/siteContent";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import ChaosToClarityHero from "@/components/sections/ChaosToClarityHero";
import TwoTone from "@/components/site/TwoTone";
import Paragraphs from "@/components/site/Paragraphs";
import Testimonials from "@/components/site/Testimonials";
import Founder from "@/components/site/Founder";
import EndOfDay from "@/components/site/EndOfDay";
import OpeningBlock from "@/components/site/OpeningBlock";
import HypeSection from "@/components/site/HypeSection";
import NewToAI from "@/components/site/NewToAI";
import ChatGPTBlock from "@/components/site/ChatGPTBlock";
import CanDoBlock from "@/components/site/CanDoBlock";
import { pageMeta } from "@/lib/metadata";

export const metadata = pageMeta({ ...site2026.meta, path: "" });

// Holding homepage, Phase 0 (10/11/2026). Section order set by the Phase 0 prompt.
export default function Home() {
  const { hero, chaosHero, howItWorks, requirements, privacy, consultingLine, closing } = site2026;
  const hasReviews = testimonials.items.some((t) => t.name && t.paragraphs.length > 0);

  return (
    <>
      <Nav overHero heroId="hero" />
      <main>
        {/* First screen: the chaos-to-clarity scroll, take 1 (D-424, D-438). */}
        <div id="hero">
          <ChaosToClarityHero
            from={chaosHero.from}
            to={chaosHero.to}
            wordmark={hero.wordmark}
            heading={chaosHero.heading}
            scrollHint={chaosHero.scrollHint}
          />
        </div>

        {/* The opening block (Camden 11/21/2026 11:08 AM). The blocks below stay, unchanged, until he rules. */}
        <OpeningBlock />

        {/* Section two (11/19/2026), then the board picture, a DRAFT placeholder. */}
        <HypeSection />

        {/* "What can I actually do here?" (Camden 11/21/2026 4:50 PM). */}
        <CanDoBlock />

        {/* "I already have ChatGPT" (Camden 11/21/2026 4:28 PM), right after "What can I actually do here?". */}
        <ChatGPTBlock />

        {/* Section three, DRAFT (11/19/2026). */}
        <NewToAI />

        {/* "Your day holds no surprises" cut (Camden 11/20/2026 2:01 PM, "Cut it"). */}

        {/* "You have a defaults problem" cut (Camden 11/20/2026 2:02 PM, "Cut it"). */}

        <section className="pl-section" style={{ background: "var(--night-raised)" }}>
          <div className="pl-container">
            <div className="pl-reading">
              <TwoTone lines={howItWorks.headline} />
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

        {/* Consulting, one line (D-420; Camden 11/20/2026 2:03 PM, D-449). The full block lives on /consulting. */}
        <section id="consulting" className="pl-section" style={{ borderTop: "1px solid var(--line)" }}>
          <div className="pl-container">
            <p className="pl-h3" style={{ margin: 0, maxWidth: "880px", color: "var(--text)" }}>
              {consultingLine.lead}{" "}
              <a href={consultingLine.link.href} className="pl-link">
                {consultingLine.link.label}
              </a>{" "}
              {consultingLine.rest}
            </p>
          </div>
        </section>

        {/* The reviews block shows only once a review exists (Camden 11/21/2026 10:50 AM, "Yes, keep it"). */}
        {hasReviews && (
          <section className="pl-section">
            <Testimonials />
          </section>
        )}

        {/* Camden's story, right above the founder section (Camden 11/22/2026 8:50 AM, "move it down the page"). */}
        <EndOfDay />

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
