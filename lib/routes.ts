// Routes that exist on the site today. Nav links to anything else (pages
// `site2026.nav` names before they are built) are hidden until the page ships.
const LIVE_ROUTES = new Set([
  "/",
  "/about",
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

// The webinar registration page (D-391: every page leads to it). NOT BUILT YET
// (11/17/2026): links to it 404 until app/webinar/page.tsx ships. Kept out of
// LIVE_ROUTES on purpose.
export const WEBINAR_ROUTE = "/webinar";
