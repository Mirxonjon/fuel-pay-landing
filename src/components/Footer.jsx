import React from 'react';
import { Container } from './ui/Layout';

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-100 bg-white">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-primary">
          <div className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center text-sm">
            FP
          </div>
          <span>Fuel Pay</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 text-slate-500 font-medium">
          <a href="#" className="hover:text-primary transition-colors">App Store</a>
          <a href="#" className="hover:text-primary transition-colors">Play Store</a>
          <a href="#" className="hover:text-primary transition-colors">Contact</a>
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>

        <div className="text-slate-400 text-sm">
           &copy; {new Date().getFullYear()} Fuel Pay. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};
