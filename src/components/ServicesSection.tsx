import React, { useState } from 'react';
import { SERVICES } from '../data/companyData';
import { ServiceItem } from '../types';
import { 
  Globe, Smartphone, Cpu, Layout, Server, Zap, 
  ArrowRight, CheckCircle2, Clock, Layers, Sparkles, X, Code2 
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-6 h-6 text-cyan-400" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-sky-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-purple-400" />;
      case 'Layout': return <Layout className="w-6 h-6 text-emerald-400" />;
      case 'Server': return <Server className="w-6 h-6 text-amber-400" />;
      case 'Zap': return <Zap className="w-6 h-6 text-pink-400" />;
      default: return <Globe className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#0b0c13] relative border-t border-white/5" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EXPERT CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            What Doodle IoT Builds For Clients
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We don't do generic templates. We architect end-to-end custom web platforms, native mobile applications, and IoT software scaled to your exact business requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group rounded-2xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/30 hover:-translate-y-1 relative"
              id={`service-card-${service.id}`}
            >
              <div>
                {/* Header row inside card */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-white/10 group-hover:border-cyan-500/30 transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-white/10">
                    {service.badge}
                  </span>
                </div>

                {/* Service Title & Description */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm mt-2.5 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Quick Deliverable Highlights */}
                <ul className="mt-5 space-y-2 border-t border-white/10 pt-4">
                  {service.deliverables.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  <span>{service.avgTimeline}</span>
                </div>

                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-all cursor-pointer"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner CTA */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-cyan-500/30 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">Need a custom web or app solution?</h3>
            <p className="text-slate-300 text-sm mt-1">
              Tell us your idea and we will outline a technical roadmap and exact milestone quote within 24 hours.
            </p>
          </div>
          <button
            onClick={() => onSelectServiceForQuote('Custom Solution')}
            className="shrink-0 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm px-6 py-3 rounded-xl shadow-lg shadow-cyan-500/20 transition-all cursor-pointer flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Request Custom Scope</span>
          </button>
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-slate-900 border border-cyan-500/40 rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                {getIcon(selectedService.iconName)}
              </div>
              <div>
                <span className="text-xs font-mono font-semibold text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/30">
                  {selectedService.badge}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">{selectedService.title}</h3>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {selectedService.fullDesc}
            </p>

            {/* Deliverables Section */}
            <div className="mb-6 space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>What's Included in Deliverables:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 bg-slate-950/70 p-4 rounded-xl border border-white/5">
                {selectedService.deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="mb-6">
              <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>Tech Stack & Tools:</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedService.techStack.map((tech, i) => (
                  <span key={i} className="text-xs font-mono bg-slate-800 text-cyan-300 px-3 py-1 rounded-md border border-white/10">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400 font-mono">
                Est. Turnaround: <span className="text-white font-bold">{selectedService.avgTimeline}</span>
              </div>
              <button
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onSelectServiceForQuote(title);
                }}
                className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm px-6 py-2.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Request {selectedService.title}</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
