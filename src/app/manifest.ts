import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Junry Jumawan Gallego",
    short_name: "JG",
    description:
      "Full-stack developer building web and mobile applications, admin systems, APIs, and Shopify storefronts.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f9f3",
    theme_color: "#f8f9f3",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
