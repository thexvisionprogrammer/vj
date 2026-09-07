import React, { useState } from 'react';
import { Mail, X, BookOpen, Sparkles } from 'lucide-react';
import type { SecretLetter } from '../../data/birthdayData';

interface Page10SecretLettersProps {
  secretLetters: SecretLetter[];
}

export const Page10SecretLetters: React.FC<Page10SecretLettersProps> = ({ secretLetters }) => {
  const [selectedLetter, setSelectedLetter] = useState<SecretLetter | null>(null);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-slate-950 text-slate-100 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            Chapter 10: Digital Diary
          </div>

          <h2 className="font-serif-title text-4xl sm:text-6xl font-bold bg-gradient-to-r from-rose-300 via-pink-200 to-amber-200 bg-clip-text text-transparent mb-3">
            Secret Love Letters & Diary Notes
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto">
            Click on any wax-sealed envelope to open and read private romantic notes written in Hindi & English.
          </p>
        </div>

        {/* Letters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {secretLetters.map((letter) => (
            <div
              key={letter.id}
              onClick={() => setSelectedLetter(letter)}
              className="glass-card p-6 border border-pink-500/30 shadow-2xl hover:border-pink-500/60 hover:-translate-y-2 transition-all duration-300 cursor-pointer relative overflow-hidden group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs font-bold border border-pink-500/30">
                  {letter.language} Note
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {letter.date}
                </span>
              </div>

              {/* Envelope Seal Icon */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-rose-600 to-amber-500 flex items-center justify-center my-4 mx-auto shadow-lg shadow-rose-500/30 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-white" />
              </div>

              <h3 className="font-serif-title text-xl font-bold text-slate-100 text-center mb-3 group-hover:text-pink-300 transition-colors">
                {letter.title}
              </h3>

              <p className="text-xs text-slate-400 text-center line-clamp-2 italic mb-4">
                "{letter.content}"
              </p>

              <div className="text-center">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-pink-400 group-hover:underline">
                  <BookOpen className="w-3.5 h-3.5" /> Read Full Letter
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Full Letter Modal */}
        {selectedLetter && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="relative w-full max-w-2xl vintage-paper p-8 rounded-3xl shadow-2xl max-h-[85vh] overflow-y-auto">
              <button
                onClick={() => setSelectedLetter(null)}
                className="absolute top-4 right-4 text-slate-700 hover:text-black p-2 rounded-full bg-black/10 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-2 mb-2 text-rose-800">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">
                  {selectedLetter.language} Diary Note
                </span>
              </div>

              <h3 className="font-serif-title text-2xl font-bold text-amber-950 mb-6 border-b border-amber-900/20 pb-3">
                {selectedLetter.title}
              </h3>

              <div className="font-handwriting text-xl sm:text-2xl text-amber-950 leading-relaxed whitespace-pre-line mb-8">
                {selectedLetter.content}
              </div>

              <div className="text-right border-t border-amber-900/20 pt-4">
                <span className="font-romantic text-2xl text-rose-800">
                  Forever Yours ❤️
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
