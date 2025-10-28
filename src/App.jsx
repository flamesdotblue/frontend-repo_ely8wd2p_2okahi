import HeaderBar from './components/HeaderBar';
import Hero3D from './components/Hero3D';
import ProjectsGrid from './components/ProjectsGrid';
import ContactSection from './components/ContactSection';

function About() {
  return (
    <section id="about" className="px-6 py-20 bg-[#0f1115]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <img
          src="https://avatars.githubusercontent.com/u/83751837?v=4"
          alt="Rugved Kadu"
          className="w-40 h-40 rounded-xl object-cover border border-emerald-500/20 shadow"
          loading="lazy"
        />
        <div className="max-w-xl text-left">
          <h3 className="text-4xl font-semibold mb-4 bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
            About Me
          </h3>
          <p className="text-zinc-300/90 leading-relaxed mb-4">
            I'm a full-stack web developer specializing in MERN and AI-powered applications. I enjoy building
            performant systems and polished interfaces with an IDE-like workflow.
          </p>
          <p className="text-zinc-300/90 leading-relaxed">
            Outside of coding, I explore new tech, contribute to open source, and share with the developer community.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0e11] via-[#0f1115] to-[#0b0e11] text-zinc-100">
      <HeaderBar />
      <main className="pt-16">
        <Hero3D />
        <About />
        <ProjectsGrid />
        <ContactSection />
      </main>
      <footer className="bg-[#0b0e11] text-center py-6 text-zinc-400 text-sm select-none border-t border-emerald-500/10">
        © 2025 Rugved Kadu. All rights reserved.
      </footer>
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
