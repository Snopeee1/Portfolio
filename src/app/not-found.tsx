import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() { return <main id="main" className="container not-found"><p className="eyebrow">404 / A SMALL DETOUR</p><h1>This page<br />isn’t here.</h1><p>There’s still plenty of work to explore. Let’s get you back to it.</p><Link className="button button-dark" href="/work">Explore the projects <ArrowUpRight size={18} /></Link></main>; }
