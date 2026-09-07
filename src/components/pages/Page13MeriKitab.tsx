import React, { useState, useEffect } from 'react';
import { BookOpen, Sparkles, Heart } from 'lucide-react';

interface Page13MeriKitabProps {
  partnerName: string;
  meriKitab: {
    bgMusicUrl: string;
    firstPhotoUrl: string;
    firstMeetingLocation: string;
    intro: string;
    storySections: { heading: string; text: string }[];
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
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

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

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-slate-950 text-slate-100 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full">
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
            Soft romantic instrumental playing in the background...
          </p>
        </div>

        {/* Vintage Parchment Book Layout */}
        <div className="vintage-paper p-6 sm:p-12 rounded-3xl shadow-2xl relative border-2 border-amber-800/30 overflow-hidden">
          {/* Decorative Corner Flourishes */}
          <div className="absolute top-4 left-4 text-amber-900/30 text-3xl font-serif">❦</div>
          <div className="absolute top-4 right-4 text-amber-900/30 text-3xl font-serif">❦</div>
          <div className="absolute bottom-4 left-4 text-amber-900/30 text-3xl font-serif">❦</div>
          <div className="absolute bottom-4 right-4 text-amber-900/30 text-3xl font-serif">❦</div>

          {/* First Photo Frame / Memory Badge */}
          <div className="mb-8 flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-amber-900/20">
            <div className="w-40 sm:w-48 aspect-square rounded-2xl overflow-hidden border-4 border-amber-900/30 shadow-xl flex-shrink-0 group">
              <img
                src={meriKitab.firstPhotoUrl}
                alt="First Picture Together"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter sepia-[0.2]"
              />
            </div>
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-800 bg-rose-500/10 px-3 py-1 rounded-full border border-rose-800/20 inline-block mb-2">
                Our Very First Picture Together
              </span>
              <h3 className="font-serif-title text-2xl font-bold text-amber-950 mb-1">
                Where Our Story Started
              </h3>
              <p className="text-sm text-amber-900/80 italic">
                📍 {meriKitab.firstMeetingLocation}
              </p>
            </div>
          </div>

          {/* Section 1: Intro (Typewriter Effect) */}
          <div className="mb-8">
            <h4 className="font-serif-title text-xl font-bold text-amber-950 mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-rose-700" />
              1. The Intro (Shuruat)
            </h4>
            <div className="font-handwriting text-xl sm:text-2xl text-amber-950 leading-relaxed min-h-[80px]">
              {typedIntro}
              {!introFinished && <span className="animate-cursor font-bold text-rose-800">|</span>}
            </div>
          </div>

          {/* Section 2: Core Story Cards */}
          <div className="mb-8 space-y-4">
            <h4 className="font-serif-title text-xl font-bold text-amber-950 mb-3">
              2. The Core Story (Aapka Kissa)
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {meriKitab.storySections.map((sec, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveSectionIndex(idx)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    activeSectionIndex === idx
                      ? 'bg-amber-900/10 border-amber-900/40 shadow-md scale-[1.02]'
                      : 'bg-white/30 border-amber-900/10 hover:bg-white/50'
                  }`}
                >
                  <h5 className="font-serif-title font-bold text-sm text-rose-900 mb-1">
                    {sec.heading}
                  </h5>
                  <p className="text-xs text-amber-950 leading-relaxed font-sans">
                    {sec.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Ending Note */}
          <div className="pt-6 border-t border-amber-900/20 text-center">
            <h4 className="font-serif-title text-xl font-bold text-amber-950 mb-2">
              3. The Ending Note (Aakhri Line)
            </h4>
            <p className="font-romantic text-3xl sm:text-4xl text-rose-800 leading-snug">
              "{meriKitab.endingNote}"
            </p>
            <div className="mt-4 flex items-center justify-center gap-1 text-amber-900/60 text-xs">
              <Heart className="w-4 h-4 text-rose-700 fill-rose-700" /> Written with eternal love for {partnerName}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
