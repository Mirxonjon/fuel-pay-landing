import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from './ui/Layout';
import { MagneticButton } from './ui/MagneticButton';
import { ShieldCheck, Apple, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export const SecuritySection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: `radial-gradient(#0f172a 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />
      
      <Container className="text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="relative inline-flex items-center justify-center mb-8"
        >
          <div className="absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full animate-pulse" />
          <div className="w-20 h-20 rounded-3xl bg-emerald-50 text-emerald-500 flex items-center justify-center shadow-sm relative z-10 border border-emerald-100/50">
            <ShieldCheck className="w-10 h-10" strokeWidth={1.5} />
          </div>
        </motion.div>
        
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight uppercase tracking-tight">
          {t('security.title')}
        </h2>
        
        <p className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium mb-12 opacity-80">
          {t('security.subtitle')}
        </p>

        {/* Technical Trust Bar */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
           {['AES-256', 'SSL SECURE', 'BIOMETRIC', 'PCI-DSS'].map((tag) => (
             <div key={tag} className="text-[10px] font-black tracking-[0.2em] border-b border-slate-900 pb-1">{tag}</div>
           ))}
        </div>
      </Container>
    </section>
  );
};

export const DownloadCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="pb-32 px-4 sm:px-6">
      <Container>
        <div className="relative rounded-[48px] bg-[#020617] overflow-hidden p-12 md:p-20 text-center border border-white/5">
          {/* Elite Mesh Gradient Background */}
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary/20 blur-[120px] rounded-full animate-slow-pulse" />
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-emerald-500/10 blur-[120px] rounded-full animate-slow-pulse delay-1000" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-150 brightness-150" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black text-white/50 uppercase tracking-widest mb-6">
              Join 2,000,000+ drivers today
            </div>

            <h2 className="text-2xl md:text-4xl font-black text-white mb-6 leading-tight uppercase tracking-tighter">
              {t('cta.title')}
            </h2>
            
            <p className="text-xs md:text-sm text-slate-400 mb-10 max-w-lg mx-auto leading-relaxed border-t border-white/5 pt-6">
              {t('cta.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton variant="white" className="px-5 py-2.5 text-xs rounded-xl shadow-2xl shadow-white/5">
                <Apple className="w-4 h-4 fill-slate-950" />
                <div className="text-left leading-tight">
                  <div className="text-[7px] uppercase font-black opacity-40">App Store</div>
                  <div className="font-black text-slate-950">Download</div>
                </div>
              </MagneticButton>
              <MagneticButton variant="secondary" className="px-5 py-2.5 text-xs rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-md">
                <Play className="w-4 h-4 fill-white" />
                <div className="text-left leading-tight">
                  <div className="text-[7px] uppercase font-black opacity-40">Google Play</div>
                  <div className="font-black text-white">Get it on</div>
                </div>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
