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
  partnerName: "VijayLaxmi (Cutu) ❤️",
  fullName: "VijayLaxmi (Cutu) ❤️",
  birthdayDate: "September 7",
  tagline: "To the girl who turned my world into pure magic ✨",

  // Page 1: Hero
  heroPhoto: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1600&q=80",
  heroCenterPhoto: "/photos/photo24.jpeg",
  heroVideoUrl: "/videos/wish01.mp4",
  bgAudioUrl: "/audio/happy-birthday.mp3",
  bgSongTitle: "Happy Birthday Tune 🎉",

  // Page 2: Voice Note
  voiceNoteAudioUrl: "audio/bdaynote.mpeg",
  voiceNoteTitle: "A Message From My Heart ❤️",
  voiceNoteDuration: "1:45",
  voiceNoteMessage: "Agar tum soch rahi ho ki maine ye sab kyun kiya—tumhare liye khana banana, drives ki planning, apna favorite gaana lagana, aur ye itna lamba sa note likhna... toh sach bataun? Isme mera ek chhota sa swarth (selfishness) chhipa hai.Main bohot laalchi hoon jab baat tumhari aati hai. Mujhe bas tumhare chehre ki wo sukoon wali smile dekhni thi jab tum ye sab dekhogi. Mujhe tumhari aankhon mein wo chamak dekhni thi jo mujhe batati hai ki main tumhare liye kya maayne rakhta hoon. Tumne meri aam si zindagi mein itna sukoon bhar diya hai ki ab mera dil karta hai main apni saari umar sirf is koshish mein nikaal doon ki main tumhe kaise aur zyada khush rakh sakun. Ye sab jo maine kiya, ye bas ek zariya tha tumhe ye ehsaas dilane ka ki tum us pyaar ko deserve karti ho jisme koi tumhe is tarah chahe, jaise tum is duniya ki sabse keemti aur aakhri cheez ho",

  // Page 3: All About VijayLaxmi (Cutu)
  aboutV: {
    title: "All About My Favorite Person",
    description: "Your smile brightens the darkest days, your grace leaves me speechless, and your kindness inspires me endlessly.",
    photos: [
      {
        url: "/photos/photo9.jpeg",
        caption: "That beaming smile of yours 😊",
        tag: "Cutest Smile"
      },
      {
        url: "/photos/photo8.jpeg",
        caption: "Effortlessly elegant as always ✨",
        tag: "Best Outfit"
      },
      {
        url: "/photos/photo6.jpeg",
        caption: "Candid laughters we treasure 💖",
        tag: "Unfiltered Joy"
      },
      {
        url: "/photos/photo7.jpeg",
        caption: "Your glowing positivity 🌟",
        tag: "Pure Soul"
      }
    ],
    knowYou: {
      title: "Mujhe JAnna hai tumhe (i want to know you)",
      subtitle: "Har choti baat tumhare baare mein mere dil ke kareeb hai ✨",
      audioUrl: "/audio/knowyou.mpeg",
      audioTitle: "Audio Note for Cutu ❤️",
      audioDuration: "2:15",
      photos: [
        {
          url: "/photos/photo2.jpeg",
          caption: "Your beautiful aesthetic vibe ✨",
          tag: "Fav Look"
        },
        {
          url: "/photos/photo3.jpeg",
          caption: "That charming smile that steals hearts 😊",
          tag: "Sweet Smile"
        },
        {
          url: "/photos/photo4.jpeg",
          caption: "Unfiltered joy and pure moments 💖",
          tag: "Pure Joy"
        }
      ]
    },
    compliments: [
      { icon: "Sparkles", text: "The way your eyes light up when you laugh" },
      { icon: "Heart", text: "Your unconditional empathy for everyone around you" },
      { icon: "Sun", text: "How you make any simple place feel like home" },
      { icon: "Crown", text: "Your unmatched aesthetic sense and elegance" }
    ]
  },

  // Page 4: Kainchi Dham Trip
  mountainDiaries: {
    title: "Our Purest Decision to Kaichi Dham ✨",
    subtitle: "A divine trip filled with peace, blessings & timeless memories",
    heroImage: "/photos/photo6.jpeg",
    videoLoopUrl: "https://assets.mixkit.co/videos/preview/mixkit-snowy-mountain-landscape-3406-large.mp4",
    altitudeText: "NEEM KAROLI BABA ASHRAM, NAINITAL 🕉️",
    audioUrl: "/audio/Kaichidham.mpeg",
    audioTitle: "Kaichi Dham Audio Note & Divine Memories 🕉️",
    audioDuration: "2:45",
    memories: [
      {
        title: "Darshan at Neem Karoli Baba Ashram 🙏",
        location: "Kainchi Dham, Uttarakhand",
        date: "Divine Yatra",
        imageUrl: "/photos/photo13.jpeg",
        note: "Standing together in front of Maharaj-ji, taking blessings for our togetherness. That serene peace on your face is etched in my heart forever."
      },
      {
        title: "Peaceful Moments & Valley Breezes 🌸",
        location: "Golu devi temple",
        date: "Spiritual Journey",
        imageUrl: "/photos/photo9.jpeg",
        note: "Holding your hand in the tranquil morning breeze of Kainchi Dham, knowing our bond is blessed with love, pure energy, and grace."
      },
      {
        title: "Evening Aarti & Divine Peace 🪔",
        location: "Siddhart Ashram",
        date: "Evening Aarti",
        imageUrl: "/photos/photo11.jpeg",
        note: "The sound of temple bells and evening aarti surrounded us in pure bliss as we prayed together for our lifelong happiness."
      },
      {
        title: "Our Written Prayer to god🌿",
        location: "Goludevi Temple",
        date: "Nature Walk",
        imageUrl: "/photos/photo10.jpeg",
        note: "Wandering through the green mountains after visiting Kainchi Dham, holding your hand with a calm and deeply grateful heart."
      }
    ]
  },

  // Page 5: Your Eyes
  activaRides: {
    title: "Your Eyes - The Galaxy I Get Lost In 👀✨",
    subtitle: "In your eyes, I find a universe full of peace, magic, and endless love. One glance from you, and my heart forgets how to beat...",
    bgPhoto: "/photos/photo8.jpeg",
    photos: [
      {
        url: "/photos/photo16.jpeg",
        caption: "That gentle, enchanting look in your eyes that melts my heart every single time 👀💖"
      },
      {
        url: "/videos/video14.mp4",
        caption: "How your eyes sparkle when you laugh—pure magic and happiness ✨😊"
      }
    ],
    note: "Tumhari aankhon mein ek aisi chamak aur sukoon hai jo mujhe har baar tumse dobara pyaar karne par majboor kar deti hai. Jab tum mujhe dekhti ho, lagta hai poori duniya ruk gayi hai aur sirf hum dono bache hain. Your eyes are my favorite place in this entire universe, VijayLaxmi (Cutu) ❤️."
  },

  // Page 6: Driving Dates & Playlists
  drivingDates: {
    title: "Car Dates & Playlist 🚗🎶",
    subtitle: "10 Songs that played while we chased horizons together",
    photos: [
      "/photos/photo20.jpeg",
      "/videos/video3.mp4",
      "/videos/video4.mp4",
      "/videos/video6.mp4",
      "/videos/video5.mp4"
    ],
    playlist: [
      { id: 1, title: "Dooron Dooron", artist: "Paresh / Smooth Vibes", albumArt: "/photos/photo12.jpeg", duration: "3:42", audioUrl: "/audio/dooron.mpeg" },
      { id: 2, title: "Bairan", artist: "Banjare", albumArt: "/photos/photo27.jpeg", duration: "5:23", audioUrl: "/audio/bairan.mpeg" },
      { id: 3, title: "good luck charm", artist: "Ali Sethi, Shae Gill", albumArt: "/photos/photo10.jpeg", duration: "3:44", audioUrl: "/audio/goodluckcharm.mpeg" }
      //{ id: 4, title: "Kesariya", artist: "Arijit Singh", albumArt: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=300&q=80", duration: "4:28" },
      //{ id: 5, title: "harriya", artist: "One Direction", albumArt: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=300&q=80", duration: "3:46" },
      // { id: 6, title: "Apna Bana Le", artist: "Arijit Singh", albumArt: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=300&q=80", duration: "4:21" },
      // { id: 7, title: "Perfect", artist: "Ed Sheeran", albumArt: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=300&q=80", duration: "4:23" },
      //{ id: 8, title: "Ranjha", artist: "B Praak, Jasleen Royal", albumArt: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=300&q=80", duration: "3:48" },
      //{ id: 9, title: "Choo Lo", artist: "The Local Train", albumArt: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=300&q=80", duration: "3:53" },
      //{ id: 10, title: "Softly", artist: "Karan Aujla", albumArt: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=300&q=80", duration: "2:36" }
    ]
  },

  // Page 7: Food & Flavors
  foodFlavors: {
    title: "Food & Flavors 🍕🧁",
    subtitle: "The way to the heart is through great food!",
    photos: [
      {
        url: "/photos/photo28.jpeg",
        dish: "Home Cooked noodles",
        note: "The time we tried making handmade noodles and burnt the garlic, but it still tasted divine!"
      },
      {
        url: "/photos/photo22.jpeg",
        dish: "ice cream Cravings",
        note: "Extra cream, zero regrets, and fighting for the last slice!"
      },
      {
        url: "/photos/photo23.jpeg",
        dish: "maggie and you ",
        note: "Your sweet tooth is unmatched, and watching you eat maggie brings pure joy."
      }
    ],
    note: "Cooking for you or exploring new food spots together always turns into our happiest ritual. You make every meal feel like a royal feast!"
  },

  // Page 8: Blooper Photos
  bloopers: {
    title: "Blooper Photos 📸🍿",
    subtitle: "Relationship perfection isn't in posed photos, it's in our goofy, hilarious, unfiltered moments!",
    photos: [
      {
        id: 1,
        url: "/photos/photo20.jpeg",
        caption: "When you tried to take a cute candid but got caught making a funny face 😂",
        location: "Cutest Blooper"
      },
      {
        id: 2,
        url: "/photos/photo16.jpeg",
        caption: "Unfiltered smiles and crazy goofy moments that make my day 🤪",
        location: "Goofy Smiles"
      },
      {
        id: 3,
        url: "/photos/photos15.jpeg",
        caption: "Attempting a perfect aesthetic pose and failing miserably 💃🕺",
        location: "Pure Giggles"
      },
      {
        id: 4,
        url: "/photos/photo17.jpeg",
        caption: "When you steal my oversized hoodie and look 100x cuter than me 💖",
        location: "Hoodie Stealer"
      },
      {
        id: 5,
        url: "/photos/photo18.jpeg",
        caption: "Uncontrollable giggles during an important serious moment 📸✨",
        location: "Unstoppable Laughs"
      },
      {
        id: 6,
        url: "/photos/photo19.jpeg",
        caption: "Pure unfiltered happiness — my absolute favorite blooper memory ❤️",
        location: "Forever Memory"
      }
    ]
  },

  // Page 9: 10 Reasons Why I Love You
  reasons: [
    { id: 1, title: "1. Your Electric Smile", iconName: "Smile", description: "The moment you smile, every worry in my mind melts away instantly. It's my absolute favorite sight in the universe." },
    { id: 2, title: "2. Your Caring Soul", iconName: "Heart", description: "You notice the little things about people and care so deeply. Your warmth makes the world a kinder place." },
    { id: 3, title: "3. Spiritual & Adventure Partner", iconName: "Compass", description: "From taking blessings together at Kainchi Dham to riding the Kali Activa in rain, you are down for any beautiful journey with me." },
    { id: 4, title: "4. The Way You Laugh", iconName: "Sparkles", description: "Your genuine, uninhibited belly laugh when I say something silly is the sweetest sound ever recorded." },
    { id: 5, title: "5. How Stylish You Are", iconName: "Crown", description: "Whether in ethnic wear, hoodies, or party outfits, you turn heads everywhere with your effortless grace." },
    { id: 6, title: "6. Our Late Night Talks", iconName: "Moon", description: "Talking to you at 2 AM about our dreams, fears, and random nonsense feels like talking to my soulmate." },
    { id: 7, title: "7. You Believe in Me", iconName: "Star", description: "Even when I doubt myself, your strong faith in me gives me the courage to conquer anything." },
    { id: 8, title: "8. Foodie Companion", iconName: "Utensils", description: "Sharing midnight ice creams, testing weird recipes, and food dates with you are pure happiness." },
    { id: 9, title: "9. Endless Kindness", iconName: "Sun", description: "The respect and tenderness with which you treat animals, strangers, and family shows how beautiful your soul is." },
    { id: 10, title: "10. You Are Simply VijayLaxmi (Cutu) ❤️", iconName: "Award", description: "Because out of 8 billion people on Earth, there is only ONE of you, Cutu, and you complete my life in every single way." }
  ],

  // Page 10: Secret Letters
  secretLetters: [
    {
      id: 1,
      title: "Dear VijayLaxmi (Cutu) ❤️: Tum Meri Zindagi Ka Sabse Sundar Tohfa Ho",
      date: "September 7, 2026",
      language: "Hindi" as const,
      content: `Pyaari VijayLaxmi (Cutu) ❤️,\n\nAaj tumhare is khaas din par main bas itna kehna chahta hoon ki tum meri zindagi ka sabse khoobsurat hissa ho. Jab se tum aayi ho, har mausam romantic aur har din ek naye jashn jaisa lagta hai.\n\ncar and bike rides se lekar Kainchi Dham ki khoobsurat yatra tak, har rasta tumhare saath ek haseen safar ban gaya. Tumhari muskurahat meri sabse badi taakat hai. Happy Birthday, my Cutu! ❤️`
    },
    {
      id: 2,
      title: "To My Forever Partner In Crime",
      date: "Birthday Special Note",
      language: "English" as const,
      content: `My Dearest VijayLaxmi (Cutu) ❤️,\n\nHappy Birthday! Thank you for being my anchor, my favorite photographer, my car date VJ, and my best friend. Looking back at all our memories—our food experiments, driving trips, and endless laughter—I realize how blessed I am to walk through life with you.\n\nMay this new year bring you infinite joy, success, and endless laughter. I promise to hold your hand through every high and low. Yours forever!`
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
    finalMessage: "Happy Birthday VijayLaxmi (Cutu) ❤️! May all your secret wishes come true today and forever! ❤️🎉"
  },

  // Page 13: Meri Kitab: Ek Mulakat
  meriKitab: {
    bgMusicUrl: "/audio/humarimulakat.mpeg",
    firstPhotoUrl: "/photos/photo2.jpeg",
    firstMeetingLocation: "Humari Mulakat Maa Kalaka Ji ke aashirwad se suru hui ❤️! ",

    intro: "Kuch kahaniyan aisi hoti hain jo waqt ke sath purani nahi hoti, bas unke panno ki khushbu aur gehri ho jati hai. Meri zindagi ki kitaab ka sabse khubsurat panna wahi tha, jab meri tumse wo pehli mulakat hui thi... Us din, us ek pal mein, mujhe ye ehsaas tak nahi tha ki main apne aane wale sabse haseen kal se mil raha hoon. Tumse milne ke baad mujhe samajh aaya ki meri ye kahani tumhare bina kitni adhoori thi. Tumhare aate hi, zindagi ke in khali panno par jaise pyaar ki siyahi se koi jaadu sa likh gaya ho. Tumhari wo pyari si muskaan, tumhari baatein, aur tumhara mere kareeb hona—ye sab ab meri aadat nahi, meri jeene ki wajah ban chuke hain.",

    storySections: [
      {
        heading: "1. The Movie Date and Begining of our Story.",
        text: "Humari First date or movie so Vj mai bhot exited tha humari first date Ko Lekr its 1 Aug and its Girlfriend's day , mai bhot acche se janta tha or isi din mne ye date bhi chuni, jab mai tumhe pickup krne aaya vj to mai bhot nervous tha and jab tum samne aai to ek dum pari lgri thi beautiful and slaying up photo mai dekho, i know ki movie tumhe pasand bhi nhi aai but tumhara sath rehna hi mere liye impt. tha , And During Movie when i ask to hold your hand and you allowed it wo meri life ka bhot impt moment tha, uske bad we had your fav MOMO and there i gave you my First Gift to you That Floral Neckles or jab mne use tumhe apne hath se pehnaya na mai aasman p tha VJ or tumhe dil de betha.",
        audioUrl: "/audio/note1.mpeg", // Chapter 1 audio file path (e.g. "/audio/movie-date-audio.mp3")
        imageUrls: [
          "/photos/movie.jpeg"
        ]
      },
      {
        heading: "Ma Kalka Ji ke Darshan",
        text: "Vj This was our second trip and we planed for Kalkaji you know right on 15 Th Aug, i asked you to just a long drive and on morning you surprise me by saying 'Rahul hum kalka ji ja rahe h' and ye bat mere bhi man mai thi cutu, ki mai tumse bolu ki kalkaji mujhe bhi le chlo , or jab tum ready hoke aai to by god You are Looking Gorgeous or upr se mere gift kie hue jhumke and chudiya pehni thi mera to dil hi aagya tha, phir jab hum udhr pahuche and tumhare sath us road pe chalna line mai lagna 3-4 ghante m darshan krna best memory for me VJ, you know best past was jab wo ladki tumhe dekh kr tumhari nazar utarti h , its awsome pta h cutu m tumhari hair fragrence ka fan usi din hogya i litrally enjoy that fragrance for straignt 4 hours and u know mne tumhe 2-3 bar head p kis bhi kia, baki mandir m tumhe bheed se protect krna mere liye memorable tha, sabse imp bat vj, humne jo shivji p jal chadhaya and nandi ko wish bolo it gave me goosebumps, ye mera best Experience tha kalkaji ka, In future i hope hum harbar ase hi jaye. or Cutu best part was jab mne gadi roki or Tumhare balo m flowers Lagaye and tumhe ek flower ki ring pehnai wo mere liye best moment tha and first time i Kiss you ",
        audioUrl: "/audio/note1.mpeg", // Chapter 2 audio file path
        imageUrls: [
          "/photos/photo2.jpeg",
          "/photos/photo3.jpeg",
          "/videos/video1.mp4"
        ]
      },
      {
        heading: "Humari Random Rides Date and friend intro....",
        text: "My Dear Cutu humari ye random date itni thrilling thi ki ye mere mind mai abhi bhi refresh h , humne itne fun and msti ki thi, tu aaj bhi jase first time date krne ja rhi thi same rhi , or tu kitni pretty lag rhi thi , and you know ye date humne meri friends ki wajeh se ki, She wanted to meet you and know you personally and voila wo dono impress hogy tumse milke,when they know tumhara passion dream and goals they got impressed and find you mature, and vj fir jo humne bandaro k liye kele liye or unhe khilaye mai kehta hu one of the weierdest dating thing i have ever done but it was cute. and vj sabse important mne zindagi m pehli bar handmade roses banaye tumhare liye and that rose pin is my fav. thing i have ever made or iska idea bhi simple tha ki i want to gift you something jo kabhi kharab na ho. Fir humara jab deep discussion hua life ko lekr mujhe bhot accha lga , ki tum bhi wahi sochti ho life ko lekr jo m sochta hu. mai humesha tumhe kuch accha khilane ki kosish krta hu but us din sacchi chole kulche itne acche nhi the but promise ki tumhe bhukha nhi jane dunga, and this is like a commitment vj, i promise ,tumhe apne hast se pehli bite khilana is my love language beside this ye phool tumhare balo m lagane meri bhot si m se ek choti si khawish h. Ek Mn keta hai Subha uthu garden se sunder phool todu or ghr aake tumhare balo p lagau , uff ye mere menhenge - mehenge khwab. ",
        audioUrl: "", // Chapter 3 audio file path
        imageUrls: [
          "/photos/photo4.jpeg",
          "/videos/video6.mp4",
          "/videos/video4.mp4",
          "/videos/video3.mp4",
          "/videos/video2.mp4",
          "/videos/video5.mp4",
          "/photos/photo5.jpeg"
        ]
      },
      {
        heading: "Humari Train Trip",
        text: "Wo pehli hassi aur wo cute moments jab hum dono ek dusre ko dekh kar bina kisi waja ke muskura rahe the. Kuch rishte shabdon ke mohtaj nahi hote, bas ehsaas hi kafi hota hai.",
        audioUrl: "", // Chapter 4 audio file path
        imageUrls: [
          "/photos/photo14.jpeg",
          "/photos/photos15.jpeg",
          "/videos/video7.mp4"
        ]
      },
      {
        heading: "Humari First Candle light Dinner/And that Night walk",
        text: "Chai ki chuskiyon ke saath baatein deep hoti gayi. Tumhara life ko dekhne ka nazariya aur tumhari baaton ki mehak ne dil ko poori tarah jeet liya tha.",
        audioUrl: "", // Chapter 5 audio file path
        imageUrls: [
          "/videos/video11.mp4",
          "/videos/video13.mp4",

        ]
      },
      {
        heading: "Baba Neem karoli Darshan/ Golu Devta Temple wishes ",
        text: "Standing together in front of Maharaj-ji, taking blessings for our togetherness. That serene peace on your face is etched in my heart forever.",
        audioUrl: "", // Chapter 6 audio file path
        imageUrls: [
          "/photos/photo10.jpeg",
          "/photos/photo12.jpeg",
          "/photos/photo13.jpeg"
        ]
      },
      {
        heading: "My Fav. Moments with You - the rain and Romantic buss ride.",
        text: "Ek doosre ke sapne, khwahishein aur favorite cheezon ki baatein. Pata chala ki hamari kitni saari pasand aur baatein aapas mein milti hain.",
        audioUrl: "", // Chapter 7 audio file path
        imageUrls: [
          "/videos/video15.mp4"
        ]
      },
      {
        heading: "My Gurdian Angel",
        text: "Alvida kehte waqt dil keh raha tha ki ye bas ek nayi shuruat hai. Wo pehli mulakat ab har din ek nayi yaad ban kar mehakti hai.",
        audioUrl: "", // Chapter 8 audio file path
        imageUrls: [
          "/videos/video12.mp4"

        ]
      },
      {
        heading: "Khatro ke Khiladi/ Adventure Rides.",
        text: "Ghar laut-te waqt bhi bas tumhara hi khayal tha. Dimaag mein tumhari baatein aur dil mein ek anokhi khushi gunj rahi thi.",
        audioUrl: "", // Chapter 9 audio file path
        imageUrls: [
          "/videos/video9.mp4",
          "/videos/video10.mp4"
        ]
      },
      {
        heading: "Future Plans.... with only and only you Cutu ❤️",
        text: "I don’t just hold your hand to keep you close; I hold it because in your touch, I have found my favorite place in the entire world. I could hold your hand forever and it still wouldn't feel like enough time.,Dekho cutu , no one knows ki aage life mai kya hoga and we are expecting good journey ahed and i also want that journey shuru se last tk hmara sath rhe or hum hmesa ek dusre ka sath de apko khush rakhna h mujhe , i will be their for you in your success and in your failures too , i will be their to console you and to celebrate your wins , i will be their to support you in your dreams and ambitions , i will be their to complete you and to make you happy , i will be their for you forever and always, one more thing tum jb soti ho na vj bilkul ek bacchi ki treh lgti ho, itna pyar krne ka mn krta h ki bs ,i litrally want ase hi hr trip m tum mere sarth ho or hum duniya ka har kona enjoy kre sath.",
        audioUrl: "", // Chapter 10 audio file path
        imageUrls: [
          "/photos/photo17.jpeg",
          "/photos/photo19.jpeg",
          "/photos/photo18.jpeg"
        ]
      }
    ],

    endingNote: "...Log kehte hain ki har insaan ki zindagi ek kitaab hoti hai. Agar meri zindagi bhi ek kitaab hai, toh sach kahun? Tumhare aane se pehle uske panne bilkul khali the. Tumne aakar unme apne pyaar ke aise rang bhare hain ki ab wo kisi jaadu jaisi lagti hai. Aur ab... is khoobsurat dastan ke har ek panne par, har ek lafz mein, siyahi se nahi balki meri har dhadkan se bas tumhara hi naam likha hai. Tum sirf meri kahani ka ek hissa nahi ho, tum hi meri poori kahani ho, jise main har roz naye sire se jeena chahta hoon. Happy Birthday VijayLaxmi (meri pyari Cutu) ❤️, my first, my last, and my forever story! 📖💖"
  }
};
