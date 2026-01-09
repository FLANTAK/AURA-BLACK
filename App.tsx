
import React from 'react';
import Navbar from './components/Navbar';
import CardStreamHero from './components/CardStreamHero';
import Features from './components/Features';
import FloatingCardSection from './components/FloatingCardSection';
import SecuritySection from './components/SecuritySection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="bg-black text-white min-h-screen relative overflow-x-hidden">
      <Navbar />
      <section id="hero">
        <CardStreamHero />
      </section>
      <section id="features" className="py-24">
        <Features />
      </section>
      <section id="the-card" className="py-24">
        <FloatingCardSection />
      </section>
      <section id="security" className="py-24 bg-zinc-950/30">
        <SecuritySection />
      </section>
      <Footer />
    </main>
  );
};

export default App;
