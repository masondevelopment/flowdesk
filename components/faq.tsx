"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { FadeIn } from "@/components/motion";

const items = [
  ["Can I try Flowdesk before choosing a plan?", "Yes. Every workspace starts with a 14-day Pro trial, no credit card required. After the trial, you can stay on Free or choose the plan that fits your team."],
  ["Is Flowdesk only for agencies?", "Not at all. Flowdesk works well for studios, consultancies, product teams and any small team balancing internal projects with work for clients."],
  ["Can clients see our internal work?", "No. Client portals are intentionally separate from your internal workspace. You choose exactly what to share, and clients only see the projects and updates you invite them into."],
  ["Do you offer help moving from another tool?", "We do. Pro and Business teams can import projects from CSV, and our team is happy to help you shape a clean starting structure."],
  ["How does billing work?", "Plans are billed per active teammate, monthly or yearly. Guests and viewers are always free, and you can change or cancel your plan whenever you need."],
];

export function Faq() {
  const [active, setActive] = useState<number | null>(0);
  return <div className="divide-y divide-[#e2e8e0] border-y border-[#e2e8e0]">{items.map(([question, answer], index) => { const isOpen = active === index; const panelId = `faq-panel-${index}`; return <FadeIn key={question} delay={index * 0.04}><div><button type="button" className="flex w-full items-center justify-between gap-6 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a3c272] focus-visible:ring-offset-2" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setActive(isOpen ? null : index)}><span className="text-base font-semibold tracking-[-0.02em]">{question}</span><ChevronDown size={18} className={`shrink-0 text-[#78936a] transition-transform ${isOpen ? "rotate-180" : ""}`} /></button><div id={panelId} hidden={!isOpen} className="pb-6 pr-10 text-sm leading-7 text-[#6f7f74]">{answer}</div></div></FadeIn> })}</div>;
}
