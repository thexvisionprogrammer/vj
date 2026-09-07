import React, { useState } from 'react';
import { Film, Play, X, Laugh } from 'lucide-react';

interface BlooperVideo {
  id: number;
  thumbnailUrl: string;
  videoUrl: string;
  caption: string;
}

interface Page8VideoVaultProps {
  bloopers: {
    title: string;
    subtitle: string;
    videos: BlooperVideo[];
  };
}

export const Page8VideoVault: React.FC<Page8VideoVaultProps> = ({ bloopers }) => {
  const [activeVideo, setActiveVideo] = useState<BlooperVideo | null>(null);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-slate-950 text-slate-100 flex flex-col items-center">
      <div className="max-w-5xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Film className="w-3.5 h-3.5" />
            Chapter 8: Blooper Reel
          </div>

          <h2 className="font-serif-title text-4xl sm:text-6xl font-bold bg-gradient-to-r from-purple-300 via-pink-200 to-amber-200 bg-clip-text text-transparent mb-3">
            {bloopers.title}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto">
            {bloopers.subtitle}
          </p>
        </div>

        {/* Video Vault Grid (Polaroid Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {bloopers.videos.map((vid) => (
            <div
              key={vid.id}
              onClick={() => setActiveVideo(vid)}
              className="bg-slate-900 p-4 rounded-2xl border border-white/10 shadow-2xl hover:border-purple-500/50 hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
            >
              {/* Video Thumbnail */}
              <div className="aspect-video w-full rounded-xl overflow-hidden relative mb-4 bg-black">
                <img
                  src={vid.thumbnailUrl}
                  alt={vid.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-white text-white ml-1" />
                  </div>
                </div>
                <div className="absolute top-2 right-2 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono text-purple-300 border border-purple-500/30 flex items-center gap-1">
                  <Laugh className="w-3 h-3" /> Blooper
                </div>
              </div>

              {/* Caption */}
              <p className="font-handwriting text-lg text-slate-200 text-center leading-snug">
                "{vid.caption}"
              </p>
            </div>
          ))}
        </div>

        {/* Modal Player */}
        {activeVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <div className="relative w-full max-w-3xl glass-card p-4 sm:p-6 border border-purple-500/40 rounded-3xl shadow-2xl">
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full bg-black/50 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <h3 className="font-serif-title text-xl font-bold text-purple-200 mb-4 pr-10">
                {activeVideo.caption}
              </h3>

              <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-inner">
                <video
                  src={activeVideo.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
