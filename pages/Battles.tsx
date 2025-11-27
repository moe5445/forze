import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, ChevronRight, Lock } from 'lucide-react';
import { matches } from '../data/battles';
import { Match } from '../types';

export const Battles: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<'All' | 'Olympia' | 'PEC' | 'LORAG'>('All');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredMatches = matches.filter(m => filter === 'All' || m.location === filter);

  // Group by date
  const groupedMatches = filteredMatches.reduce((groups, match) => {
    const dateKey = `${match.day} ${match.date}`;
    if (!groups[dateKey]) {
      groups[dateKey] = [];
    }
    groups[dateKey].push(match);
    return groups;
  }, {} as Record<string, Match[]>);

  const handleSelectMatch = (match: Match) => {
    navigate(`/battle/${match.id}`);
  };

  return (
    <section className="min-h-screen bg-brand-black pt-24 pb-12 relative">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <span className="text-brand-green font-display font-bold uppercase tracking-widest text-sm mb-2 block">Match Schedule</span>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white uppercase leading-none">
              Select <br /> <span className="text-white/50">Your Battle</span>
            </h1>
          </div>

          {/* Filter Pills */}
          <div className="flex gap-2 p-1 bg-white/5 rounded-full backdrop-blur-md border border-white/5 overflow-x-auto">
            {(['All', 'Olympia', 'PEC', 'LORAG'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-full font-display uppercase tracking-wide text-sm transition-all duration-300 whitespace-nowrap ${
                  filter === f
                    ? 'bg-brand-green text-white shadow-lg'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Schedule Grid */}
        <div className="space-y-12">
          {Object.entries(groupedMatches).map(([date, dayMatches]) => (
            <div key={date} className="animate-fade-in-up">
              {/* Sticky Date Header */}
              <div className="border-y border-white/5 py-3 mb-6 flex items-center gap-3">
                <Calendar className="w-4 h-4 text-brand-orange" />
                <h3 className="text-white font-display font-bold text-lg uppercase tracking-wider">{date}</h3>
                <div className="h-px flex-grow bg-gradient-to-r from-white/10 to-transparent" />
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {dayMatches.map((match) => {
                  const isFull = match.current >= match.max;
                  const fillPercentage = (match.current / match.max) * 100;
                  const isWomenOnly = match.tags.includes('Women Only');

                  return (
                    <div
                      key={match.id}
                      className={`group relative bg-[#141414] border border-white/5 hover:border-white/20 rounded-sm p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden ${isFull ? 'opacity-80' : ''}`}
                    >
                      {/* Top Status Bar */}
                      <div className="flex justify-between items-start mb-6">
                        <div className={`px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest border ${
                          isWomenOnly
                            ? 'bg-brand-purple/10 border-brand-purple text-brand-purple'
                            : isFull
                              ? 'bg-red-500/10 border-red-500 text-red-500'
                              : 'bg-brand-green/10 border-brand-green text-brand-green'
                        }`}>
                          {isWomenOnly ? 'Women Only' : isFull ? 'Sold Out' : 'Available'}
                        </div>
                        <div className="text-white/40 group-hover:text-white transition-colors">
                          <span className="font-display text-lg">£{match.price}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="mb-8">
                        <div className="flex items-baseline gap-2 mb-1">
                          <h2 className="text-4xl font-display font-bold text-white tracking-tight">{match.time}</h2>
                          <span className="text-white/40 text-sm font-medium">GMT</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/60 text-sm">
                          <MapPin className="w-4 h-4 text-brand-orange" />
                          {match.fullLocationName}
                        </div>
                      </div>

                      {/* Progress / Capacity */}
                      <div className="mb-6">
                        <div className="flex justify-between text-xs mb-2 font-medium uppercase tracking-wider">
                          <span className={isFull ? 'text-red-500' : 'text-white/60'}>
                            {isFull ? 'Match Full' : `${match.max - match.current} spots left`}
                          </span>
                          <span className="text-white/40">{match.current}/{match.max} Players</span>
                        </div>
                        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-500 ${
                              isFull ? 'bg-red-500' : 'bg-brand-green'
                            }`}
                            style={{ width: `${fillPercentage}%` }}
                          />
                        </div>
                      </div>

                      {/* Action */}
                      <button
                        onClick={() => !isFull && handleSelectMatch(match)}
                        disabled={isFull}
                        className={`w-full py-4 px-6 rounded-sm font-display uppercase tracking-widest text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                          isFull
                            ? 'bg-white/5 text-white/40 cursor-not-allowed'
                            : 'bg-white text-brand-black hover:bg-brand-green hover:text-white hover:shadow-[0_0_20px_rgba(0,166,76,0.4)]'
                        }`}
                      >
                        {isFull ? (
                          <>
                            <Lock className="w-4 h-4" /> Waitlist Full
                          </>
                        ) : (
                          <>
                            Book Match <ChevronRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
