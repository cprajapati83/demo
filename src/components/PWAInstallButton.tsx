import React, { useState } from 'react';
import { Smartphone, Download, Share, PlusSquare, X, CheckCircle2 } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface PWAInstallButtonProps {
  className?: string;
  variant?: 'nav' | 'banner' | 'floating';
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({
  className = '',
  variant = 'nav',
}) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [installedSuccess, setInstalledSuccess] = useState(false);

  // If already running in standalone mode, do not show install prompt
  if (isInstalled) {
    return null;
  }

  const handleInstallClick = async () => {
    if (isIOS) {
      setShowIOSGuide(true);
      return;
    }

    if (isInstallable) {
      const success = await install();
      if (success) {
        setInstalledSuccess(true);
        setTimeout(() => setInstalledSuccess(false), 4000);
      }
    } else {
      // Browser doesn't support beforeinstallprompt yet (or desktop Firefox/Safari)
      setShowIOSGuide(true);
    }
  };

  if (installedSuccess) {
    return (
      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
        <span>App Installed!</span>
      </div>
    );
  }

  return (
    <>
      <button
        onClick={handleInstallClick}
        type="button"
        aria-label="Add Your Medical Hall to Home Screen"
        className={
          variant === 'banner'
            ? `flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm shadow-md transition-all active:scale-95 ${className}`
            : `inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-xs sm:text-sm font-semibold transition-all active:scale-95 shadow-sm ${className}`
        }
      >
        <span className="text-base" role="img" aria-hidden="true">📲</span>
        <span>Add to Home</span>
      </button>

      {/* iOS & Universal Install Instruction Modal */}
      {showIOSGuide && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 backdrop-blur-xs p-4 animate-in fade-in"
        >
          <div className="w-full max-w-md rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-2xl border border-slate-200 dark:border-slate-800">
            <div className="flex items-start justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
                  +
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    Add to Home Screen
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Install Your Medical Hall as a fast mobile app
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 space-y-3.5 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 flex items-center justify-center shrink-0 font-bold text-xs">
                  1
                </div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">
                    Tap the Share button
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    In Safari toolbar at the bottom or top of your screen (<Share className="w-3.5 h-3.5 inline mx-0.5 text-emerald-600" />)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 flex items-center justify-center shrink-0 font-bold text-xs">
                  2
                </div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">
                    Select "Add to Home Screen"
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Scroll down in the share menu until you find (<PlusSquare className="w-3.5 h-3.5 inline mx-0.5 text-emerald-600" /> Add to Home Screen)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 flex items-center justify-center shrink-0 font-bold text-xs">
                  3
                </div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">
                    Tap "Add"
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    The app icon will immediately appear on your smartphone Home Screen with instant access!
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowIOSGuide(false)}
              className="mt-5 w-full py-2.5 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-sm font-semibold hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors shadow-sm"
            >
              Got it, Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
