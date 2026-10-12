import Link from "next/link";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import PageHeader from "@/components/site/PageHeader";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main style={{ minHeight: "60vh" }}>
        <PageHeader>
          <h1 className="pl-h2" style={{ margin: 0 }}>
            Page not found.
          </h1>
          <p className="pl-body" style={{ margin: "24px 0 0" }}>
            This page doesn&apos;t exist or has moved.
          </p>
          <div className="flex flex-wrap items-center" style={{ gap: "24px", marginTop: "40px", fontSize: "16px" }}>
            <Link href="/" className="pl-link">
              Go home
            </Link>
          </div>
        </PageHeader>
        <div style={{ height: "128px" }} />
      </main>
      <Footer />
    </>
  );
}
