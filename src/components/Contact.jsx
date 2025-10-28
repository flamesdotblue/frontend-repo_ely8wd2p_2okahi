import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative bg-[#0b0f17] py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="mb-8 flex items-center gap-2">
          <span className="mx-auto text-xs uppercase tracking-widest text-cyan-300/80">Get in Touch</span>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-12">
          <p className="text-white/80">Open to collaborations, opportunities, and interesting ideas.</p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white/80 hover:bg-white/10"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white/80 hover:bg-white/10"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white/80 hover:bg-white/10"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>

          <p className="mt-8 text-xs text-white/50">© {new Date().getFullYear()} Rugved Kadu</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
