import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { Section, SectionHeader } from '../components/Section';
import { Button } from '../components/Button';
import emailjs from '@emailjs/browser';

export function Contact() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSubmitting(false);
          setSubmitStatus('success');
          formRef.current.reset();
          
          setTimeout(() => setSubmitStatus(null), 5000);
        },
        (error) => {
          console.error('EmailJS Error:', error);
          setIsSubmitting(false);
          setSubmitStatus('error');
          setTimeout(() => setSubmitStatus(null), 5000);
        }
      );
  };

  return (
    <Section id="contact" className="relative bg-[#0a0a0a] border-t border-white/[0.05]">
      <div className="absolute top-0 right-1/4 w-[50rem] h-[50rem] bg-accent/5 rounded-full blur-[150px] -z-10 pointer-events-none" />

      <SectionHeader 
        title="Get In Touch" 
        subtitle="I’m always open to new opportunities, collaborations, or simply a quick code chat." 
      />

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 relative z-10 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-3xl font-extrabold text-white mb-4 tracking-tight">Let's talk about <span className="text-brand-400 block">your next project.</span></h3>
            <p className="text-slate-400 font-light text-lg">
              Feel free to drop a message. I'll get back to you as soon as possible.
            </p>
          </div>

          <div className="space-y-6">
             <div className="flex items-center gap-4 group">
               <div className="p-4 glass-card text-brand-400 group-hover:bg-brand-500/10 group-hover:text-white transition-all">
                 <Mail className="w-6 h-6" />
               </div>
               <div>
                 <p className="text-sm text-slate-500 font-medium uppercase tracking-widest mb-1">Email Me</p>
                 <a href="mailto:ayushdev186@gmail.com" className="text-lg text-slate-200 hover:text-brand-400 transition-colors">ayushdev186@gmail.com</a>
               </div>
             </div>
             <div className="flex items-center gap-4 group">
               <div className="p-4 glass-card text-neon-purple group-hover:bg-neon-purple/10 group-hover:text-white transition-all">
                 <MapPin className="w-6 h-6" />
               </div>
               <div>
                 <p className="text-sm text-slate-500 font-medium uppercase tracking-widest mb-1">Location</p>
                 <p className="text-lg text-slate-200">Indian Institute of Information Technology Kota, Rajasthan, India</p>
               </div>
             </div>
          </div>
        </motion.div>

        {/* Contact Form UI */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-8 md:p-10 space-y-6 neon-glow">
             <div className="space-y-4">
               <div>
                 <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2 font-mono">My Name is...</label>
                 <input 
                   type="text" 
                   id="name"
                   name="user_name"
                   required
                   placeholder="John Doe" 
                   className="w-full bg-[#0a0a0a]/50 text-white rounded-xl px-5 py-4 border border-white/10 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all placeholder:text-white/20 font-light"
                 />
               </div>
               
               <div>
                 <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2 font-mono">My Email is...</label>
                 <input 
                   type="email" 
                   id="email"
                   name="user_email"
                   required
                   placeholder="john@example.com" 
                   className="w-full bg-[#0a0a0a]/50 text-white rounded-xl px-5 py-4 border border-white/10 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all placeholder:text-white/20 font-light"
                 />
               </div>
               
               <div>
                 <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2 font-mono">I want to say...</label>
                 <textarea 
                   id="message"
                   name="message"
                   required
                   rows="4" 
                   placeholder="Hi Ayush, let's build something amazing together..." 
                   className="w-full bg-[#0a0a0a]/50 text-white rounded-xl px-5 py-4 border border-white/10 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all placeholder:text-white/20 resize-none font-light"
                 ></textarea>
               </div>
             </div>
             
             {submitStatus === 'success' && (
               <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center gap-3 text-emerald-400">
                 <CheckCircle className="w-5 h-5 flex-shrink-0" />
                 <p className="text-sm font-medium">Message sent successfully! I'll get back to you soon.</p>
               </div>
             )}

             {submitStatus === 'error' && (
               <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-400">
                 <XCircle className="w-5 h-5 flex-shrink-0" />
                 <p className="text-sm font-medium">Oops! Something went wrong. Please try again later.</p>
               </div>
             )}

             <Button 
               type="submit" 
               disabled={isSubmitting}
               className="w-full py-4 rounded-xl flex items-center justify-center gap-2 group mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
             >
                {isSubmitting ? (
                  <>Sending... <Loader2 className="w-4 h-4 animate-spin" /></>
                ) : (
                  <>Send Message <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                )}
             </Button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
