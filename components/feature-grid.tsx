import { ArrowUpRight, Bot, ChartNoAxesCombined, CheckSquare2, MessageCircle, PanelsTopLeft, UsersRound } from "lucide-react";
import { FadeIn } from "@/components/motion";

const features = [
  { icon: PanelsTopLeft, title: "Project management", body: "See the big picture and every moving part without building a system around the system.", tone: "bg-[#e8f0d6]", visual: "project" },
  { icon: UsersRound, title: "Client portal", body: "Give clients a clear, calm place to review progress, share feedback and stay in the loop.", tone: "bg-[#f8e2d7]", visual: "client" },
  { icon: CheckSquare2, title: "Task tracking", body: "Turn good intentions into next steps with owners, due dates and enough context to move.", tone: "bg-[#e5edf3]", visual: "task" },
  { icon: MessageCircle, title: "Team collaboration", body: "Keep the conversation attached to the work, where decisions are easy to find later.", tone: "bg-[#eee5ef]", visual: "chat" },
  { icon: ChartNoAxesCombined, title: "Analytics", body: "Understand team capacity, project health and where time is going — at a glance.", tone: "bg-[#e4eee9]", visual: "analytics" },
  { icon: Bot, title: "Automations", body: "Let the small stuff happen automatically, so your team can stay focused on the work only you can do.", tone: "bg-[#f1ead4]", visual: "automation" },
];

function MiniVisual({ type }: { type: string }) {
  if (type === "project") return <div className="space-y-2"><div className="flex items-center justify-between"><span className="h-2 w-20 rounded-full bg-[#83965f]/30" /><span className="h-2 w-8 rounded-full bg-[#83965f]/20" /></div>{[76, 52, 88].map((width) => <div key={width} className="h-2 overflow-hidden rounded-full bg-black/5"><div className="h-full rounded-full bg-[#9bbd5e]" style={{ width: `${width}%` }} /></div>)}</div>;
  if (type === "client") return <div className="flex items-end gap-2"><div className="h-16 w-1/3 rounded-t-md bg-[#e19d7c]/35" /><div className="h-24 w-1/3 rounded-t-md bg-[#e19d7c]/60" /><div className="h-12 w-1/3 rounded-t-md bg-[#e19d7c]/35" /></div>;
  if (type === "task") return <div className="space-y-2">{["Send proposal", "Review feedback", "Ship v1"].map((item, index) => <div key={item} className="flex items-center gap-2 rounded-md border border-black/5 bg-white/55 p-2"><span className={`grid h-4 w-4 place-items-center rounded-full ${index === 0 ? "bg-[#a3c572]" : "border border-black/10"}`}>{index === 0 && <span className="text-[9px]">✓</span>}</span><span className="text-[9px] text-[#52635a]">{item}</span></div>)}</div>;
  if (type === "chat") return <div className="space-y-2"><div className="ml-auto h-6 w-3/4 rounded-lg rounded-br-sm bg-white/80" /><div className="h-8 w-4/5 rounded-lg rounded-bl-sm bg-[#b9cba8]/70" /><div className="ml-auto h-5 w-1/2 rounded-lg rounded-br-sm bg-white/80" /></div>;
  if (type === "analytics") return <div className="flex h-24 items-end gap-2"><div className="h-[35%] flex-1 rounded-t bg-[#739a76]/45" /><div className="h-[54%] flex-1 rounded-t bg-[#739a76]/60" /><div className="h-[47%] flex-1 rounded-t bg-[#739a76]/45" /><div className="h-[78%] flex-1 rounded-t bg-[#739a76]" /><div className="h-[65%] flex-1 rounded-t bg-[#739a76]/70" /><div className="h-[88%] flex-1 rounded-t bg-[#739a76]" /></div>;
  return <div className="flex items-center gap-2"><div className="relative h-10 w-10 rounded-full border-4 border-[#c8a85c]/30 border-t-[#c8a85c]"><span className="absolute inset-0 grid place-items-center text-[9px] font-semibold text-[#76663d]">72%</span></div><div className="space-y-2"><span className="block h-2 w-28 rounded-full bg-[#b99b4d]/35" /><span className="block h-2 w-20 rounded-full bg-[#b99b4d]/20" /></div></div>;
}

export function FeatureGrid() {
  return <div className="mt-14 grid gap-px overflow-hidden border border-[#dfe5dd] bg-[#dfe5dd] sm:grid-cols-2 lg:grid-cols-3">{features.map((feature, index) => <FadeIn key={feature.title} delay={index * 0.04} className="group bg-white p-6 transition hover:bg-[#fbfcfa] sm:p-7"><div className={`mb-10 grid h-10 w-10 place-items-center rounded-xl ${feature.tone}`}><feature.icon size={18} strokeWidth={1.8} /></div><h3 className="text-lg font-semibold tracking-[-0.03em]">{feature.title}</h3><p className="mt-3 min-h-[72px] text-sm leading-6 text-[#68786d]">{feature.body}</p><div className="mt-7 rounded-xl border border-[#e1e7df] bg-[#f8faf7] p-4 transition group-hover:border-[#cfdcc9]"><MiniVisual type={feature.visual} /></div><a href="#showcase" className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#66824f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a7c978]">See it in action <ArrowUpRight size={13} /></a></FadeIn>)}</div>;
}
