import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Junry Jumawan Gallego",
    short_name: "JG",
    description:
      "Software engineer building complete business systems, Shopify storefronts, APIs, data workflows, and production-ready web experiences.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f1e7",
    theme_color: "#f6f1e7",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
