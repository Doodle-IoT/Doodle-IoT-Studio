import React, { useState } from 'react';
import { DoodleLogo } from './DoodleLogo';
import { ArrowUp, Github, Twitter, Linkedin, Mail, Check, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050608] border-t border-white/10 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
            <DoodleLogo size="lg" variant="full" />
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Doodle IoT is a boutique web and mobile app development studio. We engineer custom client platforms, native iOS/Android apps, and IoT telemetry software with pixel-perfect precision.
            </p>
            <div className="flex items-center gap-3 text-slate-400">
              <a href="#" className="p-2 rounded-lg bg-slate-900 border border-white/10 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-900 border border-white/10 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-900 border border-white/10 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">SERVICES</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Web Applications</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Mobile iOS & Android</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">IoT & Telemetry</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">UI/UX Design</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Startup MVP Sprint</a></li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">AGENCY</h4>
            <ul className="space-y-2">
              <li><a href="#portfolio" className="hover:text-cyan-400 transition-colors">Client Work</a></li>
              <li><a href="#estimator" className="hover:text-cyan-400 transition-colors">Cost Calculator</a></li>
              <li><a href="#process" className="hover:text-cyan-400 transition-colors">Our Process</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About Studio</a></li>
              <li><a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Newsletter signup */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">TECH INSIGHTS NEWSLETTER</h4>
            <p className="text-slate-400 text-xs">
              Subscribe for monthly architectural breakdowns on React 19, mobile performance, and IoT cloud systems.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Subscribed! Thank you for following Doodle IoT.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="enter your email..."
                  className="bg-slate-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 flex-1"
                />
                <button
                  type="submit"
                  className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs transition-colors cursor-pointer"
                >
                  Join
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-500">
            <span>© {new Date().getFullYear()} Doodle IoT Studio. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
