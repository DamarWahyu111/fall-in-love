'use client';

import { createContext, useContext, useRef, useState, ReactNode } from 'react';

interface AudioContextType {
  audioRef: React.RefObject<HTMLAudioElement | null>;
  isPlaying: boolean;
  togglePlay: () => void;
  play: () => void;
  pause: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().catch(() => {
          setIsPlaying(false);
        });
        setIsPlaying(true);
      }
    }
  };

  const play = () => {
    if (audioRef.current && !isPlaying) {
      audioRef.current.play().catch(() => {
        setIsPlaying(false);
      });
      setIsPlaying(true);
    }
  };

  const pause = () => {
    if (audioRef.current && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <AudioContext.Provider value={{ audioRef, isPlaying, togglePlay, play, pause }}>
      {/* Hidden Audio Element - Tetap ada di DOM selamanya */}
      <audio
        ref={audioRef}
        src="/audio/mylove.mp3"
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within AudioProvider');
  }
  return context;
}
