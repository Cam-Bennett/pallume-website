import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
import { site2026 } from "@/content/siteContent";

export const runtime = "nodejs"; // fs requires nodejs runtime

// The share image: the first-light hero with the wordmark in its sky (DESIGN.md §5).
export const alt = `${site2026.hero.wordmark}. ${site2026.hero.imageAlt}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function dataUri(file: string, mime: string) {
  const buffer = readFileSync(join(process.cwd(), "public", "images", file));
  return `data:${mime};base64,${buffer.toString("base64")}`;
}

export default async function Image() {
  const hero = dataUri("og-hero.jpg", "image/jpeg");
  const wordmark = dataUri("pallume-wordmark-light.png", "image/png");

  return new ImageResponse(
    (
      <div style={{ width: "1200px", height: "630px", position: "relative", display: "flex", backgroundColor: "#0A1120" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={hero}
          alt=""
          width={1200}
          height={675}
          style={{ position: "absolute", top: "-22px", left: 0, width: "1200px", height: "675px" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background: "linear-gradient(to bottom, rgba(10,17,32,0.55) 0%, rgba(10,17,32,0) 42%)",
          }}
        />
        <div style={{ position: "absolute", top: "52px", left: 0, right: 0, display: "flex", justifyContent: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={wordmark} alt="" width={440} height={122} />
        </div>
      </div>
    ),
    { ...size }
  );
}
