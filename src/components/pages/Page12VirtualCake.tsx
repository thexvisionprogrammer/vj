import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Cake, Sparkles, Play, Flame, Heart } from 'lucide-react';

interface Page12VirtualCakeProps {
  partnerName: string;
  virtualCake: {
    title: string;
    instructions: string;
    videoWishUrl: string;
    finalMessage: string;
  };
}

export const Page12VirtualCake: React.FC<Page12VirtualCakeProps> = ({
  partnerName,
  virtualCake,
}) => {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [litCandles, setLitCandles] = useState([true, true, true, true, true]);
  const [showVideoWish, setShowVideoWish] = useState(false);

  const triggerConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#ec4899', '#f43f5e', '#fbbf24', '#38bdf8', '#a855f7'],
    });

    setTimeout(() => {
      confetti({
        particleCount: 100,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 100,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });
    }, 400);
  };

  const handleBlowOut = () => {
    setLitCandles([false, false, false, false, false]);
    setCandlesBlown(true);
    triggerConfetti();
  };

  const toggleSingleCandle = (index: number) => {
    const updated = [...litCandles];
    updated[index] = !updated[index];
    setLitCandles(updated);

    if (updated.every((c) => !c)) {
      setCandlesBlown(true);
      triggerConfetti();
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-slate-950 text-slate-100 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full text-center">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cake className="w-3.5 h-3.5" />
            Chapter 12: Virtual Cake & Wish
          </div>

          <h2 className="font-serif-title text-4xl sm:text-6xl font-bold bg-gradient-to-r from-pink-300 via-rose-200 to-amber-200 bg-clip-text text-transparent mb-3">
            {virtualCake.title}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto">
            {virtualCake.instructions}
          </p>
        </div>

        {/* 3D Virtual Cake Container */}
        <div className="glass-card p-8 sm:p-12 border border-pink-500/30 shadow-2xl relative overflow-hidden mb-10 max-w-xl mx-auto flex flex-col items-center">
          {/* Sparkles glow backdrop */}
          <div className="absolute inset-0 bg-radial from-pink-500/10 via-transparent to-transparent pointer-events-none" />

          {/* Candle Flames Row */}
          <div className="flex items-center gap-6 sm:gap-8 mb-2 z-10">
            {litCandles.map((isLit, idx) => (
              <div
                key={idx}
                onClick={() => toggleSingleCandle(idx)}
                className="flex flex-col items-center cursor-pointer group"
                title="Click candle to blow out!"
              >
                {/* Flame */}
                <div className="h-10 flex items-end justify-center mb-1">
                  {isLit ? (
                    <div className="relative animate-candle-flame">
                      <div className="w-4 h-6 rounded-full bg-gradient-to-t from-amber-500 via-orange-400 to-yellow-200 shadow-[0_0_15px_#f59e0b] blur-[0.5px]" />
                    </div>
                  ) : (
                    <div className="w-1 h-4 bg-slate-600 rounded-t opacity-40 animate-pulse" />
                  )}
                </div>

                {/* Candle Stick */}
                <div className="w-3 h-14 rounded-t bg-gradient-to-b from-pink-300 via-rose-400 to-pink-500 border border-white/20 shadow-md group-hover:scale-105 transition-transform" />
              </div>
            ))}
          </div>

          {/* Cake Layers */}
          <div className="w-full max-w-md space-y-1 z-10">
            {/* Top Frosting Layer */}
            <div className="h-10 bg-gradient-to-r from-pink-400 via-rose-300 to-pink-400 rounded-t-3xl border-b-4 border-rose-500 shadow-md flex items-center justify-around px-4">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="w-3 h-3 rounded-full bg-white shadow-inner" />
              ))}
            </div>

            {/* Middle Cake Layer */}
            <div className="h-16 bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 border-y border-pink-400/40 shadow-lg flex items-center justify-between px-6">
              <span className="text-xl">🍓</span>
              <span className="font-serif-title font-bold text-amber-200 text-lg sm:text-2xl drop-shadow">
                HAPPY BIRTHDAY {partnerName}!
              </span>
              <span className="text-xl">🍓</span>
            </div>

            {/* Base Cake Layer */}
            <div className="h-20 bg-gradient-to-r from-pink-700 via-rose-600 to-pink-700 rounded-b-2xl border-t-2 border-pink-400/30 shadow-xl flex items-center justify-center">
              <div className="flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <Heart key={i} className="w-5 h-5 text-pink-300 fill-pink-300/40" />
                ))}
              </div>
            </div>
          </div>

          {/* Blow Out Action Buttons */}
          <div className="mt-8 z-10 flex flex-wrap items-center justify-center gap-4">
            {!candlesBlown ? (
              <button
                onClick={handleBlowOut}
                className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 via-rose-500 to-pink-500 text-white font-extrabold text-lg shadow-xl shadow-pink-500/30 hover:scale-105 active:scale-95 transition-all"
              >
                <Flame className="w-6 h-6 animate-bounce" />
                <span>Blow Out All Candles! 🎂</span>
              </button>
            ) : (
              <div className="flex flex-col items-center gap-3 animate-in fade-in zoom-in-95">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold text-sm">
                  <Sparkles className="w-4 h-4" /> Wish Made & Candles Extinguished! 🎉
                </div>
                <button
                  onClick={() => setShowVideoWish(true)}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold text-sm shadow-lg hover:scale-105 transition-all"
                >
                  <Play className="w-4 h-4 fill-white" /> Watch Birthday Wish Video 🎥
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Video Wish Player Modal */}
        {showVideoWish && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <div className="relative w-full max-w-3xl glass-card p-6 border border-pink-500/50 rounded-3xl shadow-2xl">
              <button
                onClick={() => setShowVideoWish(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full bg-black/50 transition-colors z-10"
              >
                ✕
              </button>

              <h3 className="font-serif-title text-2xl font-bold text-pink-200 mb-4 text-center">
                My Birthday Video Wish For You ❤️
              </h3>

              <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-inner mb-4">
                <video
                  src={virtualCake.videoWishUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              </div>

              <p className="text-center text-pink-300 font-serif-title text-xl font-bold italic">
                "{virtualCake.finalMessage}"
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
