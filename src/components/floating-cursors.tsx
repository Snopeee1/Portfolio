"use client";

import { useEffect, useRef } from "react";

/* Decorative cursors that drift slowly around the viewport, as if other people
   were browsing the page at the same time. Purely visual: hidden from assistive
   tech, ignores pointer events, and switched off for reduced-motion users. */

const COLORS = ["#4f7bff", "#7ef0c8", "#ffd166", "#b69cff", "#ff8fb1"];

export function FloatingCursors() {
  const layer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = layer.current;
    if (!host) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    const els = Array.from(host.children) as HTMLElement[];
    const count = () => (window.innerWidth < 760 ? 3 : els.length);
    const rand = (a: number, b: number) => a + Math.random() * (b - a);
    const state = els.map(() => ({ x: rand(.1, .9), y: rand(.15, .9), tx: rand(.1, .9), ty: rand(.15, .9), speed: rand(.0016, .0034), wait: 0 }));

    let raf = 0;
    let hidden = false;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (hidden) return;
      const n = count();
      const w = window.innerWidth, h = window.innerHeight;
      state.forEach((c, i) => {
        const el = els[i];
        if (i >= n) { el.style.opacity = "0"; return; }
        if (c.wait > 0) { c.wait -= 1; }
        else {
          const dx = c.tx - c.x, dy = c.ty - c.y;
          if (Math.hypot(dx, dy) < .01) {
            c.tx = rand(.06, .94); c.ty = rand(.14, .92); c.wait = Math.round(rand(20, 140));
          } else {
            c.x += dx * c.speed * 6; c.y += dy * c.speed * 6;
          }
        }
        el.style.opacity = "1";
        el.style.transform = `translate3d(${(c.x * w).toFixed(1)}px, ${(c.y * h).toFixed(1)}px, 0)`;
      });
    };
    const onVis = () => { hidden = document.hidden; };
    document.addEventListener("visibilitychange", onVis);
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); document.removeEventListener("visibilitychange", onVis); };
  }, []);

  return (
    <div ref={layer} className="cursor-layer" aria-hidden="true">
      {COLORS.map(color => (
        <svg key={color} className="ghost-cursor" width="18" height="18" viewBox="0 0 18 18" style={{ color }}>
          <path d="M2 1.5 16 7.4 9.6 9.4 7.2 16 2 1.5Z" fill="currentColor" stroke="#06080f" strokeWidth="1.2" strokeLinejoin="round" />
        </svg>
      ))}
    </div>
  );
}
