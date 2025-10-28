import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative bg-[#0b0f17] py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-10 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
          <div className="mb-6 flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-cyan-300/80">About Me</span>
            <span className="h-px flex-1 bg-gradient-to-r from-cyan-400/30 to-transparent" />
          </div>

          <p className="text-white/80 leading-relaxed">
            I'm a full-stack web developer specializing in MERN (MongoDB, Express, React, Node.js) and AI-powered applications. I love turning complex problems into elegant, user-friendly solutions. With a solid background in Computer Science and real-world projects, I am constantly learning and evolving.
          </p>
          <p className="mt-4 text-white/70 leading-relaxed">
            When I'm not coding, I enjoy exploring new technologies, contributing to open-source, and connecting with the developer community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
