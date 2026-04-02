import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

export const TiltCard = ({ children, className, glowColor = 'rgba(37, 99, 235, 0.1)' }) => {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={twMerge(
        "relative rounded-3xl border border-slate-200 bg-white p-8 transition-shadow duration-500",
        hovered && "shadow-2xl shadow-slate-200/50",
        className
      )}
    >
      <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
        {children}
      </div>
      
      {/* Dynamic Glow */}
      {hovered && (
        <div 
          className="absolute inset-0 -z-10 blur-3xl opacity-50 rounded-full"
          style={{
            background: glowColor,
            transform: "translateZ(-20px)",
          }}
        />
      )}
    </motion.div>
  );
};
