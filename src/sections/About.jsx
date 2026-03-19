import React from 'react';
import { motion } from 'framer-motion';
import { Code, Lightbulb, Rocket } from 'lucide-react';
import { Section, SectionHeader } from '../components/Section';
import { Badge } from '../components/Badge';

export function About() {
const quickFacts = [
  { label: "Role", value: "Aspiring Software Developer" },
  { label: "Education", value: "IIIT Kota (2023–2027)" },
  { label: "CGPA", value: "8.06" },
  { label: "Availability", value: "Open to Internships & Roles" }
];

  return (
    <Section id="about" className="glass relative z-20 border-t border-white/[0.05] shadow-[0_-10px_50px_rgba(0,0,0,0.5)]">
      <SectionHeader 
        title="About Me" 
        subtitle="Hi Everyone, I’m Ayush Khandelwal, an engineering student at IIIT Kota." 
      />

      <div className="grid md:grid-cols-12 gap-12 lg:gap-24 items-center">
        {/* Left Col: Text */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-6 space-y-6 text-slate-300 text-lg font-light leading-relaxed"
        >
<div className="flex items-start gap-4">
  <span className="p-2 glass-card rounded-lg text-brand-400 mt-1">
    <Code className="w-5 h-5"/>
  </span>
  <p>
    I’m a passionate <strong className="text-white font-semibold">Full Stack (MERN) Developer</strong> focused on building impactful projects and gaining real-world experience. I enjoy working with modern web technologies and developing scalable applications.
  </p>
</div>

<div className="flex items-start gap-4">
  <span className="p-2 glass-card rounded-lg text-neon-purple mt-1">
    <Rocket className="w-5 h-5"/>
  </span>
  <p>
    I’m an <strong className="text-white font-semibold">aspiring software developer</strong> actively learning and improving my problem-solving skills through Data Structures and Algorithms (<strong className="text-white font-semibold">DSA</strong>).
  </p>
</div>

<div className="flex items-start gap-4">
  <span className="p-2 glass-card rounded-lg text-accent mt-1">
    <Lightbulb className="w-5 h-5"/>
  </span>
  <p>
    I’m deeply interested in <strong className="text-white font-semibold">innovation and emerging technologies</strong>, and I enjoy exploring new ideas to build meaningful and efficient solutions.
  </p>
</div>
        </motion.div>

        {/* Right Col: Stats/Box */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-6 relative"
        >
          {/* Developer Decorative Frame */}
          <div className="absolute inset-x-0 -inset-y-6 bg-gradient-to-br from-brand-600/30 to-transparent blur-3xl opacity-40 z-0" />
          
          <div className="glass-card p-8 md:p-10 relative z-10 space-y-8 neon-glow backdrop-blur-2xl bg-[#0f0f0f]/90">
            <div className="flex justify-between items-start border-b border-white/10 pb-6">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-1">Profile Snapshot</h3>
                <p className="text-sm text-brand-400 font-mono">{"//"}Quick Highlights</p>
              </div>
              <Badge variant="accent" className="font-mono text-xs animate-pulse shadow-sm">B.Tech ECE</Badge>
            </div>
            
            <dl className="grid grid-cols-2 gap-x-6 gap-y-8">
              {quickFacts.map((fact, idx) => (
                <div key={idx} className="space-y-2">
                  <dt className="text-sm font-medium text-slate-500 uppercase tracking-wider">{fact.label}</dt>
                  <dd className="text-lg font-medium text-white shadow-sm">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
