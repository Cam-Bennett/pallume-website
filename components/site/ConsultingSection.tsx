import { site2026 } from "@/content/siteContent";
import TwoTone from "@/components/site/TwoTone";
import Paragraphs from "@/components/site/Paragraphs";

type Props = {
  headingLevel?: "h1" | "h2";
};

// Pallume Consulting: headline, the fit, and the three starting points.
// Starting points are a sequence of cases, set as a hairline list, not cards.
export default function ConsultingSection({ headingLevel = "h2" }: Props) {
  const { consulting } = site2026;

  return (
    <div className="pl-container">
      <div className="pl-reading">
        <TwoTone
          lines={consulting.headline}
          as={headingLevel}
          className={headingLevel === "h1" ? "pl-h2 pl-reveal" : "pl-h2"}
        />
        <Paragraphs items={consulting.paragraphs} />
      </div>

      <ol style={{ listStyle: "none", margin: "64px 0 0", padding: 0, maxWidth: "880px" }}>
        {consulting.startingPoints.map((point, i) => (
          <li
            key={point.name}
            className="grid md:grid-cols-[64px_1fr_1.4fr]"
            style={{ gap: "8px 24px", padding: "32px 0", borderTop: "1px solid var(--line)" }}
          >
            <span className="pl-label" aria-hidden="true" style={{ paddingTop: "8px" }}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="pl-h3" style={{ margin: 0, color: "var(--text)" }}>
              {point.name}
            </h3>
            <p className="pl-body" style={{ margin: 0, paddingTop: "4px" }}>
              {point.body}
            </p>
          </li>
        ))}
      </ol>

    </div>
  );
}
