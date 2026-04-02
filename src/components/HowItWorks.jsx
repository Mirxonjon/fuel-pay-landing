import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Card } from './ui/Layout';
import { MapPin, MousePointer2, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';

export const HowItWorks = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: <MapPin className="w-6 h-6 transition-all duration-300" />,
      title: t('howItWorks.step1.title'),
      desc: t('howItWorks.step1.desc')
    },
    {
      icon: <MousePointer2 className="w-6 h-6 transition-all duration-300" />,
      title: t('howItWorks.step2.title'),
      desc: t('howItWorks.step2.desc')
    },
    {
      icon: <CreditCard className="w-6 h-6 transition-all duration-300" />,
      title: t('howItWorks.step3.title'),
      desc: t('howItWorks.step3.desc')
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-white relative">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 font-display">
            {t('howItWorks.title')}
          </h2>
          <p className="text-sm lg:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -z-10 translate-y-[-50px]" />
          
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <Card className="flex flex-col items-center text-center p-8 h-full group hover:bg-slate-50/50">
                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-primary/30">
                  {step.icon}
                </div>
                <div className="inline-block text-[10px] uppercase tracking-widest font-black text-primary mb-3 bg-primary/10 px-3 py-1 rounded-full group-hover:bg-primary/20 transition-colors">
                  {idx + 1}. {step.title}
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
