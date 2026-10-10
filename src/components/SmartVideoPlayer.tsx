import React, { useState, useRef } from 'react';
import { Play, Maximize2, Minimize2 } from 'lucide-react';
import { unlockIOSAudio } from '../utils/iosAudioUnlock';

interface SmartVideoPlayerProps {
  src: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  controls?: boolean;
  className?: string;
  containerClassName?: string;
  videoRef?: React.RefObject<HTMLVideoElement | null>;
  showFitToggle?: boolean;
  onMuteToggle?: () => void;
}

export const SmartVideoPlayer: React.FC<SmartVideoPlayerProps> = ({
  src,
  autoPlay = false,
  loop = true,
  muted = true,
  playsInline = true,
  controls = true,
  className = "",
  containerClassName = "",
  videoRef: externalRef,
  showFitToggle = true,
}) => {
  const internalRef = useRef<HTMLVideoElement | null>(null);
  const videoRef = externalRef || internalRef;
  const bgVideoRef = useRef<HTMLVideoElement | null>(null);

  const [isPortrait, setIsPortrait] = useState<boolean>(false);
  const [fitMode, setFitMode] = useState<'contain' | 'cover' | 'auto'>('auto');
  const [isPlaying, setIsPlaying] = useState<boolean>(autoPlay);

  const handleLoadedMetadata = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    if (video.videoWidth && video.videoHeight) {
      const ratio = video.videoWidth / video.videoHeight;
      // If height > width (portrait video, e.g. 9:16 reels/shorts)
      setIsPortrait(ratio < 0.95);
    }
  };

  // Sync ambient blurred background video playback with main video
  const handleTimeUpdate = () => {
    if (bgVideoRef.current && videoRef.current) {
      if (Math.abs(bgVideoRef.current.currentTime - videoRef.current.currentTime) > 0.3) {
        bgVideoRef.current.currentTime = videoRef.current.currentTime;
      }
    }
  };

  const handlePlay = () => {
    setIsPlaying(true);
    if (bgVideoRef.current) {
      bgVideoRef.current.play().catch(() => {});
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
    if (bgVideoRef.current) {
      bgVideoRef.current.pause();
    }
  };

  const toggleManualPlay = () => {
    unlockIOSAudio();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.muted = muted;
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((err) => console.error("Video play error on iOS:", err));
        }
      } else {
        videoRef.current.pause();
      }
    }
  };

  const effectiveFitMode = fitMode === 'auto' ? 'contain' : fitMode;

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl bg-slate-950 shadow-2xl flex items-center justify-center transition-all duration-500 ${containerClassName}`}
    >
      {/* Ambient Gradient Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-900/30 via-purple-900/20 to-slate-950 opacity-80 blur-2xl pointer-events-none" />

      {/* Subtle overlay tint */}
      <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px] pointer-events-none" />

      {/* Main Video Frame with Dynamic Aspect Ratio */}
      <div
        className={`relative z-10 w-full flex items-center justify-center transition-all duration-500 ${
          isPortrait && fitMode === 'auto'
            ? 'aspect-[9/16] max-h-[70vh] sm:max-h-[550px] mx-auto'
            : 'aspect-video w-full'
        }`}
      >
        <video
          ref={videoRef}
          src={src}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline={playsInline}
          controls={controls}
          preload="metadata"
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={handleTimeUpdate}
          onPlay={handlePlay}
          onPause={handlePause}
          className={`w-full h-full rounded-xl transition-all duration-300 ${
            effectiveFitMode === 'cover' ? 'object-cover' : 'object-contain'
          } ${className}`}
        />

        {/* Big Play Overlay Button when Video is Paused */}
        {!isPlaying && (
          <div
            onClick={toggleManualPlay}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px] cursor-pointer group transition-all rounded-xl"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-pink-600 via-rose-500 to-amber-500 flex items-center justify-center shadow-2xl shadow-pink-500/50 group-hover:scale-110 transition-all duration-300">
              <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white text-white ml-1" />
            </div>
            <span className="mt-3 px-3.5 py-1 rounded-full bg-black/70 border border-white/20 text-xs font-semibold text-pink-200 tracking-wide shadow-lg group-hover:bg-pink-600 group-hover:text-white transition-all">
              Click to Play Memory Video 🎬
            </span>
          </div>
        )}
      </div>

      {/* Aspect Ratio / Fit Toggle Controls */}
      {showFitToggle && (
        <div className="absolute top-2.5 right-2.5 z-30 flex items-center gap-1.5 p-1 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 text-[11px] text-white shadow-xl opacity-80 hover:opacity-100 transition-opacity">
          <button
            type="button"
            onClick={() => setFitMode(fitMode === 'cover' ? 'contain' : 'cover')}
            className={`px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer flex items-center gap-1 ${
              fitMode === 'cover'
                ? 'bg-pink-600 text-white shadow-md font-semibold'
                : 'bg-white/10 hover:bg-white/20 text-slate-200'
            }`}
            title={fitMode === 'cover' ? 'Show Full Video (Fit)' : 'Fill Card Section (Cover)'}
          >
            {fitMode === 'cover' ? (
              <>
                <Minimize2 className="w-3.5 h-3.5" />
                <span>Fit Aspect</span>
              </>
            ) : (
              <>
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Fill Section</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};
