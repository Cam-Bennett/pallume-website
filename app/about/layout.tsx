import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Camden Bennett — Pallume",
  description:
    "Camden Bennett founded Pallume — a Navy veteran, Wyoming real estate broker, and AI systems builder who runs the same system he builds for every client.",
  alternates: {
    canonical: "https://pallume.com/about",
  },
  openGraph: {
    title: "About Camden Bennett — Pallume",
    description:
      "Camden Bennett founded Pallume — a Navy veteran, Wyoming real estate broker, and AI systems builder who runs the same system he builds for every client.",
    url: "https://pallume.com/about",
    siteName: "Pallume",
    type: "website",
  },
};

const aboutBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://pallume.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: "https://pallume.com/about",
    },
  ],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutBreadcrumb) }}
      />
      {children}
    </>
  );
}
