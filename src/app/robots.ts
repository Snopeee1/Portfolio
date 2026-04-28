import type { MetadataRoute } from "next";

const portfolioUrl = "https://snopeeee.github.io/My-Portfolio/";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${portfolioUrl.replace(/\/$/, "")}/sitemap.xml`,
    host: portfolioUrl,
  };
}
