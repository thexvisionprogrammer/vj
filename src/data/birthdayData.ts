export interface Song {
  id: number;
  title: string;
  artist: string;
  albumArt: string;
  audioUrl?: string;
  duration: string;
}

export interface Reason {
  id: number;
  title: string;
  iconName: string;
  description: string;
}

export interface SecretLetter {
  id: number;
  title: string;
  date: string;
  language: 'Hindi' | 'English';
  content: string;
}

export interface BucketItem {
  id: number;
  title: string;
  category: 'Travel' | 'Experience' | 'Food' | 'Crazy Dream';
  completed: boolean;
  location?: string;
}

export const initialBirthdayData = {
  partnerName: "V",
  fullName: "My Special Someone 'V'",
  birthdayDate: "September 7",
  tagline: "To the girl who turned my world into pure magic ✨",
  
  // Page 1: Hero
  heroPhoto: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1600&q=80",
  bgAudioUrl: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-piano-112199.mp3", // Romantic soothing track
  bgSongTitle: "Dooron Dooron (Soothing Romantic Track)",

  // Page 2: Voice Note
  voiceNoteAudioUrl: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a70514.mp3?filename=sweet-romantic-melody-10878.mp3",
  voiceNoteTitle: "A Message From My Heart ❤️",
  voiceNoteDuration: "1:45",
  voiceNoteMessage: "I built this entire website just for you to remind you how deeply loved, valued, and celebrated you are every single day. Press play above to listen to my voice note!",

  // Page 3: All About V
  aboutV: {
    title: "All About My Favorite Person",
    description: "Your smile brightens the darkest days, your grace leaves me speechless, and your kindness inspires me endlessly.",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
        caption: "That beaming smile of yours 😊",
        tag: "Cutest Smile"
      },
      {
        url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
        caption: "Effortlessly elegant as always ✨",
        tag: "Best Outfit"
      },
      {
        url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
        caption: "Candid laughters we treasure 💖",
        tag: "Unfiltered Joy"
      },
      {
        url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
        caption: "Your glowing positivity 🌟",
        tag: "Pure Soul"
      }
    ],
    compliments: [
      { icon: "Sparkles", text: "The way your eyes light up when you laugh" },
      { icon: "Heart", text: "Your unconditional empathy for everyone around you" },
      { icon: "Sun", text: "How you make any simple place feel like home" },
      { icon: "Crown", text: "Your unmatched aesthetic sense and elegance" }
    ]
  },

  // Page 4: Mountain Diaries
  mountainDiaries: {
    title: "The Mountain Diaries 🏔️",
    subtitle: "Our Highest Highs: Manali & Shinkula Top",
    heroImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    videoLoopUrl: "https://assets.mixkit.co/videos/preview/mixkit-snowy-mountain-landscape-3406-large.mp4",
    altitudeText: "16,580 FT ABOVE SEA LEVEL",
    memories: [
      {
        title: "Chilling in Manali's Snow",
        location: "Manali, Himachal Pradesh",
        date: "Snow Trip",
        imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
        note: "Freezing cold outside, but holding your hand kept me warm the entire journey."
      },
      {
        title: "Conquering Shinkula Pass",
        location: "Shinkula Top (16,580 ft)",
        date: "High Altitude Peak",
        imageUrl: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=800&q=80",
        note: "The wind was roaring, the snow was blinding, but watching you smile at the peak was priceless."
      }
    ]
  },

  // Page 5: Kali Activa Rides
  activaRides: {
    title: "The 'Kali Activa' Rides 🛵",
    subtitle: "Simple rides, endless laughter & wind in our hair",
    bgPhoto: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
        caption: "Our trusty Black Activa ready for any random plan"
      },
      {
        url: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80",
        caption: "Late night chai rides through empty city streets"
      }
    ],
    note: "Who needs expensive sports cars when we have our Kali Activa? From random midnight craving trips to riding through sunset breezes, holding onto you tight on those rides is my favorite place in the world."
  },

  // Page 6: Driving Dates & Playlists
  drivingDates: {
    title: "Car Dates & Playlist 🚗🎶",
    subtitle: "10 Songs that played while we chased horizons together",
    photos: [
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80"
    ],
    playlist: [
      { id: 1, title: "Dooron Dooron", artist: "Paresh / Smooth Vibes", albumArt: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=300&q=80", duration: "3:42", audioUrl: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3" },
      { id: 2, title: "Tum Se Hi", artist: "Pritam, Mohit Chauhan", albumArt: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=300&q=80", duration: "5:23", audioUrl: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a70514.mp3" },
      { id: 3, title: "Pasoori", artist: "Ali Sethi, Shae Gill", albumArt: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=300&q=80", duration: "3:44" },
      { id: 4, title: "Kesariya", artist: "Arijit Singh", albumArt: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=300&q=80", duration: "4:28" },
      { id: 5, title: "Night Changes", artist: "One Direction", albumArt: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=300&q=80", duration: "3:46" },
      { id: 6, title: "Apna Bana Le", artist: "Arijit Singh", albumArt: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=300&q=80", duration: "4:21" },
      { id: 7, title: "Perfect", artist: "Ed Sheeran", albumArt: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=300&q=80", duration: "4:23" },
      { id: 8, title: "Ranjha", artist: "B Praak, Jasleen Royal", albumArt: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=300&q=80", duration: "3:48" },
      { id: 9, title: "Choo Lo", artist: "The Local Train", albumArt: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=300&q=80", duration: "3:53" },
      { id: 10, title: "Softly", artist: "Karan Aujla", albumArt: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=300&q=80", duration: "2:36" }
    ]
  },

  // Page 7: Food & Flavors
  foodFlavors: {
    title: "Food & Flavors 🍕🧁",
    subtitle: "The way to the heart is through great food!",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
        dish: "Home Cooked Italian Pasta",
        note: "The time we tried making handmade pasta and burnt the garlic, but it still tasted divine!"
      },
      {
        url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
        dish: "Late Night Pizza Cravings",
        note: "Extra cheese, zero regrets, and fighting for the last slice!"
      },
      {
        url: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
        dish: "Birthday Desserts & Waffles",
        note: "Your sweet tooth is unmatched, and watching you eat desserts brings pure joy."
      }
    ],
    note: "Cooking for you or exploring new food spots together always turns into our happiest ritual. You make every meal feel like a royal feast!"
  },

  // Page 8: The Blooper Reel
  bloopers: {
    title: "The Blooper Reel 🎬🍿",
    subtitle: "Relationship perfection isn't in posed photos, it's in our goofy, hilarious moments!",
    videos: [
      {
        id: 1,
        thumbnailUrl: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-young-couple-having-fun-outdoors-42866-large.mp4",
        caption: "When you tried to take a cute candid but got scared by a dog 😂"
      },
      {
        id: 2,
        thumbnailUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-happy-couple-walking-and-laughing-on-the-beach-41611-large.mp4",
        caption: "Attempting a viral dance trend and failing miserably 💃🕺"
      },
      {
        id: 3,
        thumbnailUrl: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-couple-in-love-enjoying-the-sunset-41615-large.mp4",
        caption: "Uncontrollable giggles during an important serious moment 🤪"
      }
    ]
  },

  // Page 9: 10 Reasons Why I Love You
  reasons: [
    { id: 1, title: "1. Your Electric Smile", iconName: "Smile", description: "The moment you smile, every worry in my mind melts away instantly. It's my absolute favorite sight in the universe." },
    { id: 2, title: "2. Your Caring Soul", iconName: "Heart", description: "You notice the little things about people and care so deeply. Your warmth makes the world a kinder place." },
    { id: 3, title: "3. Mountain Adventure Partner", iconName: "Compass", description: "From freezing at 16,580 ft on Shinkula Top to riding the Kali Activa in rain, you are down for any adventure with me." },
    { id: 4, title: "4. The Way You Laugh", iconName: "Sparkles", description: "Your genuine, uninhibited belly laugh when I say something silly is the sweetest sound ever recorded." },
    { id: 5, title: "5. How Stylish You Are", iconName: "Crown", description: "Whether in ethnic wear, hoodies, or party outfits, you turn heads everywhere with your effortless grace." },
    { id: 6, title: "6. Our Late Night Talks", iconName: "Moon", description: "Talking to you at 2 AM about our dreams, fears, and random nonsense feels like talking to my soulmate." },
    { id: 7, title: "7. You Believe in Me", iconName: "Star", description: "Even when I doubt myself, your strong faith in me gives me the courage to conquer anything." },
    { id: 8, title: "8. Foodie Companion", iconName: "Utensils", description: "Sharing midnight ice creams, testing weird recipes, and food dates with you are pure happiness." },
    { id: 9, title: "9. Endless Kindness", iconName: "Sun", description: "The respect and tenderness with which you treat animals, strangers, and family shows how beautiful your soul is." },
    { id: 10, title: "10. You Are Simply 'V'", iconName: "Award", description: "Because out of 8 billion people on Earth, there is only ONE of you, and you complete my life in every single way." }
  ],

  // Page 10: Secret Letters
  secretLetters: [
    {
      id: 1,
      title: "Dear V: Tum Meri Zindagi Ka Sabse Sundar Tohfa Ho",
      date: "September 7, 2026",
      language: "Hindi" as const,
      content: `Pyaari V,\n\nAaj tumhare is khaas din par main bas itna kehna chahta hoon ki tum meri zindagi ka sabse khoobsurat hissa ho. Jab se tum aayi ho, har mausam romantic aur har din ek naye jashn jaisa lagta hai.\n\nKali Activa ki rides se lekar Shinkula Top ke thande pahado tak, har rasta tumhare saath ek haseen safar ban gaya. Tumhari muskurahat meri sabse badi taakat hai. Happy Birthday, my love! ❤️`
    },
    {
      id: 2,
      title: "To My Forever Partner In Crime",
      date: "Birthday Special Note",
      language: "English" as const,
      content: `My Dearest V,\n\nHappy Birthday! Thank you for being my anchor, my favorite photographer, my car date DJ, and my best friend. Looking back at all our memories—our food experiments, driving trips, and endless laughter—I realize how blessed I am to walk through life with you.\n\nMay this new year bring you infinite joy, success, and endless laughter. I promise to hold your hand through every high and low. Yours forever!`
    }
  ],

  // Page 11: The Future Bucket List
  bucketList: [
    { id: 1, title: "Northern Lights in Norway / Iceland 🌌", category: "Travel", completed: false, location: "Norway" },
    { id: 2, title: "Scuba Diving Together in Maldives 🪸", category: "Experience", completed: false, location: "Maldives" },
    { id: 3, title: "Road Trip Across Ladakh & Pangong Lake 🛵", category: "Travel", completed: true, location: "Ladakh" },
    { id: 4, title: "Bake a 3-Tier Chocolate Birthday Cake From Scratch 🎂", category: "Food", completed: false },
    { id: 5, title: "Adopt a Cute Golden Retriever Puppy 🐶", category: "Crazy Dream", completed: false },
    { id: 6, title: "Stay in an Igloo Hotel Under Stars ❄️", category: "Travel", completed: false, location: "Finland" }
  ] as BucketItem[],

  // Page 12: Virtual Cake & Final Wish
  virtualCake: {
    title: "Make a Wish & Blow The Candles! 🕯️🎂",
    instructions: "Click on the candles or blow into your microphone to extinguish the flames!",
    videoWishUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-sparkler-firework-41604-large.mp4",
    finalMessage: "Happy Birthday V! May all your secret wishes come true today and forever! ❤️🎉"
  },

  // Page 13: Meri Kitab: Ek Mulakat
  meriKitab: {
    bgMusicUrl: "https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=soft-romantic-piano-10651.mp3",
    firstPhotoUrl: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1000&q=80",
    firstMeetingLocation: "That Unforgettable Café Where It All Began",
    
    intro: "Kuch kahaniyan aisi hoti hain jo waqt ke sath purani nahi hoti, bas unke panno ki khushbu aur gehri ho jati hai. Meri zindagi ki kitaab ka sabse khubsurat panna wahi tha, jab meri tumse wo pehli mulakat hui thi...",
    
    storySections: [
      {
        heading: "1. Wo Din (The Vibe)",
        text: "Ma मौसम bilkul suhana tha. Hawa mein ek aisi shanti aur mithas thi jaise kismat pehle se jaanti thi ki aaj kuch bohot khaas hone wala hai. Dil thoda sa nervous tha, par aane wale lamhon ka intezaar bohot pyaara tha."
      },
      {
        heading: "2. Pehli Nazar (The Look)",
        text: "Jab tumne pehli baar mud kar dekha, mera waqt jaise wahin ruk gaya. Tumhari wo innocent smile, tumhara stylish tareeka, aur tumhari aankhon ka teaj—mujhse ek second ke liye bhi nazar hatayi nahi gayi."
      },
      {
        heading: "3. Pehli Baat (The Icebreaker)",
        text: "Hamari wo pehli baat-cheet! Shuruat chhote se hello se hui thi, par do hi minute mein lagne laga jaise hum ek dusre ko barson se jaante hain. Tumhari baaton mein itna apna-pan tha ki dil ne wahin faisla kar liya tha."
      }
    ],

    endingNote: "...aur us ek mulakat ne meri poori kitab ki kahani hi badal di. Happy Birthday V, my forever story! 📖💖"
  }
};
