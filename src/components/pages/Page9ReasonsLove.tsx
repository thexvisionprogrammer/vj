import React, { useState } from 'react';
import { Heart, Sparkles, Smile, Compass, Crown, Moon, Star, Utensils, Sun, Award, Gift, X, Search, CheckCircle2 } from 'lucide-react';
import type { Reason } from '../../data/birthdayData';

interface Page9ReasonsLoveProps {
  reasons: Reason[];
}

const extra50Reasons: string[] = [
  "The way your eyes light up when you see your favorite food.",
  "How soft your hands feel when you hold mine.",
  "Your adorable sleepy voice during morning calls.",
  "The way you get cute & protective over tiny things.",
  "How you look like an absolute angel when you sleep.",
  "The way you double-check if I reached home safely.",
  "Your infectious giggle when I tell terrible jokes.",
  "How gorgeous you look in ethnic sarees and traditional outfits.",
  "The way you adjust your hair behind your ear when shy.",
  "How you remember every small detail about us.",
  "Your endless obsession with street food & roadside chai.",
  "The warm feeling in my chest whenever you hug me tight.",
  "How attentively you listen when I ramble about random things.",
  "The cute angry face you make when I tease you.",
  "How you make even silent car rides feel like unforgettable adventures.",
  "The sweet scent of your perfume that stays on my jacket.",
  "How you always pray for our happiness and togetherness.",
  "The way you look at me like I'm your entire world.",
  "Your endless patience with my goofy mood swings.",
  "How adorable you look in oversized hoodies.",
  "The way you hold my arm tightly while walking on busy streets.",
  "Your sweet 'good morning' texts that start my day with a smile.",
  "How caring and tender you are towards animals and children.",
  "The way you inspire me to be a better person every single day.",
  "Your unique sense of humor that only I truly understand.",
  "How you squeeze my hand during scary movie scenes.",
  "The special way you say my name with so much warmth.",
  "How your presence turns any stressful day into instant peace.",
  "The way we can sit in complete silence and still feel so connected.",
  "Your cute victory dance when something good happens.",
  "How you support every single one of my dreams without doubt.",
  "The way you pout when you crave desserts & ice cream.",
  "How naturally beautiful you look without any makeup.",
  "The way you check up on me whenever I feel tired.",
  "How we can talk about our future for hours without getting bored.",
  "Your sweet smile right before you kiss me.",
  "The way you turn simple everyday moments into magical memories.",
  "How excited you get over small, thoughtful surprises.",
  "The way you hold my pinky finger while we walk.",
  "Your unwavering loyalty and deep trust in our bond.",
  "How you make me laugh until my stomach hurts.",
  "The way you wrap your arms around me during Activa rides.",
  "Your pure, innocent heart that brings out the best in everyone.",
  "The way you blush whenever I compliment you genuinely.",
  "How you remember every special date and anniversary.",
  "Your cute little habits that only I am lucky enough to see.",
  "The deep comfort of knowing you're always in my corner.",
  "How your gentle touch calms down all my anxieties.",
  "The way you make any place feel like home with your vibe.",
  "Simply because you are VIJAYLAXMI (Cutu) — my first, my last, and my forever love! ❤️"
];

export const Page9ReasonsLove: React.FC<Page9ReasonsLoveProps> = ({ reasons }) => {
  const [flippedIds, setFlippedIds] = useState<number[]>([]);
  const [show50Modal, setShow50Modal] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleToggleFlip = (id: number) => {
    if (flippedIds.includes(id)) {
      setFlippedIds(flippedIds.filter((item) => item !== id));
    } else {
      setFlippedIds([...flippedIds, id]);
    }
  };

  const isAllFlipped = flippedIds.length >= reasons.length;

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

  const filtered50Reasons = extra50Reasons.filter((r) =>
    r.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-slate-950 text-slate-100 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl w-full z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 fill-pink-400" />
            Chapter 9: Interactive Love Notes
          </div>

          <h2 className="font-serif-title text-4xl sm:text-6xl font-bold bg-gradient-to-r from-pink-300 via-rose-200 to-amber-200 bg-clip-text text-transparent mb-3 leading-tight">
            10 Reasons Why I Love You
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto mb-4 leading-relaxed">
            Click on all 10 cards to flip them over and reveal secret reasons why you mean the world to me!
          </p>

          {/* Progress Counter Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-pink-500/20 border border-pink-500/40 text-xs sm:text-sm font-bold text-pink-200 shadow-lg shadow-pink-500/10">
            <Sparkles className="w-4 h-4 text-pink-400 animate-pulse" />
            <span>Progress: {flippedIds.length} / {reasons.length} Reasons Unlocked</span>
            {isAllFlipped && <CheckCircle2 className="w-4 h-4 text-emerald-400 ml-1" />}
          </div>
        </div>

        {/* 10 Interactive Flip Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
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
                  <div className="absolute inset-0 w-full h-full rounded-2xl glass-card border border-pink-500/30 p-5 flex flex-col items-center justify-center text-center backface-hidden shadow-xl group-hover:border-pink-500/60 group-hover:scale-[1.02] transition-all bg-slate-900/80">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-pink-600 to-rose-500 flex items-center justify-center mb-3 shadow-lg shadow-pink-500/30 group-hover:scale-110 transition-transform">
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
                  <div className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br from-slate-900 via-pink-950/50 to-slate-900 border border-pink-500/50 p-4 flex flex-col items-center justify-between text-center backface-hidden rotate-y-180 shadow-2xl overflow-y-auto">
                    <div className="p-2 rounded-xl bg-pink-500/20 border border-pink-500/30 mb-1">
                      {renderIcon(reason.iconName)}
                    </div>

                    <h4 className="font-serif-title text-sm font-bold text-pink-200 leading-snug">
                      {reason.title}
                    </h4>

                    <p className="text-[11px] text-slate-300 leading-relaxed italic my-1">
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

        {/* Surprise 50+ Reasons Unlocked Card (Revealed after clicking/flipping all 10 cards) */}
        {isAllFlipped ? (
          <div className="relative rounded-3xl p-8 sm:p-10 border border-pink-500/50 bg-gradient-to-r from-slate-900/90 via-pink-950/60 to-slate-900/90 text-center shadow-2xl overflow-hidden animate-fade-in group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition duration-700 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-pink-500 to-amber-400 flex items-center justify-center shadow-2xl shadow-pink-500/40 mb-4 animate-bounce">
                <Gift className="w-8 h-8 text-white" />
              </div>

              <h3 className="font-serif-title text-2xl sm:text-4xl font-bold bg-gradient-to-r from-pink-200 via-rose-100 to-amber-200 bg-clip-text text-transparent mb-3">
                Wait... You thought I only had 10 reasons?! 😳💖
              </h3>

              <p className="text-slate-200 text-base sm:text-lg max-w-2xl leading-relaxed mb-6">
                In truth, 10 reasons are nowhere near enough to describe how much you mean to me. Here are <strong className="text-pink-300 font-bold">50 MORE reasons</strong> why I fall for you every single day!
              </p>

              <button
                onClick={() => setShow50Modal(true)}
                className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 text-white font-bold text-base shadow-2xl shadow-pink-500/50 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-yellow-200 animate-spin" />
                <span>Unlock 50 More Reasons Why I Love You 🎁</span>
                <Heart className="w-5 h-5 fill-white text-white" />
              </button>
            </div>
          </div>
        ) : (
          /* Hint Banner showing how many cards left to flip */
          <div className="text-center p-6 rounded-2xl bg-slate-900/60 border border-pink-500/20 backdrop-blur-md">
            <p className="text-xs sm:text-sm text-pink-300 font-medium">
              💡 <span className="font-semibold text-white">Surprise Hint:</span> Flip all {reasons.length} cards above to unlock a grand secret bonus surprise! ({reasons.length - flippedIds.length} remaining)
            </p>
          </div>
        )}

        {/* 50 Reasons Fullscreen Interactive Modal */}
        {show50Modal && (
          <div
            onClick={() => setShow50Modal(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl animate-fade-in"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[85vh] glass-card p-6 sm:p-8 border border-pink-500/50 rounded-3xl shadow-2xl flex flex-col bg-slate-900/95"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-pink-500/20 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-pink-500/20 border border-pink-500/30">
                    <Heart className="w-6 h-6 text-pink-400 fill-pink-400" />
                  </div>
                  <div>
                    <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-pink-200">
                      50 More Reasons Why I Love You Cutu ❤️
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">
                      Infinite love, one reason at a time
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setShow50Modal(false)}
                  className="text-slate-400 hover:text-white p-2 rounded-full bg-black/50 border border-white/10 hover:bg-rose-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search / Filter input */}
              <div className="relative mb-4">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search reasons (e.g. smile, food, eyes, hugs)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/80 border border-pink-500/30 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-pink-500 transition-all"
                />
              </div>

              {/* 50 Reasons Scrollable Grid */}
              <div className="flex-1 overflow-y-auto pr-2 space-y-3 max-h-[55vh] custom-scrollbar">
                {filtered50Reasons.length > 0 ? (
                  filtered50Reasons.map((reasonText, idx) => {
                    const originalIndex = extra50Reasons.indexOf(reasonText) + 1;
                    return (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-gradient-to-r from-slate-950/90 to-pink-950/30 border border-pink-500/20 hover:border-pink-500/50 transition-all flex items-start gap-3.5 group shadow-md"
                      >
                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-pink-500/20 border border-pink-500/40 text-pink-300 text-xs font-mono font-bold flex items-center justify-center group-hover:bg-pink-500 group-hover:text-white transition-all">
                          {originalIndex}
                        </span>
                        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium group-hover:text-pink-100 transition-colors pt-0.5">
                          {reasonText}
                        </p>
                      </div>
                    );
                  })
                ) : (
                  <p className="text-center text-slate-400 text-xs py-8">
                    No matching reasons found. Try searching for another word! 💕
                  </p>
                )}
              </div>

              {/* Modal Footer */}
              <div className="pt-4 border-t border-pink-500/20 mt-4 flex items-center justify-between text-xs text-pink-300 font-mono">
                <span>Total: 50 Special Reasons</span>
                <span className="flex items-center gap-1 text-rose-400">
                  <Heart className="w-3.5 h-3.5 fill-rose-400 animate-bounce" /> Always & Forever
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
