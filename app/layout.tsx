import type { Metadata } from "next";
import { Cormorant_Garamond, Hanken_Grotesk } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
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

export const metadata: Metadata = {
  title: "Pallume — Your Own AI Execution System",
  description:
    "Custom AI execution systems for business owners who can't close the gap between intention and result. Built by Camden Bennett. 10 minutes every morning.",
  metadataBase: new URL("https://pallume.com"),
  verification: {
    google: "JC48daCMebxYC3gDO6QfUN1SURp84EC8XGEUXTKJoZ0",
  },
  openGraph: {
    title: "Pallume — Your Own AI Execution System",
    description:
      "Custom-configured AI execution systems for business owners who can't close the gap between intention and result. Built by Camden Bennett.",
    url: "https://pallume.com",
    siteName: "Pallume",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pallume — AI Execution Coaching",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@camdenbennett",
    title: "Pallume — Your Own AI Execution System",
    description:
      "Custom-configured AI execution systems for business owners who can't close the gap between intention and result. Built by Camden Bennett.",
    images: ["/images/og-image.png"],
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://pallume.com/#organization",
      name: "Pallume",
      url: "https://pallume.com",
      logo: {
        "@type": "ImageObject",
        url: "https://pallume.com/images/og-image.png",
        width: 1200,
        height: 630,
      },
      description:
        "Custom AI execution systems for business owners. Built by Camden Bennett.",
      email: "camden@pallume.com",
      founder: { "@id": "https://pallume.com/#person" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pinedale",
        addressRegion: "WY",
        addressCountry: "US",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "camden@pallume.com",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://pallume.com/#website",
      url: "https://pallume.com",
      name: "Pallume",
      description:
        "Custom AI execution systems for business owners who can't close the gap between intention and result.",
      publisher: { "@id": "https://pallume.com/#organization" },
    },
    {
      "@type": "Person",
      "@id": "https://pallume.com/#person",
      name: "Camden Bennett",
      jobTitle: "Founder, Pallume",
      description:
        "Former U.S. Navy Diver and Intelligence Officer. Real estate broker. Founder of Pallume AI execution coaching.",
      url: "https://pallume.com/about",
      image: "https://pallume.com/images/camden-headshot.jpg",
      email: "camden@pallume.com",
      worksFor: { "@id": "https://pallume.com/#organization" },
      knowsAbout: [
        "AI execution systems",
        "Business accountability coaching",
        "Productivity systems for business owners",
      ],
      sameAs: [
        "https://www.youtube.com/@camdenbennett",
      ],
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
      <body className="antialiased">{children}</body>
      <GoogleAnalytics gaId="G-RJNKS81J3G" />
    </html>
  );
}
