import React from 'react';
import { Film, Sparkles, Heart, Zap, Award, Target, Flame, Clapperboard } from 'lucide-react';
import { sounds } from '../utils/audio';

export default function AboutAryan() {
  const pillars = [
    {
      icon: Heart,
      title: 'Creating a Feeling',
      quote: "For me, editing is more than just cutting clips together. It's about creating a feeling, capturing attention, and making every frame count.",
      badge: 'EMOTIONAL RESONANCE',
      accent: 'from-pink-500 to-rose-600',
    },
    {
      icon: Zap,
      title: 'Attention & Viral Retention',
      quote: "From engaging short-form content to cinematic edits, I focus on pacing that locks viewer focus without a single frame of wasted time.",
      badge: 'PRECISE PACING',
      accent: 'from-amber-400 to-orange-500',
    },
    {
      icon: Film,
      title: 'Cinematic Visuals & Detail',
      quote: "Transforming raw camera sensor data into high-contrast, atmospheric visuals with intention, creativity, and meticulous color fidelity.",
      badge: 'COLOR & VFX',
      accent: 'from-cyan-400 to-blue-500',
    },
    {
      icon: Target,
      title: 'Stories That Leave an Impression',
      quote: "My goal is simple: to help creators and brands communicate their stories through videos that look better, feel stronger, and leave a lasting impression.",
      badge: 'BRAND IMPACT',
      accent: 'from-purple-500 to-indigo-600',
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tag & Subheader */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Film className="w-3.5 h-3.5 text-cyan-400" />
            <span>Behind The Edit Suite</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">Aryan</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 font-medium mt-3">
            Video Editor & Visual Storyteller
          </p>
        </div>

        {/* Two Column Feature: Aryan's Manifesto + Director's Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
          
          {/* Left Column: Aryan's Philosophy Text from prompt */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#090b14]/90 border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
              {/* Subtle anamorphic glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center gap-3 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-4">
                <Clapperboard className="w-4 h-4 text-purple-400" />
                <span>The Creative Core</span>
              </div>

              <blockquote className="font-heading font-bold text-xl sm:text-2xl text-white leading-snug mb-6">
                “Behind every frame, there’s a story. For me, editing is more than just cutting clips together. It’s about creating a feeling, capturing attention, and making every frame count.”
              </blockquote>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                I transform raw footage into engaging visual experiences through creative storytelling, precise pacing, cinematic visuals, and sound design.
              </p>

              <p className="text-sm sm:text-base text-gray-400 leading-relaxed mt-4">
                From engaging short-form content to cinematic edits and creative visual effects, I focus on bringing ideas to life with intention, creativity, and attention to detail.
              </p>

              <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-heading font-bold text-white text-base">
                    Aryan
                  </div>
                  <div className="text-xs text-cyan-300 font-mono">
                    Visual Storyteller & Video Editor
                  </div>
                </div>
                <div className="font-cinematic text-sm tracking-widest text-purple-300 uppercase">
                  EST. 2026
                </div>
              </div>
            </div>

            {/* Mission Statement Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-950/40 via-indigo-950/30 to-cyan-950/40 border border-cyan-500/20 backdrop-blur-md">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 mt-1">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-base">
                    My Goal is Simple:
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 mt-1 leading-relaxed">
                    To help creators and brands communicate their stories through videos that <span className="text-cyan-300 font-semibold">look better</span>, <span className="text-purple-300 font-semibold">feel stronger</span>, and <span className="text-pink-300 font-semibold">leave a lasting impression</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual 3D Hologram Director Identity */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-1 bg-gradient-to-b from-purple-500/30 via-cyan-500/20 to-transparent">
              <div className="rounded-[22px] bg-[#070912] p-6 sm:p-8 border border-white/10 space-y-6">
                
                {/* Director Camera Slate Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono text-gray-400">
                  <span className="text-cyan-400">DIRECTOR OF POST</span>
                  <span>ROLL: 04 · TAKE: 01</span>
                </div>

                {/* Identity Visual */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-tr from-purple-900/60 via-[#0d0f1e] to-cyan-900/40 flex flex-col items-center justify-center p-6 text-center border border-white/10">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 p-[2px] shadow-[0_0_35px_rgba(168,85,247,0.5)] mb-4">
                    <div className="w-full h-full rounded-full bg-[#0a0b16] flex items-center justify-center">
                      <Film className="w-10 h-10 text-cyan-400" />
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-2xl text-white">
                    ARYAN
                  </h3>
                  <p className="text-xs font-mono text-gray-300 mt-1">
                    Visual Storyteller & Editor
                  </p>

                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-cyan-300">
                      🎬 Cinematics
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-purple-300">
                      ⚡ Visual Effects
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-pink-300">
                      📱 Short-Form
                    </span>
                  </div>
                </div>

                {/* Quick specs */}
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-[10px] font-mono text-gray-400 uppercase">Turnaround</div>
                    <div className="font-heading font-bold text-white text-sm mt-0.5">24 - 48 Hours</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-[10px] font-mono text-gray-400 uppercase">Export Standard</div>
                    <div className="font-heading font-bold text-cyan-300 text-sm mt-0.5">4K HDR ProRes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-white/8 hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
                onMouseEnter={() => sounds.playClick()}
              >
                <div>
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${pillar.accent} p-[1px] mb-5`}>
                    <div className="w-full h-full bg-[#0a0b16] rounded-[11px] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                    </div>
                  </div>

                  <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">
                    {pillar.badge}
                  </span>

                  <h3 className="font-heading font-bold text-lg text-white mt-1 mb-3 group-hover:text-cyan-200 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {pillar.quote}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
