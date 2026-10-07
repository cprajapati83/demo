import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Award,
  Truck,
  ExternalLink,
  X,
  Heart,
  Sparkles,
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { useGlobalTracking } from '../hooks/useGlobalTracking';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  // Execute global tracking
  useGlobalTracking();

  const [wmitModalOpen, setWmitModalOpen] = useState(false);

  useEffect(() => {
    // Intercept clicks on .wmit-popup-trigger
    const handleWmitClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('.wmit-popup-trigger');
      if (target) {
        e.preventDefault();
        setWmitModalOpen(true);
      }
    };
    document.addEventListener('click', handleWmitClick);
    return () => document.removeEventListener('click', handleWmitClick);
  }, []);

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Feature Highlights Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12 mb-12 border-b border-slate-800">
          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-800/50 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">100% Genuine Medicine</h4>
              <p className="text-xs text-slate-400">Direct from certified pharma brands</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-800/50 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Express 30-Min Delivery</h4>
              <p className="text-xs text-slate-400">Nalanda University & Bihar Sharif</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-800/50 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Licensed Pharmacists</h4>
              <p className="text-xs text-slate-400">Expert consultation & dosage guidance</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-slate-800/50 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Open 7 Days a Week</h4>
              <p className="text-xs text-slate-400">7:00 AM – 10:30 PM (Emergency 24/7)</p>
            </div>
          </div>
        </div>

        {/* 4 Column Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <BrandLogo variant="footer" />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Your most trusted neighborhood medical hall in Nalanda. Supplying genuine prescription medicines, healthcare devices, and surgical supplies with doorstep delivery.
            </p>
            <div className="pt-2">
              <p className="text-xs font-semibold text-white mb-2">Connect With Us:</p>
              <div className="flex items-center gap-3">
                <a
                  href={`https://wa.me/91${BUSINESS_CONFIG.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition text-xs font-semibold"
                  aria-label="WhatsApp"
                >
                  WA
                </a>
                <a
                  href={BUSINESS_CONFIG.socialLinks.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-sky-600 text-slate-300 hover:text-white flex items-center justify-center transition text-xs font-semibold"
                  aria-label="Google Maps Location"
                >
                  MAP
                </a>
                <a
                  href={`tel:${BUSINESS_CONFIG.phone.replace(/[^0-9]/g, '')}`}
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition text-xs font-semibold"
                  aria-label="Direct Phone"
                >
                  CALL
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-emerald-400 transition">
                  Home & Store Overview
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-emerald-400 transition">
                  About Our Pharmacy
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-emerald-400 transition">
                  Healthcare Services & Categories
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-slate-400 hover:text-emerald-400 transition">
                  Store Gallery & Shelves
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-emerald-400 transition">
                  Contact & Directions
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-slate-400 hover:text-emerald-400 transition">
                  Pharmacist / Patient Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Working Hours & Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Store Timings & Info
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-slate-200">Monday – Saturday</span>
                  <span className="text-slate-400">7:00 AM – 10:30 PM</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-slate-200">Sunday</span>
                  <span className="text-slate-400">7:30 AM – 10:00 PM</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-slate-200">Helpline / WhatsApp</span>
                  <a href={`tel:${BUSINESS_CONFIG.phone.replace(/[^0-9]/g, '')}`} className="text-emerald-400 hover:underline">
                    {BUSINESS_CONFIG.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-slate-200">Inquiry Email</span>
                  <span className="text-slate-400">{BUSINESS_CONFIG.email}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Address & Google Map link */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Store Location
            </h4>
            <div className="flex items-start gap-2.5 mb-3 text-xs sm:text-sm">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-slate-400 leading-relaxed">
                {BUSINESS_CONFIG.address.fullAddress}
              </p>
            </div>
            {/* Embedded Google Map Snippet */}
            <div className="rounded-xl overflow-hidden border border-slate-800 h-28 relative group">
              <iframe
                title="Your Medical Hall Location Map"
                src={BUSINESS_CONFIG.googleMapsEmbed}
                className="w-full h-full border-0 pointer-events-none opacity-80 group-hover:opacity-100 transition"
                loading="lazy"
              ></iframe>
              <a
                href={BUSINESS_CONFIG.socialLinks.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-slate-950/40 hover:bg-slate-950/20 flex items-center justify-center text-white text-xs font-semibold gap-1.5 transition"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Legal & Compliance Disclaimers */}
        <div className="pt-6 pb-6 border-t border-slate-800 text-[11px] text-slate-500 space-y-2">
          <p>
            <strong className="text-slate-400">Disclaimer:</strong> Information provided on this website is for general educational and inventory inquiry purposes only and does not substitute professional medical advice, diagnosis, or prescription from a registered medical practitioner. Scheduled drugs (Schedule H & H1) require a valid doctor's prescription.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
            <span>•</span>
            <span>Prescription Dispensing Policy</span>
            <span>•</span>
            <span>Drug License No. Verified</span>
          </div>
        </div>

        {/* MANDATORY COPYRIGHT LINE & WMIT POPUP TRIGGER (PRESERVE EXACTLY) */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3 text-center sm:text-left">
          <p>&copy; {new Date().getFullYear()} {BUSINESS_CONFIG.businessName}. All rights reserved.</p>

          {/* REQUIRED FOOTER POPUP TRIGGER — PRESERVE EXACTLY: */}
          <div className="my-1 sm:my-0">
            <a href="#" className="wmit-popup-trigger text-slate-400 hover:text-emerald-400 transition font-medium underline underline-offset-4">
              Developed by WMIT
            </a>
          </div>

          <p className="text-slate-500">Nalanda, Bihar 803111</p>
        </div>
      </div>

      {/* WMIT Interactive Information Popup Modal */}
      {wmitModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-xs p-4 animate-in fade-in"
        >
          <div className="w-full max-w-md rounded-2xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white p-6 shadow-2xl border border-slate-200 dark:border-slate-800 relative">
            <button
              onClick={() => setWmitModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Close WMIT modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-emerald-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
                W
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  WebMaker IT Solutions (WMIT)
                </h3>
                <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                  Verified Digital Engineering Partner
                </p>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              <p>
                This healthcare portal for <strong>{BUSINESS_CONFIG.businessName}</strong> was crafted with high-performance React architecture, PWA offline support, instant WhatsApp integration, and real-time medicine inventory stock checking.
              </p>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60 text-xs space-y-1">
                <div><span className="font-semibold">Technology:</span> React, Vite, Tailwind CSS, Service Workers PWA</div>
                <div><span className="font-semibold">Tracking System:</span> Integrated with WMIT CRM Analytics</div>
                <div><span className="font-semibold">Support Contact:</span> crm.webmakerit.com</div>
              </div>
            </div>

            <div className="mt-5 flex gap-2">
              <a
                href="https://crm.webmakerit.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition shadow-sm"
              >
                Visit WMIT Portal
              </a>
              <button
                onClick={() => setWmitModalOpen(false)}
                className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
