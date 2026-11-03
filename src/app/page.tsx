import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Braces, FileText, MapPin, Plus, Server, ShoppingBag, Smartphone } from "lucide-react";
import { HeroScene } from "@/components/hero-scene";
import { ProjectMarquee } from "@/components/project-marquee";
import { ToolLogo } from "@/components/tool-logo";
import { SocialLinks } from "@/components/social-links";
import { ContactForm } from "@/components/contact-form";
import { RevealObserver } from "@/components/reveal-observer";
import { WorkRail } from "@/components/work-rail";
import { CountUp } from "@/components/count-up";
import { expertise, faqs, profile, projects } from "@/data/portfolio";
import { allTools, toolGroups } from "@/data/tools";

const railSlugs = ["revive-recovery-australia", "petmate", "iligan-bay", "salted-seas", "cencal-motorsport", "motovan-shopify", "icybreeze", "bia-skin", "revive-recovery-uk"];

const steps = [
  { title: "Scope", text: "Your current setup, users, budget and timeline. We agree what is in, and what is not.", out: "Scope & priorities" },
  { title: "Plan", text: "Flows, data model, integrations and access, decided before the first line of code.", out: "Flows & architecture" },
  { title: "Build", text: "Working versions in stages, so you review real software instead of slides.", out: "Working software" },
  { title: "Ship", text: "Tested workflows, deployment, and handoff notes your team can maintain.", out: "Handoff notes" },
];

const clubs = [
  { group: "SEB Group", region: "Australia", count: 19 },
  { group: "JYM Group", region: "New South Wales", count: 11 },
  { group: "JYM Group", region: "Victoria", count: 8 },
  { group: "JYM Group", region: "United Kingdom", count: 1 },
];

const experience = [
  { date: "2024 — now", title: "Software Developer & Administrator", where: "Anytime Fitness · SEB Group & JYM Group · AU / UK", href: "/work/revive-recovery-australia" },
  { date: "2023 — now", title: "Shopify Ecommerce Development", where: "Freelance & team projects · themes, storefronts, integrations", href: "/work?category=Shopify%20%26%20ecommerce" },
  { date: "Recent", title: "Product systems & mobile apps", where: "PetMate · Iligan Bay · IcyBreeze · Rayo Electric", href: "/work" },
];

export default function Home() {
  const rail = railSlugs.map(slug => projects.find(p => p.slug === slug)).filter((p): p is (typeof projects)[number] => Boolean(p));
  const icons = [Braces, Server, ShoppingBag, Smartphone];
  const half = Math.ceil(allTools.length / 2);

  return <main id="main" className="home">
    <RevealObserver />
    <HeroScene />
    <ProjectMarquee />

    <section className="stats container" aria-label="At a glance">
      <div data-reveal><strong className="display"><CountUp value={20} suffix="+" /></strong><span>Projects delivered &amp; contributed to</span></div>
      <div data-reveal style={{ ["--d" as string]: 1 }}><strong className="display"><CountUp value={10} suffix="+" /></strong><span>Shopify stores &amp; storefronts</span></div>
      <div data-reveal style={{ ["--d" as string]: 2 }}><strong className="display"><CountUp value={39} /></strong><span>Anytime Fitness clubs supported</span></div>
      <div data-reveal style={{ ["--d" as string]: 3 }}><strong className="display">AU<em>·</em>UK</strong><span>Systems running in production</span></div>
    </section>

    <WorkRail projects={rail} />

    <section id="expertise" className="services">
      <div className="container">
        <div className="sec-head" data-reveal>
          <p className="tag"><span>02</span> What I build</p>
          <h2 className="display">Systems first.<br /><span className="stroke-text">Then everything around them.</span></h2>
        </div>
        <ol className="svc-list">
          {expertise.map((item, i) => {
            const Icon = icons[i];
            return <li key={item.title} data-reveal style={{ ["--d" as string]: i }}>
              <Link href={`/work?category=${encodeURIComponent(item.category)}`}>
                <span className="svc-num">{item.number}</span>
                <h3 className="display">{item.title}</h3>
                <div className="svc-body">
                  <p>{item.text}</p>
                  <ul>{item.items.map(text => <li key={text}>{text}</li>)}</ul>
                </div>
                <span className="svc-icon"><Icon size={26} strokeWidth={1.5} /></span>
              </Link>
            </li>;
          })}
        </ol>
      </div>
    </section>

    <section id="about" className="about container">
      <div className="about-card" data-reveal>
        <span className="about-mono display" aria-hidden="true">JJG</span>
        <Image src="/profile/junry-gallego-crossed-arms.png" alt="Junry Jumawan Gallego" width={500} height={500} sizes="(max-width: 900px) 90vw, 40vw" />
        <div className="about-card-label"><span>Junry Jumawan Gallego</span><small><MapPin size={12} /> Iligan City, Philippines</small></div>
      </div>
      <div className="about-copy">
        <p className="tag" data-reveal><span>03</span> About</p>
        <h2 className="display" data-reveal>Self-taught.<br /><span className="stroke-text">Trusted with production.</span></h2>
        <p className="lead" data-reveal>I taught myself to code during the pandemic: YouTube tutorials, broken builds, and a lot of reading error messages until they made sense.</p>
        <p data-reveal>That foundation led to a junior developer role, then Shopify work across freelance and team projects. Today I build and maintain the systems Anytime Fitness gym groups in Australia and the UK use every day, alongside mobile apps and storefronts.</p>
        <p data-reveal>With clients I listen first, agree the scope, ship in stages you can review, and hand over documented work you can actually run.</p>

        <div className="clubs" data-reveal>
          <div className="clubs-head"><span className="tag">Anytime Fitness network I support</span><strong className="display"><CountUp value={39} /> clubs</strong></div>
          <ul>{clubs.map(c => <li key={c.region}><b className="display">{c.count}</b><span>{c.group}<small>{c.region}</small></span></li>)}</ul>
        </div>

        <div className="timeline" data-reveal>
          {experience.map(item => <Link key={item.title} href={item.href}><span>{item.date}</span><div><h3>{item.title}</h3><p>{item.where}</p></div><ArrowUpRight size={18} /></Link>)}
        </div>
        <a className="btn btn-line" href={profile.resume} target="_blank" rel="noopener noreferrer" data-reveal><FileText size={16} /> View résumé <ArrowUpRight size={16} /></a>
      </div>
    </section>

    <section id="process" className="process">
      <div className="container process-layout">
        <div className="process-intro" data-reveal>
          <p className="tag"><span>04</span> Process</p>
          <h2 className="display">Four steps.<br /><span className="stroke-text">No surprises.</span></h2>
          <p>Every project runs the same way, whether it is a Shopify section or a full admin platform.</p>
        </div>
        <ol className="stack-cards">
          {steps.map((step, i) => <li key={step.title} style={{ ["--i" as string]: i }}>
            <span className="display step-big">0{i + 1}</span>
            <div><h3 className="display">{step.title}</h3><p>{step.text}</p><small>→ {step.out}</small></div>
          </li>)}
        </ol>
      </div>
    </section>

    <section id="tools" className="tools">
      <div className="container sec-head" data-reveal>
        <p className="tag"><span>05</span> Toolkit</p>
        <h2 className="display">{allTools.length} tools.<br /><span className="stroke-text">One way of working.</span></h2>
      </div>
      <div className="logo-rows" aria-hidden="true">
        {[allTools.slice(0, half), allTools.slice(half)].map((row, r) => (
          <div key={r} className={`logo-row${r ? " reverse" : ""}`}>
            <div className="logo-track">{[...row, ...row].map((tool, i) => <span key={i}><ToolLogo name={tool} size={26} />{tool}</span>)}</div>
          </div>
        ))}
      </div>
      <div className="container tool-grid">
        {toolGroups.map((group, i) => <article key={group.title} data-reveal style={{ ["--d" as string]: i % 3 }}>
          <header><span className="display">{String(i + 1).padStart(2, "0")}</span><div><h3>{group.title}</h3><p>{group.summary}</p></div></header>
          <ul>{group.tools.map(tool => <li key={tool}><ToolLogo name={tool} size={22} />{tool}</li>)}</ul>
        </article>)}
      </div>
    </section>

    <section className="faq container">
      <div data-reveal>
        <p className="tag">Before we begin</p>
        <h2 className="display">Questions,<br /><span className="stroke-text">answered.</span></h2>
      </div>
      <div className="faq-items">{faqs.map((faq, i) => <details key={faq.question} data-reveal style={{ ["--d" as string]: i }}><summary><span>0{i + 1}</span>{faq.question}<Plus size={20} /></summary><p>{faq.answer}</p></details>)}</div>
    </section>

    <section id="contact" className="contact">
      <div className="container contact-layout">
        <div className="contact-left" data-reveal>
          <p className="tag"><span>06</span> Contact</p>
          <h2 className="display">Let&apos;s build<br />something<br /><em>that works.</em></h2>
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
