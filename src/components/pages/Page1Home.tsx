import React, { useState, useRef } from 'react';
import {
  Heart,
  Sparkles,
  Music,
  ChevronDown,
  Play,
  Volume2,
  VolumeX,
  Image as ImageIcon,
  Maximize2,
  X,
  Layers,
  Film
} from 'lucide-react';

import { SmartVideoPlayer } from '../SmartVideoPlayer';

interface Page1HomeProps {
  partnerName: string;
  tagline: string;
  heroPhoto: string;
  heroCenterPhoto?: string | string[];
  heroVideoUrl?: string;
  bgSongTitle: string;
  onNext: () => void;
}

export const Page1Home: React.FC<Page1HomeProps> = ({
  partnerName,
  tagline,
  heroPhoto,
  heroCenterPhoto = "/photos/cover1.jpeg",
  heroVideoUrl = "/videos/wish01.mp4",
  bgSongTitle,
  onNext,
}) => {
  const photoList: string[] = Array.isArray(heroCenterPhoto)
    ? heroCenterPhoto
    : [heroCenterPhoto || "/photos/cover1.jpeg"];

  const defaultPhoto = photoList[0] || "/photos/cover1.jpeg";

  const [activeTab, setActiveTab] = useState<'photo' | 'video' | 'both'>('photo');
  const [selectedPhoto, setSelectedPhoto] = useState<string>(defaultPhoto);
  const [isMuted, setIsMuted] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const availablePhotos = [
    ...photoList.map((url, idx) => ({ url, label: `Featured ${idx + 1}` })),
    { url: "/photos/cover1.jpeg", label: "Cover" },
    { url: "/photos/photo10.jpeg", label: "Photo 10" },
    { url: "/photos/photo2.jpeg", label: "Photo 2" },
    { url: "/photos/photo9.jpeg", label: "Photo 9" },
    { url: "/photos/photo8.jpeg", label: "Photo 8" },
  ].filter((item, index, self) => index === self.findIndex((t) => t.url === item.url));

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 px-4 py-12">
      {/* Fullscreen Hero Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroPhoto}
          alt={partnerName}
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/40" />
        <div className="absolute inset-0 bg-radial from-transparent via-slate-950/50 to-slate-950" />
      </div>

      {/* Floating Animated Heart Particles */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-30"
            style={{
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 90 + 5}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + (i % 4)}s`,
            }}
          >
            <Heart
              className="text-pink-400 fill-pink-500/40"
              style={{ width: `${16 + (i % 3) * 12}px`, height: `${16 + (i % 3) * 12}px` }}
            />
          </div>
        ))}
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-4xl text-center flex flex-col items-center w-full">
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/20 border border-pink-500/40 backdrop-blur-md mb-4 animate-pulse">
          <Sparkles className="w-4 h-4 text-pink-300" />
          <span className="text-xs font-semibold uppercase tracking-widest text-pink-200">
            A Birthday Celebration Just For You
          </span>
        </div>

        {/* Grand Title */}
        <h1 className="font-serif-title font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight mb-3 drop-shadow-2xl">
          Happy Birthday,{' '}
          <span className="font-romantic text-5xl sm:text-7xl lg:text-8xl bg-gradient-to-r from-pink-400 via-rose-300 to-amber-200 bg-clip-text text-transparent block sm:inline">
            {partnerName}
          </span>
        </h1>

        {/* Romantic Subtitle / Tagline */}
        <p className="text-base sm:text-xl text-slate-200 font-light max-w-xl mb-4 leading-relaxed drop-shadow">
          "{tagline}"
        </p>

        {/* View Mode Selector Tabs */}
        <div className="flex items-center justify-center p-1 bg-slate-900/80 border border-pink-500/30 rounded-2xl backdrop-blur-xl mb-4 shadow-xl">
          <button
            type="button"
            onClick={() => setActiveTab('photo')}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${activeTab === 'photo'
                ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/30 scale-105'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
          >
            <ImageIcon className="w-4 h-4" />
            <span>Featured Photo</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('video')}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${activeTab === 'video'
                ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/30 scale-105'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
          >
            <Film className="w-4 h-4" />
            <span>Memory Video</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('both')}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${activeTab === 'both'
                ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/30 scale-105'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
          >
            <Layers className="w-4 h-4" />
            <span>Both View</span>
          </button>
        </div>

        {/* Center Media Showcase Grid / Container */}
        <div className="w-full max-w-2xl my-2">
          {/* PHOTO OR BOTH VIEW: Center Photo Card */}
          {(activeTab === 'photo' || activeTab === 'both') && (
            <div className="relative w-full my-3 group">
              {/* Glowing Ambient Aura */}
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-700 animate-pulse" />

              {/* Glass Card Frame */}
              <div className="relative rounded-2xl bg-slate-900/85 p-3 ring-1 ring-white/20 backdrop-blur-xl shadow-2xl overflow-hidden">
                {/* Photo Top Bar */}
                <div className="flex items-center justify-between px-3 py-1.5 mb-2 bg-white/5 rounded-xl text-xs text-slate-200">
                  <span className="flex items-center gap-1.5 font-semibold text-pink-300">
                    <ImageIcon className="w-3.5 h-3.5 text-pink-400" />
                    Center Featured Photo ❤️
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsLightboxOpen(true)}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-pink-500/20 hover:bg-pink-500/30 text-pink-200 font-medium text-[11px] transition-colors cursor-pointer"
                    title="Enlarge Photo"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-pink-300" />
                    <span>Zoom</span>
                  </button>
                </div>

                {/* Main Centered Image */}
                <div
                  className="relative cursor-pointer overflow-hidden rounded-xl bg-slate-950 aspect-[4/3] sm:aspect-[16/10] flex items-center justify-center border border-white/10 group-hover:border-pink-500/50 transition-all duration-300"
                  onClick={() => setIsLightboxOpen(true)}
                >
                  <img
                    src={selectedPhoto}
                    alt={partnerName}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                    <span className="text-white text-xs font-semibold drop-shadow">
                      Click to expand in full view ✨
                    </span>
                    <span className="p-2 rounded-full bg-pink-500/80 text-white backdrop-blur">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Quick Photo Switcher Buttons */}
                <div className="flex items-center justify-center gap-2 mt-3 overflow-x-auto py-1">
                  <span className="text-[11px] text-slate-400 font-medium whitespace-nowrap">
                    Change Photo:
                  </span>
                  {availablePhotos.map((item, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedPhoto(item.url)}
                      className={`px-3 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer whitespace-nowrap ${selectedPhoto === item.url
                          ? 'bg-pink-500 text-white shadow-md shadow-pink-500/30 ring-1 ring-pink-300'
                          : 'bg-white/5 text-slate-300 hover:bg-white/15 hover:text-white border border-white/10'
                        }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* VIDEO OR BOTH VIEW: Smart Video Player Card */}
          {(activeTab === 'video' || activeTab === 'both') && (
            <div className="relative w-full my-3 group">
              {/* Glowing Ambient Aura */}
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-700 animate-pulse" />

              {/* Glass Card Container */}
              <div className="relative rounded-2xl bg-slate-900/85 p-2.5 ring-1 ring-white/20 backdrop-blur-xl shadow-2xl">
                {/* Header info bar */}
                <div className="flex items-center justify-between px-3 py-1.5 mb-2 bg-white/5 rounded-xl text-xs text-slate-200">
                  <span className="flex items-center gap-1.5 font-semibold text-pink-300">
                    <Play className="w-3.5 h-3.5 fill-pink-400 text-pink-400" />
                    Featured Memory Video ❤️
                  </span>
                  <button
                    type="button"
                    onClick={toggleMute}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-pink-500/20 hover:bg-pink-500/30 text-pink-200 font-medium text-[11px] transition-colors cursor-pointer"
                    title={isMuted ? "Unmute Video Audio" : "Mute Video Audio"}
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5 text-pink-300" /> : <Volume2 className="w-3.5 h-3.5 text-pink-300" />}
                    <span>{isMuted ? "Sound Muted" : "Sound On"}</span>
                  </button>
                </div>

                {/* Smart Video Player Component */}
                <SmartVideoPlayer
                  src={heroVideoUrl}
                  videoRef={videoRef}
                  muted={isMuted}
                  autoPlay={false}
                  loop={true}
                  controls={true}
                  showFitToggle={true}
                />
              </div>
            </div>
          )}
        </div>

        {/* Music Hint Pill */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black/40 border border-white/10 text-xs text-slate-300 backdrop-blur-md mb-6">
          <Music className="w-4 h-4 text-pink-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span>Background Song: <strong className="text-pink-300">{bgSongTitle}</strong></span>
        </div>

        {/* Start Journey CTA Button */}
        <button
          onClick={onNext}
          className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 text-white font-semibold text-base sm:text-lg shadow-xl shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        >
          <span>Begin Our Story</span>
          <Heart className="w-5 h-5 fill-white group-hover:scale-125 transition-transform" />
          <ChevronDown className="w-5 h-5 -mr-1 animate-bounce" />
        </button>
      </div>

      {/* Lightbox Photo Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] p-2 bg-slate-900 rounded-3xl border border-pink-500/40 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 text-white bg-black/60 hover:bg-pink-600 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedPhoto}
              alt={partnerName}
              className="max-h-[82vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl mx-auto"
            />
            <div className="text-center py-2 text-sm text-pink-200 font-medium">
              {partnerName} ❤️
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


