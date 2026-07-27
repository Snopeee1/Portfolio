"use client";

import Image from "next/image";
import {
  type CSSProperties,
  type ElementType,
  type FormEvent,
  useEffect,
  useState,
} from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  CircleDot,
  ClipboardCheck,
  Cloud,
  Code2,
  Copy,
  Database,
  ExternalLink,
  FileText,
  Gauge,
  LineChart,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Network,
  Phone,
  Search,
  ServerCog,
  ShieldCheck,
  ShoppingBag,
  Store,
  Workflow,
  X,
} from "lucide-react";
import { FaAws } from "react-icons/fa6";
import {
  SiAsana,
  SiBitbucket,
  SiCloudflare,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGithub,
  SiGithubactions,
  SiGitlab,
  SiGoogleads,
  SiGoogleanalytics,
  SiJavascript,
  SiLaravel,
  SiMailchimp,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiNotion,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiRedis,
  SiSentry,
  SiShopify,
  SiSlack,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTrello,
  SiTypescript,
  SiVercel,
  SiWebflow,
  SiWix,
  SiWoocommerce,
  SiWordpress,
  SiZapier,
} from "react-icons/si";

type IconComponent = ElementType<{ className?: string }>;

const site = {
  name: "Junry Jumawan Gallego",
  title: "Software Engineer and Shopify Developer",
  email: "junry.jumawan4@gmail.com",
  emailLink:
    "mailto:junry.jumawan4@gmail.com?subject=Project%20inquiry%20for%20Junry",
  phone: "+63 965-861-4859",
  phoneLink: "tel:+639658614859",
  whatsapp:
    "https://wa.me/639658614859?text=Hi%20Junry%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
  resume:
    "https://drive.google.com/file/d/1yhbb2fapt0b2Q_4wq80DgaeXCGZyoof0/view?usp=sharing",
  location: "Iligan City, Lanao del Norte, Philippines",
};

const roleTitles = ["Software Engineer", "Shopify Developer"] as const;

const navItems = [
  { label: "Systems", href: "#systems", icon: ServerCog },
  { label: "Work", href: "#work", icon: BriefcaseBusiness },
  { label: "Commerce", href: "#commerce", icon: Store },
  { label: "CRO", href: "#growth", icon: LineChart },
  { label: "Tools", href: "#tools", icon: Code2 },
  { label: "Contact", href: "#contact", icon: Mail },
] as const;

const deliveryLayers = [
  {
    index: "01",
    icon: MonitorSmartphone,
    title: "Experience layer",
    text: "Responsive storefronts, admin dashboards, forms, reports, role-based screens, and interfaces people can understand quickly.",
    stack: ["Next.js", "React", "Tailwind CSS", "Shopify Liquid"],
  },
  {
    index: "02",
    icon: ServerCog,
    title: "Application logic",
    text: "Authentication flows, validation, payment states, status workflows, reports, automations, and the business rules behind each screen.",
    stack: ["Node.js", "Express", "Laravel", "Django"],
  },
  {
    index: "03",
    icon: Database,
    title: "Data layer",
    text: "Schema planning, imports, cleanup, migrations, member or product records, structured reporting, and reliable daily data handling.",
    stack: ["PostgreSQL", "MySQL", "Supabase", "MongoDB"],
  },
  {
    index: "04",
    icon: Network,
    title: "Connected services",
    text: "REST APIs, JSON mapping, Shopify Admin workflows, product sync, payments, email systems, analytics, and third-party operations.",
    stack: ["REST APIs", "Shopify Admin", "Stripe", "Google APIs"],
  },
  {
    index: "05",
    icon: Cloud,
    title: "Production layer",
    text: "Deployment, environment configuration, process management, reverse proxy setup, launch QA, monitoring, and production support.",
    stack: ["AWS EC2", "PM2", "Nginx", "Vercel"],
  },
  {
    index: "06",
    icon: ClipboardCheck,
    title: "Quality and handoff",
    text: "Mobile checks, edge cases, tracking verification, data accuracy, documentation, clear handoff, and improvement after real use.",
    stack: ["QA", "Documentation", "Analytics", "Support"],
  },
] as const;

const selectedWork = [
  {
    number: "01",
    label: "Operations software",
    title: "Gym Debt Management and CRM",
    client:
      "Anytime Fitness SEB Group & JYM Group | Australia & United Kingdom",
    period: "2024 - Present",
    icon: ServerCog,
    summary:
      "A production web system supporting SEB Group and JYM Group operations in Australia and the United Kingdom by turning member arrears, payment data, notes, statuses, and follow-up work into a structured admin workflow.",
    impact: [
      "Member profiles, arrears records, payment visibility, and status-based follow-up.",
      "Dashboard reporting and exports that reduce repeated spreadsheet preparation.",
      "ClubWise and DebitSuccess data cleanup, validation, reconciliation, and migration.",
      "AWS EC2 deployment with PM2, Nginx, monitoring, and ongoing production support.",
    ],
    stack: ["Full-stack app", "CRM", "PostgreSQL", "AWS", "Reporting"],
    private: true,
  },
  {
    number: "02",
    label: "B2B data integration",
    title: "Motovan product data to Shopify",
    client: "Motovan to Shopify",
    period: "2024",
    href: "https://motovan.com/",
    icon: Workflow,
    summary:
      "A REST and JSON product synchronization workflow for mapping SKUs, pricing, inventory, and product details into Shopify.",
    impact: [
      "Mapped B2B product fields into Shopify-ready product structures.",
      "Validated imported listings and inventory values inside Shopify Admin.",
      "Investigated API mismatches and reduced avoidable catalog inconsistencies.",
    ],
    stack: ["REST API", "JSON", "Shopify Admin", "Product sync"],
    private: false,
  },
  {
    number: "03",
    label: "Shopify commerce systems",
    title: "Reusable storefront and launch delivery",
    client: "Team and contract projects",
    period: "2023 - 2025",
    href: "https://saltedseas.com/",
    icon: SiShopify,
    summary:
      "Reusable Liquid sections, metafields, product and collection architecture, mobile-first content systems, checkout support, and launch QA.",
    impact: [
      "Built and refined storefronts across beauty, wellness, jewelry, grooming, and specialist retail.",
      "Connected content, product data, email tools, tracking, and conversion-focused page structure.",
      "Delivered revisions with designers, copywriters, editors, owners, and remote project teams.",
    ],
    stack: ["Shopify", "Liquid", "Metafields", "Replo", "GemPages"],
    private: false,
  },
  {
    number: "04",
    label: "Funnel and CRO",
    title: "Offer pages and measurable buying paths",
    client: "Ecommerce projects",
    period: "2024 - 2025",
    href: "https://flowpouch.com/",
    icon: LineChart,
    summary:
      "Funnelish-style offer pages and storefront improvements shaped around clearer messaging, proof, mobile action, checkout confidence, and behavior data.",
    impact: [
      "Mapped landing, product, cart, checkout, email, and follow-up touchpoints.",
      "Reviewed CTA visibility, mobile section order, heatmaps, speed, and tracking.",
      "Built practical offer blocks, bundles, FAQs, trust sections, and repeated actions.",
    ],
    stack: ["Funnelish", "GA4", "Clarity", "Klaviyo", "PageSpeed"],
    private: false,
  },
] as const;

const commerceSamples = [
  {
    name: "Marcozo",
    category: "Jewelry ecommerce",
    href: "https://www.marcozo.com/",
    image: "/brand-assets/marcozo-hero.webp",
    alt: "Marcozo premium jewelry hero with gold pieces arranged on dark volcanic stone",
    accent: "#b9872c",
    title: "A luxury storefront built around product confidence.",
    text: "Shopify setup, theme structure, reusable Liquid sections, metafields, product layouts, collections, navigation, responsive refinement, and launch revisions.",
    tools: ["Shopify", "Liquid", "Metafields", "Mobile QA"],
  },
  {
    name: "Flowpouch",
    category: "Wellness ecommerce and funnel",
    href: "https://flowpouch.com/",
    image: "/brand-assets/flowpouch-hero.webp",
    alt: "Flowpouch mushroom pouch product suspended above clean product pieces",
    accent: "#00a85a",
    title: "An offer-led page system with a clear next step.",
    text: "Team-based Shopify delivery with responsive sections, product education, benefit hierarchy, proof, email flow support, and practical Funnelish and CRO thinking.",
    tools: ["Shopify", "GemPages", "Klaviyo", "Funnelish"],
  },
  {
    name: "Pagulayan Cues",
    category: "Specialist retail",
    href: "https://pagulayancues.com/",
    image: "/brand-assets/pagulayan-hero.webp",
    alt: "Pagulayan Cues Lion Merry Widow collection banner with premium wooden pool cues",
    accent: "#f3bd16",
    title: "Technical product detail presented with champion-level clarity.",
    text: "Theme editing, product and collection structure, responsive layout, navigation refinement, analytics support, Merchant Center, Clarity, and Klaviyo integration.",
    tools: ["Shopify", "GemPages", "GA4", "Merchant Center"],
  },
  {
    name: "Salted Seas",
    category: "Skincare ecommerce",
    href: "https://saltedseas.com/",
    image: "/brand-assets/salted-seas-hero.jpg",
    alt: "Salted Seas skincare products displayed on a sunlit beach",
    accent: "#099bb2",
    title: "A calm visual system that keeps product education moving.",
    text: "Cross-functional page building with clear content hierarchy, landing-to-checkout flow, CTA placement, Replo, Webflow, analytics feedback, and responsive QA.",
    tools: ["Shopify", "Replo", "Webflow", "Clarity"],
  },
  {
    name: "Two Brothers Grooming",
    category: "Grooming ecommerce",
    href: "https://twobrothersgrooming.com/",
    image: "/brand-assets/two-brothers-hero.webp",
    alt: "Two Brothers Grooming texture powder and sea salt spray in a premium product scene",
    accent: "#183c2d",
    title: "Editorial grooming commerce with product utility up front.",
    text: "Brand-aligned storefront support, reusable page sections, product storytelling, mobile-first shopping actions, trust content, and conversion-focused refinement.",
    tools: ["Shopify", "Liquid", "CRO", "Responsive UI"],
  },
  {
    name: "SudorCure",
    category: "Health ecommerce",
    href: "https://www.sudorcure.com/",
    image: "/brand-assets/sudorcure-hero.webp",
    alt: "SudorCure Saalio iontophoresis treatment device with two treatment trays",
    accent: "#0d7db5",
    title: "Complex treatment information shaped into a confident buying path.",
    text: "Shopify ecommerce work supporting treatment discovery, product education, trust, navigation, responsive shopping journeys, and clear conversion actions.",
    tools: ["Shopify", "Product education", "UX", "Mobile QA"],
  },
] as const;

const growthChecks = [
  {
    icon: Search,
    title: "Find the friction",
    text: "Review landing pages, product pages, navigation, mobile order, speed, search behavior, cart actions, and checkout confidence.",
  },
  {
    icon: Workflow,
    title: "Map the full path",
    text: "Connect the offer, product education, proof, cart, checkout, email capture, and post-purchase or follow-up journey.",
  },
  {
    icon: BarChart3,
    title: "Read the evidence",
    text: "Use GA4, Shopify Analytics, Microsoft Clarity, Merchant Center, heatmaps, and session behavior to prioritize useful changes.",
  },
  {
    icon: Gauge,
    title: "Improve and verify",
    text: "Refine copy hierarchy, CTA rhythm, trust blocks, forms, imagery, responsiveness, tracking, and page performance.",
  },
] as const;

const experience = [
  {
    company:
      "Anytime Fitness SEB Group & JYM Group | Australia & United Kingdom",
    role: "Software Developer and Administrator",
    period: "2024 - Present",
    href: "https://www.anytimefitness.com/",
    type: "Software systems",
  },
  {
    company: "Salted Seas",
    role: "Shopify Developer - team contract",
    period: "2025",
    href: "https://saltedseas.com/",
    type: "Commerce",
  },
  {
    company: "Marcozo",
    role: "Shopify Developer - contract build",
    period: "2024",
    href: "https://www.marcozo.com/",
    type: "Commerce",
  },
  {
    company: "Flowpouch",
    role: "Shopify Developer - team environment",
    period: "2024",
    href: "https://flowpouch.com/",
    type: "Commerce",
  },
  {
    company: "SudorCure",
    role: "Shopify ecommerce project",
    period: "Project work",
    href: "https://www.sudorcure.com/",
    type: "Commerce",
  },
  {
    company: "Pagulayan Cues",
    role: "Shopify Developer - team environment",
    period: "2023",
    href: "https://pagulayancues.com/",
    type: "Commerce",
  },
  {
    company: "Two Brothers Grooming",
    role: "Ecommerce storefront project",
    period: "Project work",
    href: "https://twobrothersgrooming.com/",
    type: "Commerce",
  },
  {
    company: "Motovan to Shopify",
    role: "B2B API integration support",
    period: "2024",
    href: "https://motovan.com/",
    type: "Integration",
  },
  {
    company: "Geminos",
    role: "Store setup and launch support",
    period: "Freelance project",
    href: "https://geminos.store/password",
    type: "Commerce",
  },
] as const;

const toolGroups: {
  title: string;
  summary: string;
  icon: IconComponent;
  tools: { name: string; icon: IconComponent }[];
}[] = [
  {
    title: "Frontend engineering",
    summary: "Responsive interfaces, reusable systems, and customer-facing experiences.",
    icon: MonitorSmartphone,
    tools: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Figma", icon: SiFigma },
    ],
  },
  {
    title: "Backend and APIs",
    summary: "Business logic, validation, integrations, data services, and authentication flows.",
    icon: ServerCog,
    tools: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "Laravel", icon: SiLaravel },
      { name: "Django", icon: SiDjango },
      { name: "PHP", icon: SiPhp },
      { name: "Python", icon: SiPython },
      { name: "Postman", icon: SiPostman },
      { name: "Stripe", icon: SiStripe },
    ],
  },
  {
    title: "Data and admin operations",
    summary: "Reliable records, schemas, imports, cleanup, reports, and operational workflows.",
    icon: Database,
    tools: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "Supabase", icon: SiSupabase },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redis", icon: SiRedis },
      { name: "Microsoft 365", icon: BriefcaseBusiness },
    ],
  },
  {
    title: "Ecommerce and CRO",
    summary: "Storefronts, page systems, funnels, tracking, email, and optimization.",
    icon: ShoppingBag,
    tools: [
      { name: "Shopify", icon: SiShopify },
      { name: "WooCommerce", icon: SiWoocommerce },
      { name: "WordPress", icon: SiWordpress },
      { name: "Webflow", icon: SiWebflow },
      { name: "Wix", icon: SiWix },
      { name: "Google Analytics", icon: SiGoogleanalytics },
      { name: "Google Ads", icon: SiGoogleads },
      { name: "Mailchimp", icon: SiMailchimp },
    ],
  },
  {
    title: "Cloud and deployment",
    summary: "Production hosting, release workflows, observability, and infrastructure support.",
    icon: Cloud,
    tools: [
      { name: "Amazon AWS", icon: FaAws },
      { name: "Vercel", icon: SiVercel },
      { name: "Nginx", icon: SiNginx },
      { name: "Docker", icon: SiDocker },
      { name: "Cloudflare", icon: SiCloudflare },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Sentry", icon: SiSentry },
    ],
  },
  {
    title: "Delivery and collaboration",
    summary: "Clear coordination, documentation, review, version control, and handoff.",
    icon: BriefcaseBusiness,
    tools: [
      { name: "GitHub", icon: SiGithub },
      { name: "GitLab", icon: SiGitlab },
      { name: "Bitbucket", icon: SiBitbucket },
      { name: "Slack", icon: SiSlack },
      { name: "Asana", icon: SiAsana },
      { name: "Notion", icon: SiNotion },
      { name: "Trello", icon: SiTrello },
      { name: "Zapier", icon: SiZapier },
    ],
  },
];

const projectFits = [
  {
    number: "01",
    icon: ServerCog,
    title: "Build or replace a business system",
    problem:
      "Daily work depends on spreadsheets, repeated admin steps, disconnected records, or software that no longer matches the operation.",
    response:
      "I can map the workflow, design the data structure, build the application, connect the services, and prepare it for production use.",
    scope: ["Admin dashboards", "CRM workflows", "Reporting", "Role-based tools"],
  },
  {
    number: "02",
    icon: ShoppingBag,
    title: "Launch or improve an ecommerce experience",
    problem:
      "The brand is strong, but the storefront is difficult to manage, unclear on mobile, inconsistent across pages, or losing confidence before checkout.",
    response:
      "I can align the brand, content structure, Shopify architecture, product data, tracking, and conversion path into one maintainable storefront.",
    scope: ["Shopify Liquid", "Reusable sections", "CRO", "Mobile buying path"],
  },
  {
    number: "03",
    icon: Network,
    title: "Connect data, APIs, and business tools",
    problem:
      "Products, payments, member records, analytics, or operational data move between systems manually and create delays or avoidable errors.",
    response:
      "I can define the source of truth, map the fields, validate the data, build the integration, and make failures easier to identify.",
    scope: ["REST APIs", "Data mapping", "Validation", "Automations"],
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Stabilize and improve a live product",
    problem:
      "The current system works, but releases feel risky, performance is inconsistent, tracking is unreliable, or the team needs dependable technical ownership.",
    response:
      "I can audit the current setup, prioritize the highest-value fixes, improve production reliability, and leave a clearer path for future work.",
    scope: ["Technical audit", "Performance", "Deployment", "Ongoing support"],
  },
] as const;

const deliveryStandards = [
  {
    title: "Clear scope before the build",
    text: "Users, workflow, priorities, constraints, and success criteria are clarified before complexity is added.",
  },
  {
    title: "Delivery you can plan around",
    text: "Scope, milestones, review windows, and handoff targets stay visible so the work can move without avoidable delays.",
  },
  {
    title: "Quality checked at every layer",
    text: "Responsive states, data accuracy, edge cases, tracking, integrations, and production behavior are checked before release.",
  },
  {
    title: "Handoff built for ownership",
    text: "The result is documented, maintainable, and shaped around the team that will use and improve it after launch.",
  },
] as const;

function ExternalAnchor({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} className={className} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function RoleTypewriter() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = roleTitles[roleIndex];
    const complete = characterCount === role.length;
    const empty = characterCount === 0;
    const delay = complete
      ? 1800
      : deleting
        ? 45
        : empty
          ? 250
          : 82;

    const timer = window.setTimeout(() => {
      if (complete && !deleting) {
        setDeleting(true);
        return;
      }

      if (empty && deleting) {
        setDeleting(false);
        setRoleIndex((current) => (current + 1) % roleTitles.length);
        return;
      }

      setCharacterCount((current) => current + (deleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [characterCount, deleting, roleIndex]);

  return (
    <span className="typewriter" aria-live="polite">
      {roleTitles[roleIndex].slice(0, characterCount)}
      <span className="typewriter-cursor" aria-hidden="true" />
    </span>
  );
}

function SectionHeading({
  number,
  eyebrow,
  title,
  text,
}: {
  number: string;
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="section-heading" data-reveal>
      <div className="section-index" aria-hidden="true">
        {number}
      </div>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <p className="section-intro">{text}</p>
    </div>
  );
}

function WelcomeDialog({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <div className="welcome-layer" role="presentation">
      <button
        type="button"
        className="welcome-backdrop"
        aria-label="Close welcome message"
        onClick={onClose}
      />
      <section
        className="welcome-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="welcome-title"
      >
        <button
          type="button"
          className="welcome-close"
          aria-label="Close welcome message"
          onClick={onClose}
        >
          <X />
        </button>
        <div className="welcome-profile">
          <Image
            src="/profile/junry-gallego-closeup.png"
            alt="Junry Jumawan Gallego"
            width={640}
            height={640}
            unoptimized
            priority
          />
        </div>
        <div className="welcome-copy">
          <p className="eyebrow">Welcome</p>
          <h2 id="welcome-title">Hi, I&apos;m Junry. Here&apos;s how I build.</h2>
          <p>
            Explore the systems, storefronts, integrations, and production work
            behind reliable digital products.
          </p>
          <div className="welcome-actions">
            <a href="#systems" className="button button-primary" onClick={onClose}>
              See how I deliver
              <ArrowDown />
            </a>
            <ExternalAnchor href={site.whatsapp} className="button button-outline">
              <MessageCircle />
              Discuss a project
            </ExternalAnchor>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Home() {
  const [welcomeOpen, setWelcomeOpen] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
    );

    const progressBar = document.querySelector<HTMLElement>(".scroll-progress");
    let progressFrame = 0;
    const updateProgress = () => {
      if (progressFrame) {
        return;
      }

      progressFrame = window.requestAnimationFrame(() => {
        const maxScroll =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
        progressBar?.style.setProperty("--scroll-progress", `${progress * 100}%`);
        progressFrame = 0;
      });
    };

    document
      .querySelectorAll<HTMLElement>("[data-reveal]")
      .forEach((element) => revealObserver.observe(element));
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });

    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", updateProgress);
      if (progressFrame) {
        window.cancelAnimationFrame(progressFrame);
      }
    };
  }, []);

  useEffect(() => {
    if (welcomeOpen !== true) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setWelcomeOpen(false);
      }
    };
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [welcomeOpen]);

  const closeWelcome = () => {
    setWelcomeOpen(false);
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(site.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const handleProjectBrief = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const senderEmail = String(form.get("email") || "");
    const projectType = String(form.get("projectType") || "");
    const message = String(form.get("message") || "");
    const subject = encodeURIComponent(
      `${projectType || "Project"} inquiry from ${name || "a portfolio visitor"}`,
    );
    const body = encodeURIComponent(
      `Hi Junry,\n\nMy name is ${name}.\nMy email is ${senderEmail}.\nProject type: ${projectType}.\n\n${message}\n\nI found you through your portfolio.`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      {welcomeOpen ? <WelcomeDialog onClose={closeWelcome} /> : null}

      <header className="site-header">
        <a href="#top" className="brand-lockup" aria-label="Go to the top">
          <span className="brand-mark">JG</span>
          <span>
            <strong>{site.name}</strong>
            <small>Ecommerce + Software Engineer</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="header-contact" href={site.emailLink}>
            Start a project
            <ArrowUpRight />
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen ? (
          <nav className="mobile-menu" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                <item.icon />
                {item.label}
              </a>
            ))}
          </nav>
        ) : null}
      </header>

      <main id="top">
        <section className="hero blueprint-field">
          <div className="hero-measurement" aria-hidden="true">
            <span>1440</span>
            <i />
            <span>960</span>
            <i />
            <span>480</span>
          </div>

          <div className="hero-copy" data-reveal>
            <div className="hero-kicker">
              <span>Full-stack systems</span>
              <span>Commerce engineering</span>
              <span>Based in the Philippines</span>
            </div>

            <p className="hero-greeting">Hi, I&apos;m Junry. I&apos;m a</p>
            <h1>
              <RoleTypewriter />
            </h1>
            <p className="hero-lead">
              I engineer the software behind smoother operations and stronger
              ecommerce - interface, backend logic, data, APIs, deployment,
              and the customer journey working as one system.
            </p>
            <p className="hero-support">
              You get a build that is clear to use, reliable in production,
              and practical for the team that owns it after launch.
            </p>

            <div className="hero-actions">
              <a href={site.emailLink} className="button button-primary">
                <Mail />
                Email Junry
              </a>
              <ExternalAnchor href={site.whatsapp} className="button button-outline">
                <MessageCircle />
                WhatsApp
              </ExternalAnchor>
              <a href={site.phoneLink} className="button button-quiet">
                <Phone />
                Call Junry
              </a>
            </div>

            <a className="hero-resume-link" href={site.resume} target="_blank" rel="noreferrer">
              <FileText />
              Review resume PDF
              <ArrowUpRight />
            </a>

            <a href="#systems" className="scroll-cue">
              Scroll to inspect
              <ArrowDown />
            </a>
          </div>

          <div className="hero-visual" data-reveal>
            <div className="portrait-stage">
              <div className="portrait-coordinates" aria-hidden="true">
                <span>PROFILE / 01</span>
                <span>500 × 500 / SOURCE</span>
              </div>
              <div className="portrait-axis portrait-axis-x" aria-hidden="true">
                <span>0</span>
                <span>250</span>
                <span>500</span>
              </div>
              <div className="portrait-axis portrait-axis-y" aria-hidden="true">
                <span>500</span>
                <span>250</span>
                <span>0</span>
              </div>
              <Image
                className="portrait-image"
                src="/profile/junry-gallego-crossed-arms.png"
                alt="Junry Jumawan Gallego with crossed arms"
                width={500}
                height={500}
                unoptimized
                sizes="(max-width: 900px) 82vw, 500px"
                priority
              />

              <div className="capability-panel" aria-label="Core technical capabilities">
                <span>Core coverage</span>
                <ul>
                  <li>Systems</li>
                  <li>Commerce</li>
                  <li>APIs</li>
                  <li>Databases</li>
                  <li>Reporting</li>
                  <li>Deployments</li>
                </ul>
              </div>

              <div className="portrait-note">
                <CircleDot />
                <span>
                  <strong>Built across the full stack</strong>
                  Interface to infrastructure, with a practical handoff.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="proof-strip" aria-label="Core delivery areas">
          {[
            ["01", "Complete systems", "Requirement to production"],
            ["02", "Ecommerce", "First click to checkout"],
            ["03", "Connected data", "Scattered records to clarity"],
            ["04", "Production care", "Launch to steady improvement"],
          ].map(([number, title, detail]) => (
            <div key={number} data-reveal>
              <span>{number}</span>
              <strong>{title}</strong>
              <small>{detail}</small>
            </div>
          ))}
        </section>

        <section className="engineering-overview blueprint-field" aria-label="System architecture overview">
          <div className="technical-label">
            <span>{"//"}</span>
            Delivery architecture
            <i />
          </div>

          <div className="architecture-shell" data-reveal>
            <div className="architecture-board">
              <div className="architecture-header">
                <span>System architecture</span>
                <span>Interface → production</span>
              </div>

              <div className="architecture-grid">
                <div className="architecture-column">
                  <div className="architecture-node">
                    <Store />
                    <span>Web / Shopify interface</span>
                  </div>
                  <div className="architecture-node">
                    <MonitorSmartphone />
                    <span>Admin portal</span>
                  </div>
                  <div className="architecture-node">
                    <BriefcaseBusiness />
                    <span>Team workflows</span>
                  </div>
                </div>

                <div className="architecture-core">
                  <div className="architecture-node architecture-node-core">
                    <Network />
                    <span>Application services</span>
                    <small>API gateway / business logic</small>
                  </div>
                  <ArrowDown className="architecture-down" />
                  <div className="architecture-node architecture-node-wide">
                    <Workflow />
                    <span>Integrations and APIs</span>
                    <small>Payments / CRM / analytics / product data</small>
                  </div>
                  <ArrowDown className="architecture-down" />
                  <div className="architecture-node architecture-node-wide architecture-node-deploy">
                    <Cloud />
                    <span>Deployment layer</span>
                    <small>AWS / Vercel / PM2 / Nginx</small>
                  </div>
                </div>

                <div className="architecture-column">
                  <div className="architecture-node">
                    <Database />
                    <span>PostgreSQL and data</span>
                  </div>
                  <div className="architecture-node">
                    <ServerCog />
                    <span>Jobs and automation</span>
                  </div>
                  <div className="architecture-node">
                    <FileText />
                    <span>Files and reporting</span>
                  </div>
                </div>
              </div>
            </div>

            <aside className="coverage-board" aria-label="Delivery coverage">
              <div className="coverage-header">
                <span>Delivery coverage</span>
                <BadgeCheck />
              </div>
              {[
                ["Interface systems", "Included"],
                ["Application logic", "Included"],
                ["Database workflows", "Included"],
                ["Third-party APIs", "Included"],
                ["Deployment support", "Included"],
              ].map(([label, status]) => (
                <div className="coverage-row" key={label}>
                  <span>{label}</span>
                  <strong>
                    {status}
                    <i />
                  </strong>
                </div>
              ))}
              <div className="coverage-stack">
                <span>Primary stack</span>
                <strong>Next.js / Shopify / PostgreSQL / AWS</strong>
              </div>
            </aside>
          </div>

          <div className="signal-band" data-reveal>
            <span>
              <LineChart />
              System signals
            </span>
            {["Interfaces", "Workflows", "Data", "Integrations", "Deployment"].map(
              (signal) => (
                <strong key={signal}>
                  <i />
                  {signal}
                </strong>
              ),
            )}
          </div>
        </section>

        <section id="systems" className="page-section systems-section blueprint-field">
          <SectionHeading
            number="01"
            eyebrow="Software engineering"
            title="One system, every layer accounted for."
            text="A useful build is more than a polished screen. I connect the interface, business rules, data, integrations, deployment, and handoff so the software supports the real operation."
          />

          <div className="delivery-grid">
            {deliveryLayers.map((layer, index) => (
              <article
                key={layer.title}
                className="delivery-card"
                data-reveal
                style={{ "--delay": `${index * 70}ms` } as CSSProperties}
              >
                <div className="delivery-card-top">
                  <span>{layer.index}</span>
                  <layer.icon />
                </div>
                <h3>{layer.title}</h3>
                <p>{layer.text}</p>
                <ul>
                  {layer.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="crm-spotlight" data-reveal>
            <div className="crm-copy">
              <p className="eyebrow">Production system spotlight</p>
              <h3>Gym Debt Management and CRM</h3>
              <p>
                A private operational system for member accounts, arrears,
                payments, notes, reporting, and structured follow-up across
                SEB Group and JYM Group branches in Australia and the United
                Kingdom.
              </p>
              <div className="crm-results">
                <span>
                  <strong>19</strong>
                  Branch workflows supported
                </span>
                <span>
                  <strong>20-30%</strong>
                  Less weekly report preparation
                </span>
                <span>
                  <strong>24/7</strong>
                  AWS-hosted production access
                </span>
              </div>
            </div>
            <div className="crm-console" aria-label="CRM delivery summary">
              <div className="console-bar">
                <span>operations-system / production</span>
                <span className="status-live">Live</span>
              </div>
              {[
                ["Member records", "Structured"],
                ["Payment reconciliation", "Validated"],
                ["Arrears workflow", "Automated"],
                ["Dashboard reports", "Ready"],
                ["AWS deployment", "Stable"],
              ].map(([label, status]) => (
                <div className="console-row" key={label}>
                  <span>{label}</span>
                  <strong>
                    <BadgeCheck />
                    {status}
                  </strong>
                </div>
              ))}
              <div className="console-stack">
                AWS EC2 / PM2 / Nginx / PostgreSQL / reporting / support
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="page-section work-section">
          <SectionHeading
            number="02"
            eyebrow="Selected work"
            title="Business needs translated into working software."
            text="The projects below cover private operations software, API-connected data, reusable ecommerce systems, and measurable buying paths."
          />

          <div className="work-list">
            {selectedWork.map((project, index) => (
              <article
                key={project.title}
                className="work-row"
                data-reveal
                style={{ "--delay": `${index * 90}ms` } as CSSProperties}
              >
                <div className="work-number">{project.number}</div>
                <div className="work-summary">
                  <div className="work-label">
                    <project.icon />
                    {project.label}
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <ul className="tag-list">
                    {project.stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="work-evidence">
                  <div className="work-meta">
                    <span>{project.client}</span>
                    <span>{project.period}</span>
                  </div>
                  <ul>
                    {project.impact.map((point) => (
                      <li key={point}>
                        <Check />
                        {point}
                      </li>
                    ))}
                  </ul>
                  {project.private ? (
                    <span className="private-label">
                      <ShieldCheck />
                      Private production system
                    </span>
                  ) : (
                    <ExternalAnchor href={project.href} className="text-link">
                      Visit public reference
                      <ArrowUpRight />
                    </ExternalAnchor>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="commerce" className="page-section commerce-section blueprint-field">
          <SectionHeading
            number="03"
            eyebrow="Commerce engineering"
            title="Storefronts where brand, product, and technology work together."
            text="Each sample uses real live-store imagery. The work spans Shopify structure, reusable sections, product data, responsive design, customer journeys, analytics, and launch support."
          />

          <div className="commerce-list">
            {commerceSamples.map((sample, index) => (
              <article
                key={sample.name}
                className="commerce-case"
                data-reveal
                style={
                  {
                    "--brand-accent": sample.accent,
                    "--delay": `${index * 70}ms`,
                  } as CSSProperties
                }
              >
                <div className="commerce-image">
                  <Image
                    src={sample.image}
                    alt={sample.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 58vw"
                  />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="commerce-copy">
                  <p className="eyebrow">{sample.category}</p>
                  <h3>{sample.name}</h3>
                  <h4>{sample.title}</h4>
                  <p>{sample.text}</p>
                  <ul className="tag-list">
                    {sample.tools.map((tool) => (
                      <li key={tool}>{tool}</li>
                    ))}
                  </ul>
                  <ExternalAnchor href={sample.href} className="button button-brand">
                    Open live store
                    <ExternalLink />
                  </ExternalAnchor>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="growth" className="page-section growth-section">
          <SectionHeading
            number="04"
            eyebrow="Funnels and CRO"
            title="Conversion work begins with clarity, not tricks."
            text="I improve the path between the first visit and the next meaningful action by combining page structure, responsive execution, analytics, behavior signals, and checkout-aware thinking."
          />

          <div className="growth-layout">
            <div className="growth-steps">
              {growthChecks.map((item, index) => (
                <article key={item.title} data-reveal>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <item.icon />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
            <aside className="growth-readout" data-reveal>
              <p className="eyebrow">CRO toolkit</p>
              <h3>Observe. Prioritize. Improve. Verify.</h3>
              <div className="signal-chart" aria-label="Illustrative optimization signal">
                {[32, 45, 38, 60, 52, 76, 64, 82, 74, 92].map(
                  (height, index) => (
                    <span
                      key={`${height}-${index}`}
                      style={{ height: `${height}%` }}
                    />
                  ),
                )}
              </div>
              <ul>
                {[
                  "GA4 funnels and events",
                  "Microsoft Clarity heatmaps",
                  "Shopify Analytics",
                  "Google Merchant Center",
                  "PageSpeed Insights",
                  "Klaviyo flows",
                  "Funnelish offer pages",
                  "Mobile and checkout QA",
                ].map((tool) => (
                  <li key={tool}>
                    <Check />
                    {tool}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section id="experience" className="page-section experience-section blueprint-field">
          <SectionHeading
            number="05"
            eyebrow="Experience"
            title="Delivery across software, ecommerce, operations, and remote teams."
            text="The common thread is ownership: understand the goal, coordinate the details, build the useful layer, test it carefully, and support the work after launch."
          />

          <div className="experience-table" data-reveal>
            <div className="experience-head">
              <span>Company / project</span>
              <span>Role</span>
              <span>Period</span>
              <span>Type</span>
              <span />
            </div>
            {experience.map((item) => (
              <ExternalAnchor
                key={`${item.company}-${item.role}`}
                href={item.href}
                className="experience-item"
              >
                <strong>{item.company}</strong>
                <span>{item.role}</span>
                <span>{item.period}</span>
                <small>{item.type}</small>
                <ArrowUpRight />
              </ExternalAnchor>
            ))}
          </div>
        </section>

        <section id="tools" className="page-section tools-section">
          <SectionHeading
            number="06"
            eyebrow="Tools and skills"
            title="A stack for the whole delivery path."
            text="Tools are selected around the work: interface, backend logic, data, ecommerce, deployment, analytics, quality, and collaboration."
          />

          <div className="tools-grid">
            {toolGroups.map((group, groupIndex) => (
              <article
                key={group.title}
                className="tool-group"
                data-reveal
                style={{ "--delay": `${groupIndex * 70}ms` } as CSSProperties}
              >
                <div className="tool-group-header">
                  <group.icon />
                  <div>
                    <h3>{group.title}</h3>
                    <p>{group.summary}</p>
                  </div>
                </div>
                <div className="tool-list">
                  {group.tools.map((tool) => (
                    <span key={tool.name}>
                      <tool.icon />
                      {tool.name}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="fit" className="page-section fit-section blueprint-field">
          <SectionHeading
            number="07"
            eyebrow="Project fit"
            title="Choose the outcome. I can own the technical path."
            text="The strongest fit is a project that crosses interface, workflow, data, commerce, or production concerns and needs one developer to keep the whole system connected."
          />

          <div className="fit-grid">
            {projectFits.map((project, index) => (
              <article
                key={project.title}
                className="fit-card"
                data-reveal
                style={{ "--delay": `${index * 65}ms` } as CSSProperties}
              >
                <div className="fit-card-top">
                  <span>{project.number}</span>
                  <project.icon />
                </div>
                <h3>{project.title}</h3>
                <p className="fit-problem">{project.problem}</p>
                <p className="fit-response">{project.response}</p>
                <ul>
                  {project.scope.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="delivery-assurance" data-reveal>
            <div className="assurance-heading">
              <p className="eyebrow">What you can expect</p>
              <h3>A high-standard build should remain useful after launch.</h3>
            </div>
            <div className="assurance-list">
              {deliveryStandards.map((standard, index) => (
                <div key={standard.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <strong>{standard.title}</strong>
                    <p>{standard.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="#contact" className="button button-primary">
              Describe your project
              <ArrowDown />
            </a>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-intro" data-reveal>
            <p className="eyebrow">Direct contact</p>
            <h2>Bring the brief. Let&apos;s build what the business needs next.</h2>
            <p>
              Tell me what is slowing the business down or what you are ready
              to build. I will help define the most useful technical path
              before unnecessary complexity is added.
            </p>

            <div className="contact-methods">
              <a href={site.emailLink}>
                <Mail />
                <span>
                  <small>Email</small>
                  <strong>{site.email}</strong>
                </span>
                <ArrowUpRight />
              </a>
              <ExternalAnchor href={site.whatsapp}>
                <MessageCircle />
                <span>
                  <small>WhatsApp</small>
                  <strong>{site.phone}</strong>
                </span>
                <ArrowUpRight />
              </ExternalAnchor>
              <a href={site.phoneLink}>
                <Phone />
                <span>
                  <small>Phone</small>
                  <strong>{site.phone}</strong>
                </span>
                <ArrowUpRight />
              </a>
              <button type="button" onClick={copyEmail}>
                {copied ? <Check /> : <Copy />}
                <span>
                  <small>Quick action</small>
                  <strong>{copied ? "Email copied" : "Copy email address"}</strong>
                </span>
                <ChevronRight />
              </button>
            </div>

            <div className="contact-location">
              <MapPin />
              {site.location}
            </div>
          </div>

          <form className="project-form" onSubmit={handleProjectBrief} data-reveal>
            <div className="form-header">
              <span>Project brief / 01</span>
              <CircleDot />
            </div>
            <label>
              Your name
              <input name="name" type="text" placeholder="How should I address you?" required />
            </label>
            <label>
              Your email
              <input name="email" type="email" placeholder="you@company.com" required />
            </label>
            <label>
              What do you need?
              <select name="projectType" defaultValue="Custom software system">
                <option>Custom software system</option>
                <option>Shopify store or redesign</option>
                <option>API and data integration</option>
                <option>CRO or Funnelish work</option>
                <option>Technical support and improvement</option>
              </select>
            </label>
            <label>
              Project context
              <textarea
                name="message"
                rows={5}
                placeholder="What is not working today, and what would a successful outcome look like?"
                required
              />
            </label>
            <button type="submit" className="button button-primary">
              Open in email
              <ArrowUpRight />
            </button>
            <p>
              This opens your email app with the project details prepared. No
              form data is stored on this site.
            </p>
          </form>
        </section>
      </main>

      <footer>
        <div>
          <span className="brand-mark">JG</span>
          <span>
            <strong>{site.name}</strong>
            <small>Software engineering + ecommerce delivery</small>
          </span>
        </div>
        <a href={site.resume} target="_blank" rel="noreferrer">
          Resume
          <ArrowUpRight />
        </a>
        <a href="#top">
          Back to top
          <ArrowUpRight />
        </a>
      </footer>

      <nav className="mobile-bottom-nav" aria-label="Quick navigation">
        {navItems.slice(0, 5).map((item) => (
          <a key={item.href} href={item.href}>
            <item.icon />
            <span>{item.label}</span>
          </a>
        ))}
        <a href="#contact">
          <Mail />
          <span>Contact</span>
        </a>
      </nav>
    </>
  );
}
