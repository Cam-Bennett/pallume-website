# DESIGN.md — Pallume

Read this before writing any UI for pallume.com or the Pallume dashboard artifact. It overrides defaults, habits, and earlier versions of the site. If a request conflicts with this file, say so before building.

**Status:** Draft 1 · 10/10/2026 · Owner: Camden Bennett
**Concept:** First light. The site opens before dawn and the light arrives as you read. "Lume" is poetic Italian for light, the kind a candle gives. Pallume sells clarity: a new day, a quieter way of working.
**References:** Linear (dark ground, light type, contrast doing the work) · Mercury (one atmospheric image that pulls you in on scroll) · Exemplar by Letters from Sweden (huge serif on black, documentary photography of real work) · Axiom Power (two-tone headline, one accent used once at full strength).

---

## 1. Principles

1. **Contrast does the work.** Light type on near-black. No decoration standing in for hierarchy.
2. **One thing carries the emotion per screen.** One photograph or one color field, never both competing.
3. **Every moving piece has a job.** Motion explains or invites. Nothing moves to look busy.
4. **True over impressive.** Real photographs of real places and real work. Stand-ins are labeled as stand-ins and replaced.
5. **Restraint is the premium signal.** When unsure, remove.

## 2. Color

| Token | Hex | Use |
|---|---|---|
| `--night` | `#0A1120` | Page background. The default canvas everywhere. |
| `--night-raised` | `#111A2E` | Raised surfaces: inputs, the dashboard's panels. Use sparingly. |
| `--sky` | `#223966` | Deep blue from the hero sky. Gradients into imagery only. |
| `--text` | `#F8F6F0` | Primary type. |
| `--text-soft` | `#B0B8C4` | Body copy and secondary type. |
| `--text-muted` | `#6E7A8E` | Second line of two-tone headlines, captions, metadata. |
| `--line` | `rgba(248,246,240,0.12)` | Hairline dividers. |
| `--lume` | `#F2BE5C` | The one accent. Sampled from the hero horizon (`#FEC85C`) and nudged down for screens. |
| `--lume-hover` | `#F7CD7A` | Hover state for `--lume` only. |

Rules:
- `--lume` appears **at most twice per screen**: the primary call to action and, optionally, one small detail. Never body text, never large fills, except a single deliberate full-bleed moment (the Axiom move) used no more than once per page.
- Retired: the old gold `#C89B3C`, path red `#DC2626`, blue `#2563EB`, purple `#7C3AED`, cyan `#06B6D4`. Paths and stages are distinguished by type and position, not color.
- No light-mode sections on the marketing site. The dashboard artifact supports a light theme by swapping the same tokens.

## 3. Type

| Role | Face | Weight | Size | Notes |
|---|---|---|---|---|
| Wordmark | Cormorant Garamond | 400 | display only | Tracking -0.01em. Below ~48px use the 600 cut (files: `pallume-wordmark-small-*`). |
| Display / H1 | Cormorant Garamond | 400 | clamp(56px, 9vw, 120px) | Line height 1.0–1.05. |
| H2 / section opener | Cormorant Garamond | 400 | clamp(36px, 5.5vw, 72px) | Two-tone allowed (below). |
| H3 | Cormorant Garamond | 500 | 28–32px | |
| Body | Hanken Grotesk | 400 | 17–18px | Line height 1.7. Max 68 characters per line. Locked 10/11/2026. |
| Labels, eyebrows, UI | Body face | 500 | 12–13px | Sentence case. Letter-spacing 0.02em. No gold tracked caps. |

- **Two-tone headline:** first sentence `--text`, second sentence `--text-muted`. One per section at most.
- Cormorant is a display face. Never set it below 20px; its hairlines break up.
- Serif questions open sections. The copy is short and confrontational; the type gives it room.
- Banned: Inter, Playfair Display, Montserrat (all retired from this site), any third typeface.

## 4. Layout and spacing

- 8px grid. Section padding 128px desktop / 80px mobile. Content max width 1120px; reading width 680px.
- Generous empty space is the default. A section with one sentence and nothing else is allowed.
- Hairline dividers (`--line`) instead of boxes. Cards only where content is actually a set of comparable items, and never three or more identical cards in a row.
- Mobile first. Everything is checked at 375px with no sideways scroll.

## 5. Imagery

- **Hero:** a person seen from behind on a granite ridge before dawn, lantern beside them, journal on the rock, fog in the valley, first light on the Wind Rivers. Current file `public/images/hero-first-light.jpg` is an AI-generated **stand-in** at 1672px wide. Replace with the real shoot (or an upscale to at least 2880px) before launch.
- **Second image:** a desk before dawn, one lamp, hands on a journal. Documentary, not staged-looking. For the section that explains the daily practice.
- Real photographs only in the final site: Camden, Wyoming, real work. No stock, no generated people, no screenshots of fake dashboards.
- Keep the top 35–40% of any image behind type clean and dark.

## 6. Motion

Exactly two motions on the marketing site:
1. **Hero scroll zoom.** The hero pins for ~1.2 screen heights while the image scales 1.0 → 1.35 toward the horizon glow (`transform-origin: 50% 42%`) and the wordmark fades and lifts 48px. Component: `components/sections/FirstLightHero.tsx`.
2. **Page-load reveal.** One fade-and-rise on first paint, 600ms, ease-out. Optional.

Rules: honor `prefers-reduced-motion` (still frame, no transforms). No scroll-jacking (scroll speed is never altered), no parallax layers, no hover animations beyond color, no animated counters, no cursor effects.

## 7. Components

- **Primary button:** `--lume` background, `--night` text, 16px body face 500, 48px tall, 8px radius. One per screen.
- **Secondary action:** text link in `--text` with a `--line` underline; hover to `--text-soft`.
- **Navigation:** transparent over the hero, `--night` at 88% with blur after scroll. Wordmark left in Cormorant 600, links in body face 14px.
- **Forms (Tally embeds):** dark theme, transparent background, labels in `--text-soft`.

## 8. Dashboard artifact

Same tokens at higher density. The morning view is a doing surface: today's priority and the protected block first, everything else collapsed (progressive disclosure). Flat charts only, no 3D, no heavy shadows. Clients may change `--night`, `--text`, and `--lume` through a picker. Type, spacing, and radii are locked.

## 9. Banned

Purple or indigo gradients · glassmorphism (except the nav blur above) · rows of three icon cards · wellness pastels · sunrise-on-a-beach imagery · stock photography · AI-generated people in final assets · multiple accent colors · tracked uppercase eyebrows in gold · anything animated that does not have a job.

## 10. Audit before calling a build done

Score 1–10 and list what fails: hierarchy · typography · motion restraint · trust (real proof, real photos) · mobile at 375px · accessibility (contrast, reduced motion, alt text) · performance (Lighthouse 95+ homepage target).

## 11. Open items

1. Hero image: real shoot or 2880px upscale.
2. Copy: the offer is being rewritten; all text lives in `content/siteContent.ts`.
3. Wordmark files (SVG/PNG, display and small cuts, navy and white): `~/Overwatch/Overwatch Inbox/pallume-wordmark-10-10-2026/`. The Cormorant wordmark supersedes the Playfair logo; record that in the Pallume decisions log.
4. Deploy path: Vercel production builds from `main`; work happens on `pallume`. Fix before launch.
