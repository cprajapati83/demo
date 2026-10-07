import React from 'react';
import {
  ShieldCheck,
  Award,
  HeartHandshake,
  Target,
  Eye,
  CheckCircle2,
  Clock,
  Sparkles,
  MapPin,
  Calendar,
  Building,
  Quote,
  Pill,
  Users,
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { SEOHead } from '../components/SEOHead';

export const About: React.FC = () => {
  const milestones = [
    {
      year: '2014',
      title: 'Humble Beginnings in Bihar Sharif',
      desc: 'Founded as a reliable neighborhood chemist counter with an unwavering commitment to genuine medicines and fair pricing.',
    },
    {
      year: '2018',
      title: 'Expansion to Nalanda University Corridor',
      desc: 'Opened modern facility on Site Road Mohanpur to cater to students, faculty, and surrounding rural communities with round-the-clock availability.',
    },
    {
      year: '2021',
      title: 'Digital & Cold-Chain Modernization',
      desc: 'Introduced medical-grade refrigeration units with 24/7 power backup for temperature-sensitive insulins, serums, and vaccines.',
    },
    {
      year: '2024',
      title: 'Express Doorstep WhatsApp Delivery',
      desc: 'Launched digital medicine order network delivering within 30 minutes across the Nalanda and Bihar Sharif municipal zones.',
    },
  ];

  const coreValues = [
    {
      title: '100% Authenticity',
      desc: 'We purchase exclusively from accredited pharmaceutical distributors with verifiable batch certificates.',
      icon: ShieldCheck,
    },
    {
      title: 'Patient-First Ethics',
      desc: 'Patient well-being always supersedes sales. We counsel patients on affordable, high-efficacy alternatives when needed.',
      icon: HeartHandshake,
    },
    {
      title: 'Strict Quality Storage',
      desc: 'Dust-free, humidity-controlled, and temperature-monitored shelving keeps medicine potencies completely intact.',
      icon: Pill,
    },
    {
      title: 'Compassionate Community Care',
      desc: 'Proud to provide senior citizens and students with reliable home-delivery and emergency medicines anytime.',
      icon: Users,
    },
  ];

  return (
    <div className="w-full py-12 sm:py-16 bg-slate-50 dark:bg-slate-950">
      <SEOHead
        title="About Us - Journey, Mission & Pharmacist Values"
        description="Learn about Your Medical Hall in Bihar Sharif, Nalanda. Our mission, history, licensed team, and dedication to genuine pharmaceuticals."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header / Intro Banner */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
            Our Legacy of Trust
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About {BUSINESS_CONFIG.businessName}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Serving the families, faculty, and scholars of Nalanda University and Bihar Sharif with authentic medicines, clinical empathy, and round-the-clock dependability.
          </p>
        </div>

        {/* Business Story & Store Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="space-y-5">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
              Business Story
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Rooted in Integrity, Committed to Patient Well-being
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              When <strong>{BUSINESS_CONFIG.businessName}</strong> first opened its doors in Bihar Sharif, our mission was crystal clear: eliminate counterfeit medicines, demystify prescriptions, and ensure that no family is stranded without life-saving medication during midnight emergencies.
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Strategically located on Site Road Mohanpur near Nalanda University, our pharmacy serves as an anchor of wellness for both the academic campus and nearby residential townships. Every medicine in our inventory undergoes computerized cataloging with batch serial numbers directly printed on your receipt.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-3">
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/40">
                <p className="text-2xl font-black text-emerald-700 dark:text-emerald-400">10,000+</p>
                <p className="text-xs font-medium text-slate-600 dark:text-slate-400 mt-1">
                  Verified SKUs Maintained
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-100 dark:border-sky-900/40">
                <p className="text-2xl font-black text-sky-700 dark:text-sky-400">35,000+</p>
                <p className="text-xs font-medium text-slate-600 dark:text-slate-400 mt-1">
                  Families Graciously Served
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=800&q=80"
                alt="Pharmacist patient guidance"
                className="w-full h-80 sm:h-96 object-cover"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80';
                }}
              />
            </div>
            <div className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{BUSINESS_CONFIG.address.fullAddress}</span>
            </div>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group hover:border-emerald-500 transition">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              To deliver 100% genuine, doctor-prescribed pharmaceuticals, diagnostic tools, and infant nutrition to every household in Nalanda quickly, honestly, and affordably, ensuring peace of mind during moments of health vulnerability.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group hover:border-sky-500 transition">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              To be the premier, most technologically responsive community pharmacy in Bihar, setting benchmark standards for cold-chain integrity, digital prescription refills, and compassionate patient care.
            </p>
          </div>
        </div>

        {/* Pharmacist / Owner Message */}
        <div className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl">
            <Quote className="w-12 h-12 text-emerald-300/40 mb-4" />
            <h3 className="text-xl sm:text-2xl font-bold leading-snug">
              "Behind every medicine we hand across our counter is a parent caring for a child, a son taking care of an aging mother, or a student striving for wellness. We treat that trust with the highest reverence."
            </h3>
            <div className="mt-6 pt-4 border-t border-emerald-600/60 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg">
                Rx
              </div>
              <div>
                <p className="font-bold text-base text-white">Chief Registered Pharmacist</p>
                <p className="text-xs text-emerald-200">
                  Your Medical Hall Pharmacy & Healthcare Team, Nalanda
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
              Foundational Pillars
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((v, idx) => {
              const IconComp = v.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">{v.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Business Timeline / Journey */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
              Growth & Milestones
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Our Journey in Healthcare
            </h2>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col sm:flex-row items-start ${
                  idx % 2 === 0 ? 'sm:flex-row-reverse' : ''
                } gap-6`}
              >
                {/* Year Marker Pin */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shadow-md z-10">
                  {idx + 1}
                </div>

                <div className="ml-10 sm:ml-0 sm:w-1/2 px-4 sm:px-8">
                  <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                    <span className="text-xs font-black text-emerald-600 dark:text-emerald-400">
                      {m.year}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mt-1">
                      {m.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
