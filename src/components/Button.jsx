import React from 'react';
import { cn } from '../utils/cn';

export const Button = React.forwardRef(({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  children, 
  asChild, 
  ...props 
}, ref) => {
  const Component = asChild ? 'span' : 'button';

  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary: "bg-brand-500 text-slate-950 hover:bg-brand-400 shadow-[0_0_15px_rgba(0,195,255,0.3)] hover:shadow-[0_0_25px_rgba(0,195,255,0.6)]",
    secondary: "bg-slate-800 text-slate-100 hover:bg-slate-700 border border-slate-700 hover:border-slate-600",
    outline: "border-2 border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-slate-950",
    ghost: "hover:bg-slate-800 text-slate-300 hover:text-white"
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg"
  };

  return (
    <Component
      ref={ref}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </Component>
  );
});

Button.displayName = 'Button';
