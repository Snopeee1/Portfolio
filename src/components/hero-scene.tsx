"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Activity, ArrowDown, ArrowUpRight, CheckCircle2, Database, FileCheck2, LayoutDashboard, ShieldCheck, ShoppingBag, Smartphone, Upload, Users } from "lucide-react";

/*
  Cinematic, scroll-scrubbed hero. The section is several viewports tall and the
  stage is sticky; scroll progress (0 → 1) drives every transform below, so the
  scene plays forwards and backwards with the scrollbar — like a video being scrubbed,
  but built from real UI instead of footage.

  Timeline
  0.00–0.22  headline holds, then lifts away
  0.10–0.52  UI fragments fly in from depth and snap into an admin dashboard
  0.50–0.70  camera pushes in, numbers count up, chapter captions change
  0.68–0.88  dashboard slides aside; mobile app + Shopify card join it
  0.88–1.00  everything pushes past the camera into the page
*/

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const range = (p: number, start: number, end: number) => clamp((p - start) / (end - start));
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
const easeInOut = (t: number) => (t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

// Where each dashboard fragment starts before it assembles: x, y (px), z (px), rotateX, rotateY, rotateZ (deg)
const scatter: Record<string, [number, number, number, number, number, number]> = {
  sidebar: [-520, 60, -380, 0, 55, -8],
  topbar: [40, -360, -260, -50, 0, 6],
  statA: [-300, -260, 320, 30, -25, -14],
  statB: [60, -420, 420, 40, 10, 9],
  statC: [460, -240, 260, 25, 35, 16],
  chart: [-160, 420, 380, -45, -18, -7],
  log: [560, 300, -200, -30, 40, 11],
  toast: [380, 520, 520, -20, 20, -12],
};

const chapters = [
  { at: 0.12, label: "01 — Data", text: "ClubWise and DebitSuccess imports, validated row by row." },
  { at: 0.34, label: "02 — Workflow", text: "Recovery cases, follow-ups and roles in one admin workspace." },
  { at: 0.54, label: "03 — Production", text: "Deployed on AWS for gym groups in Australia and the UK." },
  { at: 0.7, label: "04 — Range", text: "The same hands build the mobile app and the Shopify store." },
];

export function HeroScene() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = root.current;
    if (!section) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const q = <T extends HTMLElement>(sel: string) => section.querySelector<T>(sel);
    const qa = <T extends HTMLElement>(sel: string) => Array.from(section.querySelectorAll<T>(sel));

    const headline = q("[data-headline]");
    const frame = q("[data-frame]");
    const frameWrap = q("[data-frame-wrap]");
    const pieces = qa("[data-piece]");
    const counters = qa("[data-count]");
    const phone = q("[data-phone]");
    const store = q("[data-store]");
    const grid = q("[data-grid]");
    const glow = q("[data-glow]");
    const chapterEls = qa("[data-chapter]");
    const meter = q("[data-meter]");
    const meterText = q("[data-meter-text]");
    const outro = q("[data-outro]");
    const cue = q("[data-cue]");

    let raf = 0;
    let visible = true;
    let baseScale = 1;

    const measure = () => {
      // The dashboard is designed at 940px wide; fit it to the viewport.
      baseScale = Math.min(1, (window.innerWidth - 28) / 940, (window.innerHeight * .62) / 560);
    };

    const render = () => {
      raf = 0;
      if (reduced.matches) { section.dataset.static = "true"; return; }
      section.dataset.static = "false";
      const rect = section.getBoundingClientRect();
      const total = section.offsetHeight - window.innerHeight;
      const p = clamp(-rect.top / Math.max(total, 1));

      // Headline lifts, blurs and fades
      const h = easeInOut(range(p, .04, .2));
      if (headline) {
        headline.style.transform = `translate3d(0, ${-h * 120}px, 0) scale(${1 - h * .06})`;
        headline.style.opacity = String(1 - h);
        headline.style.filter = `blur(${h * 8}px)`;
        headline.style.pointerEvents = h > .5 ? "none" : "auto";
      }
      if (cue) cue.style.opacity = String(1 - range(p, 0, .05));

      // Background grid recedes for depth
      if (grid) grid.style.transform = `perspective(900px) rotateX(62deg) translate3d(0, ${p * 420}px, 0) scale(${1.6 + p})`;
      if (glow) glow.style.opacity = String(.35 + easeOut(range(p, .1, .5)) * .65 - range(p, .9, 1) * .8);

      // Frame: lies back in space, stands up while pieces assemble, then pushes in
      const stand = easeInOut(range(p, .12, .5));
      const push = easeInOut(range(p, .5, .68));
      const aside = easeInOut(range(p, .7, .86));
      const exit = easeInOut(range(p, .9, 1));
      if (frameWrap) frameWrap.style.opacity = String(clamp(range(p, .08, .2) * 1.2) * clamp(1 - exit * 1.6));
      if (frameWrap) frameWrap.style.filter = `blur(${exit * 10}px)`;
      if (frame) {
        const scale = baseScale * (.62 + stand * .38 + push * .16 - aside * .26 + exit * 1.2);
        const x = -aside * (window.innerWidth < 760 ? 0 : 19);
        const y = (1 - stand) * 18 - (window.innerWidth < 760 ? aside * 17 : 0);
        frame.style.transform = `translate3d(${x}vw, ${y}vh, 0) rotateX(${(1 - stand) * 48 - push * 4 + aside * 4}deg) rotateY(${aside * 14}deg) scale(${scale})`;
      }

      // Pieces fly in from their scatter positions with a stagger
      pieces.forEach((el, i) => {
        const s = scatter[el.dataset.piece ?? ""] ?? [0, 0, 0, 0, 0, 0];
        const t = easeOut(range(p, .12 + i * .028, .4 + i * .02));
        const r = 1 - t;
        el.style.transform = `translate3d(${s[0] * r}px, ${s[1] * r}px, ${s[2] * r}px) rotateX(${s[3] * r}deg) rotateY(${s[4] * r}deg) rotateZ(${s[5] * r}deg)`;
        el.style.opacity = String(clamp(t * 1.6));
      });

      // Count-up numbers while the camera pushes in
      const c = easeOut(range(p, .4, .66));
      counters.forEach(el => {
        const target = Number(el.dataset.count);
        el.textContent = Math.round(target * c).toLocaleString("en-US") + (el.dataset.suffix ?? "");
      });
      section.style.setProperty("--bars", String(easeOut(range(p, .36, .62))));

      // Mobile app and storefront join for the "range" beat
      const join = easeOut(range(p, .7, .88));
      const mobile = window.innerWidth < 760;
      if (phone) {
        phone.style.opacity = String(join * (1 - exit));
        phone.style.transform = mobile
          ? `translate3d(${(1 - join) * 60 + 14}vw, ${(1 - join) * 30 + 6}vh, 0) rotate(${(1 - join) * 18 + 6}deg) scale(${.58 + exit})`
          : `translate3d(${(1 - join) * 40 + 22}vw, ${(1 - join) * 20 - 2}vh, 0) rotate(${(1 - join) * 20 + 5}deg) scale(${.9 + exit * 1.4})`;
      }
      if (store) {
        store.style.opacity = String(easeOut(range(p, .74, .9)) * (1 - exit));
        const s = easeOut(range(p, .74, .9));
        store.style.transform = mobile
          ? `translate3d(${(1 - s) * -50 - 16}vw, ${(1 - s) * 40 + 9}vh, 0) rotate(${(1 - s) * -14 - 5}deg) scale(${.62 + exit})`
          : `translate3d(${(1 - s) * 10 + 8}vw, ${(1 - s) * 50 + 15}vh, 0) rotate(${(1 - s) * -16 - 4}deg) scale(${.95 + exit * 1.4})`;
      }

      // Chapter captions
      let active = -1;
      chapters.forEach((ch, i) => { if (p >= ch.at) active = i; });
      if (p > .9) active = -1;
      chapterEls.forEach((el, i) => { el.dataset.active = String(i === active); });

      if (meter) meter.style.transform = `scaleY(${p})`;
      if (meterText) meterText.textContent = String(Math.round(p * 100)).padStart(3, "0");
      if (outro) {
        const o = range(p, .93, 1);
        outro.style.opacity = String(easeOut(o));
        outro.style.transform = `translate3d(0, ${(1 - easeOut(o)) * 40}px, 0)`;
      }
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
    <section ref={root} className="scene" aria-labelledby="hero-title" data-static="false">
      <div className="scene-stage">
        <div className="scene-grid" data-grid aria-hidden="true" />
        <div className="scene-glow" data-glow aria-hidden="true" />
        <div className="scene-noise" aria-hidden="true" />

        <div className="scene-headline" data-headline>
          <p className="scene-kicker"><span className="pulse-dot" /> Available for remote work · Iligan City, PH</p>
          <h1 id="hero-title">
            <span className="line"><span>I build the <em>systems</em></span></span>
            <span className="line"><span>behind growing</span></span>
            <span className="line"><span>businesses.</span></span>
          </h1>
          <p className="scene-sub">Junry Gallego — full-stack developer. Admin platforms, APIs and mobile apps, plus the Shopify stores in front of them.</p>
          <div className="scene-actions">
            <Link className="btn btn-primary" href="#selected-work">See the work <ArrowUpRight size={18} /></Link>
            <Link className="btn btn-ghost" href="#contact">Start a project</Link>
          </div>
        </div>

        <div className="scene-cue" data-cue aria-hidden="true"><span>Scroll to build</span><ArrowDown size={14} /></div>

        <div className="frame-wrap" data-frame-wrap aria-hidden="true">
          <div className="frame" data-frame>
            <div className="frame-chrome" data-piece="topbar">
              <i /><i /><i />
              <span>revive · admin workspace</span>
              <b>DEMO DATA</b>
            </div>
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
                  <div className="bars">{[34, 48, 41, 60, 55, 72, 66, 84, 77, 92, 88, 100].map((v, i) => <i key={i} style={{ ["--h" as string]: v / 100, ["--i" as string]: i }} />)}</div>
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
            <div className="store-info">
              <span>Shopify · Liquid</span>
              <strong>Custom product section</strong>
              <div><b>₱1,850</b><i>Add to cart</i></div>
            </div>
          </div>
        </div>

        <ol className="chapters" aria-hidden="true">
          {chapters.map(ch => <li key={ch.label} data-chapter data-active="false"><span>{ch.label}</span><p>{ch.text}</p></li>)}
        </ol>

        <div className="scene-meter" aria-hidden="true"><div className="meter-track"><i data-meter /></div><span data-meter-text>000</span></div>

        <div className="scene-outro" data-outro aria-hidden="true">
          <span>Selected work</span>
          <ArrowDown size={18} />
        </div>
      </div>
    </section>
  );
}
