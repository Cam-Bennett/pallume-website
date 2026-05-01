type BlogPostSchemaProps = {
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  slug: string;
  imageUrl?: string;
};

export function BlogPostSchema({
  headline,
  description,
  datePublished,
  dateModified,
  slug,
  imageUrl,
}: BlogPostSchemaProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline,
          description,
          datePublished,
          dateModified,
          author: {
            "@type": "Person",
            "@id": "https://pallume.com/#person",
            name: "Camden Bennett",
            url: "https://pallume.com/about",
          },
          publisher: {
            "@type": "Organization",
            "@id": "https://pallume.com/#organization",
            name: "Pallume",
            url: "https://pallume.com",
          },
          image: {
            "@type": "ImageObject",
            url: imageUrl ?? "https://pallume.com/images/camden-headshot.jpg",
            width: 1200,
            height: 630,
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://pallume.com/the-work/${slug}`,
          },
        }),
      }}
    />
  );
}
