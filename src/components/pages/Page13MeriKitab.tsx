import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, Sparkles, Heart, Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon, Play, Pause, Mic, Video, Music } from 'lucide-react';

import { SmartVideoPlayer } from '../SmartVideoPlayer';

export interface StorySection {
  heading: string;
  text: string;
  imageUrl?: string;
  imageUrls?: string[];
  mediaUrls?: string[];
  audioUrl?: string;
  audioTitle?: string;
}

const isVideoUrl = (url: string): boolean => {
  if (!url) return false;
  const cleanUrl = url.split('?')[0].toLowerCase();
  return (
    cleanUrl.endsWith('.mp4') ||
    cleanUrl.endsWith('.webm') ||
    cleanUrl.endsWith('.mov') ||
    cleanUrl.endsWith('.m4v') ||
    cleanUrl.endsWith('.ogg')
  );
};

const getSectionMedia = (sec: StorySection): string[] => {
  if (sec.mediaUrls && sec.mediaUrls.length > 0) return sec.mediaUrls;
  if (sec.imageUrls && sec.imageUrls.length > 0) return sec.imageUrls;
  if (sec.imageUrl) return [sec.imageUrl];
  return [];
};

interface Page13MeriKitabProps {
  partnerName: string;
  meriKitab: {
    bgMusicUrl: string;
    firstPhotoUrl: string;
    firstMeetingLocation: string;
    intro: string;
    storySections: StorySection[];
    endingNote: string;
  };
  onPlayTrack?: (trackUrl: string, title: string) => void;
}

export const Page13MeriKitab: React.FC<Page13MeriKitabProps> = ({
  partnerName,
  meriKitab,
  onPlayTrack,
}) => {
  const [typedIntro, setTypedIntro] = useState('');
  const [introFinished, setIntroFinished] = useState(false);
  const [selectedSectionIndex, setSelectedSectionIndex] = useState<number | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);

  // Modal Audio Player State
  const modalAudioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlayingModalAudio, setIsPlayingModalAudio] = useState(false);
  const [modalAudioTime, setModalAudioTime] = useState(0);
  const [modalAudioDuration, setModalAudioDuration] = useState(0);

  // Reset photo & audio states when section modal changes
  useEffect(() => {
    setActivePhotoIndex(0);
    setIsPlayingModalAudio(false);
    setModalAudioTime(0);
    setModalAudioDuration(0);
    if (modalAudioRef.current) {
      modalAudioRef.current.pause();
      modalAudioRef.current.currentTime = 0;
    }
  }, [selectedSectionIndex]);

  // Local audio player states
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioCurrentTime, setAudioCurrentTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const localAudioRef = useRef<HTMLAudioElement | null>(null);

  // Auto Play Audio when entering Page 13
  useEffect(() => {
    if (onPlayTrack && meriKitab.bgMusicUrl) {
      onPlayTrack(meriKitab.bgMusicUrl, 'Meri Kitab - Humari Mulakat (Special Audio)');
    }
  }, []);

  const toggleLocalPlay = () => {
    if (!localAudioRef.current) return;
    if (isPlayingAudio) {
      localAudioRef.current.pause();
      setIsPlayingAudio(false);
    } else {
      localAudioRef.current.play().then(() => setIsPlayingAudio(true)).catch(console.error);
    }
  };

  const handleAudioTimeUpdate = () => {
    if (localAudioRef.current) {
      setAudioCurrentTime(localAudioRef.current.currentTime);
      if (localAudioRef.current.duration) {
        setAudioDuration(localAudioRef.current.duration);
      }
    }
  };

  const handleAudioSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setAudioCurrentTime(time);
    if (localAudioRef.current) {
      localAudioRef.current.currentTime = time;
    }
  };

  const formatTime = (timeInSec: number) => {
    if (isNaN(timeInSec)) return "0:00";
    const minutes = Math.floor(timeInSec / 60);
    const seconds = Math.floor(timeInSec % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Typewriter effect for Intro
  useEffect(() => {
    let index = 0;
    setTypedIntro('');
    setIntroFinished(false);

    const timer = setInterval(() => {
      if (index < meriKitab.intro.length) {
        setTypedIntro(meriKitab.intro.slice(0, index + 1));
        index++;
      } else {
        setIntroFinished(true);
        clearInterval(timer);
      }
    }, 35);

    return () => clearInterval(timer);
  }, [meriKitab.intro]);

  const activeModalSection = selectedSectionIndex !== null ? meriKitab.storySections[selectedSectionIndex] : null;

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 bg-slate-950 text-slate-100 flex flex-col items-center justify-center">
      <div className="max-w-5xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            Chapter 13: Meri Kitab - Ek Mulakat
          </div>

          <h2 className="font-serif-title text-4xl sm:text-6xl font-bold bg-gradient-to-r from-amber-200 via-rose-200 to-pink-300 bg-clip-text text-transparent mb-2">
            Meri Kitab: Ek Mulakat 📖
          </h2>

          <p className="text-amber-300/80 text-xs sm:text-sm font-handwriting text-xl">
            10 Special Sections & Memories of Our Story • Humari Mulakat Special Audio 🎙️
          </p>
        </div>

        {/* Vintage Parchment Book Layout */}
        <div className="vintage-paper p-6 sm:p-10 rounded-3xl shadow-2xl relative border-2 border-amber-800/30 overflow-hidden">
          {/* Decorative Corner Flourishes */}
          <div className="absolute top-4 left-4 text-amber-900/30 text-3xl font-serif">❦</div>
          <div className="absolute top-4 right-4 text-amber-900/30 text-3xl font-serif">❦</div>
          <div className="absolute bottom-4 left-4 text-amber-900/30 text-3xl font-serif">❦</div>
          <div className="absolute bottom-4 right-4 text-amber-900/30 text-3xl font-serif">❦</div>

          {/* First Photo Frame / Memory Badge */}
          <div className="mb-8 flex flex-col sm:flex-row items-center gap-6 pb-8 border-b border-amber-900/20">
            <div className="w-40 sm:w-48 aspect-square rounded-2xl overflow-hidden border-4 border-amber-900/30 shadow-xl flex-shrink-0 group relative">
              <img
                src={meriKitab.firstPhotoUrl}
                alt="First Picture Together"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter sepia-[0.2]"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-xs font-semibold bg-black/60 px-2 py-1 rounded">Cover Photo</span>
              </div>
            </div>
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-800 bg-rose-500/10 px-3 py-1 rounded-full border border-rose-800/20 inline-block mb-2">
                Our Very First Picture Together
              </span>
              <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-amber-950 mb-1">
                Where Our Story Started
              </h3>
              <p className="text-sm text-amber-900/80 italic">
                📍 {meriKitab.firstMeetingLocation}
              </p>
            </div>
          </div>

          {/* Section: Dedicated Humari Mulakat Audio Player */}
          <div className="mb-10 p-5 sm:p-6 rounded-2xl bg-amber-950/10 border-2 border-amber-900/30 shadow-inner relative overflow-hidden">
            <audio
              ref={localAudioRef}
              src={meriKitab.bgMusicUrl}
              onTimeUpdate={handleAudioTimeUpdate}
              onEnded={() => setIsPlayingAudio(false)}
            />

            <div className="flex flex-col sm:flex-row items-center gap-5 justify-between">
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-800 to-rose-700 flex items-center justify-center text-amber-100 shadow-md ${isPlayingAudio ? 'scale-105 transition-transform' : ''}`}>
                  <Mic className={`w-7 h-7 ${isPlayingAudio ? 'animate-bounce' : ''}`} />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1 text-[11px] font-mono font-bold uppercase text-rose-800 bg-rose-500/10 px-2.5 py-0.5 rounded-full border border-rose-800/20 mb-1">
                    <Sparkles className="w-3 h-3 text-rose-700" />
                    Special Voice Note / Audio
                  </div>
                  <h4 className="font-serif-title text-lg font-bold text-amber-950">
                    Humari Mulakat - Audio Recording 🎙️
                  </h4>
                  <p className="text-xs text-amber-900/80 italic">
                    Listen to the special audio track recorded for Page 13
                  </p>
                </div>
              </div>

              {/* Play/Pause Button */}
              <button
                onClick={toggleLocalPlay}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-900 to-rose-900 text-amber-100 font-bold text-xs shadow-md hover:opacity-90 active:scale-95 transition-all flex-shrink-0"
              >
                {isPlayingAudio ? (
                  <>
                    <Pause className="w-4 h-4 fill-amber-100" /> Pause Audio
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-amber-100 ml-0.5" /> Play Humari Mulakat Audio
                  </>
                )}
              </button>
            </div>

            {/* Scrubber & Soundwave */}
            <div className="mt-4 pt-4 border-t border-amber-900/15 space-y-2">
              <div className="flex items-center gap-1 h-6 w-full justify-center px-2">
                {[...Array(32)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-1 rounded-full transition-all duration-300 ${isPlayingAudio
                        ? 'bg-amber-900 animate-pulse'
                        : 'bg-amber-900/20 h-1.5'
                      }`}
                    style={{
                      height: isPlayingAudio
                        ? `${Math.max(6, Math.sin(i + audioCurrentTime * 6) * 18 + 10)}px`
                        : '6px',
                      animationDelay: `${(i % 5) * 0.1}s`,
                    }}
                  />
                ))}
              </div>

              <input
                type="range"
                min="0"
                max={audioDuration || 100}
                value={audioCurrentTime}
                onChange={handleAudioSeek}
                className="w-full accent-amber-900 cursor-pointer h-1.5 bg-amber-900/20 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-amber-900/70 font-mono">
                <span>{formatTime(audioCurrentTime)}</span>
                <span>{audioDuration ? formatTime(audioDuration) : 'Audio'}</span>
              </div>
            </div>
          </div>

          {/* Section: Intro (Typewriter Effect) */}
          <div className="mb-10">
            <h4 className="font-serif-title text-xl font-bold text-amber-950 mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-rose-700" />
              The Prelude (Shuruat)
            </h4>
            <div className="font-handwriting text-xl sm:text-2xl text-amber-950 leading-relaxed min-h-[70px] p-4 rounded-xl bg-amber-900/5 border border-amber-900/10">
              {typedIntro}
              {!introFinished && <span className="animate-cursor font-bold text-rose-800">|</span>}
            </div>
          </div>

          {/* Section: 10 Story Sections Grid */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-serif-title text-2xl font-bold text-amber-950 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-rose-800" />
                Our Story: 10 Chapters
              </h4>
              <span className="text-xs font-mono font-semibold text-amber-900/70 bg-amber-900/10 px-3 py-1 rounded-full">
                10 Sections with Media & Audio
              </span>
            </div>

            {/* 2-Column Responsive Grid for 10 Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {meriKitab.storySections.map((sec, idx) => {
                const secMedia = getSectionMedia(sec);
                const coverMedia = secMedia[0];
                const isCoverVideo = coverMedia ? isVideoUrl(coverMedia) : false;

                return (
                  <div
                    key={idx}
                    onClick={() => setSelectedSectionIndex(idx)}
                    className="group rounded-2xl border border-amber-900/20 bg-white/40 hover:bg-white/70 p-4 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer flex flex-col justify-between"
                  >
                    {/* Media Frame */}
                    <div className="relative w-full h-48 rounded-xl overflow-hidden mb-3 border border-amber-900/20 bg-amber-900/10">
                      {coverMedia ? (
                        isCoverVideo ? (
                          <div className="relative w-full h-full bg-black">
                            <video
                              src={coverMedia}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter sepia-[0.1]"
                              muted
                              playsInline
                              onMouseOver={(e) => (e.currentTarget as HTMLVideoElement).play().catch(() => {})}
                              onMouseOut={(e) => (e.currentTarget as HTMLVideoElement).pause()}
                            />
                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center pointer-events-none">
                              <div className="p-3 rounded-full bg-rose-600/80 text-white shadow-lg backdrop-blur-sm group-hover:scale-110 transition-transform">
                                <Play className="w-5 h-5 fill-white ml-0.5" />
                              </div>
                            </div>
                          </div>
                        ) : (
                          <img
                            src={coverMedia}
                            alt={sec.heading}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter sepia-[0.1]"
                          />
                        )
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-amber-900/40">
                          <ImageIcon className="w-8 h-8 mb-1" />
                          <span className="text-xs">Media Slot #{idx + 1}</span>
                        </div>
                      )}

                      <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-amber-950/80 backdrop-blur-md text-amber-100 text-[10px] font-mono font-bold tracking-wider">
                        Section {idx + 1}
                      </div>

                      {sec.audioUrl && (
                        <div className="absolute top-2 left-24 px-2.5 py-0.5 rounded-full bg-rose-950/80 backdrop-blur-md text-amber-200 text-[10px] font-mono font-bold flex items-center gap-1 border border-rose-800/30">
                          <Music className="w-3 h-3 text-rose-400" /> Audio
                        </div>
                      )}

                      {secMedia.length > 1 && (
                        <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-amber-200 text-[10px] font-mono font-bold flex items-center gap-1 shadow-md">
                          {secMedia.some(isVideoUrl) ? (
                            <Video className="w-3 h-3 text-rose-400" />
                          ) : (
                            <ImageIcon className="w-3 h-3 text-rose-400" />
                          )}
                          {secMedia.length} Items
                        </div>
                      )}

                      <div className="absolute top-2 right-2 p-1.5 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Section Title & Description */}
                    <div>
                      <h5 className="font-serif-title font-bold text-base text-rose-900 mb-1.5 line-clamp-1 group-hover:text-rose-700 transition-colors">
                        {sec.heading}
                      </h5>
                      <p className="text-xs text-amber-950/90 leading-relaxed font-sans line-clamp-3">
                        {sec.text}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-amber-900/10 flex items-center justify-between text-[11px] text-amber-900/60">
                      <span className="italic">
                        {secMedia.length > 1 ? `Click to view ${secMedia.length} media items & text` : 'Click to view media & text'}
                      </span>
                      <span className="font-mono text-rose-800 font-semibold">Chapter #{idx + 1}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section: Ending Note */}
          <div className="pt-8 border-t border-amber-900/20 text-center">
            <h4 className="font-serif-title text-xl font-bold text-amber-950 mb-2">
              The Ending Note (Aakhri Line)
            </h4>
            <p className="font-romantic text-3xl sm:text-4xl text-rose-800 leading-snug max-w-2xl mx-auto">
              "{meriKitab.endingNote}"
            </p>
            <div className="mt-4 flex items-center justify-center gap-1.5 text-amber-900/70 text-xs font-semibold">
              <Heart className="w-4 h-4 text-rose-700 fill-rose-700 animate-pulse" /> Written with eternal love for {partnerName}
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Photo & Video Section Lightbox Modal */}
      {selectedSectionIndex !== null && activeModalSection && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-2xl vintage-paper p-6 sm:p-8 rounded-3xl shadow-2xl border-2 border-amber-800/40 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedSectionIndex(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-amber-950/10 hover:bg-amber-950/20 text-amber-950 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation Header */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-800 bg-rose-500/10 px-3 py-1 rounded-full border border-rose-800/20">
                Section {selectedSectionIndex + 1} of {meriKitab.storySections.length}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    setSelectedSectionIndex((prev) =>
                      prev !== null && prev > 0 ? prev - 1 : meriKitab.storySections.length - 1
                    )
                  }
                  className="p-1.5 rounded-full bg-amber-950/10 hover:bg-amber-950/20 text-amber-950 text-xs font-semibold flex items-center gap-1 px-2.5"
                >
                  <ChevronLeft className="w-4 h-4" /> Prev Chapter
                </button>
                <button
                  onClick={() =>
                    setSelectedSectionIndex((prev) =>
                      prev !== null && prev < meriKitab.storySections.length - 1 ? prev + 1 : 0
                    )
                  }
                  className="p-1.5 rounded-full bg-rose-800 text-white hover:bg-rose-900 text-xs font-semibold flex items-center gap-1 px-2.5"
                >
                  Next Chapter <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Enlarge Photo & Video Gallery Carousel View */}
            {(() => {
              const modalMedia = getSectionMedia(activeModalSection);
              const currentMedia = modalMedia[activePhotoIndex] || modalMedia[0];

              if (!currentMedia) return null;
              const isVideo = isVideoUrl(currentMedia);

              return (
                <div className="mb-6 space-y-3">
                  {/* Main Display Media (Image or Video) */}
                  <div className="relative w-full rounded-2xl overflow-hidden border-2 border-amber-900/30 shadow-md bg-black/60">
                    {isVideo ? (
                      <SmartVideoPlayer
                        key={currentMedia}
                        src={currentMedia}
                        controls={true}
                        autoPlay={true}
                        loop={true}
                        showFitToggle={true}
                      />
                    ) : (
                      <img
                        src={currentMedia}
                        alt={`${activeModalSection.heading} item ${activePhotoIndex + 1}`}
                        className="w-full h-64 sm:h-80 object-cover filter sepia-[0.1]"
                      />
                    )}

                    {/* Media Counter Badge */}
                    {modalMedia.length > 1 && (
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-amber-200 text-xs font-mono font-bold border border-amber-500/30 shadow-md flex items-center gap-1">
                        {isVideo ? <Video className="w-3.5 h-3.5 text-rose-400" /> : <ImageIcon className="w-3.5 h-3.5 text-rose-400" />}
                        {activePhotoIndex + 1} of {modalMedia.length}
                      </div>
                    )}

                    {/* Left / Right Arrow Controls for Media Slider */}
                    {modalMedia.length > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActivePhotoIndex((prev) => (prev > 0 ? prev - 1 : modalMedia.length - 1));
                          }}
                          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 text-amber-100 border border-amber-500/30 transition-all backdrop-blur-sm hover:scale-110 active:scale-95"
                          title="Previous Media"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActivePhotoIndex((prev) => (prev < modalMedia.length - 1 ? prev + 1 : 0));
                          }}
                          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 text-amber-100 border border-amber-500/30 transition-all backdrop-blur-sm hover:scale-110 active:scale-95"
                          title="Next Media"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Thumbnails Row */}
                  {modalMedia.length > 1 && (
                    <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1">
                      {modalMedia.map((url, pIdx) => {
                        const thumbIsVideo = isVideoUrl(url);
                        return (
                          <button
                            key={pIdx}
                            onClick={() => setActivePhotoIndex(pIdx)}
                            className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 bg-black ${
                              activePhotoIndex === pIdx
                                ? 'border-amber-600 scale-105 shadow-md ring-2 ring-rose-500/40'
                                : 'border-amber-900/30 opacity-60 hover:opacity-100'
                            }`}
                          >
                            {thumbIsVideo ? (
                              <div className="relative w-full h-full">
                                <video src={url} className="w-full h-full object-cover" muted />
                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                  <Play className="w-4 h-4 fill-white text-white" />
                                </div>
                              </div>
                            ) : (
                              <img src={url} alt={`Thumbnail ${pIdx + 1}`} className="w-full h-full object-cover" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })()}

            {/* Dedicated Chapter Audio Player if audioUrl is provided */}
            {activeModalSection.audioUrl && (
              <div className="mb-6 p-4 rounded-2xl bg-amber-950/15 border border-amber-900/30 shadow-sm relative overflow-hidden">
                <audio
                  ref={modalAudioRef}
                  src={activeModalSection.audioUrl}
                  onTimeUpdate={() => {
                    if (modalAudioRef.current) {
                      setModalAudioTime(modalAudioRef.current.currentTime);
                      if (modalAudioRef.current.duration) {
                        setModalAudioDuration(modalAudioRef.current.duration);
                      }
                    }
                  }}
                  onEnded={() => setIsPlayingModalAudio(false)}
                />

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-rose-800/20 text-rose-900 border border-rose-800/30 flex-shrink-0">
                      <Music className="w-5 h-5 text-rose-800" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase text-rose-800 bg-rose-500/10 px-2 py-0.5 rounded-full border border-rose-800/20 inline-block mb-1">
                        Chapter Audio / Voice Note
                      </span>
                      <h5 className="text-sm font-bold text-amber-950">
                        {activeModalSection.audioTitle || `Audio Track for Chapter ${selectedSectionIndex + 1}`}
                      </h5>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      if (!modalAudioRef.current) return;
                      if (isPlayingModalAudio) {
                        modalAudioRef.current.pause();
                        setIsPlayingModalAudio(false);
                      } else {
                        modalAudioRef.current.play().then(() => setIsPlayingModalAudio(true)).catch(console.error);
                      }
                    }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-900 to-rose-900 hover:opacity-95 text-amber-100 font-bold text-xs shadow transition-all flex-shrink-0"
                  >
                    {isPlayingModalAudio ? (
                      <>
                        <Pause className="w-4 h-4 fill-amber-100" /> Pause Audio
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 fill-amber-100 ml-0.5" /> Play Audio
                      </>
                    )}
                  </button>
                </div>

                {/* Scrubber Bar */}
                <div className="space-y-1">
                  <input
                    type="range"
                    min="0"
                    max={modalAudioDuration || 100}
                    value={modalAudioTime}
                    onChange={(e) => {
                      const time = parseFloat(e.target.value);
                      setModalAudioTime(time);
                      if (modalAudioRef.current) {
                        modalAudioRef.current.currentTime = time;
                      }
                    }}
                    className="w-full accent-amber-900 cursor-pointer h-1.5 bg-amber-900/20 rounded-lg"
                  />
                  <div className="flex justify-between text-[11px] text-amber-900/70 font-mono">
                    <span>{formatTime(modalAudioTime)}</span>
                    <span>{modalAudioDuration ? formatTime(modalAudioDuration) : '0:00'}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Section Heading & Text */}
            <h3 className="font-serif-title text-2xl font-bold text-amber-950 mb-3">
              {activeModalSection.heading}
            </h3>

            <p className="font-sans text-amber-950 text-sm leading-relaxed mb-6 whitespace-pre-line">
              {activeModalSection.text}
            </p>

            <div className="pt-4 border-t border-amber-900/20 flex justify-between items-center text-xs text-amber-900/60 italic">
              <button
                onClick={() => setSelectedSectionIndex(null)}
                className="px-4 py-1.5 rounded-xl bg-amber-950/10 hover:bg-amber-950/20 text-amber-950 font-bold not-italic"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

