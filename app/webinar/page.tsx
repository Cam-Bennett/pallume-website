import { site2026 } from "@/content/siteContent";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import WebinarSignup from "@/components/site/WebinarSignup";
import styles from "@/components/site/Webinar.module.css";
import { pageMeta, breadcrumb, JsonLd } from "@/lib/metadata";

export const metadata = pageMeta({ ...site2026.webinarPage.meta, path: "/webinar" });

// The webinar registration page, the site's one destination (D-391), waiting state (D-343).
// Built 11/18/2026 for Camden to judge on the page; items 4 to 6 are drafts.
export default function WebinarPage() {
  const w = site2026.webinarPage;

  return (
    <>
      <JsonLd data={breadcrumb("Webinar", "/webinar")} />
      <Nav />
      <main className={styles.page}>
        {/* Item 1 and item 2: first screen, form beside it */}
        <section className={styles.hero}>
          <div className={`${styles.wrap} ${styles.heroGrid}`}>
            <div>
              <h1 className={styles.headline}>{w.headline}</h1>
              <p className={styles.lede}>{w.lede}</p>
            </div>
            <div className={styles.card}>
              <WebinarSignup />
            </div>
          </div>
        </section>

        {/* Item 3: what the session answers */}
        <section className={`${styles.band} ${styles.white}`}>
          <div className={`${styles.wrap} ${styles.split}`}>
            <div>
              {w.ruled.map((line) => (
                <p key={line} className={styles.h2} style={{ marginBottom: "24px" }}>
                  {line}
                </p>
              ))}
            </div>
            <div>
              <p className={styles.label}>{w.answersLead}</p>
              <ul className={styles.list}>
                {w.answers.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Item 4: who it's for, and what it needs */}
        <section className={styles.band}>
          <div className={`${styles.wrap} ${styles.split}`}>
            <div>
              <h2 className={styles.h2}>{w.whoFor[0]}</h2>
              <p className={styles.body} style={{ marginTop: "24px" }}>
                {w.whoFor[1]}
              </p>
            </div>
            <div className={styles.card}>
              {w.needs.map((n) => (
                <p key={n} className={styles.needs}>
                  {n}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Item 5: the price, never without the sign-up (D-391). Discount line held until a date. */}
        <section className={`${styles.priceBand} ${styles.white}`}>
          <div className={styles.wrap}>
            <hr className={styles.goldRule} style={{ margin: "0 auto 40px" }} />
            <p className={styles.price}>{w.price}</p>
            <div className={`${styles.card} ${styles.priceCta}`}>
              <WebinarSignup />
            </div>
          </div>
        </section>

        {/* Item 6: short questions, then the close */}
        <section className={styles.band}>
          <div className={styles.wrap}>
            <p className={styles.label}>{w.questionsLabel}</p>
            <div className={styles.qa}>
              {w.questions.map(({ q, a }) => (
                <div key={q} className={styles.card}>
                  <p className={styles.q}>{q}</p>
                  <p className={styles.a}>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.close}>
          <div className={styles.wrap}>
            <div className={`${styles.card} ${styles.closeCta}`}>
              <WebinarSignup />
            </div>
            <p className={styles.tagline}>{w.tagline}</p>
            <p className={styles.footnote}>{w.footnote}</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
