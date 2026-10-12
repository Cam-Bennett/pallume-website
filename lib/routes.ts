// Routes that exist on the site today. Nav links to anything else (pages
// `site2026.nav` names before they are built) are hidden until the page ships.
const LIVE_ROUTES = new Set([
  "/",
  "/about",
  "/apply",
  "/consulting",
  "/contact",
  "/faq",
  "/reviews",
  "/privacy-policy",
  "/terms-of-service",
]);

export function isLiveRoute(href: string) {
  return LIVE_ROUTES.has(href);
}
