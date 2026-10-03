import React, { useState, useEffect } from 'react';
import { initialBirthdayData } from './data/birthdayData';
import { Navbar } from './components/Navbar';
import { BackgroundMusicPlayer } from './components/BackgroundMusicPlayer';
import { MediaSettingsModal } from './components/MediaSettingsModal';

// Pages
import { Page1Home } from './components/pages/Page1Home';
import { Page2VoiceNote } from './components/pages/Page2VoiceNote';
import { Page3AllAboutV } from './components/pages/Page3AllAboutV';
import { Page4MountainDiaries } from './components/pages/Page4MountainDiaries';
import { Page5ActivaRides } from './components/pages/Page5ActivaRides';
import { Page6CarDatesPlaylist } from './components/pages/Page6CarDatesPlaylist';
import { Page7FoodFlavors } from './components/pages/Page7FoodFlavors';
import { Page8VideoVault } from './components/pages/Page8VideoVault';
import { Page9ReasonsLove } from './components/pages/Page9ReasonsLove';
import { Page10SecretLetters } from './components/pages/Page10SecretLetters';
import { Page11BucketList } from './components/pages/Page11BucketList';
import { Page12VirtualCake } from './components/pages/Page12VirtualCake';
import { Page13MeriKitab } from './components/pages/Page13MeriKitab';

import { ChevronLeft, ChevronRight } from 'lucide-react';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  // Automatically scroll to the top of the window whenever the active page changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [currentPage]);
  const [data, setData] = useState(initialBirthdayData);
  const [currentTrackUrl, setCurrentTrackUrl] = useState(initialBirthdayData.bgAudioUrl);
  const [currentTrackTitle, setCurrentTrackTitle] = useState(initialBirthdayData.bgSongTitle);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const pageTitles = [
    "The Grand Welcome",
    "The Virtual Cake & Wish",
    "My Voice for You",
    "All About VijayLaxmi (Cutu) ❤️",
    "Our Purest Decision to Kaichi Dham",
    "Your Eyes 👀✨",
    "Driving Dates & Playlists",
    "Food & Flavors",
    "The Blooper Reel",
    "10 Reasons Why I Love You",
    "Secret Letters",
    "The Future Bucket List",
    "Meri Kitab: Ek Mulakat"
  ];

  const handleTrackChange = (url: string, title: string) => {
    setCurrentTrackUrl(url);
    setCurrentTrackTitle(title);
  };

  const handleSaveSettings = (newData: {
    partnerName: string;
    heroPhoto: string;
    heroVideoUrl?: string;
    bgAudioUrl: string;
    voiceNoteAudioUrl: string;
  }) => {
    setData((prev) => ({
      ...prev,
      partnerName: newData.partnerName,
      heroPhoto: newData.heroPhoto,
      heroVideoUrl: newData.heroVideoUrl || prev.heroVideoUrl,
      bgAudioUrl: newData.bgAudioUrl,
      voiceNoteAudioUrl: newData.voiceNoteAudioUrl,
    }));
    if (newData.bgAudioUrl !== currentTrackUrl) {
      setCurrentTrackUrl(newData.bgAudioUrl);
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 0:
        return (
          <Page1Home
            partnerName={data.partnerName}
            tagline={data.tagline}
            heroPhoto={data.heroPhoto}
            heroVideoUrl={data.heroVideoUrl}
            bgSongTitle={currentTrackTitle}
            onNext={() => setCurrentPage(1)}
          />
        );
      case 1:
        return (
          <Page12VirtualCake
            partnerName={data.partnerName}
            virtualCake={data.virtualCake}
          />
        );
      case 2:
        return (
          <Page2VoiceNote
            partnerName={data.partnerName}
            voiceNoteAudioUrl={data.voiceNoteAudioUrl}
            voiceNoteTitle={data.voiceNoteTitle}
            voiceNoteDuration={data.voiceNoteDuration}
            voiceNoteMessage={data.voiceNoteMessage}
          />
        );
      case 3:
        return (
          <Page3AllAboutV
            partnerName={data.partnerName}
            aboutV={data.aboutV}
          />
        );
      case 4:
        return (
          <Page4MountainDiaries
            mountainDiaries={data.mountainDiaries}
          />
        );
      case 5:
        return (
          <Page5ActivaRides
            activaRides={data.activaRides}
          />
        );
      case 6:
        return (
          <Page6CarDatesPlaylist
            drivingDates={data.drivingDates}
            onPlayTrack={handleTrackChange}
          />
        );
      case 7:
        return (
          <Page7FoodFlavors
            foodFlavors={data.foodFlavors}
          />
        );
      case 8:
        return (
          <Page8VideoVault
            bloopers={data.bloopers}
          />
        );
      case 9:
        return (
          <Page9ReasonsLove
            reasons={data.reasons}
          />
        );
      case 10:
        return (
          <Page10SecretLetters
            secretLetters={data.secretLetters}
          />
        );
      case 11:
        return (
          <Page11BucketList
            initialBucketList={data.bucketList}
          />
        );
      case 12:
        return (
          <Page13MeriKitab
            partnerName={data.partnerName}
            meriKitab={data.meriKitab}
            onPlayTrack={handleTrackChange}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-pink-500 selection:text-white">
      {/* Persistent Audio Player */}
      <BackgroundMusicPlayer
        currentTrackUrl={currentTrackUrl}
        trackTitle={currentTrackTitle}
      />

      {/* Floating Header Navigation */}
      <Navbar
        currentPage={currentPage}
        totalPages={pageTitles.length}
        pageTitles={pageTitles}
        onPageChange={(page) => setCurrentPage(page)}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />

      {/* Current Page Content */}
      <main className="w-full min-h-screen">
        {renderCurrentPage()}
      </main>

      {/* Quick Chapter Navigation Bar at Bottom */}
      <footer className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40">
        <div className="glass-card flex items-center gap-3 px-4 py-2 border border-pink-500/20 shadow-2xl backdrop-blur-md">
          <button
            onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
            disabled={currentPage === 0}
            className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-200 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
          >
            <ChevronLeft className="w-4 h-4" /> Previous
          </button>

          <span className="text-xs font-mono font-bold text-pink-300">
            {currentPage + 1} / {pageTitles.length}
          </span>

          <button
            onClick={() => setCurrentPage(Math.min(pageTitles.length - 1, currentPage + 1))}
            disabled={currentPage === pageTitles.length - 1}
            className="flex items-center gap-1 text-xs font-semibold px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md hover:scale-105 disabled:opacity-30 disabled:hover:scale-100 transition-all"
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </footer>

      {/* Customization Settings Modal */}
      <MediaSettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        partnerName={data.partnerName}
        heroPhoto={data.heroPhoto}
        heroVideoUrl={data.heroVideoUrl}
        bgAudioUrl={data.bgAudioUrl}
        voiceNoteAudioUrl={data.voiceNoteAudioUrl}
        onSave={handleSaveSettings}
      />
    </div>
  );
};

export default App;
