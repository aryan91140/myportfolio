import React, { useState } from 'react';
import { Play, Sparkles, Film, Wand2, Smartphone, Award, Flame, Clapperboard, ExternalLink } from 'lucide-react';
import { sounds } from '../utils/audio';

export const videoProjects = [
  // --- 1. CINEMATICS (FIRST AS REQUESTED) ---
  {
    id: 'cine-1',
    category: 'cinematics',
    title: 'Echoes of the Wild — Nordic Odyssey',
    subtitle: 'Cinematic Travel & Narrative Short Film',
    description: 'Shot in raw log, graded with custom Kodak 2383 emulation. Dynamic sound design recorded with binaural foley, orchestral score timing, and anamorphic 2.39:1 framing.',
    tools: ['Adobe Premiere Pro', 'DaVinci Resolve', 'Sound Design'],
    aspectRatio: '16:9',
    badge: 'CINEMATIC GRADE',
    duration: '02:40',
    fps: '24 FPS',
    resolution: '4K DCI',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-sky-in-a-sunset-26070-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
    client: 'Nordic Wanderlust Series',
    year: '2026',
    storyQuote: 'Capturing nature’s silence through long rhythmic cuts and atmospheric low-end rumble.'
  },
  {
    id: 'cine-2',
    category: 'cinematics',
    title: 'Neon Drift — Tokyo After Midnight',
    subtitle: 'Moody Cyberpunk Street Cinematic',
    description: 'An atmospheric night exploration featuring rain reflections, teal & magenta color separation, custom speed ramping, and authentic Tokyo ambient sound design.',
    tools: ['Adobe Premiere Pro', 'Adobe After Effects'],
    aspectRatio: '16:9',
    badge: 'ACES COLOR',
    duration: '01:52',
    fps: '60 FPS',
    resolution: '4K 10-BIT',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-42861-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1000&q=80',
    client: 'Urban Aesthetics Collective',
    year: '2026',
    storyQuote: 'Every reflection in the puddles was tracked to enhance anamorphic streak flares.'
  },
  {
    id: 'cine-3',
    category: 'cinematics',
    title: 'The Silent Peak — Alpine Ascent',
    subtitle: 'Documentary Pacing & High Altitude Drama',
    description: 'Raw mountaineering footage shaped into a gripping human struggle. Intense breath foley, crunching snow steps, and deliberate tension-building micro-cuts.',
    tools: ['Adobe Premiere Pro', 'Audition'],
    aspectRatio: '16:9',
    badge: 'SOUND SCULPTED',
    duration: '03:15',
    fps: '24 FPS',
    resolution: '4K HDR',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-drone-view-of-a-snowy-mountain-range-42845-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80',
    client: 'Summit Peak Expeditions',
    year: '2025',
    storyQuote: 'Pacing that makes viewers hold their breath during steep ridge crossings.'
  },

  // --- 2. VISUAL EDIT & VFX (SECOND AS REQUESTED) ---
  {
    id: 'vfx-1',
    category: 'visual-edit',
    title: 'Dimensional Warp — Hyperlapse & 3D Tracking',
    subtitle: 'Seamless Camera Projection & Visual Effects',
    description: 'High-energy visual edit integrating 3D camera projection, rotoscoping, portal transitions, and synced bass drops. Every cut hits the beat with millisecond precision.',
    tools: ['Adobe After Effects', 'Adobe Premiere Pro', 'Mocha Pro'],
    aspectRatio: '16:9',
    badge: '3D VFX TRACK',
    duration: '01:10',
    fps: '60 FPS',
    resolution: '4K 60FPS',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-night-traffic-in-a-crossroad-with-a-bridge-43152-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80',
    client: 'Creative Visual Lab',
    year: '2026',
    storyQuote: 'Complex 3D match-moving blended with dynamic speed ramp transitions.'
  },
  {
    id: 'vfx-2',
    category: 'visual-edit',
    title: 'Cyberpunk HUD & Neon Glitch Overhaul',
    subtitle: 'Motion Graphics, Interface Design & Compositing',
    description: 'Futuristic sci-fi music video edit with custom typography, glowing wireframes, chromatic aberration displacement, and layered analog glitch distortion.',
    tools: ['Adobe After Effects', 'Premiere Pro'],
    aspectRatio: '16:9',
    badge: 'MOTION GRAPHICS',
    duration: '01:35',
    fps: '24 FPS',
    resolution: '4K PRORES',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-dj-mixing-music-at-a-club-party-41716-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80',
    client: 'Electro Pulse Records',
    year: '2025',
    storyQuote: 'Over 80 layers of composite VFX and animated kinetic vectors.'
  },
  {
    id: 'vfx-3',
    category: 'visual-edit',
    title: 'Liquid Speed Ramp — Sports Performance',
    subtitle: 'Extreme Time Remapping & Whip Pans',
    description: 'Extreme sports montage edited with smooth optical flow time remapping, custom directional whoosh pans, shake impacts, and punchy drum fills.',
    tools: ['Adobe Premiere Pro', 'Adobe After Effects'],
    aspectRatio: '16:9',
    badge: 'SPEED RAMPING',
    duration: '00:58',
    fps: '120 FPS SOURCE',
    resolution: '4K UHD',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-skateboarding-at-sunset-on-a-curved-road-42867-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?auto=format&fit=crop&w=1000&q=80',
    client: 'Velocity Athletics',
    year: '2026',
    storyQuote: 'Blending 120fps slow-motion into explosive 24fps impact punches.'
  },

  // --- 3. SHORT-FORM & REELS ---
  {
    id: 'short-1',
    category: 'short-form',
    title: 'The 3-Second Viral Hook — Retention Master',
    subtitle: 'Instagram Reel & YouTube Shorts Edit',
    description: 'Engineered for 120%+ average percentage viewed (APV). Animated kinetic typography, sound effect punch-ins every 1.5 seconds, and zero-fat storytelling.',
    tools: ['CapCut Pro', 'Adobe Premiere Pro', 'After Effects'],
    aspectRatio: '9:16',
    badge: 'VIRAL RETENTION',
    duration: '00:34',
    fps: '60 FPS',
    resolution: '1080x1920',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-young-man-with-headphones-listening-to-music-42930-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80',
    client: 'Creator Media Group (2.4M Views)',
    year: '2026',
    storyQuote: 'Constructed around dopamine hooks and seamless looping transitions.'
  },
  {
    id: 'short-2',
    category: 'short-form',
    title: 'Luxury Coffee Alchemy — High-Paced Reel',
    subtitle: 'Sensory Sound Design & Macro Focus',
    description: 'Satisfying ASMR sound design, macro liquid pouring, tactile steam sounds, and rapid micro-cuts that grip viewers instantly.',
    tools: ['CapCut Pro', 'Adobe Premiere Pro'],
    aspectRatio: '9:16',
    badge: 'ASMR SOUND',
    duration: '00:28',
    fps: '60 FPS',
    resolution: '1080x1920',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-coffee-being-poured-into-a-cup-42863-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    client: 'Roast & Brew Artisans',
    year: '2026',
    storyQuote: 'Over 40 individual audio foley samples packed into a 28-second edit.'
  },

  // --- 4. COMMERCIAL & BRAND ---
  {
    id: 'comm-1',
    category: 'commercial',
    title: 'Chronos — The Precision Watchmaker',
    subtitle: 'Commercial Brand Anthem',
    description: 'High-end luxury commercial edit featuring mechanical gear macro shots, tick-tock rhythm pacing, and an elegant cinematic grade.',
    tools: ['Adobe Premiere Pro', 'Adobe After Effects'],
    aspectRatio: '16:9',
    badge: 'COMMERCIAL AD',
    duration: '01:05',
    fps: '24 FPS',
    resolution: '4K DCI',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-craftsman-working-on-a-clock-41718-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80',
    client: 'Chronos Horology',
    year: '2025',
    storyQuote: 'Turning product craftsmanship into an emotional high-status narrative.'
  }
];

export default function VideoGallery({ onSelectVideo }) {
  const [activeTab, setActiveTab] = useState('cinematics'); // Default first to cinematics
  const [hoveredCard, setHoveredCard] = useState(null);

  const categories = [
    { id: 'cinematics', label: '1. Cinematics', icon: Film, count: 3, highlight: 'High Aesthetic & Narrative' },
    { id: 'visual-edit', label: '2. Visual Edit & VFX', icon: Wand2, count: 3, highlight: 'Speed Ramps & 3D Tracking' },
    { id: 'short-form', label: '3. Short-Form & Reels', icon: Smartphone, count: 2, highlight: 'Viral Pacing & Hooks' },
    { id: 'commercial', label: '4. Commercial & Brands', icon: Award, count: 1, highlight: 'Premium Showcase' },
  ];

  const filteredProjects = videoProjects.filter((p) => p.category === activeTab);

  return (
    <section id="showcase" className="relative py-24 sm:py-32 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Curated Video Projects</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              Crafted With <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">Intention & Detail</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-3 leading-relaxed">
              Explore Aryan's work across cinematic films, mind-bending visual edits, viral short-form retention edits, and commercial brand stories.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-gray-400 bg-white/[0.03] p-2 rounded-xl border border-white/10 self-start md:self-end">
            <Clapperboard className="w-4 h-4 text-cyan-400" />
            <span>SORTED: CINEMATICS FIRST → VFX → REELS</span>
          </div>
        </div>

        {/* Category Tabs (Cinematics first, then Visual Edit, etc.) */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12 p-2 bg-[#090b14]/80 rounded-2xl border border-white/10 backdrop-blur-xl">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  sounds.playClick();
                  setActiveTab(cat.id);
                }}
                onMouseEnter={() => sounds.playClick()}
                className={`flex-1 sm:flex-initial flex items-center justify-between gap-3 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-[0_0_25px_rgba(168,85,247,0.4)] scale-102'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-purple-400'}`} />
                  <span>{cat.label}</span>
                </div>
                <span className={`text-[11px] px-2 py-0.5 rounded-full font-mono ${
                  isActive ? 'bg-black/30 text-cyan-200' : 'bg-white/5 text-gray-400'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Video Cards Grid */}
        <div className={`grid gap-6 sm:gap-8 ${
          activeTab === 'short-form'
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto'
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {filteredProjects.map((project) => {
            const isVertical = project.aspectRatio === '9:16';
            const isHovered = hoveredCard === project.id;

            return (
              <div
                key={project.id}
                onMouseEnter={() => {
                  setHoveredCard(project.id);
                  sounds.playClick();
                }}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => {
                  sounds.playShutter();
                  onSelectVideo(project);
                }}
                data-cursor="WATCH"
                className="group relative rounded-2xl sm:rounded-3xl bg-[#0b0d18] border border-white/10 hover:border-cyan-400/50 overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.3)] flex flex-col"
              >
                {/* Visual Media Container */}
                <div className={`relative w-full overflow-hidden bg-black ${
                  isVertical ? 'aspect-[9/16]' : 'aspect-video'
                }`}>
                  {/* Real Video / Poster on Hover */}
                  <img
                    src={project.posterUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-95"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-cyan-400/30 text-cyan-300 font-mono text-[11px] font-bold tracking-wider">
                      {project.badge}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-black/75 backdrop-blur-md border border-white/10 text-gray-300 font-mono text-[10px]">
                      {project.duration}
                    </span>
                  </div>

                  {/* Center Play Button Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:scale-115 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-cyan-500 group-hover:border-transparent transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.6)]">
                      <Play className="w-7 h-7 fill-current ml-1 text-cyan-200 group-hover:text-white" />
                    </div>
                  </div>

                  {/* Bottom specs tag inside thumbnail */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-gray-300 pointer-events-none">
                    <span className="bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                      {project.fps}
                    </span>
                    <span className="bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs text-purple-300">
                      {project.resolution}
                    </span>
                  </div>
                </div>

                {/* Card Content & Details */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-gradient-to-b from-[#0b0d18] to-[#070912]">
                  <div>
                    <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1">
                      {project.client} · {project.year}
                    </div>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 mt-2 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/8">
                    {/* Tools Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-white/[0.04] text-gray-300 border border-white/8"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* View project button */}
                    <div className="flex items-center justify-between text-xs font-medium text-cyan-400 group-hover:text-white transition-colors">
                      <span className="font-mono">OPEN FULL THEATER</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner callout */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-950/40 via-indigo-950/30 to-cyan-950/40 border border-purple-500/20 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-white text-base sm:text-lg">
                Have raw footage waiting to be transformed?
              </h4>
              <p className="text-xs sm:text-sm text-gray-300">
                Aryan works with creators, filmmakers, and brands worldwide. Quick turnaround and cinema-grade export.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            onClick={() => sounds.playWhoosh()}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold text-xs sm:text-sm shadow-lg hover:shadow-cyan-500/25 transition-all shrink-0"
          >
            Start Your Edit Project
          </a>
        </div>
      </div>
    </section>
  );
}
