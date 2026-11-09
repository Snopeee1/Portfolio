"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/* "Studio" layer: a small team of design-tool cursors that build the page in
   front of the visitor, like a Figma file being made live.

   - Hero ([data-intro]): on load a cluster of cursors spreads out, drags out a
     grey wireframe block for each element (handles + live "W × H" badge), types
     the text with an I-beam, fills the photo and paints the background panels.
   - Sections ([data-build]): as they scroll into view a free cursor draws the
     block and the content fills it.
   - Idle: cursors keep wandering and selecting things on screen.

   Decorative only: aria-hidden, no pointer events, off for reduced motion.
   Content is hidden only while JS is in charge (html[data-sd="ready"]) and the
   hero has a CSS failsafe, so nothing stays invisible if this never runs. */

type Mode = "block" | "text" | "paint";
type Cursor = { el: HTMLDivElement; x: number; y: number; busy: boolean; idle: boolean; job: number; beam: boolean };

const TEAM = [
  { color: "#4f7bff", name: "Junry" },
  { color: "#7ef0c8", name: "Dev" },
  { color: "#ffd166", name: "Shopify" },
  { color: "#b69cff", name: "UI" },
  { color: "#ff8fb1", name: "Data" },
  { color: "#6fd3ff", name: "API" },
  { color: "#ff9f5a", name: "Motion" },
  { color: "#9ef06b", name: "QA" },
  { color: "#f6e27a", name: "Copy" },
  { color: "#ff6b8b", name: "Brand" },
];

/* Everything below the hero that a cursor builds, in document order. Parents
   are built first; their children wait until the parent block is filled.
   [selector, mode, label, keepOwnAnimation?] */
const AUTO: [string, Mode, string?, boolean?][] = [
  [".home .ticker", "block", "Strip · Ticker"],
  [".marquee-heading .eyebrow", "text"],
  [".marquee-heading > div", "block", "Actions"],
  [".marquee-window", "block", "Marquee · Projects"],
  [".home .tag", "text"],
  [".sec-note", "text"],
  [".chips", "block", "Tabs · Filter"],
  [".chips-all", "block", "Link"],
  [".wg-item .project-title-link", "text"],
  [".wg-item .project-subtitle", "text"],
  [".wg-item .project-tags", "block", "Tags"],
  [".svc-card .sv", "block", "Frame · Visual"],
  [".svc-copy > *", "text"],
  [".flow-top", "block", "Bar"],
  [".flow-node", "block", "Node"],
  [".flow-base", "text"],
  [".flow-steps > li", "block", "Row"],
  [".spot-lede", "text"],
  [".spot-features > li", "block", "Feature"],
  [".spot-copy .btn", "block", "Button"],
  [".mock-chrome", "block", "Bar"],
  [".m-stat", "block", "Stat"],
  [".m-chart", "block", "Chart"],
  [".m-log", "block", "Log"],
  [".mock-toast", "block", "Toast", true],
  [".col-label", "text"],
  [".roles > li", "block", "Role"],
  [".mini-logos", "block", "Logos"],
  [".idea-steps > li", "block", "Step"],
  [".quote-card > *", "block"],
  [".timeline > li", "block", "Item"],
  [".wins-title", "text"],
  [".wins > li", "block", "Item"],
  [".logo-rows > .logo-row", "block", "Marquee · Logos"],
  [".tool-grid > article header", "block", "Header"],
  [".tool-grid > article ul", "block", "Logos"],
  [".home .strip", "block", "Strip"],
  [".faq-items > details", "block", "Accordion"],
  [".contact-rows > li", "block", "Row"],
  [".contact-socials", "block", "Links"],
  [".contact-form-title", "text"],
  [".contact-form .form-row", "block", "Field"],
  [".contact-submit", "block", "Button"],
  [".footer-top > *", "block"],
  [".footer-giant .display", "text"],
  [".footer-bottom", "block", "Bar"],
];

const IDLE_TARGETS = [
  ".sec-head h2", ".btn", ".chip", ".svc-card", ".flow-node", ".m-stat", ".tool-grid > article",
  ".wins li", ".timeline li", ".faq-items details", ".contact-rows a", ".project-card", ".op-side li",
  ".about-col", ".quote-card", ".spot-copy h2", ".op-name",
].join(",");

const ARROW = '<svg width="20" height="20" viewBox="0 0 18 18"><path d="M2 1.5 16 7.4 9.6 9.4 7.2 16 2 1.5Z" fill="currentColor" stroke="#fff" stroke-width="1.3" stroke-linejoin="round"/></svg>';
const BEAM = '<svg width="14" height="22" viewBox="0 0 14 22"><path d="M3 1.5h3l1 1 1-1h3M3 20.5h3l1-1 1 1h3M7 2.5v17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';

const easeInOut = (t: number) => (t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
const rand = (a: number, b: number) => a + Math.random() * (b - a);
const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));

export function StudioDirector() {
  const layerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const layer = layerRef.current;
    const root = document.documentElement;
    if (!layer) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealAll = () => {
      document.querySelectorAll<HTMLElement>("[data-intro]:not([data-built]), [data-build]:not([data-built])").forEach(el => { el.dataset.built = "true"; });
      document.querySelector<HTMLElement>(".opening")?.setAttribute("data-phase", "done");
    };
    if (reduced) { revealAll(); return; }

    let alive = true;
    const timers: number[] = [];
    const later = (ms: number) => new Promise<void>(res => { timers.push(window.setTimeout(res, ms)); });
    const tween = (dur: number, fn: (p: number) => void, ease = easeInOut, cancel?: () => boolean) => new Promise<void>(res => {
      const t0 = performance.now();
      const step = (now: number) => {
        if (!alive || cancel?.()) return res();
        const p = Math.min(1, (now - t0) / dur);
        fn(ease(p));
        if (p < 1) requestAnimationFrame(step); else res();
      };
      requestAnimationFrame(step);
    });

    const mobile = window.innerWidth < 760;
    /* an element waits while any ancestor is still unbuilt */
    const blocked = (el: HTMLElement) => !!el.parentElement?.closest("[data-build]:not([data-built]), [data-intro]:not([data-built])");
    const autoTag = () => {
      for (const [sel, mode, label, keep] of AUTO) {
        document.querySelectorAll<HTMLElement>(sel).forEach(el => {
          if (el.hasAttribute("data-build") || el.hasAttribute("data-built") || el.closest(".opening")) return;
          el.dataset.build = "";
          el.dataset.mode = mode;
          if (label && !el.dataset.label) el.dataset.label = label;
          if (keep) el.dataset.keep = "";
        });
      }
    };
    const vw = () => document.documentElement.clientWidth;
    const view = () => ({ top: window.scrollY, bottom: window.scrollY + window.innerHeight, w: vw() });
    const pageRect = (el: Element) => {
      const r = el.getBoundingClientRect();
      return { x: r.left + window.scrollX, y: r.top + window.scrollY, w: r.width, h: r.height };
    };

    /* ---------- cursors ---------- */
    layer.innerHTML = "";
    const cursors: Cursor[] = TEAM.slice(0, mobile ? 5 : TEAM.length).map(t => {
      const el = document.createElement("div");
      el.className = "sd-cursor";
      el.style.color = t.color;
      el.innerHTML = `<span class="sd-icon">${ARROW}</span><span class="sd-tag" style="background:${t.color}">${t.name}</span>`;
      layer.appendChild(el);
      return { el, x: 0, y: 0, busy: false, idle: false, job: 0, beam: false };
    });
    const place = (c: Cursor, x: number, y: number) => {
      c.x = x; c.y = y;
      c.el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
    };
    const setBeam = (c: Cursor, on: boolean) => {
      if (c.beam === on) return;
      c.beam = on;
      c.el.dataset.beam = String(on);
      (c.el.firstElementChild as HTMLElement).innerHTML = on ? BEAM : ARROW;
    };
    const show = (c: Cursor, on = true) => { c.el.style.opacity = on ? "1" : "0"; };
    /* every task "claims" a cursor; an idle task (wander/select) can be taken
       over by a build, and stops as soon as its job number is stale */
    const claim = (c: Cursor, idle: boolean) => { c.job += 1; c.busy = true; c.idle = idle; return c.job; };
    const release = (c: Cursor, job: number) => { if (c.job === job) { c.busy = false; c.idle = false; } };
    const move = (c: Cursor, x: number, y: number, dur?: number) => {
      x = clamp(x, 4, vw() - 60);
      const sx = c.x, sy = c.y, job = c.job;
      const d = dur ?? clamp(Math.hypot(x - sx, y - sy) * .6, 200, 600);
      return tween(d, p => place(c, sx + (x - sx) * p, sy + (y - sy) * p), easeInOut, () => c.job !== job);
    };
    /* bring a cursor that scrolled out of view back in from the nearest edge */
    const onScreen = (c: Cursor) => {
      const v = view();
      if (c.y > v.top - 20 && c.y < v.bottom + 20) return;
      const fromTop = c.y < v.top;
      place(c, rand(40, v.w - 80), fromTop ? v.top - 10 : v.bottom + 10);
    };

    /* ---------- wireframe block ---------- */
    const makeBlock = (x: number, y: number, label?: string) => {
      const b = document.createElement("div");
      b.className = "sd-block";
      b.innerHTML = `<i></i><i></i><i></i><i></i><span class="sd-badge"></span>${label ? `<span class="sd-name">${label}</span>` : ""}`;
      b.style.left = `${x}px`; b.style.top = `${y}px`; b.style.width = "0px"; b.style.height = "0px";
      layer.appendChild(b);
      return b;
    };
    const fadeBlock = async (b: HTMLDivElement, hold = 260) => {
      b.dataset.state = "filled";
      await later(hold);
      b.dataset.state = "out";
      await later(500);
      b.remove();
    };
    const drag = async (c: Cursor, r: { x: number; y: number; w: number; h: number }, fast: boolean, label?: string) => {
      const b = makeBlock(r.x, r.y, label);
      const badge = b.querySelector<HTMLElement>(".sd-badge")!;
      const dur = clamp((r.w + r.h) * (fast ? .4 : .8), fast ? 220 : 420, fast ? 480 : 950);
      await tween(dur, p => {
        const w = r.w * p, h = r.h * p;
        b.style.width = `${w}px`; b.style.height = `${h}px`;
        badge.textContent = `${Math.round(w)} × ${Math.round(h)}`;
        place(c, clamp(r.x + w, 4, vw() - 60), r.y + h);
      }, easeOut);
      return b;
    };

    /* ---------- build one element ---------- */
    const build = async (el: HTMLElement, c: Cursor, mode: Mode, fast = false) => {
      const job = claim(c, false);
      try {
        onScreen(c);
        show(c);
        const r = pageRect(el);
        if (r.w < 2 || r.h < 2) { el.dataset.built = "true"; return; }

        if (mode === "paint") {
          setBeam(c, false);
          await move(c, r.x + 6, r.y + 6);
          const b = makeBlock(r.x, r.y, "Fill · #2D5FF2");
          b.dataset.state = "paint";
          el.dataset.built = "painting";
          await tween(fast ? 520 : 800, p => {
            el.style.clipPath = `inset(0 ${(1 - p) * 100}% ${(1 - p) * 100}% 0 round 24px)`;
            b.style.width = `${r.w * p}px`; b.style.height = `${r.h * p}px`;
            place(c, clamp(r.x + r.w * p, 4, vw() - 60), r.y + r.h * p);
          }, easeOut);
          el.style.clipPath = "";
          el.dataset.built = "true";
          void fadeBlock(b, 120);
          return;
        }

        setBeam(c, false);
        await move(c, r.x, r.y);
        const label = mode === "text" ? "Text" : el.dataset.label;
        const b = await drag(c, r, fast, label);

        if (mode === "text") {
          /* type it in: I-beam sweeps along while a clip reveals the text */
          b.dataset.state = "outline";
          setBeam(c, true);
          el.dataset.built = "typing";
          const len = (el.textContent || "").length;
          const dur = clamp(len * (fast ? 6 : 15), fast ? 240 : 320, fast ? 600 : 1100);
          const lines = Math.max(1, Math.round(r.h / 30));
          await tween(dur, p => {
            el.style.clipPath = `inset(0 ${(1 - p) * 100}% 0 0)`;
            const line = Math.min(lines - 1, Math.floor(p * lines));
            const lx = ((p * lines) % 1) * r.w;
            place(c, r.x + (lines > 1 ? lx : r.w * p) - 5, r.y + (line + .5) * (r.h / lines) - 11);
          }, t => t);
          el.style.clipPath = "";
          el.dataset.built = "typed";
          void fadeBlock(b, 200);
          setBeam(c, false);
        } else {
          el.dataset.built = "true";
          void fadeBlock(b, 380);
        }
      } finally {
        release(c, job);
      }
    };

    const freeCursor = (steal = false) => cursors.find(c => !c.busy) ?? (steal ? cursors.find(c => c.idle) : undefined);
    const waitCursor = async (ms: number) => {
      const t0 = performance.now();
      while (alive && performance.now() - t0 < ms) {
        const c = freeCursor(true);
        if (c) { claim(c, false); return c; }
        await later(50);
      }
      const c = freeCursor(true);
      if (c) claim(c, false);
      return c;
    };

    /* ---------- hero intro ---------- */
    const hero = document.querySelector<HTMLElement>(".opening");
    autoTag();
    const introTargets = Array.from(document.querySelectorAll<HTMLElement>("[data-intro]:not([data-built])"))
      .sort((a, b) => Number(a.dataset.intro) - Number(b.dataset.intro));

    const runIntro = async () => {
      const v = view();
      const cx = v.w * .5, cy = v.top + window.innerHeight * .46;
      /* the cluster, like the opening frame of the reel */
      cursors.forEach((c, i) => {
        place(c, cx + Math.cos(i * 1.05) * 26 + rand(-6, 6), cy + Math.sin(i * 1.05) * 20 + rand(-6, 6));
        c.el.style.transitionDelay = `${i * 50}ms`;
        show(c);
      });
      await later(520);
      cursors.forEach(c => { c.el.style.transitionDelay = ""; });

      /* every element gets its own job: it waits for its parent block, then
         for a free cursor, so many things are built at the same time */
      const jobs = introTargets.map((el, n) => (async () => {
        await later(n * (mobile ? 90 : 100));
        for (let w = 0; blocked(el) && w < 3000 && alive; w += 50) await later(50);
        const c = await waitCursor(4000);
        if (!c) { el.dataset.built = el.dataset.mode === "text" ? "typed" : "true"; return; }
        await build(el, c, (el.dataset.mode as Mode) || "block", mobile);
      })());
      await Promise.all(jobs);
      hero?.setAttribute("data-phase", "done");
    };

    /* ---------- scroll builds ---------- */
    /* elements inside a scroll-reveal wait until it has slid into place, so the
       block is drawn where the element actually ends up */
    const whenRevealed = async (el: HTMLElement) => {
      const rv = el.closest<HTMLElement>("[data-reveal]");
      if (!rv) return;
      let waited = 0;
      while (alive && rv.dataset.in !== "true" && waited < 1500) { await later(80); waited += 80; }
      await later(240);
    };
    const queue: HTMLElement[] = [];
    const deferred = new Set<HTMLElement>();
    const requeue = () => {
      deferred.forEach(el => {
        if (!el.isConnected || el.dataset.built) { deferred.delete(el); return; }
        if (!blocked(el)) { deferred.delete(el); queue.push(el); }
      });
      void pump();
    };
    let pumping = false;
    const pump = async () => {
      if (pumping) return;
      pumping = true;
      while (alive && queue.length) {
        const el = queue.shift()!;
        if (el.dataset.built || !el.isConnected) continue;
        if (blocked(el)) { deferred.add(el); continue; }
        const c = await waitCursor(900);
        if (!c) { el.dataset.built = el.dataset.mode === "text" ? "typed" : "true"; requeue(); continue; }
        void build(el, c, (el.dataset.mode as Mode) || "block", true).then(requeue);
        await later(70);
      }
      pumping = false;
    };
    const io = new IntersectionObserver(entries => {
      for (const e of entries) {
        const el = e.target as HTMLElement;
        const enough = e.intersectionRatio > .22 || e.intersectionRect.height > window.innerHeight * .3;
        if (!e.isIntersecting || !enough || el.dataset.built) continue;
        io.unobserve(el);
        void whenRevealed(el).then(() => { queue.push(el); void pump(); });
      }
    }, { threshold: [0, .22, .4] });
    const watch = () => { autoTag(); document.querySelectorAll<HTMLElement>("[data-build]:not([data-built])").forEach(el => io.observe(el)); };
    /* new content (e.g. a different work filter) gets built too; the layer's
       own blocks and selection boxes are ignored */
    let pendingWatch = 0;
    const mo = new MutationObserver(list => {
      if (list.every(m => m.target === layer || layer.contains(m.target))) return;
      cancelAnimationFrame(pendingWatch);
      pendingWatch = requestAnimationFrame(watch);
    });
    mo.observe(document.body, { childList: true, subtree: true });

    /* ---------- idle: wander + select ---------- */
    const select = async (c: Cursor) => {
      const v = view();
      const pool = Array.from(document.querySelectorAll<HTMLElement>(IDLE_TARGETS)).filter(el => {
        const r = pageRect(el);
        return r.w > 30 && r.h > 16 && r.y > v.top + 60 && r.y + r.h < v.bottom - 20 && r.x >= 0 && r.x + r.w <= v.w
          && (!el.closest("[data-build]") || (el.closest("[data-build]") as HTMLElement).dataset.built);
      });
      if (!pool.length) return;
      const el = pool[Math.floor(Math.random() * pool.length)];
      const job = claim(c, true);
      let s: HTMLDivElement | null = null;
      try {
        onScreen(c);
        show(c);
        const r = pageRect(el);
        await move(c, r.x + r.w * rand(.3, .8), r.y + r.h * rand(.3, .7));
        if (c.job !== job) return;
        const tag = /^H[1-3]$/.test(el.tagName) ? "Text" : el.matches(".btn,.chip") ? "Button" : "Frame";
        s = document.createElement("div");
        s.className = "sd-select";
        s.style.setProperty("--c", c.el.style.color);
        s.style.left = `${r.x - 4}px`; s.style.top = `${r.y - 4}px`;
        s.style.width = `${r.w + 8}px`; s.style.height = `${r.h + 8}px`;
        s.innerHTML = `<i></i><i></i><i></i><i></i><span class="sd-badge">${tag} · ${Math.round(r.w)} × ${Math.round(r.h)}</span>`;
        layer.appendChild(s);
        const until = performance.now() + rand(1100, 1700);
        while (alive && c.job === job && performance.now() < until) await later(80);
      } finally {
        const box = s;
        if (box) { box.dataset.state = "out"; timers.push(window.setTimeout(() => box.remove(), 420)); }
        release(c, job);
      }
    };
    const wander = async (c: Cursor) => {
      const job = claim(c, true);
      try {
        onScreen(c);
        show(c);
        const v = view();
        await move(c, rand(40, v.w - 80), rand(v.top + 90, v.bottom - 60), rand(900, 1600));
      } finally {
        release(c, job);
      }
    };
    const idleLoop = async () => {
      while (alive) {
        await later(rand(300, 600));
        if (document.hidden) continue;
        const c = freeCursor();
        if (!c) continue;
        const selecting = layer.querySelectorAll(".sd-select:not([data-state])").length;
        if (selecting < (mobile ? 2 : 4) && Math.random() < .6) void select(c); else void wander(c);
      }
    };

    /* ---------- go ---------- */
    root.dataset.sd = "ready";
    watch();
    (async () => {
      if (introTargets.length) await runIntro();
      else {
        const v = view();
        cursors.forEach(c => { place(c, rand(40, v.w - 80), rand(v.top + 120, v.bottom - 80)); show(c); });
      }
      void idleLoop();
    })();

    return () => {
      alive = false;
      timers.forEach(clearTimeout);
      io.disconnect();
      mo.disconnect();
      layer.innerHTML = "";
      /* anything caught mid-build is finished off so it never stays clipped */
      document.querySelectorAll<HTMLElement>('[data-built="typing"], [data-built="painting"]').forEach(el => {
        el.style.clipPath = "";
        el.dataset.built = el.dataset.built === "typing" ? "typed" : "true";
      });
    };
  }, [pathname]);

  return <div ref={layerRef} className="sd-layer" aria-hidden="true" />;
}
