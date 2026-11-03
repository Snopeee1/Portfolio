"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { ProjectCard } from "./project-card";

/* Pinned horizontal gallery: vertical scroll moves the track sideways.
   On phones and with reduced motion it becomes a native swipe row. */
export function WorkRail({ projects }: { projects: Project[] }) {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLSpanElement>(null);
  const count = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = section.current, tr = track.current;
    if (!el || !tr) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let dist = 0, raf = 0, pinned = false;

    const measure = () => {
      pinned = !reduced.matches && window.innerWidth >= 900;
      el.dataset.pinned = String(pinned);
      if (!pinned) { el.style.height = ""; tr.style.transform = ""; return; }
      dist = Math.max(0, tr.scrollWidth - window.innerWidth + 48);
      el.style.height = `${dist + window.innerHeight}px`;
    };
    const render = () => {
      raf = 0;
      if (!pinned) return;
      const p = Math.min(1, Math.max(0, -el.getBoundingClientRect().top / Math.max(dist, 1)));
      tr.style.transform = `translate3d(${-p * dist}px, 0, 0)`;
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
      if (count.current) count.current.textContent = String(Math.min(projects.length, Math.floor(p * projects.length) + 1)).padStart(2, "0");
    };
    const request = () => { if (!raf) raf = requestAnimationFrame(render); };
    const onResize = () => { measure(); request(); };
    measure(); render();
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", onResize);
    reduced.addEventListener("change", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", request); window.removeEventListener("resize", onResize); reduced.removeEventListener("change", onResize); };
  }, [projects.length]);

  return (
    <section ref={section} id="selected-work" className="rail" data-pinned="false" aria-labelledby="work-title">
      <div className="rail-stage">
        <div className="container rail-head">
          <div>
            <p className="tag"><span>01</span> Selected work</p>
            <h2 id="work-title" className="display">Things I&apos;ve <em>built.</em></h2>
          </div>
          <div className="rail-meta">
            <p>Production systems, Shopify storefronts and mobile apps. Each one shows my role and its real status.</p>
            <div className="rail-progress"><span ref={count}>01</span><i><span ref={bar} /></i><span>{String(projects.length).padStart(2, "0")}</span></div>
          </div>
        </div>
        <div className="rail-window">
          <div ref={track} className="rail-track">
            {projects.map((project, i) => <div key={project.slug} className={`rail-card${i === 0 ? " rail-card-lg" : ""}`}><ProjectCard project={project} index={i} /></div>)}
            <Link href="/work" className="rail-end">
              <span className="display">All<br />projects</span>
              <small>20+ projects &amp; contributions</small>
              <ArrowUpRight size={44} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
