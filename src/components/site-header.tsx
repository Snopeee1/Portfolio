"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Work", href: "/work" },
  { label: "Expertise", href: "/#expertise" },
  { label: "About", href: "/#about" },
  { label: "Process", href: "/#process" },
  { label: "Tools", href: "/#tools" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="wordmark" href="/" aria-label="Junry Gallego home" onClick={() => setOpen(false)}>junry<span className="brand-dot">.</span><span className="wordmark-tag">WEB · MOBILE · ECOMMERCE</span></Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(link => <Link key={link.label} href={link.href === "/work" && pathname === "/" ? "/#selected-work" : link.href} aria-current={link.href === "/work" && pathname.startsWith("/work") ? "page" : undefined}>{link.label}</Link>)}
        </nav>
        <Link className="button button-small header-cta" href="/#contact">Contact <ArrowUpRight size={16} /></Link>
        <button ref={toggle} className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-controls="mobile-nav" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">
        {links.map(link => <Link key={link.label} href={link.href === "/work" && pathname === "/" ? "/#selected-work" : link.href} onClick={() => setOpen(false)}>{link.label}<ArrowUpRight size={18} /></Link>)}
        <Link href="/#contact" onClick={() => setOpen(false)}>Contact <ArrowUpRight size={18} /></Link>
      </nav>}
    </header>
  );
}
