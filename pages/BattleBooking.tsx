import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, CheckCircle2, Trophy, Shirt } from 'lucide-react';
import { getMatchById } from '../data/battles';
import { StripePaymentModal } from '../components/StripePaymentModal';

export const BattleBooking: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const matchData = id ? getMatchById(id) : null;

  const [match, setMatch] = useState(matchData);
  const [selectedTeam, setSelectedTeam] = useState<1 | 2 | null>(null);
  const [playerName, setPlayerName] = useState('');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Update match when matchData changes
  useEffect(() => {
    if (matchData) {
      setMatch(matchData);
    }
  }, [matchData]);

  if (!match) {
    return (
      <div className="min-h-screen bg-brand-black flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-display font-bold text-white mb-4">Battle Not Found</h2>
          <button
            onClick={() => navigate('/battles')}
            className="px-6 py-3 bg-brand-yellow text-brand-black font-bold rounded-xl hover:bg-brand-yellowHover transition-colors"
          >
            Back to Battles
          </button>
        </div>
      </div>
    );
  }

  const team1Size = Math.ceil(match.max / 2);
  const team2Size = Math.floor(match.max / 2);

  const team1Players = match.team1Players || [];
  const team2Players = match.team2Players || [];

  const isTeam1Full = team1Players.length >= team1Size;
  const isTeam2Full = team2Players.length >= team2Size;

  const handleSelectTeam = (team: 1 | 2) => {
    if (team === 1 && isTeam1Full) return;
    if (team === 2 && isTeam2Full) return;
    setSelectedTeam(team);
  };

  const handlePaymentClick = () => {
    console.log('Payment clicked!', { selectedTeam, playerName });
    if (!selectedTeam || !playerName.trim()) {
      console.log('Missing requirements');
      return;
    }
    console.log('Opening payment modal');
    setShowPaymentModal(true);
  };

  const handlePaymentSuccess = () => {
    if (!match || !selectedTeam || !playerName.trim()) return;

    // Update the match with the new player
    const updatedMatch = { ...match };
    if (selectedTeam === 1) {
      updatedMatch.team1Players = [...updatedMatch.team1Players, playerName.toUpperCase()];
    } else {
      updatedMatch.team2Players = [...updatedMatch.team2Players, playerName.toUpperCase()];
    }
    updatedMatch.current = updatedMatch.team1Players.length + updatedMatch.team2Players.length;

    setMatch(updatedMatch);
    setBookingSuccess(true);
    setShowPaymentModal(false);

    // Show success message then redirect
    setTimeout(() => {
      navigate('/battles');
    }, 3000);
  };

  return (
    <section className="min-h-screen bg-brand-black pt-24 pb-32 animate-fade-in-up">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* Success Banner */}
        {bookingSuccess && (
          <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 animate-fade-in-up">
            <div className="bg-brand-green text-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6" />
              <div>
                <p className="font-bold">Booking Confirmed!</p>
                <p className="text-sm opacity-90">You've been added to Team {selectedTeam}</p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation & Header */}
        <div className="mb-12">
          <button
            onClick={() => navigate('/battles')}
            className="flex items-center gap-2 text-white/50 hover:text-brand-green mb-8 transition-colors uppercase tracking-widest text-xs font-bold"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Battle List
          </button>

          <div className="flex flex-col md:flex-row justify-between items-end gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-brand-orange text-[10px] font-bold uppercase tracking-widest">
                  {match.day} {match.date}
                </span>
                <span className="px-3 py-1 rounded bg-brand-green/10 border border-brand-green/20 text-brand-green text-[10px] font-bold uppercase tracking-widest">
                  Only {match.max - match.current} Spots Left
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white uppercase leading-none mb-2">
                {match.fullLocationName.split(' - ')[0]}
              </h1>
              <div className="flex items-center gap-4 text-white/60 text-sm">
                <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-brand-orange" /> {match.time} GMT</span>
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-brand-blue" /> {match.fullLocationName}</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Match Fee</p>
              <p className="text-4xl font-display font-bold text-white">£{match.price}</p>
            </div>
          </div>
        </div>

        {/* SQUAD SELECTION AREA */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 relative">

          {/* VS Badge */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex w-16 h-16 bg-brand-black border border-white/10 rounded-full items-center justify-center">
            <span className="font-display font-bold text-xl text-white italic">VS</span>
          </div>

          {/* TEAM 1 */}
          <div
            onClick={() => handleSelectTeam(1)}
            className={`relative rounded-sm border-2 transition-all duration-300 cursor-pointer overflow-hidden group ${selectedTeam === 1
                ? 'bg-[#1a1a1a] border-brand-green shadow-[0_0_30px_rgba(0,166,76,0.2)]'
                : 'bg-[#111111] border-white/5 hover:border-white/20'
              } ${isTeam1Full ? 'opacity-50 pointer-events-none' : ''}`}
          >
            {/* Team Header */}
            <div className="p-6 border-b border-white/5 bg-gradient-to-r from-brand-green/20 to-transparent flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-display font-bold text-white uppercase italic">Team 1</h2>
                <p className="text-white/40 text-xs uppercase tracking-widest">{isTeam1Full ? 'Squad Full' : `${team1Size - team1Players.length} Slots Open`}</p>
              </div>
              {selectedTeam === 1 && <CheckCircle2 className="w-6 h-6 text-brand-green" />}
              <Shirt className={`w-8 h-8 text-brand-green/20 group-hover:text-brand-green transition-colors ${selectedTeam === 1 ? 'text-brand-green' : ''}`} />
            </div>

            {/* Player List */}
            <div className="p-6 space-y-3">
              {/* Render Existing Players */}
              {team1Players.map((player, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded bg-white/5 border border-white/5">
                  <div className="w-8 h-8 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green font-display font-bold text-xs">
                    {player.substring(0, 2).toUpperCase()}
                  </div>
                  <span className="text-white font-medium uppercase tracking-wide text-sm">{player}</span>
                </div>
              ))}

              {/* Render Empty Slots */}
              {Array.from({ length: team1Size - team1Players.length }).map((_, idx) => (
                <div key={`empty-${idx}`} className={`p-3 rounded border border-dashed flex items-center justify-center gap-2 transition-all duration-300 ${selectedTeam === 1 && idx === 0
                    ? 'border-brand-green bg-brand-green/10 text-white animate-pulse'
                    : 'border-white/10 text-white/20'
                  }`}>
                  <span className="text-xs font-bold uppercase tracking-widest">
                    {selectedTeam === 1 && idx === 0 ? 'Your Slot' : 'Open Slot'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* TEAM 2 */}
          <div
            onClick={() => handleSelectTeam(2)}
            className={`relative rounded-sm border-2 transition-all duration-300 cursor-pointer overflow-hidden group ${selectedTeam === 2
                ? 'bg-[#1a1a1a] border-brand-orange shadow-[0_0_30px_rgba(232,113,0,0.2)]'
                : 'bg-[#111111] border-white/5 hover:border-white/20'
              } ${isTeam2Full ? 'opacity-50 pointer-events-none' : ''}`}
          >
            {/* Team Header */}
            <div className="p-6 border-b border-white/5 bg-gradient-to-l from-brand-orange/20 to-transparent flex justify-between items-center flex-row-reverse text-right">
              <div>
                <h2 className="text-2xl font-display font-bold text-white uppercase italic">Team 2</h2>
                <p className="text-white/40 text-xs uppercase tracking-widest">{isTeam2Full ? 'Squad Full' : `${team2Size - team2Players.length} Slots Open`}</p>
              </div>
              {selectedTeam === 2 && <CheckCircle2 className="w-6 h-6 text-brand-orange" />}
              <Shirt className={`w-8 h-8 text-brand-orange/20 group-hover:text-brand-orange transition-colors ${selectedTeam === 2 ? 'text-brand-orange' : ''}`} />
            </div>

            {/* Player List */}
            <div className="p-6 space-y-3">
              {/* Render Existing Players */}
              {team2Players.map((player, idx) => (
                <div key={idx} className="flex items-center justify-end gap-3 p-3 rounded bg-white/5 border border-white/5">
                  <span className="text-white font-medium uppercase tracking-wide text-sm">{player}</span>
                  <div className="w-8 h-8 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange font-display font-bold text-xs">
                    {player.substring(0, 2).toUpperCase()}
                  </div>
                </div>
              ))}

              {/* Render Empty Slots */}
              {Array.from({ length: team2Size - team2Players.length }).map((_, idx) => (
                <div key={`empty-${idx}`} className={`p-3 rounded border border-dashed flex items-center justify-center gap-2 transition-all duration-300 ${selectedTeam === 2 && idx === 0
                    ? 'border-brand-orange bg-brand-orange/10 text-white animate-pulse'
                    : 'border-white/10 text-white/20'
                  }`}>
                  <span className="text-xs font-bold uppercase tracking-widest">
                    {selectedTeam === 2 && idx === 0 ? 'Your Slot' : 'Open Slot'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CHECKOUT ACTION */}
        <div className={`fixed bottom-0 left-0 right-0 p-6 bg-[#0a0a0a] border-t border-white/10 transform transition-transform duration-500 z-50 ${selectedTeam ? 'translate-y-0' : 'translate-y-full'}`}>
          <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center gap-6 justify-between">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${selectedTeam === 1 ? 'bg-brand-green' : 'bg-brand-orange'}`}>
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest">Joining</p>
                <p className="text-xl font-display font-bold text-white uppercase">Team {selectedTeam}</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto flex-grow justify-end">
              <input
                type="text"
                placeholder="ENTER YOUR NAME (NO SPACES)"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                className="bg-white/5 border border-white/10 text-white px-6 py-4 rounded-sm font-display uppercase tracking-widest focus:outline-none focus:border-brand-green w-full md:w-96 transition-colors"
              />
              <button
                onClick={handlePaymentClick}
                disabled={!playerName || !selectedTeam}
                type="button"
                className={`px-12 py-4 rounded-sm font-display font-bold uppercase tracking-widest transition-all duration-300 ${(playerName && selectedTeam)
                    ? 'bg-white text-brand-black hover:bg-brand-green hover:text-white shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                    : 'bg-white/10 text-white/20 cursor-not-allowed'
                  }`}
              >
                Confirm & Pay £{match.price}
              </button>
            </div>
          </div>
        </div>

        {/* Stripe Payment Modal */}
        <StripePaymentModal
          isOpen={showPaymentModal}
          onClose={() => setShowPaymentModal(false)}
          amount={match.price}
          onSuccess={handlePaymentSuccess}
          playerName={playerName.toUpperCase()}
          teamNumber={selectedTeam!}
        />

      </div>
    </section>
  );
};
