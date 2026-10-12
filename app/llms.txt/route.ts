import { site2026 } from "@/content/siteContent";

// llms.txt, built from site2026 at build time so it never drifts from the site.
// Section labels are structural; every sentence comes from site2026.
export const dynamic = "force-static";

const BASE = "https://pallume.com";

function build() {
  const s = site2026;
  const navLabel = (href: string, fallback: string) => s.nav.links.find((l) => l.href === href)?.label ?? fallback;

  const lines = [
    "# Pallume",
    "",
    `> ${s.meta.description}`,
    "",
    s.footer.tagline,
    "",
    "## How it works",
    "",
    ...s.howItWorks.steps.map((step, i) => `${i + 1}. ${step.name}: ${step.body}`),
    "",
    "## What it needs",
    "",
    `${s.requirements.headline.join(" ")} ${s.requirements.paragraphs.join(" ")}`,
    "",
    ...s.requirements.list.map((item) => `- ${item}`),
    "",
    "## Privacy",
    "",
    `${s.privacy.headline} ${s.privacy.body}`,
    "",
    "## Pallume Consulting",
    "",
    ...s.consulting.paragraphs,
    "",
    ...s.consulting.startingPoints.map((p) => `- ${p.name}: ${p.body}`),
    "",
    "## Key pages",
    "",
    `- [Home](${BASE}/): ${s.meta.description}`,
    `- [${navLabel("/consulting", "Consulting")}](${BASE}/consulting): ${s.consultingPage.meta.description}`,
    `- [${navLabel("/about", "About")}](${BASE}/about): ${s.about.meta.description}`,
    `- [${navLabel("/faq", "FAQ")}](${BASE}/faq)`,
    `- [Reviews](${BASE}/reviews)`,
    `- [Contact](${BASE}/contact)`,
    "",
    "## FAQ",
    "",
    ...s.faq.flatMap((item) => [`**${item.q}** ${item.a}`, ""]),
    "## About the founder",
    "",
    ...s.founder.paragraphs.flatMap((p) => [p, ""]),
    `Contact: [${s.footer.contact}](mailto:${s.footer.contact})`,
    "",
  ];
  return lines.join("\n");
}

export function GET() {
  return new Response(build(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
