import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Values } from './components/Values';
import { Mission } from './components/Mission';
import { Locations } from './components/Locations';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-black text-white font-sans selection:bg-brand-green selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Values />
        <Mission />
        <Locations />
      </main>
      <Footer />
    </div>
  );
}

export default App;