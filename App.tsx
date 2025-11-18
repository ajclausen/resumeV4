import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { CommandPalette } from './components/CommandPalette';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-accent-400 selection:text-slate-950 print:bg-white print:text-black">
      <CommandPalette />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
};

export default App;