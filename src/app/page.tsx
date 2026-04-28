import type { CSSProperties, ElementType, ReactNode } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  FileText,
  Eye,
  Globe2,
  LineChart,
  Mail,
  MapPin,
  MonitorSmartphone,
  PanelsTopLeft,
  Phone,
  Rocket,
  ServerCog,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  WandSparkles,
  Workflow,
  Zap,
} from "lucide-react";
import {
  SiAsana,
  SiBitbucket,
  SiClickup,
  SiDjango,
  SiElementor,
  SiExpress,
  SiGit,
  SiGithub,
  SiGitlab,
  SiGmail,
  SiGoogleads,
  SiGoogleanalytics,
  SiGooglesheets,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiNotion,
  SiPhp,
  SiPm2,
  SiPostgresql,
  SiPython,
  SiReact,
  SiShopify,
  SiSlack,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTrello,
  SiTypescript,
  SiVercel,
  SiWebflow,
  SiWhatsapp,
  SiWix,
  SiWoocommerce,
  SiWordpress,
} from "react-icons/si";

type IconComponent = ElementType<{ className?: string }>;

const site = {
  name: "Junry Jumawan Gallego",
  initials: "JG",
  role: "Full-Stack Web Developer",
  email: "junry.jumawan4@gmail.com",
  emailLink: "mailto:junry.jumawan4@gmail.com",
  phone: "+63 965-861-4859",
  phoneLink: "tel:+639658614859",
  whatsapp: "https://wa.me/639658614859",
  resume:
    "https://drive.google.com/file/d/1yhbb2fapt0b2Q_4wq80DgaeXCGZyoof0/view?usp=sharing",
  location: "Iligan City, Lanao del Norte, Philippines",
  portfolio: "https://snopeeee.github.io/My-Portfolio/",
};

const navItems: {
  label: string;
  href: string;
  icon: IconComponent;
}[] = [
  { label: "Impact", href: "#impact", icon: BarChart3 },
  { label: "Work", href: "#work", icon: BriefcaseBusiness },
  { label: "Tools", href: "#tools", icon: Code2 },
  { label: "Links", href: "#links", icon: Globe2 },
  { label: "Contact", href: "#contact", icon: Mail },
];

const metrics = [
  {
    value: "12-18%",
    label: "Cleaner member and payment records after validation passes",
    icon: Database,
  },
  {
    value: "20-30%",
    label: "Less weekly reporting effort with admin dashboards",
    icon: BarChart3,
  },
  {
    value: "8-15%",
    label: "Typical storefront speed lift after practical theme cleanup",
    icon: Zap,
  },
  {
    value: "2023-2025",
    label: "Shopify, full-stack, remote, and freelance delivery",
    icon: Rocket,
  },
];

const impactCards = [
  {
    icon: ShoppingBag,
    title: "Commerce that sells clearly",
    text: "Shopify storefronts, Liquid sections, product pages, collections, cart behavior, checkout flow, SEO, and analytics-led funnel refinement.",
  },
  {
    icon: ServerCog,
    title: "Systems that reduce admin drag",
    text: "Custom CRM workflows, arrears tracking, member profiles, data validation, reporting, and role-focused dashboards for daily operations.",
  },
  {
    icon: Workflow,
    title: "Integrations that keep data moving",
    text: "REST APIs, JSON mapping, product synchronization, Shopify Admin data checks, payment tooling, email flows, and third-party platform setup.",
  },
];

const work = [
  {
    label: "Operations system",
    title: "Gym Debt Management and CRM",
    company: "Anytime Fitness SEB Group",
    period: "2024 - Present",
    href: "https://www.anytimefitness.com/",
    icon: BriefcaseBusiness,
    summary:
      "Built and maintained a production admin system for member profiles, arrears tracking, payment visibility, follow-up workflows, reporting, and daily operations.",
    wins: [
      "Improved day-to-day data consistency by roughly 12-18% with validation and cleanup.",
      "Reduced weekly report preparation time by roughly 20-30% with dashboards and exports.",
      "Deployed on AWS EC2 with PM2 and Nginx for stable production support.",
    ],
    stack: ["Node.js", "Admin dashboards", "Reports", "AWS EC2", "PM2", "Nginx"],
  },
  {
    label: "Shopify storefront",
    title: "Salted Seas conversion-focused build",
    company: "Salted Seas",
    period: "2025",
    href: "https://saltedseas.com/",
    icon: SiShopify,
    summary:
      "Collaborated with designers, copywriters, and the store owner to refine a branded Shopify storefront around the customer journey.",
    wins: [
      "Implemented page sections aligned from landing pages to checkout.",
      "Improved content hierarchy, CTA placement, and product-page interaction.",
      "Used Shopify Liquid, Replo, Webflow, Asana, Slack, and analytics feedback.",
    ],
    stack: ["Shopify", "Liquid", "Replo", "Webflow", "GA4", "Clarity"],
  },
  {
    label: "API integration",
    title: "Motovan B2B product data to Shopify",
    company: "Motovan to Shopify",
    period: "2024",
    href: "https://motovan.com/",
    icon: Workflow,
    summary:
      "Mapped JSON-based B2B product data into Shopify workflows for SKUs, pricing, inventory, and product details.",
    wins: [
      "Supported REST API consumption and troubleshooting.",
      "Validated imported data inside Shopify Admin.",
      "Helped keep connected product listings accurate and consistent.",
    ],
    stack: ["REST APIs", "JSON", "Shopify Admin", "Product sync", "Validation"],
  },
];

const experience = [
  {
    company: "Anytime Fitness SEB Group",
    role: "Software Developer and Administrator",
    period: "2024 - Present",
    href: "https://www.anytimefitness.com/",
    icon: BriefcaseBusiness,
  },
  {
    company: "Salted Seas",
    role: "Shopify Developer, team contract",
    period: "2025",
    href: "https://saltedseas.com/",
    icon: SiShopify,
  },
  {
    company: "Flowpouch",
    role: "Shopify Developer, team environment",
    period: "2024",
    href: "https://flowpouch.com/",
    icon: Store,
  },
  {
    company: "Pagulayan Cues",
    role: "Shopify Developer, team environment",
    period: "2023",
    href: "https://pagulayancues.com/",
    icon: Store,
  },
  {
    company: "Marcozo",
    role: "Shopify Developer, contract build",
    period: "2024",
    href: "https://www.marcozo.com/",
    icon: SiShopify,
  },
  {
    company: "Two Brothers Grooming",
    role: "Ecommerce storefront project",
    period: "Live site",
    href: "https://twobrothersgrooming.com/",
    icon: Store,
  },
  {
    company: "Motovan to Shopify",
    role: "B2B API integration support",
    period: "2024",
    href: "https://motovan.com/",
    icon: Workflow,
  },
];

const toolGroups = [
  {
    title: "Ecommerce and funnels",
    icon: ShoppingBag,
    summary:
      "Shopify builds, buying journeys, landing pages, product pages, cart, checkout, email flows, and funnel tooling.",
    tools: [
      { name: "Shopify", icon: SiShopify, tone: "green" },
      { name: "Shopify Admin", icon: Store, tone: "green" },
      { name: "Liquid sections", icon: Code2, tone: "ink" },
      { name: "Metafields", icon: Database, tone: "blue" },
      { name: "Replo", icon: PanelsTopLeft, tone: "pink" },
      { name: "GemPages", icon: WandSparkles, tone: "yellow" },
      { name: "Webflow", icon: SiWebflow, tone: "blue" },
      { name: "Klaviyo flows", icon: Mail, tone: "green" },
      { name: "Funnelish", icon: Workflow, tone: "orange" },
      { name: "Stripe", icon: SiStripe, tone: "violet" },
      { name: "Checkout QA", icon: ShoppingBag, tone: "green" },
      { name: "Cart optimization", icon: Workflow, tone: "blue" },
      { name: "Technical SEO", icon: LineChart, tone: "ink" },
    ],
  },
  {
    title: "Google, analytics, and growth",
    icon: BarChart3,
    summary:
      "Tracking, merchant visibility, funnel review, heatmaps, SEO checks, and data-driven improvement work.",
    tools: [
      { name: "Google Analytics 4", icon: SiGoogleanalytics, tone: "orange" },
      { name: "GA4 funnels", icon: Workflow, tone: "orange" },
      { name: "Google Merchant Center", icon: SiGoogleads, tone: "green" },
      { name: "Google Ads", icon: SiGoogleads, tone: "blue" },
      { name: "Google Tag Manager", icon: Code2, tone: "ink" },
      { name: "Search Console", icon: LineChart, tone: "green" },
      { name: "Microsoft Clarity", icon: Eye, tone: "blue" },
      { name: "Shopify Analytics", icon: BarChart3, tone: "green" },
      { name: "PageSpeed Insights", icon: Zap, tone: "yellow" },
      { name: "Heatmap review", icon: Eye, tone: "violet" },
      { name: "Product feed QA", icon: Database, tone: "blue" },
      { name: "Google Workspace", icon: SiGmail, tone: "red" },
    ],
  },
  {
    title: "Full-stack engineering",
    icon: Code2,
    summary: "Modern UI, server logic, APIs, auth, data handling, and admin workflows.",
    tools: [
      { name: "JavaScript", icon: SiJavascript, tone: "yellow" },
      { name: "TypeScript", icon: SiTypescript, tone: "blue" },
      { name: "React", icon: SiReact, tone: "cyan" },
      { name: "Next.js", icon: SiNextdotjs, tone: "ink" },
      { name: "Tailwind CSS", icon: SiTailwindcss, tone: "cyan" },
      { name: "HTML5", icon: SiHtml5, tone: "orange" },
      { name: "PHP", icon: SiPhp, tone: "violet" },
      { name: "Python", icon: SiPython, tone: "blue" },
      { name: "Node.js", icon: SiNodedotjs, tone: "green" },
      { name: "Express.js", icon: SiExpress, tone: "ink" },
      { name: "Laravel", icon: SiLaravel, tone: "red" },
      { name: "Django", icon: SiDjango, tone: "green" },
      { name: "REST APIs", icon: Workflow, tone: "blue" },
      { name: "JSON mapping", icon: Database, tone: "green" },
      { name: "Auth flows", icon: ShieldCheck, tone: "violet" },
      { name: "Admin logic", icon: ServerCog, tone: "ink" },
    ],
  },
  {
    title: "Data and admin operations",
    icon: Database,
    summary:
      "CRM-style records, spreadsheet cleanup, Supabase/Postgres-ready data, B2B product sync, reports, validation, and operational dashboards.",
    tools: [
      { name: "Supabase", icon: SiSupabase, tone: "green" },
      { name: "MySQL", icon: SiMysql, tone: "blue" },
      { name: "PostgreSQL", icon: SiPostgresql, tone: "blue" },
      { name: "MongoDB", icon: SiMongodb, tone: "green" },
      { name: "Google Sheets", icon: SiGooglesheets, tone: "green" },
      { name: "ClubWise reports", icon: Database, tone: "orange" },
      { name: "CSV cleanup", icon: FileText, tone: "green" },
      { name: "Data validation", icon: BadgeCheck, tone: "blue" },
      { name: "Data migration", icon: Workflow, tone: "violet" },
      { name: "Admin dashboards", icon: BarChart3, tone: "green" },
      { name: "Member profiles", icon: BriefcaseBusiness, tone: "ink" },
      { name: "Arrears tracking", icon: LineChart, tone: "red" },
      { name: "Status workflows", icon: Workflow, tone: "blue" },
      { name: "Payment tracking", icon: SiStripe, tone: "violet" },
      { name: "Payment reconciliation", icon: BadgeCheck, tone: "green" },
      { name: "B2B product sync", icon: Workflow, tone: "blue" },
      { name: "Schema planning", icon: Database, tone: "violet" },
      { name: "SQL reporting", icon: BarChart3, tone: "blue" },
      { name: "Reporting exports", icon: FileText, tone: "ink" },
    ],
  },
  {
    title: "Deployment, Amazon AWS, CMS, and QA",
    icon: Cloud,
    summary:
      "Amazon/AWS hosting basics, production server configuration, CMS builds, mobile QA, SEO, and launch checks.",
    tools: [
      { name: "Amazon Web Services", icon: Cloud, tone: "orange" },
      { name: "Amazon EC2", icon: ServerCog, tone: "orange" },
      { name: "Amazon S3 basics", icon: Database, tone: "yellow" },
      { name: "CloudFront-ready CDN", icon: Zap, tone: "blue" },
      { name: "Route 53 DNS basics", icon: Globe2, tone: "green" },
      { name: "IAM/env hygiene", icon: ShieldCheck, tone: "violet" },
      { name: "PM2", icon: SiPm2, tone: "green" },
      { name: "Nginx", icon: SiNginx, tone: "green" },
      { name: "Vercel", icon: SiVercel, tone: "ink" },
      { name: "Environment vars", icon: ServerCog, tone: "blue" },
      { name: "YAML pipelines", icon: Code2, tone: "violet" },
      { name: "WordPress", icon: SiWordpress, tone: "blue" },
      { name: "WooCommerce", icon: SiWoocommerce, tone: "violet" },
      { name: "Elementor", icon: SiElementor, tone: "pink" },
      { name: "Bricks Builder", icon: PanelsTopLeft, tone: "orange" },
      { name: "Wix", icon: SiWix, tone: "ink" },
      { name: "Responsive QA", icon: MonitorSmartphone, tone: "cyan" },
      { name: "Technical SEO", icon: LineChart, tone: "green" },
    ],
  },
  {
    title: "Workflow and collaboration",
    icon: ShieldCheck,
    summary: "Version control, communication, documentation, project tracking, and support.",
    tools: [
      { name: "Git", icon: SiGit, tone: "orange" },
      { name: "GitHub", icon: SiGithub, tone: "ink" },
      { name: "GitLab", icon: SiGitlab, tone: "orange" },
      { name: "Bitbucket", icon: SiBitbucket, tone: "blue" },
      { name: "Slack", icon: SiSlack, tone: "violet" },
      { name: "Asana", icon: SiAsana, tone: "pink" },
      { name: "Notion", icon: SiNotion, tone: "ink" },
      { name: "Trello", icon: SiTrello, tone: "blue" },
      { name: "ClickUp", icon: SiClickup, tone: "violet" },
      { name: "Documentation", icon: BadgeCheck, tone: "green" },
      { name: "Tech support", icon: ShieldCheck, tone: "blue" },
      { name: "Fast delivery", icon: Rocket, tone: "red" },
    ],
  },
];

const liveLinks = [
  { name: "Salted Seas", href: "https://saltedseas.com/", type: "Shopify skincare" },
  { name: "Flowpouch", href: "https://flowpouch.com/", type: "Shopify wellness" },
  { name: "Pagulayan Cues", href: "https://pagulayancues.com/", type: "Billiards ecommerce" },
  { name: "Marcozo", href: "https://www.marcozo.com/", type: "Jewelry ecommerce" },
  { name: "Two Brothers Grooming", href: "https://twobrothersgrooming.com/", type: "Grooming ecommerce" },
  { name: "Angelic Motion", href: "https://angelicmotion.com/", type: "Streetwear ecommerce" },
  { name: "Sad Boy Saga", href: "https://sadboysaga.com/", type: "Streetwear ecommerce" },
  { name: "SudorCure", href: "https://www.sudorcure.com/", type: "Health ecommerce" },
  { name: "Sacred Taste", href: "https://www.sacredtaste.com/", type: "Cacao ecommerce" },
  { name: "VAG Garage", href: "https://vaggarage.net/", type: "Automotive website" },
  { name: "The Dope Connect", href: "https://thedopeconnect.com/", type: "Supplements store" },
  { name: "KerryBerryCo", href: "https://kerryberryco.com/", type: "Fashion ecommerce" },
  { name: "Volts and Watts", href: "https://voltsandwatts.com/", type: "Tech ecommerce" },
  { name: "Motovan", href: "https://motovan.com/", type: "B2B product data" },
  { name: "Legacy portfolio", href: site.portfolio, type: "Previous portfolio" },
];

function IconBox({
  icon: Icon,
  tone = "ink",
}: {
  icon: IconComponent;
  tone?: string;
}) {
  return (
    <span className={`icon-box icon-${tone}`} aria-hidden="true">
      <Icon className="h-5 w-5" />
    </span>
  );
}

function Chip({ children, icon: Icon }: { children: ReactNode; icon?: IconComponent }) {
  return (
    <span className="chip">
      {Icon ? <Icon className="h-3.5 w-3.5" /> : null}
      {children}
    </span>
  );
}

function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="max-w-4xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title mt-4 text-4xl text-foreground sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-muted sm:text-lg">{text}</p>
    </div>
  );
}

function ExternalAnchor({
  href,
  children,
  className,
  label,
  style,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  label?: string;
  style?: CSSProperties;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={label}
      style={style}
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <div className="loader-screen" aria-hidden="true">
        <div className="loader-card">
          <div className="loader-mark">{site.initials}</div>
          <p className="loader-kicker">Loading portfolio</p>
          <h1>Preparing Junry&apos;s ecommerce and full-stack work.</h1>
          <div className="loader-track">
            <span />
          </div>
          <div className="loader-stack">
            <span>Shopify</span>
            <span>Next.js</span>
            <span>APIs</span>
            <span>Dashboards</span>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-7xl px-5 pb-28 pt-5 sm:px-8 lg:px-10 lg:pb-16">
        <header className="sticky top-4 z-40">
          <div className="nav-shell surface-card px-4 py-3 sm:px-5">
            <div className="header-main">
              <a href="#top" className="group flex min-w-0 items-center gap-3">
                <span className="logo-mark">{site.initials}</span>
                <span className="min-w-0">
                  <span className="block truncate font-display text-base font-bold">
                    {site.name}
                  </span>
                  <span className="block truncate text-xs font-bold uppercase tracking-[0.16em] text-muted">
                    Ecommerce + Software Engineer
                  </span>
                </span>
              </a>

              <div className="flex items-center gap-2">
                <a
                  href={site.emailLink}
                  className="contact-icon"
                  aria-label="Email Junry with Gmail"
                >
                  <SiGmail className="h-4 w-4" />
                </a>
                <ExternalAnchor
                  href={site.whatsapp}
                  className="contact-icon"
                  label="Message Junry on WhatsApp"
                >
                  <SiWhatsapp className="h-4 w-4" />
                </ExternalAnchor>
                <a
                  href="#contact"
                  className="button-base button-primary hidden sm:inline-flex"
                >
                  <span>Hire me</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="desktop-nav-panel">
              <div className="availability-pill">
                <Sparkles className="h-4 w-4" />
                <span>
                  Available for remote full-stack, Shopify, and operations
                  projects
                </span>
              </div>

              <nav className="desktop-nav" aria-label="Portfolio sections">
                {navItems.map(({ label, href, icon: Icon }) => (
                  <a key={label} href={href} className="nav-link">
                    <Icon className="h-4 w-4" />
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </header>

        <section
          id="top"
          className="grid min-h-[calc(100vh-92px)] gap-8 pt-16 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center"
        >
          <div className="page-enter">
            <div className="inline-flex items-center gap-3 border-l-4 border-accent bg-white/70 px-4 py-3 text-sm font-bold text-foreground shadow-sm lg:hidden">
              <Sparkles className="h-4 w-4 text-accent" />
              Available for remote full-stack, Shopify, and operations projects
            </div>

            <h1 className="hero-title mt-7 max-w-5xl text-5xl text-foreground sm:text-6xl xl:text-7xl">
              Developer for ecommerce funnels, admin systems, and API-connected
              growth.
            </h1>

            <p className="mt-6 max-w-3xl text-xl leading-9 text-muted">
              I help teams turn messy business workflows into polished web
              experiences - from Shopify storefronts and checkout journeys to
              custom CRM dashboards, data cleanup, reporting, and integrations.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={site.emailLink} className="button-base button-primary">
                <SiGmail className="h-5 w-5" />
                <span>Email me</span>
              </a>
              <ExternalAnchor href={site.whatsapp} className="button-base button-whatsapp">
                <SiWhatsapp className="h-5 w-5" />
                WhatsApp
              </ExternalAnchor>
              <a href="#links" className="button-base button-secondary">
                View live links
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <ExternalAnchor href={site.resume} className="resume-underlink">
              <FileText className="h-4 w-4" />
              <span>View resume on Google Drive</span>
              <ArrowUpRight className="h-4 w-4" />
            </ExternalAnchor>

            <div className="mt-9 flex flex-wrap gap-2">
              <Chip icon={SiNextdotjs}>Next.js 16</Chip>
              <Chip icon={SiTailwindcss}>Tailwind CSS 4</Chip>
              <Chip icon={SiReact}>React 19</Chip>
              <Chip icon={SiShopify}>Shopify Liquid</Chip>
              <Chip icon={ServerCog}>AWS + Nginx</Chip>
            </div>
          </div>

          <aside className="hero-console page-enter">
            <div className="console-top">
              <span className="status-dot" />
              <span>Junry delivery console</span>
            </div>
            <div className="mt-6 space-y-4">
              {[
                {
                  status: "01",
                  title: "Understand the business problem",
                  text: "Clarify the goal, audience, current blockers, must-have pages, admin needs, data sources, and what success should look like.",
                },
                {
                  status: "02",
                  title: "Map the funnel or workflow",
                  text: "Plan the buyer journey, CRM flow, product sync, dashboard screens, reporting path, and the tools needed before building.",
                },
                {
                  status: "03",
                  title: "Build clean, reusable pieces",
                  text: "Develop Shopify sections, Next.js interfaces, admin features, API integrations, and data logic with readable code and responsive layouts.",
                },
                {
                  status: "04",
                  title: "Validate before client handoff",
                  text: "Test mobile behavior, CTA flow, checkout/cart paths, imported data, analytics setup, reports, speed, and common edge cases.",
                },
                {
                  status: "05",
                  title: "Launch, monitor, and improve",
                  text: "Deploy, watch logs and analytics, gather admin/client feedback, fix issues quickly, and keep improving the store or system.",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="console-row"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <span className="console-number">{item.status}</span>
                  <span>
                    <strong>{item.title}</strong>
                    <small>{item.text}</small>
                  </span>
                </div>
              ))}
            </div>
            <div className="signal-board mt-6">
              {["Discovery", "Funnel map", "Reusable UI", "API/data QA", "Mobile test", "Analytics", "Launch", "Support"].map(
                (item, index) => (
                  <span
                    key={item}
                    style={{ "--delay": `${index * 80}ms` } as CSSProperties}
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </aside>
        </section>

        <nav className="mobile-nav-dock lg:hidden" aria-label="Mobile portfolio navigation">
          {navItems.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} className="mobile-nav-link">
              <Icon className="h-4 w-4" />
              <span>{label}</span>
            </a>
          ))}
        </nav>

        <section id="impact" className="pt-10">
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric, index) => (
              <article
                key={metric.label}
                className="metric-card surface-card"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <IconBox icon={metric.icon} tone={index === 1 ? "blue" : "green"} />
                <p className="mt-5 font-display text-3xl font-bold text-foreground">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">{metric.label}</p>
              </article>
            ))}
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {impactCards.map((card, index) => (
              <article
                key={card.title}
                className="feature-card surface-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <IconBox icon={card.icon} tone={index === 0 ? "green" : "blue"} />
                <h2 className="mt-5 font-display text-2xl font-bold">{card.title}</h2>
                <p className="mt-4 text-sm leading-7 text-muted">{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="pt-24">
          <SectionTitle
            eyebrow="Selected work"
            title="Business-shaped builds with visible operational impact"
            text="The strongest stories are not just about frameworks. They are about better admin visibility, cleaner product data, smoother storefront journeys, and faster team execution."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {work.map((project, index) => (
              <article
                key={project.title}
                className="work-card surface-card"
                style={{ animationDelay: `${index * 110}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <IconBox icon={project.icon} tone={index === 1 ? "green" : "blue"} />
                  <ExternalAnchor href={project.href} className="mini-link">
                    Visit
                    <ExternalLink className="h-3.5 w-3.5" />
                  </ExternalAnchor>
                </div>
                <p className="eyebrow mt-6">{project.label}</p>
                <h3 className="mt-3 font-display text-2xl font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm font-bold uppercase tracking-[0.14em] text-muted">
                  {project.company} / {project.period}
                </p>
                <p className="mt-5 text-sm leading-7 text-muted">{project.summary}</p>
                <ul className="mt-5 space-y-3">
                  {project.wins.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-7 text-muted">
                      <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="pt-24">
          <SectionTitle
            eyebrow="Experience"
            title="Remote delivery across store owners, agencies, admins, and product teams"
            text="Each role highlights the kind of developer profile clients remember: reliable delivery, practical communication, responsive support, and comfort across design, data, and code."
          />

          <div className="mt-10 grid gap-3 lg:grid-cols-2">
            {experience.map((item, index) => (
              <ExternalAnchor
                key={`${item.company}-${item.role}`}
                href={item.href}
                className="experience-row surface-card"
              >
                <div className="flex items-center gap-4">
                  <IconBox icon={item.icon} tone={index % 2 ? "green" : "blue"} />
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-accent-strong">
                      {item.company}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-bold">{item.role}</h3>
                  </div>
                </div>
                <span className="experience-period">
                  {item.period}
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </ExternalAnchor>
            ))}
          </div>
        </section>

        <section id="tools" className="pt-24">
          <SectionTitle
            eyebrow="Tools and skills"
            title="A deeper ecommerce and full-stack toolkit, shown with recognizable icons"
            text="This stack makes the profile feel current and practical: Next.js, Tailwind, Shopify, APIs, databases, deployment, analytics, funnel optimization, CMS platforms, and remote collaboration."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {toolGroups.map((group, groupIndex) => (
              <article
                key={group.title}
                className="tool-panel surface-card"
                style={{ animationDelay: `${groupIndex * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <IconBox icon={group.icon} tone={groupIndex % 2 ? "blue" : "green"} />
                  <div>
                    <h3 className="font-display text-2xl font-bold">{group.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted">{group.summary}</p>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {group.tools.map((tool) => (
                    <div key={tool.name} className="tool-tile">
                      <IconBox icon={tool.icon} tone={tool.tone} />
                      <span>{tool.name}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="links" className="pt-24">
          <SectionTitle
            eyebrow="Live links"
            title="Public websites connected to the resume profile"
            text="These links make the work history easier to scan and verify. Some private admin systems are described in case studies instead of linked directly."
          />

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {liveLinks.map((link, index) => (
              <ExternalAnchor
                key={link.href}
                href={link.href}
                className="site-link surface-card"
                style={{ animationDelay: `${index * 45}ms` } as CSSProperties}
              >
                <span>
                  <strong>{link.name}</strong>
                  <small>{link.type}</small>
                </span>
                <ArrowUpRight className="h-5 w-5" />
              </ExternalAnchor>
            ))}
          </div>
        </section>

        <section id="contact" className="pt-24">
          <div className="contact-panel surface-card-strong">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 className="section-title mt-4 max-w-4xl text-4xl text-foreground sm:text-5xl">
                Need a developer who can improve the store and understand the
                system behind it?
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                Reach out for Shopify builds, conversion improvements, API
                integrations, admin dashboards, WordPress support, reporting,
                deployments, or long-term technical help.
              </p>
            </div>

            <div className="mt-8 grid gap-3 md:grid-cols-2">
              <a href={site.emailLink} className="contact-card">
                <IconBox icon={SiGmail} tone="red" />
                <span>
                  <strong>{site.email}</strong>
                  <small>Gmail</small>
                </span>
              </a>
              <ExternalAnchor href={site.whatsapp} className="contact-card">
                <IconBox icon={SiWhatsapp} tone="green" />
                <span>
                  <strong>{site.phone}</strong>
                  <small>WhatsApp</small>
                </span>
              </ExternalAnchor>
              <a href={site.phoneLink} className="contact-card">
                <IconBox icon={Phone} tone="blue" />
                <span>
                  <strong>{site.phone}</strong>
                  <small>Phone</small>
                </span>
              </a>
              <ExternalAnchor href={site.resume} className="contact-card">
                <IconBox icon={FileText} tone="green" />
                <span>
                  <strong>View resume</strong>
                  <small>Google Drive PDF</small>
                </span>
              </ExternalAnchor>
              <div className="contact-card">
                <IconBox icon={MapPin} tone="orange" />
                <span>
                  <strong>{site.location}</strong>
                  <small>Location</small>
                </span>
              </div>
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-3 py-10 text-sm font-semibold text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>Built with Next.js, React, Tailwind CSS, and a sharper story.</span>
          <ExternalAnchor href={site.portfolio} className="inline-flex items-center gap-2">
            Previous portfolio
            <Globe2 className="h-4 w-4" />
          </ExternalAnchor>
        </footer>
      </div>
    </main>
  );
}
