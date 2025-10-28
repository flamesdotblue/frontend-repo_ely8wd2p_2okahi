import React, { useState } from 'react';
import IDESidebar from './IDESidebar';
import EditorPane from './EditorPane';
import { Terminal, Play, Trash2 } from 'lucide-react';

const TerminalPanel = () => {
  const [logs, setLogs] = useState([
    '🚀 Dev server ready on http://localhost:3000',
    '✅ Tailwind loaded — watching for changes...',
    '⚙️ Lint clean — no issues found',
  ]);

  const runBuild = () => {
    setLogs((l) => [...l, '▶ Running build...', '✅ Build completed in 1.8s']);
  };

  const clear = () => setLogs([]);

  return (
    <div className="flex h-64 min-h-[12rem] w-full flex-col overflow-hidden rounded-md border border-white/10 bg-[#0b0f17]">
      <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70">
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4 text-emerald-300/80" />
          Terminal
        </div>
        <div className="flex items-center gap-2">
          <button onClick={runBuild} className="inline-flex items-center gap-1 rounded border border-white/10 bg-white/5 px-2 py-1 hover:bg-white/10">
            <Play className="h-3.5 w-3.5" /> Run
          </button>
          <button onClick={clear} className="inline-flex items-center gap-1 rounded border border-white/10 bg-white/5 px-2 py-1 hover:bg-white/10">
            <Trash2 className="h-3.5 w-3.5" /> Clear
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-auto font-mono text-[12px] leading-6 text-white/80">
        <pre className="px-3 py-2">
{logs.map((line, i) => `~ ${line}`).join('\n')}
        </pre>
      </div>
    </div>
  );
};

const IDEWorkspace = () => {
  return (
    <section className="relative mx-auto mt-10 w-full max-w-7xl px-4">
      <div className="grid h-[720px] grid-cols-12 gap-4">
        <div className="col-span-12 overflow-hidden rounded-md border border-white/10 md:col-span-3">
          <IDESidebar />
        </div>
        <div className="col-span-12 flex flex-col gap-4 md:col-span-9">
          <div className="flex-1 overflow-hidden rounded-md border border-white/10">
            <EditorPane />
          </div>
          <TerminalPanel />
        </div>
      </div>
    </section>
  );
};

export default IDEWorkspace;
