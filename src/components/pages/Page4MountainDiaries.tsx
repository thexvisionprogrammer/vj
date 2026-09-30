import React, { useState, useRef } from 'react';
import { Mountain, Compass, Snowflake, MapPin, Play, Pause, Headphones, Sparkles } from 'lucide-react';

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
    audioUrl?: string;
    audioTitle?: string;
    audioDuration?: string;
    memories: MountainMemory[];
  };
}

export const Page4MountainDiaries: React.FC<Page4MountainDiariesProps> = ({ mountainDiaries }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const audioUrl = mountainDiaries.audioUrl || "/audio/humarimulakat.mpeg";
  const audioTitle = mountainDiaries.audioTitle || "Kaichi Dham Audio Note 🕉️";
  const audioDuration = mountainDiaries.audioDuration || "2:45";

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(console.error);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      if (audioRef.current.duration) {
        setDuration(audioRef.current.duration);
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const formatTime = (timeInSec: number) => {
    if (isNaN(timeInSec)) return "0:00";
    const mins = Math.floor(timeInSec / 60);
    const secs = Math.floor(timeInSec % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

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
            Chapter 4: Our Purest Decision to Kaichi Dham
          </div>

          <h2 className="font-serif-title text-4xl sm:text-6xl font-bold bg-gradient-to-r from-sky-200 via-teal-100 to-indigo-200 bg-clip-text text-transparent mb-3">
            {mountainDiaries.title}
          </h2>

          <p className="text-slate-300 text-lg max-w-xl mx-auto font-light">
            "{mountainDiaries.subtitle}"
          </p>

          {/* Location / Badge */}
          <div className="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900/80 border border-sky-400/50 shadow-lg text-xs font-mono font-bold text-sky-300 tracking-wider">
            <Compass className="w-4 h-4 text-sky-400 animate-spin" style={{ animationDuration: '10s' }} />
            <span>DESTINATION: {mountainDiaries.altitudeText}</span>
          </div>
        </div>

        {/* Memories Grid (4 Photos) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {mountainDiaries.memories.map((mem, idx) => (
            <div
              key={idx}
              className="glass-card overflow-hidden border border-sky-500/30 shadow-2xl hover:border-sky-400/60 transition-all duration-300 group rounded-2xl"
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

        {/* Audio Player Card Section */}
        <div className="glass-card p-6 sm:p-8 border border-sky-500/30 shadow-2xl relative overflow-hidden mb-12 rounded-2xl">
          <div className="absolute -top-20 -right-20 w-56 h-56 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-500 text-white shadow-lg shadow-sky-500/30">
                  <Headphones className="w-5 h-5 fill-white" />
                </div>
                <div>
                  <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-slate-100">
                    Kaichi Dham Audio Experience
                  </h3>
                  <p className="text-xs text-sky-300/80 mt-0.5">
                    Listen to a peaceful voice note from our Kaichi Dham trip 🕉️
                  </p>
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                Audio Memory
              </div>
            </div>

            <div className="bg-slate-900/90 rounded-2xl p-5 border border-sky-500/20 shadow-inner flex flex-col md:flex-row items-center gap-6">
              <audio
                ref={audioRef}
                src={audioUrl}
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => setIsPlaying(false)}
              />

              <div className="flex items-center gap-4 w-full md:w-auto shrink-0 justify-center">
                <button
                  onClick={toggleAudio}
                  className="w-14 h-14 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-sky-500/30 hover:scale-105 active:scale-95 transition-all shrink-0"
                  aria-label={isPlaying ? "Pause Audio" : "Play Audio"}
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 fill-white" />
                  ) : (
                    <Play className="w-6 h-6 fill-white ml-1" />
                  )}
                </button>

                <div className="text-left">
                  <h4 className="font-semibold text-slate-100 text-sm sm:text-base">
                    {audioTitle}
                  </h4>
                  <span className="text-xs text-sky-300/80">Divine & Peaceful Note ❤️</span>
                </div>
              </div>

              {/* Scrubber & Visualizer */}
              <div className="w-full flex flex-col justify-center gap-2">
                <div className="flex items-center gap-1 h-6 w-full px-2">
                  {[...Array(24)].map((_, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-full transition-all duration-300 ${isPlaying
                          ? 'bg-gradient-to-t from-sky-400 to-indigo-300 animate-pulse'
                          : 'bg-slate-700 h-1.5'
                        }`}
                      style={{
                        height: isPlaying
                          ? `${Math.max(6, Math.sin(i + currentTime * 4) * 20 + 12)}px`
                          : '6px',
                        animationDelay: `${(i % 4) * 0.15}s`,
                      }}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-400 font-mono w-10 text-right">
                    {formatTime(currentTime)}
                  </span>
                  <input
                    type="range"
                    min="0"
                    max={duration || 100}
                    value={currentTime}
                    onChange={handleSeek}
                    className="w-full accent-sky-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                  />
                  <span className="text-xs text-slate-400 font-mono w-10">
                    {duration ? formatTime(duration) : audioDuration}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Banner Quote Card */}
        <div className="glass-card p-8 border border-sky-500/30 text-center relative overflow-hidden rounded-2xl">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl" />
          <h4 className="font-serif-title text-2xl font-bold text-sky-200 mb-3">
            "A Divine & Pure Decision"
          </h4>
          <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
            Visiting Kainchi Dham with you was the purest decision of our lives. Under Neem Karoli Baba's divine grace, every moment felt peaceful, sacred, and infinitely special. VJ if things go well with us we will again visit this place promiss .
          </p>
        </div>
      </div>
    </div>
  );
};

