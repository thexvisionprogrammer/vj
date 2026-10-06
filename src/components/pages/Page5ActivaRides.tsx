import React from 'react';
import { Sparkles, Heart, Eye, Film } from 'lucide-react';
import { SmartVideoPlayer } from '../SmartVideoPlayer';

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

const isVideoUrl = (url: string): boolean => {
  if (!url) return false;
  const lower = url.toLowerCase();
  return (
    lower.endsWith('.mp4') ||
    lower.endsWith('.webm') ||
    lower.endsWith('.mov') ||
    lower.endsWith('.ogg') ||
    lower.endsWith('.m4v') ||
    lower.includes('/videos/') ||
    lower.includes('.mp4?') ||
    lower.includes('mixkit.co/videos')
  );
};

export const Page5ActivaRides: React.FC<Page5ActivaRidesProps> = ({ activaRides }) => {
  const eyeQuotes = [
    {
      icon: "✨",
      quote: "Tere chehre se nazar nahi hat-ti, nazaare hum kya dekhein...",
      sub: "Your gaze melts away every worry in my soul."
    },
    {
      icon: "💖",
      quote: "Your eyes speak a language only my heart understands.",
      sub: "Purity, warmth, and endless love in every look."
    },
    {
      icon: "🌟",
      quote: "In a room full of art, I would still stare at your eyes.",
      sub: "The most beautiful view in the entire universe."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-slate-950 text-slate-100 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Romantic Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl w-full z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-semibold uppercase tracking-widest mb-4 backdrop-blur-md animate-pulse">
            <Eye className="w-4 h-4 text-rose-400" />
            Chapter 5: Your Eyes 👀✨
          </div>

          <h2 className="font-serif-title text-4xl sm:text-6xl font-bold bg-gradient-to-r from-pink-300 via-rose-200 to-amber-200 bg-clip-text text-transparent mb-4 leading-tight">
            {activaRides.title}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            {activaRides.subtitle}
          </p>
        </div>

        {/* Romantic Eye Quotes Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {eyeQuotes.map((q, idx) => (
            <div
              key={idx}
              className="glass-card p-5 border border-pink-500/20 hover:border-pink-500/50 rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-1 group bg-slate-900/60"
            >
              <div className="text-2xl mb-2">{q.icon}</div>
              <p className="font-serif-title text-base font-bold text-pink-200 mb-2 leading-snug group-hover:text-white transition-colors">
                "{q.quote}"
              </p>
              <p className="text-xs text-slate-400 italic">
                {q.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Photos & Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {activaRides.photos.map((item, idx) => {
            const isVideo = isVideoUrl(item.url);
            return (
              <div
                key={idx}
                className="glass-card overflow-hidden border border-rose-500/30 shadow-2xl group hover:border-rose-500/60 rounded-3xl transition-all duration-500 flex flex-col"
              >
                <div className="w-full relative bg-black flex items-center justify-center overflow-hidden">
                  {isVideo ? (
                    <div className="w-full p-2 bg-slate-950/90">
                      <SmartVideoPlayer
                        src={item.url}
                        controls={true}
                        autoPlay={false}
                        loop={true}
                        muted={false}
                        playsInline={true}
                        showFitToggle={true}
                        containerClassName="rounded-2xl border border-rose-500/20"
                      />
                    </div>
                  ) : (
                    <div className="aspect-[4/3] w-full overflow-hidden relative">
                      <img
                        src={item.url}
                        alt={item.caption}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
                      <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-mono text-pink-300 border border-pink-500/30 flex items-center gap-1 z-10 pointer-events-none">
                        <Heart className="w-3 h-3 text-rose-400 fill-rose-400" /> Cutest Eyes
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-5 bg-slate-900/90 border-t border-rose-500/20 flex-1">
                  <div className="flex items-center gap-1.5 text-xs text-rose-300 font-mono mb-1">
                    {isVideo ? (
                      <>
                        <Film className="w-3.5 h-3.5 text-pink-400" />
                        <span>Special Video Memory 🎬</span>
                      </>
                    ) : (
                      <>
                        <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
                        <span>Photo Memory 📸</span>
                      </>
                    )}
                  </div>
                  <p className="text-sm font-medium text-pink-100 leading-relaxed font-sans">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Heartfelt Romantic Letter Note */}
        <div className="relative rounded-3xl p-8 sm:p-10 border border-rose-500/40 bg-gradient-to-br from-slate-900/90 via-rose-950/30 to-slate-900/90 text-center shadow-2xl overflow-hidden group">
          {/* Glowing background aura */}
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-700 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-rose-500/30">
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              The Magic In Your Eyes
            </div>

            <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-pink-200 mb-4">
              A Message From My Heart ❤️
            </h3>

            <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl font-romantic text-2xl text-rose-200 italic">
              "{activaRides.note}"
            </p>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs font-mono text-pink-400 font-semibold">
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-bounce" />
              <span>Lost in your eyes forever & always</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
