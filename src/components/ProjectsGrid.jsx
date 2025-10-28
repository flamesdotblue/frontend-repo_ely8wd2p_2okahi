import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'HealthFYI Dashboard',
    desc: 'Track health, fitness, and nutrition in a modern web UI.',
    href: 'https://healthfyi.rugvddev.site/',
    cta: 'View Project',
  },
  {
    title: 'Anonymous Polls',
    desc: 'Create anonymous polls and get honest feedback.',
    href: 'https://anonymouspolls.rugvddev.site/',
    cta: 'Try it',
  },
  {
    title: 'GoatPad Text Editor',
    desc: 'Collaborative online text/code editor with sync features.',
    href: 'https://github.com/rugvedkadu06/GoatPad_TextEditor',
    cta: 'GitHub',
  },
  {
    title: 'Text Summarizer',
    desc: 'Summarize long content using AI in seconds.',
    href: 'https://txtsummarizr.rugvddev.site/',
    cta: 'Try it',
  },
  {
    title: 'StudyBuddy AI Bot',
    desc: 'AI assistant for students: help, tips, and academic answers.',
    href: 'https://studybuddy-frontend.onrender.com/',
    cta: 'Try Bot',
  },
  {
    title: 'BlinkFast Flutter App',
    desc: 'Modern e-commerce app for seamless product browsing.',
    href: '#',
    cta: 'In Progress',
  },
];

export default function ProjectsGrid() {
  return (
    <section id="projects" className="px-6 py-20 max-w-6xl mx-auto">
      <h3 className="text-4xl font-semibold text-center mb-12 bg-gradient-to-r from-yellow-300 via-emerald-300 to-sky-300 bg-clip-text text-transparent">
        Projects
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <article
            key={p.title}
            className="group relative rounded-xl border border-yellow-400/40 bg-zinc-900/70 p-5 shadow transition hover:border-yellow-300/70 hover:shadow-yellow-300/10"
            style={{ animation: `fadeInUp 0.6s ease ${idx * 0.08}s 1 forwards` }}
          >
            <h4 className="text-lg font-semibold mb-2 bg-gradient-to-r from-yellow-200 to-amber-300 bg-clip-text text-transparent">
              {p.title}
            </h4>
            <p className="text-zinc-300/90 mb-4 leading-relaxed">{p.desc}</p>
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-yellow-300 font-semibold text-sm hover:underline"
            >
              {p.cta} <ExternalLink size={16} />
            </a>
            <div className="pointer-events-none absolute -inset-0.5 rounded-xl bg-gradient-to-br from-yellow-400/0 via-amber-400/0 to-fuchsia-500/0 opacity-0 blur-xl transition group-hover:opacity-40" />
          </article>
        ))}
      </div>
    </section>
  );
}
