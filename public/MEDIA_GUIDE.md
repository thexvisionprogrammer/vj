# Media Upload Guide for V's Birthday Website

Place all your photos, videos, and voice notes inside this `public` folder.

## Folder Structure Suggestion:
- `public/photos/` -> Put your photos here (e.g. `hero.jpg`, `v1.jpg`, `manali.jpg`)
- `public/audio/` -> Put your voice note and songs here (e.g. `my-voice.mp3`, `song.mp3`)
- `public/videos/` -> Put your video clips here (e.g. `blooper1.mp4`, `wish-video.mp4`)

## How to use them in code:
Open `src/data/birthdayData.ts` and set the path starting with `/`:

Examples:
```typescript
heroPhoto: "/photos/hero.jpg",
voiceNoteAudioUrl: "/audio/my-voice.mp3",
videoWishUrl: "/videos/wish-video.mp4",
```
