"use client";

import { useState } from "react";
import { Database, FileSpreadsheet, LayoutDashboard, Plus, ServerCog, ShieldCheck } from "lucide-react";

const steps = [
  { key: "ingest", title: "Ingest", meta: "ClubWise · DebitSuccess · CSV", text: "Member and billing exports arrive from two payment platforms, every cycle, for every club." },
  { key: "validate", title: "Validate", meta: "Parse · match · dedupe", text: "Each row is parsed, matched to the right member and club, de-duplicated, and anything that doesn't line up is flagged instead of guessed." },
  { key: "store", title: "Store", meta: "PostgreSQL · Supabase", text: "Clean records land in a normalised schema with status history, role-based access and an audit trail of who changed what." },
  { key: "serve", title: "Serve", meta: "Admin dashboard · reports", text: "Staff work recovery cases, follow-ups and reports from one admin workspace, scoped to the clubs they manage." },
  { key: "deploy", title: "Deploy", meta: "AWS · Nginx · PM2", text: "Released to AWS behind Nginx with process management, then monitored and maintained after go-live." },
];

const nodes = [
  { key: "ingest", label: "Sources", sub: "ClubWise · DebitSuccess", Icon: FileSpreadsheet },
  { key: "validate", label: "Validate", sub: "parse · match · dedupe", Icon: ShieldCheck },
  { key: "store", label: "Store", sub: "PostgreSQL", Icon: Database },
  { key: "serve", label: "Serve", sub: "Admin dashboard", Icon: LayoutDashboard },
];

export function DataFlow() {
  const [open, setOpen] = useState(0);
  const activeKey = steps[open]?.key;

  return (
    <div className="flow">
      <div className="flow-diagram" aria-hidden="true" data-build data-label="Frame · Pipeline">
        <div className="flow-top"><span>Revive · recovery pipeline</span><b>RUNNING</b><span>39 clubs · AU / UK</span></div>
        <div className="flow-row">
          {nodes.map((n, i) => (
            <div key={n.key} className="flow-cell">
              <div className="flow-node" data-on={activeKey === n.key || (activeKey === "deploy" && n.key === "serve")}>
                <n.Icon size={18} strokeWidth={1.6} />
                <strong>{n.label}</strong>
                <small>{n.sub}</small>
              </div>
              {i < nodes.length - 1 && <div className="flow-link"><i /><i /><i /></div>}
            </div>
          ))}
        </div>
        <div className="flow-base"><ServerCog size={14} /> Deployed on AWS · Nginx · PM2 <span>Last import: 12,480 rows · 18 flagged</span></div>
      </div>

      <ol className="flow-steps" data-build data-label="List · Steps">
        {steps.map((s, i) => (
          <li key={s.key} data-open={open === i}>
            <button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
              <span className="fs-n">0{i + 1}</span>
              <span className="fs-t"><strong>{s.title}</strong><small>{s.meta}</small></span>
              <Plus size={16} className="fs-plus" />
            </button>
            <div className="fs-body"><p>{s.text}</p></div>
          </li>
        ))}
      </ol>
    </div>
  );
}
