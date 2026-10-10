import React, { useState, useRef } from 'react';
import { Heart, Sparkles, Crown, Play, Pause, Headphones } from 'lucide-react';
import { unlockIOSAudio } from '../../utils/iosAudioUnlock';

interface PhotoItem {
  url: string;
  caption: string;
  tag?: string;
}

interface Compliment {
  icon: string;
  text: string;
}

interface KnowYouSection {
  title?: string;
  subtitle?: string;
  audioUrl?: string;
  audioTitle?: string;
  audioDuration?: string;
  photos?: PhotoItem[];
}

interface Page3AllAboutVProps {
  partnerName: string;
  aboutV: {
    title: string;
    description: string;
    photos: PhotoItem[];
    knowYou?: KnowYouSection;
    compliments: Compliment[];
  };
}

export const Page3AllAboutV: React.FC<Page3AllAboutVProps> = ({ partnerName, aboutV }) => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const defaultKnowYouPhotos: PhotoItem[] = [
    {
      url: "/photos/photo2.jpeg",
      caption: "Your beautiful aesthetic vibe ✨",
      tag: "Fav Look"
    },
    {
      url: "/photos/photo3.jpeg",
      caption: "That charming smile that steals hearts 😊",
      tag: "Sweet Smile"
    },
    {
      url: "/photos/photo4.jpeg",
      caption: "Unfiltered joy and pure moments 💖",
      tag: "Pure Joy"
    }
  ];

  const knowYouData = aboutV.knowYou || {};
  const knowYouPhotos = knowYouData.photos && knowYouData.photos.length > 0
    ? knowYouData.photos
    : defaultKnowYouPhotos;
  const knowYouAudioUrl = knowYouData.audioUrl || "/audio/note1.mpeg";

  const toggleAudio = () => {
    if (!audioRef.current) return;
    unlockIOSAudio();
    if (isAudioPlaying) {
      audioRef.current.pause();
      setIsAudioPlaying(false);
    } else {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsAudioPlaying(true))
          .catch((err) => {
            console.error("Audio playback error on iOS:", err);
            setIsAudioPlaying(false);
          });
      }
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
              {photo.tag && (
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-semibold text-pink-300 border border-pink-500/30">
                  {photo.tag}
                </div>
              )}

              {/* Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-4 text-left">
                <p className="text-sm font-medium text-slate-100 group-hover:text-pink-200 transition-colors">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* "Mujhe JAnna hai tumhe" Section: 3 Photos & 1 Audio Player */}
        <div className="glass-card p-6 sm:p-8 border border-pink-500/30 shadow-2xl relative overflow-hidden mb-12">
          {/* Glowing Background Accent */}
          <div className="absolute -top-24 -right-24 w-56 h-56 bg-pink-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-56 h-56 bg-rose-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Header Title */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-gradient-to-tr from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/30">
                  <Heart className="w-5 h-5 fill-white" />
                </div>
                <div>
                  <h3 className="font-serif-title text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-200 via-rose-200 to-amber-200 bg-clip-text text-transparent">
                    {knowYouData.title || "Mujhe JAnna hai tumhe (i want to know you)"}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                    {knowYouData.subtitle || "Har choti baat tumhare baare mein mere dil ke kareeb hai ✨"}
                  </p>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-semibold self-start sm:self-center">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                Special Moments
              </div>
            </div>

            {/* 3 Photos Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {knowYouPhotos.slice(0, 3).map((photo, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-2xl overflow-hidden glass-card border border-white/10 hover:border-pink-500/50 transition-all duration-500 hover:-translate-y-2 shadow-xl"
                >
                  <div className="aspect-[3/4] w-full overflow-hidden relative">
                    <img
                      src={photo.url}
                      alt={photo.caption}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  </div>

                  {photo.tag && (
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-semibold text-pink-300 border border-pink-500/30">
                      {photo.tag}
                    </div>
                  )}

                  <div className="absolute bottom-0 inset-x-0 p-4 text-left">
                    <p className="text-sm font-medium text-slate-100 group-hover:text-pink-200 transition-colors">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Audio Player Component */}
            <div className="bg-slate-900/80 rounded-2xl p-5 border border-pink-500/20 shadow-inner flex flex-col md:flex-row items-center gap-6">
              <audio
                ref={audioRef}
                src={knowYouAudioUrl}
                preload="auto"
                playsInline
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => setIsAudioPlaying(false)}
              />

              <div className="flex items-center gap-4 w-full md:w-auto shrink-0 justify-center">
                <button
                  onClick={toggleAudio}
                  className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center text-white shadow-lg shadow-pink-500/30 hover:scale-105 active:scale-95 transition-all shrink-0"
                  aria-label={isAudioPlaying ? "Pause Audio" : "Play Audio"}
                >
                  {isAudioPlaying ? (
                    <Pause className="w-6 h-6 fill-white" />
                  ) : (
                    <Play className="w-6 h-6 fill-white ml-1" />
                  )}
                </button>

                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <Headphones className="w-4 h-4 text-pink-400" />
                    <h4 className="font-semibold text-slate-100 text-sm sm:text-base">
                      {knowYouData.audioTitle || "Mujhe JAnna hai tumhe - Audio Note"}
                    </h4>
                  </div>
                  <span className="text-xs text-pink-300/80">Click play to listen ❤️</span>
                </div>
              </div>

              {/* Scrubber & Visualizer */}
              <div className="w-full flex flex-col justify-center gap-2">
                <div className="flex items-center gap-1 h-6 w-full px-2">
                  {[...Array(24)].map((_, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-full transition-all duration-300 ${
                        isAudioPlaying
                          ? 'bg-gradient-to-t from-pink-500 to-rose-300 animate-pulse'
                          : 'bg-slate-700 h-1.5'
                      }`}
                      style={{
                        height: isAudioPlaying
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
                    className="w-full accent-pink-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                  />
                  <span className="text-xs text-slate-400 font-mono w-10">
                    {duration ? formatTime(duration) : (knowYouData.audioDuration || "2:15")}
                  </span>
                </div>
              </div>
            </div>
          </div>
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

