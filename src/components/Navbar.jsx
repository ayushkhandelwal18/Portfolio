import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Code2,FileUser} from 'lucide-react';
import { cn } from '../utils/cn';

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#tech', label: 'Tech Stack' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const SOCIAL_LINKS = [
  { href: 'https://www.linkedin.com/in/ayush-khandelwal-5234a3288/', icon: <Linkedin className="w-5 h-5"/>, label: "LinkedIn" },
  { href: 'https://github.com/ayushkhandelwal18', icon: <Github className="w-5 h-5"/>, label: "GitHub" },
  { href: 'https://drive.google.com/file/d/1Vkdjj9zUY9wOMO_AIaoh0p_kkrY4d45j/view?usp=sharing', icon: <FileUser className="w-5 h-5"/>, label: "Resume" },
  { href: 'https://codolio.com/profile/ayushk26', icon: <Code2 className="w-5 h-5"/>, label: "Codolio" }, // using terminal as generic Dev profile icon
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
      isScrolled && "glass border-white/[0.05] py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
    )}>
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#home" className="text-xl font-black tracking-tighter text-white flex items-center gap-1 group relative overflow-hidden">
          {/* <span className="text-brand-400 group-hover:-translate-x-full transition-transform absolute w-full inset-y-0">&lt;/&gt;</span> */}
          <span className="group-hover:pl-5 transition-all">Ayush</span>
          <span className="text-brand-400 font-mono">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300 bg-[#0f0f0f]/80 px-6 py-2.5 rounded-full border border-white/5 backdrop-blur-md shadow-inner">
          {NAV_LINKS.map(link => (
            <a 
              key={link.href} 
              href={link.href}
              className="hover:text-brand-300 transition-colors py-1 px-2 relative group uppercase tracking-[0.1em] text-[0.75rem]"
            >
              <div className="absolute inset-x-2 -bottom-2 h-[2px] bg-brand-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social Icons Desktop */}
        <div className="hidden lg:flex items-center gap-3">
           {SOCIAL_LINKS.map((link, idx) => (
             <a 
               key={idx} 
               href={link.href} 
               title={link.label}
               className="p-2 text-slate-400 hover:text-brand-400 hover:bg-brand-500/10 rounded-full transition-all border border-transparent hover:border-brand-500/20"
             >
               {link.icon}
             </a>
           ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-slate-300 hover:text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={cn(
        "lg:hidden absolute top-full left-0 right-0 glass border-t border-white/5 flex flex-col p-6 space-y-4 shadow-2xl transition-all duration-300 origin-top overflow-hidden",
        isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 h-0 p-0"
      )}>
        {NAV_LINKS.map(link => (
          <a
            key={link.href}
            href={link.href}
            className="text-slate-200 hover:text-brand-400 py-3 border-b border-white/5 text-lg font-light tracking-wide uppercase"
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </a>
        ))}
        
        <div className="flex gap-4 pt-4 pb-2">
           {SOCIAL_LINKS.map((link, idx) => (
             <a 
               key={idx} 
               href={link.href} 
               className="p-3 bg-white/5 rounded-full text-slate-300 hover:text-brand-400 hover:bg-brand-500/10"
             >
               {link.icon}
             </a>
           ))}
        </div>
      </div>
    </header>
  );
}
