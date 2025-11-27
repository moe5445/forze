import React from 'react';
import { Instagram, Facebook, Linkedin, Mail, Trophy } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-24 pb-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div>
                 <a href="#" className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 bg-brand-green flex items-center justify-center rounded-sm">
                        <Trophy className="text-white w-4 h-4" />
                    </div>
                    <span className="font-display font-bold text-xl tracking-tighter text-white">FORZE</span>
                </a>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                    Enhancing physical and mental wellbeing through the power of small-sided football. Built for Belfast.
                </p>
            </div>

            {/* Quick Links */}
            <div>
                <h4 className="text-white font-display font-bold uppercase tracking-widest mb-6">Explore</h4>
                <ul className="space-y-4">
                    {['Battles', 'About Us', 'Our Mission', 'Locations', 'Book a Match'].map((item) => (
                        <li key={item}>
                            <a href="#" className="text-white/60 hover:text-brand-green transition-colors text-sm">{item}</a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Contact */}
            <div>
                <h4 className="text-white font-display font-bold uppercase tracking-widest mb-6">Contact</h4>
                <a href="mailto:forze.s.t.f@gmail.com" className="flex items-center gap-3 text-white/60 hover:text-brand-orange transition-colors mb-4 group">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm group-hover:underline">forze.s.t.f@gmail.com</span>
                </a>
                <p className="text-white/40 text-xs">
                    Have a suggestion? Drop us an email.
                </p>
            </div>

            {/* Socials */}
            <div>
                <h4 className="text-white font-display font-bold uppercase tracking-widest mb-6">Follow Us</h4>
                <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-orange hover:text-white transition-all duration-300">
                        <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-blue hover:text-white transition-all duration-300">
                        <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-green hover:text-white transition-all duration-300">
                        <Linkedin className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-xs">© {new Date().getFullYear()} Forze Strength Through Football. All rights reserved.</p>
            <div className="flex gap-6">
                <a href="#" className="text-white/30 hover:text-white text-xs transition-colors">Privacy Policy</a>
                <a href="#" className="text-white/30 hover:text-white text-xs transition-colors">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};