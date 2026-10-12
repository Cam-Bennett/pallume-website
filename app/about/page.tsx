import { site2026 } from "@/content/siteContent";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import PageHeader from "@/components/site/PageHeader";
import TwoTone from "@/components/site/TwoTone";
import Paragraphs from "@/components/site/Paragraphs";
import Founder from "@/components/site/Founder";

export default function AboutPage() {
  const { about } = site2026;

  return (
    <>
      <Nav />
      <main>
        <PageHeader>
          <TwoTone lines={about.headline} as="h1" className="pl-h2" />
          <Paragraphs items={about.paragraphs} />
        </PageHeader>

        <section className="pl-section">
          <div className="pl-container" style={{ marginBottom: "80px" }}>
            <hr className="pl-rule" />
          </div>
          <Founder />
        </section>
      </main>
      <Footer />
    </>
  );
}
