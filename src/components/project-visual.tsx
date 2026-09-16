import Image from "next/image";
import { Activity, ArrowRight, CalendarDays, Check, CheckCircle2, CircleDot, Code2, Database, FileCheck2, LayoutDashboard, MapPin, PawPrint, ShieldCheck, ShoppingBag, Snowflake, Users, Waves, Zap } from "lucide-react";
import type { Project } from "@/data/portfolio";

export function ProjectVisual({ project, large = false }: { project: Project; large?: boolean }) {
  return <div data-project={project.slug} className={`project-visual visual-${project.visual}${large ? " visual-large" : ""}`} style={{ backgroundColor: project.color }} aria-hidden={project.visual !== "commerce" && project.visual !== "petmate" ? true : undefined}>
    {project.visual === "commerce" && project.image ? <>
      <Image className="commerce-image" src={project.image} alt={`${project.name} brand and product imagery`} fill sizes={large ? "(max-width: 900px) 100vw, 1200px" : "(max-width: 700px) 100vw, 50vw"} />
      <span className="visual-corner"><ShoppingBag size={13} /> Shopify storefront</span>
    </> : project.visual === "petmate" ? <>
      <div className="petmate-word"><PawPrint size={21} /> PetMate<span>CARE, CONNECTED.</span></div>
      <div className="phone phone-one"><Image src="/projects/petmate-home.svg" alt="PetMate Figma home screen showing a pet appointment and care overview" width={390} height={844} /></div>
      <div className="phone phone-two"><Image src="/projects/petmate-appointments.svg" alt="PetMate Figma appointment booking calendar" width={390} height={844} /></div>
      <span className="visual-corner">Figma · Mobile prototype</span>
    </> : project.visual === "recovery" ? <>
      <div className="mock-browser" aria-label="Illustrative recovery dashboard, without member data" role="img">
        <div className="browser-bar"><i /><i /><i /><span>Revive Recovery · {project.slug.endsWith("uk") ? "United Kingdom" : "Australia"}</span></div>
        <div className="dashboard-mock"><aside><strong><Activity size={19} /> revive<span>®</span></strong><span className="mock-nav-active"><LayoutDashboard size={12} /> Overview</span><span><Users size={12} /> Members</span><span><Activity size={12} /> Recovery</span><span><FileCheck2 size={12} /> Reports</span><div className="mock-side-bottom"><ShieldCheck size={17} /> Admin workspace</div></aside><div className="mock-main">
          <div className="mock-heading"><div><small>MEMBER RECOVERY & ADMIN</small><h4>Recovery overview</h4></div><span className="mock-avatar">JG</span></div>
          <div className="mock-stats"><div><span>Member records</span><strong><Users size={21} /></strong><small>Member profiles</small></div><div><span>Recovery workflow</span><strong><Activity size={21} /></strong><small>Cases & follow-ups</small></div><div><span>Data integrity</span><strong><ShieldCheck size={21} /></strong><small>Validated imports</small></div></div>
          <div className="mock-chart"><div><strong>Recovery activity</strong><span>WORKFLOW OVERVIEW</span></div><div className="chart-bars">{[30, 49, 38, 64, 54, 78, 65, 88, 76, 100, 92, 115].map((height, i) => <i key={i} style={{ height }} />)}</div><div className="chart-labels"><span>Records</span><span>Follow-ups</span><span>Reporting</span></div></div>
          <div className="mock-status-row"><CheckCircle2 size={13} /><span>Imports, member records & reporting — connected</span></div>
        </div></div>
      </div><span className="visual-corner">Illustrative interface</span>
    </> : project.visual === "coastal" ? <>
      <div className="coastal-word"><Waves size={27} /><strong>Iligan Bay</strong><span>COASTAL REPORTING SYSTEM</span></div>
      <div className="map-art" aria-hidden="true"><div className="map-land" /><i className="map-road road-one" /><i className="map-road road-two" /><div className="map-pin pin-one"><MapPin size={22} fill="currentColor" /></div><div className="map-pin pin-two"><MapPin size={22} fill="currentColor" /></div><div className="map-pin pin-three"><MapPin size={22} fill="currentColor" /></div><span className="map-sea-label">ILIGAN BAY</span><div className="map-report"><span><CheckCircle2 size={19} /></span><div><strong>Report review and cleanup assignment</strong><small>Location → Evidence → Cleanup</small></div></div></div><span className="visual-corner">Workflow illustration · Web & mobile</span>
    </> : project.visual === "icybreeze" ? <>
      <div className="service-mock"><div className="service-mock-nav"><strong><Snowflake /> IcyBreeze</strong><span>Services · Care plans</span></div><div className="service-mock-content"><span>AIR-CONDITIONING SERVICES</span><h4>Aircon service<br />booking.</h4><p>Cleaning, maintenance, and care plans.</p><div className="mock-cta">Book a cleaning <ArrowRight size={13} /></div></div><div className="booking-mini"><CalendarDays size={23} /><strong>Select a schedule</strong><div className="booking-days">{["M", "T", "W", "T", "F"].map((d, i) => <span key={i} className={i === 2 ? "selected" : ""}>{d}<b>{14 + i}</b></span>)}</div><small><Check size={12} /> Booking to admin, connected</small></div></div><span className="visual-corner">Illustrative interface · Laravel</span>
    </> : project.visual === "rayo" ? <><div className="rayo-cover"><Zap size={60} fill="currentColor" /><span>RAYO ELECTRIC</span><h4>Electrical services.<br />Appointment requests.</h4><div className="rayo-line">Service discovery <ArrowRight size={16} /> Appointment request</div></div><span className="visual-corner">Project cover · WordPress & PHP</span></>
    : project.visual === "integration" ? <><div className="integration-art"><span className="integration-label">THE WORK BEHIND THE STOREFRONT</span><div className="integration-nodes"><div><Database /><b>Motovan</b><small>Product catalog</small></div><span className="integration-path"><i /><Code2 /><i /></span><div><ShoppingBag /><b>Shopify</b><small>Storefront data</small></div></div><div className="integration-tags"><span>SKU</span><span>Pricing</span><span>Inventory</span><span>JSON</span></div></div><span className="visual-corner">Integration workflow</span></>
    : project.visual === "bia" ? <><div className="bia-cover"><span>SHOPIFY THEME DEVELOPMENT</span><strong>BIA<span>SKIN</span></strong><p>Custom sections and product page updates.</p><div className="bia-bottom">Shopify Broadcast theme <CircleDot size={15} /> Storefront refinement</div></div><span className="visual-corner">Typographic project cover</span></>
    : <><div className="geminos-cover"><ShoppingBag size={42} /><h4>geminos<span>®</span></h4><p>Shopify store setup and launch preparation.</p><span>SETUP / STRUCTURE / LAUNCH</span></div><span className="visual-corner">Project cover</span></>}
  </div>;
}
