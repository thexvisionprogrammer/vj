import React, { useState } from 'react';
import { Camera, Laugh, X, Sparkles, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { SmartVideoPlayer } from '../SmartVideoPlayer';

export interface BlooperItem {
  id: number;
  url?: string;
  photoUrl?: string;
  thumbnailUrl?: string;
  videoUrl?: string;
  caption: string;
  location?: string;
}

interface Page8VideoVaultProps {
  bloopers: {
    title: string;
    subtitle: string;
    photos?: BlooperItem[];
    videos?: BlooperItem[];
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
    lower.includes('.mp4?')
  );
};

export const Page8VideoVault: React.FC<Page8VideoVaultProps> = ({ bloopers }) => {
  // Support either photos array or legacy videos array seamlessly
  const items: BlooperItem[] = bloopers.photos || bloopers.videos || [];
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const activeItem = selectedIndex !== null ? items[selectedIndex] : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! === 0 ? items.length - 1 : prev! - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! === items.length - 1 ? 0 : prev! + 1));
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-slate-950 text-slate-100 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-pink-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl w-full z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3 backdrop-blur-md">
            <Camera className="w-3.5 h-3.5 text-purple-400" />
            Chapter 8: Blooper Photos
          </div>

          <h2 className="font-serif-title text-4xl sm:text-6xl font-bold bg-gradient-to-r from-purple-300 via-pink-200 to-amber-200 bg-clip-text text-transparent mb-3 leading-tight">
            {bloopers.title}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed font-light">
            {bloopers.subtitle}
          </p>
        </div>

        {/* Polaroid Style Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {items.map((item, idx) => {
            const mediaUrl = item.url || item.photoUrl || item.videoUrl || item.thumbnailUrl || '';
            const isVideo = isVideoUrl(mediaUrl);

            return (
              <div
                key={item.id || idx}
                onClick={() => setSelectedIndex(idx)}
                className="bg-slate-900/90 p-4 rounded-3xl border border-purple-500/30 shadow-2xl hover:border-purple-400/60 hover:-translate-y-2 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
              >
                {/* Photo / Video Container */}
                <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden relative bg-slate-950 mb-4 shadow-inner">
                  {isVideo ? (
                    <div className="w-full h-full flex items-center justify-center p-1">
                      <SmartVideoPlayer
                        src={mediaUrl}
                        controls={false}
                        autoPlay={false}
                        loop={true}
                        muted={true}
                        showFitToggle={false}
                      />
                    </div>
                  ) : (
                    <img
                      src={mediaUrl}
                      alt={item.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                    />
                  )}

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-pink-500/80 backdrop-blur-md text-white flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-mono text-purple-300 border border-purple-500/30 flex items-center gap-1">
                    <Laugh className="w-3.5 h-3.5 text-pink-400" />
                    <span>{item.location || 'Blooper'}</span>
                  </div>
                </div>

                {/* Caption */}
                <div className="px-2 pb-1 text-center">
                  <p className="font-serif-title text-base font-medium text-pink-100 leading-snug group-hover:text-white transition-colors">
                    "{item.caption}"
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fullscreen Photo Lightbox Modal */}
        {activeItem && selectedIndex !== null && (
          <div
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl animate-fade-in"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl glass-card p-4 sm:p-8 border border-purple-500/40 rounded-3xl shadow-2xl flex flex-col items-center"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full bg-black/60 border border-white/10 hover:bg-rose-600 transition-all z-30"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev / Next Controls */}
              {items.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-white p-3 rounded-full bg-black/70 border border-white/20 hover:bg-purple-600 transition-all z-30 shadow-xl"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white p-3 rounded-full bg-black/70 border border-white/20 hover:bg-purple-600 transition-all z-30 shadow-xl"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Media Content */}
              <div className="w-full max-h-[65vh] rounded-2xl overflow-hidden bg-black flex items-center justify-center mb-6 border border-white/10 shadow-2xl">
                {isVideoUrl(activeItem.url || activeItem.photoUrl || activeItem.videoUrl || '') ? (
                  <SmartVideoPlayer
                    src={activeItem.url || activeItem.photoUrl || activeItem.videoUrl || ''}
                    controls={true}
                    autoPlay={true}
                    loop={true}
                    showFitToggle={true}
                  />
                ) : (
                  <img
                    src={activeItem.url || activeItem.photoUrl || activeItem.videoUrl || activeItem.thumbnailUrl}
                    alt={activeItem.caption}
                    className="max-h-[65vh] w-auto max-w-full object-contain rounded-2xl"
                  />
                )}
              </div>

              {/* Caption & Counter */}
              <div className="text-center max-w-xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-mono mb-2 border border-purple-500/30">
                  <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                  Memory {selectedIndex + 1} of {items.length}
                </div>
                <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-pink-100 leading-relaxed">
                  "{activeItem.caption}"
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
