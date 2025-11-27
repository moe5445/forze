import React from 'react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=2500&auto=format&fit=crop"  
          alt="Football Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/80 via-transparent to-brand-black/80" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
            <span className="text-xs font-medium tracking-widest uppercase text-white/80">Now playing in Belfast</span>
        </div>

        <h1 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl tracking-tighter text-white mb-6 leading-[0.9] uppercase animate-fade-in-up [animation-delay:200ms]">
          Welcome To <br />
          <span className="text-white">Forze</span>
        </h1>

        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up [animation-delay:400ms]">
          Experience the premier small-sided football community. 
          Drop-in matches, competitive spirit, and inclusive atmosphere. 
          No team needed. Just show up and play.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-fade-in-up [animation-delay:600ms]">
          <Button size="lg" withArrow className="rounded-sm">Play Now</Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-1">
            <div className="w-1 h-2 bg-brand-green rounded-full"></div>
        </div>
      </div>
    </section>
  );
};