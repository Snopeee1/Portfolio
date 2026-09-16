import type { MetadataRoute } from "next";
import { projects } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://junry-portfolio.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    { url: "https://junry-portfolio.vercel.app/work", changeFrequency: "monthly", priority: 0.9 },
    ...projects.map(project => ({ url: `https://junry-portfolio.vercel.app/work/${project.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
