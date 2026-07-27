import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, IBM_Plex_Mono, Manrope } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

const site = {
  name: "Junry Jumawan Gallego",
  title: "Junry Gallego | Software Engineer and Shopify Developer",
  description:
    "Software engineer building complete business systems, Shopify storefronts, APIs, data workflows, admin tools, and production-ready web experiences.",
  portfolioUrl: "https://junry-portfolio.vercel.app",
};

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  keywords: [
    "Junry Gallego",
    "Software Engineer",
    "Full-Stack Developer",
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
  themeColor: "#f3f6f2",
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
      className={`${bodoni.variable} ${manrope.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
