import React from 'react';
import { Mountain, Compass, Snowflake, MapPin } from 'lucide-react';

interface MountainMemory {
  title: string;
  location: string;
  date: string;
  imageUrl: string;
  note: string;
}

interface Page4MountainDiariesProps {
  mountainDiaries: {
    title: string;
    subtitle: string;
    heroImage: string;
    videoLoopUrl: string;
    altitudeText: string;
    memories: MountainMemory[];
  };
}

export const Page4MountainDiaries: React.FC<Page4MountainDiariesProps> = ({ mountainDiaries }) => {
  return (
    <div className="relative min-h-screen pt-24 pb-16 px-4 bg-slate-950 text-slate-100 overflow-hidden flex flex-col items-center">
      {/* Background Mountain Image/Video Loop */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-25">
        <img
          src={mountainDiaries.heroImage}
          alt="Snow Mountains"
          className="w-full h-full object-cover filter brightness-75 blur-xs scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40" />
      </div>

      {/* Floating Animated Snow Particles */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-60 text-sky-200"
            style={{
              left: `${Math.random() * 95}%`,
              top: `${Math.random() * 95}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + (i % 5)}s`,
            }}
          >
            <Snowflake style={{ width: `${12 + (i % 3) * 8}px`, height: `${12 + (i % 3) * 8}px` }} />
          </div>
        ))}
      </div>

      <div className="relative z-20 max-w-5xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/40 text-sky-300 text-xs font-semibold uppercase tracking-widest mb-3 backdrop-blur-md">
            <Mountain className="w-4 h-4 text-sky-300" />
            Chapter 4: The Mountain Diaries
          </div>

          <h2 className="font-serif-title text-4xl sm:text-6xl font-bold bg-gradient-to-r from-sky-200 via-teal-100 to-indigo-200 bg-clip-text text-transparent mb-3">
            {mountainDiaries.title}
          </h2>

          <p className="text-slate-300 text-lg max-w-xl mx-auto font-light">
            "{mountainDiaries.subtitle}"
          </p>

          {/* Altitude Badge */}
          <div className="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900/80 border border-sky-400/50 shadow-lg text-xs font-mono font-bold text-sky-300 tracking-wider">
            <Compass className="w-4 h-4 text-sky-400 animate-spin" style={{ animationDuration: '10s' }} />
            <span>ALTITUDE: {mountainDiaries.altitudeText}</span>
          </div>
        </div>

        {/* Memories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {mountainDiaries.memories.map((mem, idx) => (
            <div
              key={idx}
              className="glass-card overflow-hidden border border-sky-500/30 shadow-2xl hover:border-sky-400/60 transition-all duration-300 group"
            >
              <div className="aspect-video w-full overflow-hidden relative">
                <img
                  src={mem.imageUrl}
                  alt={mem.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-xs font-medium text-sky-300 border border-sky-500/30 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  <span>{mem.location}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-serif-title text-xl font-bold text-slate-100 mb-2 group-hover:text-sky-300 transition-colors">
                  {mem.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "{mem.note}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Banner Quote Card */}
        <div className="glass-card p-8 border border-sky-500/30 text-center relative overflow-hidden">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl" />
          <h4 className="font-serif-title text-2xl font-bold text-sky-200 mb-3">
            "Our Highest Highs Together"
          </h4>
          <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
            From freezing temperatures in Manali to standing tall at Shinkula Pass, every snowy mountain peak was proof that no height is too high when we climb together.
          </p>
        </div>
      </div>
    </div>
  );
};
