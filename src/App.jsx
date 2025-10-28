import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0f17] text-white antialiased">
      {/* Subtle starry background */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.08),transparent_60%),radial-gradient(ellipse_at_bottom,_rgba(168,85,247,0.08),transparent_60%)]" />

      <header className="sticky top-0 z-50 backdrop-blur bg-[#0b0f17]/60 border-b border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-white/80">Rugved.dev</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
