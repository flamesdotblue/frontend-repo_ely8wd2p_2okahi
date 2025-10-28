import React from 'react';
import { ChevronDown } from 'lucide-react';

const IDETopBar = () => {
  return (
    <div className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#0b0f17]/80 backdrop-blur">
      {/* Window controls + title */}
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-green-500/80" />
          <span className="ml-3 text-sm text-white/70">Rugved Kadu — Portfolio</span>
        </div>
        <div className="flex items-center gap-4 text-xs text-white/60">
          <span className="hidden md:inline">File</span>
          <span className="hidden md:inline">Edit</span>
          <span className="hidden md:inline">Selection</span>
          <span className="hidden md:inline">View</span>
          <span className="hidden md:inline">Go</span>
          <span className="hidden md:inline">Run</span>
          <span className="hidden md:inline">Terminal</span>
          <span className="hidden md:inline">Help</span>
          <div className="flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1">
            <span className="text-white/70">main</span>
            <ChevronDown className="h-3 w-3 text-white/50" />
          </div>
        </div>
      </div>
      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto border-t border-white/10 px-2">
        {['README.md', 'projects.json', 'contact.tsx', 'playground.spline'].map((tab, i) => (
          <div key={tab} className={`mt-1 inline-flex items-center gap-2 rounded-t-md border-x border-t border-b-0 px-3 py-2 text-xs ${i===0 ? 'border-white/20 bg-[#121826] text-white' : 'border-transparent text-white/60 hover:text-white/80'}`}> {tab} </div>
        ))}
      </div>
    </div>
  );
};

export default IDETopBar;
