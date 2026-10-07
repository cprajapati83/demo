import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import {
  Phone,
  MessageCircle,
  MapPin,
  ShieldCheck,
  Truck,
  Clock,
  Award,
  ChevronRight,
  ArrowRight,
  Search,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  HeartPulse,
  Pill,
  Thermometer,
  Baby,
  Stethoscope,
  Star,
  Activity,
  Send,
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { SEOHead } from '../components/SEOHead';
import { TypewriterText } from '../components/TypewriterText';

interface HomeProps {
  onOpenWhatsAppModal?: (medicineName?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenWhatsAppModal }) => {
  const outletCtx = useOutletContext<{ onOpenWhatsAppModal?: (medicineName?: string) => void }>();
  const openModal = onOpenWhatsAppModal || outletCtx?.onOpenWhatsAppModal || (() => {});
  const [quickSearch, setQuickSearch] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  // Dynamic engaging second part phrases
  const engagingHeroEndings = [
    'Genuine Medicines',
    'Daily Healthcare Needs',
    'Doctor Prescriptions (Rx)',
    '30-Min Express Delivery',
    'Clinical Health Devices',
    'Baby & Family Wellness',
  ];

  // Top 6 Featured Services Preview
  const featuredServices = [
    {
      title: 'Prescription Medicines',
      desc: '100% genuine, batch-verified allopathic medicines from top pharma brands.',
      icon: Pill,
      badge: 'Genuine RX',
      color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400',
    },
    {
      title: 'OTC & First Aid',
      desc: 'Pain relievers, antacids, antiseptics, and everyday health essentials.',
      icon: HeartPulse,
      badge: 'Quick Relief',
      color: 'bg-sky-50 text-sky-600 dark:bg-sky-950/50 dark:text-sky-400',
    },
    {
      title: 'Health Diagnostics & Devices',
      desc: 'Digital BP monitors, glucometers, nebulizers, pulse oximeters, and test strips.',
      icon: Activity,
      badge: 'Precision',
      color: 'bg-purple-50 text-purple-600 dark:bg-purple-950/50 dark:text-purple-400',
    },
    {
      title: 'Baby & Mother Care',
      desc: 'Clinically proven infant formulas, diapers, dermatological oils, and lotions.',
      icon: Baby,
      badge: 'Gentle Care',
      color: 'bg-rose-50 text-rose-600 dark:bg-rose-950/50 dark:text-rose-400',
    },
    {
      title: 'Surgical & Wound Care',
      desc: 'Sterile cotton bandages, gauze dressings, syringes, and clinical disposables.',
      icon: Stethoscope,
      badge: 'Sterile',
      color: 'bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400',
    },
    {
      title: 'Supplements & Immunity',
      desc: 'Multivitamins, Calcium + D3, Omega-3, protein powders, and herbal tonics.',
      icon: Thermometer,
      badge: 'Vitality',
      color: 'bg-teal-50 text-teal-600 dark:bg-teal-950/50 dark:text-teal-400',
    },
  ];

  // Featured Products preview
  const featuredProducts = [
    {
      name: 'Augmentin 625 Duo Tablet',
      desc: 'Amoxicillin + Clavulanic Acid (GSK)',
      price: '₹182.00',
      mrp: '₹204.50',
      tag: 'Antibiotic Rx',
      category: 'Prescription',
    },
    {
      name: 'Omron HEM-7120 Digital BP Monitor',
      desc: 'Automatic upper arm monitor with IntelliSense',
      price: '₹1,999.00',
      mrp: '₹2,490.00',
      tag: 'Top Rated',
      category: 'Health Device',
    },
    {
      name: 'Accu-Chek Active 50 Test Strips',
      desc: 'Precision blood glucose monitoring strips',
      price: '₹920.00',
      mrp: '₹1,050.00',
      tag: 'Diabetic Care',
      category: 'Diagnostics',
    },
    {
      name: 'Dolo 650 Tablet (Strip of 15)',
      desc: 'Paracetamol 650mg for fever & relief',
      price: '₹30.00',
      mrp: '₹34.00',
      tag: 'OTC Essential',
      category: 'Daily Care',
    },
  ];

  // Customer Reviews Preview
  const reviewPreviews = [
    {
      name: 'Prof. S. K. Jha',
      role: 'Faculty, Nalanda University Area',
      comment:
        'Your Medical Hall is a lifesaver. Always stocks original medicines, and the pharmacist verifies dosage carefully. They delivered my father’s cardiac medicines in under 30 minutes.',
      rating: 5,
    },
    {
      name: 'Pooja Verma',
      role: 'Resident, Mohanpur Bihar Sharif',
      comment:
        'Very polite staff and genuine medicines with batch numbers on the bill. Sending prescription via WhatsApp is so simple and fast.',
      rating: 5,
    },
    {
      name: 'Dr. Amit Sinha',
      role: 'Local Medical Practitioner',
      comment:
        'Consistently maintains cold-chain storage for vaccines and insulins. High standards of pharmacy practice in Bihar Sharif.',
      rating: 5,
    },
  ];

  // FAQ preview
  const faqPreviews = [
    {
      q: 'Do you deliver medicines to Nalanda University & surrounding areas?',
      a: 'Yes, we provide 30-45 minute express doorstep delivery across Site Road Mohanpur, Nalanda University campus area, and all neighborhoods of Bihar Sharif.',
    },
    {
      q: 'How can I order prescription medicines via WhatsApp?',
      a: 'Simply click "WhatsApp Order", attach a clear photo of your doctor\'s prescription, provide your address, and our registered pharmacist will verify and confirm your order promptly.',
    },
    {
      q: 'Are all medicines 100% genuine and batch-verified?',
      a: 'Absolutely. We source all pharmaceutical stock directly from authorized distributors and top manufacturers (Cipla, Sun Pharma, Abbott, GSK, etc.) with computer-generated GST tax invoices.',
    },
  ];

  // Health Tips preview
  const healthTips = [
    {
      title: 'Safe Storage of Insulin & Vaccines',
      snippet: 'Always store unopened insulin cartridges in refrigeration between 2°C to 8°C. Never freeze.',
      readTime: '2 min read',
      date: 'Healthcare Guideline',
    },
    {
      title: 'Managing Blood Pressure Naturally',
      snippet: 'Maintain regular BP logging at the same hour each day and keep dietary sodium under 2,000 mg.',
      readTime: '3 min read',
      date: 'Wellness Note',
    },
  ];

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubmitted(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSubmitted(false), 4000);
    }
  };

  return (
    <div className="w-full">
      <SEOHead
        title="Home - Trusted Medical Store & Pharmacy"
        description={BUSINESS_CONFIG.description}
      />

      {/* HERO BANNER SECTION (SPLIT 2-COLUMN WITH TYPING ANIMATION & ANIMATED IMAGE) */}
      <section className="relative min-h-[640px] lg:min-h-[700px] flex items-center bg-slate-900 overflow-hidden py-16 lg:py-24">
        {/* Background ambient lighting */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1600&q=80"
            alt="Pharmacy Healthcare Store"
            className="w-full h-full object-cover object-center opacity-15 filter brightness-75"
            loading="eager"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/90"></div>
          {/* Subtle colored glow rings */}
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-600/15 rounded-full blur-3xl pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* PART 1: LEFT SIDE (TYPING ANIMATION TITLE & CONTENT) */}
            <div className="lg:col-span-7 text-left space-y-6">
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Serving Nalanda University & Bihar Sharif • Open 7 AM – 10:30 PM</span>
              </div>

              {/* Main Headline with Static First Part & Engaging Animated Second Part */}
              <div className="min-h-[110px] sm:min-h-[130px] lg:min-h-[150px] flex items-center">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight sm:leading-tight">
                  <span className="text-white block sm:inline">
                    Your Trusted Medical Store for{' '}
                  </span>
                  <span className="inline-block mt-1 sm:mt-0 px-2.5 py-1 rounded-2xl bg-emerald-500/15 border border-emerald-400/40 backdrop-blur-md shadow-inner shadow-emerald-500/10">
                    <TypewriterText
                      phrases={engagingHeroEndings}
                      typingSpeed={50}
                      deletingSpeed={25}
                      pauseDuration={2000}
                      className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-sky-300 font-black drop-shadow-xs"
                      cursorClassName="bg-emerald-300"
                    />
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
                Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care and daily medical essentials at affordable prices.
              </p>

              {/* Action Buttons: WhatsApp Order, Call Now, Get Directions */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5 sm:gap-4">
                <button
                  onClick={() => openModal()}
                  className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-600/30 transition transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>WhatsApp Order</span>
                </button>

                <a
                  href={`tel:${BUSINESS_CONFIG.phone.replace(/[^0-9]/g, '')}`}
                  className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base backdrop-blur-md border border-white/20 transition"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Call Now</span>
                </a>

                <a
                  href={BUSINESS_CONFIG.socialLinks.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-sky-600/80 hover:bg-sky-600 text-white font-semibold text-sm sm:text-base transition"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Live Trust Badges Strip */}
              <div className="pt-6 border-t border-slate-800 grid grid-cols-3 gap-4 text-slate-300 max-w-xl">
                <div>
                  <p className="text-xl sm:text-2xl font-black text-white">{BUSINESS_CONFIG.stats.yearsOfService}</p>
                  <p className="text-[11px] sm:text-xs text-slate-400">Years of Service</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-white">{BUSINESS_CONFIG.stats.medicinesStocked}</p>
                  <p className="text-[11px] sm:text-xs text-slate-400">Genuine Medicines</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-emerald-400">{BUSINESS_CONFIG.stats.deliveryAvgTime}</p>
                  <p className="text-[11px] sm:text-xs text-slate-400">Express Delivery</p>
                </div>
              </div>
            </div>

            {/* PART 2: RIGHT SIDE (ANIMATED PHARMACY IMAGE & FLOATING CARDS) */}
            <div className="lg:col-span-5 relative flex items-center justify-center pt-6 lg:pt-0">
              {/* Pulsing ambient aura behind image */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-600/30 via-teal-500/20 to-sky-500/30 rounded-3xl blur-2xl animate-pulse-glow"></div>

              {/* Main Animated Image Container */}
              <div className="relative w-full max-w-md rounded-3xl overflow-hidden border-2 border-slate-700/60 shadow-2xl bg-slate-800/80 backdrop-blur-md animate-float-slow group">
                <img
                  src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=900&q=80"
                  alt="Your Medical Hall pharmacy store and genuine medicines"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=900&q=80';
                  }}
                />
                
                {/* Subtle gradient vignette over image */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20 pointer-events-none"></div>

                {/* Bottom caption bar */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-slate-700/60 flex items-center justify-between text-white text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                    <span className="font-semibold">{BUSINESS_CONFIG.businessName}</span>
                  </div>
                  <span className="text-[11px] text-emerald-400 font-bold">Nalanda Pharmacy</span>
                </div>
              </div>

              {/* Floating Badge 1: Top Right (Express Delivery) */}
              <div className="absolute -top-4 -right-2 sm:-right-4 p-3.5 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-xl border border-slate-200 dark:border-slate-700 animate-float flex items-center gap-3 z-20">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1">
                    <span>30-Min Delivery</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  </p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">Direct to Home in Nalanda</p>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Left (100% Genuine Medicine) */}
              <div className="absolute -bottom-5 -left-2 sm:-left-6 p-3.5 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-xl border border-slate-200 dark:border-slate-700 animate-float-reverse flex items-center gap-3 z-20">
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">100% Genuine Rx</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">Batch & Expiry Verified</p>
                </div>
              </div>

              {/* Floating Badge 3: Right Center (Cold Chain 2-8°C) */}
              <div className="hidden sm:flex absolute top-1/2 -right-6 -translate-y-1/2 p-2.5 rounded-xl bg-slate-950/90 text-white backdrop-blur-md shadow-lg border border-slate-700/80 animate-float flex-col items-center gap-1 text-center z-20">
                <Thermometer className="w-4 h-4 text-sky-400" />
                <span className="text-[10px] font-black leading-none text-sky-300">2°C – 8°C</span>
                <span className="text-[9px] text-slate-400 leading-none">Cold-Chain</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* QUICK INVENTORY SEARCH PREVIEW STRIP */}
      <section className="bg-emerald-800 text-white py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
              <Search className="w-5 h-5 text-emerald-200" />
            </div>
            <div>
              <h3 className="text-base font-bold">Check Medicine Availability Online</h3>
              <p className="text-xs text-emerald-100">Live search our Nalanda store inventory with MRP & stock status</p>
            </div>
          </div>

          <Link
            to="/services"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-emerald-800 hover:bg-emerald-50 font-bold text-xs sm:text-sm shadow-md transition"
          >
            <span>Open Medicine Stock Checker</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* SHORT ABOUT PREVIEW */}
      <section className="py-16 sm:py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Image Collage */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=800&q=80"
                  alt="Your Medical Hall pharmacy shelves"
                  className="w-full h-80 sm:h-96 object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80';
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 sm:bottom-6 sm:-right-6 bg-emerald-600 text-white p-5 rounded-2xl shadow-xl max-w-xs hidden sm:block">
                <Award className="w-8 h-8 mb-2 text-emerald-200" />
                <p className="font-bold text-sm">Certified Retail Drug License</p>
                <p className="text-xs text-emerald-100 mt-1">Dispensing strictly adhering to Pharmacy Act regulations.</p>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
                Store Overview
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Your Health Is Our Sacred Duty at Nalanda
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Founded with a mission to bring world-class pharmaceutical integrity to Bihar Sharif and the Nalanda University academic community, <strong>{BUSINESS_CONFIG.businessName}</strong> guarantees 100% genuine medicines, stringent temperature-controlled storage, and licensed clinical dispensing.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                    Direct Company Sourcing
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                    Cold-Chain Storage (2-8°C)
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                    Transparent Computerized Bills
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                    30-Minute Local Dispatch
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold transition shadow-sm"
                >
                  <span>Read Full About Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES (MAXIMUM 6 PREVIEW) */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                Comprehensive Healthcare
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
                Featured Medical Services
              </h2>
            </div>
            <Link
              to="/services"
              className="mt-4 sm:mt-0 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 hover:underline"
            >
              <span>View All 8+ Categories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md transition group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.color}`}>
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <button
                      onClick={() => openModal(service.title)}
                      className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 flex items-center gap-1"
                    >
                      <span>Inquire Category on WhatsApp</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-16 sm:py-20 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
              Uncompromising Standards
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
              Why Nalanda Trusts Your Medical Hall
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
              We understand that medicines are life-critical. Here is why thousands of families and university students rely on our pharmacy every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-lg mb-4">
                01
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">100% Genuine Guarantee</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Zero counterfeit tolerance. Every batch is trackable with official manufacturing and expiry dates.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
              <div className="w-12 h-12 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold text-lg mb-4">
                02
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Continuous Cold Chain</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Dedicated temperature backup for insulin, eye drops, biologicals, and pediatric suspensions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-lg mb-4">
                03
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Qualified Pharmacists</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Get clear instructions on dosage timing, drug interactions, and dietary precautions before taking any pill.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
              <div className="w-12 h-12 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold text-lg mb-4">
                04
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Affordable & Fair Prices</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Special savings on chronic medications, quality generic equivalents, and diagnostic strip bundles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS PREVIEW */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                Daily Medical Essentials
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
                Featured Products & Devices
              </h2>
            </div>
            <Link
              to="/services"
              className="mt-3 sm:mt-0 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              <span>Explore Inventory Checker</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredProducts.map((prod, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-semibold text-slate-400">{prod.category}</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-bold text-[10px]">
                      {prod.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white">{prod.name}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{prod.desc}</p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-base font-extrabold text-emerald-600 dark:text-emerald-400">
                      {prod.price}
                    </span>
                    <span className="text-xs text-slate-400 line-through ml-1.5">{prod.mrp}</span>
                  </div>

                  <button
                    onClick={() => openModal(prod.name)}
                    className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition active:scale-95"
                    aria-label={`Order ${prod.name} on WhatsApp`}
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS PREVIEW */}
      <section className="py-16 sm:py-20 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
              Verified Feedback
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
              Loved by the Nalanda Community
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviewPreviews.map((rev, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
                    "{rev.comment}"
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-200/60 dark:border-slate-700/60">
                  <p className="font-bold text-sm text-slate-900 dark:text-white">{rev.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{rev.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
              Common Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqPreviews.map((faq, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs"
              >
                <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-start gap-2.5">
                  <HelpCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="mt-2 ml-7 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              <span>Have a different question? Contact our pharmacist counter</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* LATEST HEALTH TIPS PREVIEW */}
      <section className="py-16 sm:py-20 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                Pharmacist Insights
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                Latest Health & Medication Tips
              </h2>
            </div>
            <Link
              to="/about"
              className="mt-3 sm:mt-0 text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
            >
              <span>Learn More About Our Protocols</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {healthTips.map((tip, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-semibold mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{tip.date}</span>
                    <span>•</span>
                    <span className="text-slate-400">{tip.readTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">{tip.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {tip.snippet}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA & NEWSLETTER PREVIEW */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-emerald-700 via-teal-700 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Need Medicines Urgently Delivered in Nalanda?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-emerald-100 max-w-2xl mx-auto leading-relaxed">
            Send your prescription via WhatsApp or call us directly. Our delivery executive will bring genuine, sealed medicines right to your doorstep.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openModal()}
              className="px-6 py-3.5 rounded-xl bg-white text-emerald-900 hover:bg-emerald-50 font-extrabold text-sm sm:text-base shadow-xl transition active:scale-95"
            >
              Order on WhatsApp Now
            </button>
            <a
              href={`tel:${BUSINESS_CONFIG.phone.replace(/[^0-9]/g, '')}`}
              className="px-6 py-3.5 rounded-xl bg-emerald-900/60 hover:bg-emerald-900 text-white font-semibold text-sm sm:text-base border border-emerald-400/40 backdrop-blur-md transition"
            >
              Call Helpline: {BUSINESS_CONFIG.phone}
            </a>
          </div>

          {/* Newsletter Box */}
          <div className="mt-12 pt-8 border-t border-emerald-600/50 max-w-md mx-auto">
            <p className="text-xs font-semibold text-emerald-200 mb-3">
              Subscribe for Seasonal Health Alerts & Medication Refill Reminders
            </p>
            {newsletterSubmitted ? (
              <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-200 text-xs font-semibold">
                Thank you! You are now subscribed to health alerts.
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-white/10 border border-white/20 text-white placeholder:text-emerald-200/70 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs sm:text-sm transition flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Join</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
