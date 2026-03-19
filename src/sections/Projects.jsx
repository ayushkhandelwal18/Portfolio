import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';
import { Section, SectionHeader } from '../components/Section';
import { Badge } from '../components/Badge';

const PROJECTS = [
  {
    title: "TrackMyHunt",
    description: " A job-hunt management platform designed to help students and developers organize their career journey. It provides a centralized dashboard to track applications, plan opportunities, manage skills, and store resources.",
    tags: ["MERN", "OAuth", "JWT", "EMAILJS"],
    github: "https://github.com/ayushkhandelwal18/TrackMyHunt",
    live: "https://trackmyhunt.vercel.app/",
  },
  {
    title: "AI-Buddy",
    description: "Intelligent AI chatbot integrating Gemini API, featuring syntax highlighting, typing animations, and JWT + cookie-based auth.",
    tags: ["MERN", "Gemini API", "JWT", "Cookies"],
    github: "https://github.com/ayushkhandelwal18/AI-Chat-Bot",
    live: "https://ai-chat-bot-cauj.onrender.com/",
  },
  {
    title: "E-Commerce Backend",
    description: "Modular backend architecture focused on robust filtering, sorting, pagination, and role-based access control.",
    tags: ["Node.js", "Express", "JWT Auth", "REST API"],
    github: "https://github.com/ayushkhandelwal18/Backend-ecommerce",
  },
  {
    title: "User Management System",
    description: "Highly secure user authentication system implementing OTP verification, password resets, JWT, and bcrypt.",
    tags: ["MongoDB", "Express", "Nodejs", "Bcrypt"],
    github: "https://github.com/ayushkhandelwal18/USER-MANAGEMENT-SYSTEM",
  }
];

export function Projects() {
  return (
    <Section id="projects" className="bg-[#0a0a0a] relative border-t border-white/[0.05]">
      <SectionHeader 
        title="Featured Projects" 
        subtitle="Some of my best work in web development and backend projects." 
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 relative z-10">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.5, ease: 'easeOut' }}
            className="group relative"
          >
            {/* Project Inner Card */}
            <div className="glass-card h-full p-8 md:p-10 flex flex-col items-start bg-gradient-to-br from-[#121212] to-[#0a0a0a] border border-white/5 hover:border-brand-500/30 overflow-hidden isolate relative z-10 neon-glow transition-all duration-500 hover:-translate-y-2">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-brand-500/10 rounded-full blur-[80px] -z-10 group-hover:bg-brand-400/20 transition-all duration-700 pointer-events-none" />

              <div className="flex justify-between items-center w-full mb-8">
                <FolderGit2 className="w-10 h-10 text-brand-400 opacity-80" />
                <div className="flex gap-4">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-brand-400 transition-colors">
                      <Github className="w-6 h-6" />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-brand-400 transition-colors">
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-300 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-400 leading-relaxed mb-8 flex-grow font-light">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5 w-full">
                {project.tags.map(tag => (
                  <Badge key={tag} variant="primary" className="font-mono text-[0.7rem] uppercase tracking-widest bg-brand-500/5 text-brand-300 border-brand-500/10 group-hover:bg-brand-500/10">{tag}</Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 pt-10 text-center border-t border-white/5 relative z-10"
      >
        <p className="text-slate-400 text-lg mb-6">Want to see more of my code?</p>
        <a 
          href="https://github.com/ayushkhandelwal18" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 glass-card text-brand-400 font-semibold uppercase tracking-wider text-sm hover:text-brand-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all"
        >
          <Github className="w-5 h-5" />
          View More Projects on GitHub
        </a>
      </motion.div>

    </Section>
  );
}
