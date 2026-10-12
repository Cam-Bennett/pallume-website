import Image from "next/image";
import { site2026 } from "@/content/siteContent";
import Paragraphs from "@/components/site/Paragraphs";

type Props = {
  headingLevel?: "h2" | "h3";
};

export default function Founder({ headingLevel: Heading = "h2" }: Props) {
  const { founder } = site2026;

  return (
    <div className="pl-container grid md:grid-cols-[minmax(0,360px)_1fr]" style={{ gap: "48px 80px", alignItems: "start" }}>
      <div style={{ maxWidth: "360px" }}>
        <Image
          src={founder.imageSrc}
          alt={founder.imageAlt}
          width={720}
          height={720}
          sizes="(min-width: 768px) 360px, 100vw"
          style={{ width: "100%", height: "auto", borderRadius: "8px", filter: "saturate(0.85)" }}
        />
      </div>
      <div className="pl-reading">
        <Heading className="pl-h2" style={{ margin: 0, color: "var(--text)" }}>
          {founder.name}
        </Heading>
        <Paragraphs items={founder.paragraphs} first="32px" />
        <blockquote
          className="font-serif"
          style={{
            margin: "48px 0 0",
            paddingLeft: "24px",
            borderLeft: "1px solid var(--line)",
            fontSize: "clamp(26px, 3vw, 34px)",
            lineHeight: 1.25,
            color: "var(--text)",
          }}
        >
          {founder.pullQuote}
        </blockquote>
      </div>
    </div>
  );
}
