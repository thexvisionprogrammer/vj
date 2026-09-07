import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Heart, Settings, BookOpen } from 'lucide-react';

interface NavbarProps {
  currentPage: number;
  totalPages: number;
  pageTitles: string[];
  onPageChange: (page: number) => void;
  onOpenSettings: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  totalPages,
  pageTitles,
  onPageChange,
  onOpenSettings,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSelectPage = (pageIndex: number) => {
    onPageChange(pageIndex);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Floating Bar */}
      <header className="fixed top-4 left-4 z-40 flex items-center gap-2">
        <div className="glass-card flex items-center gap-2 px-4 py-2 border border-pink-500/20 shadow-lg backdrop-blur-md">
          {/* Logo / Title */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onPageChange(0)}>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-600 to-rose-400 flex items-center justify-center text-white shadow-md">
              <Heart className="w-4 h-4 fill-white animate-pulse" />
            </div>
            <span className="font-serif-title font-bold text-lg bg-gradient-to-r from-pink-300 via-rose-200 to-amber-200 bg-clip-text text-transparent hidden sm:inline">
              Happy Birthday V
            </span>
          </div>

          <div className="h-4 w-px bg-slate-700 mx-1 hidden sm:block" />

          {/* Chapter Selector Pill */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-xs text-slate-200 border border-white/10 transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5 text-pink-400" />
            <span className="font-medium max-w-[120px] sm:max-w-[180px] truncate">
              {currentPage + 1}. {pageTitles[currentPage]}
            </span>
            <span className="text-[10px] text-pink-400 font-bold bg-pink-500/20 px-1.5 py-0.5 rounded-full">
              {currentPage + 1}/{totalPages}
            </span>
          </button>

          {/* Prev/Next Buttons */}
          <div className="flex items-center gap-1 ml-1">
            <button
              onClick={() => onPageChange(Math.max(0, currentPage - 1))}
              disabled={currentPage === 0}
              className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
              title="Previous Page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => onPageChange(Math.min(totalPages - 1, currentPage + 1))}
              disabled={currentPage === totalPages - 1}
              className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
              title="Next Page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={onOpenSettings}
            className="p-1.5 rounded-full text-slate-400 hover:text-pink-300 hover:bg-white/10 transition-colors ml-1"
            title="Edit Photos & Media"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Slide-out Chapters Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Drawer */}
          <div className="relative z-10 w-80 max-w-[85vw] bg-slate-950/95 border-r border-pink-500/30 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-pink-500 fill-pink-500" />
                  <h3 className="font-serif-title text-lg font-bold text-slate-100">
                    Chapters of Our Story
                  </h3>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-slate-400 hover:text-white p-1 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4 space-y-1.5">
                {pageTitles.map((title, idx) => {
                  const isActive = idx === currentPage;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectPage(idx)}
                      className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-medium transition-all flex items-center justify-between ${
                        isActive
                          ? 'bg-gradient-to-r from-pink-600/30 to-rose-600/20 text-pink-300 border border-pink-500/40 shadow-sm'
                          : 'text-slate-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <span
                          className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                            isActive
                              ? 'bg-pink-500 text-white'
                              : 'bg-slate-800 text-slate-400'
                          }`}
                        >
                          {idx + 1}
                        </span>
                        <span className="truncate">{title}</span>
                      </div>
                      {isActive && <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400 flex-shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-slate-800 text-center">
              <p className="text-[11px] text-slate-400 font-romantic text-base text-pink-300">
                Made with love for V ❤️
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
