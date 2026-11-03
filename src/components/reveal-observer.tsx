"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/* Adds data-in="true" to every [data-reveal] element once it scrolls into view.
   Elements are fully visible without JS; the hidden start state only applies
   after this component marks the document as ready. */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-in='true'])"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      els.forEach(el => { el.dataset.in = "true"; });
      return;
    }
    document.documentElement.dataset.reveal = "ready";
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        (entry.target as HTMLElement).dataset.in = "true";
        io.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.12 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
