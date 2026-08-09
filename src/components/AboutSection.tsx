import React from 'react';
import { DoodleLogo } from './DoodleLogo';
import { Code, ShieldCheck, Zap, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#090a0f] relative border-t border-white/5" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Mascot & Brand Identity Box */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl bg-gradient-to-b from-slate-900 via-slate-950 to-black border border-cyan-500/30 p-8 text-center shadow-2xl space-y-6">
              <div className="inline-block">
                <DoodleLogo size="xl" variant="stacked" />
              </div>

              <div className="space-y-2 text-left pt-2">
                <h3 className="text-xl font-bold text-white font-tech">The Doodle IoT Philosophy</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  The word <strong className="text-white">Doodle</strong> represents creative freedom, playful micro-interactions, and pixel-level craftsmanship. <strong className="text-cyan-400">IoT</strong> represents our technical muscle—building low-latency, real-time connected software.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 text-left">
                <div className="p-3 rounded-lg bg-slate-900 border border-white/5">
                  <span className="text-lg font-bold text-cyan-400 font-tech">100%</span>
                  <p className="text-[11px] text-slate-400">Source Code Transfer</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-white/5">
                  <span className="text-lg font-bold text-cyan-400 font-tech">0%</span>
                  <p className="text-[11px] text-slate-400">Offshore Bloat</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>WHO WE ARE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              A boutique development studio built for speed & precision.
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Doodle IoT was founded on a simple principle: software agencies should build clean, fast, reliable digital products without bureaucratic overhead or hidden scope creep.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                  <Code className="w-4 h-4" />
                  <span>Pixel-Perfect Engineering</span>
                </div>
                <p className="text-xs text-slate-400">
                  We write clean, typed React 19 and React Native code. No bloated page builders or slow boilerplate.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Total Code Ownership</span>
                </div>
                <p className="text-xs text-slate-400">
                  All IP, repositories, deployment scripts, and database credentials belong exclusively to your company.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
                  <Zap className="w-4 h-4" />
                  <span>Direct Developer Access</span>
                </div>
                <p className="text-xs text-slate-400">
                  You communicate directly with your dedicated lead engineer on Slack or email—no games or lost context.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <Cpu className="w-4 h-4" />
                  <span>Hardware & IoT Capable</span>
                </div>
                <p className="text-xs text-slate-400">
                  From standard web/mobile apps to complex hardware telemetry & WebSockets, we handle low-level data flows.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
