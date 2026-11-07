"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { categories, type Category, type Project } from "@/data/portfolio";
import { ProjectCard } from "./project-card";

const LIMIT = 6;

/* Home-page work grid with category chips, like a filtered portfolio shelf. */
export function WorkGallery({ projects, order }: { projects: Project[]; order: string[] }) {
  const [active, setActive] = useState<Category>("All work");
  const ranked = [...projects].sort((a, b) => {
    const ia = order.indexOf(a.slug), ib = order.indexOf(b.slug);
    return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
  });
  const list = ranked.filter(p => active === "All work" || p.category === active);
  const shown = list.slice(0, LIMIT);
  const count = (c: Category) => (c === "All work" ? projects.length : projects.filter(p => p.category === c).length);

  return (
    <>
      <div className="chips" role="tablist" aria-label="Filter projects">
        {categories.filter(c => count(c) > 0).map(c => (
          <button key={c} role="tab" type="button" aria-selected={active === c} className="chip" data-on={active === c} onClick={() => setActive(c)}>
            {c === "All work" ? "All" : c}<span>{count(c)}</span>
          </button>
        ))}
        <Link href={active === "All work" ? "/work" : `/work?category=${encodeURIComponent(active)}`} className="chips-all">All {list.length} <ArrowUpRight size={14} /></Link>
      </div>
      <div className="work-grid" key={active}>
        {shown.map((p, i) => (
          <div key={p.slug} className={i === 0 ? "wg-item wg-lead" : "wg-item"} data-build data-label="Card · Project" style={{ ["--d" as string]: i }}>
            <ProjectCard project={p} index={i} />
          </div>
        ))}
      </div>
    </>
  );
}
