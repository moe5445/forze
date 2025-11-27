import React from 'react';
import { Reveal } from './ui/Reveal';
import { Brain, Heart, Users, Scale, PersonStanding, Smile } from 'lucide-react';
import { ValueProp } from '../types';

export const Values: React.FC = () => {
  const values: ValueProp[] = [
    { 
      title: "Mental Health", 
      description: "Promoting the importance of good mental health through active sport.", 
      icon: Brain, 
      color: 'green' 
    },
    { 
      title: "Healthy Lifestyle", 
      description: "Encouraging cardiovascular health and physical fitness habits.", 
      icon: Heart, 
      color: 'orange' 
    },
    { 
      title: "Community", 
      description: "Creating a brotherhood, uniting people together from all walks of life.", 
      icon: Users, 
      color: 'purple' 
    },
    { 
      title: "Inclusion", 
      description: "Promoting social inclusion and fighting against discrimination.", 
      icon: Scale, 
      color: 'blue' 
    },
    { 
      title: "Equality", 
      description: "Promoting gender equality and fair play in football.", 
      icon: PersonStanding, 
      color: 'green' 
    },
    { 
      title: "Connection", 
      description: "Fighting against loneliness amongst adults in the modern world.", 
      icon: Smile, 
      color: 'orange' 
    },
  ];

  return (
    <section className="py-24 bg-[#0F0F0F] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            {/* Unified Section Header */}
            <span className="text-brand-green font-display font-bold uppercase tracking-widest text-2xl mb-4 block">
                Our Ethos
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase">Driven By Values</h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="group relative bg-white/5 border border-white/5 p-8 h-full hover:bg-white/10 transition-colors duration-300 overflow-hidden rounded-sm">
                <div className={`absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity duration-300`}>
                    <value.icon className={`w-24 h-24 -mr-8 -mt-8 rotate-12 text-brand-${value.color === 'green' ? 'green' : value.color === 'orange' ? 'orange' : value.color === 'blue' ? 'blue' : 'purple'}`} />
                </div>
                
                <div className={`w-12 h-12 mb-6 flex items-center justify-center rounded-sm bg-brand-${value.color === 'green' ? 'green' : value.color === 'orange' ? 'orange' : value.color === 'blue' ? 'blue' : 'purple'}/20`}>
                    <value.icon className={`w-6 h-6 text-brand-${value.color === 'green' ? 'green' : value.color === 'orange' ? 'orange' : value.color === 'blue' ? 'blue' : 'purple'}`} />
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-3 uppercase tracking-wide">{value.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed relative z-10">
                  {value.description}
                </p>
                
                <div className={`absolute bottom-0 left-0 h-1 bg-brand-${value.color === 'green' ? 'green' : value.color === 'orange' ? 'orange' : value.color === 'blue' ? 'blue' : 'purple'} w-0 group-hover:w-full transition-all duration-500 ease-out`} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};