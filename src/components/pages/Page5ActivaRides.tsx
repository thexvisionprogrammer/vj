import React from 'react';
import { Sparkles, Wind, Heart } from 'lucide-react';

interface ActivaPhoto {
  url: string;
  caption: string;
}

interface Page5ActivaRidesProps {
  activaRides: {
    title: string;
    subtitle: string;
    bgPhoto: string;
    photos: ActivaPhoto[];
    note: string;
  };
}

export const Page5ActivaRides: React.FC<Page5ActivaRidesProps> = ({ activaRides }) => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-slate-950 text-slate-100 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Wind className="w-3.5 h-3.5" />
            Chapter 5: Scooter Chronicles
          </div>

          <h2 className="font-serif-title text-4xl sm:text-6xl font-bold bg-gradient-to-r from-amber-300 via-rose-200 to-pink-300 bg-clip-text text-transparent mb-3">
            {activaRides.title}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto">
            {activaRides.subtitle}
          </p>
        </div>

        {/* Animated Scooter Road Graphic */}
        <div className="relative w-full py-6 mb-10 overflow-hidden">
          {/* Road Line */}
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent relative">
            <div className="absolute inset-0 bg-dashed-line border-t border-dashed border-amber-400/60" />
          </div>

          {/* Riding Scooter Icon */}
          <div className="absolute top-2 left-[10%] animate-float flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 px-3 py-1 rounded-full text-amber-300 backdrop-blur-md shadow-lg">
            <span className="text-xl">🛵</span>
            <span className="text-xs font-mono font-bold">Kali Activa On Road</span>
            <Heart className="w-3 h-3 text-pink-400 fill-pink-400 animate-ping" />
          </div>
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {activaRides.photos.map((item, idx) => (
            <div
              key={idx}
              className="glass-card overflow-hidden border border-amber-500/20 shadow-xl group hover:border-amber-500/50 transition-all duration-300"
            >
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <img
                  src={item.url}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              </div>
              <div className="p-4">
                <p className="text-sm font-medium text-slate-200">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Heartfelt Scooter Ride Note */}
        <div className="glass-card p-8 border border-amber-500/30 text-center relative overflow-hidden">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <h3 className="font-serif-title text-2xl font-bold text-amber-200">
              Why Simple Scooter Rides Are Magical
            </h3>
          </div>
          <p className="text-slate-300 text-base leading-relaxed max-w-2xl mx-auto italic">
            "{activaRides.note}"
          </p>
        </div>
      </div>
    </div>
  );
};
