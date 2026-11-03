"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Activity, ArrowDown, ArrowUpRight, BarChart3, CheckCircle2, Cloud, Code2, Database, FileCheck2, LayoutDashboard, Plug, ShieldCheck, ShoppingBag, Smartphone, Upload, Users } from "lucide-react";
import { SiShopify, SiWordpress } from "react-icons/si";

/*
  Scroll-scrubbed cinematic hero. The section is many viewports tall and the stage
  is sticky; scroll progress p (0 → 1) drives everything, so it plays forwards and
  backwards with the scrollbar, like scrubbing a film.

  0.00–0.20  Banner: the name splits apart and slides off-screen
  0.10–0.30  A cobalt portal opens from behind the portrait and floods the screen
  0.26–0.52  Inside, UI fragments fly in from depth and lock into an admin dashboard
  0.52–0.66  Camera pushes in; numbers count up
  0.66–0.84  Dashboard steps aside; the mobile app and a Shopify card join it
  0.86–0.97  The portal closes back into a single point
  0.90–1.00  "Selected work" rises into place
*/

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const range = (p: number, s: number, e: number) => clamp((p - s) / (e - s));
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
const easeInOut = (t: number) => (t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const expoInOut = (t: number) => (t === 0 ? 0 : t === 1 ? 1 : t < .5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2);

const scatter: Record<string, [number, number, number, number, number, number]> = {
  sidebar: [-560, 80, -420, 0, 60, -10],
  topbar: [60, -400, -280, -55, 0, 7],
  statA: [-340, -300, 360, 34, -28, -16],
  statB: [80, -460, 460, 44, 12, 10],
  statC: [500, -260, 300, 28, 38, 18],
  chart: [-180, 460, 420, -48, -20, -8],
  log: [600, 320, -220, -32, 44, 12],
  toast: [420, 560, 560, -22, 22, -14],
};

const chapters = [
  { at: .3, label: "01 / Data", text: "ClubWise and DebitSuccess imports, validated row by row." },
  { at: .44, label: "02 / Workflow", text: "Recovery cases, follow-ups and roles in one admin workspace." },
  { at: .56, label: "03 / Production", text: "Running for 39 Anytime Fitness clubs across Australia and the UK." },
  { at: .68, label: "04 / Range", text: "The same hands build the mobile app and the Shopify store." },
];

const chars = (word: string) => word.split("").map((c, i) => <span key={i} className="ch" style={{ ["--i" as string]: i }}>{c}</span>);

export function HeroScene() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = root.current;
    if (!section) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const q = (sel: string) => section.querySelector<HTMLElement>(sel);
    const qa = (sel: string) => Array.from(section.querySelectorAll<HTMLElement>(sel));

    const n1 = q("[data-n1]"), n2 = q("[data-n2]"), n3 = q("[data-n3]");
    const bannerTop = q("[data-btop]"), bannerBottom = q("[data-bbottom]"), roles = q("[data-roles]"), script = q("[data-script]");
    const photo = q("[data-photo]");
    const portal = q("[data-portal]");
    const frame = q("[data-frame]");
    const pieces = qa("[data-piece]");
    const counters = qa("[data-count]");
    const phone = q("[data-phone]"), store = q("[data-store]");
    const grid = q("[data-grid]");
    const chapterEls = qa("[data-chapter]");
    const meter = q("[data-meter]"), meterText = q("[data-meter-text]");
    const outro = q("[data-outro]");
    const cue = q("[data-cue]");

    let raf = 0, visible = true, baseScale = 1, mobile = false, headY = 46;
    const measure = () => {
      mobile = window.innerWidth < 760;
      baseScale = Math.min(1, (window.innerWidth - 28) / 940, (window.innerHeight * .6) / 560);
      const w = photo?.offsetWidth ?? 0;
      headY = w ? clamp((window.innerHeight - w * .78) / window.innerHeight, .2, .85) * 100 : 46;
    };
    const set = (el: HTMLElement | null, t: string, o?: number) => {
      if (!el) return;
      el.style.transform = t;
      if (o !== undefined) el.style.opacity = String(o);
    };

    const render = () => {
      raf = 0;
      if (reduced.matches) { section.dataset.static = "true"; return; }
      section.dataset.static = "false";
      const total = section.offsetHeight - window.innerHeight;
      const p = clamp(-section.getBoundingClientRect().top / Math.max(total, 1));

      // 1. Banner splits apart
      const s = easeInOut(range(p, .02, .2));
      const spread = mobile ? 110 : 60;
      set(n1, `translate3d(${-s * spread}vw, 0, 0)`);
      set(n2, `translate3d(${s * spread}vw, 0, 0)`);
      set(n3, mobile ? `translate3d(0, ${s * 30}vh, 0)` : `translate3d(${s * 60}vw, ${s * 10}vh, 0)`, 1 - s);
      set(bannerTop, `translate3d(0, ${-s * 60}px, 0)`, 1 - s * 1.4);
      set(bannerBottom, `translate3d(0, ${s * 80}px, 0)`, 1 - s * 1.4);
      set(roles, `translate3d(0, ${s * 40}px, 0)`, 1 - s * 1.6);
      set(script, `translate3d(${-s * 20}vw, 0, 0) rotate(${-s * 18}deg)`, (1 - s) * .9);
      if (cue) cue.style.opacity = String(1 - range(p, 0, .04));

      // 2. Portal opens from behind the portrait, closes near the end
      const open = expoInOut(range(p, .1, .3));
      const close = easeInOut(range(p, .86, .97));
      const radius = open * (1 - close) * 150;
      if (portal) {
        portal.style.clipPath = `circle(${radius}vmax at 50% ${headY + (50 - headY) * close}%)`;
        portal.style.visibility = radius <= 0.01 ? "hidden" : "visible";
      }

      // Portrait lifts, then dissolves once the portal has flooded the screen
      const lift = easeOut(range(p, .06, .26));
      const fade = range(p, .24, .34);
      if (photo) {
        photo.style.transform = `translate3d(-50%, 0, 0) scale(${1 + lift * .06 + fade * .08})`;
        photo.style.opacity = String(1 - fade);
        photo.style.filter = `blur(${fade * 12}px)`;
      }

      if (grid) grid.style.transform = `perspective(900px) rotateX(64deg) translate3d(0, ${p * 520}px, 0) scale(${1.7 + p})`;

      // 3. Dashboard assembles
      const stand = easeInOut(range(p, .26, .52));
      const push = easeInOut(range(p, .52, .64));
      const aside = easeInOut(range(p, .66, .82));
      if (frame) {
        const scale = baseScale * (.6 + stand * .4 + push * .14 - aside * .24);
        const x = mobile ? 0 : -aside * 18;
        const y = (1 - stand) * 20 - (mobile ? aside * 17 : 0);
        frame.style.transform = `translate3d(${x}vw, ${y}vh, 0) rotateX(${(1 - stand) * 52 - push * 4 + aside * 4}deg) rotateY(${aside * 14}deg) scale(${scale})`;
        frame.style.opacity = String(clamp(range(p, .24, .32) * 1.4));
      }
      pieces.forEach((el, i) => {
        const sc = scatter[el.dataset.piece ?? ""] ?? [0, 0, 0, 0, 0, 0];
        const t = easeOut(range(p, .26 + i * .024, .46 + i * .016));
        const r = 1 - t;
        el.style.transform = `translate3d(${sc[0] * r}px, ${sc[1] * r}px, ${sc[2] * r}px) rotateX(${sc[3] * r}deg) rotateY(${sc[4] * r}deg) rotateZ(${sc[5] * r}deg)`;
        el.style.opacity = String(clamp(t * 1.6));
      });
      const c = easeOut(range(p, .46, .64));
      counters.forEach(el => { el.textContent = Math.round(Number(el.dataset.count) * c).toLocaleString("en-US") + (el.dataset.suffix ?? ""); });
      section.style.setProperty("--fm", String(easeOut(range(p, .4, .52))));
      section.style.setProperty("--bars", String(easeOut(range(p, .44, .62))));

      // 4. Range: phone and storefront join
      const join = easeOut(range(p, .66, .82));
      const shop = easeOut(range(p, .7, .84));
      if (phone) {
        phone.style.opacity = String(join);
        phone.style.transform = mobile
          ? `translate3d(${(1 - join) * 60 + 14}vw, ${(1 - join) * 30 + 6}vh, 0) rotate(${(1 - join) * 18 + 6}deg) scale(.58)`
          : `translate3d(${(1 - join) * 40 + 22}vw, ${(1 - join) * 20 - 2}vh, 0) rotate(${(1 - join) * 20 + 5}deg) scale(.9)`;
      }
      if (store) {
        store.style.opacity = String(shop);
        store.style.transform = mobile
          ? `translate3d(${(1 - shop) * -50 - 16}vw, ${(1 - shop) * 40 + 9}vh, 0) rotate(${(1 - shop) * -14 - 5}deg) scale(.62)`
          : `translate3d(${(1 - shop) * 10 + 8}vw, ${(1 - shop) * 50 + 15}vh, 0) rotate(${(1 - shop) * -16 - 4}deg) scale(.95)`;
      }

      let active = -1;
      chapters.forEach((ch, i) => { if (p >= ch.at) active = i; });
      if (p > .85) active = -1;
      chapterEls.forEach((el, i) => { el.dataset.active = String(i === active); });
      if (meter) meter.style.transform = `scaleY(${p})`;
      if (meterText) meterText.textContent = String(Math.round(p * 100)).padStart(3, "0");

      // 5. Outro rises on the light stage
      const o = easeOut(range(p, .9, 1));
      set(outro, `translate3d(0, ${(1 - o) * 80}px, 0)`, o);
    };

    const request = () => { if (!raf && visible) raf = requestAnimationFrame(render); };
    const io = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; if (visible) request(); });
    io.observe(section);
    const onResize = () => { measure(); request(); };
    measure();
    render();
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", onResize);
    reduced.addEventListener("change", request);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", onResize);
      reduced.removeEventListener("change", request);
    };
  }, []);

  return (
    <section ref={root} className="hero" aria-labelledby="hero-title" data-static="false">
      <div className="hero-stage">
        {/* ---------- Banner (light) ---------- */}
        <div className="banner" aria-hidden="false">
          <div className="banner-script" data-script aria-hidden="true">J</div>
          <div className="banner-top container" data-btop>
            <span>Build <i /> Solve <i /> Impact <b /></span>
            <span className="banner-avail"><span className="pulse-dot" /> Available for remote work</span>
            <span>Web <i /> Ecommerce <i /> Systems <i /> Data</span>
          </div>

          <h1 id="hero-title" className="banner-name">
            <span className="sr-only">Junry Jumawan Gallego — Full-Stack Software Developer, Shopify &amp; Business Systems Developer</span>
            <span className="nm nm-1" data-n1 aria-hidden="true">{chars("JUNRY")}</span>
            <span className="nm nm-2" data-n2 aria-hidden="true">{chars("JUMAWAN")}</span>
            <span className="nm nm-3" data-n3 aria-hidden="true">{chars("GALLEGO")}</span>
          </h1>

          <div className="banner-roles container" data-roles aria-hidden="true">
            <span>Full-stack software developer</span>
            <span>Shopify &amp; business systems developer</span>
          </div>

          <div className="banner-bottom container" data-bbottom>
            <ul>
              <li><Code2 size={18} /> Frameworks</li>
              <li><SiShopify size={16} /> Shopify</li>
              <li><SiWordpress size={16} /> WordPress</li>
            </ul>
            <div className="banner-ctas">
              <Link className="btn btn-cobalt" href="#selected-work">See the work <ArrowUpRight size={17} /></Link>
              <Link className="btn btn-line" href="#contact">Start a project</Link>
            </div>
            <ul>
              <li><Plug size={18} /> APIs &amp; Integrations</li>
              <li><BarChart3 size={18} /> Data &amp; Analytics</li>
              <li><Cloud size={18} /> Cloud &amp; DevOps</li>
            </ul>
          </div>
        </div>

        <div className="hero-photo" data-photo>
          <Image src="/profile/junry-gallego-crossed-arms.png" alt="Junry Jumawan Gallego" width={500} height={500} preload sizes="(max-width: 760px) 90vw, 560px" />
        </div>

        <div className="scene-cue" data-cue aria-hidden="true"><span>Scroll</span><ArrowDown size={14} /></div>

        {/* ---------- Portal (cobalt) ---------- */}
        <div className="portal" data-portal aria-hidden="true">
          <div className="portal-grid" data-grid />
          <div className="portal-glow" />

          <div className="frame" data-frame>
            <div className="frame-chrome" data-piece="topbar"><i /><i /><i /><span>revive · admin workspace</span><b>DEMO DATA</b></div>
            <div className="frame-body">
              <aside className="frame-side" data-piece="sidebar">
                <strong><Activity size={16} /> revive</strong>
                <span className="on"><LayoutDashboard size={13} /> Overview</span>
                <span><Users size={13} /> Members</span>
                <span><Activity size={13} /> Recovery</span>
                <span><FileCheck2 size={13} /> Reports</span>
                <span><Upload size={13} /> Imports</span>
                <small><ShieldCheck size={13} /> Role: admin</small>
              </aside>
              <div className="frame-main">
                <div className="stat" data-piece="statA"><span>Rows validated</span><strong data-count="12480">0</strong><small>ClubWise + DebitSuccess</small></div>
                <div className="stat" data-piece="statB"><span>Open cases</span><strong data-count="342">0</strong><small>Day 75+ tracked</small></div>
                <div className="stat accent" data-piece="statC"><span>Follow-ups done</span><strong data-count="96" data-suffix="%">0</strong><small>This cycle</small></div>
                <div className="chart" data-piece="chart">
                  <div className="chart-head"><strong>Recovery activity</strong><span>12 weeks</span></div>
                  <div className="bars">{[34, 48, 41, 60, 55, 72, 66, 84, 77, 92, 88, 100].map((v, i) => <i key={i} style={{ ["--h" as string]: v / 100 }} />)}</div>
                </div>
                <div className="log" data-piece="log">
                  <div className="log-head"><Database size={13} /> import.log</div>
                  <code><b>✓</b> parse  debitsuccess_oct.csv</code>
                  <code><b>✓</b> match  members → accounts</code>
                  <code><b>✓</b> dedupe 214 records</code>
                  <code className="warn"><b>!</b> flag   18 mismatched</code>
                  <code><b>✓</b> commit → postgres</code>
                </div>
                <div className="toast" data-piece="toast"><CheckCircle2 size={16} /> Import committed · audit logged</div>
              </div>
            </div>
          </div>

          <div className="phone3d" data-phone>
            <div className="phone-notch" />
            <div className="phone-screen">
              <span className="phone-tag"><Smartphone size={11} /> React Native</span>
              <strong>Good afternoon</strong>
              <div className="phone-card"><span>Next appointment</span><b>Thu · 2:30 PM</b></div>
              <div className="phone-card soft"><span>Reports filed</span><b>3 this week</b></div>
              <div className="phone-row"><i /><i /><i /></div>
            </div>
          </div>
          <div className="store3d" data-store>
            <div className="store-img"><ShoppingBag size={28} /></div>
            <div className="store-info"><span>Shopify · Liquid</span><strong>Custom product section</strong><div><b>₱1,850</b><i>Add to cart</i></div></div>
          </div>

          <ol className="chapters">{chapters.map(ch => <li key={ch.label} data-chapter data-active="false"><span>{ch.label}</span><p>{ch.text}</p></li>)}</ol>
          <div className="scene-meter"><div className="meter-track"><i data-meter /></div><span data-meter-text>000</span></div>
        </div>

        <div className="hero-outro" data-outro aria-hidden="true">
          <span>Selected</span><span>work</span>
          <ArrowDown size={30} />
        </div>
      </div>
    </section>
  );
}
