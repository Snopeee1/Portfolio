import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, MapPin, Sparkle } from "lucide-react";
import { CountUp } from "./count-up";

const stats = [
  { value: 20, suffix: "+", label: "Projects delivered & contributed to" },
  { value: 10, suffix: "+", label: "Shopify stores & storefronts" },
  { value: 39, suffix: "", label: "Anytime Fitness clubs supported" },
];

/* The opening frame. On load, a "design tool" layer (rulers, guides, selection
   boxes, size badges) sits on top of the hero and then dissolves, so the page
   looks like it was just finished in front of the visitor. All CSS-driven. */
export function Hero() {
  return (
    <section className="opening" aria-labelledby="op-title">
      <div className="op-bg" aria-hidden="true"><i className="glow glow-a" /><i className="glow glow-b" /><i className="grain" /></div>

      <div className="container op-grid">
        <div className="op-copy">
          <p className="op-hello serif">Hello, I&apos;m</p>
          <h1 id="op-title" className="op-name display">
            <span className="hn-line"><span>Junry</span></span>
            <span className="hn-line"><span>Jumawan</span></span>
            <span className="hn-line"><span>Gallego<b>.</b></span></span>
            <span className="sel sel-name" aria-hidden="true"><span className="badge">640 × 312</span><i /><i /><i /><i /></span>
          </h1>
          <p className="op-role">Full-stack software developer <span>&amp;</span> Shopify / business systems developer</p>
          <p className="op-lede">I build admin platforms, data imports, APIs and mobile apps, plus the Shopify stores in front of them. Running in production for gym groups in Australia and the UK.</p>
          <div className="op-ctas">
            <Link href="/#work" className="btn btn-glow">See my work <ArrowDown size={16} /></Link>
            <Link href="#contact" className="btn btn-ghost">Let&apos;s talk <ArrowUpRight size={16} /></Link>
          </div>
        </div>

        <div className="op-portrait">
          <span className="portrait-ring" aria-hidden="true" />
          <span className="sel sel-photo" aria-hidden="true"><span className="badge">Image · 520 × 560</span><i /><i /><i /><i /></span>
          <Image src="/profile/junry-gallego-crossed-arms.png" alt="Junry Jumawan Gallego" width={500} height={500} preload sizes="(max-width: 900px) 80vw, 34vw" />
          <span className="portrait-tag"><MapPin size={12} /> Iligan City, PH · Remote</span>
        </div>

        <aside className="op-side">
          <span className="sel sel-side" aria-hidden="true"><span className="badge">Stack · auto</span><i /><i /><i /><i /></span>
          <p className="side-intro"><Sparkle size={14} /> Every system,<br />a different story.</p>
          <ul>
            {stats.map(s => <li key={s.label}><strong className="display"><CountUp value={s.value} suffix={s.suffix} /></strong><span>{s.label}</span></li>)}
            <li><strong className="display">AU<em>·</em>UK</strong><span>Systems running in production</span></li>
          </ul>
        </aside>
      </div>

      {/* Design-tool intro layer */}
      <div className="studio" aria-hidden="true">
        <div className="ruler ruler-x" />
        <div className="ruler ruler-y" />
        <i className="guide guide-v" />
        <i className="guide guide-h" />
        <span className="frame-label">Desktop · 1440</span>
        <span className="cross c1">+</span><span className="cross c2">+</span><span className="cross c3">+</span><span className="cross c4">+</span>
        <svg className="drag-cursor" width="22" height="22" viewBox="0 0 18 18"><path d="M2 1.5 16 7.4 9.6 9.4 7.2 16 2 1.5Z" fill="#4f7bff" stroke="#fff" strokeWidth="1.2" strokeLinejoin="round" /></svg>
      </div>
    </section>
  );
}
