import { site2026 } from "@/content/siteContent";
import styles from "./EndOfDay.module.css";

// First block under the home hero (Camden, 11/18/2026 11:28 AM). Words: site2026.endOfDay.
export default function EndOfDay() {
  const { headline, subtitle, paragraphs, checklist } = site2026.endOfDay;

  return (
    <section className={styles.section} aria-labelledby="end-of-day-heading">
      <div className={styles.container}>
        <div className={styles.top}>
          <div>
            <h2 id="end-of-day-heading" className={styles.headline}>
              {headline}
            </h2>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>

          <div className={styles.card}>
            <p className={styles.cardLabel}>{checklist.label}</p>
            <ul className={styles.list}>
              {checklist.done.map((item) => (
                <li key={item} className={`${styles.row} ${styles.done}`}>
                  <span className={styles.box} aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6.5 4.8 9 10 3" stroke="#c9952f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className={styles.text}>
                    <span className="sr-only">Done: </span>
                    {item}
                  </span>
                </li>
              ))}
              <li className={`${styles.row} ${styles.open}`}>
                <span className={styles.box} aria-hidden="true" />
                <span>
                  <span className="sr-only">Not done: </span>
                  {checklist.open}
                </span>
              </li>
            </ul>
          </div>
        </div>

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
