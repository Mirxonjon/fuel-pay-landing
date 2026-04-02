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
             {/* Mocking a dashboard interface overlay */}
             <div className="p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <div className="h-4 w-32 bg-white/20 rounded-full" />
                  <div className="h-8 w-8 bg-emerald-500 rounded-lg" />
                </div>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="h-24 bg-white/5 rounded-2xl p-4">
                    <div className="h-2 w-12 bg-white/20 rounded-full mb-4" />
                    <div className="h-6 w-20 bg-white rounded-full" />
                  </div>
                  <div className="h-24 bg-white/5 rounded-2xl p-4">
                    <div className="h-2 w-12 bg-white/20 rounded-full mb-4" />
                    <div className="h-6 w-20 bg-white rounded-full" />
                  </div>
                </div>
                <div className="h-48 bg-white/5 rounded-2xl relative overflow-hidden">
                  <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-primary/20 to-transparent" />
                  {/* Mock Chart lines */}
                  <div className="absolute inset-0 flex items-end p-8 gap-1">
                    {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                      <div key={i} className="flex-1 bg-primary/40 rounded-t-sm" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
             </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
