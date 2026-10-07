import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'header' | 'footer' | 'compact';
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'header',
  showSubtitle = true,
}) => {
  const isFooter = variant === 'footer';

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3.5 select-none ${className}`}>
      {/* Uploaded Pin / Teardrop Logo Emblem */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className={
            variant === 'compact'
              ? 'w-8 h-8'
              : variant === 'footer'
              ? 'w-10 h-10 sm:w-12 sm:h-12'
              : 'w-10 h-10 sm:w-12 sm:h-12'
          }
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoCrimsonExact" x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#7a142c" />
              <stop offset="35%" stopColor="#931635" />
              <stop offset="70%" stopColor="#aa183c" />
              <stop offset="100%" stopColor="#bf1b42" />
            </linearGradient>
            <linearGradient id="logoOrangeExact" x1="0%" y1="15%" x2="100%" y2="85%">
              <stop offset="0%" stopColor="#aa183c" />
              <stop offset="25%" stopColor="#c83f12" />
              <stop offset="60%" stopColor="#ea580c" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
            <filter id="logoExactShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.2" />
            </filter>
          </defs>

          <g filter="url(#logoExactShadow)" transform="translate(4, 4) scale(0.92)">
            {/* Outer Orange Crescent */}
            <path
              d="M50 7 C75 7, 95 27, 95 53 C95 73, 79 89, 58 94 C44 97, 28 94, 17 89 C14 87, 15 83, 18 82 C22 81, 26 83, 31 85 C43 90, 60 88, 71 79 C83 68, 86 51, 80 36 C74 20, 58 13, 42 14 C33 14, 25 18, 21 22 C29 11, 39 7, 50 7 Z"
              fill="url(#logoOrangeExact)"
            />

            {/* Main Crimson Pin Body */}
            <path
              d="M48 10 C69 10, 83 25, 83 46 C83 64, 68 80, 49 84 C32 87, 17 79, 11 68 C5 56, 7 38, 16 26 C23 16, 35 10, 48 10 Z"
              fill="url(#logoCrimsonExact)"
            />

            {/* Clean White Ring Aperture */}
            <circle cx="48" cy="46" r="24" fill="#ffffff" />

            {/* Inner Crimson Hub */}
            <circle cx="48" cy="46" r="14" fill="url(#logoCrimsonExact)" />

            {/* Bottom Point Accent */}
            <path
              d="M19 66 C15 74, 11 84, 13 90 C15 92, 24 89, 31 83 C27 82, 22 76, 19 66 Z"
              fill="#ea580c"
            />
          </g>
        </svg>
      </div>

      {/* Exact Typography: COMPANY / Your Logo Here */}
      <div className="flex flex-col justify-center leading-none">
        <span
          className={`font-black tracking-tight ${
            variant === 'compact'
              ? 'text-lg sm:text-xl'
              : variant === 'footer'
              ? 'text-xl sm:text-2xl text-white'
              : 'text-xl sm:text-2xl text-slate-900 dark:text-white'
          }`}
          style={{ letterSpacing: '-0.02em' }}
        >
          COMPANY
        </span>

        {showSubtitle && (
          <span
            className={`font-light tracking-wide mt-0.5 ${
              variant === 'compact'
                ? 'text-[10px]'
                : variant === 'footer'
                ? 'text-xs text-slate-300'
                : 'text-xs text-slate-500 dark:text-slate-400'
            }`}
            style={{ letterSpacing: '0.04em' }}
          >
            Your Logo Here
          </span>
        )}
      </div>
    </div>
  );
};

export default BrandLogo;
