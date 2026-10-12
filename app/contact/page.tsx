import { site2026 } from "@/content/siteContent";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import PageHeader from "@/components/site/PageHeader";
import Todo from "@/components/site/Todo";
import { pageMeta, breadcrumb, JsonLd } from "@/lib/metadata";

// Plain contact page, Phase 0: a mailto link only. The contact form (QUEUE 27) comes later.
export const metadata = pageMeta({
  title: "Contact — Pallume",
  description: site2026.meta.description,
  path: "/contact",
});

export default function ContactPage() {
  const email = site2026.footer.contact;

  return (
    <>
      <JsonLd data={breadcrumb("Contact", "/contact")} />
      <Nav />
      <main>
        <PageHeader>
          <h1 className="pl-h2" style={{ margin: 0 }}>
            <Todo />
          </h1>
          <p className="font-serif" style={{ margin: "40px 0 0", fontSize: "clamp(28px, 4vw, 40px)" }}>
            <a href={`mailto:${email}`} className="pl-link">
              {email}
            </a>
          </p>
        </PageHeader>
        <div style={{ height: "128px" }} />
      </main>
      <Footer />
    </>
  );
}
