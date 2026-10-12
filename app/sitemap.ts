import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://pallume.com";
  const now = new Date();

  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1.0, lastModified: now },
    { url: `${base}/about`, changeFrequency: "monthly", priority: 0.8, lastModified: now },
    { url: `${base}/faq`, changeFrequency: "monthly", priority: 0.7, lastModified: now },
    { url: `${base}/consulting`, changeFrequency: "monthly", priority: 0.9, lastModified: now },
    { url: `${base}/reviews`, changeFrequency: "monthly", priority: 0.6, lastModified: now },
    { url: `${base}/contact`, changeFrequency: "yearly", priority: 0.4, lastModified: now },
    { url: `${base}/apply`, changeFrequency: "monthly", priority: 0.9, lastModified: now },
  ];
}
