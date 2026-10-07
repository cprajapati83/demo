import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Navigation,
  ShieldCheck,
  Building,
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessConfig';
import { SEOHead } from '../components/SEOHead';

interface ContactProps {
  onOpenWhatsAppModal?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenWhatsAppModal }) => {
  const outletCtx = useOutletContext<{ onOpenWhatsAppModal?: () => void }>();
  const openModal = onOpenWhatsAppModal || outletCtx?.onOpenWhatsAppModal || (() => {});
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Medicine Stock Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission / send directly via WhatsApp or email
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Auto open WhatsApp with the message query
      const inquiryText = `Hello ${BUSINESS_CONFIG.businessName}, Contact Inquiry from Website:
Name: ${formData.name}
Phone: ${formData.phone}
Subject: ${formData.subject}
Message: ${formData.message}`;

      window.open(
        `https://wa.me/91${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(inquiryText)}`,
        '_blank'
      );
    }, 600);
  };

  return (
    <div className="w-full py-12 sm:py-16 bg-slate-50 dark:bg-slate-950">
      <SEOHead
        title="Contact Us - Phone, WhatsApp, Timings & Directions"
        description="Contact Your Medical Hall on Site Road Mohanpur, Nalanda University, Bihar Sharif. Phone, WhatsApp orders, working hours, and Google Maps directions."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
            Direct Assistance
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Contact Your Medical Hall
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Need urgent medicines, dosage consultation, or bulk hospital supplies? Our licensed pharmacy team is here to assist you 7 days a week.
          </p>
        </div>

        {/* Quick Action Buttons Row: Call Button, WhatsApp Button, Directions Button */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button
            onClick={openModal}
            className="flex items-center justify-center gap-3 p-5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-md transition transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-6 h-6 fill-white" />
            <div className="text-left">
              <span className="block text-xs text-emerald-100 font-normal">Fastest Response</span>
              <span className="text-sm sm:text-base">Order via WhatsApp</span>
            </div>
          </button>

          <a
            href={`tel:${BUSINESS_CONFIG.phone.replace(/[^0-9]/g, '')}`}
            className="flex items-center justify-center gap-3 p-5 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-bold shadow-md transition transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Phone className="w-6 h-6" />
            <div className="text-left">
              <span className="block text-xs text-sky-100 font-normal">Immediate Helpline</span>
              <span className="text-sm sm:text-base">Call: {BUSINESS_CONFIG.phone}</span>
            </div>
          </a>

          <a
            href={BUSINESS_CONFIG.socialLinks.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold shadow-md transition transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Navigation className="w-6 h-6 text-emerald-400" />
            <div className="text-left">
              <span className="block text-xs text-slate-400 font-normal">GPS Navigation</span>
              <span className="text-sm sm:text-base">Get Directions</span>
            </div>
          </a>
        </div>

        {/* Main Grid: Contact Details & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Business Info & Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Store Information
              </h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Store Address</h4>
                    <p className="text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                      {BUSINESS_CONFIG.address.street}, {BUSINESS_CONFIG.address.landmark}
                      <br />
                      {BUSINESS_CONFIG.address.city}, {BUSINESS_CONFIG.address.state} - {BUSINESS_CONFIG.address.pincode}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Working Hours</h4>
                    <p className="text-slate-600 dark:text-slate-400 mt-0.5">
                      {BUSINESS_CONFIG.workingHours.weekdays}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400">
                      {BUSINESS_CONFIG.workingHours.weekends}
                    </p>
                    <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-1">
                      {BUSINESS_CONFIG.workingHours.emergency}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Phone & Helpline</h4>
                    <a
                      href={`tel:${BUSINESS_CONFIG.phone.replace(/[^0-9]/g, '')}`}
                      className="text-emerald-600 dark:text-emerald-400 hover:underline font-semibold block mt-0.5"
                    >
                      {BUSINESS_CONFIG.phone}
                    </a>
                    <p className="text-xs text-slate-400">WhatsApp: +91 {BUSINESS_CONFIG.whatsappNumber}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Email Inquiries</h4>
                    <p className="text-slate-600 dark:text-slate-400 mt-0.5">
                      {BUSINESS_CONFIG.email}
                    </p>
                  </div>
                </div>
              </div>

              {/* Emergency Banner */}
              <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-300 space-y-1">
                <p className="font-bold flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  Emergency Prescription Service
                </p>
                <p className="text-amber-800 dark:text-amber-400">
                  For critical medicines after 10:30 PM, call our priority hotline for immediate store dispatch assistance.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Send a Message or Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                Fill out the form below. Inquiries are instantly connected to our dispensing pharmacist team on WhatsApp.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    Inquiry Forwarded Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    Your inquiry has been launched in WhatsApp to our pharmacist desk. If WhatsApp didn't open automatically, click below:
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Your Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Anand Prakash"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Mobile Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 9876543210"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@gmail.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Inquiry Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-white"
                      >
                        <option value="Medicine Stock Availability">Medicine Stock Availability</option>
                        <option value="Home Delivery Request">Home Delivery Request</option>
                        <option value="Prescription Refill Scheduling">Prescription Refill Scheduling</option>
                        <option value="Medical Device Demonstration">Medical Device Demonstration</option>
                        <option value="Bulk / Clinic Purchase">Bulk / Clinic Purchase</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Message or Medicine Details <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your medicine names, dosages, or any inquiry details here..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-white"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message & Open WhatsApp</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FULL GOOGLE MAP SECTION */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Interactive Google Map Location
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Site Road Mohanpur, Near Nalanda University Gate, Bihar Sharif
              </p>
            </div>
            <a
              href={BUSINESS_CONFIG.socialLinks.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold hover:bg-slate-200 transition"
            >
              <span>Open in Google Maps App</span>
              <Navigation className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden h-80 sm:h-96 border border-slate-200 dark:border-slate-800 shadow-inner">
            <iframe
              title="Your Medical Hall Bihar Sharif Google Map"
              src={BUSINESS_CONFIG.googleMapsEmbed}
              className="w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
