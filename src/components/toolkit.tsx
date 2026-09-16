import Link from "next/link";
import type { ElementType } from "react";
import { ArrowUpRight, BriefcaseBusiness, Cloud, Database, MonitorSmartphone, ServerCog, ShoppingBag } from "lucide-react";
import { ToolLogo } from "./tool-logo";

type IconComponent = ElementType<{ className?: string }>;

const toolGroups: {
  title: string;
  summary: string;
  icon: IconComponent;
  tools: { name: string }[];
}[] = [
  {
    title: "Frontend engineering",
    summary: "Web and mobile interfaces, reusable components, and screen design.",
    icon: MonitorSmartphone,
    tools: [
      { name: "Next.js" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
      { name: "Figma" },
      { name: "React Native" },
      { name: "Expo" },
    ],
  },
  {
    title: "Backend and APIs",
    summary: "Server-side logic, authentication, API integration, and request testing.",
    icon: ServerCog,
    tools: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "Laravel" },
      { name: "Django" },
      { name: "PHP" },
      { name: "Python" },
      { name: "Postman" },
      { name: "Stripe" },
    ],
  },
  {
    title: "Data and admin operations",
    summary: "Database structure, imports, record cleanup, and operational reports.",
    icon: Database,
    tools: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "Supabase" },
      { name: "MongoDB" },
      { name: "Redis" },
      { name: "Microsoft 365" },
    ],
  },
  {
    title: "Ecommerce and CRO",
    summary: "Theme development, landing pages, analytics, email flows, and conversion rate optimization (CRO).",
    icon: ShoppingBag,
    tools: [
      { name: "Shopify" },
      { name: "WooCommerce" },
      { name: "WordPress" },
      { name: "Webflow" },
      { name: "Wix" },
      { name: "Google Analytics" },
      { name: "Google Ads" },
      { name: "Mailchimp" },
      { name: "Shopify Liquid" },
      { name: "Replo" },
      { name: "GemPages" },
      { name: "Funnelish" },
      { name: "Klaviyo" },
      { name: "Microsoft Clarity" },
      { name: "Shopify Analytics" },
      { name: "Google Merchant Center" },
      { name: "PageSpeed Insights" },
    ],
  },
  {
    title: "Cloud and deployment",
    summary: "Hosting, server configuration, releases, error monitoring, and maintenance.",
    icon: Cloud,
    tools: [
      { name: "Amazon AWS" },
      { name: "Vercel" },
      { name: "Nginx" },
      { name: "Docker" },
      { name: "Cloudflare" },
      { name: "GitHub Actions" },
      { name: "Sentry" },
      { name: "PM2" },
    ],
  },
  {
    title: "Delivery and collaboration",
    summary: "Version control, task tracking, documentation, and communication with remote teams.",
    icon: BriefcaseBusiness,
    tools: [
      { name: "GitHub" },
      { name: "GitLab" },
      { name: "Bitbucket" },
      { name: "Slack" },
      { name: "Asana" },
      { name: "Notion" },
      { name: "Trello" },
      { name: "Zapier" },
    ],
  },
];


const relatedWork = [
  { label: "PetMate design & prototype", href: "/work/petmate" },
  { label: "IcyBreeze booking system", href: "/work/icybreeze" },
  { label: "Revive Recovery admin system", href: "/work/revive-recovery-australia" },
  { label: "Shopify project work", href: "/work?category=Shopify%20%26%20ecommerce" },
  { label: "Revive Recovery infrastructure", href: "/work/revive-recovery-australia#scope" },
  { label: "Salted Seas team contribution", href: "/work/salted-seas" },
];

export function Toolkit() {
  return (
    <section className="section container toolkit-section" id="tools" aria-labelledby="toolkit-title">
      <div className="section-heading">
        <div><p className="eyebrow"><span className="section-index">05 /</span> TOOLS & TECHNOLOGIES</p><h2 id="toolkit-title">Tools I work with.</h2></div>
        <p className="section-intro">Tools used across development, ecommerce, and day-to-day project work. The stack depends on the project; each project page lists the technologies used for that work.</p>
      </div>
      <div className="toolkit-grid">
        {toolGroups.map((group, index) => (
          <article className="toolkit-group" key={group.title}>
            <div className="toolkit-group-heading"><span aria-hidden="true"><group.icon /></span><h3>{group.title}</h3></div>
            <p>{group.summary}</p>
            <ul className="toolkit-list">
              {group.tools.map(tool => <li key={tool.name}><ToolLogo name={tool.name} />{tool.name}</li>)}
            </ul>
            <Link className="toolkit-reference" href={relatedWork[index].href}>{relatedWork[index].label}<ArrowUpRight size={14} /></Link>
          </article>
        ))}
      </div>
    </section>
  );
}
