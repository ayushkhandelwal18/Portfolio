import React from 'react';
import { cn } from '../utils/cn';

export function Badge({ children, className, variant = 'primary' }) {
  const variants = {
    primary: "bg-brand-500/10 text-brand-400 border border-brand-500/20",
    secondary: "bg-slate-800 text-slate-300 border border-slate-700",
    accent: "bg-violet-500/10 text-violet-400 border border-violet-500/20"
  };

  return (
    <span className={cn(
      "inline-flex items-center px-3 py-1 text-xs font-medium rounded-full",
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
}
