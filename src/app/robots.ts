import type { MetadataRoute } from "next";

const portfolioUrl = "https://junry-portfolio.vercel.app/";

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
