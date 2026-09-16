import type { Metadata } from "next";
import { categories, type Category } from "@/data/portfolio";
import { WorkLibrary } from "@/components/work-library";

export const metadata: Metadata = { title: "Selected Work", description: "Explore Junry Gallego’s full-stack systems, Shopify ecommerce projects, API integrations, Figma design, and mobile applications.", alternates: { canonical: "/work" } };

export default async function WorkPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category } = await searchParams;
  const initialCategory = categories.includes(category as Category) ? category as Category : "All work";
  return <main className="container work-page" id="main"><div className="work-page-heading"><p className="eyebrow"><span className="status-dot" /> PROJECT WORK</p><h1>Projects &<br /><span className="muted-heading">contributions.</span></h1><p>Web and mobile applications, Shopify storefronts, API integrations, and UI/UX prototypes. Each project includes my contribution, the scope of work, and its current status.</p></div><WorkLibrary key={initialCategory} initialCategory={initialCategory} /><div className="work-end-note">Team contributions, private systems, and prototypes are labeled on their project pages.</div></main>;
}
