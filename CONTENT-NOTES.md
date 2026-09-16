# Portfolio content notes

The redesign presents Junry as a Full-Stack Software Developer, specializing in Admin & Server-Side Systems and Shopify Ecommerce Development.

## Content sources

- Existing portfolio: professional contact information, resume link, established Shopify projects, work experience, and supplied portrait and brand assets.
- Revive Recovery Australia and UK: project README files and recent operational-development task summaries.
- PetMate: project README, local Figma SVG exports, and the completed Figma flow-board task. The links point to the existing Figma file and its owner/admin flow boards.
- Iligan Bay: system and mobile README files and architecture documentation. Presented by its product name; educational classification and class activities are excluded.
- IcyBreeze: current Laravel application README, including the customer/admin scope and cash-after-service workflow.
- Rayo Electric: custom WordPress theme README, distinguishing the implemented theme from outstanding hosting/launch tasks.
- BIA Skin: the recent storefront-development work summary, covering Broadcast theme, Liquid/CSS, product cards, and custom content sections.

## Presentation rules

- Do not invent conversion percentages, revenue figures, testimonials, or project outcomes.
- Each case study states the contribution and current scope. Prototypes and future phases are labeled explicitly.
- Private-system artwork is a labeled illustration. It contains no member, customer, financial, or authentication records.
- Commerce assets come from the existing portfolio or the actual storefront sources listed below. External brand links are references, not claims that the current site matches every contributed revision.
- The contact form prepares an email draft. It does not send email or claim that an inquiry has been delivered.
- The production metadata base points to the existing Junry portfolio domain. The user authorized production publication and a GitHub push on 2026-09-16.
- Fonts are bundled from the official Google Fonts repository. License files are included next to the fonts.

## Maintenance

Edit `src/data/portfolio.ts` to update project descriptions, links, capabilities, related projects, contact details, and FAQs. The project library, case-study pages, sitemap, and displayed project count use this shared data.

## Copy and toolkit revision

- Use direct descriptions of the work, contribution, and status. Avoid slogans, unsupported outcomes, and inflated proficiency claims.
- `src/components/toolkit.tsx` restores all 43 tools from the original portfolio's six categories. It also includes 12 tools documented in the existing project content and original CRO section: React Native, Expo, Shopify Liquid, Replo, GemPages, Funnelish, Klaviyo, Microsoft Clarity, Shopify Analytics, Google Merchant Center, PageSpeed Insights, and PM2.
- Toolkit group links lead to relevant project examples; they do not imply that every listed tool was used in the linked project. Each project retains its own technology list.

## Brand assets and current projects

- Tool marks are bundled locally in `public/tool-logos/` and shared through `src/components/tool-logo.tsx`. Preserve their original fills and gradients. `sources.json` records the asset URLs (Iconify Logos, SVGL, and vendor-published icons).
- BIA Skin: actual homepage banner from `https://cdn.shopify.com/s/files/1/0610/7329/3483/files/bia-hero-mobile.jpg?v=1784388387`.
- Geminos: current homepage imagery from `https://geminos.store/cdn/shop/files/ChatGPT_Image_Aug_19_2026_01_31_57_PM.png?v=1787103142&width=1500`. The public storefront was accessible on 2026-09-16; the previous password-page note was removed.
- CenCal Motorsport: user explicitly confirmed an ongoing contribution across the whole store. The portfolio describes storewide scope, without claiming sole authorship, completed delivery, or performance metrics. Actual storefront imagery comes from `https://cencalmotorsport.com/cdn/shop/files/Photo_Feb_21_2025_7_09_51_PM_1_1.jpg?v=1767135347&width=1600`.
- Mobile app development is a separate service, supported by the existing PetMate and Iligan Bay work. It is distinguished from making a website responsive on a phone; no app-store launch is claimed.


## Homepage order, project identities, and personal story

- Homepage order matches navigation: Work, Expertise, About (including experience), Process, Tools, Contact. The FAQ sits immediately before Contact; section numbers run 01–06. Work in the homepage navigation now anchors to Selected Work, with the full project library linked from that section and the marquee.
- The About story is based on the user’s account on 2026-09-16: started during the pandemic, self-taught through YouTube, and worked as a junior developer. No exact year, first employer, or personal motivation has been invented. The final paragraph explains the existing client workflow.
- The marquee covers all 16 projects, with original storefront logo artwork and an Anytime Fitness logo from the local Revive Recovery project. Remote asset sources are recorded in `public/project-logos/sources.json`; original colors are retained, including naturally monochrome logos.
- PetMate uses its existing Figma-export mark. Iligan Bay, IcyBreeze, and Rayo Electric retain the existing project wordmarks/symbols because separate official logo files were not available. They are not presented as unrelated client identities.
- The marquee pauses on hover/focus, has an explicit pause control, and becomes a manually scrollable row for reduced-motion preferences. Duplicate visual content is hidden from assistive technologies and keyboard navigation.

- Expanded the personal story using the user’s additional account: studied programming and coding before Shopify, gained experience as a junior developer, and continues learning to adapt to project technologies. No exact starting year, employer, degree, or performance claim was added.
