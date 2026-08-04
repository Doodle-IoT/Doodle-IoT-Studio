import React, { useState, useMemo } from 'react';
import { QuoteSelection, EstimatedQuote } from '../types';
import { 
  Calculator, Sparkles, Check, ArrowRight, ShieldCheck, 
  Clock, DollarSign, Layers, Globe, Smartphone, Cpu, CheckCircle2 
} from 'lucide-react';

interface QuoteEstimatorProps {
  onSendEstimateToContact: (estimateData: {
    platform: string;
    scope: string;
    features: string[];
    priceRange: string;
    weeksRange: string;
  }) => void;
  preselectedService?: string;
}

export const QuoteEstimator: React.FC<QuoteEstimatorProps> = ({ 
  onSendEstimateToContact,
  preselectedService 
}) => {
  const [platform, setPlatform] = useState<QuoteSelection['platform']>('both');
  const [scope, setScope] = useState<QuoteSelection['scope']>('standard');
  const [designLevel, setDesignLevel] = useState<QuoteSelection['designLevel']>('custom');
  const [timeline, setTimeline] = useState<QuoteSelection['timeline']>('standard');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'User Authentication',
    'Payment Gateway Integration',
    'Admin Dashboard',
  ]);

  const availableFeatures = [
    { id: 'User Authentication', label: 'User Auth & Role Control (OAuth/JWT)', cost: 400, weeks: 0.5 },
    { id: 'Payment Gateway Integration', label: 'Stripe / Credit Card & Subscriptions', cost: 600, weeks: 0.5 },
    { id: 'Admin Dashboard', label: 'Custom Admin Management Portal', cost: 800, weeks: 1 },
    { id: 'Real-Time Chat', label: 'Real-Time Chat & In-App Messaging', cost: 750, weeks: 1 },
    { id: 'Push Notifications', label: 'Cross-Platform Push Alerts', cost: 450, weeks: 0.5 },
    { id: 'IoT WebSockets', label: 'IoT Live Telemetry & WebSockets', cost: 1200, weeks: 1.5 },
    { id: 'AI Feature Integration', label: 'Gemini / AI Smart Feature Workflow', cost: 900, weeks: 1 },
    { id: 'Offline Sync & Cache', label: 'Offline SQLite & Local Data Storage', cost: 650, weeks: 0.5 },
  ];

  const toggleFeature = (featureId: string) => {
    if (selectedFeatures.includes(featureId)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== featureId));
    } else {
      setSelectedFeatures([...selectedFeatures, featureId]);
    }
  };

  // Calculate live estimate dynamically
  const calculation: EstimatedQuote = useMemo(() => {
    let baseMin = 2500;
    let baseMax = 3500;
    let weeksMin = 2;
    let weeksMax = 3;

    // Platform multipliers
    if (platform === 'web') {
      baseMin = 2500;
      baseMax = 4000;
      weeksMin = 2;
      weeksMax = 4;
    } else if (platform === 'mobile') {
      baseMin = 3500;
      baseMax = 5500;
      weeksMin = 3;
      weeksMax = 5;
    } else if (platform === 'both') {
      baseMin = 5000;
      baseMax = 8000;
      weeksMin = 4;
      weeksMax = 7;
    } else if (platform === 'iot_fullstack') {
      baseMin = 6500;
      baseMax = 11000;
      weeksMin = 5;
      weeksMax = 9;
    }

    // Scope multiplier
    if (scope === 'mvp') {
      baseMin *= 0.8;
      baseMax *= 0.85;
      weeksMin *= 0.8;
      weeksMax *= 0.85;
    } else if (scope === 'enterprise') {
      baseMin *= 1.6;
      baseMax *= 1.7;
      weeksMin *= 1.4;
      weeksMax *= 1.5;
    }

    // Design multiplier
    if (designLevel === 'premium_3d') {
      baseMin += 800;
      baseMax += 1500;
      weeksMin += 0.5;
      weeksMax += 1;
    }

    // Add selected features cost & timeline
    selectedFeatures.forEach((featId) => {
      const featObj = availableFeatures.find((f) => f.id === featId);
      if (featObj) {
        baseMin += featObj.cost;
        baseMax += featObj.cost * 1.25;
        weeksMin += featObj.weeks * 0.5;
        weeksMax += featObj.weeks;
      }
    });

    // Urgency timeline factor
    if (timeline === 'rush') {
      baseMin *= 1.2;
      baseMax *= 1.2;
      weeksMin *= 0.7;
      weeksMax *= 0.75;
    }

    return {
      minPrice: Math.round(baseMin / 100) * 100,
      maxPrice: Math.round(baseMax / 100) * 100,
      minWeeks: Math.max(1, Math.round(weeksMin)),
      maxWeeks: Math.max(2, Math.round(weeksMax)),
      summary: [
        `Target Platform: ${platform.toUpperCase()}`,
        `Project Scope: ${scope.toUpperCase()}`,
        `Selected Features: ${selectedFeatures.length} Modules`,
        `Turnaround: ~${Math.round(weeksMin)}-${Math.round(weeksMax)} Weeks`
      ]
    };
  }, [platform, scope, designLevel, timeline, selectedFeatures]);

  const handleSendSpec = () => {
    onSendEstimateToContact({
      platform,
      scope,
      features: selectedFeatures,
      priceRange: `$${calculation.minPrice.toLocaleString()} - $${calculation.maxPrice.toLocaleString()}`,
      weeksRange: `${calculation.minWeeks}-${calculation.maxWeeks} Weeks`,
    });
  };

  return (
    <section className="py-20 md:py-28 bg-[#0b0c13] relative border-t border-white/5" id="estimator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium">
            <Calculator className="w-3.5 h-3.5" />
            <span>TRANSPARENT PRICING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Instant Project Cost Estimator
          </h2>
          <p className="text-slate-400 text-base">
            Configure your app or website specifications below for an instant budget and timeline estimation. No hidden surprises.
          </p>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form Controls */}
          <div className="lg:col-span-7 bg-slate-900/80 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-8 shadow-2xl">
            
            {/* Step 1: Platform Selection */}
            <div>
              <label className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block mb-3">
                1. Select Platform & Target Devices
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'web', title: 'Web App', icon: Globe, sub: 'React / Next' },
                  { id: 'mobile', title: 'Mobile App', icon: Smartphone, sub: 'iOS & Android' },
                  { id: 'both', title: 'Unified Both', icon: Layers, sub: 'Web + Mobile' },
                  { id: 'iot_fullstack', title: 'IoT Platform', icon: Cpu, sub: 'Hardware + App' },
                ].map((item) => {
                  const Icon = item.icon;
                  const isSelected = platform === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setPlatform(item.id as any)}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-cyan-500/15 border-cyan-500 text-white shadow-lg shadow-cyan-950/40'
                          : 'bg-slate-950/60 border-white/10 text-slate-400 hover:border-white/20'
                      }`}
                    >
                      <Icon className={`w-5 h-5 mb-2 ${isSelected ? 'text-cyan-400' : 'text-slate-500'}`} />
                      <div>
                        <div className="text-xs font-bold text-white">{item.title}</div>
                        <div className="text-[10px] text-slate-400 font-mono mt-0.5">{item.sub}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Scope Level */}
            <div>
              <label className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block mb-3">
                2. Project Scale & Complexity
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'mvp', title: 'Rapid Startup MVP', desc: 'Core features only, speed to market' },
                  { id: 'standard', title: 'Standard Client App', desc: 'Full custom UI, API & launch prep' },
                  { id: 'enterprise', title: 'Enterprise Scale', desc: 'High concurrency, multi-tenant RBAC' },
                ].map((item) => {
                  const isSelected = scope === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setScope(item.id as any)}
                      className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-cyan-500/15 border-cyan-500 text-white shadow-lg'
                          : 'bg-slate-950/60 border-white/10 text-slate-400 hover:border-white/20'
                      }`}
                    >
                      <div className="text-sm font-bold text-white flex items-center justify-between">
                        <span>{item.title}</span>
                        {isSelected && <Check className="w-4 h-4 text-cyan-400" />}
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1">{item.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Feature Checkboxes */}
            <div>
              <label className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block mb-3">
                3. Choose Required Functional Modules
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {availableFeatures.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <div
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-3 rounded-xl border text-xs cursor-pointer transition-all flex items-center justify-between ${
                        isChecked
                          ? 'bg-slate-800 border-cyan-500/50 text-white'
                          : 'bg-slate-950/60 border-white/5 text-slate-400 hover:border-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center text-[10px] border ${
                            isChecked
                              ? 'bg-cyan-500 border-cyan-400 text-slate-950 font-bold'
                              : 'border-slate-700'
                          }`}
                        >
                          {isChecked && '✓'}
                        </div>
                        <span className="font-medium">{feat.label}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Urgency */}
            <div>
              <label className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block mb-3">
                4. Delivery Urgency
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'standard', label: 'Standard Sprint (Recommended)' },
                  { id: 'rush', label: 'Rush Sprint (+20% Speed Priority)' },
                  { id: 'flexible', label: 'Flexible Phase Delivery' },
                ].map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTimeline(t.id as any)}
                    className={`p-3 rounded-xl border text-center text-xs font-medium transition-all cursor-pointer ${
                      timeline === t.id
                        ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300'
                        : 'bg-slate-950/60 border-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Quote Summary Sticky Card */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-gradient-to-b from-slate-900 to-[#0c0e17] border border-cyan-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden space-y-6">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-lg font-bold text-white">Estimated Quote Summary</h3>
                </div>
                <span className="text-[10px] font-mono bg-cyan-950 text-cyan-400 px-2 py-0.5 rounded border border-cyan-500/30">
                  REAL-TIME CALCULATED
                </span>
              </div>

              {/* Price Range Output */}
              <div className="p-5 rounded-xl bg-slate-950/90 border border-white/10 text-center space-y-2">
                <span className="text-xs font-mono text-slate-400 uppercase">Estimated Budget Range</span>
                <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 font-tech">
                  ${calculation.minPrice.toLocaleString()} – ${calculation.maxPrice.toLocaleString()}
                </div>
                <div className="flex items-center justify-center gap-2 text-xs text-slate-300 font-mono pt-1">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Est. Turnaround: <strong className="text-white">{calculation.minWeeks} - {calculation.maxWeeks} Weeks</strong></span>
                </div>
              </div>

              {/* Summary Points */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-mono text-slate-400 uppercase">Selected Specification Breakdown:</h4>
                <div className="space-y-2 text-xs text-slate-300 bg-slate-950/50 p-4 rounded-xl border border-white/5">
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">Target Platform:</span>
                    <span className="font-bold text-white uppercase">{platform}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">Project Scale:</span>
                    <span className="font-bold text-white uppercase">{scope}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">Features Included:</span>
                    <span className="font-bold text-cyan-400">{selectedFeatures.length} Modules</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">Source Code:</span>
                    <span className="font-bold text-emerald-400">100% IP Transfer Included</span>
                  </div>
                </div>
              </div>

              {/* Guarantees */}
              <div className="space-y-2 pt-1 text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Fixed-price milestone contract (no scope creep fees)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Complimentary 30-day post-launch bug warranty</span>
                </div>
              </div>

              {/* Action Trigger */}
              <button
                onClick={handleSendSpec}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-bold text-sm py-3.5 rounded-xl shadow-xl shadow-cyan-500/25 transition-all hover:scale-[1.02] cursor-pointer"
                id="estimator-submit-btn"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Send Specification to Doodle IoT Studio</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
