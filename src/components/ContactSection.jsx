import { Mail, Github, Linkedin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="text-center px-6 py-20 max-w-4xl mx-auto">
      <h3 className="text-4xl font-semibold mb-8 bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
        Get in Touch
      </h3>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="mailto:rugveddevmain@gmail.com"
          className="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-emerald-500 text-black font-semibold shadow hover:brightness-110 active:brightness-95 transition"
        >
          <Mail size={18} /> Email
        </a>
        <a
          href="https://linkedin.com/in/kadurugved/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-zinc-800 text-zinc-100 font-semibold shadow hover:bg-zinc-700 transition"
        >
          <Linkedin size={18} /> LinkedIn
        </a>
        <a
          href="https://github.com/rugvedkadu06/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-zinc-800 text-zinc-100 font-semibold shadow hover:bg-zinc-700 transition"
        >
          <Github size={18} /> GitHub
        </a>
      </div>
    </section>
  );
}
