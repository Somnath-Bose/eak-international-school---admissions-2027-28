import React, { useState } from 'react';
import { ArrowRight, Calendar, Compass, CheckCircle2 } from 'lucide-react';
import { SCHOOL_HIGHLIGHTS } from '../data/schoolData';
import { EnquiryFormInput } from '../utils/admissionsLogic';

interface HeroSectionProps {
  onOpenModal: (type: EnquiryFormInput['enquiryType']) => void;
}

type CampusZoneKey = 'quadrangle' | 'innovation' | 'athletics';

interface CampusZoneInfo {
  id: CampusZoneKey;
  label: string;
  title: string;
  spec: string;
  caption: string;
}

const CAMPUS_ZONES: CampusZoneInfo[] = [
  {
    id: 'quadrangle',
    label: 'Academic Quadrangle',
    title: 'The Heritage Academic Pavilion & Smart Studios',
    spec: '96 Daylight Classrooms · 12:1 Student–Teacher Ratio',
    caption: 'Fig. 01 — South-facing academic courtyard designed for natural cross-ventilation and collaborative seminar learning.',
  },
  {
    id: 'innovation',
    label: 'STEM & Robotics Wing',
    title: 'Dr. APJ Abdul Kalam Innovation & Research Center',
    spec: '8 Specialized Wet & Dry Labs · AI & 3D Fabrication',
    caption: 'Fig. 02 — Dedicated research laboratories for Physics, Biotechnology, Autonomous Robotics, and Computational Sciences.',
  },
  {
    id: 'athletics',
    label: 'Olympic Sports Arena',
    title: 'All-Weather Aquatic & Championship Sports Complex',
    spec: '50m Heated Pool · 400m Track · Indoor Hardwood Courts',
    caption: 'Fig. 03 — Integrated sports science center supporting morning and afternoon coaching across 18 disciplines.',
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenModal }) => {
  const [activeZone, setActiveZone] = useState<CampusZoneKey>('quadrangle');
  const currentZone = CAMPUS_ZONES.find((z) => z.id === activeZone) ?? CAMPUS_ZONES[0];

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative border-b border-stone-200 dark:border-slate-800 pt-8 pb-14 lg:pt-14 lg:pb-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Balanced Split with items-stretch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Editorial Value Proposition & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Unboxed Editorial Kicker (Zero-Pill Discipline) */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#9A3412] dark:text-amber-400 mb-4">
                <span>Admissions Open</span>
                <span aria-hidden="true">·</span>
                <span>Academic Session 2027–28</span>
                <span aria-hidden="true">·</span>
                <span className="text-stone-600 dark:text-slate-400">Grades 1 to 12</span>
              </div>

              <h1
                id="hero-heading"
                className="font-serif font-semibold text-stone-900 dark:text-white tracking-tight text-4xl sm:text-5xl lg:text-[3.35rem] leading-[1.12] mb-6"
              >
                Where Intellectual Rigor Meets Character &amp; Creative Discovery.
              </h1>

              <p className="text-base sm:text-lg text-stone-700 dark:text-slate-300 leading-relaxed max-w-2xl mb-8">
                At <strong className="font-semibold text-stone-900 dark:text-white">EAK International School</strong>, we pair a 12:1 mentorship ratio with research-grade STEM laboratories, conservatory arts, and Olympic-standard athletics—preparing curious young minds for leading universities in India and across the world.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 mb-6">
                <button
                  type="button"
                  onClick={() => onOpenModal('application')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#1E3A8A] hover:bg-[#172E6E] dark:bg-blue-600 dark:hover:bg-blue-500 rounded-lg cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A8A]"
                >
                  <span>Apply Now for 2027–28</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={() => onOpenModal('campus-visit')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-stone-900 dark:text-white bg-white dark:bg-slate-900 hover:bg-stone-100 dark:hover:bg-slate-800 border border-stone-300 dark:border-slate-700 rounded-lg cursor-pointer whitespace-nowrap shrink-0"
                >
                  <Calendar className="w-4 h-4 text-[#9A3412] dark:text-amber-400" aria-hidden="true" />
                  <span>Schedule a Visit</span>
                </button>

                <a
                  href="#enquiry-section"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-sm font-semibold text-stone-700 dark:text-slate-300 hover:text-stone-950 dark:hover:text-white underline underline-offset-4 whitespace-nowrap shrink-0"
                >
                  <span>Enquire Now</span>
                </a>
              </div>
            </div>

            {/* Key Trust Proof Strip inside Left Column bottom */}
            <div className="pt-6 border-t border-stone-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-stone-600 dark:text-slate-400">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="font-semibold text-stone-900 dark:text-white">Cycle 1 Deadline</div>
                  <div className="tabular-nums">January 15, 2027</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="font-semibold text-stone-900 dark:text-white">No Written Exam (Grades 1–5)</div>
                  <div>Child-friendly interaction only</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="font-semibold text-stone-900 dark:text-white">Merit &amp; Sibling Grants</div>
                  <div>Up to 25% tuition scholarship</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Architectural Campus Monograph Card */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-xl border border-stone-200 dark:border-slate-800 bg-white dark:bg-[#111726] p-5 sm:p-6">
            <div>
              {/* Interactive Zone Selector Tabs */}
              <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-stone-200 dark:border-slate-800">
                <div className="flex items-center gap-1.5 text-xs font-medium text-stone-500 dark:text-slate-400">
                  <Compass className="w-4 h-4 text-[#1E3A8A] dark:text-blue-400" aria-hidden="true" />
                  <span>Interactive Campus Preview</span>
                </div>
                <div
                  role="tablist"
                  aria-label="Campus Architecture Zones"
                  className="flex items-center gap-1 p-1 bg-stone-100 dark:bg-slate-800/90 rounded-lg"
                >
                  {CAMPUS_ZONES.map((zone) => (
                    <button
                      key={zone.id}
                      role="tab"
                      type="button"
                      aria-selected={activeZone === zone.id}
                      onClick={() => setActiveZone(zone.id)}
                      className={`px-2.5 py-1 text-xs font-medium rounded-md cursor-pointer whitespace-nowrap shrink-0 ${
                        activeZone === zone.id
                          ? 'bg-white dark:bg-blue-600 text-stone-900 dark:text-white shadow-xs'
                          : 'text-stone-600 dark:text-slate-300 hover:text-stone-900 dark:hover:text-white'
                      }`}
                    >
                      {zone.label.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Architectural SVG Visual Canvas */}
              <div className="relative rounded-lg overflow-hidden bg-gradient-to-b from-[#EAE4DC] to-[#DFD7CA] dark:from-[#162033] dark:to-[#0F172A] border border-stone-200/80 dark:border-slate-700/80 aspect-[16/10] flex items-center justify-center">
                {activeZone === 'quadrangle' && (
                  <svg
                    viewBox="0 0 600 375"
                    className="w-full h-full object-cover"
                    role="img"
                    aria-label="Architectural elevation of EAK International School Heritage Academic Pavilion"
                  >
                    <defs>
                      <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.16" />
                        <stop offset="100%" stopColor="#9A3412" stopOpacity="0.06" />
                      </linearGradient>
                    </defs>
                    <rect width="600" height="375" fill="url(#skyGrad)" />
                    {/* Sun / Architectural Halo */}
                    <circle cx="480" cy="82" r="44" fill="#D97706" fillOpacity="0.22" />
                    {/* Horizon & Courtyard Lawn */}
                    <rect x="0" y="285" width="600" height="90" fill="#15803D" fillOpacity="0.18" />
                    <line x1="0" y1="285" x2="600" y2="285" stroke="#78716C" strokeWidth="1.5" />
                    {/* Left Wing */}
                    <rect x="55" y="155" width="140" height="130" fill="#F5F5F4" stroke="#44403C" strokeWidth="2" />
                    {/* Right Wing */}
                    <rect x="405" y="155" width="140" height="130" fill="#F5F5F4" stroke="#44403C" strokeWidth="2" />
                    {/* Central Clock & Library Pavilion */}
                    <rect x="185" y="110" width="230" height="175" fill="#FAFAF9" stroke="#1C1917" strokeWidth="2.5" />
                    <polygon points="175,110 300,52 425,110" fill="#1E3A8A" stroke="#1C1917" strokeWidth="2" />
                    {/* Clock Emblem */}
                    <circle cx="300" cy="88" r="14" fill="#FBF9F5" stroke="#1C1917" strokeWidth="2" />
                    <line x1="300" y1="88" x2="300" y2="79" stroke="#1C1917" strokeWidth="2" />
                    <line x1="300" y1="88" x2="307" y2="88" stroke="#9A3412" strokeWidth="2" />
                    {/* Colonnade Arches & Windows */}
                    {[210, 250, 290, 330, 370].map((x) => (
                      <g key={x}>
                        <rect x={x} y="135" width="22" height="38" rx="3" fill="#1E3A8A" fillOpacity="0.25" stroke="#44403C" strokeWidth="1.5" />
                        <rect x={x} y="190" width="22" height="38" rx="3" fill="#1E3A8A" fillOpacity="0.25" stroke="#44403C" strokeWidth="1.5" />
                      </g>
                    ))}
                    {[80, 115, 150, 430, 465, 500].map((x) => (
                      <g key={x}>
                        <rect x={x} y="178" width="20" height="32" rx="2" fill="#1E3A8A" fillOpacity="0.2" stroke="#44403C" strokeWidth="1.5" />
                        <rect x={x} y="225" width="20" height="32" rx="2" fill="#1E3A8A" fillOpacity="0.2" stroke="#44403C" strokeWidth="1.5" />
                      </g>
                    ))}
                    {/* Grand Entrance Portico */}
                    <rect x="272" y="242" width="56" height="43" fill="#9A3412" fillOpacity="0.85" stroke="#1C1917" strokeWidth="2" />
                    {/* Courtyard Pathway */}
                    <polygon points="272,285 328,285 375,375 225,375" fill="#D6D3D1" stroke="#78716C" strokeWidth="1" />
                    <text x="300" y="32" textAnchor="middle" className="text-[11px] font-mono fill-stone-700 dark:fill-slate-200" fontWeight="600">
                      EAK INTERNATIONAL SCHOOL · 18-ACRE GREEN CAMPUS
                    </text>
                  </svg>
                )}

                {activeZone === 'innovation' && (
                  <svg
                    viewBox="0 0 600 375"
                    className="w-full h-full object-cover"
                    role="img"
                    aria-label="Illustration of STEM, Robotics and AI Research Center"
                  >
                    <rect width="600" height="375" fill="#1E3A8A" fillOpacity="0.08" />
                    {/* Grid lines */}
                    {[60, 120, 180, 240, 300].map((y) => (
                      <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="#64748B" strokeOpacity="0.2" strokeWidth="1" />
                    ))}
                    {[100, 200, 300, 400, 500].map((x) => (
                      <line key={x} x1={x} y1="0" x2={x} y2="375" stroke="#64748B" strokeOpacity="0.2" strokeWidth="1" />
                    ))}
                    {/* Lab Workbench & Glass Partition */}
                    <rect x="70" y="95" width="460" height="200" rx="10" fill="#FAFAF9" stroke="#1E3A8A" strokeWidth="2.5" />
                    <rect x="95" y="120" width="190" height="115" rx="6" fill="#DBEAFE" stroke="#1E3A8A" strokeWidth="1.5" />
                    {/* Robotics Arm Illustration */}
                    <circle cx="190" cy="210" r="16" fill="#1E3A8A" />
                    <line x1="190" y1="210" x2="155" y2="160" stroke="#9A3412" strokeWidth="6" strokeLinecap="round" />
                    <line x1="155" y1="160" x2="215" y2="145" stroke="#1E3A8A" strokeWidth="5" strokeLinecap="round" />
                    <circle cx="155" cy="160" r="7" fill="#F59E0B" />
                    {/* Molecular / AI Telemetry Panel */}
                    <rect x="310" y="120" width="195" height="115" rx="6" fill="#F5F5F4" stroke="#44403C" strokeWidth="1.5" />
                    <circle cx="365" cy="175" r="22" fill="none" stroke="#9A3412" strokeWidth="2.5" />
                    <circle cx="435" cy="160" r="14" fill="none" stroke="#1E3A8A" strokeWidth="2.5" />
                    <circle cx="435" cy="198" r="14" fill="none" stroke="#15803D" strokeWidth="2.5" />
                    <line x1="385" y1="168" x2="421" y2="160" stroke="#44403C" strokeWidth="2" />
                    <line x1="385" y1="182" x2="421" y2="195" stroke="#44403C" strokeWidth="2" />
                    <text x="300" y="270" textAnchor="middle" className="text-[12px] font-mono fill-stone-800" fontWeight="600">
                      8 RESEARCH LABS · 1:1 WORKSTATION RATIO · ROBOTICS &amp; BIOTECH
                    </text>
                  </svg>
                )}

                {activeZone === 'athletics' && (
                  <svg
                    viewBox="0 0 600 375"
                    className="w-full h-full object-cover"
                    role="img"
                    aria-label="Illustration of Olympic Sports and Heated Swimming Complex"
                  >
                    <rect width="600" height="375" fill="#0F766E" fillOpacity="0.08" />
                    {/* 400m Running Track Oval */}
                    <rect x="55" y="65" width="490" height="245" rx="120" fill="#B45309" fillOpacity="0.22" stroke="#9A3412" strokeWidth="3" />
                    <rect x="85" y="95" width="430" height="185" rx="90" fill="#15803D" fillOpacity="0.2" stroke="#15803D" strokeWidth="2" />
                    {/* 8-Lane Olympic Pool Inset */}
                    <rect x="175" y="120" width="250" height="135" rx="8" fill="#0284C7" fillOpacity="0.28" stroke="#0369A1" strokeWidth="2" />
                    {[142, 164, 186, 208, 230].map((y) => (
                      <line key={y} x1="175" y1={y} x2="425" y2={y} stroke="#0369A1" strokeDasharray="6 4" strokeWidth="1.5" />
                    ))}
                    <text x="300" y="342" textAnchor="middle" className="text-[12px] font-mono fill-stone-800 dark:fill-slate-200" fontWeight="600">
                      FINA 50M HEATED POOL · 400M SYNTHETIC TRACK · 18 SPORTS
                    </text>
                  </svg>
                )}
              </div>

              {/* Zone Details & Caption */}
              <div className="mt-4">
                <div className="text-xs font-mono tracking-wide text-[#1E3A8A] dark:text-blue-400">
                  {currentZone.spec}
                </div>
                <h2 className="text-lg font-serif font-semibold text-stone-900 dark:text-white mt-1">
                  {currentZone.title}
                </h2>
                <p className="text-xs font-serif italic text-stone-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                  {currentZone.caption}
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-200 dark:border-slate-800 flex items-center justify-between text-xs">
              <span className="text-stone-600 dark:text-slate-400">
                Guided family tours available Mon–Sat
              </span>
              <button
                type="button"
                onClick={() => onOpenModal('campus-visit')}
                className="font-semibold text-[#1E3A8A] dark:text-blue-400 hover:underline cursor-pointer"
              >
                Book Guided Tour →
              </button>
            </div>
          </div>
        </div>

        {/* Section 04: School Highlights Full-Width 4-Column KPI Strip Below Hero Split */}
        <div
          id="school-highlights"
          aria-label="School Highlights and Key Statistics"
          className="mt-8 pt-6 border-t border-stone-200 dark:border-slate-800"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div className="text-xs font-semibold tracking-wide text-stone-600 dark:text-slate-400">
              04. School Highlights &amp; Institutional Track Record
            </div>
            <div className="text-xs text-stone-500 dark:text-slate-400">
              Verified Academic &amp; Co-Curricular Benchmarks (1999–2026)
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SCHOOL_HIGHLIGHTS.map((stat) => (
              <div
                key={stat.id}
                className="p-4 sm:p-5 rounded-xl border border-stone-200 dark:border-slate-800 bg-white dark:bg-[#111726]"
              >
                <div className="text-2xl sm:text-3xl font-serif font-semibold text-stone-900 dark:text-white font-mono tabular-nums tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-stone-800 dark:text-slate-200 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-stone-500 dark:text-slate-400 mt-0.5">
                  {stat.context}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
