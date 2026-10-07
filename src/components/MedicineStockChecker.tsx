import React, { useState, useMemo } from 'react';
import {
  Search,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  MessageCircle,
  Pill,
  SlidersHorizontal,
  ShieldCheck,
  Tag,
  Clock,
} from 'lucide-react';
import medicineStockData from '../data/medicineStock.json';
import { BUSINESS_CONFIG } from '../config/businessConfig';

export interface MedicineItem {
  id: string;
  medicineName: string;
  genericName: string;
  brand: string;
  category: string;
  mrp: number;
  discountPrice: number;
  availableQuantity: number;
  expiry: string;
  status: string;
  dosageForm: string;
  requiresPrescription: boolean;
}

interface MedicineStockCheckerProps {
  onSelectMedicine?: (medicineName: string) => void;
  standalone?: boolean;
}

export const MedicineStockChecker: React.FC<MedicineStockCheckerProps> = ({
  onSelectMedicine,
  standalone = false,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  const categories = useMemo(() => {
    const set = new Set<string>();
    medicineStockData.forEach((item) => set.add(item.category));
    return ['All', ...Array.from(set)];
  }, []);

  const filteredMedicines = useMemo(() => {
    return (medicineStockData as MedicineItem[]).filter((item) => {
      const matchesSearch =
        item.medicineName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.genericName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;

      const matchesStatus =
        statusFilter === 'All' || item.status === statusFilter;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [searchTerm, selectedCategory, statusFilter]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Available':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            Available
          </span>
        );
      case 'Limited Stock':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            Limited Stock
          </span>
        );
      case 'Out of Stock':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300">
            <XCircle className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
            Out of Stock
          </span>
        );
      default:
        return null;
    }
  };

  const handleOrder = (item: MedicineItem) => {
    if (onSelectMedicine) {
      onSelectMedicine(`${item.medicineName} (${item.dosageForm})`);
    } else {
      const text = `Hello ${BUSINESS_CONFIG.businessName}, I would like to check availability and order:
Medicine: ${item.medicineName}
Brand: ${item.brand}
Dosage Form: ${item.dosageForm}
Rate: ₹${item.discountPrice} (MRP ₹${item.mrp})
Please confirm delivery to my address.`;
      window.open(
        `https://wa.me/91${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`,
        '_blank'
      );
    }
  };

  return (
    <div className="w-full">
      {/* Search Header Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-200 dark:border-slate-800 mb-6">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by medicine name, salt/composition, or manufacturer (e.g. Paracetamol, Augmentin, Dolo)..."
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-white placeholder:text-slate-400"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-3 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 shrink-0">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Status:</span>
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              aria-label="Filter by Stock Status"
              className="px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="All">All Stock Status</option>
              <option value="Available">Available Only</option>
              <option value="Limited Stock">Limited Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pt-4 mt-3 border-t border-slate-100 dark:border-slate-800 scrollbar-none">
          <span className="text-xs font-semibold text-slate-400 shrink-0">Categories:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count & Help text */}
      <div className="flex items-center justify-between mb-4 px-1">
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Showing <span className="font-semibold text-slate-800 dark:text-slate-200">{filteredMedicines.length}</span> verified medicines in store inventory
        </p>
        <span className="text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-medium">
          <ShieldCheck className="w-3.5 h-3.5" />
          100% Genuine & Batch Verified
        </span>
      </div>

      {/* Stock Cards Grid */}
      {filteredMedicines.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-10 text-center border border-slate-200 dark:border-slate-800">
          <Pill className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
          <h4 className="text-base font-semibold text-slate-800 dark:text-slate-200">
            No medicine found for "{searchTerm}"
          </h4>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto mt-1 mb-4">
            Don't worry! We stock thousands of unlisted medicines and can arrange any prescribed salt within 2 to 4 hours.
          </p>
          <a
            href={`https://wa.me/91${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
              `Hello ${BUSINESS_CONFIG.businessName}, I searched for "${searchTerm}" on your website stock checker. Do you have this medicine or an equivalent generic substitute available?`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold shadow-sm transition"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Inquire Availability on WhatsApp</span>
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredMedicines.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group hover:border-emerald-500/50"
            >
              <div>
                {/* Top badges */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    {item.category}
                  </span>
                  {getStatusBadge(item.status)}
                </div>

                {/* Medicine Title */}
                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {item.medicineName}
                </h3>

                {/* Generic Composition */}
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Salt:</span> {item.genericName}
                </p>

                {/* Brand & Pack info */}
                <div className="mt-3 py-2 px-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 text-xs text-slate-600 dark:text-slate-300 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Manufacturer:</span>
                    <span className="font-medium truncate max-w-[170px]">{item.brand}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Packaging:</span>
                    <span className="font-medium">{item.dosageForm}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Stock Qty:</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {item.availableQuantity > 0 ? `${item.availableQuantity} in stock` : 'Awaiting replenishment'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> Expiry:
                    </span>
                    <span className="font-medium text-slate-700 dark:text-slate-300">{item.expiry}</span>
                  </div>
                </div>
              </div>

              {/* Price & Order Action */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-lg font-extrabold text-emerald-600 dark:text-emerald-400">
                      ₹{item.discountPrice.toFixed(2)}
                    </span>
                    {item.mrp > item.discountPrice && (
                      <span className="text-xs text-slate-400 line-through">
                        ₹{item.mrp.toFixed(2)}
                      </span>
                    )}
                  </div>
                  {item.requiresPrescription && (
                    <span className="text-[10px] font-semibold text-amber-600 dark:text-amber-400">
                      Rx Required
                    </span>
                  )}
                </div>

                <button
                  onClick={() => handleOrder(item)}
                  type="button"
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold shadow-xs transition active:scale-95 ${
                    item.status === 'Out of Stock'
                      ? 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                      : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                  }`}
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>{item.status === 'Out of Stock' ? 'Pre-Order' : 'Order Now'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
