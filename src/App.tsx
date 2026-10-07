import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { RootLayout } from './layouts/RootLayout';

// Lazy loaded page components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));
const Login = lazy(() => import('./pages/Login'));

// Loading Fallback Component
const PageLoader: React.FC = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 bg-slate-50 dark:bg-slate-950">
    <div className="relative flex items-center justify-center">
      <div className="w-14 h-14 rounded-full border-4 border-emerald-200 dark:border-emerald-900 border-t-emerald-600 animate-spin"></div>
      <div className="absolute font-bold text-xs text-emerald-600 dark:text-emerald-400">MH</div>
    </div>
    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 animate-pulse">
      Loading healthcare portal...
    </p>
  </div>
);

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<RootLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="contact" element={<Contact />} />
              <Route path="login" element={<Login />} />
              {/* Fallback route */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}
