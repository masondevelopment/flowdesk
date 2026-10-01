import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://flowdesk.example", lastModified: new Date("2025-06-17"), changeFrequency: "monthly", priority: 1 }];
}
