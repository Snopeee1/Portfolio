"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export function ContactForm() {
  const [feedback, setFeedback] = useState("");
  const [copied, setCopied] = useState(false);
  const [draftLink, setDraftLink] = useState("");
  async function copyEmail() {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); setFeedback("Email address copied."); }
    catch { setFeedback(`Copy this email address: ${profile.email}`); }
  }
  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const subject = `${values.get("service")} inquiry from ${String(values.get("name")).trim()}`;
    const body = `Hi Junry,\n\n${String(values.get("message")).trim()}\n\nName: ${String(values.get("name")).trim()}\nEmail: ${values.get("email")}\nProject type: ${values.get("service")}\nTimeline: ${values.get("timeline") || "To be discussed"}`;
    const href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setDraftLink(href);
    setFeedback("Your project email is ready. Open the draft below to review and send it in your email app.");
  }
  return <div className="contact-form-wrap">
    <div className="contact-form-title"><span>PROJECT DETAILS</span><Mail size={19} /></div>
    <form className="contact-form" onSubmit={prepareEmail} onChange={() => { setDraftLink(""); setFeedback(""); }}>
      <div className="form-row"><label>Your name<input name="name" autoComplete="name" placeholder="Alex Smith" required maxLength={100} /></label><label>Email address<input name="email" autoComplete="email" type="email" placeholder="alex@company.com" required maxLength={180} /></label></div>
      <div className="form-row"><label>Type of work<select name="service" defaultValue="Full-stack system"><option>Full-stack system</option><option>Admin & server-side systems</option><option>Shopify ecommerce</option><option>Mobile app development</option><option>UI/UX design & prototype</option><option>Website improvements</option><option>Employment opportunity</option></select></label><label>Preferred timeline<select name="timeline" defaultValue="Let’s discuss"><option>Let’s discuss</option><option>As soon as possible</option><option>Within 1–2 months</option><option>Planning ahead</option></select></label></div>
      <label>Project requirements<textarea name="message" rows={4} placeholder="Describe the work, your current setup, and what needs to change." required minLength={10} maxLength={4000} /></label>
      <button className="button button-lime contact-submit" type="submit">Prepare project email <ArrowUpRight size={19} /></button>
      <p className="form-note">Prepare a draft, then open it in your email app to review and send.</p>
      <p className="form-feedback" role="status">{feedback}</p>
      {draftLink && <a className="draft-fallback" href={draftLink}>Open draft in email app <ArrowUpRight size={14} /></a>}
    </form>
    <div className="copy-email"><span>Prefer to write directly?</span><button type="button" onClick={copyEmail}>{profile.email}{copied ? <Check size={15} /> : <Copy size={15} />}</button></div>
  </div>;
}
