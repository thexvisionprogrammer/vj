import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { unlockIOSAudio, safePlayMedia } from '../utils/iosAudioUnlock';

interface BackgroundMusicPlayerProps {
  currentTrackUrl: string;
  trackTitle?: string;
}

export const BackgroundMusicPlayer: React.FC<BackgroundMusicPlayerProps> = ({
  currentTrackUrl,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const prevTrackUrlRef = useRef<string>('');
  const [isUserMuted, setIsUserMuted] = useState(false);

  // Initialize iOS Audio Unlocker on mount
  useEffect(() => {
    unlockIOSAudio();
  }, []);

  // Check if any other video or audio element on the page is playing with sound
  const isOtherMediaPlaying = (): boolean => {
    const allMedia = Array.from(
      document.querySelectorAll('video, audio')
    ) as HTMLMediaElement[];

    return allMedia.some(
      (el) => el !== audioRef.current && !el.paused && !el.muted
    );
  };

  // Synchronize playing / pausing based on user mute setting & other media activity
  const syncPlaybackState = () => {
    if (!audioRef.current) return;

    if (isUserMuted) {
      if (!audioRef.current.paused) {
        audioRef.current.pause();
      }
      return;
    }

    const otherActive = isOtherMediaPlaying();
    if (otherActive) {
      if (!audioRef.current.paused) {
        audioRef.current.pause();
      }
    } else {
      if (audioRef.current.paused) {
        safePlayMedia(audioRef.current).catch(() => {});
      }
    }
  };

  // Handle track URL or mute state changes
  useEffect(() => {
    if (!audioRef.current) return;

    if (prevTrackUrlRef.current !== currentTrackUrl) {
      audioRef.current.src = currentTrackUrl;
      prevTrackUrlRef.current = currentTrackUrl;
    }

    syncPlaybackState();
  }, [currentTrackUrl, isUserMuted]);

  // Autoplay fallback and global media event listeners
  useEffect(() => {
    syncPlaybackState();

    // Browser autoplay policy handler: play on first user interaction if blocked initially
    const handleUserInteraction = () => {
      unlockIOSAudio();
      syncPlaybackState();
    };

    window.addEventListener('click', handleUserInteraction);
    window.addEventListener('pointerdown', handleUserInteraction);
    window.addEventListener('keydown', handleUserInteraction);
    window.addEventListener('touchstart', handleUserInteraction);
    window.addEventListener('touchend', handleUserInteraction);

    // Global capture listeners for media play, pause, ended events across all pages
    const handleMediaEvent = () => {
      setTimeout(syncPlaybackState, 100);
    };

    document.addEventListener('play', handleMediaEvent, true);
    document.addEventListener('pause', handleMediaEvent, true);
    document.addEventListener('ended', handleMediaEvent, true);

    return () => {
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('pointerdown', handleUserInteraction);
      window.removeEventListener('keydown', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
      window.removeEventListener('touchend', handleUserInteraction);

      document.removeEventListener('play', handleMediaEvent, true);
      document.removeEventListener('pause', handleMediaEvent, true);
      document.removeEventListener('ended', handleMediaEvent, true);
    };
  }, [isUserMuted]);

  const toggleMute = () => {
    unlockIOSAudio();
    setIsUserMuted((prev) => !prev);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={currentTrackUrl}
        loop
        preload="auto"
        playsInline
        aria-hidden="true"
        className="hidden"
      />

      {/* Small Sleek Mute / Unmute Toggle Button at Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleMute}
          className={`p-2.5 rounded-full glass-card border shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center ${
            isUserMuted
              ? 'border-rose-500/40 bg-rose-500/10 text-rose-400 hover:bg-rose-500/20'
              : 'border-pink-500/30 bg-black/40 text-pink-400 hover:bg-pink-500/20'
          }`}
          title={isUserMuted ? "Unmute Background Music" : "Mute Background Music"}
          aria-label={isUserMuted ? "Unmute Background Music" : "Mute Background Music"}
        >
          {isUserMuted ? (
            <VolumeX className="w-4 h-4 text-rose-400" />
          ) : (
            <Volume2 className="w-4 h-4 text-pink-400 animate-pulse" />
          )}
        </button>
      </div>
    </>
  );
};
