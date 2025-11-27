import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Values } from './components/Values';
import { Mission } from './components/Mission';
import { Locations } from './components/Locations';
import { Footer } from './components/Footer';
import { Rulebook } from './components/Rulebook';
import { Battles } from './pages/Battles';
import { BattleBooking } from './pages/BattleBooking';

const Home = () => (
  <>
    <Hero />
    <Features />
    <Values />
    <Mission />
    <Locations />
  </>
);

function AppContent() {
  const location = useLocation();
  const hiddenFooterPaths = ['/battle/'];
  const shouldHideFooter = hiddenFooterPaths.some(path => location.pathname.startsWith(path));

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-brand-black text-white font-sans selection:bg-brand-green selection:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rulebook" element={<Rulebook />} />
          <Route path="/battles" element={<Battles />} />
          <Route path="/battle/:id" element={<BattleBooking />} />
        </Routes>
      </main>
      {!shouldHideFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;