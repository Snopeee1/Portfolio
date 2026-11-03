import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="container footer-top"><Link href="/" className="wordmark">junry<span className="brand-dot">.</span></Link><p>Full-stack software · Shopify &amp; business systems.</p><a href="#main" className="back-top">Back to top <ArrowUp size={16} /></a></div>
    <div className="footer-giant" aria-hidden="true"><span className="display">Junry Jumawan</span><span className="display stroke-text">Gallego</span></div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} {profile.shortName}</span><span>Iligan City, Philippines · Remote work</span><div><Link href="/work">Work</Link><Link href="/#tools">Tools</Link><a href={profile.resume} target="_blank" rel="noopener noreferrer">Résumé <ArrowUpRight size={13} /></a><Link href="/#contact">Contact</Link></div></div>
  </footer>;
}
