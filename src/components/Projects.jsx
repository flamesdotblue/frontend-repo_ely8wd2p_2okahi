import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'HealthFYI Dashboard',
    description: 'Track health, fitness, and nutrition in a modern web UI.',
    cta: 'View Project →',
    href: '#',
    accent: 'from-emerald-400/30 to-teal-500/30',
  },
  {
    title: 'Anonymous Polls',
    description: 'Create anonymous polls and get honest feedback.',
    cta: 'Try it →',
    href: '#',
    accent: 'from-cyan-400/30 to-blue-500/30',
  },
  {
    title: 'GoatPad Text Editor',
    description: 'Collaborative online text/code editor with sync features.',
    cta: 'GitHub →',
    href: '#',
    accent: 'from-purple-400/30 to-fuchsia-500/30',
  },
  {
    title: 'Text Summarizer',
    description: 'Summarize long content using AI in seconds.',
    cta: 'Try it →',
    href: '#',
    accent: 'from-amber-400/30 to-orange-500/30',
  },
  {
    title: 'StudyBuddy AI Bot',
    description: 'AI assistant for students: help, tips, and academic answers.',
    cta: 'Try Bot →',
    href: '#',
    accent: 'from-pink-400/30 to-rose-500/30',
  },
  {
    title: 'BlinkFast Flutter App',
    description: 'Modern e-commerce app for seamless product browsing.',
    cta: 'In Progress →',
    href: '#',
    accent: 'from-sky-400/30 to-indigo-500/30',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative bg-[#0b0f17] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-cyan-300/80">Projects</span>
          <span className="h-px flex-1 bg-gradient-to-r from-cyan-400/30 to-transparent" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.href}
              className="group relative rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div className={`absolute -inset-px rounded-xl bg-gradient-to-br ${p.accent} opacity-0 blur transition group-hover:opacity-60`} />
              <div className="relative">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  <ExternalLink className="h-4 w-4 text-white/50 transition group-hover:text-white/80" />
                </div>
                <p className="text-sm text-white/70">{p.description}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-cyan-300">
                  <span className="text-sm">{p.cta}</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
