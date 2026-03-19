import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';

const ROLES = [
  "Full Stack Developer",
  "Software Developer",
  "Web Developer",
  "MERN Stack Developer",
  "Open for Internships",
  "Open for Opportunities",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(prev => (prev + 1) % ROLES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <Section id="home" className="min-h-screen flex items-center pt-24 md:pt-32 pb-20 relative overflow-visible">
      <div className="absolute top-1/4 right-0 w-[40rem] h-[40rem] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -left-20 bottom-0 w-[30rem] h-[30rem] bg-neon-purple/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div 
        variants={containerVars}
        initial="hidden"
        animate="show"
        className="max-w-5xl relative z-10 flex flex-col items-start space-y-8"
      >
        <motion.div variants={itemVars} className="space-y-6 w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-sm font-mono tracking-wide">
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
            <span className="text-white/60">C://</span> Welcome to my digital space!
          </div>
          
          <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-bold tracking-tighter text-white leading-[1.05]">
            I'm <span className="text-gradient hover:opacity-90 transition">Ayush Khandelwal</span>
            <br />
            <div className="h-[1.2em] relative flex items-center mt-2 group overflow-hidden">
              <span className="mr-15 text-slate-500/50 hidden md:inline-block">{"<"}</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100"
                >
                  {ROLES[roleIndex]}
                </motion.span>
              </AnimatePresence>
              <span className="ml-auto text-slate-500/50 hidden md:inline-block">{"/>"}</span>
            </div>
          </h1>
        </motion.div>

        <motion.div variants={itemVars} className="space-y-4 max-w-2xl">
          <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed">
            An enthusiastic developer who loves to build, learn, and innovate. While still on my learning journey, I enjoy exploring different technologies and working on meaningful projects.
          </p>
          <p className="text-base text-slate-400 font-light leading-relaxed">
            This space showcases my projects, skills, and developer journey. I’m always looking for ways to collaborate, grow, and make a difference through tech.
          </p>
        </motion.div>

        <motion.div variants={itemVars} className="flex flex-wrap items-center gap-5 pt-8">
          <Button variant="primary" size="lg" className="rounded-full px-8 neon-glow group" asChild>
            <a href="#projects">
              Explore Projects
            </a>
          </Button>
<Button variant="outline" size="lg" className="rounded-full px-8" asChild>
  <a 
    href="https://drive.google.com/file/d/1Vkdjj9zUY9wOMO_AIaoh0p_kkrY4d45j/view?usp=sharing" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    Resume
  </a>
</Button>
        </motion.div>
        
        <motion.div 
          variants={itemVars}
          className="pt-24 md:pt-32 hidden sm:flex items-center gap-4 text-sm font-mono text-slate-500 animate-bounce cursor-pointer group hover:text-brand-400 transition"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ArrowDown className="w-4 h-4" />
          Scroll to discover
        </motion.div>

      </motion.div>
    </Section>
  );
}
