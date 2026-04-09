import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from './ui/Layout';
import { Button } from './ui/Button';
import { Globe, Menu, X, ChevronDown, Fuel } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = ({ onConnectClick }) => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'uz', label: 'O\'zbek', flag: '🇺🇿' }
  ];

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setIsLangOpen(false);
  };

  const handleConnectClick = () => {
    onConnectClick();
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent py-5'
      }`}>
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-2xl tracking-tight text-primary">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden shadow-sm">
            <img src="/logo.svg" alt="Fuel Go Logo" className="w-full h-full object-cover" />
          </div>
          <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Fuel Go</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-slate-600 font-medium">
          <a href="#features" className="hover:text-primary transition-colors">{t('navbar.features')}</a>
          <a href="#how-it-works" className="hover:text-primary transition-colors">{t('navbar.howItWorks')}</a>
          <a href="#partners" className="hover:text-primary transition-colors">{t('navbar.partners')}</a>

          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1.5 hover:text-primary transition-colors focus:outline-none"
            >
              <Globe className="w-4 h-4" />
              <span>{currentLang.code.toUpperCase()}</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-3 w-40 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full flex items-center justify-between px-4 py-3 hover:bg-slate-50 transition-colors ${i18n.language === lang.code ? 'text-primary font-bold bg-primary/5' : 'text-slate-600'
                        }`}
                    >
                      <span>{lang.label}</span>
                      <span>{lang.flag}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Button variant="primary" className="py-2.5" onClick={handleConnectClick}>
            {t('navbar.connectStation')}
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <Container className="py-6 flex flex-col gap-4">
              <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-600">{t('navbar.features')}</a>
              <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-600">{t('navbar.howItWorks')}</a>
              <a href="#partners" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-600">{t('navbar.partners')}</a>
              <hr className="border-slate-100" />
              <div className="flex items-center gap-4">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`px-3 py-1.5 rounded-lg border flex items-center gap-2 ${i18n.language === lang.code ? 'border-primary text-primary bg-primary/5 font-bold' : 'border-slate-200 text-slate-600'
                      }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.code.toUpperCase()}</span>
                  </button>
                ))}
              </div>
              <Button variant="primary" className="w-full" onClick={handleConnectClick}>
                {t('navbar.connectStation')}
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
