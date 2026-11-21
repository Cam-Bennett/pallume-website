import { site2026 } from "@/content/siteContent";
import styles from "./EndOfDay.module.css";

// "What can I actually do here?" (Camden 11/21/2026 4:50 PM). Words: site2026.canDo.
// Same cream and type scale as the opening block; the eight lines are a numbered list with hairlines.
export default function CanDoBlock() {
  const { headline, opening, items } = site2026.canDo;

  return (
    <section
      className={styles.section}
      aria-labelledby="can-do-heading"
      style={{ borderBottom: "1px solid #e6ddcb" }}
    >
      <div className={styles.container}>
        <h2 id="can-do-heading" className={styles.headline} style={{ maxWidth: "1000px" }}>
          {headline}
        </h2>
        <hr className={styles.rule} />
        <div className={styles.body}>
          <p>{opening}</p>
        </div>
        <ol style={{ listStyle: "none", margin: "48px 0 0", padding: 0, maxWidth: "880px" }}>
          {items.map((item, i) => (
            <li
              key={item.slice(0, 24)}
              style={{
                display: "grid",
                gridTemplateColumns: "40px 1fr",
                gap: "16px",
                padding: "20px 0",
                borderTop: "1px solid #e6ddcb",
                fontFamily: "var(--font-sans), system-ui, sans-serif",
                fontSize: "18px",
                lineHeight: 1.65,
                color: "#2b3140",
              }}
            >
              <span aria-hidden="true" style={{ color: "#c9952f", fontSize: "14px", letterSpacing: "0.08em", paddingTop: "4px" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
