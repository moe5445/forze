import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Values } from './components/Values';
import { Mission } from './components/Mission';
import { Locations } from './components/Locations';
import { Footer } from './components/Footer';
import { Rulebook } from './components/Rulebook';

const Home = () => (
  <>
    <Hero />
    <Features />
    <Values />
    <Mission />
    <Locations />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-brand-black text-white font-sans selection:bg-brand-green selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rulebook" element={<Rulebook />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;