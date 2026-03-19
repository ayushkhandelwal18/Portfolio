import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { TechStack } from './sections/TechStack';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] font-sans text-slate-50 selection:bg-brand-500/30 selection:text-brand-200">
      {/* Global Background Grid Pattern */}
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-40"></div>
      
      <Navbar />

      <main className="relative z-10 flex flex-col space-y-0 selection:bg-neon-purple/30 selection:text-white">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-12 border-t border-white/[0.05] text-center bg-[#0a0a0a]">
        <h2 className="text-xl font-bold mb-6 text-white tracking-widest font-mono">
          <span className="text-brand-400">AYUSH</span>.DEV
        </h2>
        <div className="flex justify-center items-center gap-6 mb-8 text-slate-500">
          <a href="https://www.linkedin.com/in/ayush-khandelwal-5234a3288/" target="_blank" rel="noreferrer" className="hover:text-brand-400 transition-colors uppercase text-xs tracking-[0.2em]">LinkedIn</a>
          <span className="w-1 h-1 rounded-full bg-slate-700 block"></span>
          <a href="https://github.com/ayushkhandelwal18" target="_blank" rel="noreferrer" className="hover:text-brand-400 transition-colors uppercase text-xs tracking-[0.2em]">GitHub</a>
          <span className="w-1 h-1 rounded-full bg-slate-700 block"></span>
          <a href="https://leetcode.com/u/khayksh0/" target="_blank" rel="noreferrer" className="hover:text-brand-400 transition-colors uppercase text-xs tracking-[0.2em]">LeetCode</a>
          <span className="w-1 h-1 rounded-full bg-slate-700 block"></span>
          <a href="https://codolio.com/profile/ayushk26" target="_blank" rel="noreferrer" className="hover:text-brand-400 transition-colors uppercase text-xs tracking-[0.2em]">Codolio</a>
        </div>
        <p className="text-slate-500 text-sm font-mono opacity-60">
          Designed & Built by Ayush Khandelwal <span className="text-brand-500 animate-pulse">■</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
