import React, { useState } from 'react';
import {
  X,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  Filter,
  Eye,
  Camera,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { BUSINESS_CONFIG } from '../config/businessConfig';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  desc: string;
}

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Store Front View & Nalanda Access',
      category: 'Front View',
      image:
        'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1000&q=80',
      desc: 'Our welcoming storefront on Site Road Mohanpur, right opposite Nalanda University campus gates.',
    },
    {
      id: 2,
      title: 'Organized Prescription Medicine Shelves',
      category: 'Medicine Shelves',
      image:
        'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=1000&q=80',
      desc: 'Alphabetically indexed, dust-protected medicine bays categorized by therapeutic specialty for quick retrieval.',
    },
    {
      id: 3,
      title: 'Main Dispensing & Pharmacist Counseling Counter',
      category: 'Interior',
      image:
        'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1000&q=80',
      desc: 'Clean, open patient interaction counter where licensed dispensers explain prescription dosages in detail.',
    },
    {
      id: 4,
      title: 'Health Diagnostics & Vital Devices Section',
      category: 'Equipment',
      image:
        'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80',
      desc: 'Demonstration and sales counter for Omron BP monitors, Accu-Chek glucometers, nebulizers, and pulse oximeters.',
    },
    {
      id: 5,
      title: 'Cold-Chain Refrigerated Drug Storage',
      category: 'Interior',
      image:
        'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80',
      desc: 'Medical refrigeration maintained strictly between 2°C and 8°C for insulins, vaccines, and biologics.',
    },
    {
      id: 6,
      title: 'Baby Care & Infant Nutritional Aisle',
      category: 'Products',
      image:
        'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1000&q=80',
      desc: 'Complete selection of baby foods, dermatological baby soaps, oils, feeding essentials, and diaper brands.',
    },
    {
      id: 7,
      title: 'Nutritional Supplements & Daily Wellness Vitamins',
      category: 'Products',
      image:
        'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=1000&q=80',
      desc: 'Authorized stock of micronutrients, calcium, omega-3 supplements, protein formulas, and Ayurvedic tonics.',
    },
    {
      id: 8,
      title: 'Surgical & Sterile Wound Dressing Inventory',
      category: 'Equipment',
      image:
        'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1000&q=80',
      desc: 'Sealed clinical cotton, bandages, IV sets, syringes, orthopedic belts, and post-operative home recovery kits.',
    },
  ];

  const categories = ['All', 'Front View', 'Interior', 'Medicine Shelves', 'Products', 'Equipment'];

  const filteredItems =
    selectedCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => ((prev! + 1) % filteredItems.length));
    }
  };

  const prevLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => (prev! === 0 ? filteredItems.length - 1 : prev! - 1));
    }
  };

  return (
    <div className="w-full py-12 sm:py-16 bg-slate-50 dark:bg-slate-950">
      <SEOHead
        title="Store Gallery - Photos of Premises & Shelves"
        description="View photos of Your Medical Hall store premises, clean medicine shelves, cold-chain refrigeration, and diagnostic display in Nalanda."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
            Visual Tour
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Store Gallery & Facilities
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Take a look inside <strong>{BUSINESS_CONFIG.businessName}</strong>. Witness our hygiene protocols, organized medicine storage, and modern healthcare facilities.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1000&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-md transform scale-75 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-5 h-5 text-emerald-600" />
                  </div>
                </div>
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold">
                  {item.category}
                </span>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                  <span>Click to Zoom</span>
                  <Eye className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Location Caption Banner */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Visit In Person</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {BUSINESS_CONFIG.address.fullAddress}
              </p>
            </div>
          </div>
          <a
            href={BUSINESS_CONFIG.socialLinks.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-semibold hover:bg-slate-800 transition"
          >
            Get GPS Directions
          </a>
        </div>
      </div>

      {/* POPUP LIGHTBOX ZOOM MODAL */}
      {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 animate-in fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800 text-white">
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  {filteredItems[activeLightboxIndex].category}
                </span>
                <h3 className="text-base font-bold">
                  {filteredItems[activeLightboxIndex].title}
                </h3>
              </div>
              <button
                onClick={closeLightbox}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Image View */}
            <div className="relative aspect-16/10 bg-black flex items-center justify-center overflow-hidden">
              <img
                src={filteredItems[activeLightboxIndex].image}
                alt={filteredItems[activeLightboxIndex].title}
                className="max-h-[65vh] w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1000&q=80';
                }}
              />

              {/* Prev & Next Controls */}
              <button
                onClick={prevLightbox}
                className="absolute left-4 p-2.5 rounded-full bg-slate-900/80 hover:bg-emerald-600 text-white transition backdrop-blur-xs shadow-lg"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextLightbox}
                className="absolute right-4 p-2.5 rounded-full bg-slate-900/80 hover:bg-emerald-600 text-white transition backdrop-blur-xs shadow-lg"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Caption & Counter */}
            <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <p className="max-w-xl text-slate-300">
                {filteredItems[activeLightboxIndex].desc}
              </p>
              <span className="font-semibold text-slate-500">
                {activeLightboxIndex + 1} of {filteredItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
