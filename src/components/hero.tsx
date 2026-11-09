import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, MapPin, Sparkle } from "lucide-react";
import { CountUp } from "./count-up";

const stats = [
  { value: 20, suffix: "+", label: "Projects delivered & contributed to" },
  { value: 10, suffix: "+", label: "Shopify stores & storefronts" },
  { value: 39, suffix: "", label: "Anytime Fitness clubs supported" },
];

/* The opening frame. Each [data-intro] element is built live by the cursors in
   StudioDirector (block drawn, text typed, photo filled, panels painted), in
   the order of its data-intro number. The rulers and guides fade once done. */
export function Hero() {
  return (
    <section className="opening" aria-labelledby="op-title">
      <div className="op-bg" aria-hidden="true"><i className="glow glow-a" /><i className="glow glow-b" /><i className="grain" /></div>

      <div className="container op-grid">
        <div className="op-copy">
          <div className="op-panel" data-intro="8" data-mode="paint" aria-hidden="true" />
          <p className="op-hello serif" data-intro="1" data-mode="text">Hello, I&apos;m</p>
          <h1 id="op-title" className="op-name display" data-intro="2" data-label="Heading · H1">
            <span className="hn-line"><span>Junry</span></span>
            <span className="hn-line"><span>Jumawan</span></span>
            <span className="hn-line"><span>Gallego<b>.</b></span></span>
          </h1>
          <p className="op-role" data-intro="4" data-mode="text">Full-stack software developer <span>&amp;</span> Shopify / business systems developer</p>
          <p className="op-lede" data-intro="5" data-mode="text">I build admin platforms, data imports, APIs and mobile apps, plus the Shopify stores in front of them. Running in production for gym groups in Australia and the UK.</p>
          <div className="op-ctas" data-intro="6" data-label="Buttons">
            <Link href="/#work" className="btn btn-glow" data-intro="6.5" data-label="Button">See my work <ArrowDown size={16} /></Link>
            <Link href="#contact" className="btn btn-ghost" data-intro="6.5" data-label="Button">Let&apos;s talk <ArrowUpRight size={16} /></Link>
          </div>
        </div>

        <div className="op-portrait" data-intro="3" data-label="Image · portrait.png">
          <span className="portrait-ring" aria-hidden="true" />
          <Image src="/profile/junry-gallego-crossed-arms.png" alt="Junry Jumawan Gallego" width={500} height={500} preload sizes="(max-width: 900px) 80vw, 34vw" />
          <span className="portrait-tag" data-intro="3.5" data-label="Tag"><MapPin size={12} /> Iligan City, PH · Remote</span>
        </div>

        <aside className="op-side" data-intro="7" data-label="Stack · auto">
          <div className="op-panel" data-intro="9" data-mode="paint" aria-hidden="true" />
          <p className="side-intro" data-intro="7.2" data-mode="text"><Sparkle size={14} /> Every system,<br />a different story.</p>
          <ul>
            {stats.map(s => <li key={s.label} data-intro="7.5" data-label="Stat"><strong className="display"><CountUp value={s.value} suffix={s.suffix} /></strong><span>{s.label}</span></li>)}
            <li data-intro="7.5" data-label="Stat"><strong className="display">AU<em>·</em>UK</strong><span>Systems running in production</span></li>
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
      </div>
    </section>
  );
}
