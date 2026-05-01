export function PersonSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": "https://pallume.com/#person",
          name: "Camden Bennett",
          jobTitle: "AI Accountability Coach",
          description:
            "Camden Bennett is the founder of Pallume. Former U.S. Navy Diver and Intelligence Officer, managing broker of the top-producing real estate brokerage in Sublette County, Wyoming, and builder of the AI accountability system he coaches every client to run.",
          url: "https://pallume.com/about",
          image: "https://pallume.com/images/camden-headshot.jpg",
          worksFor: {
            "@type": "Organization",
            "@id": "https://pallume.com/#organization",
            name: "Pallume",
            url: "https://pallume.com",
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Pinedale",
            addressRegion: "WY",
            addressCountry: "US",
          },
          sameAs: [],
        }),
      }}
    />
  );
}
