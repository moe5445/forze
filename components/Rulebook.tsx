import React from 'react';
import { Reveal } from './ui/Reveal';

export const Rulebook: React.FC = () => {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <Reveal>
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-12 text-center">
          THE OFFICIAL <span className="text-brand-green">FORZE</span> RULEBOOK
        </h1>
      </Reveal>

      <div className="max-w-4xl mx-auto space-y-12 text-white/80">
        
        <section>
          <Reveal>
            <h2 className="text-2xl font-display font-bold text-white mb-4">Squads</h2>
            <p className="mb-4">
              Each match is played by two teams, each consisting of at least 4 outfield players and 1 goalkeeper. An organiser will join the game if needed to make up number.
            </p>
            <p className="mb-4">
              The formations and positions are set by each team. There are no restrictions to the number of defenders or attackers per team.
            </p>
            <p className="font-bold text-brand-green">
              No Subs, everyone plays!
            </p>
          </Reveal>
        </section>

        <section>
          <Reveal>
            <h2 className="text-2xl font-display font-bold text-white mb-4">General</h2>
            <p className="mb-4">
              The team that scores the most goals during a game is the winner. If both teams score an equal number of goals, the game ends in a draw and a “quick fire” sudden death penalty shootout will determine the winner.
            </p>
            <p className="mb-4">
              Corners, freekicks, and penalties are part of the game, and keepers can distribute the ball out whatever way they like in goal kicks. They can use their feet or throw the ball out of their hands.
            </p>
            <p className="mb-4">
              Throw ins can be done with either your feet or your hands too.
            </p>
            <p className="mb-4">
              Back passes are allowed, and the keeper can play the ball outside his box. However keepers can’t use their hands outside the box.
            </p>
            <p>
              When a freekick is given, the opposition must be at least 3 yards away from the ball. You can shoot in any freekick.
            </p>
          </Reveal>
        </section>

        <section>
          <Reveal>
            <h2 className="text-2xl font-display font-bold text-white mb-4">No Shows/Cancellations</h2>
            <p className="mb-4">
              If you can't show up for a match you have booked into, you should email <a href="mailto:Forze.S.T.F@gmail.com" className="text-brand-green hover:underline">Forze.S.T.F@gmail.com</a> three hours in advance in order for us to put the slot back up live to find a replacement.
            </p>
            <p className="mb-4">
              If you let us know in advance that you can't come, you can use the money to book into a different Forze Battle in the future.
            </p>
            <p>
              If you do not let us know at least three hours in advance, you do not receive any sort of refund. We aim to fill all matches and that would affect us massively.
            </p>
          </Reveal>
        </section>

        <section>
          <Reveal>
            <h2 className="text-2xl font-display font-bold text-white mb-4">Awarding Goals</h2>
            <p className="mb-4">
              A goal is awarded if the whole of the ball passes over the goal line. We have not got VAR installed yet, so the referee always decides. Remember that even professional referees make mistakes.
            </p>
            <p className="mb-4">
              A goal will not be given if it has been thrown by hand, including goalkeepers.
            </p>
            <p>
              Unlike many 5 a side matches, during Forze matches, you can score inside the box at all times and the keeper can come out of his box. They can’t use their hands outside the box.
            </p>
          </Reveal>
        </section>

        <section>
          <Reveal>
            <h2 className="text-2xl font-display font-bold text-white mb-4">Bookings</h2>
            <p className="mb-4">
              Yellow and red cards will be shown when necessary, so watch you don’t release your inner Pepe or Ramos.
            </p>
            <p className="mb-4">
              If you get a red card, you will be out of the game for a duration of time. You do not get suspended for the next game. However, if you start conflict, you will be banned from all matches.
            </p>
            <p className="mb-4">
              Tackles are allowed, however we never want to see any studs shown, that is a straight red.
            </p>
            <p className="italic text-white/60 mt-8 border-t border-white/10 pt-4">
              These are the official rules for all Forze Matches.
            </p>
          </Reveal>
        </section>

      </div>
    </div>
  );
};
