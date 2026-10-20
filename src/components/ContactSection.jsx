import React, { useState } from 'react';
import { Send, Sparkles, Mail, MessageSquare, Check, ArrowRight, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sounds } from '../utils/audio';

export default function ContactSection() {
  const [projectType, setProjectType] = useState('cinematic');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    driveLink: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const projectTypes = [
    { id: 'cinematic', label: '🎬 Cinematic Film' },
    { id: 'vfx', label: '⚡ Visual Edit & VFX' },
    { id: 'reels', label: '📱 Viral Reels / Shorts' },
    { id: 'commercial', label: '💎 Commercial / Ad' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    sounds.playShutter();

    // Trigger celebratory confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#06b6d4', '#a855f7', '#ec4899', '#3b82f6'],
    });

    setSubmitted(true);
  };

  const copyEmail = () => {
    sounds.playClick();
    navigator.clipboard.writeText('aryan.visuals@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 z-10 overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-t from-purple-950/30 via-cyan-950/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header with User's Closing Quote */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Collaboration & Inquiries</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight">
            LET'S CREATE SOMETHING{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              WORTH WATCHING.
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-4 leading-relaxed">
            Ready to turn raw footage into an unforgettable visual experience? Tell me about your story, timeline, and requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contacts & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#090b16] border border-white/10 space-y-6 backdrop-blur-xl">
              <h3 className="font-heading font-bold text-xl text-white">
                Get In Touch Directly
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Whether you need a full cinematic edit, monthly short-form content retention, or complex VFX tracking, Aryan is ready to deliver.
              </p>

              {/* Email Card with Copy button */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-gray-400 uppercase">DIRECT EMAIL</div>
                    <div className="text-sm font-semibold text-white">aryan.visuals@gmail.com</div>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-mono text-cyan-300 transition-colors flex items-center gap-1"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>COPIED</span>
                    </>
                  ) : (
                    <span>COPY</span>
                  )}
                </button>
              </div>

              {/* Fast Response Guarantee */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="text-xs text-gray-300 leading-relaxed">
                  <strong className="text-white">Fast Response:</strong> Guaranteed reply within 6-12 hours with project breakdown and timeline estimate.
                </div>
              </div>

              {/* Social Channels with SVG icons */}
              <div>
                <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-3">
                  CONNECT & FOLLOW
                </div>
                <div className="flex items-center gap-3">
                  {/* Instagram */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.04] hover:bg-white/10 border border-white/8 text-xs font-medium text-gray-300 hover:text-white transition-all group"
                  >
                    <svg className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>Instagram</span>
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.04] hover:bg-white/10 border border-white/8 text-xs font-medium text-gray-300 hover:text-white transition-all group"
                  >
                    <svg className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <span>YouTube</span>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/[0.04] hover:bg-white/10 border border-white/8 text-xs font-medium text-gray-300 hover:text-white transition-all group"
                  >
                    <Phone className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0a0c1a] border border-white/12 shadow-2xl relative backdrop-blur-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-black text-2xl text-white">
                    Project Inquiry Received!
                  </h3>
                  <p className="text-sm text-gray-300 max-w-md mx-auto">
                    Thanks for reaching out! Aryan will review your project details and get back to you with ideas, pacing concepts, and pricing.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono text-cyan-300 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-heading font-bold text-xl text-white mb-2">
                    Start a New Edit Project
                  </h3>

                  {/* Project Type Selector */}
                  <div>
                    <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
                      Project Type:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {projectTypes.map((pt) => (
                        <button
                          key={pt.id}
                          type="button"
                          onClick={() => {
                            sounds.playClick();
                            setProjectType(pt.id);
                          }}
                          className={`p-2.5 rounded-xl text-xs font-medium text-center border transition-all ${
                            projectType === pt.id
                              ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white border-white/40 shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                              : 'bg-white/[0.03] text-gray-300 border-white/8 hover:bg-white/[0.08]'
                          }`}
                        >
                          {pt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
                        Your Name / Brand *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Rivera / Apex Media"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder-gray-500 font-sans"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@domain.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder-gray-500 font-sans"
                      />
                    </div>
                  </div>

                  {/* Raw Footage Link (Google Drive / Dropbox) */}
                  <div>
                    <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
                      Footage Link / Reference (Optional)
                    </label>
                    <input
                      type="url"
                      value={formData.driveLink}
                      onChange={(e) => setFormData({ ...formData, driveLink: e.target.value })}
                      placeholder="Google Drive, Dropbox, Frame.io or YouTube link"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder-gray-500 font-sans"
                    />
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
                      Tell Me About The Story & Vision *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe what you want to achieve: pacing style, mood, desired length, target audience, music preferences..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-cyan-400 focus:outline-none text-sm text-white placeholder-gray-500 font-sans resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white font-bold text-sm sm:text-base shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Project Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div>
            © {new Date().getFullYear()} ARYAN · Video Editor & Visual Storyteller. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-gray-400">
            <span>PREMIERE PRO</span>
            <span>·</span>
            <span>AFTER EFFECTS</span>
            <span>·</span>
            <span>CAPCUT PRO</span>
          </div>
        </div>
      </div>
    </section>
  );
}
