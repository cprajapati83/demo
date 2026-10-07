import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp, ShoppingBag } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';

interface FloatingActionsProps {
  onOpenWhatsAppModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  onOpenWhatsAppModal,
}) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Buttons Stack (Bottom Right) */}
      <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 select-none">
        {/* Back To Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="w-11 h-11 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 shadow-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-all hover:scale-105 active:scale-95"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Floating Call Button */}
        <a
          href={`tel:${BUSINESS_CONFIG.phone.replace(/[^0-9]/g, '')}`}
          aria-label="Call Your Medical Hall directly"
          className="w-12 h-12 rounded-full bg-sky-600 hover:bg-sky-700 text-white shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 group relative"
        >
          <Phone className="w-5 h-5" />
          <span className="sr-only">Call Store</span>
          {/* Tooltip on hover */}
          <span className="hidden sm:group-hover:block absolute right-14 bg-slate-900 text-white text-xs py-1 px-2.5 rounded-lg whitespace-nowrap shadow-md pointer-events-none">
            Call: {BUSINESS_CONFIG.phone}
          </span>
        </a>

        {/* Floating WhatsApp Button */}
        <button
          onClick={onOpenWhatsAppModal}
          aria-label="Open WhatsApp Medicine Order"
          className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 group relative"
        >
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400"></span>
          </span>
          <MessageCircle className="w-7 h-7 fill-white" />
          {/* Tooltip on hover */}
          <span className="hidden sm:group-hover:block absolute right-16 bg-slate-900 text-white text-xs py-1.5 px-3 rounded-lg whitespace-nowrap shadow-md pointer-events-none font-medium">
            Order Medicines via WhatsApp
          </span>
        </button>
      </div>

      {/* Mobile Bottom Sticky CTA Ribbon */}
      <div className="fixed bottom-0 left-0 right-0 z-30 sm:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 p-2.5 flex items-center gap-2">
        <a
          href={`tel:${BUSINESS_CONFIG.phone.replace(/[^0-9]/g, '')}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-xs font-semibold"
        >
          <Phone className="w-3.5 h-3.5 text-sky-600" />
          <span>Call Store</span>
        </a>

        <button
          onClick={onOpenWhatsAppModal}
          className="flex-2 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 text-white text-xs font-semibold shadow-xs active:scale-95"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-white" />
          <span>WhatsApp Order</span>
        </button>
      </div>
    </>
  );
};
