import { useEffect } from 'react';
import { Code2 } from 'lucide-react';

export default function HeaderBar() {
  // Subtle emoji cursor trail - unobtrusive
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.textContent = '⚙️';
    cursor.style.position = 'fixed';
    cursor.style.pointerEvents = 'none';
    cursor.style.zIndex = '40';
    cursor.style.transform = 'translate(-50%, -50%)';
    cursor.style.transition = 'transform 0.06s linear';
    document.body.appendChild(cursor);

    const move = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };
    window.addEventListener('mousemove', move);
    return () => {
      window.removeEventListener('mousemove', move);
      cursor.remove();
    };
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur bg-[#0b0e11]/80 border-b border-emerald-500/20">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 select-none">
          <span className="p-1.5 rounded-md bg-gradient-to-br from-emerald-400 to-teal-500 text-black">
            <Code2 size={18} />
          </span>
          <h1 className="text-lg font-semibold tracking-wide">
            <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent">
              Rugved Kadu
            </span>
          </h1>
        </div>
        <nav className="flex items-center gap-6 text-xs md:text-sm uppercase tracking-wide">
          <a href="#about" className="text-zinc-300 hover:text-emerald-300 transition">About</a>
          <a href="#projects" className="text-zinc-300 hover:text-emerald-300 transition">Projects</a>
          <a href="#contact" className="text-zinc-300 hover:text-emerald-300 transition">Contact</a>
        </nav>
      </div>
      {/* Android Studio style tab stripe */}
      <div className="h-0.5 bg-gradient-to-r from-emerald-500/60 via-teal-500/40 to-cyan-500/40" />
    </header>
  );
}
