import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Container } from './ui/Layout';
import { MagneticButton } from './ui/MagneticButton';
import { motion, useScroll, useTransform } from 'framer-motion';

const CharacterReveal = ({ text, className }) => {
  const characters = text.split("");
  return (
    <h1 className={className}>
      {characters.map((char, i) => (
        char === "\n" ? <br key={i} /> : (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: i * 0.03,
              ease: "easeOut",
            }}
            className="inline-block whitespace-pre"
          >
            {char}
          </motion.span>
        )
      ))}
    </h1>
  );
};

export const Hero = () => {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden lg:pt-48 lg:pb-32 animate-mesh">
      <Container className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <div className="relative z-10 text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm mb-8 border border-primary/20 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            {t('hero.badge')}
          </motion.div>
          
          <CharacterReveal 
            text={t('hero.headline').replace('<1>', '').replace('</1>', '')}
            className="text-3xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight"
          />
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-sm lg:text-base text-slate-600 mb-6 leading-relaxed max-w-sm font-medium"
          >
            {t('hero.subtext')}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-3"
          >
            <MagneticButton variant="primary" className="px-5 py-2.5 text-sm">
              {t('hero.startFueling')}
            </MagneticButton>
            <MagneticButton variant="outline" className="px-5 py-2.5 text-sm border-slate-200 text-slate-900 hover:bg-slate-50">
              {t('hero.learnMore')}
            </MagneticButton>
          </motion.div>
        </div>

        {/* Visual Mockups with Parallax */}
        <div className="relative">
          <motion.div style={{ y: y1 }} className="relative z-20">
            <div className="rounded-[40px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(37,99,235,0.3)] border-[8px] border-white group">
              <img 
                src="/assets/hero-mockup.png" 
                alt="Fuel Pay App" 
                className="w-full h-auto transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </motion.div>
          
          {/* Decorative Floating Elements */}
          <motion.div 
            style={{ y: y2 }}
            className="absolute -top-12 -right-12 w-32 h-32 bg-primary/20 rounded-3xl rotate-12 blur-2xl -z-10" 
          />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-400/20 rounded-full blur-[100px] -z-10" />
        </div>
      </Container>
    </section>
  );
};
