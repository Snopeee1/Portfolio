"use client";

import { useEffect, useRef } from "react";

/* Counts from 0 to `value` when it scrolls into view. Renders the final value on the server. */
export function CountUp({ value, suffix = "", duration = 1600 }: { value: number; suffix?: string; duration?: number }) {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = el.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    node.textContent = `0${suffix}`;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        node.textContent = `${Math.round(value * (1 - Math.pow(1 - t, 4)))}${suffix}`;
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: .4 });
    io.observe(node);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [value, suffix, duration]);

  return <span ref={el}>{value}{suffix}</span>;
}
