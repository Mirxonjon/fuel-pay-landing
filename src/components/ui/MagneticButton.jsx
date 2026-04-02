import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

export const MagneticButton = ({ children, className, variant = 'primary', ...props }) => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-primary/30',
    secondary: 'bg-slate-900 text-white hover:bg-black shadow-lg shadow-slate-900/10',
    white: 'bg-white text-primary hover:bg-slate-100 shadow-lg',
    outline: 'border-2 border-primary text-primary hover:bg-primary/5',
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x * 0.2, y: position.y * 0.2 }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={twMerge(
        'px-7 py-3.5 rounded-xl font-bold transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 relative overflow-hidden group',
        variants[variant],
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      <div className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full blur-2xl" />
    </motion.button>
  );
};
