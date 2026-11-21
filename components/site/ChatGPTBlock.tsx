import { site2026 } from "@/content/siteContent";
import styles from "./EndOfDay.module.css";

// "I already have ChatGPT. Why do I need this?" (Camden 11/21/2026 4:28 PM). Words: site2026.chatgpt.
// Same cream and type scale as the opening block; a hairline keeps it apart from section three below.
export default function ChatGPTBlock() {
  const { headline, paragraphs } = site2026.chatgpt;

  return (
    <section
      className={styles.section}
      aria-labelledby="chatgpt-heading"
      style={{ borderBottom: "1px solid #e6ddcb" }}
    >
      <div className={styles.container}>
        <h2 id="chatgpt-heading" className={styles.headline} style={{ maxWidth: "1000px" }}>
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
