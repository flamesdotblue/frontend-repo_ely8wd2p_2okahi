import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#0f1115]">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xVcGsBa0crFDHR-t/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle industrial glows - keep interactive */}
      <div className="pointer-events-none absolute -inset-32 opacity-60">
        <div className="absolute left-1/4 top-10 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute right-1/3 top-1/3 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute left-1/3 bottom-10 h-72 w-72 rounded-full bg-lime-400/10 blur-3xl" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
          Android Studio Vibes
        </h2>
        <p className="text-base md:text-lg text-zinc-200/90 mb-8">
          Dark, industrial, and interactive. A portfolio that feels like an IDE.
        </p>
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-md px-5 py-2.5 bg-emerald-500 text-black font-semibold shadow hover:brightness-110 active:brightness-95 transition"
        >
          <Rocket size={18} /> View Projects
        </a>
      </div>
    </section>
  );
}
