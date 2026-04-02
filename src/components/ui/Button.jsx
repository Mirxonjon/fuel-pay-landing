import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const Button = ({ children, variant = 'primary', className, ...props }) => {
  const baseStyles = 'px-6 py-3 rounded-full font-semibold transition-all duration-300 active:scale-95 inline-flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-primary/30',
    secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200',
    outline: 'border-2 border-primary text-primary hover:bg-primary/5',
    ghost: 'text-slate-600 hover:text-slate-900 hover:bg-slate-50',
    white: 'bg-white text-primary hover:bg-slate-50 shadow-lg'
  };

  return (
    <button 
      className={twMerge(baseStyles, variants[variant], className)} 
      {...props}
    >
      {children}
    </button>
  );
};
