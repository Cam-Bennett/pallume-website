"use client";

import { useEffect, useRef } from "react";
import styles from "./ChaosToClarityHero.module.css";

type Props = {
  from: string;
  to: string;
  wordmark: string;
  heading: string;
  scrollHint: string;
};

// Frame sets cut from take 1 (approved final 11/17/2026). Phones load only the
// vertical set; everyone else loads only the desktop set.
const PHONE_QUERY = "(max-width: 767px)";
const SETS = {
  desktop: { dir: "/images/hero/desktop", count: 100 },
  mobile: { dir: "/images/hero/mobile", count: 50 },
} as const;
// The video uses the first 84% of the scroll; the calm frame then holds for the wordmark.
const MOVE = 0.84;
const EASE = 0.22;

const frameSrc = (dir: string, i: number) => `${dir}/f${String(i).padStart(3, "0")}.webp`;
const clamp01 = (x: number) => Math.min(1, Math.max(0, x));

// Pinned hero (D-424, D-438): the canvas draws the frame matching the scroll
// position, forward and back; "From chaos…" fades to "to Clarity.", which fades
// to "Pallume" alone, large, upper left. Reduced motion gets the calm frame as a
// still with the wordmark (CSS), and this effect does nothing.
export default function ChaosToClarityHero({ from, to, wordmark, heading, scrollHint }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fromRef = useRef<HTMLParagraphElement>(null);
  const toRef = useRef<HTMLParagraphElement>(null);
  const markRef = useRef<HTMLParagraphElement>(null);
  const shadeMarkRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const track = trackRef.current;
    const stage = stageRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!track || !stage || !canvas || !ctx) return;

    const phone = window.matchMedia(PHONE_QUERY);
    let count = 0;
    let frames: HTMLImageElement[] = [];
    let eased = -1;
    let drawn = -1;
    let raf = 0;
    let disposed = false;

    const ready = (img: HTMLImageElement | undefined) => !!img && img.complete && img.naturalWidth > 0;

    const nearestLoaded = (i: number) => {
      for (let k = 0; k < count; k++) {
        if (ready(frames[i - k])) return frames[i - k];
        if (ready(frames[i + k])) return frames[i + k];
      }
      return null;
    };

    // Draw like object-fit: cover so any screen shape stays filled.
    const cover = (img: HTMLImageElement) => {
      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;
      let sw = iw;
      let sh = ih;
      let sx = 0;
      let sy = 0;
      if (iw / ih > cw / ch) {
        sw = ih * (cw / ch);
        sx = (iw - sw) / 2;
      } else {
        sh = iw / (cw / ch);
        sy = (ih - sh) / 2;
      }
      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch);
    };

    const fit = () => {
      const r = canvas.getBoundingClientRect();
      const d = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(r.width * d));
      canvas.height = Math.max(1, Math.round(r.height * d));
      drawn = -1;
    };

    const progress = () => {
      const total = track.offsetHeight - stage.offsetHeight;
      if (total <= 0) return 0;
      return clamp01(-track.getBoundingClientRect().top / total);
    };

    const tick = () => {
      raf = 0;
      if (disposed) return;
      const p = progress();
      // Ease toward the scroll position so a fast flick still reads as motion.
      eased = eased < 0 ? p : eased + (p - eased) * EASE;
      if (Math.abs(p - eased) < 0.0004) eased = p;

      const i = Math.round(clamp01(eased / MOVE) * (count - 1));
      if (i !== drawn) {
        const img = nearestLoaded(i);
        if (img) {
          cover(img);
          // Only count the target frame as drawn; its onload redraws over a stand-in.
          drawn = img === frames[i] ? i : -1;
        }
      }

      // "From chaos…" out, "to Clarity." in and out, then only the wordmark.
      const q = eased;
      const a = 1 - clamp01((q - 0.24) / 0.14);
      const bIn = clamp01((q - 0.44) / 0.14);
      const b = bIn * (1 - clamp01((q - 0.8) / 0.08));
      const m = clamp01((q - 0.89) / 0.09);
      if (fromRef.current) {
        fromRef.current.style.opacity = String(a);
        fromRef.current.style.transform = `translateY(${-(1 - a) * 14}px)`;
      }
      if (toRef.current) {
        toRef.current.style.opacity = String(b);
        toRef.current.style.transform = `translateY(${(1 - bIn) * 14}px)`;
      }
      if (markRef.current) {
        markRef.current.style.opacity = String(m);
        markRef.current.style.transform = `translateY(${(1 - m) * 12}px)`;
      }
      if (shadeMarkRef.current) shadeMarkRef.current.style.opacity = String(m);
      if (hintRef.current) hintRef.current.style.opacity = String(0.7 * (1 - clamp01(q / 0.06)));

      // Keep running only while easing toward the scroll position; scroll, resize
      // and each frame's load start it again.
      if (eased !== p) schedule();
    };

    function schedule() {
      if (!raf && !disposed) raf = requestAnimationFrame(tick);
    }

    // Load one set only: first frame first (already on screen as the still), then
    // the rest in order. Crossing the phone breakpoint swaps to the other set.
    const load = () => {
      const set = phone.matches ? SETS.mobile : SETS.desktop;
      for (const img of frames) if (img) img.onload = null;
      count = set.count;
      frames = new Array(count);
      for (let i = 0; i < count; i++) {
        const img = new Image();
        img.decoding = "async";
        img.onload = schedule;
        img.src = frameSrc(set.dir, i);
        frames[i] = img;
      }
      drawn = -1;
      schedule();
    };
    load();
    phone.addEventListener("change", load);

    const resize = new ResizeObserver(() => {
      fit();
      schedule();
    });
    resize.observe(canvas);

    // Capture phase catches scrolls from body or window, whichever is the scroller.
    document.addEventListener("scroll", schedule, { capture: true, passive: true });
    fit();
    schedule();

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      resize.disconnect();
      document.removeEventListener("scroll", schedule, { capture: true });
      phone.removeEventListener("change", load);
      for (const img of frames) if (img) img.onload = null;
    };
  }, []);

  const { desktop, mobile } = SETS;

  return (
    <section ref={trackRef} className={styles.track} aria-labelledby="hero-heading">
      <h1 id="hero-heading" className={styles.srOnly}>
        {heading}
      </h1>
      <div ref={stageRef} className={styles.stage}>
        {/* The still shows at once while the frames load; reduced motion keeps the calm frame. */}
        <picture>
          <source
            media={`(prefers-reduced-motion: reduce) and ${PHONE_QUERY}`}
            srcSet={frameSrc(mobile.dir, mobile.count - 1)}
          />
          <source media="(prefers-reduced-motion: reduce)" srcSet={frameSrc(desktop.dir, desktop.count - 1)} />
          <source media={PHONE_QUERY} srcSet={frameSrc(mobile.dir, 0)} />
          <img
            className={styles.still}
            src={frameSrc(desktop.dir, 0)}
            alt=""
            width={1596}
            height={900}
            loading="eager"
            decoding="async"
          />
        </picture>
        <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
        <div className={styles.shade} aria-hidden="true" />
        <div aria-hidden="true">
          <p ref={fromRef} className={`${styles.word} ${styles.from}`}>
            {from}
          </p>
          <p ref={toRef} className={`${styles.word} ${styles.to}`}>
            {to}
          </p>
        </div>
        <div ref={shadeMarkRef} className={styles.shadeMark} aria-hidden="true" />
        <p ref={markRef} className={styles.mark} aria-hidden="true">
          {wordmark}
        </p>
        <p ref={hintRef} className={styles.hint} aria-hidden="true">
          {scrollHint}
        </p>
      </div>
    </section>
  );
}
