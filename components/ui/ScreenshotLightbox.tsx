"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
}

export default function ScreenshotLightbox({ src, alt, width, height, caption }: Props) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <>
      {/* Thumbnail */}
      <div style={{ maxWidth: "1100px", margin: "64px auto 0" }}>
        <button
          onClick={() => setOpen(true)}
          style={{
            display: "block",
            width: "100%",
            cursor: "zoom-in",
            background: "none",
            border: "none",
            padding: 0,
          }}
          aria-label="Click to enlarge screenshot"
        >
          <div
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid rgba(200,155,60,0.2)",
              boxShadow: "0 24px 64px rgba(15,27,45,0.18)",
              transition: "box-shadow 200ms ease",
            }}
          >
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className="w-full h-auto"
              priority={false}
              sizes="(max-width: 768px) 100vw, 1100px"
            />
          </div>
        </button>
        <p
          className="font-sans text-center"
          style={{ fontSize: "13px", lineHeight: 1.6, color: "#9CA3AF", marginTop: "12px" }}
        >
          {caption}{" "}
          <span style={{ color: "#C89B3C", fontSize: "12px" }}>Click to enlarge</span>
        </p>
      </div>

      {/* Lightbox overlay */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Screenshot enlarged"
          onClick={close}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(10,16,28,0.94)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            cursor: "zoom-out",
          }}
        >
          {/* Close button */}
          <button
            onClick={close}
            aria-label="Close"
            style={{
              position: "absolute",
              top: "20px",
              right: "24px",
              background: "none",
              border: "none",
              color: "#B0B8C4",
              fontSize: "28px",
              lineHeight: 1,
              cursor: "pointer",
              padding: "4px 8px",
            }}
          >
            ×
          </button>

          {/* Full image */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "min(1400px, 95vw)",
              maxHeight: "90vh",
              overflow: "auto",
              borderRadius: "8px",
              boxShadow: "0 32px 96px rgba(0,0,0,0.6)",
              cursor: "default",
            }}
          >
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className="w-full h-auto"
              sizes="95vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
