import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/companyData';
import { PortfolioProject } from '../types';
import { 
  Globe, Smartphone, Cpu, ExternalLink, ArrowRight, X, 
  CheckCircle2, Layers, Monitor, Sparkles, TrendingUp 
} from 'lucide-react';

interface PortfolioSectionProps {
  onSelectProjectForQuote: (projectTitle: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProjectForQuote }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'mobile' | 'iot'>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'mobile'>('desktop');

  const filteredProjects = PORTFOLIO_PROJECTS.filter((proj) => {
    if (activeFilter === 'all') return true;
    return proj.category === activeFilter;
  });

  return (
    <section className="py-20 md:py-28 bg-[#090a0f] relative border-t border-white/5" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CLIENT PROOF & SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Websites & Apps We Built
            </h2>
            <p className="text-slate-400 text-base">
              Explore real digital products engineered by Doodle IoT for startups, e-commerce brands, and enterprise clients.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-900/80 p-1.5 rounded-xl border border-white/10 self-start md:self-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-cyan-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Projects ({PORTFOLIO_PROJECTS.length})
            </button>
            <button
              onClick={() => setActiveFilter('web')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === 'web'
                  ? 'bg-cyan-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Web Apps
            </button>
            <button
              onClick={() => setActiveFilter('mobile')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === 'mobile'
                  ? 'bg-cyan-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Mobile Apps
            </button>
            <button
              onClick={() => setActiveFilter('iot')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === 'iot'
                  ? 'bg-cyan-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              IoT Software
            </button>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => {
                setSelectedProject(project);
                setPreviewDevice(project.deviceType === 'mobile' ? 'mobile' : 'desktop');
              }}
              className="group rounded-2xl bg-slate-900/70 border border-white/10 hover:border-cyan-500/50 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/40 cursor-pointer flex flex-col justify-between"
              id={`portfolio-card-${project.id}`}
            >
              {/* Project Image Header with overlay */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-950">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                {/* Top Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-950/90 text-cyan-400 border border-cyan-500/30 backdrop-blur-md">
                    {project.client}
                  </span>
                </div>

                {/* Bottom Stats Overlay inside image */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 bg-slate-900/95 border border-white/10 px-2.5 py-1 rounded-md text-[11px] font-mono text-emerald-400">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{project.impactMetrics[0].value} {project.impactMetrics[0].label}</span>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1.5 line-clamp-2">
                    {project.summary}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.slice(0, 4).map((tag, idx) => (
                    <span key={idx} className="text-[11px] font-mono bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Details Link */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
                  <span>Explore Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-slate-900 border border-cyan-500/40 rounded-2xl max-w-4xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl space-y-6">
            
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                <span>CLIENT CASE STUDY</span>
                <span>•</span>
                <span>{selectedProject.client}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">{selectedProject.title}</h3>
              <p className="text-slate-400 text-sm mt-1">{selectedProject.tagline}</p>
            </div>

            {/* Device View Frame Simulation */}
            <div className="rounded-xl bg-slate-950 border border-white/10 p-4 relative">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2">preview://{selectedProject.id}</span>
                </div>
                
                {/* Device Selector */}
                <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-white/10">
                  <button
                    onClick={() => setPreviewDevice('desktop')}
                    className={`p-1.5 rounded text-xs flex items-center gap-1 ${
                      previewDevice === 'desktop' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400'
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5" />
                    <span>Desktop</span>
                  </button>
                  <button
                    onClick={() => setPreviewDevice('mobile')}
                    className={`p-1.5 rounded text-xs flex items-center gap-1 ${
                      previewDevice === 'mobile' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Mobile</span>
                  </button>
                </div>
              </div>

              {/* Interactive Image Frame */}
              <div className="flex justify-center bg-slate-900/50 p-4 rounded-lg overflow-hidden">
                {previewDevice === 'desktop' ? (
                  <div className="w-full h-64 sm:h-80 rounded-lg overflow-hidden border border-white/10 relative shadow-2xl">
                    <img
                      src={selectedProject.imageUrl}
                      alt="Desktop view"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-64 h-80 rounded-3xl border-4 border-slate-700 overflow-hidden relative shadow-2xl bg-black">
                    <div className="absolute top-0 inset-x-0 h-4 bg-slate-800 rounded-b-md mx-auto w-24 z-10" />
                    <img
                      src={selectedProject.imageUrl}
                      alt="Mobile view"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Impact Metrics */}
            <div>
              <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span>Verified Client Business Results:</span>
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {selectedProject.impactMetrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-emerald-500/20 text-center">
                    <div className="text-xl font-bold text-emerald-400 font-tech">{m.value}</div>
                    <div className="text-[11px] text-slate-400 font-medium">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-950/80 border border-white/5 space-y-1.5">
                <h5 className="text-xs font-bold text-red-400 font-mono uppercase">The Challenge</h5>
                <p className="text-xs text-slate-300 leading-relaxed">{selectedProject.challenge}</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/80 border border-white/5 space-y-1.5">
                <h5 className="text-xs font-bold text-cyan-400 font-mono uppercase">Doodle IoT Solution</h5>
                <p className="text-xs text-slate-300 leading-relaxed">{selectedProject.solution}</p>
              </div>
            </div>

            {/* Features Checklist */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Key Built Features:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-slate-950/50 p-4 rounded-xl border border-white/5">
                {selectedProject.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1">
                {selectedProject.tags.map((t, idx) => (
                  <span key={idx} className="text-[10px] font-mono bg-slate-800 text-cyan-300 px-2 py-0.5 rounded">
                    {t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => {
                  const title = selectedProject.title;
                  setSelectedProject(null);
                  onSelectProjectForQuote(`Similar to ${title}`);
                }}
                className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm px-6 py-2.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Request App Like This</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
