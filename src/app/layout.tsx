import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingCursors } from "@/components/floating-cursors";
import { profile } from "@/data/portfolio";
import "./globals.css";
import "./cinema.css";

const manrope = localFont({ src: "./fonts/Manrope-Variable.ttf", variable: "--font-manrope", display: "swap", weight: "200 800" });
const anton = localFont({ src: "./fonts/Anton-Regular.woff2", variable: "--font-anton", display: "swap", weight: "400" });
const serif = localFont({ src: "./fonts/InstrumentSerif-Italic.woff2", variable: "--font-serif", display: "swap", weight: "400", style: "italic" });
const plexMono = localFont({ src: [{ path: "./fonts/IBMPlexMono-Regular.ttf", weight: "400" }, { path: "./fonts/IBMPlexMono-Medium.ttf", weight: "500" }], variable: "--font-plex-mono", display: "swap" });
const description = "Full-Stack Software Developer | Admin & Server-Side Systems | Shopify Ecommerce Developer. Explore Junry Jumawan Gallego’s web and mobile applications, business systems, Shopify projects, and Figma design.";
export const metadata: Metadata = {
  metadataBase: new URL("https://junry-portfolio.vercel.app"),
  title: { default: "Junry Jumawan Gallego — Full-Stack Software & Shopify Developer", template: "%s | Junry Jumawan Gallego" },
  description, applicationName: "Junry Jumawan Gallego Portfolio", authors: [{ name: profile.name }], creator: profile.name,
  keywords: ["Junry Jumawan Gallego", "Junry Jumawan", "Junry Gallego", "Full-Stack Software Developer", "Shopify Ecommerce Developer", "Admin Systems", "Server-Side Development", "Mobile App Development", "React Native", "Expo", "Figma", "Philippines Developer"],
  alternates: { canonical: "/" },
  openGraph: { title: "Junry Jumawan Gallego — Software & Ecommerce Development", description, url: "/", siteName: profile.name, locale: "en_PH", type: "website" },
  twitter: { card: "summary_large_image", title: "Junry Jumawan Gallego — Full-Stack Software & Shopify Developer", description },
};
export const viewport: Viewport = { themeColor: "#06080f", colorScheme: "dark" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth" className={`${manrope.variable} ${plexMono.variable} ${anton.variable} ${serif.variable}`} suppressHydrationWarning><body suppressHydrationWarning><a className="skip-link" href="#main">Skip to content</a><SiteHeader />{children}<SiteFooter /><FloatingCursors /></body></html>;
}
