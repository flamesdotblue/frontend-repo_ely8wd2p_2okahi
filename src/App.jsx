import HeaderBar from './components/HeaderBar';
import Hero3D from './components/Hero3D';
import ProjectsGrid from './components/ProjectsGrid';
import ContactSection from './components/ContactSection';

function About() {
  return (
    <section id="about" className="px-6 py-20 bg-zinc-950/70">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <img
          src="https://avatars.githubusercontent.com/u/83751837?v=4"
          alt="Rugved Kadu"
          className="w-40 h-40 rounded-xl object-cover border border-white/10 shadow"
          loading="lazy"
        />
        <div className="max-w-xl text-left">
          <h3 className="text-4xl font-semibold mb-4 bg-gradient-to-r from-yellow-300 via-emerald-300 to-sky-300 bg-clip-text text-transparent">
            About Me
          </h3>
          <p className="text-zinc-300/90 leading-relaxed mb-4">
            I'm a full-stack web developer specializing in MERN (MongoDB, Express, React, Node.js) and AI-powered
            applications. I love turning complex problems into elegant, user-friendly solutions. With a solid background
            in Computer Science and real-world projects, I am constantly learning and evolving.
          </p>
          <p className="text-zinc-300/90 leading-relaxed">
            When I'm not coding, I enjoy exploring new technologies, contributing to open-source, and connecting with the
            developer community.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-zinc-100">
      <HeaderBar />
      <main className="pt-16">
        <Hero3D />
        <About />
        <ProjectsGrid />
        <ContactSection />
      </main>
      <footer className="bg-zinc-950 text-center py-6 text-zinc-400 text-sm select-none">
        © 2025 Rugved Kadu. All rights reserved.
      </footer>
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
