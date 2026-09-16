import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { ProjectVisual } from "./project-visual";
import { ToolBadge, hasToolLogo } from "./tool-logo";

export function ProjectCard({ project, index, headingLevel = 3 }: { project: Project; index?: number; headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return <article className="project-card">
    <Link className="project-image-link" href={`/work/${project.slug}`} aria-label={`View ${project.name} case study`}><ProjectVisual project={project} /><span className="project-open"><ArrowUpRight size={22} /></span></Link>
    <div className="project-meta"><span>{project.category}</span><span>{project.year}</span></div>
    <Link className="project-title-link" href={`/work/${project.slug}`}><Heading>{project.name}</Heading><ArrowUpRight size={21} /></Link>
    <p className="project-subtitle">{project.subtitle}</p>
    <div className="project-tags">{project.stack.filter(hasToolLogo).slice(0, 3).map(tag => <ToolBadge key={tag} name={tag} />)}{index !== undefined && <small>{String(index + 1).padStart(2, "0")}</small>}</div>
  </article>;
}
