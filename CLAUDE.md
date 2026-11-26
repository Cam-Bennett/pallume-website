# CLAUDE.md — Pallume Website
**Path:** ~/claude-code-projects/pallume-website/
**Branch:** `main` (the only branch on GitHub; a push to `main` is a production release)
**Domain:** pallume.com (live)
**Last updated:** 11/26/2026

---

## WHAT THIS SESSION OWNS — and what it does not

One master per thing, one writer per file. Full table: `DESIGN.md` §11.

- **Owns:** website code, build, commits, and deploys — every file in this repo **except** `content/siteContent.ts`.
- **Does not write:** `content/siteContent.ts` (website words) — Pallume Productization writes it. This session builds and deploys whatever it holds.
- **Does not write:** the design system once it moves to `~/Overwatch/02-businesses/pallume/DESIGN.md`. Until then `DESIGN.md` here is the master; after the move it is a pointer.
- **Does not write:** the Operator Board (`~/Overwatch/bin/board-render.py`, `board_lib.py`, `overwatch/board/`) — Overwatch owns it.

## WHAT THIS SITE IS

**Business:** Pallume · **Owner:** Camden Bennett — camden@livewyoming.net
**Offer:** being rewritten (10/2026). Copy decisions belong to Pallume Productization; voice master is `~/Overwatch/02-businesses/pallume/VOICE-SIGNATURE.md`.

## DESIGN

Read `DESIGN.md` before any UI work and obey it over defaults. Direction (10/11/2026): first light — dark night base, AI-generated dawn imagery, Cormorant Garamond display, Hanken Grotesk body, one gold accent. Private preview of the new hero: `/preview/hero` (noindex, excluded from the sitemap).

## TECH STACK

- Next.js 14 App Router + TypeScript; Tailwind CSS 3 JIT (configs use `__dirname`)
- Live site fonts: Cormorant Garamond (display) and Hanken Grotesk (body), loaded in `app/layout.tsx`
- Vercel. Production builds from `main`. There is no preview branch: the `pallume` branch was deleted on 11/26/2026 (last commit kept as the local tag `archive/pallume-2026-11-26`)
- Google Analytics loads on every page with no consent banner (Analytics consent banner decision, D-559, 11/26/2026). Do not rebuild the banner

**Rules:**
1. All copy lives in `content/siteContent.ts` — never in page or component files
2. Images in `/public/images/`
3. No new packages without asking
4. `npm run build` before any commit — and never while the dev server is running (they share `.next`)
5. Test at 375px before marking visual work done
6. 8px spacing grid
7. Complete files only — no stubs

## OPEN

1. **Deploy path.** Settled 11/26/2026: this session and other sessions (for example Pallume Productization, for `content/siteContent.ts`) commit straight to `main`. Vercel builds every push to `main` as production, so pallume.com changes on each push.
2. Website copy rewrite (Productization).
3. Design system and brand images move to Productization (`DESIGN.md` §11).

## SITE STRUCTURE

`/` home · `/about` · `/consulting` (contact form preset to Consulting) · `/contact` (the contact page with the purpose selector, D-426, 11/17/2026; both post to `/api/contact` via Resend) · `/faq` · `/setup` · `/webinar` · `/privacy-policy` · `/terms-of-service`. No apply form and no call-to-action buttons (Camden, 10/12/2026); `/apply` 301s to `/consulting`. Retired with 301s to `/`: `/reviews`, `/pallume-light`, `/pricing`, `/how-it-works`, `/the-work`.
