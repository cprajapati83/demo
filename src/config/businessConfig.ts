export interface BusinessConfig {
  businessName: string;
  legalName: string;
  category: string;
  tagline: string;
  description: string;
  phone: string;
  whatsappNumber: string;
  email: string;
  address: {
    street: string;
    landmark: string;
    city: string;
    district: string;
    state: string;
    pincode: string;
    fullAddress: string;
  };
  workingHours: {
    weekdays: string;
    weekends: string;
    emergency: string;
  };
  stats: {
    yearsOfService: string;
    medicinesStocked: string;
    happyCustomers: string;
    deliveryAvgTime: string;
  };
  socialLinks: {
    whatsapp: string;
    facebook: string;
    instagram: string;
    googleMaps: string;
    justdial: string;
  };
  googleMapsEmbed: string;
  pwa: {
    enabled: boolean;
    appName: string;
    shortName: string;
    themeColor: string;
    backgroundColor: string;
    startUrl: string;
    display: string;
  };
}

export const BUSINESS_CONFIG: BusinessConfig = {
  businessName: 'Your Medical Hall',
  legalName: 'Your Medical Hall Pharmacy & Healthcare Solutions',
  category: 'Licensed Retail Pharmacy & Surgical Supplies',
  tagline: 'Your Trusted Medical Store for Genuine Medicines & Healthcare Needs',
  description:
    'Providing 100% genuine batch-verified medicines, healthcare diagnostics, surgical consumables, baby essentials, and daily wellness items at transparent, discounted prices with quick doorstep delivery across Nalanda University & Bihar Sharif.',
  phone: '+91 9288255669',
  whatsappNumber: '9288255669',
  email: 'care@yourmedicalhall.com',
  address: {
    street: 'Site Road Mohanpur',
    landmark: 'Near Nalanda University Gate',
    city: 'Bihar Sharif',
    district: 'Nalanda',
    state: 'Bihar',
    pincode: '803111',
    fullAddress: 'Site Road Mohanpur, Nalanda University, Bihar Sharif, Bihar 803111',
  },
  workingHours: {
    weekdays: 'Monday – Saturday: 7:00 AM – 10:30 PM',
    weekends: 'Sunday: 7:30 AM – 10:00 PM',
    emergency: '24/7 On-Call Urgent Prescription Dispatch Available',
  },
  stats: {
    yearsOfService: '12+',
    medicinesStocked: '10,000+',
    happyCustomers: '35,000+',
    deliveryAvgTime: '30 Mins',
  },
  socialLinks: {
    whatsapp: 'https://wa.me/919288255669',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    googleMaps: 'https://maps.google.com/?q=Site+Road+Mohanpur+Nalanda+University+Bihar+Sharif+803111',
    justdial: 'https://justdial.com',
  },
  // Accurate embed for Bihar Sharif / Nalanda University area
  googleMapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14455.578643867623!2d85.4985!3d25.1982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2f2f7b8d810ad%3A0x897cb243faef3399!2sBihar%20Sharif%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  pwa: {
    enabled: true,
    appName: 'Your Medical Hall',
    shortName: 'Medical Hall',
    themeColor: '#0A8F6A',
    backgroundColor: '#ffffff',
    startUrl: '/',
    display: 'standalone',
  },
};

export const formatWhatsAppOrderUrl = (data: {
  customerName: string;
  phone: string;
  medicineName: string;
  address: string;
  hasPrescription: boolean;
  message?: string;
  deliveryTime?: string;
}) => {
  const text = `Hello *${BUSINESS_CONFIG.businessName}*, I would like to place a Medicine Order:
----------------------------------------
*Customer Name:* ${data.customerName || 'N/A'}
*Phone:* ${data.phone || 'N/A'}
*Medicine Required:* ${data.medicineName || 'N/A'}
*Delivery Address:* ${data.address || 'N/A'}
*Prescription Attached:* ${data.hasPrescription ? 'Yes (Will send image here)' : 'No (OTC / Regular)'}
*Preferred Time:* ${data.deliveryTime || 'Immediate / Standard'}
*Notes / Message:* ${data.message || 'Please check availability & confirm total.'}
----------------------------------------
Sent via Your Medical Hall Web Store`;

  return `https://wa.me/91${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
};
