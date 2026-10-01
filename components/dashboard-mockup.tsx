import { Bell, CalendarDays, Check, ChevronDown, CircleDot, FolderKanban, Inbox, LayoutGrid, Plus, Search, Settings2, SlidersHorizontal, Users } from "lucide-react";

const tasks = [
  { title: "Finalize onboarding flow", project: "Atlas launch", tag: "Design", due: "Today", done: false, color: "bg-[#cfe789]" },
  { title: "Send client recap", project: "Northstar / Q2", tag: "Client", due: "Tomorrow", done: false, color: "bg-[#f4c9a7]" },
  { title: "QA mobile navigation", project: "Atlas launch", tag: "Build", due: "Wed, Jun 18", done: true, color: "bg-[#c6d7e5]" },
  { title: "Update case study metrics", project: "Fieldnotes", tag: "Content", due: "Thu, Jun 19", done: false, color: "bg-[#e6c9e8]" },
];

const avatars = ["MC", "JB", "PS", "+4"];

export function DashboardMockup() {
  return (
    <div className="relative overflow-hidden rounded-[1.35rem] border border-white/15 bg-[#edf0e9] text-[#18271d] shadow-[0_30px_90px_rgba(0,0,0,0.34)] ring-1 ring-black/10">
      <div className="flex h-11 items-center justify-between border-b border-[#d8dfd5] bg-white/80 px-4 sm:px-5">
        <div className="flex items-center gap-2.5">
          <span className="grid h-5 w-5 place-items-center rounded-[6px] bg-[#142019] text-[#c9ed74]"><CircleDot size={12} /></span>
          <span className="hidden text-[11px] font-semibold tracking-tight text-[#314438] sm:inline">flowdesk / workspace</span>
          <ChevronDown size={13} className="text-[#809082]" />
        </div>
        <div className="flex items-center gap-3 text-[#829088]"><Search size={14} /><Bell size={14} /><div className="h-5 w-px bg-[#d6ddd3]" /><span className="grid h-6 w-6 place-items-center rounded-full bg-[#dcebb3] text-[8px] font-bold text-[#536941]">MC</span></div>
      </div>
      <div className="grid min-h-[480px] grid-cols-[154px_1fr] sm:grid-cols-[194px_1fr] lg:grid-cols-[214px_1fr_214px]">
        <aside className="border-r border-[#d8dfd5] bg-[#e6ebe3] p-3 sm:p-4">
          <div className="mb-5 flex items-center justify-between px-2"><span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#819084]">Workspace</span><Plus size={13} className="text-[#819084]" /></div>
          <div className="space-y-1 text-[11px] text-[#6b7b70]">
            {[[LayoutGrid, "Overview"], [FolderKanban, "Projects"], [Check, "My tasks"], [Users, "Clients"]].map(([Icon, label], index) => <div key={label as string} className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 ${index === 1 ? "bg-white font-semibold text-[#1d3424] shadow-sm" : ""}`}><Icon size={13} /><span>{label as string}</span>{index === 2 && <span className="ml-auto text-[9px] text-[#9aa69a]">12</span>}</div>)}
          </div>
          <div className="mb-3 mt-8 flex items-center justify-between px-2"><span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#819084]">Projects</span><Plus size={13} className="text-[#819084]" /></div>
          <div className="space-y-1 text-[11px] text-[#6b7b70]">
            {["Atlas launch", "Northstar / Q2", "Fieldnotes"].map((project, index) => <div key={project} className="flex items-center gap-2.5 rounded-lg px-2.5 py-2"><span className={`h-2 w-2 rounded-full ${["bg-[#b8d66a]", "bg-[#efab7f]", "bg-[#bfcfe2]"][index]}`} /><span className="truncate">{project}</span></div>)}
          </div>
          <div className="mt-8 space-y-1 border-t border-[#d3dbd1] pt-4 text-[11px] text-[#6b7b70]"><div className="flex items-center gap-2.5 px-2.5 py-2"><Settings2 size={13} /> Settings</div><div className="flex items-center gap-2.5 px-2.5 py-2"><Inbox size={13} /> Inbox <span className="ml-auto rounded bg-white px-1.5 text-[9px]">3</span></div></div>
        </aside>
        <section className="min-w-0 bg-[#f7f8f5] p-4 sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-3"><div><p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-[#8b998e]">Tuesday, June 17, 2025</p><h3 className="mt-1.5 text-xl font-semibold tracking-[-0.04em] text-[#1c3022] sm:text-2xl">Good morning, Maya</h3></div><button className="flex items-center gap-1.5 rounded-lg border border-[#d9e0d7] bg-white px-2.5 py-2 text-[10px] font-medium text-[#607064]"><CalendarDays size={12} /> This week <ChevronDown size={12} /></button></div>
          <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3"><div className="rounded-xl border border-[#dee5dc] bg-white p-3"><p className="text-[9px] text-[#87958a]">Active projects</p><p className="mt-1 text-xl font-semibold tracking-[-0.06em]">06</p><span className="text-[9px] text-[#77965b]">↑ 2 this month</span></div><div className="rounded-xl border border-[#dee5dc] bg-white p-3"><p className="text-[9px] text-[#87958a]">Open tasks</p><p className="mt-1 text-xl font-semibold tracking-[-0.06em]">24</p><span className="text-[9px] text-[#77965b]">8 due this week</span></div><div className="rounded-xl border border-[#dee5dc] bg-white p-3"><p className="text-[9px] text-[#87958a]">On track</p><p className="mt-1 text-xl font-semibold tracking-[-0.06em]">92%</p><span className="text-[9px] text-[#77965b]">↑ 6% from May</span></div></div>
          <div className="mt-5 flex items-center justify-between"><h4 className="text-xs font-semibold text-[#2a3d30]">Priority tasks</h4><button className="text-[10px] font-medium text-[#789268]">View all</button></div>
          <div className="mt-2 overflow-hidden rounded-xl border border-[#dee5dc] bg-white">{tasks.map((task) => <div key={task.title} className="flex items-center gap-2.5 border-b border-[#eef1ed] px-3 py-3 last:border-0 sm:gap-3 sm:px-4"><span className={`grid h-4 w-4 shrink-0 place-items-center rounded-full border ${task.done ? "border-[#93af6c] bg-[#c9ed74] text-[#28431f]" : "border-[#cbd6ca]"}`}>{task.done && <Check size={10} strokeWidth={3} />}</span><div className="min-w-0 flex-1"><p className={`truncate text-[10px] font-medium ${task.done ? "text-[#a1aaa2] line-through" : "text-[#364a3a]"}`}>{task.title}</p><p className="mt-0.5 truncate text-[9px] text-[#98a399]">{task.project}</p></div><span className={`hidden rounded-md px-1.5 py-1 text-[8px] font-medium text-[#4d5f50] sm:inline-flex ${task.color}`}>{task.tag}</span><span className="hidden text-[9px] text-[#9aa69a] sm:inline">{task.due}</span></div>)}</div>
          <div className="mt-5 flex items-center justify-between"><h4 className="text-xs font-semibold text-[#2a3d30]">Project pulse</h4><button className="text-[10px] font-medium text-[#789268]">See projects</button></div>
          <div className="mt-2 grid grid-cols-2 gap-2"><div className="rounded-xl border border-[#dee5dc] bg-white p-3"><div className="flex items-center justify-between"><span className="text-[9px] text-[#657668]">Atlas launch</span><span className="text-[9px] font-semibold">78%</span></div><div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#e8eee5]"><div className="h-full w-[78%] rounded-full bg-[#b8d66a]" /></div><div className="mt-2 flex items-center justify-between text-[8px] text-[#9aa69a]"><span>12 of 16 tasks</span><span>Jun 24</span></div></div><div className="rounded-xl border border-[#dee5dc] bg-white p-3"><div className="flex items-center justify-between"><span className="text-[9px] text-[#657668]">Northstar</span><span className="text-[9px] font-semibold">54%</span></div><div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#e8eee5]"><div className="h-full w-[54%] rounded-full bg-[#efab7f]" /></div><div className="mt-2 flex items-center justify-between text-[8px] text-[#9aa69a]"><span>8 of 15 tasks</span><span>Jul 02</span></div></div></div>
        </section>
        <aside className="hidden border-l border-[#d8dfd5] bg-[#f0f3ed] p-4 lg:block"><div className="flex items-center justify-between"><h4 className="text-[11px] font-semibold">Recent activity</h4><SlidersHorizontal size={13} className="text-[#8a998e]" /></div><div className="mt-5 space-y-5">{[["MC", "Maya moved", "Finalize onboarding", "8m", "bg-[#dbeab0]"], ["JB", "Jon completed", "QA mobile navigation", "42m", "bg-[#f4d2c6]"], ["PS", "Priya commented on", "Northstar / Q2", "1h", "bg-[#cddce9]"], ["AR", "Ari joined", "Atlas launch", "3h", "bg-[#e6c9e8]"]].map(([initials, action, detail, time, color]) => <div key={detail} className="flex gap-2.5"><span className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-[8px] font-semibold text-[#53645a] ${color}`}>{initials}</span><div className="min-w-0 flex-1"><p className="text-[9px] leading-4 text-[#718078]"><span className="font-semibold text-[#405345]">{action}</span> {detail}</p><p className="mt-0.5 text-[8px] text-[#a0aaa2]">{time} ago</p></div></div>)}</div><div className="mt-7 border-t border-[#dce3d9] pt-5"><p className="text-[9px] font-semibold text-[#53645a]">Team this week</p><div className="mt-3 flex items-center">{avatars.map((avatar, index) => <span key={avatar} className={`-ml-1.5 grid h-7 w-7 place-items-center rounded-full border-2 border-[#f0f3ed] text-[8px] font-semibold ${index === 0 ? "bg-[#dbeab0]" : index === 1 ? "bg-[#f4d2c6]" : index === 2 ? "bg-[#cddce9]" : "bg-white text-[#718078]"}`}>{avatar}</span>)}</div><p className="mt-3 text-[9px] leading-4 text-[#8a998e]">4 teammates are active today. Nice.</p></div></aside>
      </div>
    </div>
  );
}
