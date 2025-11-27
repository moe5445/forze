import React, { useState } from 'react';
import { Reveal } from './ui/Reveal';
import { MapPin, ArrowRight, ExternalLink } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  address: string;
  description: string;
  mapQuery: string;
  coordinates: { lat: number; lng: number };
}

const locations: Location[] = [
  {
    id: 'olympia',
    name: 'Olympia Leisure Centre',
    address: 'Boucher Road, Belfast',
    description: 'Premier 4G pitches located right next to the National Stadium at Windsor Park. Features high-quality floodlights and changing facilities.',
    mapQuery: 'Olympia Leisure Centre Belfast',
    coordinates: { lat: 54.582496, lng: -5.955938 }
  },
  {
    id: 'pec',
    name: "Queen's Sport PEC",
    address: 'Botanic Park, Belfast',
    description: 'World-class university facilities in the heart of Botanic. Fast-paced 5-a-side cages perfect for intense matches.',
    mapQuery: "Queen's Sport PEC Belfast",
    coordinates: { lat: 54.584988, lng: -5.934676 }
  },
  {
    id: 'lorag',
    name: 'LORAG',
    address: 'Shaftesbury Community Centre',
    description: 'Community-focused centre in Lower Ormeau with excellent synthetic surfaces. A hub for local football culture.',
    mapQuery: 'Shaftesbury Community Recreation Centre Belfast',
    coordinates: { lat: 54.587829, lng: -5.925442 }
  }
];

export const Locations: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState<Location>(locations[0]);
  const [isMapLoading, setIsMapLoading] = useState(false);

  const handleLocationChange = (location: Location) => {
    if (location.id !== activeLocation.id) {
      setIsMapLoading(true);
      setActiveLocation(location);
    }
  };

  return (
    <section id="locations" className="py-24 bg-brand-paper relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="hidden md:block absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />
        
      <div className="container mx-auto px-6 relative z-10">
        <Reveal>
            <div className="text-center mb-16">
                {/* Unified Section Header - Maintained Blue for section identity but matched typography structure */}
                <span className="text-brand-green font-display font-bold uppercase tracking-widest text-2xl mb-4 block">
                    Where We Play
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase">
                    Belfast Arenas
                </h2>
                <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
                    We organise weekly 5-9 a side football matches at top tier facilities across Belfast.
                </p>
            </div>
        </Reveal>

        <Reveal delay={200}>
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 min-h-[600px]">
                {/* List Side */}
                <div className="lg:col-span-4 flex flex-col gap-4">
                    {locations.map((location) => (
                        <button 
                            key={location.id}
                            onClick={() => handleLocationChange(location)}
                            className={`text-left p-6 rounded-sm border transition-all duration-300 group relative overflow-hidden ${
                                activeLocation.id === location.id 
                                ? 'bg-white/10 border-brand-green/50 shadow-[0_0_30px_rgba(0,166,76,0.1)]' 
                                : 'bg-white/5 border-white/5 hover:bg-white/[0.08] hover:border-white/10'
                            }`}
                        >
                            {activeLocation.id === location.id && (
                                <div className="absolute inset-0 bg-gradient-to-r from-brand-green/10 to-transparent pointer-events-none" />
                            )}
                            
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className={`font-display font-bold text-lg uppercase ${activeLocation.id === location.id ? 'text-brand-green' : 'text-white'}`}>
                                        {location.name}
                                    </h4>
                                    {activeLocation.id === location.id && <MapPin className="w-5 h-5 text-brand-green animate-bounce" />}
                                </div>
                                <p className="text-white/50 text-xs mb-4 flex items-center gap-2">
                                    <MapPin className="w-3 h-3" />
                                    {location.address}
                                </p>
                                <p className={`text-sm leading-relaxed transition-colors ${activeLocation.id === location.id ? 'text-white/90' : 'text-white/60'}`}>
                                    {location.description}
                                </p>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Google Map Embed Side */}
                <div className="lg:col-span-8 relative rounded-sm overflow-hidden border border-white/10 bg-[#0f1115] shadow-2xl group min-h-[500px] flex flex-col">
                    
                    {/* Map Container */}
                    <div className="relative w-full h-full flex-grow bg-[#1a1a1a]">
                        
                        {/* Loading State */}
                        {isMapLoading && (
                            <div className="absolute inset-0 flex items-center justify-center bg-[#0f1115] z-10">
                                <div className="w-8 h-8 border-2 border-brand-green border-t-transparent rounded-full animate-spin"></div>
                            </div>
                        )}

                        {/* Google Maps Iframe */}
                        <iframe
                            title="Google Map"
                            width="100%"
                            height="100%"
                            style={{ 
                                border: 0,
                                // Filters removed to show standard full-color Google Map
                            }}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src={`https://maps.google.com/maps?q=${encodeURIComponent(activeLocation.mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                            onLoad={() => setIsMapLoading(false)}
                        ></iframe>
                    </div>

                    {/* Info Bar / Controls */}
                    <div className="bg-[#111111] border-t border-white/10 p-6 flex flex-col md:flex-row items-center justify-between gap-6 z-20">
                        <div>
                             <h3 className="text-white font-display font-bold text-2xl uppercase leading-none mb-1">{activeLocation.name}</h3>
                             <p className="text-white/50 text-xs flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                Live Location
                             </p>
                        </div>

                        <div className="flex items-center gap-4 w-full md:w-auto">
                            <a 
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeLocation.mapQuery)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 md:flex-none py-3 px-6 border border-white/10 text-white font-display uppercase tracking-wider text-sm hover:bg-white/5 transition-colors rounded-sm flex items-center justify-center gap-2"
                            >
                                <ExternalLink className="w-4 h-4" /> Open Map
                            </a>
                            <a 
                                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(activeLocation.mapQuery)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 md:flex-none py-3 px-8 bg-brand-green text-white font-display uppercase tracking-wider text-sm flex items-center justify-center gap-2 rounded-sm"
                            >
                                Get Directions <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Reveal>
      </div>
    </section>
  );
};