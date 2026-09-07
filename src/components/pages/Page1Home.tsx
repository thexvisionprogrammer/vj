import React from 'react';
import { Heart, Sparkles, Music, ChevronDown } from 'lucide-react';

interface Page1HomeProps {
  partnerName: string;
  tagline: string;
  heroPhoto: string;
  bgSongTitle: string;
  onNext: () => void;
}

export const Page1Home: React.FC<Page1HomeProps> = ({
  partnerName,
  tagline,
  heroPhoto,
  bgSongTitle,
  onNext,
}) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 px-4 py-12">
      {/* Fullscreen Hero Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroPhoto}
          alt={partnerName}
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/40" />
        <div className="absolute inset-0 bg-radial from-transparent via-slate-950/50 to-slate-950" />
      </div>

      {/* Floating Animated Heart Particles */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-30"
            style={{
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 90 + 5}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + (i % 4)}s`,
            }}
          >
            <Heart
              className="text-pink-400 fill-pink-500/40"
              style={{ width: `${16 + (i % 3) * 12}px`, height: `${16 + (i % 3) * 12}px` }}
            />
          </div>
        ))}
      </div>

      {/* Main Hero Card */}
      <div className="relative z-20 max-w-3xl text-center flex flex-col items-center">
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/20 border border-pink-500/40 backdrop-blur-md mb-6 animate-pulse">
          <Sparkles className="w-4 h-4 text-pink-300" />
          <span className="text-xs font-semibold uppercase tracking-widest text-pink-200">
            A Birthday Celebration Just For You
          </span>
        </div>

        {/* Grand Title */}
        <h1 className="font-serif-title font-extrabold text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight mb-4 drop-shadow-2xl">
          Happy Birthday,{' '}
          <span className="font-romantic text-6xl sm:text-8xl lg:text-9xl bg-gradient-to-r from-pink-400 via-rose-300 to-amber-200 bg-clip-text text-transparent block sm:inline">
            {partnerName}
          </span>
        </h1>

        {/* Romantic Subtitle / Tagline */}
        <p className="text-lg sm:text-2xl text-slate-200 font-light max-w-xl mb-8 leading-relaxed drop-shadow">
          "{tagline}"
        </p>

        {/* Music Hint Pill */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black/40 border border-white/10 text-xs text-slate-300 backdrop-blur-md mb-10">
          <Music className="w-4 h-4 text-pink-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span>Background Song: <strong className="text-pink-300">{bgSongTitle}</strong></span>
        </div>

        {/* Start Journey CTA Button */}
        <button
          onClick={onNext}
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 text-white font-semibold text-lg shadow-xl shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        >
          <span>Begin Our Story</span>
          <Heart className="w-5 h-5 fill-white group-hover:scale-125 transition-transform" />
          <ChevronDown className="w-5 h-5 -mr-1 animate-bounce" />
        </button>
      </div>
    </div>
  );
};
