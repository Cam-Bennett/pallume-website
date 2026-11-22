import { site2026 } from "@/content/siteContent";
import { WEBINAR_ROUTE } from "@/lib/routes";

// The ask (D-420 words; headline ruled 11/17/2026 10:31 PM). Placed after the founder section
// (Camden 11/22/2026 9:41 AM, "Yes, add it after the founder section"). Words: site2026.ask.
export default function AskBlock() {
  const { headline, questions, button } = site2026.ask;

  return (
    <section className="pl-section" style={{ borderTop: "1px solid var(--line)" }} aria-labelledby="ask-heading">
      <div className="pl-container">
        <div className="pl-reading">
          <h2 id="ask-heading" className="pl-h2" style={{ margin: 0, color: "var(--text)" }}>
            {headline}
          </h2>
          <ul style={{ listStyle: "none", margin: "40px 0 0", padding: 0 }}>
            {questions.map((q) => (
              <li key={q} className="pl-body" style={{ padding: "16px 0", borderTop: "1px solid var(--line)" }}>
                {q}
              </li>
            ))}
          </ul>
          <div style={{ marginTop: "40px" }}>
            <a href={WEBINAR_ROUTE} className="pl-button">
              {button}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
