# CLAUDE.md — Pallume Website
**Path:** ~/claude-code-projects/pallume-website/
**Branch:** `pallume` (pushed to GitHub; pushes build Vercel previews only)
**Domain:** pallume.com (live)
**Last updated:** 10/11/2026

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
- Live site still on Playfair Display + Inter until the redesign ships
- Vercel. Production currently deploys from `main` (and past production deploys came from the CLI working tree); `pallume` pushes build previews

**Rules:**
1. All copy lives in `content/siteContent.ts` — never in page or component files
2. Images in `/public/images/`
3. No new packages without asking
4. `npm run build` before any commit — and never while the dev server is running (they share `.next`)
5. Test at 375px before marking visual work done
6. 8px spacing grid
7. Complete files only — no stubs

## OPEN — before the redesign goes to production

1. **Deploy path.** Production builds from `main`; work happens on `pallume`. 13 files of May work (GA4 ID `G-RJNKS81J3G`, Search Console verification, `/reviews`, TallyTracker, OG image) are live only because a CLI deploy shipped the working tree — they are not committed. Commit them, then set Vercel's production branch to `pallume`. Until then a git-based production deploy would drop them.
2. Website copy rewrite (Productization).
3. Design system and brand images move to Productization (`DESIGN.md` §11).

## SITE STRUCTURE

`/` home · `/about` · `/how-it-works` · `/pricing` · `/faq` · `/reviews` · `/the-work` (articles) · `/apply` (Tally `Gxop2o`) · `/pallume-light` (Tally `5BlNoZ`; standalone form `https://tally.so/r/5BlNoZ`) · `/privacy-policy` · `/terms-of-service`
