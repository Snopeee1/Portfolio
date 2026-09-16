import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, MoveRight } from "lucide-react";
import { projects, profile } from "@/data/portfolio";
import { ProjectVisual } from "@/components/project-visual";
import { ProjectCard } from "@/components/project-card";
import { ToolBadge, hasToolLogo } from "@/components/tool-logo";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  return project ? { title: `${project.name} — Case Study`, description: project.summary, alternates: { canonical: `/work/${slug}` }, openGraph: { title: `${project.name} — Junry Gallego`, description: project.summary, url: `/work/${slug}` } } : { title: "Project not found" };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) notFound();
  const related = project.related.map(slug => projects.find(p => p.slug === slug)).filter(p => p !== undefined);
  return <main id="main" className="case-page"><div className="container"><Link className="back-link" href="/work"><ArrowLeft size={16} /> All work</Link><header className="case-heading"><p className="eyebrow">{project.category} <span className="case-dot">/</span> {project.year}</p><h1>{project.name}<span className="green-period">.</span></h1><p className="case-subtitle">{project.subtitle}</p><p className="case-summary">{project.summary}</p></header><div className="case-facts"><div><span>MY CONTRIBUTION</span><p>{project.role}</p></div><div><span>PROJECT STATUS</span><p>{project.status}</p></div><div><span>FOCUS</span><p>{project.category}</p></div></div><div className="contribution-tools"><p className="eyebrow">TOOLS USED IN THIS PROJECT</p><div className="case-stack">{project.stack.filter(hasToolLogo).map(tool => <ToolBadge key={tool} name={tool} />)}</div></div><ProjectVisual project={project} large /><p className="case-visual-note">{project.note}</p><div className="case-body"><aside className="case-sidebar"><span className="eyebrow">IN THIS PROJECT</span><nav aria-label="Case study sections"><a href="#challenge">01 / The challenge</a><a href="#approach">02 / The approach</a><a href="#scope">03 / What I worked on</a><a href="#technology">04 / The toolkit</a></nav>{project.links?.map(link => <a key={link.href} className="case-external" href={link.href} target="_blank" rel="noopener noreferrer">{link.label}<ArrowUpRight size={16} /></a>)}</aside><div className="case-story"><section id="challenge"><p className="eyebrow">01 / THE CHALLENGE</p><h2>Project requirements</h2><p>{project.challenge}</p></section><section id="approach"><p className="eyebrow">02 / THE APPROACH</p><h2>Implementation approach</h2><p>{project.approach}</p></section><section id="scope"><p className="eyebrow">03 / WHAT I WORKED ON</p><h2>Scope of work</h2><div className="capability-grid">{project.capabilities.map((item, i) => <article key={item.title}><span>0{i + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section><section id="technology"><p className="eyebrow">04 / THE TOOLKIT</p><h2>Technologies used</h2><div className="case-stack">{project.stack.map(tool => <ToolBadge key={tool} name={tool} />)}</div></section></div></div><div className="case-cta"><div><p className="eyebrow">RELATED PROJECT INQUIRY</p><h2>Discuss your requirements.</h2></div><a className="button button-dark" href={`mailto:${profile.email}?subject=${encodeURIComponent(`Project inquiry — inspired by ${project.name}`)}`}>Email project details <ArrowUpRight size={18} /></a></div><section className="related-projects"><div className="related-heading"><h2>Related projects</h2><Link href="/work" className="text-link">All projects <MoveRight size={17} /></Link></div><div className="project-grid">{related.map(p => <ProjectCard key={p.slug} project={p} />)}</div></section></div></main>;
}
