import Image from "next/image";
import Link from "next/link";
import { Activity, ArrowUpRight, CheckCircle2, Database, FileCheck2, FileText, LayoutDashboard, Mail, MessageCircle, Phone, Plus, ShieldCheck, Upload, Users } from "lucide-react";
import { Hero } from "@/components/hero";
import { ProjectMarquee } from "@/components/project-marquee";
import { ToolLogo } from "@/components/tool-logo";
import { SocialLinks } from "@/components/social-links";
import { ContactForm } from "@/components/contact-form";
import { RevealObserver } from "@/components/reveal-observer";
import { WorkGallery } from "@/components/work-gallery";
import { DataFlow } from "@/components/data-flow";
import { CountUp } from "@/components/count-up";
import { expertise, faqs, profile, projects } from "@/data/portfolio";
import { allTools, toolGroups } from "@/data/tools";

const order = ["revive-recovery-australia", "petmate", "salted-seas", "iligan-bay", "cencal-motorsport", "motovan-shopify", "icybreeze", "bia-skin", "revive-recovery-uk"];
const ticker = ["Full-stack systems", "Admin dashboards", "Data imports", "Shopify & Liquid", "React Native", "APIs & integrations", "AWS deployment", "UI / UX"];

const serviceLinks: Record<string, { slug: string; label: string }> = {
  "Full-stack systems": { slug: "revive-recovery-australia", label: "See Revive" },
  "Shopify & ecommerce": { slug: "salted-seas", label: "See Salted Seas" },
  "Mobile apps & UI/UX": { slug: "petmate", label: "See PetMate" },
  "API & integrations": { slug: "motovan-shopify", label: "See Motovan" },
};

const process = [
  { title: "The scope", text: "Your setup, users, budget and timeline. We agree what is in, and what is not." },
  { title: "The system", text: "Flows, data model, integrations and access, decided before the first line of code." },
  { title: "The build", text: "Working versions in stages you can review, then tested, deployed and handed over." },
];

const journey = [
  { when: "Now", title: "Software Developer & Administrator", where: "Anytime Fitness · SEB Group & JYM Group · AU / UK" },
  { when: "2023 →", title: "Shopify ecommerce developer", where: "Freelance and team projects · themes, storefronts, integrations" },
  { when: "Before", title: "Junior developer", where: "First role after teaching myself to code" },
  { when: "2020", title: "Self-taught start", where: "YouTube, broken builds, and reading every error message" },
];

const wins = [
  { title: "Revive Recovery live for 39 clubs", meta: "Australia & UK · ongoing" },
  { title: "10+ Shopify stores & storefronts shipped", meta: "Freelance & team contracts" },
  { title: "Motovan catalogue moved to Shopify", meta: "API & data integration" },
  { title: "PetMate mobile prototype", meta: "Figma · React Native · Expo" },
];

function ServiceVisual({ kind }: { kind: number }) {
  if (kind === 0) return <div className="sv sv-code" aria-hidden="true"><i /><i /><i /><code><b>export</b> async function <em>importMembers</em>()</code><code>  const rows = <em>parse</em>(csv)</code><code>  <b>await</b> db.members.<em>upsert</em>(rows)</code></div>;
  if (kind === 1) return <div className="sv sv-table" aria-hidden="true">{["Day 88 · Bondi", "Day 75 · Manly", "Revived · Parramatta", "Frozen · St Kilda"].map((r, i) => <span key={r} data-i={i}><i />{r}</span>)}</div>;
  if (kind === 2) return <div className="sv sv-shop" aria-hidden="true"><div className="svs-img" /><div><small>Shopify · Liquid</small><strong>Custom section</strong><span><b>₱1,850</b><i>Add to cart</i></span></div></div>;
  return <div className="sv sv-phone" aria-hidden="true"><div><small>Good afternoon</small><span /><span /><span className="soft" /></div></div>;
}

export default function Home() {
  const half = Math.ceil(allTools.length / 2);

  return <main id="main" className="home">
    <RevealObserver />
    <Hero />

    <div className="ticker" aria-label="What I work on">
      <div className="ticker-track">{[...ticker, ...ticker, ...ticker].map((t, i) => <span key={i}>{t}<i>✦</i></span>)}</div>
    </div>

    <ProjectMarquee />

    {/* 01 Work */}
    <section id="work" className="section container">
      <div className="sec-head" data-reveal>
        <div><p className="tag"><span>01</span> Selected work</p><h2 className="display">Work that <em className="serif">ships.</em></h2></div>
        <p className="sec-note">Production systems, Shopify storefronts and mobile apps. Each card shows my role and the project&apos;s real status.</p>
      </div>
      <div data-reveal><WorkGallery projects={projects} order={order} /></div>
    </section>

    {/* What I build */}
    <section id="expertise" className="section container">
      <div className="sec-head" data-reveal>
        <div><p className="tag"><span>02</span> What I build</p><h2 className="display">Made to <em className="serif">run.</em></h2></div>
        <Link href="#contact" className="link-arrow">Start a project <ArrowUpRight size={15} /></Link>
      </div>
      <div className="svc-grid">
        {expertise.map((item, i) => {
          const link = serviceLinks[item.category];
          return <article key={item.title} className="svc-card" data-reveal style={{ ["--d" as string]: i % 2 }}>
            <ServiceVisual kind={i} />
            <div className="svc-copy">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <ul>{item.items.map(t => <li key={t}>{t}</li>)}</ul>
              {link && <Link href={`/work/${link.slug}`} className="link-arrow small">{link.label} <ArrowUpRight size={13} /></Link>}
            </div>
          </article>;
        })}
      </div>
    </section>

    {/* Data flow */}
    <section className="section container" id="systems">
      <div className="sec-head" data-reveal>
        <div><p className="tag"><span>03</span> The engineering side</p><h2 className="display">Data that <em className="serif">flows.</em></h2></div>
        <p className="sec-note">Behind every dashboard is a pipeline. This is the one I run for Revive Recovery. Pick a stage to follow the data.</p>
      </div>
      <div data-reveal><DataFlow /></div>
    </section>

    {/* Spotlight */}
    <section className="spotlight">
      <div className="container spot-grid">
        <div className="spot-copy" data-reveal>
          <p className="tag"><span>Now running</span></p>
          <h2 className="display spot-title">Revive<br />Recovery<b>.</b></h2>
          <p className="spot-lede">A payment-recovery system for Anytime Fitness gym groups: imports from two billing platforms, recovery cases, follow-ups and reporting in one admin workspace.</p>
          <ul className="spot-features">
            <li><Upload size={17} /><div><strong>Validated imports</strong><span>ClubWise and DebitSuccess, row by row</span></div></li>
            <li><Users size={17} /><div><strong>Recovery cases</strong><span>Arrears windows, statuses and follow-ups</span></div></li>
            <li><ShieldCheck size={17} /><div><strong>Club-scoped access</strong><span>Roles, audit trail and status history</span></div></li>
            <li><FileCheck2 size={17} /><div><strong>Reporting</strong><span>Per club, per group, per cycle</span></div></li>
          </ul>
          <Link href="/work/revive-recovery-australia" className="btn btn-glow">Read the case study <ArrowUpRight size={16} /></Link>
        </div>
        <div className="spot-mock" data-reveal style={{ ["--d" as string]: 1 }} aria-hidden="true">
          <div className="mock-chrome"><i /><i /><i /><span>revive · admin workspace</span><b>Demo data</b></div>
          <div className="mock-body">
            <aside><strong><Activity size={15} /> revive</strong><span className="on"><LayoutDashboard size={13} /> Overview</span><span><Users size={13} /> Members</span><span><Activity size={13} /> Recovery</span><span><FileCheck2 size={13} /> Reports</span><span><Upload size={13} /> Imports</span></aside>
            <div className="mk-main">
              <div className="m-stat"><span>Rows validated</span><strong><CountUp value={12480} /></strong></div>
              <div className="m-stat"><span>Open cases</span><strong><CountUp value={342} /></strong></div>
              <div className="m-stat accent"><span>Follow-ups done</span><strong><CountUp value={96} suffix="%" /></strong></div>
              <div className="m-chart"><span>Recovery activity · 12 weeks</span><div>{[34, 48, 41, 60, 55, 72, 66, 84, 77, 92, 88, 100].map((v, i) => <i key={i} style={{ ["--h" as string]: v / 100, ["--i" as string]: i }} />)}</div></div>
              <div className="m-log"><span><Database size={12} /> import.log</span><code><b>✓</b> match members → accounts</code><code><b>✓</b> dedupe 214 records</code><code className="warn"><b>!</b> flag 18 mismatched</code><code><b>✓</b> commit → postgres</code></div>
            </div>
          </div>
          <div className="mock-toast"><CheckCircle2 size={15} /> Import committed · audit logged</div>
        </div>
      </div>
    </section>

    {/* About + process */}
    <section id="about" className="section container about">
      <div className="sec-head" data-reveal>
        <div><p className="tag"><span>04</span> Behind the builds</p><h2 className="display">Engineering precision.<br /><em className="serif">Creative instinct.</em></h2></div>
        <p className="sec-note">I taught myself to code during the pandemic. Today I build and maintain systems that gym groups in two countries run their day on, alongside mobile apps and storefronts.</p>
      </div>
      <div className="about-grid">
        <div className="about-col" data-reveal>
          <p className="col-label">Roles &amp; skills</p>
          <ul className="roles">
            <li><div><strong>Software Developer &amp; Administrator</strong><span>Admin systems, data imports, deployment</span></div><em>Current</em></li>
            <li><div><strong>Shopify developer</strong><span>Themes, Liquid sections, integrations</span></div><em>2023 →</em></li>
            <li><div><strong>Mobile &amp; UI/UX</strong><span>React Native, Expo, Figma prototypes</span></div></li>
          </ul>
          <div className="mini-logos">{["Next.js", "React", "TypeScript", "Laravel", "PostgreSQL", "Shopify", "Amazon AWS", "Figma"].map(t => <span key={t} title={t}><ToolLogo name={t} size={20} /></span>)}</div>
        </div>
        <div className="about-col" data-reveal style={{ ["--d" as string]: 1 }}>
          <p className="col-label">From idea to live system</p>
          <ol className="idea-steps">{process.map((s, i) => <li key={s.title}><span>0{i + 1}</span><div><strong>{s.title}</strong><p>{s.text}</p></div></li>)}</ol>
        </div>
        <figure className="quote-card" data-reveal style={{ ["--d" as string]: 2 }}>
          <Image src="/profile/junry-gallego-closeup.png" alt="" width={120} height={120} className="quote-photo" />
          <blockquote>I build systems.<br />I design experiences.</blockquote>
          <figcaption className="serif">Junry</figcaption>
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="link-arrow small"><FileText size={13} /> View résumé <ArrowUpRight size={13} /></a>
        </figure>
      </div>
    </section>

    {/* Journey */}
    <section id="process" className="section container journey">
      <div className="journey-grid">
        <div data-reveal>
          <p className="tag"><span>05</span> The journey</p>
          <h2 className="display">Always building.<br /><em className="serif">Always shipping.</em></h2>
          <ol className="timeline">{journey.map(j => <li key={j.title}><span>{j.when}</span><div><strong>{j.title}</strong><p>{j.where}</p></div></li>)}</ol>
        </div>
        <div data-reveal style={{ ["--d" as string]: 1 }}>
          <h3 className="display wins-title">Little wins,<br /><em className="serif">big meaning.</em></h3>
          <ul className="wins">{wins.map((w, i) => <li key={w.title}><span>0{i + 1}</span><div><strong>{w.title}</strong><small>{w.meta}</small></div><CheckCircle2 size={16} /></li>)}</ul>
        </div>
      </div>
    </section>

    {/* Tools */}
    <section id="tools" className="section tools">
      <div className="container sec-head" data-reveal>
        <div><p className="tag"><span>06</span> Toolkit</p><h2 className="display">{allTools.length} tools.<br /><em className="serif">One way of working.</em></h2></div>
      </div>
      <div className="logo-rows" aria-hidden="true">
        {[allTools.slice(0, half), allTools.slice(half)].map((row, r) => (
          <div key={r} className={`logo-row${r ? " reverse" : ""}`}><div className="logo-track">{[...row, ...row].map((tool, i) => <span key={i}><ToolLogo name={tool} size={24} />{tool}</span>)}</div></div>
        ))}
      </div>
      <div className="container tool-grid">
        {toolGroups.map((g, i) => <article key={g.title} data-reveal style={{ ["--d" as string]: i % 3 }}>
          <header><span className="display">{String(i + 1).padStart(2, "0")}</span><div><h3>{g.title}</h3><p>{g.summary}</p></div></header>
          <ul>{g.tools.map(t => <li key={t}><ToolLogo name={t} size={20} />{t}</li>)}</ul>
        </article>)}
      </div>
    </section>

    {/* Outlined strip */}
    <div className="strip" aria-hidden="true">
      <div className="strip-track">{Array.from({ length: 4 }).map((_, i) => <span key={i} className="display">Systems<i>✦</i>Stores<i>✦</i>Apps<i>✦</i></span>)}</div>
    </div>

    {/* FAQ */}
    <section className="section container faq">
      <div data-reveal><p className="tag">Before we begin</p><h2 className="display">Questions,<br /><em className="serif">answered.</em></h2></div>
      <div className="faq-items">{faqs.map((f, i) => <details key={f.question} data-reveal style={{ ["--d" as string]: i }}><summary><span>0{i + 1}</span>{f.question}<Plus size={18} /></summary><p>{f.answer}</p></details>)}</div>
    </section>

    {/* Contact */}
    <section id="contact" className="contact">
      <div className="container ct-grid">
        <div className="contact-left" data-reveal>
          <p className="tag"><span>07</span> Your next build</p>
          <h2 className="display">Let&apos;s work<br /><em className="serif">together.</em></h2>
          <p className="sec-note">Tell me what you need, your current platform and your timeline. I reply with questions, not a sales pitch.</p>
          <ul className="contact-rows">
            <li><a href={`mailto:${profile.email}`}><Mail size={17} /><span><small>Email</small>{profile.email}</span><ArrowUpRight size={15} /></a></li>
            <li><a href={profile.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={17} /><span><small>WhatsApp</small>{profile.phone}</span><ArrowUpRight size={15} /></a></li>
            <li><a href={profile.phoneHref}><Phone size={17} /><span><small>Call</small>{profile.phone}</span><ArrowUpRight size={15} /></a></li>
          </ul>
          <SocialLinks />
        </div>
        <div data-reveal style={{ ["--d" as string]: 1 }}><ContactForm /></div>
      </div>
    </section>
  </main>;
}
