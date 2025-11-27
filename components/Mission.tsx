import React from 'react';
import { Reveal } from './ui/Reveal';
import { Button } from './ui/Button';

export const Mission: React.FC = () => {
  return (
    <section id="mission" className="relative py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0">
         <div className="hidden md:block absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-green/10 rounded-full blur-[120px] pointer-events-none" />
         <div className="hidden md:block absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none" />
         {/* Subtle Grid Texture */}
         <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <Reveal>
          {/* Unified Section Header */}
          <span className="text-brand-green font-display font-bold uppercase tracking-widest text-sm mb-4 block">
            Our Purpose
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white uppercase mb-10 max-w-6xl mx-auto leading-[1.2]">
            "We exist to enhance the <br className="hidden md:block" />
            <span className="relative inline-block mx-2">
              <span className="absolute inset-0 bg-brand-green -skew-x-6 rounded-sm opacity-90"></span>
              <span className="relative z-10 text-white px-3">physical</span>
            </span> 
            and 
            <span className="relative inline-block mx-2">
              <span className="absolute inset-0 bg-brand-blue skew-x-6 rounded-sm opacity-90"></span>
              <span className="relative z-10 text-white px-3">mental</span>
            </span> 
            wellbeing of our community through football"
          </h2>
          
          <p className="text-white/60 text-lg md:text-xl font-light max-w-3xl mx-auto mb-12 leading-relaxed">
            We create an inclusive space and form a community where anyone can book in, play the sport they love, socialise & relieve their stress on the pitch.
          </p>

          <Button 
            className="bg-white text-brand-black hover:bg-brand-green hover:text-white border-none shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            withArrow
          >
            Play now
          </Button>
        </Reveal>
      </div>
    </section>
  );
};