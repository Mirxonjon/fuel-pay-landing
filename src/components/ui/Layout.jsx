import React from 'react';
import { twMerge } from 'tailwind-merge';

export const Container = ({ children, className }) => {
  return (
    <div className={twMerge("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
};

export const Card = ({ children, className, glass = false }) => {
  return (
    <div className={twMerge(
      "p-6 rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300 group",
      glass && "bg-white/70 backdrop-blur-md border-white/20",
      className
    )}>
      {children}
    </div>
  );
};
