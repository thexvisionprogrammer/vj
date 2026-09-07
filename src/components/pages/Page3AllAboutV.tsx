import React from 'react';
import { Heart, Sparkles, Crown } from 'lucide-react';

interface PhotoItem {
  url: string;
  caption: string;
  tag: string;
}

interface Compliment {
  icon: string;
  text: string;
}

interface Page3AllAboutVProps {
  partnerName: string;
  aboutV: {
    title: string;
    description: string;
    photos: PhotoItem[];
    compliments: Compliment[];
  };
}

export const Page3AllAboutV: React.FC<Page3AllAboutVProps> = ({ partnerName, aboutV }) => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-slate-950 text-slate-100 flex flex-col items-center">
      <div className="max-w-5xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Crown className="w-3.5 h-3.5" />
            Chapter 3: All About {partnerName}
          </div>
          <h2 className="font-serif-title text-4xl sm:text-6xl font-bold bg-gradient-to-r from-pink-300 via-rose-200 to-amber-200 bg-clip-text text-transparent mb-4">
            {aboutV.title}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {aboutV.description}
          </p>
        </div>

        {/* Solo Photos Grid Collage */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {aboutV.photos.map((photo, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden glass-card border border-white/10 hover:border-pink-500/50 transition-all duration-500 hover:-translate-y-2 shadow-xl"
            >
              {/* Photo Container */}
              <div className="aspect-[3/4] w-full overflow-hidden relative">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              </div>

              {/* Tag Badge */}
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-semibold text-pink-300 border border-pink-500/30">
                {photo.tag}
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-4 text-left">
                <p className="text-sm font-medium text-slate-100 group-hover:text-pink-200 transition-colors">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Compliment & Praise Cards Grid */}
        <div className="glass-card p-8 border border-pink-500/30 shadow-2xl relative overflow-hidden">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-amber-300" />
            <h3 className="font-serif-title text-2xl font-bold text-slate-100">
              Why You Are One In A Million
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {aboutV.compliments.map((comp, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-pink-500/30 transition-all"
              >
                <div className="p-2.5 rounded-lg bg-pink-500/20 text-pink-300 mt-0.5">
                  <Heart className="w-4 h-4 fill-pink-400" />
                </div>
                <p className="text-sm text-slate-200 leading-relaxed font-medium">
                  {comp.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
