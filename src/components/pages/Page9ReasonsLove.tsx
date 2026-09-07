import React, { useState } from 'react';
import { Heart, Sparkles, Smile, Compass, Crown, Moon, Star, Utensils, Sun, Award } from 'lucide-react';
import type { Reason } from '../../data/birthdayData';

interface Page9ReasonsLoveProps {
  reasons: Reason[];
}

export const Page9ReasonsLove: React.FC<Page9ReasonsLoveProps> = ({ reasons }) => {
  const [flippedIds, setFlippedIds] = useState<number[]>([]);

  const handleToggleFlip = (id: number) => {
    if (flippedIds.includes(id)) {
      setFlippedIds(flippedIds.filter((item) => item !== id));
    } else {
      setFlippedIds([...flippedIds, id]);
    }
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smile': return <Smile className="w-6 h-6 text-amber-300" />;
      case 'Heart': return <Heart className="w-6 h-6 text-pink-400 fill-pink-400" />;
      case 'Compass': return <Compass className="w-6 h-6 text-sky-400" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-rose-300" />;
      case 'Crown': return <Crown className="w-6 h-6 text-amber-400" />;
      case 'Moon': return <Moon className="w-6 h-6 text-indigo-300" />;
      case 'Star': return <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />;
      case 'Utensils': return <Utensils className="w-6 h-6 text-orange-400" />;
      case 'Sun': return <Sun className="w-6 h-6 text-amber-300" />;
      case 'Award': return <Award className="w-6 h-6 text-pink-300" />;
      default: return <Heart className="w-6 h-6 text-pink-400" />;
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-slate-950 text-slate-100 flex flex-col items-center">
      <div className="max-w-5xl w-full">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 fill-pink-400" />
            Chapter 9: Interactive Love Notes
          </div>

          <h2 className="font-serif-title text-4xl sm:text-6xl font-bold bg-gradient-to-r from-pink-300 via-rose-200 to-amber-200 bg-clip-text text-transparent mb-3">
            10 Reasons Why I Love You
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto mb-4">
            Click on any card to flip it over and uncover a secret reason why you are so special!
          </p>

          {/* Progress Counter */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/20 border border-pink-500/40 text-xs font-bold text-pink-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Progress: {flippedIds.length} / {reasons.length} Reasons Unlocked</span>
          </div>
        </div>

        {/* 10 Interactive Flip Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {reasons.map((reason) => {
            const isFlipped = flippedIds.includes(reason.id);
            return (
              <div
                key={reason.id}
                onClick={() => handleToggleFlip(reason.id)}
                className="perspective-1000 h-64 cursor-pointer group"
              >
                <div
                  className={`relative w-full h-full duration-700 transform-style-3d transition-transform ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* Front Side (Gift/Heart Box) */}
                  <div className="absolute inset-0 w-full h-full rounded-2xl glass-card border border-pink-500/30 p-6 flex flex-col items-center justify-center text-center backface-hidden shadow-xl group-hover:border-pink-500/60 group-hover:scale-[1.02] transition-all">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-pink-600 to-rose-500 flex items-center justify-center mb-4 shadow-lg shadow-pink-500/30 group-hover:scale-110 transition-transform">
                      <Heart className="w-7 h-7 text-white fill-white animate-pulse" />
                    </div>

                    <span className="font-serif-title font-bold text-lg text-slate-100 mb-1">
                      Box #{reason.id}
                    </span>

                    <span className="text-xs text-pink-400 font-medium">
                      Tap to reveal ✨
                    </span>
                  </div>

                  {/* Back Side (Revealed Reason) */}
                  <div className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br from-slate-900 via-pink-950/40 to-slate-900 border border-pink-500/50 p-5 flex flex-col items-center justify-between text-center backface-hidden rotate-y-180 shadow-2xl overflow-y-auto">
                    <div className="p-2 rounded-xl bg-pink-500/20 border border-pink-500/30">
                      {renderIcon(reason.iconName)}
                    </div>

                    <h4 className="font-serif-title text-base font-bold text-pink-200">
                      {reason.title}
                    </h4>

                    <p className="text-xs text-slate-300 leading-relaxed italic">
                      "{reason.description}"
                    </p>

                    <span className="text-[10px] text-pink-400 font-bold uppercase tracking-wider">
                      Click to flip back
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
