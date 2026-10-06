import React, { useState } from 'react';
import { X, Save, Image, Music, Video, Sparkles, Check } from 'lucide-react';

interface MediaSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  partnerName: string;
  heroPhoto: string;
  heroCenterPhoto?: string | string[];
  heroVideoUrl?: string;
  bgAudioUrl: string;
  voiceNoteAudioUrl: string;
  onSave: (newData: {
    partnerName: string;
    heroPhoto: string;
    heroCenterPhoto?: string | string[];
    heroVideoUrl?: string;
    bgAudioUrl: string;
    voiceNoteAudioUrl: string;
  }) => void;
}

export const MediaSettingsModal: React.FC<MediaSettingsModalProps> = ({
  isOpen,
  onClose,
  partnerName,
  heroPhoto,
  heroCenterPhoto = "/photos/cover1.jpeg",
  heroVideoUrl = "/videos/video1.mp4",
  bgAudioUrl,
  voiceNoteAudioUrl,
  onSave,
}) => {
  const initialCenterStr = Array.isArray(heroCenterPhoto)
    ? heroCenterPhoto.join(', ')
    : heroCenterPhoto || "/photos/cover1.jpeg";

  const [name, setName] = useState(partnerName);
  const [photo, setPhoto] = useState(heroPhoto);
  const [centerPhoto, setCenterPhoto] = useState(initialCenterStr);
  const [video, setVideo] = useState(heroVideoUrl);
  const [audio, setAudio] = useState(bgAudioUrl);
  const [voiceAudio, setVoiceAudio] = useState(voiceNoteAudioUrl);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedCenterPhoto = centerPhoto.includes(',')
      ? centerPhoto.split(',').map((s) => s.trim()).filter(Boolean)
      : centerPhoto.trim();

    onSave({
      partnerName: name,
      heroPhoto: photo,
      heroCenterPhoto: parsedCenterPhoto,
      heroVideoUrl: video,
      bgAudioUrl: audio,
      voiceNoteAudioUrl: voiceAudio,
    });
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg glass-card p-6 border border-pink-500/40 rounded-3xl shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full bg-black/40 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2 text-pink-400">
          <Sparkles className="w-4 h-4" />
          <span className="text-xs font-semibold uppercase tracking-wider">
            Quick Customization Panel
          </span>
        </div>

        <h3 className="font-serif-title text-2xl font-bold text-slate-100 mb-4">
          Customize Photos, Videos & Audio
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4 text-sm max-h-[75vh] overflow-y-auto pr-1">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Partner's Name / Nickname
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-slate-100 focus:outline-none focus:border-pink-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1 flex items-center gap-1">
              <Image className="w-3.5 h-3.5 text-pink-400" /> Hero Background Photo URL
            </label>
            <input
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-slate-100 focus:outline-none focus:border-pink-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1 flex items-center gap-1">
              <Image className="w-3.5 h-3.5 text-pink-400" /> Hero Center Photo URL (Page 1 Center)
            </label>
            <input
              type="text"
              value={centerPhoto}
              onChange={(e) => setCenterPhoto(e.target.value)}
              placeholder="/photos/cover1.jpeg"
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-slate-100 focus:outline-none focus:border-pink-500"
            />
            {/* Quick preset buttons */}
            <div className="flex flex-wrap gap-1.5 mt-2">
              <span className="text-[10px] text-slate-400 self-center mr-1">Quick Select:</span>
              {['/photos/cover1.jpeg', '/photos/photo10.jpeg', '/photos/photo2.jpeg', '/photos/photo9.jpeg'].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setCenterPhoto(preset)}
                  className={`text-[10px] px-2 py-0.5 rounded-md border transition-colors ${
                    centerPhoto === preset
                      ? 'bg-pink-500/20 border-pink-400 text-pink-300'
                      : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-500'
                  }`}
                >
                  {preset.split('/').pop()}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1 flex items-center gap-1">
              <Video className="w-3.5 h-3.5 text-pink-400" /> Hero Centered Video URL (Page 1)
            </label>
            <input
              type="text"
              value={video}
              onChange={(e) => setVideo(e.target.value)}
              placeholder="/videos/video1.mp4"
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-slate-100 focus:outline-none focus:border-pink-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1 flex items-center gap-1">
              <Music className="w-3.5 h-3.5 text-pink-400" /> Background Music Audio URL
            </label>
            <input
              type="text"
              value={audio}
              onChange={(e) => setAudio(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-slate-100 focus:outline-none focus:border-pink-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1 flex items-center gap-1">
              <Video className="w-3.5 h-3.5 text-pink-400" /> Voice Note Audio URL (Page 2)
            </label>
            <input
              type="text"
              value={voiceAudio}
              onChange={(e) => setVoiceAudio(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-slate-100 focus:outline-none focus:border-pink-500"
            />
          </div>

          <div className="p-3 rounded-xl bg-pink-500/10 border border-pink-500/20 text-xs text-pink-300 italic">
            Tip: You can also edit <code className="text-white">src/data/birthdayData.ts</code> directly to customize all photos, videos, and texts permanently!
          </div>

          <div className="pt-2 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-white/5 text-slate-300 hover:bg-white/10 text-xs font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold text-xs shadow-lg hover:scale-105 active:scale-95 transition-all"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-4 h-4" /> Saved!
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" /> Save Customization
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
