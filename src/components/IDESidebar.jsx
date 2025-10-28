import React from 'react';
import { Folder, Search, GitBranch, PlayCircle, Settings } from 'lucide-react';

const SidebarIcon = ({ children, active = false }) => (
  <div className={`flex h-10 w-10 items-center justify-center rounded-md ${active ? 'bg-white/10 text-white' : 'text-white/60 hover:bg-white/5 hover:text-white'}`}>{children}</div>
);

const ExplorerItem = ({ name, active = false, depth = 0 }) => (
  <div className={`flex cursor-pointer items-center gap-2 rounded px-2 py-1 text-sm ${active ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/5 hover:text-white'}`} style={{ paddingLeft: 8 + depth * 12 }}>
    <Folder className="h-4 w-4 text-emerald-300/80" />
    <span className="truncate">{name}</span>
  </div>
);

const IDESidebar = () => {
  return (
    <aside className="flex h-full w-full flex-col border-r border-white/10 bg-[#0b0f17]">
      {/* Activity bar */}
      <div className="flex flex-col items-center gap-2 border-b border-white/10 p-2">
        <SidebarIcon active>
          <Folder className="h-5 w-5" />
        </SidebarIcon>
        <SidebarIcon>
          <Search className="h-5 w-5" />
        </SidebarIcon>
        <SidebarIcon>
          <GitBranch className="h-5 w-5" />
        </SidebarIcon>
        <SidebarIcon>
          <PlayCircle className="h-5 w-5" />
        </SidebarIcon>
        <div className="mt-auto" />
        <SidebarIcon>
          <Settings className="h-5 w-5" />
        </SidebarIcon>
      </div>

      {/* Explorer */}
      <div className="flex-1 overflow-y-auto p-2">
        <div className="px-2 text-xs font-semibold uppercase tracking-wider text-white/50">Explorer</div>
        <div className="mt-2 space-y-1">
          <ExplorerItem name="README.md" active />
          <ExplorerItem name="projects.json" />
          <ExplorerItem name="contact.tsx" />
          <ExplorerItem name="playground.spline" />
          <div className="mt-3 px-2 text-xs uppercase tracking-wider text-white/40">assets</div>
          <ExplorerItem name="avatar.png" depth={1} />
          <ExplorerItem name="theme.css" depth={1} />
        </div>
      </div>
    </aside>
  );
};

export default IDESidebar;
