import React, { useState, useRef } from 'react';
import { Mic, Play, Pause, Sparkles } from 'lucide-react';

interface Page2VoiceNoteProps {
  partnerName: string;
  voiceNoteAudioUrl: string;
  voiceNoteTitle: string;
  voiceNoteDuration: string;
  voiceNoteMessage: string;
}

export const Page2VoiceNote: React.FC<Page2VoiceNoteProps> = ({
  partnerName,
  voiceNoteAudioUrl,
  voiceNoteTitle,
  voiceNoteDuration,
  voiceNoteMessage,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
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
    const minutes = Math.floor(timeInSec / 60);
    const seconds = Math.floor(timeInSec % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 flex flex-col items-center justify-center bg-slate-950 text-slate-100">
      <audio
        ref={audioRef}
        src={voiceNoteAudioUrl}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />

      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mic className="w-3.5 h-3.5" />
            Chapter 2: My Voice for You
          </div>
          <h2 className="font-serif-title text-4xl sm:text-5xl font-bold bg-gradient-to-r from-pink-300 via-rose-200 to-amber-200 bg-clip-text text-transparent mb-3">
            A Voice Note Just For {partnerName}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-md mx-auto">
            Press play below to listen to a heartfelt message recorded especially for your birthday.
          </p>
        </div>

        {/* Custom Audio Player Card */}
        <div className="glass-card p-6 sm:p-8 border border-pink-500/30 shadow-2xl relative overflow-hidden mb-8">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-rose-500/20 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Animated Mic Avatar */}
            <div className="relative mb-6">
              <div className={`w-24 h-24 rounded-full bg-gradient-to-tr from-pink-600 to-rose-500 flex items-center justify-center shadow-xl shadow-pink-500/30 ${
                isPlaying ? 'scale-105 transition-transform' : ''
              }`}>
                <Mic className={`w-10 h-10 text-white ${isPlaying ? 'animate-bounce' : ''}`} />
              </div>
              {isPlaying && (
                <div className="absolute inset-0 rounded-full border-2 border-pink-400 animate-ping opacity-50" />
              )}
            </div>

            <h3 className="font-serif-title text-xl font-semibold text-slate-100 mb-1">
              {voiceNoteTitle}
            </h3>
            <span className="text-xs text-pink-400 font-medium mb-6">
              Recorded with Love ❤️
            </span>

            {/* Sound Wave Visualizer Bars */}
            <div className="flex items-center gap-1 h-12 mb-6 w-full justify-center px-4">
              {[...Array(28)].map((_, i) => (
                <div
                  key={i}
                  className={`w-1.5 rounded-full transition-all duration-300 ${
                    isPlaying
                      ? 'bg-gradient-to-t from-pink-500 to-rose-300 animate-pulse'
                      : 'bg-slate-700 h-2'
                  }`}
                  style={{
                    height: isPlaying
                      ? `${Math.max(12, Math.sin(i + currentTime * 5) * 40 + 24)}px`
                      : '8px',
                    animationDelay: `${(i % 5) * 0.1}s`,
                  }}
                />
              ))}
            </div>

            {/* Scrubber / Timeline Slider */}
            <div className="w-full space-y-2 mb-6">
              <input
                type="range"
                min="0"
                max={duration || 100}
                value={currentTime}
                onChange={handleSeek}
                className="w-full accent-pink-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
              />
              <div className="flex justify-between text-xs text-slate-400 font-mono">
                <span>{formatTime(currentTime)}</span>
                <span>{duration ? formatTime(duration) : voiceNoteDuration}</span>
              </div>
            </div>

            {/* Play Button */}
            <button
              onClick={togglePlay}
              className="flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold text-base shadow-lg shadow-pink-500/30 hover:scale-105 active:scale-95 transition-all"
            >
              {isPlaying ? <Pause className="w-5 h-5 fill-white" /> : <Play className="w-5 h-5 fill-white ml-0.5" />}
              <span>{isPlaying ? 'Pause Voice Note' : 'Play Voice Note'}</span>
            </button>
          </div>
        </div>

        {/* Message Note Card */}
        <div className="glass-card p-6 border border-pink-500/20 relative">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-pink-400" />
            <h4 className="font-semibold text-pink-300 text-sm uppercase tracking-wider">
              Why I Built This For You
            </h4>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed italic">
            "{voiceNoteMessage}"
          </p>
        </div>
      </div>
    </div>
  );
};
