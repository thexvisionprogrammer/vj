import React, { useState, useEffect } from 'react';
import { BookOpen, Sparkles, Heart, Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

export interface StorySection {
  heading: string;
  text: string;
  imageUrl?: string;
}

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

  // Auto Play Soft Piano/Flute Music when entering Page 13
  useEffect(() => {
    if (onPlayTrack && meriKitab.bgMusicUrl) {
      onPlayTrack(meriKitab.bgMusicUrl, 'Meri Kitab - Soft Romantic Instrumental (Piano & Flute)');
    }
  }, []);

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
            10 Special Sections & Memories of Our Story • Soft romantic music playing...
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
          <div className="mb-10 flex flex-col sm:flex-row items-center gap-6 pb-8 border-b border-amber-900/20">
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
                10 Sections with Photos
              </span>
            </div>

            {/* 2-Column Responsive Grid for 10 Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {meriKitab.storySections.map((sec, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedSectionIndex(idx)}
                  className="group rounded-2xl border border-amber-900/20 bg-white/40 hover:bg-white/70 p-4 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer flex flex-col justify-between"
                >
                  {/* Photo Frame */}
                  <div className="relative w-full h-48 rounded-xl overflow-hidden mb-3 border border-amber-900/20 bg-amber-900/10">
                    {sec.imageUrl ? (
                      <img
                        src={sec.imageUrl}
                        alt={sec.heading}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter sepia-[0.1]"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-amber-900/40">
                        <ImageIcon className="w-8 h-8 mb-1" />
                        <span className="text-xs">Photo Slot #{idx + 1}</span>
                      </div>
                    )}

                    <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-amber-950/80 backdrop-blur-md text-amber-100 text-[10px] font-mono font-bold tracking-wider">
                      Section {idx + 1}
                    </div>

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
                    <span className="italic">Click to view photo & full text</span>
                    <span className="font-mono text-rose-800 font-semibold">Chapter #{idx + 1}</span>
                  </div>
                </div>
              ))}
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

      {/* Fullscreen Photo & Section Lightbox Modal */}
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
                  <ChevronLeft className="w-4 h-4" /> Prev
                </button>
                <button
                  onClick={() =>
                    setSelectedSectionIndex((prev) =>
                      prev !== null && prev < meriKitab.storySections.length - 1 ? prev + 1 : 0
                    )
                  }
                  className="p-1.5 rounded-full bg-rose-800 text-white hover:bg-rose-900 text-xs font-semibold flex items-center gap-1 px-2.5"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Enlarge Photo View */}
            {activeModalSection.imageUrl && (
              <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden border-2 border-amber-900/30 shadow-md mb-6">
                <img
                  src={activeModalSection.imageUrl}
                  alt={activeModalSection.heading}
                  className="w-full h-full object-cover filter sepia-[0.1]"
                />
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
              <span>Photo URL & Title can be edited anytime in birthdayData.ts</span>
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

