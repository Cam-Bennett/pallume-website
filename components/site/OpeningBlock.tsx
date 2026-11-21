import { site2026 } from "@/content/siteContent";
import styles from "./EndOfDay.module.css";

// The opening block, first under the home hero (Camden 11/21/2026 11:08 AM). Words: site2026.opening.
// Same cream and type scale as the "End of Day" block below it; a hairline keeps the two apart.
export default function OpeningBlock() {
  const { headline, paragraphs } = site2026.opening;

  return (
    <section
      className={styles.section}
      aria-labelledby="opening-heading"
      style={{ borderBottom: "1px solid #e6ddcb" }}
    >
      <div className={styles.container}>
        <h2 id="opening-heading" className={styles.headline} style={{ maxWidth: "1000px" }}>
          {headline}
        </h2>
        <hr className={styles.rule} />
        <div className={styles.body}>
          {paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
