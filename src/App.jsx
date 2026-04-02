import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { BusinessSection } from './components/BusinessSection';
import { SecuritySection, DownloadCTA } from './components/Trust';
import { Footer } from './components/Footer';
import { ConnectStationModal } from './components/ConnectStationModal';
import './i18n/config';

function App() {
  const [isConnectModalOpen, setIsConnectModalOpen] = React.useState(false);

  const toggleConnectModal = () => setIsConnectModalOpen(!isConnectModalOpen);

  return (
    <div className="min-h-screen">
      <Navbar onConnectClick={toggleConnectModal} />
      <main>
        <Hero onConnectClick={toggleConnectModal} />
        <HowItWorks />
        <Features />
        <BusinessSection onConnectClick={toggleConnectModal} />
        <SecuritySection />
        <DownloadCTA />
      </main>
      <Footer />
      
      <ConnectStationModal 
        isOpen={isConnectModalOpen} 
        onClose={() => setIsConnectModalOpen(false)} 
      />
    </div>
  );
}

export default App;
