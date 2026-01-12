import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from "react";

interface AudioContextType {
  hasRequestedConsent: boolean;
  isPlaying: boolean;
  requestConsent: () => void;
  togglePlayback: () => void;
  acceptedConsent: () => void;
  revokeConsent: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
}

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [hasRequestedConsent, setHasRequestedConsent] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio element
    audioRef.current = new Audio("media/audio/English.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 1.0;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const acceptedConsent = () => {
    setHasRequestedConsent(true);
    if (audioRef.current && !isPlaying) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(console.error);
    }
  };

  const requestConsent = () => {
    setHasRequestedConsent(false);
    if (audioRef.current && !isPlaying) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(console.error);
    }
  };
  // TODO: fix function names to make them more intiuitive
  const revokeConsent = () => {
    setHasRequestedConsent(true);
    if (audioRef.current && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const togglePlayback = () => {
    if (!audioRef.current || !hasRequestedConsent) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(console.error);
    }
  };

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        hasRequestedConsent,
        requestConsent,
        togglePlayback,
        acceptedConsent,
        revokeConsent,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}
