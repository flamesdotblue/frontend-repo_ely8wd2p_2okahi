import { useEffect } from 'react';
import { Code2 } from 'lucide-react';

export default function HeaderBar() {
  // Add a subtle emoji cursor trail per user vibe (no blocking interactions)
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.textContent = '⚡';
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
    <header className="fixed top-0 w-full z-50 backdrop-blur bg-black/70 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 select-none">
          <span className="p-1.5 rounded-md bg-gradient-to-br from-yellow-400 to-amber-500 text-black">
            <Code2 size={18} />
          </span>
          <h1 className="text-lg font-semibold tracking-wide">
            <span className="bg-gradient-to-r from-yellow-300 via-amber-200 to-emerald-300 bg-clip-text text-transparent">
              Rugved Kadu
            </span>
          </h1>
        </div>
        <nav className="flex items-center gap-6 text-sm uppercase tracking-wide">
          <a href="#about" className="text-zinc-300 hover:text-yellow-300 transition">About</a>
          <a href="#projects" className="text-zinc-300 hover:text-yellow-300 transition">Projects</a>
          <a href="#contact" className="text-zinc-300 hover:text-yellow-300 transition">Contact</a>
        </nav>
      </div>
    </header>
  );
}
