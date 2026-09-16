import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { profile } from "@/data/portfolio";
import "./globals.css";

const manrope = localFont({ src: "./fonts/Manrope-Variable.ttf", variable: "--font-manrope", display: "swap", weight: "200 800" });
const plexMono = localFont({ src: [{ path: "./fonts/IBMPlexMono-Regular.ttf", weight: "400" }, { path: "./fonts/IBMPlexMono-Medium.ttf", weight: "500" }], variable: "--font-plex-mono", display: "swap" });
const description = "Full-Stack Software Developer | Admin & Server-Side Systems | Shopify Ecommerce Developer. Explore Junry Gallego’s web and mobile applications, business systems, Shopify projects, and Figma design.";
export const metadata: Metadata = {
  metadataBase: new URL("https://junry-portfolio.vercel.app"),
  title: { default: "Junry Gallego — Full-Stack Software & Shopify Developer", template: "%s | Junry Gallego" },
  description, applicationName: "Junry Gallego Portfolio", authors: [{ name: profile.name }], creator: profile.name,
  keywords: ["Junry Gallego", "Full-Stack Software Developer", "Shopify Ecommerce Developer", "Admin Systems", "Server-Side Development", "Mobile App Development", "React Native", "Expo", "Figma", "Philippines Developer"],
  alternates: { canonical: "/" },
  openGraph: { title: "Junry Gallego — Software & Ecommerce Development", description, url: "/", siteName: profile.name, locale: "en_PH", type: "website" },
  twitter: { card: "summary_large_image", title: "Junry Gallego — Full-Stack Software & Shopify Developer", description },
};
export const viewport: Viewport = { themeColor: "#f8f9f3", colorScheme: "light" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth" className={`${manrope.variable} ${plexMono.variable}`}><body><a className="skip-link" href="#main">Skip to content</a><SiteHeader />{children}<SiteFooter /></body></html>;
}
