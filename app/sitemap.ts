import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://raterjob.com";
  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/what-is-a-rater`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/privacy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/cookie-policy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/legal`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
