import React, { useState, useEffect } from 'react';
import { Menu, X, Trophy } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Battles', href: '#battles' },
    { name: 'About', href: '#about' },
    { name: 'Mission', href: '#mission' },
    { name: 'Locations', href: '#locations' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-black/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-brand-green flex items-center justify-center rounded-sm group-hover:bg-white transition-colors">
                <Trophy className="text-white group-hover:text-brand-green w-5 h-5" />
            </div>
            <div className="flex flex-col">
                <span className="font-display font-bold text-2xl tracking-tighter leading-none text-white">FORZE</span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-white/60">Strength Through Football</span>
            </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-white/70 hover:text-brand-green transition-colors uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
            <Button size="sm">Book a Match</Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-brand-black z-40 transition-transform duration-300 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden pt-24 px-6`}>
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-display font-bold text-white hover:text-brand-green"
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full mt-4" size="lg">Book Now</Button>
        </div>
      </div>
    </nav>
  );
};