import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';

const TabButton = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`rounded-t-md border-x border-t px-3 py-1.5 text-xs transition ${
      active ? 'border-white/20 bg-[#121826] text-white' : 'border-transparent text-white/60 hover:text-white/80'
    }`}
  >
    {label}
  </button>
);

const LineNumbers = ({ lines }) => (
  <div className="select-none border-r border-white/10 bg-[#0e1421]/60 px-3 py-4 text-right text-xs leading-6 text-white/40">
    {Array.from({ length: lines }).map((_, i) => (
      <div key={i}>{i + 1}</div>
    ))}
  </div>
);

const CodeBlock = ({ children }) => (
  <div className="flex overflow-hidden rounded-b-md border border-white/10">
    <LineNumbers lines={children.toString().split('\n').length} />
    <pre className="flex-1 overflow-x-auto bg-[#0e1421]/70 px-4 py-4 text-[13px] leading-6 text-white/80 font-mono">{children}</pre>
  </div>
);

const EditorPane = () => {
  const [active, setActive] = useState('README.md');

  const readme = `# Hi, I'm Rugved Kadu\n\nMERN & AI developer passionate about building modern, intelligent web applications.\n\n> Let’s build something impactful together!\n\n- Specialties: MongoDB, Express, React, Node.js\n- Focus: AI-powered UX, real-world product thinking\n- Interests: Open-source, dev community, learning by building`;

  const projects = `{
  "projects": [
    { "name": "HealthFYI Dashboard", "desc": "Track health, fitness, and nutrition in a modern web UI.", "cta": "View Project" },
    { "name": "Anonymous Polls", "desc": "Create anonymous polls and get honest feedback.", "cta": "Try it" },
    { "name": "GoatPad Text Editor", "desc": "Collaborative text/code editor with sync.", "cta": "GitHub" },
    { "name": "Text Summarizer", "desc": "Summarize long content using AI in seconds.", "cta": "Try it" },
    { "name": "StudyBuddy AI Bot", "desc": "AI assistant for students.", "cta": "Try Bot" },
    { "name": "BlinkFast Flutter App", "desc": "E‑commerce app for seamless browsing.", "cta": "In Progress" }
  ]
}`;

  const contact = `export default function Contact() {\n  return (\n    <div className=\"contact\">\n      <a href=\"mailto:hello@example.com\">Email</a>\n      <a href=\"#\">LinkedIn</a>\n      <a href=\"#\">GitHub</a>\n    </div>\n  );\n}`;

  return (
    <div className="flex h-full w-full flex-col">
      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-[#0b0f17] px-3 pt-2">
        {['README.md', 'projects.json', 'contact.tsx', 'playground.spline'].map((t) => (
          <TabButton key={t} label={t} active={active === t} onClick={() => setActive(t)} />
        ))}
      </div>

      {/* Editor content */}
      <div className="flex-1 overflow-auto bg-[#0b0f17] p-3">
        <div className="rounded-md border border-white/10 bg-[#0b0f17]/60 p-3">
          {active === 'README.md' && (
            <CodeBlock>{readme}</CodeBlock>
          )}
          {active === 'projects.json' && (
            <CodeBlock>{projects}</CodeBlock>
          )}
          {active === 'contact.tsx' && (
            <CodeBlock>{contact}</CodeBlock>
          )}
          {active === 'playground.spline' && (
            <div className="relative h-[480px] w-full overflow-hidden rounded-md border border-white/10">
              <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-[#0b0f17]/20" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditorPane;
