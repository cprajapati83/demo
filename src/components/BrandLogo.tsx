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
    <div
      className={`flex items-center gap-2.5 sm:gap-3.5 select-none ${className}`}
    >
      {/* Logo Image */}
      <div className="relative shrink-0 flex items-center justify-center">
        <img
          src="/logo.png"
          alt="Your Medical Hall"
          className={
            variant === 'compact'
              ? 'w-8 h-8 object-contain'
              : variant === 'footer'
              ? 'w-10 h-10 sm:w-12 sm:h-12 object-contain'
              : 'w-10 h-10 sm:w-12 sm:h-12 object-contain'
          }
        />
      </div>

      {/* Brand Typography */}
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
          Your Medical Hall
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
            Pharmacy & Healthcare
          </span>
        )}
      </div>
    </div>
  );
};

export default BrandLogo;
