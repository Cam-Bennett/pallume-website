import type { Metadata } from "next";
import { Cormorant_Garamond, Hanken_Grotesk } from "next/font/google";
import { site2026 } from "@/content/siteContent";
import { OG_IMAGE } from "@/lib/metadata";
import Consent from "@/components/site/Consent";
import "./globals.css";

// DESIGN.md §3: Cormorant Garamond for display, Hanken Grotesk for everything else.
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500"],
  display: "swap",
});

const { meta, founder, footer, about } = site2026;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  metadataBase: new URL("https://pallume.com"),
  verification: {
    google: "JC48daCMebxYC3gDO6QfUN1SURp84EC8XGEUXTKJoZ0",
  },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: "https://pallume.com",
    siteName: "Pallume",
    locale: "en_US",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    site: "@camdenbennett",
    title: meta.title,
    description: meta.description,
    images: [OG_IMAGE.url],
  },
};

// Site-wide schema, from site2026. No product or price schema until a price exists.
const orgSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://pallume.com/#organization",
      name: "Pallume",
      url: "https://pallume.com",
      logo: "https://pallume.com/icon.png",
      slogan: footer.tagline,
      description: meta.description,
      email: footer.contact,
      founder: { "@id": "https://pallume.com/#person" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pinedale",
        addressRegion: "WY",
        addressCountry: "US",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://pallume.com/#website",
      url: "https://pallume.com",
      name: "Pallume",
      description: meta.description,
      publisher: { "@id": "https://pallume.com/#organization" },
    },
    {
      "@type": "Person",
      "@id": "https://pallume.com/#person",
      name: founder.name,
      jobTitle: "Founder, Pallume",
      description: about.meta.description,
      url: "https://pallume.com/about",
      image: `https://pallume.com${founder.imageSrc}`,
      email: footer.contact,
      worksFor: { "@id": "https://pallume.com/#organization" },
      sameAs: ["https://www.youtube.com/@camdenbennett"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${hanken.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Consent />
      </body>
    </html>
  );
}
