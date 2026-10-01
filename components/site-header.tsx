"use client";

import { CircleDashed, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["Product", "#features"],
  ["Solutions", "#showcase"],
  ["Pricing", "#pricing"],
  ["Resources", "#faq"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header id="top" className="sticky top-0 z-50 border-b border-white/10 bg-[#142019]/95 text-[#f7f6f1] backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-14">
        <a href="#top" className="inline-flex items-center gap-2 text-xl font-semibold tracking-[-0.05em]" aria-label="Flowdesk home">
          <span className="grid h-7 w-7 place-items-center rounded-[9px] bg-[#c9ed74] text-[#142019]"><CircleDashed size={17} strokeWidth={2.8} /></span>
          flowdesk
        </a>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {links.map(([label, href]) => <a key={label} href={href} className="text-sm text-white/60 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9ed74]">{label}</a>)}
        </nav>
        <div className="hidden items-center gap-5 sm:flex">
          <a href="#pricing" className="text-sm text-white/60 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9ed74]">Sign in</a>
          <a href="#pricing" className="inline-flex h-10 items-center rounded-full bg-[#c9ed74] px-4 text-sm font-semibold text-[#142019] transition hover:bg-[#d8f59a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9ed74] focus-visible:ring-offset-2 focus-visible:ring-offset-[#142019]">Start for free</a>
        </div>
        <button type="button" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white sm:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((value) => !value)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && <nav id="mobile-menu" className="border-t border-white/10 px-6 py-5 sm:hidden" aria-label="Mobile navigation">
        <div className="flex flex-col gap-1">
          {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-base text-white/70 hover:bg-white/[0.06] hover:text-white">{label}</a>)}
          <a href="#pricing" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-[#c9ed74] px-4 py-3 text-center text-sm font-semibold text-[#142019]">Start for free</a>
        </div>
      </nav>}
    </header>
  );
}
