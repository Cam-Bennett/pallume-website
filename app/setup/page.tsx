import type { Metadata } from "next";
import type { ReactNode } from "react";
import { setupPage, site2026 } from "@/content/siteContent";
import { claudeCodeLink } from "@/lib/setupLinks";
import TwoTone from "@/components/site/TwoTone";
import CopyLine from "@/components/site/CopyLine";
import SetupSlot from "@/components/site/SetupSlot";

// Unlisted setup page (D-222, D-219). Same pattern as /preview: noindex here,
// Disallow in robots.txt, absent from app/sitemap.ts. No Nav and no Footer, so
// the page carries no menu and no second contact route (D-220: the contact form
// is the only one). Nothing on the site links here; the buyer's email does.
export const metadata: Metadata = {
  title: { absolute: setupPage.meta.title },
  description: setupPage.meta.description,
  robots: { index: false, follow: false },
};

// Draft markers (the open-item notes and the screenshot/video slots) show only in local development or when
// NEXT_PUBLIC_SETUP_DRAFT=1 is set on a preview build. Visitors on the live page never see them (11/01/2026).
// The full list of what each slot must show is kept in the Pallume folder, Setup-Page-Placeholders.
const showDrafts = process.env.NODE_ENV !== "production" || process.env.NEXT_PUBLIC_SETUP_DRAFT === "1";

type Slot = { readonly kind: string; readonly id: string; readonly shows: string };
type Group = { readonly heading?: string; readonly steps: readonly string[]; readonly copy?: "step2" };
type Section = {
  readonly id: string;
  readonly heading: string;
  readonly lead?: readonly string[];
  readonly groups: readonly Group[];
  readonly notes?: readonly string[];
  readonly slots: readonly Slot[];
  readonly camden: readonly string[];
  readonly done?: string;
  readonly doneCamden?: string;
  readonly ifNot?: readonly string[];
};

const { links } = setupPage;
const sections: readonly Section[] = setupPage.sections;

const hrefs = {
  step1: claudeCodeLink(links.step1.folder, links.step1.firstLine),
  step2: claudeCodeLink(links.step2.folder, links.step2.firstLine),
};

const tokens: Record<string, ReactNode> = {
  step1Link: (
    <a href={hrefs.step1} className="pl-link" style={{ fontWeight: 500 }}>
      {links.step1.label}
    </a>
  ),
  step2Link: (
    <a href={hrefs.step2} className="pl-link" style={{ fontWeight: 500 }}>
      {links.step2.label}
    </a>
  ),
  claudeDownload: (
    <a href={links.claudeDownload.href} className="pl-link" target="_blank" rel="noopener noreferrer">
      {links.claudeDownload.label}
    </a>
  ),
  contact: (
    <a href={links.contact.href} className="pl-link">
      {links.contact.label}
    </a>
  ),
};

// **bold** and {{token}} from the content strings; everything else is plain text.
function Rich({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\{\{[a-zA-Z0-9]+\}\})/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**")) {
          return (
            <strong key={i} style={{ color: "var(--text)", fontWeight: 500 }}>
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith("{{")) {
          return <span key={i}>{tokens[part.slice(2, -2)] ?? part}</span>;
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

function CamdenNote({ text }: { text: string }) {
  if (!showDrafts) return null;
  return (
    <p
      role="note"
      style={{
        margin: "16px 0 0",
        padding: "8px 16px",
        borderLeft: "2px solid var(--text-soft)",
        background: "var(--night-raised)",
        color: "var(--text)",
        fontSize: "15px",
        lineHeight: 1.6,
      }}
    >
      [CAMDEN: {text}]
    </p>
  );
}

function Steps({ steps }: { steps: readonly string[] }) {
  return (
    <ol style={{ margin: "24px 0 0", paddingLeft: "24px", listStyleType: "decimal", display: "flex", flexDirection: "column", gap: "16px" }}>
      {steps.map((step) => (
        <li key={step} className="pl-body" style={{ paddingLeft: "8px", maxWidth: "none" }}>
          <Rich text={step} />
        </li>
      ))}
    </ol>
  );
}

function SetupSection({ section }: { section: Section }) {
  return (
    <section id={section.id} style={{ padding: "64px 0", borderTop: "1px solid var(--line)", scrollMarginTop: "24px" }}>
      <h2 className="pl-h3" style={{ margin: 0, color: "var(--text)" }}>
        {section.heading}
      </h2>

      {section.lead?.map((p) => (
        <p key={p} className="pl-body" style={{ margin: "24px 0 0" }}>
          <Rich text={p} />
        </p>
      ))}

      {section.groups.map((group, i) => (
        <div key={group.heading ?? i} style={{ marginTop: group.heading ? "40px" : 0 }}>
          {group.heading && (
            <h3 className="pl-label" style={{ margin: 0, fontSize: "16px", color: "var(--text-soft)" }}>
              {group.heading}
            </h3>
          )}
          <Steps steps={group.steps} />
          {group.copy === "step2" && (
            <CopyLine text={links.step2.firstLine} copyLabel={setupPage.copyLabel} copiedLabel={setupPage.copiedLabel} />
          )}
        </div>
      ))}

      {section.notes?.map((note) => (
        <p key={note} className="pl-body" style={{ margin: "24px 0 0", fontSize: "16px" }}>
          <Rich text={note} />
        </p>
      ))}

      {section.done && (
        <p className="pl-body" style={{ margin: "32px 0 0", color: "var(--text)" }}>
          <Rich text={section.done} />
        </p>
      )}
      {section.doneCamden && <CamdenNote text={section.doneCamden} />}

      {section.ifNot && (
        <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "16px" }}>
          {section.ifNot.map((line) => (
            <p key={line} className="pl-body" style={{ margin: 0 }}>
              <Rich text={line} />
            </p>
          ))}
        </div>
      )}

      {section.slots.map((slot) => (
        showDrafts ? <SetupSlot key={slot.id} kind={slot.kind} id={slot.id} shows={slot.shows} /> : null
      ))}
      {section.camden.map((c) => (
        <CamdenNote key={c} text={c} />
      ))}
    </section>
  );
}

export default function SetupPage() {
  return (
    <main style={{ padding: "48px 16px 96px" }}>
      <div className="pl-container">
        <div className="pl-reading">
          <p className="font-serif" style={{ margin: 0, fontSize: "28px", fontWeight: 600, lineHeight: 1, color: "var(--text)" }}>
            {site2026.hero.wordmark}
          </p>

          <header style={{ padding: "64px 0" }}>
            <TwoTone lines={setupPage.headline} as="h1" />
            {setupPage.intro.map((p) => (
              <p key={p} className="pl-body" style={{ margin: "24px 0 0" }}>
                <Rich text={p} />
              </p>
            ))}
            <p className="pl-body" style={{ margin: "24px 0 0", fontSize: "16px" }}>
              <Rich text={setupPage.pc.text} />
            </p>
            {showDrafts && <SetupSlot kind={setupPage.pc.slot.kind} id={setupPage.pc.slot.id} shows={setupPage.pc.slot.shows} />}
            <CamdenNote text={setupPage.pc.camden} />
          </header>

          {sections.map((section) => (
            <SetupSection key={section.id} section={section} />
          ))}

          <details style={{ padding: "32px 0", borderTop: "1px solid var(--line)" }}>
            <summary className="pl-label" style={{ cursor: "pointer", fontSize: "15px" }}>
              {setupPage.typedLineSummary}
            </summary>
            <p className="pl-body" style={{ margin: "16px 0 0", fontSize: "16px" }}>
              {links.step1.firstLine}
            </p>
          </details>

          <p className="font-serif" style={{ margin: "64px 0 0", fontSize: "clamp(28px, 4vw, 40px)", lineHeight: 1.15, color: "var(--text)" }}>
            {setupPage.tagline}
          </p>
        </div>
      </div>
    </main>
  );
}
