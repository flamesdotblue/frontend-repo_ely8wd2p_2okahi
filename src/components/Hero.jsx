import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-[80vh] md:min-h-[85vh] overflow-hidden bg-[#0b0f17]">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay - doesn't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b0f17]/40 via-[#0b0f17]/60 to-[#0b0f17]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24 pb-16 md:pt-32 md:pb-24 text-center">
        {/* Mac window chrome vibe */}
        <div className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
          <span className="ml-3 text-xs text-white/70">VS Code theme • Mac aesthetic</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight text-white">
          Hi, I'm <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">Rugved Kadu</span>
        </h1>
        <p className="mt-4 text-base md:text-lg text-white/70 max-w-3xl mx-auto">
          MERN & AI developer passionate about building modern, intelligent web applications. Let’s build something impactful together!
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-cyan-200 hover:bg-cyan-400/20 transition"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-white/80 hover:bg-white/10 transition"
          >
            Get in Touch
          </a>
        </div>

        {/* Avatar / Photo Substitute */}
        <div className="mt-10 flex justify-center">
          <div className="relative h-28 w-28 rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/30 to-purple-500/30 p-1 shadow-xl">
            <div className="flex h-full w-full items-center justify-center rounded-xl bg-[#0b0f17] text-2xl font-bold text-white/80">
              RK
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
