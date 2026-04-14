import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from './ui/Layout';
import { Button } from './ui/Button';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const BusinessSection = ({ onConnectClick }) => {
  const { t } = useTranslation();

  const benefits = [
    t('business.prop1'),
    t('business.prop2'),
    t('business.prop3')
  ];

  return (
    <section id="partners" className="section-padding bg-slate-900 text-white relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/station.png" 
          alt="Gas Station Night" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
              {t('business.title')}
            </h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              {t('business.subtitle')}
            </p>
            
            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-4 text-emerald-400">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg text-slate-200">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button variant="white" className="px-8 py-4 text-lg text-slate-900 border-none" onClick={onConnectClick}>
              {t('business.cta')}
            </Button>
          </motion.div>

          {/* This side could have a dashboard mockup instead if you had one, 
              but for now we focus on the value props and high-quality photo background. */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden lg:block relative"
          >
             {/* Generated Dashboard Mockup Image */}
             <div className="relative group perspective-1000">
               <motion.div
                 whileHover={{ rotateX: 5, rotateY: -5, scale: 1.02 }}
                 transition={{ type: "spring", stiffness: 300, damping: 20 }}
                 className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-emerald-500/10 bg-slate-800"
               >
                 <img 
                   src="/assets/dashboard-mockup.png" 
                   alt="Dashboard Mockup" 
                   className="w-full h-auto object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none" />
               </motion.div>
               {/* Decorative glows behind the image */}
               <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-[3rem] -z-10 group-hover:bg-primary/30 transition-colors duration-500" />
               <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-32 h-32 bg-emerald-500/20 blur-3xl rounded-full -z-10 group-hover:bg-emerald-500/30 transition-colors duration-500" />
             </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
