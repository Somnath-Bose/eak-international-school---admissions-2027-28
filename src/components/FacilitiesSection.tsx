import React, { useState } from 'react';
import { CheckCircle2, Clock } from 'lucide-react';
import { FACILITIES, FacilityItem } from '../data/schoolData';

const FacilityIllustration: React.FC<{ type: FacilityItem['illustrationType'] }> = ({ type }) => {
  switch (type) {
    case 'classroom':
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full object-cover" role="img" aria-label="Smart Classroom studio">
          <rect width="400" height="220" fill="#1E3A8A" fillOpacity="0.08" />
          <rect x="45" y="30" width="210" height="105" rx="6" fill="#1E293B" stroke="#475569" strokeWidth="3" />
          <rect x="55" y="40" width="190" height="85" fill="#1E3A8A" fillOpacity="0.35" />
          <line x1="75" y1="65" x2="180" y2="65" stroke="#93C5FD" strokeWidth="3" />
          <line x1="75" y1="85" x2="215" y2="85" stroke="#93C5FD" strokeWidth="2" />
          <line x1="75" y1="102" x2="155" y2="102" stroke="#FCD34D" strokeWidth="2" />
          {/* Daylight Windows on Right */}
          <rect x="285" y="25" width="80" height="125" rx="4" fill="#FEF3C7" fillOpacity="0.5" stroke="#9A3412" strokeWidth="2" />
          <line x1="325" y1="25" x2="325" y2="150" stroke="#9A3412" strokeWidth="1.5" />
          <line x1="285" y1="88" x2="365" y2="88" stroke="#9A3412" strokeWidth="1.5" />
          {/* Collaborative Desks */}
          <rect x="60" y="160" width="110" height="32" rx="4" fill="#D6D3D1" stroke="#57534E" strokeWidth="1.5" />
          <rect x="200" y="160" width="110" height="32" rx="4" fill="#D6D3D1" stroke="#57534E" strokeWidth="1.5" />
        </svg>
      );
    case 'lab':
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full object-cover" role="img" aria-label="Science and Robotics Lab">
          <rect width="400" height="220" fill="#0F766E" fillOpacity="0.08" />
          <rect x="40" y="145" width="320" height="45" rx="4" fill="#E7E5E4" stroke="#44403C" strokeWidth="2" />
          {/* Microscope & Lab Glassware */}
          <path d="M110 145 L130 95 L140 95 L160 145 Z" fill="#38BDF8" fillOpacity="0.4" stroke="#0284C7" strokeWidth="2" />
          <circle cx="210" cy="115" r="22" fill="#A7F3D0" fillOpacity="0.5" stroke="#059669" strokeWidth="2" />
          <rect x="205" y="75" width="10" height="20" fill="#059669" />
          {/* Robotic Arm */}
          <circle cx="295" cy="145" r="12" fill="#1E3A8A" />
          <line x1="295" y1="145" x2="275" y2="95" stroke="#9A3412" strokeWidth="5" strokeLinecap="round" />
          <line x1="275" y1="95" x2="320" y2="80" stroke="#1E3A8A" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
    case 'library':
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full object-cover" role="img" aria-label="Central Library">
          <rect width="400" height="220" fill="#9A3412" fillOpacity="0.08" />
          {[45, 145, 245].map((x) => (
            <g key={x}>
              <rect x={x} y="30" width="85" height="155" rx="3" fill="#F5F5F4" stroke="#78350F" strokeWidth="2" />
              {[60, 95, 130, 160].map((y) => (
                <line key={y} x1={x} y1={y} x2={x + 85} y2={y} stroke="#78350F" strokeWidth="2" />
              ))}
              <rect x={x + 10} y="40" width="12" height="19" fill="#1E3A8A" />
              <rect x={x + 25} y="42" width="10" height="17" fill="#9A3412" />
              <rect x={x + 38} y="39" width="14" height="20" fill="#15803D" />
              <rect x={x + 14} y="75" width="12" height="19" fill="#B45309" />
              <rect x={x + 30} y="73" width="16" height="21" fill="#1E3A8A" />
            </g>
          ))}
        </svg>
      );
    case 'sports':
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full object-cover" role="img" aria-label="Olympic Sports Complex">
          <rect width="400" height="220" fill="#15803D" fillOpacity="0.08" />
          <rect x="35" y="30" width="330" height="160" rx="75" fill="#B45309" fillOpacity="0.2" stroke="#9A3412" strokeWidth="2.5" />
          <rect x="95" y="55" width="210" height="110" rx="6" fill="#0284C7" fillOpacity="0.25" stroke="#0369A1" strokeWidth="2" />
          {[77, 99, 121, 143].map((y) => (
            <line key={y} x1="95" y1={y} x2="305" y2={y} stroke="#0369A1" strokeDasharray="5 4" strokeWidth="1.5" />
          ))}
        </svg>
      );
    case 'transport':
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full object-cover" role="img" aria-label="GPS Monitored School Bus">
          <rect width="400" height="220" fill="#D97706" fillOpacity="0.08" />
          <line x1="20" y1="175" x2="380" y2="175" stroke="#57534E" strokeWidth="3" />
          <rect x="65" y="75" width="265" height="82" rx="12" fill="#F59E0B" fillOpacity="0.85" stroke="#1C1917" strokeWidth="2.5" />
          {[85, 130, 175, 220, 265].map((x) => (
            <rect key={x} x={x} y="90" width="34" height="28" rx="3" fill="#EFF6FF" stroke="#1C1917" strokeWidth="1.5" />
          ))}
          <circle cx="120" cy="162" r="16" fill="#292524" stroke="#F5F5F4" strokeWidth="3" />
          <circle cx="275" cy="162" r="16" fill="#292524" stroke="#F5F5F4" strokeWidth="3" />
          {/* GPS Signal Arcs */}
          <path d="M185 52 Q200 38 215 52" fill="none" stroke="#1E3A8A" strokeWidth="2.5" />
          <path d="M175 42 Q200 22 225 42" fill="none" stroke="#1E3A8A" strokeWidth="2" />
        </svg>
      );
    case 'medical':
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full object-cover" role="img" aria-label="Pediatric Medical Infirmary">
          <rect width="400" height="220" fill="#DC2626" fillOpacity="0.06" />
          <rect x="85" y="40" width="230" height="140" rx="12" fill="#FAFAF9" stroke="#44403C" strokeWidth="2" />
          <rect x="184" y="68" width="32" height="84" rx="4" fill="#DC2626" fillOpacity="0.85" />
          <rect x="158" y="94" width="84" height="32" rx="4" fill="#DC2626" fillOpacity="0.85" />
        </svg>
      );
    case 'cafeteria':
      return (
        <svg viewBox="0 0 400 220" className="w-full h-full object-cover" role="img" aria-label="Organic Dining Hall">
          <rect width="400" height="220" fill="#16A34A" fillOpacity="0.07" />
          <rect x="65" y="135" width="270" height="18" rx="4" fill="#A8A29E" stroke="#44403C" strokeWidth="2" />
          <circle cx="145" cy="115" r="24" fill="#FAFAF9" stroke="#15803D" strokeWidth="2" />
          <circle cx="205" cy="115" r="24" fill="#FAFAF9" stroke="#9A3412" strokeWidth="2" />
          <circle cx="265" cy="115" r="24" fill="#FAFAF9" stroke="#1E3A8A" strokeWidth="2" />
        </svg>
      );
  }
};

export const FacilitiesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | FacilityItem['category']>('All');
  const [expandedId, setExpandedId] = useState<string>(FACILITIES[0].id);

  const categories: Array<'All' | FacilityItem['category']> = [
    'All',
    'Academics',
    'Athletics',
    'Student Care',
  ];

  const filteredFacilities =
    selectedCategory === 'All'
      ? FACILITIES
      : FACILITIES.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="facilities"
      aria-labelledby="facilities-heading"
      className="py-16 lg:py-24 border-b border-stone-200 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Category Filter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wide text-[#9A3412] dark:text-amber-400 mb-2">
              05. Campus Facilities &amp; Infrastructure
            </div>
            <h2
              id="facilities-heading"
              className="text-3xl sm:text-4xl font-serif font-semibold text-stone-900 dark:text-white tracking-tight"
            >
              Purpose-Built Spaces for Inquiry, Athletics &amp; Student Well-Being.
            </h2>
            <p className="mt-3 text-base text-stone-600 dark:text-slate-300 leading-relaxed">
              Every square foot of our 18-acre campus is engineered for safety, natural daylight, and hands-on learning across 7 core infrastructure zones.
            </p>
          </div>

          <div
            role="group"
            aria-label="Filter campus facilities by category"
            className="flex flex-wrap items-center gap-1 p-1.5 bg-stone-200/80 dark:bg-slate-800 rounded-lg self-start lg:self-auto"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-white dark:bg-blue-600 text-stone-900 dark:text-white shadow-xs'
                    : 'text-stone-600 dark:text-slate-300 hover:text-stone-900 dark:hover:text-white'
                }`}
              >
                {cat === 'All' ? 'All Facilities (7)' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Visual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFacilities.map((facility) => {
            const isExpanded = expandedId === facility.id;
            return (
              <article
                key={facility.id}
                className="rounded-xl border border-stone-200 dark:border-slate-800 bg-white dark:bg-[#111726] overflow-hidden flex flex-col justify-between transition-colors hover:border-stone-400 dark:hover:border-slate-600"
              >
                <div>
                  {/* 4:3 / 16:9 Architectural Illustration Slot */}
                  <div className="aspect-[16/9] w-full bg-[#F7F4EE] dark:bg-slate-900 border-b border-stone-200 dark:border-slate-800 overflow-hidden">
                    <FacilityIllustration type={facility.illustrationType} />
                  </div>

                  <div className="p-6">
                    {/* Unboxed Metadata Line */}
                    <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-slate-400 mb-2">
                      <span className="font-semibold text-[#1E3A8A] dark:text-blue-400">
                        {facility.category}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono tabular-nums">{facility.capacityOrSpec}</span>
                    </div>

                    <h3 className="text-xl font-serif font-semibold text-stone-900 dark:text-white mb-2">
                      {facility.title}
                    </h3>

                    <p className="text-sm text-stone-600 dark:text-slate-300 leading-relaxed">
                      {facility.summary}
                    </p>

                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-stone-200 dark:border-slate-800 space-y-2">
                        <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-slate-400">
                          Key Specifications &amp; Safety Standards
                        </div>
                        <ul className="space-y-2">
                          {facility.details.map((detail) => (
                            <li
                              key={detail}
                              className="flex items-start gap-2 text-xs text-stone-700 dark:text-slate-300"
                            >
                              <CheckCircle2
                                className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5"
                                aria-hidden="true"
                              />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                <div className="px-6 py-4 border-t border-stone-200/80 dark:border-slate-800/80 bg-[#FBF9F5]/60 dark:bg-slate-900/50 flex items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-1.5 text-stone-500 dark:text-slate-400 truncate">
                    <Clock className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span className="truncate tabular-nums">{facility.hours}</span>
                  </div>
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    onClick={() => setExpandedId(isExpanded ? '' : facility.id)}
                    className="font-semibold text-[#1E3A8A] dark:text-blue-400 hover:underline cursor-pointer whitespace-nowrap shrink-0"
                  >
                    {isExpanded ? 'Hide Specs' : 'View Specs'}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
