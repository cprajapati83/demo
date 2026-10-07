import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FloatingActions } from '../components/FloatingActions';
import { WhatsAppOrderModal } from '../components/WhatsAppOrderModal';
import { OfflineIndicator } from '../components/OfflineIndicator';

export const RootLayout: React.FC = () => {
  const [whatsAppModalOpen, setWhatsAppModalOpen] = useState(false);
  const [selectedMedicine, setSelectedMedicine] = useState('');

  const handleOpenWhatsAppModal = (medicineName?: string) => {
    setSelectedMedicine(medicineName || '');
    setWhatsAppModalOpen(true);
  };

  const handleCloseWhatsAppModal = () => {
    setWhatsAppModalOpen(false);
    setSelectedMedicine('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors">
      <OfflineIndicator />

      {/* Main Navbar */}
      <Navbar onOpenWhatsAppModal={() => handleOpenWhatsAppModal()} />

      {/* Page Body via Outlet */}
      <main className="flex-1">
        <Outlet context={{ onOpenWhatsAppModal: handleOpenWhatsAppModal }} />
      </main>

      {/* Footer (with WMIT Tracking and Mandatory Anchor & Trigger) */}
      <Footer />

      {/* Floating Action Buttons & Mobile Sticky CTA */}
      <FloatingActions onOpenWhatsAppModal={() => handleOpenWhatsAppModal()} />

      {/* WhatsApp Order Modal */}
      <WhatsAppOrderModal
        isOpen={whatsAppModalOpen}
        onClose={handleCloseWhatsAppModal}
        initialMedicine={selectedMedicine}
      />
    </div>
  );
};
