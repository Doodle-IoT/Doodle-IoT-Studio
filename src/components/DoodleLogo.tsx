import React from 'react';
import logoImg from '../assets/doodle-mascot.png';

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
  // iconWidth is the mascot's rendered width: the asset is trimmed flush to the artwork.
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
      width={currentScale.iconWidth}
      className="inline-block drop-shadow-[0_3px_10px_rgba(0,0,0,0.55)] transition-transform duration-300 group-hover:scale-105"
      id="doodle-mascot-img"
    />
  );

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center group cursor-pointer ${className}`} id="doodle-logo-stacked">
        {CloudMascotSVG}
        {showText && (
          <div className="mt-2 text-center tracking-tight flex items-baseline justify-center font-tech">
            <span className="font-bold text-white tracking-tight text-2xl">Doodle</span>
            <span className="text-[10px] sm:text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider ml-1 self-start mt-0.5">IOT</span>
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
      {CloudMascotSVG}
      {showText && (
        <div className="flex items-baseline tracking-tight font-tech">
          <span className={`font-bold text-white tracking-tight ${currentScale.text}`}>Doodle</span>
          <span className="text-[10px] sm:text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider ml-1 self-start mt-0.5">IOT</span>
        </div>
      )}
    </div>
  );
};
