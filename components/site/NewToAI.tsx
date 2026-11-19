import { site2026 } from "@/content/siteContent";
import styles from "./NewToAI.module.css";

// Home section three, "New to AI? No problem." DRAFT: subtitle and body are Claude's, not approved (11/19/2026).
export default function NewToAI() {
  const { headline, subtitle, paragraphs } = site2026.newToAI;

  return (
    <section className={styles.section} aria-labelledby="new-to-ai-heading">
      <div className={styles.container}>
        <div>
          <h2 id="new-to-ai-heading" className={styles.headline}>
            {headline}
          </h2>
          <p className={styles.subtitle}>{subtitle}</p>
          <hr className={styles.rule} />
        </div>
        <div className={styles.body}>
          {paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
