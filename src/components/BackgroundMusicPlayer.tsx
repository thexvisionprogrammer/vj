import React, { useState, useEffect, useRef } from 'react';
import { Music, Volume2, VolumeX, Disc } from 'lucide-react';

interface BackgroundMusicPlayerProps {
  currentTrackUrl: string;
  trackTitle: string;
}

export const BackgroundMusicPlayer: React.FC<BackgroundMusicPlayerProps> = ({
  currentTrackUrl,
  trackTitle,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isExpanded, setIsExpanded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    // When track changes, update audio src
    if (audioRef.current) {
      audioRef.current.src = currentTrackUrl;
      if (isPlaying) {
        audioRef.current.play().catch(() => setIsPlaying(false));
      }
    }
  }, [currentTrackUrl]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch((err) => {
        console.log("Autoplay policy error:", err);
        setIsPlaying(false);
      });
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
      <audio ref={audioRef} src={currentTrackUrl} loop />

      {/* Main Pill Widget */}
      <div 
        className={`glass-card flex items-center gap-3 px-3 py-2 border border-pink-500/30 shadow-lg shadow-pink-500/10 transition-all duration-300 ${
          isExpanded ? 'w-64' : 'w-auto'
        }`}
      >
        <button
          onClick={togglePlay}
          className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md hover:scale-105 active:scale-95 transition-transform"
          title={isPlaying ? "Pause Music" : "Play Music"}
        >
          <Disc className={`w-5 h-5 ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }} />
        </button>

        <div className="flex-1 overflow-hidden cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
          <div className="flex items-center gap-1">
            <Music className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
            <span className="text-xs font-semibold text-pink-300 uppercase tracking-wider">Audio</span>
          </div>
          <p className="text-xs font-medium text-slate-200 truncate max-w-[140px]" title={trackTitle}>
            {trackTitle}
          </p>
        </div>

        <button
          onClick={toggleMute}
          className="text-slate-400 hover:text-pink-400 transition-colors p-1"
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>

      {/* Expanded Controls Drawer */}
      {isExpanded && (
        <div className="glass-card absolute top-14 right-0 p-3 w-64 shadow-2xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 border border-pink-500/30">
          <div className="flex justify-between items-center text-xs text-slate-300">
            <span>Volume</span>
            <span>{Math.round((isMuted ? 0 : volume) * 100)}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : volume}
            onChange={(e) => {
              setVolume(parseFloat(e.target.value));
              if (isMuted) setIsMuted(false);
            }}
            className="w-full accent-pink-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
          />
          <p className="text-[10px] text-slate-400 italic text-center mt-1">
            Click anywhere to minimize player
          </p>
        </div>
      )}
    </div>
  );
};
