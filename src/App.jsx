import IDETopBar from './components/IDETopBar';
import Hero3D from './components/Hero3D';
import IDEWorkspace from './components/IDEWorkspace';
import StatusBar from './components/StatusBar';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0e11] via-[#0f1115] to-[#0b0e11] text-zinc-100">
      <IDETopBar />
      <main className="pt-2">
        <Hero3D />
        <IDEWorkspace />
      </main>
      <StatusBar />
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
