# DESIGN.md — Pallume

Read this before writing any UI for pallume.com or the Pallume Operator Board. It overrides defaults, habits, and earlier versions. If a request conflicts with this file, say so before building.

**Status:** Draft 2 · 10/11/2026 · Owner: Camden Bennett
**Master:** this file, until Pallume Productization takes ownership at `~/Overwatch/02-businesses/pallume/DESIGN.md`. After that move, this file becomes a pointer and is never edited here.
**Concept:** First light. Each page opens on an image of early morning, and the work starts below it. Pallume sells clarity: a new day, a quieter way of working.
**References:** Linear (dark ground, light type, contrast doing the work) · Mercury (one atmospheric image that pulls you in) · Exemplar by Letters from Sweden (huge serif on black) · Axiom Power (two-tone headline, one accent used once at full strength) · Haulix and Stakent dashboards (dark palette, data at a glance) · ACRU (numbers, bars, gauges read instantly).

---

## 1. Principles

1. **The image sets the mood. Then it's time to work.** Below the image, every element must change what the user does today. If it doesn't, cut it, collapse it, or move it to Progress.
2. **Contrast does the work.** Light type on near-black. No decoration standing in for hierarchy.
3. **One thing carries the emotion per screen.** The image. Nothing below competes with it.
4. **Every moving piece has a job.** Motion explains or invites. Nothing moves to look busy.
5. **No number appears twice.** The menu underline is the alert, the page holds the action, Progress holds the trend.
6. **Restraint is the premium signal.** When unsure, remove.

## 2. Color

| Token | Hex | Use |
|---|---|---|
| `--night` | `#0A1120` | Page background. The default canvas everywhere. |
| `--night-raised` | `#111A2E` | Panels on the board, inputs. |
| `--night-raised-2` | `#16213A` | Nested surfaces: module tiles, menu cards. |
| `--sky` | `#223966` | Deep blue from the hero sky. Gradients into imagery only. |
| `--text` | `#F8F6F0` | Primary type. |
| `--text-soft` | `#B0B8C4` | Body copy and secondary type. |
| `--text-muted` | `#6E7A8E` | Second line of two-tone headlines, captions, metadata. |
| `--icon` | `#808CA0` | Icons at rest. Active icons turn `--gold`. |
| `--line` | `rgba(248,246,240,0.12)` | Hairline dividers. |
| `--gold` | `#F2BE5C` | The one accent. Sampled from the hero horizon and nudged down for screens. |
| `--gold-hover` | `#F7CD7A` | Hover state for `--gold` only. |

**Status scale (Operator Board only, never the website):**

| Token | Hex | Meaning |
|---|---|---|
| `--ok` | `#8BC5A3` | On track |
| `--close` | `#F2BE5C` | Close to a limit. Needs you. |
| `--out` | `#E8795A` | Outside a parameter |
| neutral | `--text-muted` | No target set |

Rules:
- On the website, `--gold` appears at most twice per screen: the primary call to action and one small detail.
- Retired: old gold `#C89B3C`, path red `#DC2626`, blue `#2563EB`, purple `#7C3AED`, cyan `#06B6D4`.
- No light-mode sections on the website. The board may offer a light theme by swapping the same tokens.

## 3. Type

| Role | Face | Weight | Size | Notes |
|---|---|---|---|---|
| Wordmark | Cormorant Garamond | 400 | display only | Tracking -0.01em. Below ~48px use the 600 cut (`pallume-wordmark-small-*`). Supersedes the Playfair logo. |
| Display / H1 | Cormorant Garamond | 400 | clamp(56px, 9vw, 120px) | Line height 1.0–1.05. |
| H2 / section opener | Cormorant Garamond | 400 | clamp(36px, 5.5vw, 72px) | Two-tone allowed. |
| H3 | Cormorant Garamond | 500 | 28–32px | |
| Body | Hanken Grotesk | 400 | 17–18px (15–16px on the board) | Line height 1.6–1.7. Max 68 characters per line. |
| Labels, UI | Hanken Grotesk | 500 | 12–14px | Sentence case. No tracked uppercase eyebrows. |

- **Two-tone headline:** first sentence `--text`, second `--text-muted`. One per section at most.
- Cormorant is a display face. Never below 20px.
- Banned: Inter, Playfair Display, Montserrat, any third typeface.

## 4. Layout and spacing

- 8px grid. Website section padding 128px desktop / 80px mobile. Content max width 1120–1280px; reading width 680px.
- Hairline dividers instead of boxes. Never three or more identical cards in a row.
- Mobile first. Everything is checked at 375px with no sideways scroll.

## 5. Imagery

**AI-generated images are the standard.** Pallume uses AI to make things easier, and its imagery shows it. Every image is one frame from the same series: mountain country in early light, quiet, one subject or none.

| Page | Image | File (3200 px master) |
|---|---|---|
| Website hero and board Today | Figure on a granite ridge before dawn, lantern, journal | `today-3200.jpg` |
| Production | Cabin desk, window onto the range at sunrise | `production-3200.jpg` |
| Monitor | Balloon over a misty valley | `monitor-3200.jpg` |
| Self | Lone kayaker on still water | `self-3200.jpg` |
| Progress | Trail through an alpine meadow toward peaks, at dawn | `progress-3200.jpg` |
| Pallume System | Cairns by a moonlit lake | `system-3200.jpg` |
| Any page a user builds | Golden valley sunrise, no figure | `default-3200.jpg` |

Every frame has three zones:
1. **Top ~18–20%:** plain dark sky, for the navigation.
2. **Middle:** the scene. The subject sits between about 35% and 80% of the height, in the center third across so it survives a phone crop.
3. **Bottom ~15%:** dark and quiet, for the page title.

Production rules: 16:9, generated at the tool's largest size, upscaled 2× (Lightroom Classic › Enhance › Super Resolution), saved at 3200 px wide, JPEG quality 80. Light is dawn or first sunlight, never midday. No text in the image, except the brand name where it belongs in the scene (the Monitor balloon).

## 6. Motion

Website: exactly two motions.
1. **Hero scroll zoom.** The hero pins for ~1.2 screen heights while the image scales 1.0 → 1.35 toward the horizon (`transform-origin: 50% 42%`) and the wordmark fades and lifts 48px. Component: `components/sections/FirstLightHero.tsx`.
2. **Page-load reveal.** One fade-and-rise on first paint, 600ms. Optional.

Board: no motion except state changes (toggle, checkbox).

Everywhere: honor `prefers-reduced-motion`. No scroll-jacking, no parallax, no animated counters, no cursor effects.

## 7. Website components

- **Primary button:** `--gold` background, `--night` text, 16px Hanken 500, 48px tall, 8px radius. One per screen.
- **Secondary action:** text link in `--text` with a `--line` underline.
- **Navigation:** transparent over the hero; Cormorant wordmark left, Hanken links.
- **Forms (Tally embeds):** dark theme, transparent background.

## 8. Operator Board

Reference build: the board mock (`index.html` in the board handoff package). It is the source for every rule below.

**Pages.** Every user gets six standard pages: **Today's Plan, Production, Monitor, Self, Progress, Pallume System.** Users add their own (Camden's: Active Leads, Photo Jobs, Finance, Health, Weekly Examen). The board always opens on Today's Plan. Changelog, last update, and version live in the footer.

**Image band.** Today opens on the full hero (about 80% of the screen) with the date in the sky. Every other page opens on a band about 72% of the screen tall with its own image and the page title at the bottom. The fade is a sliver: the top edge darkens for the menu, and only the last 15–20% darkens for the title. The scene stays clear.

**Navigation.** Words only, in the top bar: wordmark left, page names across, Update board right. Warnings are a colored underline under the name: ember outside, gold close, none on track. The current page is bold and bright, with a white underline when it has no warning. Hovering a name shows the reason ("Q3 tax in 2 days"). On phones the names collapse behind a **Menu** button that carries a warning dot and count; the menu opens full-screen cards with icons.

**Parameters.** Every parameter a user sets has the same shape: what's measured, its front, a target, and a direction. Status is computed, never judged:

| Direction | On track | Close | Outside |
|---|---|---|---|
| At least (workouts 2 a week) | at or above target | 75–99% of target | below 75% |
| At most (accommodations under 2 a week) | at or below target | up to 125% | above 125% |
| Within N days (a front touched every 21 days) | within N | up to 1.5 × N | beyond 1.5 × N |
| Deadline | more than 7 days out | 4–7 days | 3 days or less, or overdue |

A parameter can override its own close band. Fronts are user-defined.

**Today.** In order: the **Brief**; the needle with a Moved toggle (the card dims, the week count updates); the calendar timeline with a gold "now" line; Today's list with its closed-list header; parameter suggestions that sit outside the closed list; last night's check-in; the week's campaign.

**The Brief** (written by Claude at every update): three sentences at most. Lead with the one thing. Then only what can't slip today (anything outside a parameter, any deadline 3 days or less). Then one linked pointer to the page that needs a decision. Never repeat the list below it. A disconnected connector adds one line with an ember dot and a link to Pallume System.

**Production system notes** (written by Claude at every update): read everything (Production, Monitor, Raw, every journal entry, the needle ledger, Overwatch text). Up to three flags plus one thing going well, labeled Falling behind, Put off, Pre-production, or Going well. Each note: one sentence of evidence with a number or date, one sentence recommending the next move, and one or two buttons that start the work. Rank by what most helps the user do the most important thing next. Prefer cutting, deferring, or handing off before adding. Look for: Production growing faster than it's finished over 14 days; rows 21+ days old; a topic in the journal 3+ times in 14 days with no row; Monitor items waiting 7+ days; Raw unsorted 7+ days. Cite sources. Never invent. No coach voice, no transformation language.

**Page rules.** Production: no urgency chart; age chips only on rows past 14 days. Monitor: a gold "Follow up" chip at 7+ days waiting; Raw is one line plus a Quick review button. Self: the menu only. Progress: the one page for trends; signals sorted outside-first, on-track signals collapsed. Pallume System: connectors first, then the module library with module icons. Leads: most overdue first, Call and Email buttons. Photo Jobs: what's due now, never an accrued total. Health: daily stack and doctor questions; lab markers collapsed. Every flagged page opens with one line saying why.

**Connectors.** Read at every update from the session's connector status (connected, needs sign-in, failed). Brand marks from simple-icons 13.21.0, tinted `--icon`; lettered marks where none exist. A failed or unsigned connector shows its reason and one honest button: **Reconnect** (opens Claude's Connectors settings) for claude.ai connectors, **Show me how** (asks Claude for steps) for anything configured elsewhere. Any problem underlines Pallume System in the menu.

**Buttons that start work** send their request to Claude through the board's send-to-Claude link, the same one the Update button uses.

**Charts.** Flat only. Bars with a dashed target line, 30-day dot strips, a fronts-by-weeks grid, one ring. No 3D, no heavy shadows.

**Client customization.** Clients may change `--night`, `--text`, and `--gold` through a picker. Type, spacing, radii, and the status scale are locked.

## 9. Banned

Purple or indigo gradients · glassmorphism beyond the nav and menu blur · rows of three icon cards · wellness pastels · sunrise-on-a-beach imagery · stock photography · midday light · multiple accent colors on the website · tracked uppercase gold eyebrows · anything animated without a job · any element below the image that doesn't change what the user does today.

## 10. Audit before calling a build done

Score 1–10 and list what fails: hierarchy · typography · motion restraint · clarity of the next action · mobile at 375px · accessibility (contrast, reduced motion, alt text) · performance (Lighthouse 95+ on the homepage).

## 11. Ownership

One master per thing, one writer per file. Everyone else reads it or carries a pointer, never a copy.

| What | Master | Writer |
|---|---|---|
| This design system | `~/Overwatch/02-businesses/pallume/DESIGN.md` (after the move) | Pallume Productization |
| Brand images (3200 px masters) | `~/Overwatch/02-businesses/pallume/brand-images/` (after the move) | Pallume Productization |
| Website words | `content/siteContent.ts` in this repo | Pallume Productization |
| Website code, build, and deploy | everything else in this repo | Pallume Website |
| Operator Board code and data | `~/Overwatch/bin/board-render.py`, `board_lib.py`, `overwatch/board/` | Overwatch |

## 12. Open items

1. Productization takes ownership of this file and the brand images (see §11).
2. Website copy rewrite for the new offer, in `content/siteContent.ts` (Productization).
3. Deploy path: Vercel production builds from `main`; work happens on `pallume`, and 13 files of May work are still uncommitted. Fix before launch.
