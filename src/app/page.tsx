import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Braces, FileText, MapPin, Plus, Server, ShoppingBag, Smartphone } from "lucide-react";
import { HeroScene } from "@/components/hero-scene";
import { ProjectMarquee } from "@/components/project-marquee";
import { ToolLogo } from "@/components/tool-logo";
import { SocialLinks } from "@/components/social-links";
import { ContactForm } from "@/components/contact-form";
import { ProjectCard } from "@/components/project-card";
import { RevealObserver } from "@/components/reveal-observer";
import { expertise, faqs, featuredProjects, profile, projects } from "@/data/portfolio";

const steps = [
  { title: "Scope", text: "Your current setup, users, budget and timeline. We agree what is in, and what is not.", out: "Scope & priorities" },
  { title: "Plan", text: "Flows, data model, integrations and access, decided before the first line of code.", out: "Flows & architecture" },
  { title: "Build", text: "Working versions in stages, so you review real software instead of slides.", out: "Working software" },
  { title: "Ship", text: "Tested workflows, deployment, and handoff notes your team can maintain.", out: "Handoff notes" },
];

const stack = [
  { group: "Build", tools: ["Next.js", "React", "TypeScript", "React Native", "Node.js", "Laravel"] },
  { group: "Data & infra", tools: ["PostgreSQL", "Supabase", "Amazon AWS", "Nginx", "Docker", "GitHub Actions"] },
  { group: "Commerce", tools: ["Shopify", "Shopify Liquid", "Klaviyo", "Google Analytics", "Figma", "Stripe"] },
];

const experience = [
  { date: "2024 — now", title: "Software Developer & Administrator", where: "Anytime Fitness · SEB Group & JYM Group · AU / UK", href: "/work/revive-recovery-australia" },
  { date: "2023 — now", title: "Shopify Ecommerce Development", where: "Freelance & team projects · themes, storefronts, integrations", href: "/work?category=Shopify%20%26%20ecommerce" },
  { date: "Recent", title: "Product systems & mobile apps", where: "PetMate · Iligan Bay · IcyBreeze · Rayo Electric", href: "/work" },
];

export default function Home() {
  const shopifyCount = projects.filter(p => p.category === "Shopify & ecommerce").length;
  const proof = [
    { value: String(projects.length), label: "Projects & contributions" },
    { value: "AU · UK", label: "Systems running in production" },
    { value: String(shopifyCount), label: "Shopify stores & storefronts" },
    { value: "2023", label: "Building for clients since" },
  ];
  const icons = [Braces, Server, ShoppingBag, Smartphone];

  return <main id="main" className="home">
    <RevealObserver />
    <HeroScene />
    <ProjectMarquee />

    <section className="proof container" aria-label="At a glance">
      {proof.map((item, i) => <div key={item.label} data-reveal style={{ ["--d" as string]: i }}><strong>{item.value}</strong><span>{item.label}</span></div>)}
    </section>

    <section id="selected-work" className="section container">
      <div className="head" data-reveal>
        <p className="tag"><span>01</span> Selected work</p>
        <h2>Real systems, real stores.<br /><span className="dim">Here is what I built and what I owned.</span></h2>
        <Link href="/work" className="arrow-link">All {projects.length} projects <ArrowUpRight size={17} /></Link>
      </div>
      <div className="work-grid">{featuredProjects.map((project, index) => <div key={project.slug} className={index === 0 ? "feature" : undefined} data-reveal style={{ ["--d" as string]: index % 2 }}><ProjectCard project={project} index={index} /></div>)}</div>
      <div className="more-work" data-reveal>
        <span className="tag">More projects</span>
        <div>{["bia-skin", "cencal-motorsport", "geminos", "revive-recovery-uk"].map(slug => { const p = projects.find(item => item.slug === slug)!; return <Link key={slug} href={`/work/${slug}`}><span>{p.name}</span><small>{p.category}</small><ArrowUpRight size={16} /></Link>; })}</div>
      </div>
    </section>

    <section id="expertise" className="section services">
      <div className="container services-grid">
        <div className="services-intro" data-reveal>
          <p className="tag"><span>02</span> What I build</p>
          <h2>Systems first.<br /><span className="dim">Storefronts and apps around them.</span></h2>
          <p>Most of my work sits behind the screen: data, rules, roles and the dashboards people run their day on. The same skills carry into Shopify and mobile.</p>
        </div>
        <ol className="service-list">
          {expertise.map((item, i) => {
            const Icon = icons[i];
            return <li key={item.title} data-reveal style={{ ["--d" as string]: i }}>
              <Link href={`/work?category=${encodeURIComponent(item.category)}`}>
                <span className="service-num">{item.number}</span>
                <div>
                  <h3><Icon size={20} strokeWidth={1.6} /> {item.title}</h3>
                  <p>{item.text}</p>
                  <ul>{item.items.map(text => <li key={text}>{text}</li>)}</ul>
                </div>
                <ArrowUpRight className="service-arrow" size={22} />
              </Link>
            </li>;
          })}
        </ol>
      </div>
    </section>

    <section id="about" className="section container about">
      <div className="about-media" data-reveal>
        <div className="about-photo"><Image src="/profile/junry-gallego-closeup.png" alt="Portrait of Junry Gallego" fill sizes="(max-width: 760px) 100vw, 40vw" /></div>
        <span className="about-loc"><MapPin size={13} /> Iligan City, Philippines</span>
      </div>
      <div className="about-copy">
        <p className="tag" data-reveal><span>03</span> About</p>
        <h2 data-reveal>Self-taught.<br /><span className="dim">Now trusted with production.</span></h2>
        <p className="lead" data-reveal>I taught myself to code during the pandemic: YouTube tutorials, broken builds, and a lot of reading error messages until they made sense.</p>
        <p data-reveal>That foundation led to a junior developer role, then Shopify work across freelance and team projects. Today I build and maintain the systems Anytime Fitness gym groups in Australia and the UK use every day, alongside mobile apps and storefronts.</p>
        <p data-reveal>With clients I listen first, agree the scope, ship in stages you can review, and hand over documented work you can actually run.</p>
        <div className="timeline" data-reveal>
          {experience.map(item => <Link key={item.title} href={item.href}><span>{item.date}</span><div><h3>{item.title}</h3><p>{item.where}</p></div><ArrowUpRight size={18} /></Link>)}
        </div>
        <a className="btn btn-ghost" href={profile.resume} target="_blank" rel="noopener noreferrer" data-reveal><FileText size={16} /> Résumé <ArrowUpRight size={16} /></a>
      </div>
    </section>

    <section id="process" className="section container">
      <div className="head" data-reveal>
        <p className="tag"><span>04</span> Process</p>
        <h2>Four steps.<br /><span className="dim">No surprises.</span></h2>
      </div>
      <ol className="steps">{steps.map((step, i) => <li key={step.title} data-reveal style={{ ["--d" as string]: i }}><span className="step-n">0{i + 1}</span><h3>{step.title}</h3><p>{step.text}</p><small>→ {step.out}</small></li>)}</ol>
    </section>

    <section id="tools" className="section container stack">
      <div className="head" data-reveal>
        <p className="tag"><span>05</span> Core stack</p>
        <h2>The tools I reach for.<br /><span className="dim">Each project page lists the full stack.</span></h2>
      </div>
      <div className="stack-rows">{stack.map((row, r) => <div key={row.group} className="stack-row" data-reveal style={{ ["--d" as string]: r }}><span className="tag">{row.group}</span><ul>{row.tools.map(tool => <li key={tool}><ToolLogo name={tool} size={22} /> {tool}</li>)}</ul></div>)}</div>
    </section>

    <section className="section container faq">
      <div data-reveal>
        <p className="tag">Before we begin</p>
        <h2>Questions,<br /><span className="dim">answered.</span></h2>
      </div>
      <div className="faq-items">{faqs.map((faq, i) => <details key={faq.question} data-reveal style={{ ["--d" as string]: i }}><summary><span>0{i + 1}</span>{faq.question}<Plus size={18} /></summary><p>{faq.answer}</p></details>)}</div>
    </section>

    <section id="contact" className="contact">
      <div className="container contact-layout">
        <div className="contact-left" data-reveal>
          <p className="tag"><span>06</span> Contact</p>
          <h2>Have a system<br />to build? <span>Let’s talk.</span></h2>
          <p>Tell me what you need, your current platform, and your timeline. I reply with questions, not a sales pitch.</p>
          <a className="contact-mail" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={22} /></a>
          <div className="contact-links">
            <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp <ArrowUpRight size={14} /></a>
            <a href={profile.phoneHref}>Call <ArrowUpRight size={14} /></a>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer">Résumé <ArrowUpRight size={14} /></a>
          </div>
          <SocialLinks />
        </div>
        <div data-reveal style={{ ["--d" as string]: 1 }}><ContactForm /></div>
      </div>
    </section>
  </main>;
}
