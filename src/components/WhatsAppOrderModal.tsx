import React, { useState, useEffect } from 'react';
import {
  X,
  Phone,
  MessageCircle,
  Upload,
  CheckCircle,
  Clock,
  MapPin,
  Pill,
  FileCheck,
} from 'lucide-react';
import { BUSINESS_CONFIG, formatWhatsAppOrderUrl } from '../config/businessConfig';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMedicine?: string;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({
  isOpen,
  onClose,
  initialMedicine = '',
}) => {
  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    email: '',
    address: '',
    medicineName: '',
    message: '',
    deliveryTime: 'As soon as possible (Within 30-45 mins)',
  });
  const [hasPrescription, setHasPrescription] = useState<boolean>(false);
  const [prescriptionFileName, setPrescriptionFileName] = useState<string>('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (initialMedicine) {
      setFormData((prev) => ({ ...prev, medicineName: initialMedicine }));
    }
  }, [initialMedicine]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.customerName.trim()) {
      newErrors.customerName = 'Please enter your name';
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.medicineName.trim() && !hasPrescription) {
      newErrors.medicineName = 'Enter medicine name or tick prescription upload';
    }
    if (!formData.address.trim()) {
      newErrors.address = 'Please enter delivery address in Nalanda / Bihar Sharif';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setHasPrescription(true);
      setPrescriptionFileName(file.name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const fullMessage = `${formData.message ? formData.message + '\n' : ''}${
      formData.email ? `Email: ${formData.email}\n` : ''
    }${prescriptionFileName ? `Uploaded file: ${prescriptionFileName}` : ''}`;

    const url = formatWhatsAppOrderUrl({
      customerName: formData.customerName,
      phone: formData.phone,
      medicineName: formData.medicineName || 'Prescription attached',
      address: formData.address,
      hasPrescription: hasPrescription,
      deliveryTime: formData.deliveryTime,
      message: fullMessage,
    });

    window.open(url, '_blank');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 backdrop-blur-xs p-3 sm:p-4 overflow-y-auto"
    >
      <div className="relative w-full max-w-lg rounded-2xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-slate-800 my-8 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 px-5 py-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg leading-tight">Instant WhatsApp Medicine Order</h3>
                <p className="text-xs text-emerald-100">Directly connected to our Pharmacist Counter</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="rounded-lg p-1.5 text-white/80 hover:text-white hover:bg-white/20 transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Notice */}
        <div className="bg-emerald-50 dark:bg-emerald-950/40 border-b border-emerald-100 dark:border-emerald-900/40 px-5 py-2.5 flex items-center gap-2 text-xs text-emerald-800 dark:text-emerald-300">
          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Doorstep express delivery in Nalanda University & Bihar Sharif within 30-45 mins.</span>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4 max-h-[75vh] overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Customer Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.customerName}
                onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                placeholder="e.g. Ramesh Kumar"
                className="w-full px-3.5 py-2 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-white"
              />
              {errors.customerName && (
                <p className="text-xs text-rose-500 mt-1">{errors.customerName}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Mobile Number <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. 9876543210"
                className="w-full px-3.5 py-2 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-white"
              />
              {errors.phone && <p className="text-xs text-rose-500 mt-1">{errors.phone}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Email Address (Optional)
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@example.com"
                className="w-full px-3.5 py-2 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Preferred Delivery Time
              </label>
              <select
                value={formData.deliveryTime}
                onChange={(e) => setFormData({ ...formData, deliveryTime: e.target.value })}
                className="w-full px-3 py-2 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-white"
              >
                <option value="As soon as possible (30-45 mins)">Immediate (30-45 mins)</option>
                <option value="Today Morning (8 AM - 12 PM)">Today Morning (8 AM - 12 PM)</option>
                <option value="Today Afternoon (12 PM - 4 PM)">Today Afternoon (12 PM - 4 PM)</option>
                <option value="Today Evening (5 PM - 9 PM)">Today Evening (5 PM - 9 PM)</option>
                <option value="Self Pickup at Store Counter">Self Pickup at Store Counter</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Medicine Name(s) & Quantity <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                value={formData.medicineName}
                onChange={(e) => setFormData({ ...formData, medicineName: e.target.value })}
                placeholder="e.g. Augmentin 625 (1 Strip), Dolo 650 (2 Strips)"
                className="w-full pl-9 pr-3.5 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-white"
              />
              <Pill className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
            {errors.medicineName && (
              <p className="text-xs text-rose-500 mt-1">{errors.medicineName}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Delivery Address (Nalanda / Bihar Sharif) <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                required
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="House No, Street, Landmark near Nalanda University or Bihar Sharif"
                className="w-full pl-9 pr-3.5 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-white"
              />
              <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
            {errors.address && <p className="text-xs text-rose-500 mt-1">{errors.address}</p>}
          </div>

          {/* Prescription Upload Section */}
          <div className="p-3.5 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-800/40">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <Upload className="w-3.5 h-3.5 text-emerald-600" />
                Upload Doctor's Prescription (Optional / RX)
              </span>
              <label className="inline-flex items-center gap-1 text-xs text-emerald-700 dark:text-emerald-400 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasPrescription}
                  onChange={(e) => setHasPrescription(e.target.checked)}
                  className="rounded text-emerald-600 focus:ring-emerald-500"
                />
                Have Prescription
              </label>
            </div>

            <div className="flex items-center gap-3">
              <label className="cursor-pointer inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 transition shadow-xs">
                <Upload className="w-3.5 h-3.5" />
                <span>Choose Image or PDF</span>
                <input
                  type="file"
                  accept="image/*,.pdf"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
              {prescriptionFileName ? (
                <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium truncate">
                  <FileCheck className="w-4 h-4 shrink-0" />
                  <span className="truncate">{prescriptionFileName}</span>
                </div>
              ) : (
                <span className="text-xs text-slate-400">You can also attach it directly on WhatsApp</span>
              )}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Additional Notes or Message
            </label>
            <textarea
              rows={2}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="e.g. Please bring card swipe machine or send change for ₹500"
              className="w-full px-3.5 py-2 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-white"
            ></textarea>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
            <button
              type="submit"
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-semibold text-sm shadow-md transition"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Send via WhatsApp</span>
            </button>

            <a
              href={`tel:${BUSINESS_CONFIG.phone.replace(/[^0-9]/g, '')}`}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm transition"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Call Now</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
