export const profile = {
  name: "Junry Jumawan Gallego",
  shortName: "Junry Gallego",
  profession: "Full-Stack Software Developer | Admin & Server-Side Systems | Shopify Ecommerce Developer",
  email: "junry.jumawan4@gmail.com",
  phone: "+63 965 861 4859",
  phoneHref: "tel:+639658614859",
  whatsapp: "https://wa.me/639658614859",
  resume: "https://drive.google.com/file/d/1yhbb2fapt0b2Q_4wq80DgaeXCGZyoof0/view?usp=sharing",
  location: "Iligan City, Philippines",
};

export const categories = ["All work", "Full-stack systems", "Shopify & ecommerce", "Mobile apps & UI/UX", "API & integrations"] as const;
export type Category = (typeof categories)[number];
export type Project = {
  slug: string;
  name: string;
  subtitle: string;
  category: Exclude<Category, "All work">;
  year: string;
  status: string;
  role: string;
  summary: string;
  challenge: string;
  approach: string;
  capabilities: { title: string; text: string }[];
  stack: string[];
  visual: "recovery" | "petmate" | "coastal" | "commerce" | "icybreeze" | "rayo" | "bia" | "integration" | "geminos";
  image?: string;
  color: string;
  note: string;
  links?: { label: string; href: string }[];
  related: string[];
};

export const projects: Project[] = [
  {
    slug: "revive-recovery-australia", name: "Revive Recovery", subtitle: "Member recovery, arrears tracking, and CRM.", category: "Full-stack systems", year: "2024–present", status: "Ongoing system development", role: "Full-stack development & administration",
    summary: "A member recovery and CRM platform supporting Anytime Fitness operations in Australia, bringing arrears, payment visibility, follow-ups, and reporting into a connected workspace.",
    challenge: "Member recovery work depends on accurate records across ClubWise, DebitSuccess, and internal reports. Disconnected spreadsheets make it harder to understand a member’s status, prioritize follow-ups, and maintain a consistent operational history.",
    approach: "Connect the admin interface, server-side rules, and underlying member data. Build structured recovery workflows and import validation, then support the day-to-day reporting and infrastructure that keep the system useful.",
    capabilities: [
      { title: "Member and recovery workflows", text: "Member profiles, recovery cases, arrears stages, payment visibility, notes, and follow-up tasks in a role-aware admin experience." },
      { title: "Data reconciliation", text: "ClubWise and DebitSuccess import validation, status checks, record cleanup, and migration support for consistent operational reporting." },
      { title: "Day 75+ tracking", text: "Backend logic, dashboard visibility, member tracking, and an upload workflow for longer-running arrears cases." },
      { title: "Operations and infrastructure", text: "Dashboards, exports, audit history, database checks, and production support with AWS EC2, PM2, and Nginx." },
    ], stack: ["Next.js", "React", "TypeScript", "Express", "PostgreSQL", "Supabase Auth", "AWS EC2", "Nginx"], visual: "recovery", color: "#e9e4f5",
    note: "This is a private business system. The portfolio preview is an illustrative interface and contains no customer or member records.", related: ["revive-recovery-uk", "icybreeze"],
  },
  {
    slug: "petmate", name: "PetMate", subtitle: "Veterinary app design and mobile prototype.", category: "Mobile apps & UI/UX", year: "2026", status: "Figma & mobile prototype", role: "Product flows, Mobile apps & UI/UX prototyping",
    summary: "A Figma design and React Native prototype for pet owners and clinic administrators, covering appointments, pet records, vaccination reminders, and payment screens.",
    challenge: "Veterinary care involves several related tasks: finding an appointment, reviewing a pet’s history, staying on top of vaccinations, and understanding clinic invoices. Each screen needs a clear next step for both the owner and the clinic.",
    approach: "Map the owner and clinic-admin journeys first, then design consistent mobile screens and connect the flows in Figma. Build an Expo / React Native prototype to explore navigation and key interactions on a phone.",
    capabilities: [
      { title: "33 mobile screens", text: "An expanded set of pet-owner and clinic-admin screens, organized by module with dedicated overview boards for both journeys." },
      { title: "Connected care journeys", text: "Appointment selection, pet profiles, medical history, vaccination reminders, invoices, receipts, and reports with explicit next steps." },
      { title: "Figma flow documentation", text: "Editable screen layouts, numbered modules, and directional connections that communicate how users move through the product." },
      { title: "Interactive mobile prototype", text: "Expo and React Native implementation with local sample data for booking, filters, navigation, notifications, and payment feedback." },
    ], stack: ["Figma", "UI/UX", "React Native", "Expo", "TypeScript"], visual: "petmate", color: "#e6eee6",
    note: "The mobile application is an interactive prototype using sample data. Payments, reports, and notifications demonstrate intended behavior; a production backend is not connected.",
    links: [{ label: "Explore the Figma file", href: "https://www.figma.com/design/Nvj28zSRwLvX2DSe1syGSi/PetMate-Veterinary-Clinic?node-id=0-1" }, { label: "Pet owner flow", href: "https://www.figma.com/design/Nvj28zSRwLvX2DSe1syGSi/PetMate?node-id=104-2483" }, { label: "Clinic admin flow", href: "https://www.figma.com/design/Nvj28zSRwLvX2DSe1syGSi/PetMate?node-id=104-3818" }], related: ["iligan-bay", "icybreeze"],
  },
  {
    slug: "iligan-bay", name: "Iligan Bay", subtitle: "Coastal waste reporting and cleanup coordination.", category: "Mobile apps & UI/UX", year: "2026", status: "Mobile app & backend in development", role: "System architecture & mobile development",
    summary: "A coastal waste reporting and cleanup management system with location-based incident reports, photo evidence, role-aware mobile workflows, and cleanup coordination.",
    challenge: "A useful environmental report needs more than a photo. It needs a reliable location, a validation path, clear ownership of the cleanup, and evidence that the work has been completed.",
    approach: "Design the full report-to-cleanup lifecycle and build a mobile foundation for field reporters, solo cleanup personnel, and team leaders. Connect authentication, private evidence storage, workflow updates, and real-time messages through Supabase.",
    capabilities: [
      { title: "Location and evidence", text: "GPS and photo submission workflows, an interactive map, report history, and status tracking for coastal incidents." },
      { title: "Role-aware mobile journeys", text: "Separate capabilities for field reporters, solo cleanup personnel, and team leaders, including assignments and office messages." },
      { title: "Backend foundations", text: "Supabase Auth, PostgreSQL workflows, private storage for evidence, access rules, and real-time notifications and messaging." },
      { title: "Architecture and delivery planning", text: "Requirements, domain workflows, data architecture, API contracts, deployment planning, and a defined roadmap for the administration portal." },
    ], stack: ["React Native", "Expo", "TypeScript", "Supabase", "PostgreSQL", "GIS", "Realtime"], visual: "coastal", color: "#deedf0",
    note: "The mobile application and backend foundation are implemented. The web administration and analytics portal is a subsequent delivery phase. The visual here is a workflow illustration.", related: ["petmate", "revive-recovery-australia"],
  },
  {
    slug: "salted-seas", name: "Salted Seas", subtitle: "Shopify pages and storefront development.", category: "Shopify & ecommerce", year: "2025", status: "Team contract project", role: "Shopify development & page building",
    summary: "A team ecommerce project covering Shopify pages, product information, responsive sections, and revisions based on analytics and design feedback.",
    challenge: "A skincare storefront needs to explain the product clearly while keeping a visitor’s path from discovery to purchase simple, particularly on mobile.",
    approach: "Work with the wider creative team to build and refine page structure, translate content into responsive sections, and use analytics feedback to guide practical improvements.",
    capabilities: [{ title: "Brand and page structure", text: "Build product education and landing sections with a consistent content hierarchy and clear shopping actions." }, { title: "Cross-functional delivery", text: "Coordinate page revisions with designers, copywriters, editors, and project stakeholders." }, { title: "Responsive refinement", text: "Adjust mobile section order, CTA placement, spacing, and the flow between landing pages and shopping destinations." }, { title: "Behavior-led iteration", text: "Use analytics and Clarity feedback to identify friction and prioritize interface improvements." }],
    stack: ["Shopify", "Replo", "Webflow", "Microsoft Clarity", "Responsive UI"], visual: "commerce", image: "/brand-assets/salted-seas-hero.jpg", color: "#eee5d7", note: "A team-based project. The linked store may evolve beyond the pages and revisions I contributed.", links: [{ label: "Visit brand website", href: "https://saltedseas.com/" }], related: ["bia-skin", "marcozo"],
  },
  {
    slug: "revive-recovery-uk", name: "Revive Recovery UK", subtitle: "Member recovery workflows for UK operations.", category: "Full-stack systems", year: "2026", status: "UK platform development", role: "Full-stack development & workflow adaptation",
    summary: "A separate UK member recovery platform with admin dashboards, branch records, recovery cases, imports, audit history, and workflows adapted to UK billing operations.",
    challenge: "The UK workflow needs its own billing calendar, arrears rules, and membership handling. Those differences must be represented clearly without mixing the Australian and UK systems.",
    approach: "Build a separate application and database foundation using shared typed contracts across the web and API layers. Adapt the member recovery experience to UK operational rules and role-based access.",
    capabilities: [{ title: "UK recovery workflows", text: "Member and case management aligned with UK billing cut-offs, pending payment states, and membership lifecycle rules." }, { title: "Branch-level operations", text: "Branch gym records, administration tools, member views, and an operational dashboard." }, { title: "Structured imports and audit", text: "Import workflows, activity history, and typed domain contracts to keep changes traceable." }, { title: "Separate system foundation", text: "A dedicated Next.js and Express workspace with Supabase authentication and PostgreSQL persistence." }], stack: ["Next.js", "TypeScript", "Express", "Supabase Auth", "PostgreSQL", "pnpm"], visual: "recovery", color: "#e4e7f3", note: "Private business software. The portfolio uses an illustrative preview without operational records or account access.", related: ["revive-recovery-australia", "motovan-shopify"],
  },
  {
    slug: "icybreeze", name: "IcyBreeze", subtitle: "Service booking and administration in Laravel.", category: "Full-stack systems", year: "2026", status: "Local system implementation", role: "Full-stack Laravel development",
    summary: "An air-conditioning service website and admin system connecting four-step appointment booking, care plans, scheduling, customers, and payment records.",
    challenge: "Service businesses need a simple booking experience and a reliable internal view of appointments, pricing, schedules, and payment status. The customer and admin journeys must agree on the same records.",
    approach: "Use Laravel and MySQL as a single source of truth for the public website and secure administration. Connect unit-based service pricing, conflict checks, private booking links, and cash-after-service reconciliation.",
    capabilities: [{ title: "Four-step booking", text: "Service and unit selection, exact pricing, schedule conflict protection, and customer booking details." }, { title: "Care plans and self-service", text: "Quarterly and biannual care-plan requests, private booking management, and cancellation rules." }, { title: "Admin operations", text: "Appointments, customers, services, subscriptions, dashboard graphs, and reporting in one admin area." }, { title: "Payment records", text: "Unpaid records created with bookings and admin reconciliation after cash collection. Online payment processing is outside the current implementation." }], stack: ["Laravel", "PHP", "MySQL", "Blade", "Vite", "Docker"], visual: "icybreeze", color: "#e3eff6", note: "Implemented and tested locally. The active scope is the customer website and admin dashboard. The preview is an interface illustration.", related: ["rayo-electric", "revive-recovery-australia"],
  },
  {
    slug: "rayo-electric", name: "Rayo Electric", subtitle: "WordPress website and appointment requests.", category: "Full-stack systems", year: "2026", status: "WordPress theme ready for hosting", role: "Custom WordPress & PHP development",
    summary: "A custom electrician website with editable service content, an appointment-request workflow, a private admin inbox, and marketing attribution capture.",
    challenge: "A local service site needs to make the offer understandable and turn an inquiry into a request the business can follow up on. Staff also need to know where the request came from.",
    approach: "Build a custom PHP WordPress theme that handles both the public experience and appointment requests. Give the business editable service content and a manageable request lifecycle inside WordPress.",
    capabilities: [{ title: "Custom service website", text: "Responsive marketing pages, editable Services content, business settings, and structured business information." }, { title: "Appointment requests", text: "Preferred date and time window, server-side validation, spam controls, and an admin notification workflow." }, { title: "Admin inbox", text: "Private requests with New, Contacted, Confirmed, Completed, and Cancelled statuses." }, { title: "Attribution capture", text: "UTM parameters, GCLID, landing page, and referrer captured with the request to support marketing follow-up." }], stack: ["WordPress", "PHP", "JavaScript", "CSS", "Marketing attribution"], visual: "rayo", color: "#f3e7ce", note: "The theme is implemented; production hosting and email-delivery configuration remain launch steps. Appointment requests require staff confirmation.", related: ["icybreeze", "motovan-shopify"],
  },
  {
    slug: "bia-skin", name: "BIA Skin", subtitle: "Shopify Broadcast theme customization.", category: "Shopify & ecommerce", year: "2026", status: "Ongoing storefront refinement", role: "Shopify theme development & UI refinement",
    summary: "Storefront redesign and custom section work on the Broadcast theme, improving homepage, collection, and product page consistency across desktop and mobile.",
    challenge: "A store’s product cards, media, typography, and purchase actions need to feel like one brand. Theme customizations must also keep working across different products and screen sizes.",
    approach: "Translate the BIA design direction into reusable theme improvements, refine product and collection interactions, and resolve Liquid and CSS issues through focused iteration.",
    capabilities: [{ title: "Broadcast theme refinement", text: "Homepage, collection, and product page changes to typography, spacing, colors, and responsive layouts." }, { title: "Product-card interactions", text: "Image hover behavior, sold-out states, badges, CTA buttons, review presentation, swatches, and mobile styling." }, { title: "Custom content sections", text: "Collection, story, newsletter, promotional, image, and video sections aligned with the brand direction." }, { title: "Theme maintenance", text: "Liquid and CSS fixes and responsive checks to keep custom elements consistent across the storefront." }], stack: ["Shopify", "Liquid", "Broadcast theme", "JavaScript", "CSS", "Responsive QA"], visual: "commerce", image: "/projects/bia-banner.jpg", color: "#f0e3df", note: "An ongoing contribution to an existing brand storefront. The preview uses the brand’s actual homepage banner. The live storefront may include later changes by the team.", links: [{ label: "Visit BIA Skin", href: "https://www.biaskin.com/" }], related: ["salted-seas", "cencal-motorsport"],
  },
  {
    slug: "cencal-motorsport", name: "CenCal Motorsport", subtitle: "Storewide Shopify development and ongoing improvements.", category: "Shopify & ecommerce", year: "2026–present", status: "Ongoing storewide development", role: "Shopify development across the whole store",
    summary: "Ongoing work across the CenCal Motorsport Shopify store, covering the storefront as a whole rather than a single page or section. The store sells automotive parts and accessories organized by vehicle model.",
    challenge: "The store needs to support product discovery across vehicle models and a large parts catalog. Navigation, collection pages, product information, and the cart need to work consistently as the storefront changes.",
    approach: "Work across the existing Shopify store, review how changes affect related pages, and check the customer path from vehicle and product selection through to the cart. The scope is ongoing, with updates reviewed as they are completed.",
    capabilities: [
      { title: "Storewide development", text: "Development work across the Shopify storefront, including its shared theme and page structure." },
      { title: "Catalog and shopping flow", text: "Storewide scope spanning navigation, vehicle-based product discovery, collections, and product pages." },
      { title: "Cart and page consistency", text: "Review how storefront updates connect to shopping actions and the cart across desktop and mobile browsers." },
      { title: "Ongoing refinement", text: "Continued implementation, review, and fixes as store requirements change." },
    ], stack: ["Shopify", "Liquid", "JavaScript", "CSS"], visual: "commerce", image: "/projects/cencal-banner.jpg", color: "#e9e5db",
    note: "Ongoing storewide contribution. This preview uses actual imagery from the public storefront; it does not imply sole authorship of every asset, product, or feature.", links: [{ label: "Visit CenCal Motorsport", href: "https://cencalmotorsport.com/" }], related: ["bia-skin", "geminos"],
  },
  {
    slug: "marcozo", name: "Marcozo", subtitle: "Shopify store setup and custom Liquid sections.", category: "Shopify & ecommerce", year: "2024", status: "Contract build", role: "Shopify storefront development",
    summary: "A jewelry ecommerce build covering Shopify setup, reusable Liquid sections, product layouts, collections, and responsive storefront refinement.",
    challenge: "Jewelry shopping depends on clear product presentation, considered navigation, and a consistent visual experience across the catalog.",
    approach: "Structure the store around reusable theme sections and product content, using metafields where useful for product-specific information and a consistent presentation.",
    capabilities: [{ title: "Store structure", text: "Shopify setup, collection organization, navigation, and theme structure." }, { title: "Reusable sections", text: "Custom Liquid sections and metafields supporting flexible brand and product content." }, { title: "Product presentation", text: "Product-page layouts and visual hierarchy designed around detail and purchase confidence." }, { title: "Launch revisions", text: "Responsive refinement, mobile QA, and practical launch adjustments." }], stack: ["Shopify", "Liquid", "Metafields", "CSS", "Mobile QA"], visual: "commerce", image: "/brand-assets/marcozo-hero.webp", color: "#e7e2d9", note: "A contract storefront contribution. Brand imagery is from the existing portfolio; the linked website may have changed since delivery.", links: [{ label: "Visit brand website", href: "https://www.marcozo.com/" }], related: ["salted-seas", "pagulayan-cues"],
  },
  {
    slug: "flowpouch", name: "Flowpouch", subtitle: "Storefront, landing page, and funnel support.", category: "Shopify & ecommerce", year: "2024", status: "Team ecommerce project", role: "Shopify development & funnel support",
    summary: "Team-based storefront delivery combining responsive sections, product education, offer structure, and email-flow support for a wellness brand.",
    challenge: "Visitors need to understand the product, find relevant benefits and proof, and move through an offer without losing context on a small screen.",
    approach: "Build and refine reusable shopping sections, organize benefits and proof, and connect the landing, product, and follow-up experience with the wider team.",
    capabilities: [{ title: "Responsive sections", text: "Shopify and GemPages page work with clear content order across screen sizes." }, { title: "Offer structure", text: "Benefit hierarchy, product education, proof, FAQs, and practical buying actions." }, { title: "Funnel thinking", text: "Landing-to-checkout flow planning informed by Funnelish-style offer structures." }, { title: "Email support", text: "Klaviyo and related follow-up support as part of the broader ecommerce journey." }], stack: ["Shopify", "GemPages", "Klaviyo", "Funnelish", "CRO"], visual: "commerce", image: "/brand-assets/flowpouch-hero.webp", color: "#e3e9d9", note: "A collaborative ecommerce project. No conversion uplift is claimed without measured evidence.", links: [{ label: "Visit brand website", href: "https://flowpouch.com/" }], related: ["bia-skin", "salted-seas"],
  },
  {
    slug: "pagulayan-cues", name: "Pagulayan Cues", subtitle: "Theme development and ecommerce integrations.", category: "Shopify & ecommerce", year: "2023", status: "Team ecommerce project", role: "Shopify development & integration support",
    summary: "Specialist retail storefront work spanning theme edits, product and collection organization, responsive navigation, and analytics and email integrations.",
    challenge: "A technical product catalog needs to communicate the details shoppers use to compare products while keeping navigation and product discovery straightforward.",
    approach: "Refine product and collection structure, implement responsive theme changes, and support the tools used to understand visitors and follow up with customers.",
    capabilities: [{ title: "Catalog organization", text: "Product and collection structure designed for specialist retail browsing." }, { title: "Theme and page work", text: "Shopify theme edits, GemPages support, navigation refinement, and responsive layouts." }, { title: "Analytics support", text: "GA4, Microsoft Clarity, and Merchant Center integration support." }, { title: "Customer communication", text: "Klaviyo integration support alongside the storefront experience." }], stack: ["Shopify", "GemPages", "GA4", "Merchant Center", "Klaviyo"], visual: "commerce", image: "/brand-assets/pagulayan-hero.webp", color: "#e9e1cb", note: "A team-based contribution; current brand content may differ from the delivered work.", links: [{ label: "Visit brand website", href: "https://pagulayancues.com/" }], related: ["marcozo", "motovan-shopify"],
  },
  {
    slug: "two-brothers-grooming", name: "Two Brothers Grooming", subtitle: "Ecommerce content and storefront support.", category: "Shopify & ecommerce", year: "Project work", status: "Storefront project", role: "Ecommerce storefront support",
    summary: "Ecommerce support covering product content, reusable page sections, and shopping layouts for desktop and mobile.",
    challenge: "Grooming products need to communicate what they do and how they fit into a customer’s routine, while keeping the shopping experience fast to understand.",
    approach: "Support a consistent brand presentation through useful product content, reusable page sections, and clear actions on mobile.",
    capabilities: [{ title: "Product storytelling", text: "Content presentation that puts product purpose and customer use first." }, { title: "Reusable page sections", text: "Brand-aligned sections for consistent storefront updates." }, { title: "Mobile shopping", text: "Responsive layouts and visible shopping actions." }, { title: "Trust and clarity", text: "Supporting information and conversion-focused interface refinement." }], stack: ["Shopify", "Liquid", "Responsive UI", "CRO"], visual: "commerce", image: "/brand-assets/two-brothers-hero.webp", color: "#dfe5db", note: "Storefront support contribution. The brand website is an external reference and may evolve independently.", links: [{ label: "Visit brand website", href: "https://twobrothersgrooming.com/" }], related: ["flowpouch", "marcozo"],
  },
  {
    slug: "sudorcure", name: "SudorCure", subtitle: "Product information and storefront development.", category: "Shopify & ecommerce", year: "Project work", status: "Ecommerce project", role: "Shopify ecommerce development",
    summary: "A product-education-led ecommerce project focused on navigation, treatment information, trust content, and responsive shopping journeys.",
    challenge: "A specialist device requires more explanation than an everyday retail product. Visitors need organized information and a clear way to explore the product before deciding what to do next.",
    approach: "Support the storefront’s information hierarchy with clearer navigation, product education, and responsive page layouts.",
    capabilities: [{ title: "Product education", text: "Organized product and treatment information presented in understandable sections." }, { title: "Discovery and navigation", text: "Clearer routes between supporting information and product pages." }, { title: "Responsive experience", text: "Shopping journeys and product content refined for smaller screens." }, { title: "Decision support", text: "Trust content and clear actions that help visitors find the information they need." }], stack: ["Shopify", "Product education", "UX", "Mobile QA"], visual: "commerce", image: "/brand-assets/sudorcure-hero.webp", color: "#e0eaf0", note: "This case study describes ecommerce development work, not medical claims about the product.", links: [{ label: "Visit brand website", href: "https://www.sudorcure.com/" }], related: ["salted-seas", "bia-skin"],
  },
  {
    slug: "motovan-shopify", name: "Motovan → Shopify", subtitle: "Supplier product data integration with Shopify.", category: "API & integrations", year: "2024", status: "B2B integration project", role: "API integration & data validation support",
    summary: "A REST and JSON product synchronization workflow mapping B2B product details, SKUs, pricing, and inventory into Shopify-ready structures.",
    challenge: "Supplier data and ecommerce catalogs rarely use exactly the same structure. Field mismatches and inconsistent inventory values need to be identified before they become storefront problems.",
    approach: "Map the source fields to Shopify product structures, investigate API mismatches, and validate imported listings against the source data in Shopify Admin.",
    capabilities: [{ title: "Field mapping", text: "Translate SKUs, product details, pricing, and inventory into Shopify-ready structures." }, { title: "REST and JSON handling", text: "Work with API responses and structured product data for the synchronization workflow." }, { title: "Catalog validation", text: "Check imported product listings and inventory values in Shopify Admin." }, { title: "Mismatch investigation", text: "Trace API and mapping inconsistencies to support a more reliable catalog." }], stack: ["REST APIs", "JSON", "Shopify Admin", "Product data", "Data validation"], visual: "integration", color: "#e8e9df", note: "The supplier website is a reference only. Integration access and private product synchronization tools are not exposed in this portfolio.", links: [{ label: "Visit supplier website", href: "https://motovan.com/" }], related: ["revive-recovery-uk", "pagulayan-cues"],
  },
  {
    slug: "geminos", name: "Geminos", subtitle: "Shopify store setup and launch preparation.", category: "Shopify & ecommerce", year: "Freelance project", status: "Public store · setup & launch contribution", role: "Shopify store setup",
    summary: "Freelance Shopify setup and launch preparation, covering storefront configuration, content structure, and handoff.",
    challenge: "A new store needs its core storefront, content, and shopping structure brought together before a launch can be reviewed properly.",
    approach: "Support the store setup and launch preparation with a focus on consistent presentation and the essentials needed for a merchant handoff.",
    capabilities: [{ title: "Store setup", text: "Support the initial Shopify storefront configuration and presentation." }, { title: "Launch preparation", text: "Help bring the customer-facing store into a reviewable state for launch." }], stack: ["Shopify", "Store setup", "Launch support"], visual: "commerce", image: "/projects/geminos-banner.png", color: "#e8eef9", note: "The preview uses imagery from the current public storefront. My contribution covers store setup and launch preparation; current content may include later changes.", links: [{ label: "Visit Geminos", href: "https://geminos.store/" }], related: ["marcozo", "cencal-motorsport"],
  },
];

export const featuredProjects = projects.slice(0, 4);

export const expertise = [
  { number: "01", title: "Full-stack web development", text: "Web applications with an interface, backend logic, and database. This includes new systems and changes to existing applications.", items: ["Responsive web applications", "Authentication & role-based access", "Dashboards & reporting"], category: "Full-stack systems", icon: "code" },
  { number: "02", title: "Admin & server-side systems", text: "Admin dashboards, member and customer records, data imports, reporting, and server-side workflows for business operations.", items: ["APIs & business logic", "Data imports & reconciliation", "Server deployment & maintenance"], category: "Full-stack systems", icon: "server" },
  { number: "03", title: "Shopify ecommerce", text: "Shopify theme setup, custom Liquid sections, product and collection pages, integrations, and fixes across desktop and mobile.", items: ["Custom Liquid & theme development", "Product, collection & landing pages", "Integrations & mobile refinement"], category: "Shopify & ecommerce", icon: "shop" },
  { number: "04", title: "Mobile app development", text: "React Native and Expo applications, from screen design and navigation to backend integration and device features. Current work includes PetMate and Iligan Bay.", items: ["App screens, navigation & user flows", "Authentication & API connections", "Camera, location & device testing"], category: "Mobile apps & UI/UX", icon: "mobile" },
];

export const faqs = [
  { question: "What kinds of projects can we work on?", answer: "Web and mobile applications, admin dashboards, API integrations, Shopify storefronts, custom WordPress sites, and UI/UX prototypes. Mobile work uses React Native and Expo; the project pages show which features are implemented and which are prototypes. I can help build a new system or improve an existing one, depending on its scope and current state." },
  { question: "Can you work with an existing team or codebase?", answer: "Yes. My experience includes working with designers, copywriters, store owners, and remote project teams, as well as maintaining existing systems. I start by understanding the current setup, requirements, and the work already in place." },
  { question: "Can I see a demo of a private system?", answer: "The case studies explain the workflows, technology, and my contribution. For private business systems, we can discuss a walkthrough using approved or non-sensitive examples. Customer records and private account access are not included in the portfolio." },
  { question: "How do we get started?", answer: "Send a short description of the project, the main problem you want to solve, your current platform, and your preferred timeline. We can then clarify the scope, deliverables, and next steps together." },
];
