import type { Metadata } from "next";

const BASE = "https://pallume.com";

// Page metadata in one shape. The OG image comes from app/opengraph-image.tsx.
export function pageMeta({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const url = `${BASE}${path}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: "Pallume", locale: "en_US", type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export function breadcrumb(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
      { "@type": "ListItem", position: 2, name, item: `${BASE}${path}` },
    ],
  };
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
