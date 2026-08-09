import React, { useState, useEffect } from 'react';
import { 
  Mail, Phone, MapPin, Send, CheckCircle2, Sparkles, 
  Calendar, Clock, ShieldCheck, FileText 
} from 'lucide-react';
import { DoodleLogo } from './DoodleLogo';

interface ContactSectionProps {
  initialService?: string;
  initialEstimate?: {
    platform: string;
    scope: string;
    features: string[];
    priceRange: string;
    weeksRange: string;
  } | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService,
  initialEstimate,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [projectType, setProjectType] = useState(initialService || 'Custom Web Application');
  const [budget, setBudget] = useState('$5,000 - $10,000');
  const [message, setMessage] = useState('');
  const [needNDA, setNeedNDA] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setProjectType(initialService);
    }
    if (initialEstimate) {
      setProjectType(`${initialEstimate.platform.toUpperCase()} App (${initialEstimate.scope})`);
      setBudget(initialEstimate.priceRange);
      setMessage(
        `Hi Doodle IoT Team,\n\nI calculated an estimate on your website:\n- Platform: ${initialEstimate.platform}\n- Scope: ${initialEstimate.scope}\n- Est. Budget: ${initialEstimate.priceRange}\n- Est. Timeline: ${initialEstimate.weeksRange}\n- Selected Modules: ${initialEstimate.features.join(', ')}\n\nLet's discuss my project!`
      );
    }
  }, [initialService, initialEstimate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
  };

  return (
    <section className="py-20 md:py-28 bg-[#090a0f] relative border-t border-white/5" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Studio Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>START A PROJECT</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Let's Build Your Website or App Together.
              </h2>
              <p className="text-slate-400 text-base leading-relaxed">
                Have a new project, app idea, or need an existing platform revamped? Send us your brief and we'll prepare a comprehensive milestone scope within 24 hours.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-4 bg-slate-900/60 p-6 rounded-2xl border border-white/10">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase">DIRECT EMAIL</h4>
                  <a href="mailto:hello@doodleiot.com" className="text-base font-bold text-white hover:text-cyan-400 transition-colors">
                    hello@doodleiot.com
                  </a>
                  <p className="text-[11px] text-emerald-400 mt-0.5">Response guaranteed in &lt; 2 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-3 border-t border-white/5">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase">DISCOVERY CALL</h4>
                  <p className="text-sm font-bold text-white">Book a 15-min Technical Call</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Talk directly with a Lead Architect</p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-3 border-t border-white/5">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase">CONFIDENTIALITY</h4>
                  <p className="text-sm font-bold text-white">Mutual NDA Available</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Your project idea & IP are 100% safe</p>
                </div>
              </div>
            </div>

            {/* Mascot footer badge */}
            <div className="p-4 flex items-center justify-between">
              <DoodleLogo size="sm" variant="full" />
              <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-1 rounded">
                STUDIO EST. 2024
              </span>
            </div>

          </div>

          {/* Right Column: Contact & Scope Form */}
          <div className="lg:col-span-7 bg-slate-900/80 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Project Brief Received!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you <strong className="text-white">{name}</strong>. Our engineering lead has received your project details. We will review your requirements and reply to <strong className="text-cyan-400">{email}</strong> within 2 hours with next steps.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 underline cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" id="doodle-contact-form">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      YOUR FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Mercer"
                      className="w-full bg-slate-950 border border-white/10 focus:border-cyan-500 rounded-xl p-3 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      WORK EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full bg-slate-950 border border-white/10 focus:border-cyan-500 rounded-xl p-3 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      COMPANY / STARTUP NAME
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Acme Health Bio"
                      className="w-full bg-slate-950 border border-white/10 focus:border-cyan-500 rounded-xl p-3 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      PROJECT CATEGORY
                    </label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full bg-slate-950 border border-white/10 focus:border-cyan-500 rounded-xl p-3 text-xs sm:text-sm text-white focus:outline-none transition-colors"
                    >
                      <option value="Custom Web Application">Custom Web Application</option>
                      <option value="iOS & Android Mobile App">iOS & Android Mobile App</option>
                      <option value="Unified Web + Mobile App">Unified Web + Mobile App</option>
                      <option value="IoT & Telemetry Software">IoT & Telemetry Software</option>
                      <option value="Startup MVP Sprint">Startup MVP Sprint</option>
                      <option value="UI/UX Product Design">UI/UX Product Design</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    ESTIMATED BUDGET TARGET
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['$2.5k - $5k', '$5k - $10k', '$10k - $25k', '$25k+'].map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setBudget(b)}
                        className={`p-2.5 rounded-xl border text-center text-xs font-medium transition-all cursor-pointer ${
                          budget === b
                            ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300'
                            : 'bg-slate-950 border-white/5 text-slate-400 hover:text-white'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    PROJECT OVERVIEW & REQUIREMENTS *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your app concept, target users, key features, or link to existing reference sites..."
                    className="w-full bg-slate-950 border border-white/10 focus:border-cyan-500 rounded-xl p-3 text-xs sm:text-sm text-white placeholder-slate-600 focus:outline-none transition-colors leading-relaxed"
                  />
                </div>

                {/* Checkbox for NDA */}
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="nda-checkbox"
                    checked={needNDA}
                    onChange={(e) => setNeedNDA(e.target.checked)}
                    className="w-4 h-4 rounded bg-slate-950 border-slate-700 text-cyan-500 focus:ring-0"
                  />
                  <label htmlFor="nda-checkbox" className="text-xs text-slate-300 cursor-pointer select-none">
                    Send mutual Non-Disclosure Agreement (NDA) prior to technical review
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-bold text-sm py-3.5 rounded-xl shadow-xl shadow-cyan-500/25 transition-all hover:scale-[1.01] active:scale-98 cursor-pointer"
                  id="submit-contact-brief-btn"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>Submit Project Brief to Doodle IoT</span>
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
