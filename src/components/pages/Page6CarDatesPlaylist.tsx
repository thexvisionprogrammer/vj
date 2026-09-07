import React, { useState } from 'react';
import { Play, Pause, Music, Disc, Heart, Car } from 'lucide-react';
import type { Song } from '../../data/birthdayData';

interface Page6CarDatesPlaylistProps {
  drivingDates: {
    title: string;
    subtitle: string;
    photos: string[];
    playlist: Song[];
  };
  onPlayTrack?: (trackUrl: string, title: string) => void;
}

export const Page6CarDatesPlaylist: React.FC<Page6CarDatesPlaylistProps> = ({
  drivingDates,
  onPlayTrack,
}) => {
  const [activeSong, setActiveSong] = useState<Song>(drivingDates.playlist[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSelectSong = (song: Song) => {
    setActiveSong(song);
    setIsPlaying(true);
    if (onPlayTrack && song.audioUrl) {
      onPlayTrack(song.audioUrl, `${song.title} - ${song.artist}`);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-slate-950 text-slate-100 flex flex-col items-center">
      <div className="max-w-5xl w-full">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Car className="w-3.5 h-3.5" />
            Chapter 6: Roadtrips & Soundtracks
          </div>

          <h2 className="font-serif-title text-4xl sm:text-6xl font-bold bg-gradient-to-r from-rose-300 via-pink-200 to-amber-200 bg-clip-text text-transparent mb-3">
            {drivingDates.title}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto">
            {drivingDates.subtitle}
          </p>
        </div>

        {/* Car Dates Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {drivingDates.photos.map((photoUrl, idx) => (
            <div
              key={idx}
              className="glass-card overflow-hidden border border-rose-500/20 rounded-2xl group shadow-lg"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={photoUrl}
                  alt={`Car Date ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Custom Spotify-Style Playlist Player Container */}
        <div className="glass-card border border-rose-500/30 p-6 sm:p-8 rounded-3xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Active Album Art Preview Card */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative w-48 sm:w-56 aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/20 mb-6 group">
                <img
                  src={activeSong.albumArt}
                  alt={activeSong.title}
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    isPlaying ? 'scale-105 brightness-105' : ''
                  }`}
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Disc className={`w-12 h-12 text-pink-400 ${isPlaying ? 'animate-spin' : ''}`} />
                </div>
              </div>

              <h3 className="font-serif-title text-2xl font-bold text-slate-100 mb-1">
                {activeSong.title}
              </h3>
              <p className="text-pink-300 font-medium text-sm mb-4">
                {activeSong.artist}
              </p>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold text-sm shadow-lg shadow-pink-500/30 hover:scale-105 active:scale-95 transition-all"
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
                <span>{isPlaying ? 'Now Playing' : 'Play Track'}</span>
              </button>
            </div>

            {/* 10 Songs List */}
            <div className="lg:col-span-7">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Drive Playlist (10 Tracks)
                </span>
                <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
              </div>

              <div className="space-y-1.5 max-h-96 overflow-y-auto pr-1">
                {drivingDates.playlist.map((song, index) => {
                  const isSelected = activeSong.id === song.id;
                  return (
                    <div
                      key={song.id}
                      onClick={() => handleSelectSong(song)}
                      className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-gradient-to-r from-pink-600/30 to-rose-600/20 border border-pink-500/40 text-pink-200'
                          : 'hover:bg-white/5 text-slate-300 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3 truncate">
                        <span className="text-xs font-mono font-bold text-slate-500 w-5">
                          {index + 1}
                        </span>
                        <img
                          src={song.albumArt}
                          alt={song.title}
                          className="w-10 h-10 rounded-lg object-cover flex-shrink-0"
                        />
                        <div className="truncate">
                          <p className="font-semibold text-sm truncate">{song.title}</p>
                          <p className="text-xs text-slate-400 truncate">{song.artist}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-slate-400">{song.duration}</span>
                        {isSelected && isPlaying ? (
                          <Music className="w-4 h-4 text-pink-400 animate-pulse" />
                        ) : (
                          <Play className="w-4 h-4 text-slate-500 hover:text-pink-400" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
