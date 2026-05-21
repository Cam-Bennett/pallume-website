import { pallumeMethod } from "@/content/siteContent";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function MethodStrip() {
  return (
    <SectionWrapper
      style={{
        background:
          "radial-gradient(ellipse at 50% 100%, rgba(200,155,60,0.06) 0%, transparent 60%), #0F1B2D",
      }}
    >
      {/* Header */}
      <div style={{ maxWidth: "600px", marginBottom: "56px" }}>
        <p
          className="font-body font-semibold uppercase tracking-widest mb-4"
          style={{ fontSize: "11px", letterSpacing: "0.14em", color: "#C89B3C" }}
        >
          {pallumeMethod.eyebrow}
        </p>
        <h2
          className="font-heading font-bold text-text-main mb-4"
          style={{
            fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          {pallumeMethod.headline}
        </h2>
        <p
          className="font-body"
          style={{ fontSize: "17px", lineHeight: 1.75, color: "#B0B8C4" }}
        >
          {pallumeMethod.subhead}
        </p>
      </div>

      {/* Stage cards */}
      <div
        className="grid gap-px"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          background: "rgba(200,155,60,0.12)",
          border: "1px solid rgba(200,155,60,0.12)",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        {pallumeMethod.stages.map((stage) => (
          <div
            key={stage.number}
            className="flex flex-col"
            style={{
              background: "#0F1B2D",
              padding: "32px 28px",
            }}
          >
            <span
              className="font-body font-semibold"
              style={{ fontSize: "11px", letterSpacing: "0.14em", color: "rgba(200,155,60,0.5)", marginBottom: "12px" }}
            >
              {stage.number}
            </span>
            <h3
              className="font-heading font-bold"
              style={{ fontSize: "20px", color: "#C89B3C", marginBottom: "16px", lineHeight: 1.2 }}
            >
              {stage.name}
            </h3>
            <p
              className="font-body"
              style={{ fontSize: "15px", lineHeight: 1.75, color: "#B0B8C4" }}
            >
              {stage.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
