"use client";

import Image from "next/image";
import Link from "next/link";
import { Pause, Play, Snowflake, Waves, Zap } from "lucide-react";
import { useState } from "react";
import { projectBrands } from "@/data/project-brands";

export function ProjectMarquee() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="project-marquee" aria-label="Project and team experience">
      <div className="container marquee-heading">
        <p className="eyebrow">PROJECT & TEAM EXPERIENCE</p>
        <div>
          <Link href="/work">Explore all work <span aria-hidden="true">↗</span></Link>
          <button type="button" aria-label={paused ? "Play project logos" : "Pause project logos"} aria-pressed={paused} onClick={() => setPaused(value => !value)}>
            {paused ? <Play size={14} /> : <Pause size={14} />}
          </button>
        </div>
      </div>
      <div className="marquee-window" data-paused={paused}>
        <div className="marquee-track">
          {[false, true].map(duplicate => (
            <ul className="marquee-group" key={String(duplicate)} aria-hidden={duplicate || undefined} inert={duplicate || undefined}>
              {projectBrands.map(brand => (
                <li key={brand.slug}>
                  <Link className="project-brand" data-project={brand.slug} href={`/work/${brand.slug}`} aria-label={`View ${brand.name} project`} tabIndex={duplicate ? -1 : undefined}>
                    {brand.image ? <Image className="project-brand-image" src={brand.image} width={180} height={64} alt={brand.name} unoptimized loading="eager" /> : (
                      <span className={`project-wordmark project-wordmark-${brand.slug}`}>
                        {brand.slug === "iligan-bay" ? <Waves aria-hidden="true" /> : brand.slug === "icybreeze" ? <Snowflake aria-hidden="true" /> : <Zap aria-hidden="true" />}
                        <span>{brand.name}</span>
                      </span>
                    )}
                    <span className="project-brand-caption">{brand.caption}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
