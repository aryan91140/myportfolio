import React, { useState, useRef, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize, Film, Sparkles, Sliders } from 'lucide-react';
import { sounds } from '../utils/audio';

export default function VideoModal({ video, isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('00:00');
  const [totalDuration, setTotalDuration] = useState('00:00');
  const videoRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    // Reset playback on open
    setIsPlaying(true);
    setProgress(0);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === ' ') {
        e.preventDefault();
        togglePlay();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen || !video) return null;

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const dur = videoRef.current.duration || 1;
    setProgress((current / dur) * 100);

    const formatTime = (t) => {
      const mins = Math.floor(t / 60);
      const secs = Math.floor(t % 60);
      return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    setCurrentTime(formatTime(current));
    setTotalDuration(formatTime(dur));
  };

  const handleSeek = (e) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * videoRef.current.duration;
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const isVertical = video.aspectRatio === '9:16';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-300">
      
      {/* Top Close Button & HUD */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
        <div className="flex items-center gap-3 px-3 py-1.5 rounded-full bg-black/60 border border-white/10 text-xs font-mono text-cyan-300 backdrop-blur-md">
          <Film className="w-3.5 h-3.5" />
          <span>CINEMA MASTER PLAYBACK</span>
          <span className="text-white/20">|</span>
          <span className="text-purple-300">{video.badge || 'PRORES'}</span>
        </div>

        <button
          onClick={() => {
            sounds.playClick();
            onClose();
          }}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Theater Container */}
      <div className={`w-full max-h-[90vh] flex flex-col items-center justify-center ${
        isVertical ? 'max-w-md' : 'max-w-5xl'
      }`}>
        
        {/* The Video Player Screen */}
        <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-black border border-white/15 shadow-[0_25px_70px_rgba(0,0,0,0.9),0_0_50px_rgba(168,85,247,0.25)] group">
          
          <video
            ref={videoRef}
            src={video.videoUrl}
            poster={video.posterUrl}
            autoPlay
            loop
            playsInline
            onTimeUpdate={handleTimeUpdate}
            onClick={togglePlay}
            className={`w-full object-cover cursor-pointer ${
              isVertical ? 'aspect-[9/16] max-h-[70vh]' : 'aspect-video'
            }`}
          />

          {/* Anamorphic Flare Top/Bottom Bars */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/90 to-transparent pointer-events-none" />

          {/* Custom Transport Controls Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-[#05060b] via-[#05060b]/90 to-transparent flex flex-col gap-2 z-10">
            
            {/* Scrubber Bar */}
            <div
              onClick={handleSeek}
              className="relative w-full h-2 bg-white/20 hover:h-3 rounded-full cursor-pointer transition-all overflow-hidden"
            >
              <div
                className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Bottom Controls Row */}
            <div className="flex items-center justify-between text-xs font-mono text-gray-300 pt-1">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 fill-current" />
                  ) : (
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  )}
                </button>

                <button
                  onClick={toggleMute}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4 text-red-400" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-cyan-400" />
                  )}
                </button>

                <span className="text-gray-300">
                  {currentTime} / {totalDuration}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden sm:inline text-cyan-400">
                  {video.fps || '24 FPS'} · {video.resolution || '4K'}
                </span>
                <button
                  onClick={handleFullscreen}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                >
                  <Maximize className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Story & Technical Details Footer */}
        <div className="w-full mt-4 p-4 sm:p-5 rounded-2xl bg-[#090b16]/90 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left">
          <div className="space-y-1">
            <h3 className="font-heading font-bold text-base sm:text-lg text-white">
              {video.title}
            </h3>
            <p className="text-xs text-gray-400 line-clamp-2 max-w-xl">
              {video.description}
            </p>
            {video.storyQuote && (
              <div className="text-[11px] font-mono text-cyan-300 italic pt-1">
                “{video.storyQuote}”
              </div>
            )}
          </div>

          <div className="shrink-0 flex flex-wrap gap-1.5 self-start sm:self-center">
            {video.tools?.map((t, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-purple-500/15 border border-purple-500/30 text-purple-200"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
