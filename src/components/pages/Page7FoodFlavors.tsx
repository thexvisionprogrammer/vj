import React from 'react';
import { Utensils, Heart, Sparkles, Coffee } from 'lucide-react';

interface FoodItem {
  url: string;
  dish: string;
  note: string;
}

interface Page7FoodFlavorsProps {
  foodFlavors: {
    title: string;
    subtitle: string;
    photos: FoodItem[];
    note: string;
  };
}

export const Page7FoodFlavors: React.FC<Page7FoodFlavorsProps> = ({ foodFlavors }) => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-slate-950 text-slate-100 flex flex-col items-center">
      <div className="max-w-5xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Utensils className="w-3.5 h-3.5" />
            Chapter 7: Culinary Memories
          </div>

          <h2 className="font-serif-title text-4xl sm:text-6xl font-bold bg-gradient-to-r from-orange-300 via-amber-200 to-rose-200 bg-clip-text text-transparent mb-3">
            {foodFlavors.title}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto">
            "{foodFlavors.subtitle}"
          </p>
        </div>

        {/* Food Moments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {foodFlavors.photos.map((item, idx) => (
            <div
              key={idx}
              className="glass-card overflow-hidden border border-orange-500/20 shadow-xl group hover:border-orange-500/50 transition-all duration-300 flex flex-col"
            >
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <img
                  src={item.url}
                  alt={item.dish}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="px-3 py-1 rounded-full bg-orange-500/30 backdrop-blur-md border border-orange-400/40 text-xs font-bold text-orange-200">
                    {item.dish}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-sm text-slate-300 italic leading-relaxed">
                  "{item.note}"
                </p>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-orange-300">
                  <span className="flex items-center gap-1">
                    <Coffee className="w-3.5 h-3.5" /> Food Date Memory
                  </span>
                  <Heart className="w-3.5 h-3.5 fill-orange-400 text-orange-400" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Heart Note Card */}
        <div className="glass-card p-8 border border-orange-500/30 text-center relative overflow-hidden">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-amber-300" />
            <h3 className="font-serif-title text-2xl font-bold text-orange-200">
              The Secret Recipe of Us
            </h3>
          </div>
          <p className="text-slate-300 text-base leading-relaxed max-w-2xl mx-auto italic">
            "{foodFlavors.note}"
          </p>
        </div>
      </div>
    </div>
  );
};
