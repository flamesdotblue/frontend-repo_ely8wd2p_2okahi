import React from 'react';
import IDETopBar from './components/IDETopBar';
import IDESidebar from './components/IDESidebar';
import EditorPane from './components/EditorPane';
import StatusBar from './components/StatusBar';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0f17] text-white antialiased">
      {/* Top menu + tabs */}
      <IDETopBar />

      {/* Main IDE layout */}
      <div className="grid h-[calc(100vh-96px)] grid-cols-[64px_1fr] gap-0">
        {/* Left activity + explorer */}
        <div className="col-span-1">
          <IDESidebar />
        </div>

        {/* Editor area */}
        <div className="col-span-1">
          <EditorPane />
        </div>
      </div>

      {/* Status bar */}
      <StatusBar />
    </div>
  );
}

export default App;
