import React from 'react';
import { GitBranch } from 'lucide-react';

const StatusBar = () => {
  return (
    <div className="sticky bottom-0 z-40 flex items-center justify-between border-t border-white/10 bg-[#0e1421] px-3 py-1.5 text-[12px] text-white/70">
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1"><GitBranch className="h-3.5 w-3.5" /> main</span>
        <span>Prettier</span>
        <span>TypeScript</span>
        <span>UTF-8</span>
        <span>LF</span>
      </div>
      <div className="flex items-center gap-3">
        <span>Ln 12, Col 7</span>
        <span>Spaces: 2</span>
        <span>🔋 100%</span>
      </div>
    </div>
  );
};

export default StatusBar;
