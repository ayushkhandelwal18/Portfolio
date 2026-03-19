import React from "react";
import { cn } from "../utils/cn";

export function Section({ id, className, children, containerClass }) {
  return (
    <section id={id} className={cn("py-20 md:py-32 overflow-hidden", className)}>
      <div className={cn("mx-auto max-w-6xl px-6 md:px-12", containerClass)}>
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({ title, subtitle, className }) {
  return (
    <div className={cn("mb-16 md:mb-24 text-center space-y-4", className)}>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
        {title}
        <span className="text-brand-500">.</span>
      </h2>
      {subtitle && (
        <p className="text-sm md:text-base text-slate-400 max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
