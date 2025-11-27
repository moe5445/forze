import React from 'react';
import { Reveal } from './ui/Reveal';
import { Button } from './ui/Button';
import { Calendar, Users, ShieldCheck, Trophy } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Features: React.FC = () => {
  // Setup scroll triggers for the images
  const { ref: imgRef1, isVisible: imgVisible1 } = useScrollReveal(0.3);
  const { ref: imgRef2, isVisible: imgVisible2 } = useScrollReveal(0.3);

  return (
    <section id="battles" className="py-24 bg-brand-black relative overflow-hidden">
        {/* Glow Effects */}
        <div className="hidden md:block absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="hidden md:block absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6">
        {/* Section 1: Battles */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <Reveal>
            <div ref={imgRef1} className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-brand-green to-brand-blue opacity-20 blur-2xl -z-10 rounded-xl" />
                <img 
                    src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2586&auto=format&fit=crop" 
                    alt="Football Action" 
                    className={`rounded-lg shadow-2xl transition-all duration-1000 ease-out w-full object-cover aspect-square ${imgVisible1 ? 'grayscale-0' : 'grayscale'}`}
                />
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-brand-paper border border-white/10 p-6 rounded-lg shadow-xl backdrop-blur-md max-w-xs hidden md:block">
                    <div className="flex items-center gap-4 mb-2">
                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs uppercase tracking-widest text-white/60">Live Status</span>
                    </div>
                    <p className="text-white font-display text-lg">Next Match: Olympia Pitch 2</p>
                    <p className="text-brand-green font-bold">Today, 19:00</p>
                </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <span className="text-brand-green font-display font-bold uppercase tracking-widest text-2xl mb-4 block">The Main Event</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 uppercase leading-none">
              Forze <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50">Battles</span>
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed font-light">
              Small sided recreational drop-in matches open to all adults over 18. 
              Book in by yourself or with friends & enjoy a good kickabout in a friendly environment.
              We are all about having a great time socialising, building a community and staying active playing the beautiful game.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Button className="rounded-sm" to="/battles">Find a Match </Button>
                <Button variant="outline" className="rounded-sm" to="/battles">View Schedule</Button>
            </div>
          </Reveal>
        </div>

        {/* Section 2: About Features */}
        <div id="about" className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 order-2 lg:order-1">
                <Reveal>
                    <span className="text-brand-orange font-display font-bold uppercase tracking-widest text-sm mb-4 block">Why Play With Us?</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 uppercase leading-none">
                        More Than Just <br /> A Game
                    </h2>
                    
                    <div className="space-y-8">
                        {[
                            { icon: Users, title: "Social & Inclusive", text: "Socialise & meet other football lovers. All abilities welcome." },
                            { icon: Calendar, title: "Stress Free", text: "Forget organising. Just book in & show up." },
                            { icon: ShieldCheck, title: "Fair Play", text: "Referee present ensuring every match is fair & competitive." },
                            { icon: Trophy, title: "Win Prizes", text: "Man of the Match awards given every game." }
                        ].map((feature, idx) => (
                            <div key={idx} className="flex gap-6 group">
                                <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-orange group-hover:border-brand-orange transition-all duration-300 shrink-0">
                                    <feature.icon className="text-white w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-display font-bold text-white mb-1 uppercase">{feature.title}</h4>
                                    <p className="text-white/60 text-sm leading-relaxed">{feature.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 h-full min-h-[500px]">
                <Reveal delay={200} className="h-full">
                    <div ref={imgRef2} className="h-full relative overflow-hidden rounded-sm group">
                        <img 
                            src="https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=2670&auto=format&fit=crop" 
                            alt="Team Photo" 
                            className={`w-full h-full object-cover transition-all duration-1000 ease-out transform group-hover:scale-105 ${imgVisible2 ? 'grayscale-0' : 'grayscale'}`} 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-90" />
                        
                        <div className="absolute bottom-0 left-0 p-8 w-full">
                             <div className="glass-panel p-6 rounded-sm border-l-4 border-brand-orange">
                                <p className="text-2xl font-display text-white uppercase italic">"£5 each & you pay through this website to secure your spot."</p>
                             </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>
      </div>
    </section>
  );
};