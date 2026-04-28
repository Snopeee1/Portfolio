import type { Metadata, Viewport } from "next";
import "./globals.css";

const site = {
  name: "Junry Jumawan Gallego",
  title: "Junry Gallego | Full-Stack and Shopify Developer",
  description:
    "Full-stack developer building Shopify storefronts, admin systems, and API-connected experiences with clean code, better funnels, and practical business impact.",
  portfolioUrl: "https://snopeeee.github.io/My-Portfolio/",
};

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  keywords: [
    "Junry Gallego",
    "Full-Stack Web Developer",
    "Shopify Developer",
    "Next.js portfolio",
    "Tailwind CSS portfolio",
    "eCommerce developer",
    "Philippines developer portfolio",
  ],
  alternates: {
    canonical: site.portfolioUrl,
  },
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.portfolioUrl,
    siteName: site.name,
    locale: "en_PH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  category: "technology",
  referrer: "origin-when-cross-origin",
};

export const viewport: Viewport = {
  themeColor: "#f8faf3",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className="h-full antialiased"
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
