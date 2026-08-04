import React from 'react';
import logoImg from '../assets/doodle.png';

interface DoodleLogoProps {
  variant?: 'full' | 'icon' | 'stacked';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showText?: boolean;
}

export const DoodleLogo: React.FC<DoodleLogoProps> = ({
  variant = 'full',
  size = 'md',
  className = '',
  showText = true,
}) => {
  // Dimension scales
  const sizeMap = {
    sm: { iconWidth: 28, text: 'text-lg', space: 'gap-2' },
    md: { iconWidth: 36, text: 'text-xl', space: 'gap-2.5' },
    lg: { iconWidth: 48, text: 'text-2xl', space: 'gap-3' },
    xl: { iconWidth: 80, text: 'text-4xl', space: 'gap-4' },
  };

  const currentScale = sizeMap[size];

  const CloudMascotSVG = (
    <img
      src={logoImg}
      alt="Doodle IoT Logo"
      width={currentScale.iconWidth * 1.2}
      className="inline-block transition-transform duration-300 group-hover:scale-105"
      id="doodle-mascot-img"
    />
  );

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center group cursor-pointer ${className}`} id="doodle-logo-stacked">
        <div className="p-2 rounded-xl bg-gradient-to-b from-slate-900/90 to-black border border-white/10 shadow-lg shadow-black/50">
          {CloudMascotSVG}
        </div>
        {showText && (
          <div className="mt-2 text-center tracking-tight flex items-baseline justify-center">
            <span className="font-bold text-white tracking-tight font-tech text-2xl">Doodle</span>
            <span className="text-[10px] font-mono font-semibold text-cyan-400 uppercase tracking-widest ml-1 bg-cyan-950/80 px-1.5 py-0.5 rounded border border-cyan-500/30">IOT</span>
          </div>
        )}
      </div>
    );
  }

  if (variant === 'icon') {
    return (
      <div className={`inline-flex items-center justify-center group ${className}`} id="doodle-logo-icon">
        {CloudMascotSVG}
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center ${currentScale.space} group cursor-pointer ${className}`} id="doodle-logo-full">
      <div className="p-1.5 rounded-lg bg-slate-900/80 border border-white/10 shadow-md group-hover:border-cyan-500/40 transition-colors">
        {CloudMascotSVG}
      </div>
      {showText && (
        <div className="flex items-baseline tracking-tight font-tech">
          <span className={`font-bold text-white tracking-tight ${currentScale.text}`}>Doodle</span>
          <span className="text-[10px] sm:text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider ml-1 self-start mt-0.5">IOT</span>
        </div>
      )}
    </div>
  );
};
