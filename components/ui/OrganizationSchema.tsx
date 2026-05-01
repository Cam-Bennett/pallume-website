export function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://pallume.com/#organization",
          name: "Pallume",
          url: "https://pallume.com",
          // logo: omitted until /public/images/logo.png is added
          description:
            "Pallume builds custom AI accountability systems for business owners. Configured from a deep-dive interview, running inside the client's own Claude account every morning, reviewed weekly by the coach.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Pinedale",
            addressRegion: "WY",
            addressCountry: "US",
          },
          email: "camden@livewyoming.net",
          founder: {
            "@type": "Person",
            "@id": "https://pallume.com/#person",
            name: "Camden Bennett",
          },
          sameAs: [],
        }),
      }}
    />
  );
}
