import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://pallume.com";
  const now = new Date();

  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1.0, lastModified: now },
    { url: `${base}/about`, changeFrequency: "monthly", priority: 0.8, lastModified: now },
    { url: `${base}/how-it-works`, changeFrequency: "monthly", priority: 0.8, lastModified: now },
    { url: `${base}/pricing`, changeFrequency: "monthly", priority: 0.8, lastModified: now },
    { url: `${base}/the-work`, changeFrequency: "weekly", priority: 0.7, lastModified: now },
    { url: `${base}/faq`, changeFrequency: "monthly", priority: 0.7, lastModified: now },
    { url: `${base}/apply`, changeFrequency: "monthly", priority: 0.9, lastModified: now },
    { url: `${base}/pallume-light`, changeFrequency: "monthly", priority: 0.7, lastModified: now },
    { url: `${base}/the-work/what-is-an-ai-execution-system`, changeFrequency: "monthly", priority: 0.6, lastModified: now },
    { url: `${base}/the-work/why-time-blocking-fails-business-owners`, changeFrequency: "monthly", priority: 0.6, lastModified: now },
    { url: `${base}/the-work/how-i-built-my-ai-operating-system`, changeFrequency: "monthly", priority: 0.6, lastModified: now },
  ];
}
