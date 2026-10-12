import { testimonials } from "@/content/siteContent";

type Props = {
  // The homepage uses each client's chosen excerpt; /reviews shows the full text.
  full?: boolean;
};

// The two client testimonials, verbatim. Both clients gave permission (D-94–D-100, 10/11/2026).
export default function Testimonials({ full = false }: Props) {
  const items = testimonials.items.filter((t) => t.name && t.paragraphs.length > 0);
  if (items.length === 0) return null;

  return (
    <div className="pl-container flex flex-col" style={{ gap: "0" }}>
      {items.map((item) => {
        const excerpt = (item as { homepageQuote?: string }).homepageQuote;
        const paragraphs = !full && excerpt ? [excerpt] : item.paragraphs;

        return (
          <figure
            key={item.name}
            style={{ margin: 0, padding: "48px 0", borderTop: "1px solid var(--line)" }}
            className="grid md:grid-cols-[1fr_2fr]"
          >
            <figcaption style={{ marginBottom: "24px" }}>
              <p style={{ margin: 0, fontSize: "16px", fontWeight: 500, color: "var(--text)" }}>{item.name}</p>
              <p className="pl-label" style={{ margin: "4px 0 0" }}>
                {item.title}
              </p>
            </figcaption>
            <blockquote style={{ margin: 0 }} className="flex flex-col">
              {paragraphs.map((p, j) => (
                <p key={j} className="pl-body" style={{ margin: j === 0 ? 0 : "20px 0 0" }}>
                  {j === 0 && "“"}
                  {p}
                  {j === paragraphs.length - 1 && "”"}
                </p>
              ))}
            </blockquote>
          </figure>
        );
      })}
    </div>
  );
}
