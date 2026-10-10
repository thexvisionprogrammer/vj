/**
 * iOS WebKit restricts audio playback until a user gesture unlocks the audio engine.
 * This helper listens for user interaction (tap/click/touch) and unlocks audio playback on iOS devices.
 */
let isUnlocked = false;
let globalAudioCtx: AudioContext | null = null;

export const getSharedAudioContext = (): AudioContext | null => {
  if (typeof window === 'undefined') return null;
  if (!globalAudioCtx) {
    const windowWithContext = window as unknown as {
      AudioContext?: typeof AudioContext;
      webkitAudioContext?: typeof AudioContext;
    };
    const AudioContextClass = windowWithContext.AudioContext || windowWithContext.webkitAudioContext;
    if (AudioContextClass) {
      try {
        globalAudioCtx = new AudioContextClass();
      } catch (e) {
        console.warn("Failed to create AudioContext:", e);
      }
    }
  }
  return globalAudioCtx;
};

export const unlockIOSAudio = () => {
  if (typeof window === 'undefined') return;

  const ctx = getSharedAudioContext();
  if (ctx && ctx.state === 'suspended') {
    ctx.resume().catch(() => {});
  }

  if (isUnlocked) return;

  const unlock = () => {
    // 1. Resume Web Audio AudioContext
    const activeCtx = getSharedAudioContext();
    if (activeCtx) {
      if (activeCtx.state === 'suspended') {
        activeCtx.resume().catch(() => {});
      }
      try {
        const buffer = activeCtx.createBuffer(1, 1, 22050);
        const source = activeCtx.createBufferSource();
        source.buffer = buffer;
        source.connect(activeCtx.destination);
        source.start(0);
      } catch (e) {
        // Ignore
      }
    }

    // 2. Play silent dummy HTML5 audio to unlock media playback engine
    try {
      const dummyAudio = new Audio();
      dummyAudio.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';
      dummyAudio.setAttribute('playsinline', 'true');
      dummyAudio.setAttribute('webkit-playsinline', 'true');
      const p = dummyAudio.play();
      if (p !== undefined) {
        p.then(() => {
          dummyAudio.pause();
          dummyAudio.remove();
        }).catch(() => {});
      }
    } catch (e) {
      // Ignore
    }

    isUnlocked = true;
  };

  // Run unlock immediately if called within a user gesture handler
  unlock();

  // Also bind passive listeners to catch the very first tap
  window.addEventListener('touchstart', unlock, { capture: true, once: true });
  window.addEventListener('touchend', unlock, { capture: true, once: true });
  window.addEventListener('click', unlock, { capture: true, once: true });
  window.addEventListener('pointerdown', unlock, { capture: true, once: true });
};

/**
 * Safe play helper for HTML5 Audio/Video elements on iOS & desktop.
 * Handles autoplay rejections gracefully and retries automatically on the next user interaction.
 */
export const safePlayMedia = (media: HTMLMediaElement): Promise<void> => {
  unlockIOSAudio();
  if (!media) return Promise.reject(new Error("Media element is null"));

  const playPromise = media.play();
  if (playPromise !== undefined) {
    return playPromise.catch((err) => {
      console.warn("Media playback deferred for user interaction on iOS:", err);
      return new Promise<void>((resolve) => {
        const handleInteraction = () => {
          unlockIOSAudio();
          media.play()
            .then(() => resolve())
            .catch(() => resolve());
          window.removeEventListener('touchstart', handleInteraction, true);
          window.removeEventListener('touchend', handleInteraction, true);
          window.removeEventListener('click', handleInteraction, true);
        };
        window.addEventListener('touchstart', handleInteraction, true);
        window.addEventListener('touchend', handleInteraction, true);
        window.addEventListener('click', handleInteraction, true);
      });
    });
  }
  return Promise.resolve();
};

// Auto-initialize unlock listeners when script is loaded on client
if (typeof window !== 'undefined') {
  unlockIOSAudio();
}

