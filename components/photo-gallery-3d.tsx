'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PhotoItem {
  id: number;
  title: string;
  color: string;
  image: string;
}

export function PhotoGallery3D() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const slideIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const photos: PhotoItem[] = [
    { id: 1, title: 'Moment 1', color: 'from-pink-400 to-red-400', image: '/photo/moment1.jpg' },
    { id: 2, title: 'Moment 2', color: 'from-red-400 to-purple-400', image: '/photo/moment2.jpg' },
    { id: 3, title: 'Moment 3', color: 'from-purple-400 to-pink-400', image: '/photo/moment3.jpg' },
    { id: 4, title: 'Moment 4', color: 'from-pink-300 to-rose-300', image: '/photo/moment4.jpg' },
    { id: 5, title: 'Moment 5', color: 'from-red-300 to-pink-300', image: '/photo/moment5.jpg' },
    { id: 6, title: 'Moment 6', color: 'from-purple-300 to-rose-300', image: '/photo/moment6.jpg' },
    { id: 7, title: 'Moment 7', color: 'from-pink-500 to-red-500', image: '/photo/moment7.jpg' },
    { id: 8, title: 'Moment 8', color: 'from-rose-400 to-purple-400', image: '/photo/moment8.jpg' },
    { id: 9, title: 'Moment 9', color: 'from-red-500 to-purple-500', image: '/photo/moment9.jpg' },
    { id: 10, title: 'Moment 10', color: 'from-pink-400 to-rose-400', image: '/photo/moment10.jpg' },
    { id: 11, title: 'Moment 11', color: 'from-purple-500 to-pink-500', image: '/photo/moment11.jpg' },
    { id: 12, title: 'Moment 12', color: 'from-red-400 to-pink-500', image: '/photo/moment12.jpg' },
    { id: 13, title: 'Moment 13', color: 'from-rose-300 to-purple-300', image: '/photo/moment13.jpg' },
    { id: 14, title: 'Moment 14', color: 'from-pink-500 to-purple-400', image: '/photo/moment14.jpg' },
  ];

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 3500);

    slideIntervalRef.current = interval;
    return () => clearInterval(interval);
  }, [isAutoPlay, photos.length]);

  const handlePlayMusic = () => {
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

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
    setIsAutoPlay(false);
  };

  const getSlideClass = (index: number) => {
    const diff = (index - currentIndex + photos.length) % photos.length;

    if (diff === 0) {
      return 'scale-100 opacity-100 z-30';
    } else if (diff === 1 || diff === photos.length - 1) {
      return diff === 1
        ? 'scale-75 opacity-50 translate-x-32 z-20'
        : 'scale-75 opacity-50 -translate-x-32 z-20';
    } else {
      return 'scale-50 opacity-0 z-10';
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src="https://assets.mixkit.co/active_storage/sfx/2822/2822-preview.mp3"
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => {
          if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
          }
        }}
      />

      {/* Music Player */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-4 border border-border flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Music className="w-5 h-5 text-primary" />
          <div>
            <p className="font-medium text-sm">Background Music</p>
            <p className="text-xs text-muted-foreground">{isPlaying ? 'Now playing' : 'Click to play'}</p>
          </div>
        </div>
        <Button
          onClick={handlePlayMusic}
          className={`${
            isPlaying
              ? 'bg-primary text-primary-foreground hover:bg-primary/90'
              : 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
          }`}
        >
          {isPlaying ? (
            <>
              <Pause className="w-4 h-4 mr-2" />
              Pause
            </>
          ) : (
            <>
              <Play className="w-4 h-4 mr-2" />
              Play
            </>
          )}
        </Button>
      </div>

      {/* 3D Carousel */}
      <div className="relative w-full h-80 flex items-center justify-center perspective">
        <div className="relative w-full h-full flex items-center justify-center">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => goToSlide(index)}
              className={`absolute w-72 h-64 cursor-pointer transition-all duration-500 ease-out ${getSlideClass(
                index
              )}`}
            >
              <div
                className={`w-full h-full rounded-2xl shadow-2xl bg-gradient-to-br ${photo.color} flex items-center justify-center overflow-hidden group hover:shadow-primary/50 hover:shadow-3xl transition-shadow duration-300 relative`}
                style={{
                  backgroundImage: `url(${photo.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Fallback gradient jika image tidak load */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/20" />
                <div className="relative text-center space-y-4 z-10">
                  <div className="text-5xl">❤️</div>
                  <h3 className="text-white font-bold text-lg drop-shadow-lg">{photo.title}</h3>
                  <p className="text-white/80 text-sm drop-shadow-lg">Click to view</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="absolute left-4 z-40 bg-primary/20 hover:bg-primary/40 text-primary-foreground rounded-full"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="absolute right-4 z-40 bg-primary/20 hover:bg-primary/40 text-primary-foreground rounded-full"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex justify-center gap-2 flex-wrap">
        {photos.map((photo, index) => (
          <button
            key={photo.id}
            onClick={() => goToSlide(index)}
            className={`w-12 h-12 rounded-full transition-all duration-300 flex items-center justify-center font-bold text-sm ${
              index === currentIndex
                ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground scale-110 shadow-lg'
                : 'bg-muted text-foreground hover:bg-primary/30'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Info Section */}
      <div className="bg-card rounded-xl p-4 border border-border">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm font-medium text-foreground">
              Photo <span className="font-bold text-primary">{currentIndex + 1}</span> of{' '}
              <span className="font-bold text-primary">{photos.length}</span>
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              {isAutoPlay ? `Auto-playing${isPlaying ? ' with music' : ''}` : 'Manual mode'}
            </p>
          </div>
          <Button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className={`w-full sm:w-auto ${
              isAutoPlay
                ? 'bg-gradient-to-r from-primary to-secondary'
                : 'bg-muted text-foreground'
            }`}
          >
            {isAutoPlay ? 'Auto-playing' : 'Resume'}
          </Button>
        </div>
      </div>
    </div>
  );
}
