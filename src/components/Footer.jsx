import React from 'react';
import { Container } from './ui/Layout';

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-100 bg-white">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-primary">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden shadow-sm">
            <img src="/logo.svg" alt="Fuel Go Logo" className="w-full h-full object-cover" />
          </div>
          <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Fuel Go</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 text-slate-500 font-medium">
          <a href="https://apps.apple.com/us/app/fuelgo/id6761782544" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">App Store</a>
          <a href="https://play.google.com/store/apps/details?id=uz.flow.fuelgo&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Play Store</a>
          <a href="#" className="hover:text-primary transition-colors">Contact</a>
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>

        <div className="text-slate-400 text-sm">
           &copy; {new Date().getFullYear()} Fuel Go. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};
