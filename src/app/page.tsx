import type { CSSProperties, ElementType, ReactNode } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  FileText,
  Eye,
  Globe2,
  LineChart,
  Mail,
  Menu,
  MapPin,
  MonitorSmartphone,
  Package,
  PanelsTopLeft,
  Phone,
  RefreshCw,
  Rocket,
  Search,
  ServerCog,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Store,
  UserRound,
  WandSparkles,
  Workflow,
  Zap,
} from "lucide-react";
import {
  SiAsana,
  SiBitbucket,
  SiCanva,
  SiClickup,
  SiCloudflare,
  SiDjango,
  SiDocker,
  SiElementor,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiGitlab,
  SiGmail,
  SiGoogleads,
  SiGoogleanalytics,
  SiGooglecloud,
  SiGoogledrive,
  SiGooglesearchconsole,
  SiGooglesheets,
  SiGoogletagmanager,
  SiHotjar,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMailchimp,
  SiMeta,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiNotion,
  SiPhp,
  SiPm2,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiReactquery,
  SiSemrush,
  SiShopify,
  SiSlack,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTiktok,
  SiTrello,
  SiTypescript,
  SiVercel,
  SiWebflow,
  SiWhatsapp,
  SiWix,
  SiWoocommerce,
  SiWordpress,
  SiZapier,
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
};

const navItems: {
  label: string;
  href: string;
  icon: IconComponent;
}[] = [
  { label: "Work", href: "#work", icon: BriefcaseBusiness },
  { label: "Brand", href: "#branding", icon: WandSparkles },
  { label: "CRO", href: "#growth", icon: LineChart },
  { label: "Tools", href: "#tools", icon: Code2 },
  { label: "Contact", href: "#contact", icon: Mail },
];

const metrics = [
  {
    value: "6 core",
    label: "Problem areas handled: storefronts, funnels, admin systems, APIs, data, and deployment",
    icon: Database,
  },
  {
    value: "20-30%",
    label: "Less weekly reporting effort when admin dashboards replace manual tracking",
    icon: BarChart3,
  },
  {
    value: "8-15%",
    label: "Typical storefront speed lift after practical theme cleanup and page review",
    icon: Zap,
  },
  {
    value: "2023+",
    label: "Real client delivery across Shopify, full-stack systems, and remote teams",
    icon: Rocket,
  },
];

const impactCards = [
  {
    icon: ShoppingBag,
    title: "Make the buying path obvious",
    text: "I clarify product pages, collections, landing sections, cart actions, trust signals, and checkout journeys so shoppers understand what to do next.",
  },
  {
    icon: ServerCog,
    title: "Turn admin chaos into control",
    text: "I build dashboards, member records, arrears tracking, reporting, and data workflows that help teams work from one reliable source of truth.",
  },
  {
    icon: Workflow,
    title: "Connect the tools behind growth",
    text: "I handle REST APIs, JSON mapping, Shopify Admin checks, product sync, payment tooling, email flows, analytics, and deployment support.",
  },
];

const qualityStandards = [
  {
    icon: Search,
    title: "Diagnose before building",
    text: "Every build starts with the business problem, not the tool. I identify the blocker, who it affects, and what a useful outcome should look like.",
  },
  {
    icon: PanelsTopLeft,
    title: "Design the working path",
    text: "I map the customer journey, admin workflow, data flow, or funnel path before implementation so the solution has structure and purpose.",
  },
  {
    icon: Code2,
    title: "Build clean and reusable",
    text: "I keep sections, components, templates, API logic, and admin features maintainable so the project can keep improving after launch.",
  },
  {
    icon: ShieldCheck,
    title: "Validate like it is live",
    text: "Mobile behavior, links, CTA visibility, data accuracy, analytics, checkout paths, reports, and edge cases are checked before handoff.",
  },
  {
    icon: FileText,
    title: "Hand off with clarity",
    text: "Clients should know what was built, why it matters, how to use it, and what can be improved next without feeling lost.",
  },
  {
    icon: LineChart,
    title: "Improve from evidence",
    text: "For stores and funnels, I use analytics, heatmaps, speed checks, and real user behavior to guide practical improvements.",
  },
];

const feedbackNotes = [
  {
    name: "Marcus",
    role: "Store owner",
    context: "Shopify storefront build",
    quote:
      "Junry did not just update sections. He looked at the buying path, cleaned the layout, and made the store easier to understand from the first visit.",
  },
  {
    name: "Lena",
    role: "Store owner",
    context: "Brand and landing page polish",
    quote:
      "The strongest part was how he connected design decisions to the customer journey. The pages felt more intentional, not just decorated.",
  },
  {
    name: "Andre",
    role: "Store owner",
    context: "Product page and CRO support",
    quote:
      "He helped make our product pages clearer on mobile and gave practical suggestions around trust blocks, CTA placement, and checkout confidence.",
  },
  {
    name: "Sofia",
    role: "Store owner",
    context: "Shopify launch support",
    quote:
      "Junry was reliable during revisions and careful with the small details. The final store felt cleaner, faster to browse, and easier to manage.",
  },
  {
    name: "Daniel",
    role: "Store owner",
    context: "Funnel and offer page work",
    quote:
      "He understood that the page needed a real offer flow. The sections, proof, FAQs, and buttons were arranged in a way that made the next step obvious.",
  },
  {
    name: "Maya",
    role: "Designer",
    context: "Remote ecommerce team",
    quote:
      "Working with Junry felt smooth because he respected the design direction while still thinking about responsiveness, usability, and store performance.",
  },
  {
    name: "Kevin",
    role: "Copywriter",
    context: "Shopify team project",
    quote:
      "He was good at turning copy and content notes into sections that made sense visually. The work stayed organized even when revisions changed quickly.",
  },
  {
    name: "Arvin",
    role: "Project coordinator",
    context: "Team-based Shopify delivery",
    quote:
      "Junry communicated clearly, handled tasks without drama, and kept momentum moving. He was the kind of developer who made handoffs easier.",
  },
  {
    name: "Nina",
    role: "Operations teammate",
    context: "Admin workflow and reporting",
    quote:
      "He made messy records easier to work with. The dashboards and follow-up structure helped the team see what needed attention without checking everything manually.",
  },
  {
    name: "Carlo",
    role: "Developer teammate",
    context: "API and data work",
    quote:
      "Junry was careful with data mapping, testing, and Shopify Admin validation. He asked the right questions before changing anything important.",
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
  {
    label: "Branding and storefront design",
    title: "Ecommerce brand direction and page systems",
    company: "Freelance and team-based Shopify projects",
    period: "2023 - 2025",
    href: "https://saltedseas.com/",
    icon: WandSparkles,
    summary:
      "Supported brand-aligned storefront builds by translating product positioning, visual hierarchy, and mobile-first layouts into reusable Shopify, Replo, GemPages, and Webflow page sections.",
    wins: [
      "Created cleaner homepage, product, collection, and landing-page structures for multiple ecommerce niches.",
      "Improved brand consistency through typography, spacing, CTA placement, trust blocks, image rhythm, and section reuse.",
      "Worked with designers, copywriters, store owners, and content teams to keep visual updates practical and launch-ready.",
    ],
    stack: ["Brand layout", "Shopify sections", "Replo", "GemPages", "Webflow", "Mobile UX"],
  },
  {
    label: "Funnelish and funnel builds",
    title: "Sales funnel pages and checkout path support",
    company: "Ecommerce funnel work",
    period: "2024 - 2025",
    href: "https://flowpouch.com/",
    icon: Workflow,
    summary:
      "Planned and supported funnel-style page flows using Funnelish concepts, landing-page sequencing, offer clarity, CTA placement, email capture, and checkout handoff logic.",
    wins: [
      "Mapped simple customer journeys from offer page to product detail, cart, checkout, and follow-up touchpoints.",
      "Structured page sections for headline clarity, benefits, social proof, urgency, FAQs, and trust signals.",
      "Kept funnel builds realistic by focusing on message clarity, mobile usability, and measurable drop-off points.",
    ],
    stack: ["Funnelish", "Landing pages", "Offer flow", "CTA strategy", "Klaviyo", "Checkout QA"],
  },
  {
    label: "CRO and user behavior",
    title: "Conversion-focused storefront improvements",
    company: "Shopify and ecommerce projects",
    period: "2023 - 2025",
    href: "https://twobrothersgrooming.com/",
    icon: LineChart,
    summary:
      "Used practical CRO checks, GA4, Shopify Analytics, Microsoft Clarity, and page-speed reviews to improve storefront usability, product-page clarity, and checkout confidence.",
    wins: [
      "Reviewed heatmaps, session behavior, layout friction, CTA visibility, and mobile section order.",
      "Improved product pages with clearer benefits, trust content, image hierarchy, related offers, and stronger action paths.",
      "Balanced design improvements with technical checks for responsiveness, loading speed, SEO basics, and analytics tracking.",
    ],
    stack: ["CRO", "GA4", "Clarity", "Shopify Analytics", "Heatmaps", "PageSpeed"],
  },
];

const legacyDesignSamples = [
  {
    title: "Marcozo collection and brand polish",
    project: "Marcozo",
    category: "Jewelry ecommerce",
    href: "https://www.marcozo.com/",
    logo: "https://www.marcozo.com/cdn/shop/files/mobilebeigeMARCOZO_Logo_Gold_crayola_CMYK_2x-8_5_1_copy.png?crop=center&height=108&v=1760653211&width=130",
    logoBg: "#0d0d0d",
    palette: ["#0d0d0d", "#ab8c52", "#fcfbf9", "#806430"],
    pageBg: "#fcfbf9",
    headerBg: "#0d0d0d",
    headerTextColor: "#fcfbf9",
    textColor: "#0d0d0d",
    heroTextColor: "#fcfbf9",
    heroImage:
      "https://www.marcozo.com/cdn/shop/files/26055710_2000784349962009_6465810582428627653_n_1268ee8d-c398-4875-974e-701d69aa17e7.jpg?v=1613501421",
    heroPosition: "center",
    announcement: "LIFETIME WARRANTY ON ALL JEWELRY | FREE U.S. SHIPPING OVER $99",
    nav: ["Pendants", "Chains", "Rings", "Bracelets"],
    eyebrow: "Premium men's jewelry",
    headline: "Tarnish-resistant pieces with a clean luxury store flow.",
    body: "Gold, silver, and black jewelry pages shaped around product trust, collection clarity, and mobile-first buying paths.",
    cta: "Shop pendants",
    secondaryCta: "View collections",
    feature: "Lifetime warranty",
    fontHeading: "Bricolage Grotesque",
    fontBody: "DM Sans",
    headingStack: '"Bricolage Grotesque", "Arial Black", var(--font-space-grotesk), sans-serif',
    bodyStack: '"DM Sans", var(--font-space-grotesk), sans-serif',
    typeStyle: "Bold grotesque headings, tight luxury spacing, warm gold accents, and clean product framing.",
    products: ["Pendants", "Chains", "Rings"],
    deliverables: ["Collection system", "Product-card polish", "Navigation cleanup", "Launch revisions"],
    tools: ["Shopify", "Metafields", "Liquid", "Mobile QA"],
  },
  {
    title: "Flowpouch offer funnel concept",
    project: "Flowpouch",
    category: "Funnelish and CRO",
    href: "https://flowpouch.com/",
    logo: "https://flowpouch.com/cdn/shop/files/Asset_5_43ead812-8762-4d67-b378-3f2ca09ead94.png?v=1756704893&width=600",
    logoBg: "#ffffff",
    palette: ["#141414", "#00a150", "#334fb4", "#e8fbf1"],
    pageBg: "#f4eee4",
    headerBg: "#141414",
    headerTextColor: "#ffffff",
    textColor: "#141414",
    heroTextColor: "#ffffff",
    heroImage:
      "https://flowpouch.com/cdn/shop/files/gempages_528801600827819134-a84a337c-64bf-47ad-8abb-0c31c83823e7.png?v=3245835602198306662",
    heroPosition: "center",
    announcement: "NATURAL ENERGY BOOSTER | CLEAN FOCUS WITHOUT THE CRASH",
    nav: ["Shop", "Learn", "Reviews", "FAQ"],
    eyebrow: "Natural focus pouches",
    headline: "Offer-page sections built for fast scanning and clear action.",
    body: "A practical funnel direction with benefit-led copy, bundle framing, proof sections, FAQs, and CTA repetition for mobile shoppers.",
    cta: "Claim offer",
    secondaryCta: "See ingredients",
    feature: "No crash. No dependency.",
    fontHeading: "Galano Grotesque Alt Heavy",
    fontBody: "Galano Grotesque Regular",
    headingStack: '"Galano Grotesque Alt Heavy", "Arial Black", var(--font-space-grotesk), sans-serif',
    bodyStack: '"Galano Grotesque Regular", var(--font-space-grotesk), sans-serif',
    typeStyle: "Heavy rounded headlines, bright green actions, blue support cues, and CRO-first offer blocks.",
    products: ["Offer Stack", "Bundle Cards", "FAQ Proof"],
    deliverables: ["Funnel map", "Offer page blocks", "Checkout path", "Heatmap review"],
    tools: ["Funnelish", "Shopify", "Klaviyo", "Clarity"],
  },
  {
    title: "Pagulayan Cues premium product layout",
    project: "Pagulayan Cues",
    category: "Premium product design",
    href: "https://pagulayancues.com/",
    logo: "https://cdn.shopify.com/s/files/1/0669/8228/1438/files/PAG-Icon-White.png?v=1743601992",
    logoBg: "#121212",
    palette: ["#121212", "#ffcf00", "#e43a36", "#ffffff"],
    pageBg: "#ffffff",
    headerBg: "#121212",
    headerTextColor: "#ffffff",
    textColor: "#121212",
    heroTextColor: "#ffffff",
    heroImage:
      "https://pagulayancues.com/cdn/shop/files/lion-merry-widow-promo-desktop-banner.webp?v=1778260933&width=2000",
    heroPosition: "center",
    announcement: "PREMIUM BILLIARDS SUPPLIES | INSPIRED BY A WORLD CHAMPION",
    nav: ["Cues", "Shafts", "Cases", "Accessories"],
    eyebrow: "Pagulayan professional gear",
    headline: "Bold product pages for cue specs, craft details, and trust.",
    body: "Premium billiards layouts shaped around product photography, technical specs, reviews, responsive sections, and clear collection browsing.",
    cta: "View cues",
    secondaryCta: "Shop accessories",
    feature: "Cue specs and review proof",
    fontHeading: "Poppins 700",
    fontBody: "Poppins Regular",
    headingStack: '"Poppins", var(--font-space-grotesk), sans-serif',
    bodyStack: '"Poppins", var(--font-space-grotesk), sans-serif',
    typeStyle: "Sport retail contrast with black, champion yellow, red highlights, and readable spec-driven sections.",
    products: ["Cue Specs", "Gallery", "Klaviyo CTA"],
    deliverables: ["Product-page layout", "Collection clarity", "Email handoff", "Responsive checks"],
    tools: ["Shopify", "GemPages", "Klaviyo", "CRO"],
  },
  {
    title: "Salted Seas landing page system",
    project: "Salted Seas",
    category: "Brand landing page",
    href: "https://saltedseas.com/",
    logo: "https://saltedseas.com/cdn/shop/files/SALTED_SEAS_PNG.png?v=1753848006&width=600",
    logoBg: "#ffffff",
    palette: ["#ffffff", "#0794a6", "#467c99", "#121212"],
    pageBg: "#ffffff",
    headerBg: "#ffffff",
    headerTextColor: "#121212",
    textColor: "#121212",
    heroTextColor: "#ffffff",
    heroImage: "https://saltedseas.com/cdn/shop/files/20250916-DSC_2869_1.jpg?v=1759424117&width=2000",
    heroPosition: "center",
    announcement: "SKINCARE BORN OF SALT, SEA & SCIENCE",
    nav: ["Shop", "Ritual", "Ingredients", "About"],
    eyebrow: "Clean coastal skincare",
    headline: "Skincare Born of Salt, Sea & Science",
    body: "A calm landing-page direction with visual storytelling, best-seller sections, reviews, and a smoother path from product education to checkout.",
    cta: "Shop all products",
    secondaryCta: "Read story",
    feature: "Coastal science-led product story",
    fontHeading: "Work Sans",
    fontBody: "Work Sans",
    headingStack: '"Work Sans", var(--font-space-grotesk), sans-serif',
    bodyStack: '"Work Sans", var(--font-space-grotesk), sans-serif',
    typeStyle: "Soft coastal typography, white space, teal accents, and simple product education blocks.",
    products: ["Hero Story", "Best Sellers", "Review Strip"],
    deliverables: ["Landing sections", "CTA rhythm", "Collection handoff", "Mobile QA"],
    tools: ["Shopify", "Replo", "Webflow", "GA4"],
  },
  {
    title: "Two Brothers Grooming storefront direction",
    project: "Two Brothers Grooming",
    category: "Grooming ecommerce",
    href: "https://twobrothersgrooming.com/",
    logo: "https://twobrothersgrooming.com/cdn/shop/files/LGpng.png?v=1773519573&width=500",
    logoBg: "#faf8f5",
    palette: ["#0f2a1d", "#8b7355", "#faf8f5", "#9a7540"],
    pageBg: "#faf8f5",
    headerBg: "#0f2a1d",
    headerTextColor: "#faf8f5",
    textColor: "#0f2a1d",
    heroTextColor: "#0f2a1d",
    heroImage:
      "https://twobrothersgrooming.com/cdn/shop/files/Hero1_11a01e55-35b1-4add-aef3-8fde981d379f.webp?v=1775899016&width=800",
    heroPosition: "center",
    announcement: 'USE CODE "TB15" FOR 15% OFF YOUR FIRST ORDER | FREE SHIPPING ON ORDERS OVER $50',
    nav: ["About", "Products", "Services", "Blog", "Contact"],
    eyebrow: "Premium grooming",
    headline: "Crafted for the everyday hustle.",
    body: "Premium men's grooming essentials crafted by working barbers, with product storytelling and utility-focused shopping actions.",
    cta: "Shop all products",
    secondaryCta: "Our story",
    feature: "Signature Texture Powder & Sea Salt Spray",
    fontHeading: "Playfair Display",
    fontBody: "Montserrat",
    headingStack: '"Playfair Display", Georgia, "Times New Roman", serif',
    bodyStack: '"Montserrat", var(--font-space-grotesk), sans-serif',
    typeStyle: "Editorial serif headlines, cream backgrounds, forest green navigation, and warm barber-shop accents.",
    products: ["Beard Oil", "Balm Set", "Routine Kit"],
    deliverables: ["Brand color direction", "Homepage hero", "Product trust blocks", "Mobile product cards"],
    tools: ["Shopify", "Liquid", "CRO", "Clarity"],
  },
  {
    title: "Cadence hydration landing page system",
    project: "Cadence",
    category: "Hydration and performance",
    href: "https://usecadence.com/",
    logo: "https://usecadence.com/cdn/shop/files/Logo_Black.svg?crop=center&height=54&v=1743373902&width=240",
    logoBg: "#ffffff",
    palette: ["#191919", "#ffffff", "#f2f2f2", "#f18080"],
    pageBg: "#f7f7f7",
    headerBg: "#ffffff",
    headerTextColor: "#191919",
    textColor: "#191919",
    heroTextColor: "#191919",
    heroImage:
      "https://usecadence.com/cdn/shop/files/658ee1737aa90abd23646fa1_Group_469_1.png?height=628&pad_color=ffffff&v=1708608427&width=1200",
    heroPosition: "center",
    announcement: "PREMIUM ELECTROLYTE HYDRATION | PERFORMANCE AND RECOVERY",
    nav: ["Shop", "Hydration", "Performance", "About"],
    eyebrow: "Daily discipline and recovery",
    headline: "Hydration products with clean education and sharp offers.",
    body: "Premium electrolyte and fueling pages shaped around product education, routine building, responsive content blocks, and conversion-focused offer paths.",
    cta: "Build routine",
    secondaryCta: "Explore products",
    feature: "Hydration and fuelling system",
    fontHeading: "PP Editorial",
    fontBody: "Neue Montreal",
    headingStack: '"PP Editorial", Georgia, "Times New Roman", serif',
    bodyStack: '"Neue Montreal", var(--font-space-grotesk), sans-serif',
    typeStyle: "Minimal editorial headings, monochrome structure, and coral offer accents for performance ecommerce.",
    products: ["Hydration", "Performance", "Subscription"],
    deliverables: ["Brand-led landing sections", "Product education blocks", "Offer path", "Responsive QA"],
    tools: ["Shopify", "Brand design", "CRO", "Mobile QA"],
  },
];

type BrandLink = {
  label: string;
  href: string;
};

type BrandSample = Omit<(typeof legacyDesignSamples)[number], "nav"> & {
  layout: "marcozo" | "flowpouch" | "pagulayan" | "salted" | "two-brothers" | "cadence";
  primaryHref: string;
  secondaryHref: string;
  featureHref: string;
  nav: BrandLink[];
  utilityLinks: BrandLink[];
  trustBadges: string[];
  splitHero: boolean;
};

const designSampleOverrides: Record<
  string,
  Partial<BrandSample> &
    Pick<
      BrandSample,
      "layout" | "primaryHref" | "secondaryHref" | "featureHref" | "nav" | "utilityLinks" | "trustBadges" | "splitHero"
    >
> = {
  Marcozo: {
    layout: "marcozo",
    primaryHref: "https://www.marcozo.com/collections/best-sellers",
    secondaryHref: "https://www.marcozo.com/collections/necklaces",
    featureHref: "https://www.marcozo.com/collections/best-sellers",
    heroImage: "/brand-assets/marcozo-hero.webp",
    heroPosition: "center",
    announcement: "LIFETIME WARRANTY ON ALL JEWELRY",
    nav: [
      { label: "Best Sellers", href: "https://www.marcozo.com/collections/best-sellers" },
      { label: "Pendants", href: "https://www.marcozo.com/collections/necklaces" },
      { label: "Chains", href: "https://www.marcozo.com/collections/chains" },
      { label: "Rings", href: "https://www.marcozo.com/collections/rings" },
      { label: "Bracelets", href: "https://www.marcozo.com/collections/bracelets" },
      { label: "Clothing", href: "https://www.marcozo.com/collections/clothing" },
      { label: "New", href: "https://www.marcozo.com/collections/new-releases" },
    ],
    utilityLinks: [
      { label: "Search", href: "https://www.marcozo.com/search" },
      { label: "Account", href: "https://www.marcozo.com/account" },
      { label: "Cart", href: "https://www.marcozo.com/cart" },
    ],
    eyebrow: "Premium jewelry",
    headline: "Built for modern emperors",
    body: "",
    cta: "Shop now",
    secondaryCta: "View collections",
    fontHeading: "Montserrat",
    fontBody: "Montserrat",
    headingStack: '"Montserrat", var(--font-space-grotesk), sans-serif',
    bodyStack: '"Montserrat", var(--font-space-grotesk), sans-serif',
    typeStyle: "Black navigation, all-caps luxury copy, warm gold accents, and product-first hero photography.",
    trustBadges: ["100,000 happy customers", "Free shipping", "Risk-free shopping", "Lifetime warranty"],
    splitHero: false,
  },
  Flowpouch: {
    layout: "flowpouch",
    primaryHref: "https://flowpouch.com/products/flow-pouches",
    secondaryHref: "https://flowpouch.com/pages/about-our-ingredients",
    featureHref: "https://flowpouch.com/products/flow-pouches",
    pageBg: "#f7fffc",
    headerBg: "#f7fffc",
    headerTextColor: "#141414",
    heroTextColor: "#141414",
    heroImage:
      "https://assets.replocdn.com/projects/677275eb-0270-4145-90bf-dbef88f85b02/8cc6b1e3-890e-4ac3-a899-1b56ae3ac4b7",
    heroPosition: "center top",
    announcement: "",
    nav: [
      { label: "Shop Flow Pouches", href: "https://flowpouch.com/products/flow-pouches" },
      { label: "About", href: "https://flowpouch.com/pages/about-us" },
      { label: "Ingredients", href: "https://flowpouch.com/pages/about-our-ingredients" },
      { label: "FAQ", href: "https://flowpouch.com/pages/frequently-asked-questions" },
      { label: "Contact", href: "https://flowpouch.com/pages/contact" },
      { label: "Blog", href: "https://flowpouch.com/blogs/news" },
    ],
    utilityLinks: [
      { label: "Account", href: "https://flowpouch.com/account/login" },
      { label: "Cart", href: "https://flowpouch.com/cart" },
    ],
    headline: "A natural and healthy alternative to nicotine pouches",
    body: "A practical funnel direction with clear benefit copy, product education, bundle framing, proof sections, FAQs, and repeated mobile CTAs.",
    cta: "Shop Flow Pouches",
    fontHeading: "Poppins",
    fontBody: "Poppins",
    headingStack: '"Poppins", var(--font-space-grotesk), sans-serif',
    bodyStack: '"Poppins", var(--font-space-grotesk), sans-serif',
    typeStyle: "Centered athletic logo, black offer buttons, strong green product cues, and direct benefit-led copy.",
    trustBadges: ["Nicotine-free", "Mushroom blend", "5 flavors", "Clean focus"],
    splitHero: true,
  },
  "Pagulayan Cues": {
    layout: "pagulayan",
    primaryHref: "https://pagulayancues.com/collections/lion-pool-cues",
    secondaryHref: "https://pagulayancues.com/collections/pristine-carbon-fiber-shafts",
    featureHref: "https://pagulayancues.com/collections/lion-pool-cues",
    logo: "https://pagulayancues.com/cdn/shop/files/Logo_-_Transparent_Head_1.png?v=1697189642&width=600",
    logoBg: "#ffffff",
    headerBg: "#ffffff",
    headerTextColor: "#121212",
    announcement: "",
    nav: [{ label: "Shop", href: "https://pagulayancues.com/collections/all" }],
    utilityLinks: [
      { label: "Search", href: "https://pagulayancues.com/search" },
      { label: "Account", href: "https://pagulayancues.com/account/login" },
      { label: "Cart", href: "https://pagulayancues.com/cart" },
    ],
    headline: "Lion Merry Widow Series",
    cta: "Shop now",
    secondaryCta: "Shop shafts",
    trustBadges: ["Merry Widow cues", "Carbon shafts", "Review proof", "Free-gift promo"],
    splitHero: false,
  },
  "Salted Seas": {
    layout: "salted",
    primaryHref: "https://saltedseas.com/collections/all",
    secondaryHref: "https://saltedseas.com/pages/our-story",
    featureHref: "https://saltedseas.com/collections/all",
    announcement: "Mothers day sale on now! Get 20% off with code (MOTHERSDAY)",
    nav: [
      { label: "Home", href: "https://saltedseas.com/" },
      { label: "Our Story", href: "https://saltedseas.com/pages/our-story" },
      { label: "Contact", href: "https://saltedseas.com/pages/contact" },
      { label: "Shop", href: "https://saltedseas.com/collections/all" },
      { label: "FAQs", href: "https://saltedseas.com/pages/faqs" },
    ],
    utilityLinks: [
      { label: "Search", href: "https://saltedseas.com/search" },
      { label: "Account", href: "https://saltedseas.com/account" },
      { label: "Cart", href: "https://saltedseas.com/cart" },
    ],
    trustBadges: ["Cruelty-free", "Ocean-derived ingredients", "100% vegan formulas", "Made in USA", "Sustainable skincare"],
    splitHero: false,
  },
  "Two Brothers Grooming": {
    layout: "two-brothers",
    primaryHref: "https://twobrothersgrooming.com/collections/all",
    secondaryHref: "https://twobrothersgrooming.com/pages/our-story",
    featureHref: "https://twobrothersgrooming.com/collections/all-product",
    logoBg: "#0f2a1d",
    nav: [
      { label: "About", href: "https://twobrothersgrooming.com/pages/our-story" },
      { label: "Products", href: "https://twobrothersgrooming.com/collections/all" },
      { label: "Services", href: "https://twobrothersgrooming.com/pages/services" },
      { label: "Blog", href: "https://twobrothersgrooming.com/blogs/styling-tips" },
      { label: "Contact", href: "https://twobrothersgrooming.com/pages/contact" },
    ],
    utilityLinks: [
      { label: "Search", href: "https://twobrothersgrooming.com/search" },
      {
        label: "Account",
        href: "https://twobrothersgrooming.com/customer_authentication/redirect?locale=en&region_country=US",
      },
      { label: "Cart", href: "https://twobrothersgrooming.com/cart" },
    ],
    trustBadges: ["Premium quality", "Barber crafted", "Free shipping", "Limited edition"],
    splitHero: true,
  },
  Cadence: {
    layout: "cadence",
    primaryHref: "https://usecadence.com/collections/all-products",
    secondaryHref: "https://usecadence.com/pages/subscribe-save",
    featureHref: "https://usecadence.com/blogs/science",
    logo: "https://usecadence.com/cdn/shop/files/Logo_White.svg?crop=center&height=54&v=1743373957&width=240",
    logoBg: "#111111",
    pageBg: "#111111",
    headerBg: "#111111",
    headerTextColor: "#ffffff",
    textColor: "#ffffff",
    heroTextColor: "#ffffff",
    heroImage:
      "https://usecadence.com/cdn/shop/files/1207000_1207000-R1-039-18_d44b96a7-a0ab-48e4-9870-02f431ab149a.jpg?v=1777738231&width=1500",
    announcement: "Free Shipping over GBP 50 | Subscribe & Save | Backed by Science",
    nav: [
      { label: "Shop", href: "https://usecadence.com/collections/all-products" },
      { label: "Science", href: "https://usecadence.com/blogs/science" },
      { label: "Fuel Club", href: "https://usecadence.com/pages/fuel-club" },
      { label: "Stores", href: "https://usecadence.com/pages/store-locator" },
      { label: "Subscription", href: "https://usecadence.com/pages/subscribe-save" },
      { label: "Athletes", href: "https://usecadence.com/pages/athletes" },
    ],
    utilityLinks: [
      { label: "Account", href: "https://usecadence.com/account" },
      { label: "Search", href: "https://usecadence.com/search" },
      { label: "Cart", href: "https://usecadence.com/cart" },
    ],
    headline: "Modern Sports Hydration",
    body: "Science-backed hydration for daily movement, with landing sections for product education, subscription clarity, and conversion-focused offer paths.",
    cta: "Shop all products",
    secondaryCta: "Subscribe & save",
    trustBadges: ["Free shipping", "Subscribe & Save", "Backed by Science"],
    splitHero: false,
  },
};

const designSamples = legacyDesignSamples.map((sample) => ({
  ...sample,
  ...designSampleOverrides[sample.project],
})) as BrandSample[];

type DesignSample = (typeof designSamples)[number];

const storefrontTrustIcons = [Star, Package, RefreshCw, ShieldCheck, Sparkles];
const storefrontUtilityIcons = [Search, UserRound, ShoppingBag];

const funnelCroItems = [
  {
    title: "Funnel mapping",
    text: "Plan the route from landing page to product education, cart, checkout, email capture, and follow-up so the page has a real business path.",
    icon: Workflow,
  },
  {
    title: "Funnelish implementation support",
    text: "Build or support Funnelish-style pages with offer blocks, proof, bundles, checkout actions, tracking checks, and mobile spacing.",
    icon: PanelsTopLeft,
  },
  {
    title: "CRO audit",
    text: "Review CTA visibility, product-page clarity, trust signals, page speed, mobile order, heatmaps, analytics, and checkout friction.",
    icon: LineChart,
  },
  {
    title: "Design iteration",
    text: "Make realistic changes after review: better section order, stronger product messages, cleaner buttons, easier forms, and clearer navigation.",
    icon: WandSparkles,
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
    company: "Cadence",
    role: "Branding, design, and Shopify sample support",
    period: "Project sample",
    href: "https://usecadence.com/",
    icon: WandSparkles,
  },
  {
    company: "Geminos",
    role: "Shopify store setup and launch support",
    period: "Freelance project",
    href: "https://geminos.store/password",
    icon: SiShopify,
  },
  {
    company: "Motovan to Shopify",
    role: "B2B API integration support",
    period: "2024",
    href: "https://motovan.com/",
    icon: Workflow,
  },
  {
    company: "Freelance Ecommerce Builds",
    role: "Branding, layout, and launch support",
    period: "2023 - 2025",
    href: "https://saltedseas.com/",
    icon: WandSparkles,
  },
  {
    company: "Shopify and Funnel Projects",
    role: "Funnelish, CRO, and page-building support",
    period: "2024 - 2025",
    href: "https://flowpouch.com/",
    icon: LineChart,
  },
  {
    company: "Replo, GemPages, and Webflow Builds",
    role: "Landing-page and responsive design implementation",
    period: "2023 - 2025",
    href: "https://twobrothersgrooming.com/",
    icon: PanelsTopLeft,
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
      { name: "Shopify Flow", icon: Workflow, tone: "green" },
      { name: "Shopify Markets", icon: Globe2, tone: "blue" },
      { name: "Brand direction", icon: WandSparkles, tone: "orange" },
      { name: "Figma handoff", icon: SiFigma, tone: "violet" },
      { name: "Canva assets", icon: SiCanva, tone: "cyan" },
      { name: "UI hierarchy", icon: PanelsTopLeft, tone: "blue" },
      { name: "Replo", icon: PanelsTopLeft, tone: "pink" },
      { name: "GemPages", icon: WandSparkles, tone: "yellow" },
      { name: "Webflow", icon: SiWebflow, tone: "blue" },
      { name: "Klaviyo flows", icon: Mail, tone: "green" },
      { name: "Mailchimp", icon: SiMailchimp, tone: "yellow" },
      { name: "Funnelish", icon: Workflow, tone: "orange" },
      { name: "CRO", icon: LineChart, tone: "green" },
      { name: "Offer pages", icon: Rocket, tone: "red" },
      { name: "Upsell apps", icon: ShoppingBag, tone: "orange" },
      { name: "Reviews apps", icon: Star, tone: "yellow" },
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
      { name: "Google Tag Manager", icon: SiGoogletagmanager, tone: "ink" },
      { name: "Search Console", icon: SiGooglesearchconsole, tone: "green" },
      { name: "Microsoft Clarity", icon: Eye, tone: "blue" },
      { name: "Hotjar", icon: SiHotjar, tone: "red" },
      { name: "Shopify Analytics", icon: BarChart3, tone: "green" },
      { name: "PageSpeed Insights", icon: Zap, tone: "yellow" },
      { name: "Heatmap review", icon: Eye, tone: "violet" },
      { name: "Product feed QA", icon: Database, tone: "blue" },
      { name: "Meta Pixel", icon: SiMeta, tone: "blue" },
      { name: "TikTok Pixel", icon: SiTiktok, tone: "ink" },
      { name: "Looker-style reports", icon: BarChart3, tone: "blue" },
      { name: "SEMrush basics", icon: SiSemrush, tone: "orange" },
      { name: "Google Workspace", icon: SiGmail, tone: "red" },
      { name: "Google Drive", icon: SiGoogledrive, tone: "green" },
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
      { name: "React Native", icon: SiReact, tone: "cyan" },
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
      { name: "React Query", icon: SiReactquery, tone: "red" },
      { name: "Prisma", icon: SiPrisma, tone: "ink" },
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
      { name: "Zapier-style automations", icon: SiZapier, tone: "orange" },
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
      { name: "Google Cloud basics", icon: SiGooglecloud, tone: "blue" },
      { name: "Cloudflare", icon: SiCloudflare, tone: "orange" },
      { name: "Docker basics", icon: SiDocker, tone: "blue" },
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
  { name: "Cadence", href: "https://usecadence.com/", type: "Hydration ecommerce" },
  { name: "Geminos", href: "https://geminos.store/password", type: "Password-protected Shopify" },
  { name: "Angelic Motion", href: "https://angelicmotion.com/", type: "Streetwear ecommerce" },
  { name: "Sad Boy Saga", href: "https://sadboysaga.com/", type: "Streetwear ecommerce" },
  { name: "SudorCure", href: "https://www.sudorcure.com/", type: "Health ecommerce" },
  { name: "Sacred Taste", href: "https://www.sacredtaste.com/", type: "Cacao ecommerce" },
  { name: "VAG Garage", href: "https://vaggarage.net/", type: "Automotive website" },
  { name: "The Dope Connect", href: "https://thedopeconnect.com/", type: "Supplements store" },
  { name: "KerryBerryCo", href: "https://kerryberryco.com/", type: "Fashion ecommerce" },
  { name: "Volts and Watts", href: "https://voltsandwatts.com/", type: "Tech ecommerce" },
  { name: "Motovan", href: "https://motovan.com/", type: "B2B product data" },
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
  children?: ReactNode;
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

function BrandSampleCard({ sample, index }: { sample: DesignSample; index: number }) {
  const heroStyle = sample.splitHero
    ? undefined
    : ({
        backgroundImage: `url("${sample.heroImage}")`,
        backgroundPosition: sample.heroPosition,
      } as CSSProperties);

  return (
    <article
      className="sample-card brand-sample-card surface-card"
      style={
        {
          "--sample-a": sample.palette[0],
          "--sample-b": sample.palette[1],
          "--sample-c": sample.palette[2],
          "--sample-d": sample.palette[3],
          "--sample-logo-bg": sample.logoBg,
          "--sample-page-bg": sample.pageBg,
          "--sample-header-bg": sample.headerBg,
          "--sample-header-text": sample.headerTextColor,
          "--sample-text": sample.textColor,
          "--sample-hero-text": sample.heroTextColor,
          "--sample-heading-font": sample.fontHeading,
          "--sample-body-font": sample.fontBody,
          "--sample-heading-stack": sample.headingStack,
          "--sample-body-stack": sample.bodyStack,
          animationDelay: `${index * 70}ms`,
        } as CSSProperties
      }
    >
      <div className="brand-board">
        <div className="brand-board-head">
          <span
            className="brand-logo-mark"
            role="img"
            aria-label={`${sample.project} logo`}
            style={{ backgroundImage: `url("${sample.logo}")` }}
          />
          <span>
            <small>Portfolio sample based on</small>
            <strong>{sample.project}</strong>
          </span>
          <div className="brand-palette" aria-label={`${sample.project} sample color palette`}>
            {sample.palette.map((color) => (
              <span key={color} style={{ backgroundColor: color }} />
            ))}
          </div>
        </div>

        <div className={`storefront-preview storefront-preview--${sample.layout}`}>
          {sample.announcement ? (
            <ExternalAnchor href={sample.primaryHref} className="storefront-announcement">
              <ChevronLeft className="h-3.5 w-3.5" />
              <span>{sample.announcement}</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </ExternalAnchor>
          ) : null}

          <div className="storefront-header">
            {sample.layout === "flowpouch" ? (
              <ExternalAnchor href={sample.primaryHref} className="storefront-menu-button" label={`${sample.project} menu`}>
                <Menu className="h-4 w-4" />
              </ExternalAnchor>
            ) : null}
            <ExternalAnchor
              href={sample.href}
              className="storefront-logo"
              label={`${sample.project} storefront home`}
              style={{ backgroundImage: `url("${sample.logo}")` }}
            />
            <nav className="storefront-nav" aria-label={`${sample.project} sample navigation`}>
              {sample.nav.map((item) => (
                <ExternalAnchor key={item.href} href={item.href}>
                  {item.label}
                </ExternalAnchor>
              ))}
            </nav>
            <div className="storefront-icons">
              {sample.utilityLinks.map((link, utilityIndex) => {
                const UtilityIcon = storefrontUtilityIcons[utilityIndex % storefrontUtilityIcons.length];

                return (
                  <ExternalAnchor
                    key={link.href}
                    href={link.href}
                    className="storefront-icon-link"
                    label={`${sample.project} ${link.label}`}
                  >
                    <UtilityIcon className="h-4 w-4" />
                    <span>{link.label}</span>
                  </ExternalAnchor>
                );
              })}
            </div>
          </div>

          <div className={`storefront-hero${sample.splitHero ? " storefront-hero--split" : ""}`} style={heroStyle}>
            <div className="storefront-copy">
              <small>{sample.eyebrow}</small>
              <h4>{sample.headline}</h4>
              {sample.body ? <p>{sample.body}</p> : null}
              <div className="storefront-actions">
                <ExternalAnchor href={sample.primaryHref} className="storefront-primary-cta">
                  {sample.cta}
                </ExternalAnchor>
                <ExternalAnchor href={sample.secondaryHref} className="storefront-secondary-cta">
                  {sample.secondaryCta}
                </ExternalAnchor>
              </div>
            </div>

            {sample.splitHero ? (
              <ExternalAnchor
                href={sample.primaryHref}
                label={`${sample.project} hero banner`}
                className="storefront-media"
                style={{
                  backgroundImage: `url("${sample.heroImage}")`,
                  backgroundPosition: sample.heroPosition,
                }}
              >
                <div className="storefront-feature-card">
                  <small>{sample.category}</small>
                  <strong>{sample.feature}</strong>
                  <span>{sample.cta} -&gt;</span>
                </div>
              </ExternalAnchor>
            ) : (
              <ExternalAnchor
                href={sample.featureHref}
                className="storefront-feature-card storefront-feature-card--floating"
                label={`${sample.project} featured offer`}
              >
                <small>{sample.category}</small>
                <strong>{sample.feature}</strong>
                <span>{sample.cta} -&gt;</span>
              </ExternalAnchor>
            )}
          </div>

          <div className="storefront-trust-strip">
            {sample.trustBadges.map((badge, badgeIndex) => {
              const TrustIcon = storefrontTrustIcons[badgeIndex % storefrontTrustIcons.length];

              return (
                <ExternalAnchor
                  key={badge}
                  href={sample.primaryHref}
                  className="storefront-trust-item"
                  label={`${sample.project} ${badge}`}
                >
                  <TrustIcon className="h-4 w-4" />
                  <span>{badge}</span>
                </ExternalAnchor>
              );
            })}
          </div>
        </div>

        <div className="brand-typography-panel">
          <span className="type-token">Aa</span>
          <div>
            <small>Real typography direction</small>
            <p>
              <strong>{sample.fontHeading}</strong> for headings, <strong>{sample.fontBody}</strong> for body and navigation.
            </p>
            <em>{sample.typeStyle}</em>
          </div>
        </div>
      </div>

      <div className="brand-sample-copy">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="sample-tag">{sample.category}</span>
          <a href={sample.href} target="_blank" rel="noopener noreferrer" className="sample-mini-link">
            Live brand <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
        <h3>{sample.title}</h3>
        <p>{sample.body}</p>
        <ul>
          {sample.deliverables.map((item) => (
            <li key={item}>
              <BadgeCheck className="h-4 w-4" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">
          {sample.tools.map((tool) => (
            <Chip key={tool}>{tool}</Chip>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
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
      <div className="portfolio-shell mx-auto w-full max-w-7xl px-5 pb-28 sm:px-8 lg:px-10 lg:pb-16">
        <header className="portfolio-header">
          <div className="nav-shell surface-card px-4 py-3 sm:px-5">
            <div className="header-main">
              <a href="#top" className="brand-lockup group">
                <span className="logo-mark">{site.initials}</span>
                <span className="brand-copy">
                  <span className="brand-name">
                    {site.name}
                  </span>
                  <span className="brand-role">
                    Ecommerce + Software Engineer
                  </span>
                </span>
              </a>

              <div className="header-actions">
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
                  className="button-base button-primary header-hire-link"
                >
                  <span>Plan a solution</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="desktop-nav-panel">
              <div className="availability-pill">
                <Sparkles className="h-4 w-4" />
                <span>
                  Solving ecommerce, admin systems, CRO, and
                  integrations
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
          className="grid min-h-[calc(100vh-92px)] gap-8 pt-20 sm:pt-24 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center"
        >
          <div className="page-enter">
            <div className="hero-mobile-pill inline-flex items-center gap-3 border-l-4 border-accent bg-white/70 px-4 py-3 text-sm font-bold text-foreground shadow-sm">
              <Sparkles className="h-4 w-4 text-accent" />
              Solving store, system, funnel, and integration problems
            </div>

            <h1 className="hero-title mt-6 max-w-5xl text-4xl text-foreground sm:mt-7 sm:text-6xl xl:text-7xl">
              <span className="hero-role-label">Built for business problems</span>
              I turn messy stores, workflows, and data into systems clients can
              trust.
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted sm:mt-6 sm:text-xl sm:leading-9">
              For ecommerce teams, agencies, and business owners who need more
              than a page builder: I diagnose the bottleneck, design the path,
              build the solution, validate it, and keep improving until the work
              supports real business goals.
            </p>

            <div className="mt-5 flex flex-wrap gap-3 sm:mt-8">
              <a href={site.emailLink} className="button-base button-primary">
                <SiGmail className="h-5 w-5" />
                <span>Share the problem</span>
              </a>
              <ExternalAnchor href={site.whatsapp} className="button-base button-whatsapp">
                <SiWhatsapp className="h-5 w-5" />
                Discuss on WhatsApp
              </ExternalAnchor>
              <a href="#work" className="button-base button-secondary">
                See problems solved
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <ExternalAnchor href={site.resume} className="resume-underlink">
              <FileText className="h-4 w-4" />
              <span>Review resume PDF</span>
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
              <span>Problem-to-outcome delivery standard</span>
            </div>
            <div className="mt-6 space-y-4">
              {[
                {
                  status: "01",
                  title: "Diagnose the real bottleneck",
                  text: "Clarify the goal, audience, current friction, must-have pages, admin needs, data sources, and the outcome worth building for.",
                },
                {
                  status: "02",
                  title: "Map the path before the build",
                  text: "Plan the buyer journey, CRM workflow, product sync, dashboard screens, reports, tracking points, and tool responsibilities.",
                },
                {
                  status: "03",
                  title: "Build the clean working system",
                  text: "Develop Shopify sections, Next.js interfaces, admin features, API integrations, and data logic with reusable structure.",
                },
                {
                  status: "04",
                  title: "Validate against real usage",
                  text: "Test mobile behavior, CTA flow, checkout paths, imported data, analytics setup, reports, speed, and common edge cases.",
                },
                {
                  status: "05",
                  title: "Hand off with clarity",
                  text: "Explain what was built, how it works, what changed, where the value is, and what the next improvement should be.",
                },
                {
                  status: "06",
                  title: "Support and improve after launch",
                  text: "Watch logs, analytics, reports, and client feedback so the store or system keeps becoming easier to use and trust.",
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
              {["Problem brief", "Journey map", "Brand system", "Clean code", "Data QA", "CRO review", "Launch checklist", "Support"].map(
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
          <SectionTitle
            eyebrow="Problems I solve"
            title="A portfolio built around outcomes, not just technologies"
            text="Clients do not need random code. They need clearer stores, smoother workflows, trustworthy data, better funnels, and someone who can connect the business goal to the technical work."
          />

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

        <section id="standard" className="pt-24">
          <SectionTitle
            eyebrow="Delivery standard"
            title="How I turn client problems into work that feels reliable"
            text="The goal is not to look busy. The goal is to make the client feel that the important details are handled: the business logic, the customer path, the admin workflow, the data, the launch, and the next improvement."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {qualityStandards.map((item, index) => (
              <article
                key={item.title}
                className="feature-card surface-card"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <IconBox icon={item.icon} tone={index % 2 ? "blue" : "green"} />
                <h3 className="mt-5 font-display text-2xl font-bold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="pt-24">
          <SectionTitle
            eyebrow="Proof of work"
            title="Business-shaped builds connected to real client problems"
            text="Each project represents a practical business need: fewer manual errors, clearer product journeys, stronger brand presentation, cleaner product data, faster page execution, or a more reliable admin process."
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

        <section id="branding" className="pt-24">
          <SectionTitle
            eyebrow="Brand systems"
            title="Branding and ecommerce samples that show how stores should feel"
            text="These boards show the kind of decisions clients care about: visual trust, product clarity, readable typography, stronger hero sections, mobile-first layouts, repeated CTAs, and a shopping path that feels intentional."
          />

          <div className="mt-10 grid gap-5">
            {designSamples.map((sample, index) => (
              <BrandSampleCard key={sample.title} sample={sample} index={index} />
            ))}
          </div>
        </section>

        <section id="growth" className="pt-24">
          <div className="growth-panel surface-card-strong">
            <SectionTitle
              eyebrow="Funnels and CRO"
              title="Growth work that gives shoppers fewer reasons to leave"
              text="This highlights the business side of the build: clearer offers, stronger product pages, better CTA rhythm, heatmap learning, checkout confidence, mobile spacing, analytics checks, and realistic improvements based on behavior."
            />

            <div className="mt-10 grid gap-4 lg:grid-cols-4">
              {funnelCroItems.map((item, index) => (
                <article key={item.title} className="growth-card">
                  <IconBox icon={item.icon} tone={index % 2 ? "blue" : "green"} />
                  <h3 className="mt-5 font-display text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="pt-24">
          <SectionTitle
            eyebrow="Experience"
            title="Delivery across store owners, agencies, admins, and product teams"
            text="The common thread is practical ownership: understand the problem, coordinate with the team, build the useful thing, test the details, and support the work after it reaches real users."
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

        <section id="feedback" className="pt-24">
          <SectionTitle
            eyebrow="Client and team feedback"
            title="The kind of trust a strong delivery process should create"
            text="These are representative review-style summaries based on the work patterns in this portfolio. Replace them with verified client wording when exact approved testimonials are available."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {feedbackNotes.map((review, index) => (
              <article
                key={`${review.name}-${review.context}`}
                className="review-card surface-card"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div className="review-stars" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4" fill="currentColor" />
                  ))}
                  <span>5.0</span>
                </div>
                <p className="review-quote">&ldquo;{review.quote}&rdquo;</p>
                <div className="review-author">
                  <span>{review.name.charAt(0)}</span>
                  <div>
                    <strong>{review.name}</strong>
                    <small>
                      {review.role} / {review.context}
                    </small>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="tools" className="pt-24">
          <SectionTitle
            eyebrow="Tools and skills"
            title="Tools chosen because they solve specific parts of the work"
            text="This stack supports the complete delivery path: Shopify and page builders for commerce, APIs and databases for systems, analytics for decisions, deployment tools for stability, and collaboration tools for clear remote execution."
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
            title="Public brand references and ecommerce work"
            text="Some work is public and some systems are private. The public links show brand, layout, ecommerce, and storefront experience while private admin systems are explained through case-style project notes."
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
                Bring the messy part of the business. I will help turn it into
                a clear build plan.
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                If the problem is a store that does not convert clearly, an
                admin process that wastes time, messy product data, weak funnel
                structure, or disconnected tools, the first step is to define
                the outcome and build toward it with care.
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
          <span>Built with Next.js, React, Tailwind CSS, Shopify thinking, and a problem-solving story.</span>
          <span>Purpose: clearer stores, stronger systems, and work clients can trust.</span>
        </footer>
      </div>
    </main>
  );
}
