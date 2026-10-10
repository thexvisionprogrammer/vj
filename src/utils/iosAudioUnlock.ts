/**
 * iOS WebKit restricts audio playback until a user gesture unlocks the audio engine.
 * This helper listens for user interaction (tap/click/touch) and unlocks audio playback on iOS devices.
 */
let isUnlocked = false;

export const unlockIOSAudio = () => {
  if (isUnlocked || typeof window === 'undefined') return;

  const unlock = () => {
    // 1. Resume Web Audio AudioContext if available
    const windowWithContext = window as unknown as {
      AudioContext?: typeof AudioContext;
      webkitAudioContext?: typeof AudioContext;
    };
    const AudioContextClass = windowWithContext.AudioContext || windowWithContext.webkitAudioContext;
    if (AudioContextClass) {
      try {
        const ctx = new AudioContextClass();
        if (ctx.state === 'suspended') {
          ctx.resume();
        }
        const buffer = ctx.createBuffer(1, 1, 22050);
        const source = ctx.createBufferSource();
        source.buffer = buffer;
        source.connect(ctx.destination);
        source.start(0);
      } catch (e) {
        console.warn("iOS AudioContext unlock warning:", e);
      }
    }

    // 2. Play and pause dummy silent HTML5 Audio element
    try {
      const dummyAudio = new Audio();
      dummyAudio.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';
      dummyAudio.setAttribute('playsinline', 'true');
      dummyAudio.setAttribute('webkit-playsinline', 'true');
      dummyAudio.play().then(() => {
        dummyAudio.pause();
        dummyAudio.remove();
      }).catch(() => {});
    } catch (e) {
      // Ignore
    }

    isUnlocked = true;

    // Remove listeners once unlocked
    window.removeEventListener('touchstart', unlock, true);
    window.removeEventListener('touchend', unlock, true);
    window.removeEventListener('click', unlock, true);
    window.removeEventListener('pointerdown', unlock, true);
  };

  window.addEventListener('touchstart', unlock, true);
  window.addEventListener('touchend', unlock, true);
  window.addEventListener('click', unlock, true);
  window.addEventListener('pointerdown', unlock, true);
};
