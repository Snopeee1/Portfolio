import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Junry Jumawan Gallego",
    short_name: "JG",
    description:
      "Full-stack developer building Shopify storefronts, admin systems, and API-connected experiences.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4ede1",
    theme_color: "#f4ede1",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
