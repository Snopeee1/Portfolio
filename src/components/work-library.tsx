"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";
import { categories, projects, type Category } from "@/data/portfolio";
import { ProjectCard } from "./project-card";

export function WorkLibrary({ initialCategory = "All work" }: { initialCategory?: Category }) {
  const [category, setCategory] = useState<Category>(initialCategory);
  const [query, setQuery] = useState("");
  const visible = projects.filter(project => (category === "All work" || project.category === category) && [project.name, project.summary, ...project.stack].join(" ").toLowerCase().includes(query.trim().toLowerCase()));
  return <>
    <div className="work-toolbar"><div className="filter-list" aria-label="Filter work by discipline">{categories.map(item => <button key={item} type="button" aria-pressed={category === item} className={category === item ? "filter active" : "filter"} onClick={() => setCategory(item)}>{item}<span>{item === "All work" ? projects.length : projects.filter(p => p.category === item).length}</span></button>)}</div>
      <div className="work-search"><Search size={17} /><input type="search" aria-label="Search projects or technology" placeholder="Search work or technology" value={query} onChange={e => setQuery(e.target.value)} />{query && <button aria-label="Clear search" onClick={() => setQuery("")}><X size={15} /></button>}</div>
    </div>
    <p className="results-count" aria-live="polite">{visible.length} {visible.length === 1 ? "project" : "projects"}{category !== "All work" ? ` in ${category.toLowerCase()}` : " across web, mobile, commerce, and design"}</p>
    {visible.length ? <div className="project-grid library-grid">{visible.map(project => <ProjectCard key={project.slug} project={project} headingLevel={2} />)}</div> : <div className="empty-state"><Search size={30} /><h2>No projects found.</h2><p>Try a project name or technology, or explore all the work.</p><button className="button" onClick={() => { setCategory("All work"); setQuery(""); }}>Reset filters</button></div>}
  </>;
}
