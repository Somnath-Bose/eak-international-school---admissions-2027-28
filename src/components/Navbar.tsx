import React, { useState } from 'react';
import { Sun, Moon, Menu, X, Phone, Calendar } from 'lucide-react';
import { EnquiryFormInput } from '../utils/admissionsLogic';

interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenModal: (type: EnquiryFormInput['enquiryType']) => void;
  submittedCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  onToggleDarkMode,
  onOpenModal,
  submittedCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Why EAK', href: '#why-choose' },
    { label: 'Programs', href: '#academic-programs' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Process & Dates', href: '#admission-process' },
    { label: 'Fee Structure', href: '#fee-information' },
  ];

  const handleMobileNav = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="w-full border-b border-stone-200/80 dark:border-slate-800 bg-[#FBF9F5] dark:bg-[#0B0F17]">
      {/* Operational Institutional Utility Ribbon */}
      <div className="bg-[#1C1917] dark:bg-[#06090F] text-stone-200 text-xs border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-stone-300 truncate">
            <span className="font-medium text-amber-300">Admissions Open · Session 2027–28</span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">CBSE &amp; Cambridge International Affiliated</span>
            <span aria-hidden="true" className="hidden md:inline">·</span>
            <span className="hidden md:inline tabular-nums">Campus Tours: Mon–Sat, 9:00 AM – 4:00 PM</span>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              type="button"
              onClick={() => onOpenModal('campus-visit')}
              className="hidden lg:inline-flex items-center gap-1.5 text-stone-300 hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Schedule Campus Visit</span>
            </button>

            {submittedCount > 0 && (
              <a
                href="#enquiry-section"
                className="text-amber-300 hover:underline font-mono tabular-nums whitespace-nowrap shrink-0"
              >
                {submittedCount} Active {submittedCount === 1 ? 'Enquiry' : 'Enquiries'}
              </a>
            )}

            <button
              type="button"
              onClick={onToggleDarkMode}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-stone-800 hover:bg-stone-700 text-stone-100 transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
            >
              {darkMode ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-stone-300" aria-hidden="true" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="md:hidden inline-flex items-center justify-center p-1 rounded text-stone-200 hover:text-white hover:bg-stone-800 focus-visible:outline-2 focus-visible:outline-amber-400"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Strict 3-Zone Top Bar Contract */}
      <header className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 py-4">
        {/* Zone 1: Brand Title, single text element */}
        <a
          href="#top"
          className="text-xl sm:text-2xl font-serif font-semibold tracking-tight text-stone-900 dark:text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E3A8A]"
        >
          EAK International School
        </a>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600 dark:text-slate-300"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-stone-950 dark:hover:text-white hover:underline underline-offset-8 decoration-2 decoration-[#1E3A8A] dark:decoration-blue-400 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onOpenModal('application')}
            className="px-5 py-2.5 text-sm font-semibold text-white bg-[#1E3A8A] hover:bg-[#172E6E] dark:bg-blue-600 dark:hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A8A]"
          >
            Apply Now
          </button>
        </div>
      </header>

      {/* Responsive Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="md:hidden border-t border-stone-200 dark:border-slate-800 bg-[#FBF9F5] dark:bg-[#111726] px-4 py-4 space-y-3"
        >
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleMobileNav}
                className="px-3 py-2.5 text-sm font-medium text-stone-800 dark:text-slate-200 rounded-md hover:bg-stone-200/60 dark:hover:bg-slate-800 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#faq-section"
              onClick={handleMobileNav}
              className="px-3 py-2.5 text-sm font-medium text-stone-800 dark:text-slate-200 rounded-md hover:bg-stone-200/60 dark:hover:bg-slate-800 transition-colors"
            >
              FAQs
            </a>
          </div>
          <div className="pt-2 border-t border-stone-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal('campus-visit');
              }}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E3A8A] dark:text-blue-400 py-1.5"
            >
              <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Schedule a Visit</span>
            </button>
            <a
              href="#enquiry-section"
              onClick={handleMobileNav}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-600 dark:text-slate-400 py-1.5"
            >
              <Phone className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Admissions Desk: +91 (080) 4892-2027</span>
            </a>
          </div>
        </nav>
      )}
    </div>
  );
};
