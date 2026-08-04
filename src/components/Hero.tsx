import React from 'react';
import { DoodleLogo } from './DoodleLogo';
import { Sparkles, ArrowRight, Code, Smartphone, Zap, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';
import { COMPANY_STATS } from '../data/companyData';

interface HeroProps {
  onOpenQuote: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onOpenContact }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#090a0f]" id="hero">
      {/* Background ambient lighting glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-purple-600/10 blur-[140px] rounded-full pointer-events-none" />
      
      {/* Subtle pixel grid background pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Studio Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wide shadow-lg shadow-cyan-950/40">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="font-semibold text-white">DOODLE IOT</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">Custom Web & Mobile App Agency</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              We build custom{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
                websites & apps
              </span>{' '}
              for ambitious clients.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Doodle IoT delivers pixel-perfect web platforms, high-performance iOS & Android mobile apps, and low-latency smart IoT software. Built cleanly with React, React Native, and modern APIs.
            </p>

            {/* Feature Checkmarks */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-300 pt-1 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>100% Client Code Ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Transparent Fixed Milestones</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>iOS, Android & Web Unified</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-bold text-sm px-7 py-3.5 rounded-xl shadow-xl shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-98 cursor-pointer group"
                id="hero-start-project-btn"
              >
                <Sparkles className="w-4 h-4 text-slate-950 group-hover:rotate-12 transition-transform" />
                <span>Estimate Project Cost</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm px-6 py-3.5 rounded-xl border border-white/10 hover:border-cyan-500/40 transition-all cursor-pointer"
              >
                <Code className="w-4 h-4 text-cyan-400" />
                <span>Explore Client Showcase</span>
              </a>
            </div>

            {/* Trust Banner */}
            <div className="pt-6 flex items-center justify-center lg:justify-start gap-6 border-t border-white/10">
              <div className="flex -space-x-2">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Client" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Client" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80" alt="Client" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1 text-amber-400 text-xs">
                  <span>★★★★★</span>
                  <span className="text-white font-bold ml-1">4.9/5</span>
                </div>
                <p className="text-[11px] text-slate-400 font-medium">Trusted by founders & CTOs worldwide</p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Studio Visual Showcase */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Interactive Studio Glass Card */}
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0d0f17] border border-white/15 p-6 shadow-2xl shadow-cyan-950/50 backdrop-blur-xl">
              
              {/* Header inside card */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-400">doodle_iot_studio.ts</span>
                </div>
                <span className="text-[10px] font-mono bg-cyan-950 text-cyan-400 px-2 py-0.5 rounded border border-cyan-500/30">
                  LIVE STATUS
                </span>
              </div>

              {/* Logo Mascot Showcase inside card */}
              <div className="my-6 p-6 rounded-xl bg-[#090a0f] border border-white/10 text-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Cpu className="w-16 h-16 text-cyan-400" />
                </div>
                
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <div className="mb-3 animate-float">
                    <DoodleLogo size="xl" variant="stacked" />
                  </div>
                  <p className="text-xs font-mono text-cyan-300 mt-2">
                    // Web Apps • Mobile Apps • IoT Software
                  </p>
                </div>
              </div>

              {/* Feature Chips */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-lg bg-slate-900/80 border border-white/5 flex items-start gap-2.5">
                  <div className="p-1.5 rounded-md bg-cyan-500/10 text-cyan-400">
                    <Code className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Custom Web Apps</h4>
                    <p className="text-[11px] text-slate-400">React 19 & Next.js</p>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/80 border border-white/5 flex items-start gap-2.5">
                  <div className="p-1.5 rounded-md bg-purple-500/10 text-purple-400">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">iOS & Android</h4>
                    <p className="text-[11px] text-slate-400">React Native 60fps</p>
                  </div>
                </div>
              </div>

              {/* Live Activity Stream snippet */}
              <div className="mt-4 p-3 rounded-lg bg-[#050608] border border-cyan-500/20 font-mono text-[11px] text-slate-300 space-y-1">
                <div className="flex items-center justify-between text-[10px] text-slate-500">
                  <span>CLIENT DEMO SPRINT #4</span>
                  <span className="text-emerald-400">PASSED 100%</span>
                </div>
                <div className="text-cyan-400">$ doodle-iot build --platform=all --optimize</div>
                <div className="text-slate-400">✓ Web App compiled (0.42s)</div>
                <div className="text-slate-400">✓ iOS & Android bundles ready</div>
              </div>

            </div>

            {/* Decorative Floating Pill */}
            <div className="absolute -bottom-6 -left-6 bg-slate-900/95 border border-cyan-500/40 p-3 rounded-xl shadow-xl flex items-center gap-3 hidden sm:flex">
              <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Rapid 2-3 Wk MVPs</p>
                <p className="text-[10px] text-slate-400">Launch before competitors</p>
              </div>
            </div>

          </div>

        </div>

        {/* Stats Grid */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-white/10">
          {COMPANY_STATS.map((stat, index) => (
            <div 
              key={index} 
              className="p-5 rounded-xl bg-slate-900/40 border border-white/5 hover:border-cyan-500/30 transition-colors"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-tech tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-cyan-400 mt-1 font-mono">
                {stat.highlight}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
