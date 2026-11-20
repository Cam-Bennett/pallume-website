import { site2026 } from "@/content/siteContent";
import styles from "./HypeSection.module.css";

// Home section two, "It's Not More AI Hype" (Camden, 11/19/2026 9:26 AM). Section one flipped:
// fragments on the left, text on the right; then the picture of Overwatch in a navy band (slot until the file arrives).
function Fragments() {
  return (
    <div className={styles.fragments} aria-hidden="true">
      {/* image thumbnail */}
      <div className={`${styles.tile} ${styles.t1}`}>
        <svg viewBox="0 0 120 80" className={styles.svg}>
          <rect x="0" y="0" width="120" height="80" rx="6" fill="#e9eaee" />
          <circle cx="88" cy="22" r="9" fill="#cfd2d9" />
          <path d="M0 80 L38 40 L62 62 L82 46 L120 80 Z" fill="#c4c8d0" />
        </svg>
      </div>
      {/* small chart */}
      <div className={`${styles.tile} ${styles.t2}`}>
        <svg viewBox="0 0 120 80" className={styles.svg}>
          <rect x="16" y="44" width="14" height="24" rx="2" fill="#c4c8d0" />
          <rect x="38" y="30" width="14" height="38" rx="2" fill="#b7bcc6" />
          <rect x="60" y="50" width="14" height="18" rx="2" fill="#c4c8d0" />
          <rect x="82" y="20" width="14" height="48" rx="2" fill="#b7bcc6" />
          <line x1="10" y1="68" x2="110" y2="68" stroke="#d6d9df" strokeWidth="2" />
        </svg>
      </div>
      {/* video frame */}
      <div className={`${styles.tile} ${styles.t3}`}>
        <svg viewBox="0 0 120 72" className={styles.svg}>
          <rect x="0" y="0" width="120" height="72" rx="6" fill="#d9dce2" />
          <circle cx="60" cy="34" r="14" fill="#f4f5f7" />
          <path d="M55 27 L68 34 L55 41 Z" fill="#aab0bb" />
          <rect x="10" y="60" width="100" height="3" rx="1.5" fill="#c4c8d0" />
          <rect x="10" y="60" width="34" height="3" rx="1.5" fill="#9aa0ab" />
        </svg>
      </div>
      {/* chat bubble */}
      <div className={`${styles.tile} ${styles.t4}`}>
        <svg viewBox="0 0 120 64" className={styles.svg}>
          <rect x="4" y="6" width="96" height="40" rx="12" fill="#e9eaee" />
          <path d="M18 46 L14 58 L30 46 Z" fill="#e9eaee" />
          <rect x="16" y="18" width="64" height="5" rx="2.5" fill="#c4c8d0" />
          <rect x="16" y="29" width="44" height="5" rx="2.5" fill="#c4c8d0" />
        </svg>
      </div>
      {/* email row */}
      <div className={`${styles.tile} ${styles.t5}`}>
        <svg viewBox="0 0 160 40" className={styles.svg}>
          <circle cx="18" cy="20" r="9" fill="#d6d9df" />
          <rect x="36" y="11" width="56" height="6" rx="3" fill="#b7bcc6" />
          <rect x="36" y="23" width="96" height="5" rx="2.5" fill="#d6d9df" />
          <rect x="138" y="12" width="14" height="5" rx="2.5" fill="#d6d9df" />
        </svg>
      </div>
    </div>
  );
}

export default function HypeSection() {
  const { headline, subtitle, paragraphs, handoff, board } = site2026.hype;

  return (
    <>
      <section className={styles.section} aria-labelledby="hype-heading">
        <div className={styles.container}>
          <Fragments />
          <div className={styles.text}>
            <h2 id="hype-heading" className={styles.headline}>
              {headline}
            </h2>
            <p className={styles.subtitle}>{subtitle}</p>
            <hr className={styles.rule} />
            <div className={styles.body}>
              {paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <p className={styles.handoff}>{handoff}</p>
          </div>
        </div>
      </section>

      <section className={styles.band} aria-label="What Pallume Overwatch looks like">
        <figure className={styles.bandInner}>
          {board.src ? (
            // Tap opens the full-size file, so a phone can pinch to zoom.
            <a href={board.src} className={styles.boardLink} aria-label={board.openLabel}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={board.src}
                width={board.width}
                height={board.height}
                alt={board.alt}
                loading="lazy"
                decoding="async"
                className={styles.board}
              />
            </a>
          ) : (
            // Marked empty slot until the picture arrives (Camden, 11/20/2026).
            <div className={styles.slot} data-slot="home-board-picture">
              <p className={styles.slotLabel}>{board.slotLabel}</p>
              <p className={styles.slotNote}>{board.slotNote}</p>
            </div>
          )}
          {/* No caption line on the picture (Camden, 11/20/2026 1:56 PM); only the empty slot shows one. */}
          {(board.caption || !board.src) && (
            <figcaption className={styles.caption}>{board.caption || "Caption line, one sentence."}</figcaption>
          )}
        </figure>
      </section>
    </>
  );
}
