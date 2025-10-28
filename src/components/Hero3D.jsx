import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Colorful gradient halos - pointer events disabled so Spline stays interactive */}
      <div className="pointer-events-none absolute -inset-40 opacity-60 mix-blend-screen">
        <div className="absolute left-1/4 top-10 h-72 w-72 rounded-full bg-yellow-400 blur-3xl" />
        <div className="absolute right-1/3 top-1/3 h-80 w-80 rounded-full bg-fuchsia-500 blur-3xl" />
        <div className="absolute left-1/3 bottom-10 h-64 w-64 rounded-full bg-cyan-400 blur-3xl" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 bg-gradient-to-r from-yellow-300 via-rose-300 to-sky-300 bg-clip-text text-transparent">
          Hi, I'm Rugved Kadu
        </h2>
        <p className="text-base md:text-lg text-zinc-200/90 mb-8">
          MERN & AI developer passionate about building modern, intelligent web applications.
          Let’s build something impactful together!
        </p>
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-md px-5 py-2.5 bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 text-black font-semibold shadow hover:brightness-110 active:brightness-95 transition"
        >
          <Rocket size={18} /> View Projects
        </a>
      </div>
    </section>
  );
}
