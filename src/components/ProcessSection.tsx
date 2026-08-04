import React from 'react';
import { PROCESS_STEPS } from '../data/companyData';
import { CheckCircle2, ArrowRight, Sparkles, Code2, Layers, Cpu, Rocket } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#090a0f] relative border-t border-white/5" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium">
            <Rocket className="w-3.5 h-3.5" />
            <span>HOW WE DELIVER CLIENT APPS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Our 4-Step Development Process
          </h2>
          <p className="text-slate-400 text-base">
            From initial wireframes to live production launch, we maintain complete transparency with weekly live demos and fixed-milestone pricing.
          </p>
        </div>

        {/* Process Steps Visual Timeline */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="relative bg-slate-900/60 border border-white/10 hover:border-cyan-500/40 rounded-2xl p-6 flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/30 group"
              id={`process-step-${step.step}`}
            >
              {/* Step Badge */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center font-mono font-extrabold text-cyan-400 text-lg group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                    0{step.step}
                  </div>
                  <span className="text-[10px] font-mono font-semibold text-slate-400 uppercase tracking-wider bg-slate-950 px-2 py-1 rounded">
                    {step.subtitle}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h3>

                <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                  {step.description}
                </p>

                {/* Details list */}
                <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
                  {step.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step Deliverable Box */}
              <div className="mt-6 pt-3 border-t border-white/5 bg-slate-950/80 p-3 rounded-xl">
                <div className="text-[10px] font-mono text-cyan-400 uppercase">Phase Milestone Deliverable:</div>
                <div className="text-xs font-semibold text-white mt-0.5">{step.deliverable}</div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
