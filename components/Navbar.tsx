import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Trophy } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hash scrolling after navigation
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Check if it's a hash link on the same page
    if (href.startsWith('/#')) {
      const hash = href.substring(1); // Remove leading /
      const targetId = hash.substring(1); // Remove #
      const element = document.getElementById(targetId);
      
      // If we're on the home page and element exists, scroll to it
      if (location.pathname === '/' && element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
      }
      // If we're on a different page, navigate to home with hash
      else if (location.pathname !== '/') {
        e.preventDefault();
        navigate('/' + hash);
      }
    }
  };

  const navLinks = [
    { name: 'Battles', href: '/battles' },
    { name: 'About', href: '/#about' },
    { name: 'Mission', href: '/#mission' },
    { name: 'Locations', href: '/#locations' },
    { name: 'Rulebook', href: '/rulebook' },
  ];

  // Check if we're on a battle-related page
  const isBattlePage = location.pathname.startsWith('/battle');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4">
      <div className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-500 ease-out rounded-full ${isScrolled ? 'bg-brand-black/90 backdrop-blur-xl py-3 px-8' : 'bg-transparent py-3'}`}>
 
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-green flex items-center justify-center rounded-sm">
                <Trophy className="text-white w-5 h-5" />
            </div>
            <div className="flex flex-col">
                <span className="font-display font-bold text-2xl tracking-tighter leading-none text-white">FORZE</span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-white/60">Strength Through Football</span>
            </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-white/70 hover:text-brand-green transition-colors uppercase tracking-wide"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA - Hide on battle pages */}
        {!isBattlePage && (
          <div className="hidden md:block">
              <Button size="sm" to="/battles" className="rounded-sm">Book a Match</Button>
          </div>
        )}

        {/* Mobile Toggle */}
        <button
          type="button"
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
            <Link
              key={link.name}
              to={link.href}
              onClick={(e) => {
                handleNavClick(e, link.href);
                setIsMobileMenuOpen(false);
              }}
              className="text-2xl font-display font-bold text-white hover:text-brand-green"
            >
              {link.name}
            </Link>
          ))}
          {!isBattlePage && (
            <Button className="w-full mt-4" size="lg" to="/battles">Book Now</Button>
          )}
        </div>
      </div>
    </nav>
  );
};