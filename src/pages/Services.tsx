import React from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  Pill,
  HeartPulse,
  Activity,
  Baby,
  Stethoscope,
  Thermometer,
  ShieldAlert,
  Sparkles,
  MessageCircle,
  Truck,
  FileCheck,
  CheckCircle2,
} from 'lucide-react';
import { MedicineStockChecker } from '../components/MedicineStockChecker';
import { SEOHead } from '../components/SEOHead';
import { BUSINESS_CONFIG } from '../config/businessConfig';

interface ServicesProps {
  onOpenWhatsAppModal?: (medicineName?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenWhatsAppModal }) => {
  const outletCtx = useOutletContext<{ onOpenWhatsAppModal?: (medicineName?: string) => void }>();
  const openModal = onOpenWhatsAppModal || outletCtx?.onOpenWhatsAppModal || (() => {});
  const serviceCategories = [
    {
      title: 'Prescription Medicines',
      subtitle: 'Critical, Chronic & Acute Therapeutics',
      desc: 'Allopathic formulations covering cardiology, diabetes, pulmonology, neurology, gastroenterology, and antibiotics sourced strictly from accredited manufacturers.',
      items: [
        'Insulins & Anti-diabetics with continuous cold-chain (2-8°C)',
        'Cardiovascular, Hypertension & Anti-arrhythmics',
        'Broad-spectrum Oral & Injectable Antibiotics',
        'Gastro-resistant capsules, PPIs & Antacids',
      ],
      icon: Pill,
      color: 'bg-emerald-600',
    },
    {
      title: 'OTC Medicines & First Aid',
      subtitle: 'Everyday Household Health Essentials',
      desc: 'Instant relief medications for pain, fever, common cold, indigestion, allergies, and wounds requiring no prescription for safe home dispensing.',
      items: [
        'Paracetamol, Ibuprofen & Analgesic Pain Gels',
        'Antihistamines, Cough syrups & Lozenges',
        'Oral Rehydration Salts (WHO Formula ORS)',
        'Antiseptic solutions, Band-aids & sterile gauze',
      ],
      icon: HeartPulse,
      color: 'bg-sky-600',
    },
    {
      title: 'Health Devices & Diagnostics',
      subtitle: 'Clinical Accuracy for Home Vital Monitoring',
      desc: 'Certified medical diagnostic equipment to monitor vital signs with precision and confidence from leading global biomedical manufacturers.',
      items: [
        'Digital Blood Pressure Monitors (Omron, Dr. Morepen)',
        'Glucometers & Blood Glucose Test Strips (Accu-Chek, OneTouch)',
        'Compressor Nebulizers for Adult & Pediatric Respiratory Therapy',
        'Infrared Non-contact Thermometers & Pulse Oximeters',
      ],
      icon: Activity,
      color: 'bg-purple-600',
    },
    {
      title: 'Medical Equipment & Surgical Supplies',
      subtitle: 'Clinical-Grade Disposables & Hospital Care',
      desc: 'High-purity surgical consumables, sterilization supplies, and post-operative recovery aids for clinics, caregivers, and home patients.',
      items: [
        'Sterile surgical cotton rolls, bandages & crepe rolls',
        'Disposable syringes, IV cannulas & infusion sets',
        'Latex examination gloves, surgical masks & PPE',
        'Adult diapers, underpads & catheterization accessories',
      ],
      icon: Stethoscope,
      color: 'bg-amber-600',
    },
    {
      title: 'Baby Care & Mother Wellness',
      subtitle: 'Gentle, Pediatric-Approved Formulations',
      desc: 'Hypoallergenic infant dermatological care, clinical feeding formulas, pediatric multivitamins, and maternal wellness tonics.',
      items: [
        'Baby diapers (Pampers, MamyPoko) & wet wipes',
        'Herbal baby massage oils, washes & rash creams',
        'Pediatric electrolyte suspensions & gripe waters',
        'Lactation supplements, breast pumps & maternal nutrition',
      ],
      icon: Baby,
      color: 'bg-rose-600',
    },
    {
      title: 'Supplements & Nutritional Care',
      subtitle: 'Immunity Boosters & Essential Micronutrients',
      desc: 'Therapeutic and preventive nutritional supplements designed to restore micronutrient deficiencies and sustain long-term vitality.',
      items: [
        'Calcium + Vitamin D3 for bone mineralization',
        'High-potency Vitamin B-Complex & Zinc capsules',
        'Omega-3 Fish Oil, CoQ10 & antioxidant blends',
        'Dietary protein powders for diabetic and elderly health',
      ],
      icon: Thermometer,
      color: 'bg-teal-600',
    },
    {
      title: 'Personal Care & Clinical Hygiene',
      subtitle: 'Daily Sanitization & Dermatological Care',
      desc: 'Hospital-grade surface antiseptics, medicated soaps, therapeutic anti-dandruff shampoos, oral care, and personal hygiene.',
      items: [
        'Antiseptic liquids (Dettol, Savlon) & chlorhexidine rubs',
        'Medicated antifungal dusting powders & creams',
        'Dermatological cleansers for sensitive skin',
        'Feminine hygiene essentials & intimate washes',
      ],
      icon: Sparkles,
      color: 'bg-indigo-600',
    },
    {
      title: 'Home Care & Elderly Assistance',
      subtitle: 'Comfort Aids for Senior & Bedridden Loved Ones',
      desc: 'Comprehensive supplies to facilitate home rehabilitation, physiotherapy support, mobility assistance, and bedside care.',
      items: [
        'Walking sticks, orthopaedic belts & knee supports',
        'Air mattresses with anti-decubitus motor pumps',
        'Hot water bottles, gel ice packs & heating belts',
        'BP, pulse & oxygen tracking logbooks',
      ],
      icon: FileCheck,
      color: 'bg-emerald-700',
    },
  ];

  return (
    <div className="w-full py-12 sm:py-16 bg-slate-50 dark:bg-slate-950">
      <SEOHead
        title="Services & Medicine Inventory Stock Checker"
        description="Search real-time medicine stock and browse our 8+ healthcare service categories at Your Medical Hall in Bihar Sharif, Nalanda."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
            Pharmacy Services & Inventory
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Healthcare Services & Medicine Stock
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            From critical prescription pharmaceuticals to home health monitors and baby care essentials, discover our full spectrum of trusted medical services in Nalanda.
          </p>
        </div>

        {/* EXCLUSIVE FEATURE: MEDICINE STOCK CHECKER (Step 16) */}
        <section className="bg-gradient-to-br from-emerald-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-emerald-950/30 p-6 sm:p-10 rounded-3xl border-2 border-emerald-500/30 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider mb-1">
                <Sparkles className="w-4 h-4" />
                <span>Real-Time Inventory System</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Medicine Stock Checker
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                Check immediate availability, batch expiry, and discounted rates. 1-click WhatsApp order.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                <CheckCircle2 className="w-3.5 h-3.5" /> Live Sync
              </span>
              <span className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300">
                <Truck className="w-3.5 h-3.5" /> 30-Min Dispatch
              </span>
            </div>
          </div>

          {/* Component implementation */}
          <MedicineStockChecker
            onSelectMedicine={(medicineName) => openModal(medicineName)}
            standalone={true}
          />
        </section>

        {/* CATEGORY-WISE DETAILED SERVICE CARDS */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
              Full Spectrum Healthcare
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
              Category-Wise Healthcare Services
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
              Explore our comprehensive retail pharmacy departments staffed by trained dispensers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-2xl ${service.color} text-white flex items-center justify-center shrink-0 shadow-md`}>
                        <IconComp className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {service.title}
                        </h3>
                        <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {service.desc}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                      <p className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                        Featured Offerings:
                      </p>
                      {service.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-400">Ready in Store Inventory</span>
                    <button
                      onClick={() => openModal(service.title)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition active:scale-95"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                      <span>Order This Category</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
