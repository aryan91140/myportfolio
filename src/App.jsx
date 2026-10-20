import React, { useState } from 'react';
import ThreeCanvas from './components/ThreeCanvas';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoGallery, { videoProjects } from './components/VideoGallery';
import ColorGradeCompare from './components/ColorGradeCompare';
import TimelineWorkflow from './components/TimelineWorkflow';
import AboutAryan from './components/AboutAryan';
import ToolsShowcase from './components/ToolsShowcase';
import ContactSection from './components/ContactSection';
import VideoModal from './components/VideoModal';

export default function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Opens 2026 Director Showreel
  const handleOpenShowreel = () => {
    // Default showreel is the Nordic Odyssey / Cinematic Master
    const showreel = videoProjects[0];
    setSelectedVideo({
      ...showreel,
      title: 'Aryan — 2026 Post-Production Showreel',
      description: 'A master compilation of cinematic travel narratives, high-speed visual effects, precision sound design, and viral short-form pacing.',
      badge: '2026 DIRECTOR SHOWREEL',
    });
    setIsModalOpen(true);
  };

  const handleSelectVideo = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#030306] text-[#e2e8f0] selection:bg-purple-600 selection:text-white">
      {/* 1. Subtle 35mm Film Grain Overlay */}
      <div className="film-grain" />

      {/* 2. Interactive 3D WebGL Background (Three.js with camera scroll parallax) */}
      <ThreeCanvas />

      {/* 3. Futuristic Camera Reticle Custom Cursor */}
      <CustomCursor />

      {/* 4. Cinematic Glassmorphic Navbar with Live Timecode & Audio Synthesizer */}
      <Navbar />

      {/* 5. Main Content Flow */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero onOpenReel={handleOpenShowreel} />

        {/* Video Showcase (Cinematics first, then Visual Edit, Short-Form, etc.) */}
        <VideoGallery onSelectVideo={handleSelectVideo} />

        {/* Interactive Before & After Color Grading Comparison Slider */}
        <ColorGradeCompare />

        {/* Interactive Premiere/AE Multi-Track Timeline Workflow Simulator */}
        <TimelineWorkflow />

        {/* About Aryan — Story, Vision & Core Pillars */}
        <AboutAryan />

        {/* Tools I Work With — Premiere Pro, After Effects, CapCut Pro */}
        <ToolsShowcase />

        {/* Contact & "Let's create something worth watching" */}
        <ContactSection />
      </main>

      {/* 6. Fullscreen Cinematic Theater Video Modal */}
      <VideoModal
        video={selectedVideo}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
