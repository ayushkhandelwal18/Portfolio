import React from 'react';
import { motion } from 'framer-motion';
import { Database, Code2, Layers, Cpu, Wrench, Globe } from 'lucide-react';
import { Section, SectionHeader } from '../components/Section';
import { Badge } from '../components/Badge';

const CATEGORIES = [
  {
    title: "Programming Languages",
    icon: <Code2 className="w-5 h-5 text-brand-400" />,
    skills: ["C++", "JavaScript", "Python (Familiar)", "C (Familiar)"],
  },
  {
    title: "Backend",
    icon: <Database className="w-5 h-5 text-neon-purple" />,
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "SQL"],
  },
  {
    title: "Frontend",
    icon: <Globe className="w-5 h-5 text-accent" />,
    skills: ["HTML", "CSS", "React", "Vite", "Tailwind CSS"],
  },
  {
    title: "Tools & Softwares",
    icon: <Wrench className="w-5 h-5 text-pink-400" />,
    skills: ["Git", "GitHub", "VS Code", "Postman", "MongoDB Atlas", "MySQL", "Docker", "Vercel", "Render"],
  },
  {
    title: "Core Subjects",
    icon: <Layers className="w-5 h-5 text-amber-400" />,
    skills: ["DSA", "OOP", "OS", "DBMS", "Microservices (basics)"],
  },
  {
    title: "ECE Tools & Softwares",
    icon: <Cpu className="w-5 h-5 text-emerald-400" />,
    skills: ["MATLAB", "LTSpice", "CST Studio", "OptiSystem", "EasyEDA", "Scilab", "Keil 8051"],
  }
];

export function TechStack() {
  return (
    <Section id="tech" className="relative bg-[#0a0a0a]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-brand-600/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <SectionHeader 
        title="Skills & Technologies" 
        subtitle="Languages, frameworks, and tools I use to map ideas to reality." 
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        {CATEGORIES.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card p-6 flex flex-col items-start"
          >
            <div className="mb-6 p-3 rounded-lg bg-white/5 border border-white/10 ring-1 ring-white/10 shadow-inner">
              {category.icon}
            </div>
            
            <h3 className="text-xl font-semibold text-slate-100 mb-5 tracking-tight">
              {category.title}
            </h3>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {category.skills.map(skill => (
                <Badge key={skill} variant="secondary" className="bg-[#141414] hover:border-brand-500/50 hover:text-brand-300 transition-colors shadow-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
