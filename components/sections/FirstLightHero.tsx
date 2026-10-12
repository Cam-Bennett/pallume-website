"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type Props = {
  wordmark: string;
  imageAlt: string;
  wordmarkClassName?: string;
};

// Pinned hero: the image zooms toward the horizon glow as the visitor scrolls,
// and the wordmark fades out. Visitors with reduced motion get a still frame.
export default function FirstLightHero({ wordmark, imageAlt, wordmarkClassName = "font-serif" }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const track = trackRef.current;
      const image = imageRef.current;
      const text = textRef.current;
      if (!track || !image || !text) return;

      const rect = track.getBoundingClientRect();
      const travel = rect.height - window.innerHeight;
      const progress = Math.min(1, Math.max(0, -rect.top / travel));

      image.style.transform = `scale(${1 + progress * 0.35})`;
      text.style.opacity = String(1 - Math.min(1, progress * 1.6));
      text.style.transform = `translateY(${progress * -48}px)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    // Capture phase catches scrolls from body or window, whichever is the scroller.
    document.addEventListener("scroll", onScroll, { capture: true, passive: true });
    window.addEventListener("resize", onScroll);
    update();

    return () => {
      document.removeEventListener("scroll", onScroll, { capture: true });
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={trackRef} style={{ height: "220vh", position: "relative", background: "#0A1120" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
        <div
          ref={imageRef}
          style={{
            position: "absolute",
            inset: 0,
            transformOrigin: "50% 42%",
            willChange: "transform",
          }}
        >
          <Image
            src="/images/hero-first-light.jpg"
            alt={imageAlt}
            fill
            priority
            quality={90}
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "50% 42%" }}
          />
        </div>

        {/* Darken the top for type, fade the bottom into the next section */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(10,17,32,0.45) 0%, rgba(10,17,32,0) 38%, rgba(10,17,32,0) 72%, #0A1120 100%)",
          }}
        />

        <div
          ref={textRef}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: "14vh",
            textAlign: "center",
            padding: "0 16px",
            willChange: "opacity, transform",
          }}
        >
          <h1
            className={wordmarkClassName}
            style={{
              fontSize: "clamp(72px, 15vw, 232px)",
              fontWeight: 400,
              lineHeight: 1,
              letterSpacing: "-0.01em",
              color: "#F8F6F0",
              margin: 0,
            }}
          >
            {wordmark}
          </h1>
        </div>
      </div>
    </div>
  );
}
