export type ToolGroup = { title: string; summary: string; tools: string[] };

/* The complete toolkit, grouped. Every name here has a logo in tool-logos.ts. */
export const toolGroups: ToolGroup[] = [
  {
    title: "Frontend engineering",
    summary: "Web and mobile interfaces, reusable components, and screen design.",
    tools: ["Next.js", "React", "TypeScript", "JavaScript", "CSS", "Tailwind CSS", "Vite", "Figma", "React Native", "Expo"],
  },
  {
    title: "Backend & APIs",
    summary: "Server-side logic, authentication, API integration, and request testing.",
    tools: ["Node.js", "Express", "Laravel", "Django", "PHP", "Python", "Postman", "Stripe"],
  },
  {
    title: "Data & admin operations",
    summary: "Database structure, imports, record cleanup, and operational reports.",
    tools: ["PostgreSQL", "MySQL", "Supabase", "MongoDB", "Redis", "Microsoft 365"],
  },
  {
    title: "Ecommerce & CRO",
    summary: "Themes, landing pages, analytics, email flows, and conversion work.",
    tools: ["Shopify", "Shopify Liquid", "WooCommerce", "WordPress", "Webflow", "Wix", "Replo", "GemPages", "Funnelish", "Klaviyo", "Mailchimp", "Google Analytics", "Google Ads", "Microsoft Clarity", "Shopify Analytics", "Google Merchant Center", "PageSpeed Insights"],
  },
  {
    title: "Cloud & deployment",
    summary: "Hosting, server configuration, releases, monitoring, and maintenance.",
    tools: ["Amazon AWS", "Vercel", "Nginx", "Docker", "Cloudflare", "GitHub Actions", "Sentry", "PM2"],
  },
  {
    title: "Delivery & collaboration",
    summary: "Version control, task tracking, documentation, and remote teamwork.",
    tools: ["GitHub", "GitLab", "Bitbucket", "pnpm", "Slack", "Asana", "Notion", "Trello", "Zapier"],
  },
];

export const allTools = toolGroups.flatMap(group => group.tools);
