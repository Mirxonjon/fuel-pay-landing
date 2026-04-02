import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from './ui/Layout';
import { TiltCard } from './ui/TiltCard';
import { Zap, Clock, ShieldCheck, Network, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Features = () => {
  const { t } = useTranslation();

  return (
    <section id="features" className="section-padding bg-white relative overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold tracking-widest uppercase text-[10px] mb-2"
            >
              Excellence in Fueling
            </motion.div>
            <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-tight uppercase tracking-tight">
              {t('features.title')}
            </h2>
          </div>
          <p className="text-[11px] text-slate-500 max-w-[280px] leading-relaxed">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-4">
          {/* Fast Payments - Vertical Card */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="md:col-span-4"
          >
            <TiltCard glowColor="rgba(37, 99, 235, 0.2)" className="h-full min-h-[220px] bg-primary text-white border-primary p-6 flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
              <div>
                <Zap className="w-5 h-5 mb-3" />
                <h3 className="text-base font-black mb-1 uppercase tracking-wide">{t('features.fastPayments.title')}</h3>
                <p className="text-primary-light text-[10px] leading-relaxed opacity-90">{t('features.fastPayments.desc')}</p>
              </div>
              <div className="mt-4 flex items-center gap-2 font-bold group/btn cursor-pointer text-[9px] uppercase tracking-wider">
                Learn more <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
              </div>
            </TiltCard>
          </motion.div>

          {/* No Queues - Wide Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-8"
          >
            <TiltCard glowColor="rgba(16, 185, 129, 0.1)" className="p-0 overflow-hidden h-full min-h-[220px]">
              <div className="grid md:grid-cols-2 h-full">
                <div className="p-6 flex flex-col justify-center">
                  <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center mb-3 text-slate-600">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="text-base font-black mb-1 text-slate-900 uppercase tracking-wide">{t('features.noQueues.title')}</h3>
                  <p className="text-slate-500 leading-relaxed text-[10px]">{t('features.noQueues.desc')}</p>
                </div>
                <div className="bg-slate-100 relative overflow-hidden group min-h-[160px]">
                  <img 
                    src="/assets/station.png" 
                    alt="Station" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Secure Transactions */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4 }}
             className="md:col-span-6"
          >
            <TiltCard glowColor="rgba(16, 185, 129, 0.2)" className="p-6 min-h-[160px]">
              <div className="flex items-start justify-between mb-3">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full text-[8px] font-black uppercase tracking-widest">Secured</div>
              </div>
              <h3 className="text-base font-black mb-1 text-slate-900 uppercase tracking-wide">{t('features.secure.title')}</h3>
              <p className="text-slate-500 leading-relaxed text-[10px]">{t('features.secure.desc')}</p>
            </TiltCard>
          </motion.div>

          {/* Universal Network */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.6 }}
             className="md:col-span-6"
          >
            <TiltCard glowColor="rgba(37, 99, 235, 0.1)" className="p-6 border-slate-900 bg-slate-950 text-white border-none overflow-hidden min-h-[160px]">
               <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
               <Network className="w-5 h-5 mb-3 text-primary" />
               <h3 className="text-base font-black mb-1 uppercase tracking-wide">{t('features.network.title')}</h3>
               <p className="text-slate-400 leading-relaxed text-[10px] mb-3">{t('features.network.desc')}</p>
               <div className="flex gap-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="h-5 w-8 bg-white/10 rounded text-[7px] flex items-center justify-center font-bold text-white/40">BRAND</div>
                  ))}
               </div>
            </TiltCard>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
