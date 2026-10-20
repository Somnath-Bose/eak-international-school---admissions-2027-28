import React, { useState } from 'react';
import { Check, ArrowUpRight } from 'lucide-react';
import { ACADEMIC_PROGRAMS, AcademicProgram } from '../data/schoolData';
import { EnquiryFormInput } from '../utils/admissionsLogic';

interface AcademicProgramsSectionProps {
  onSelectProgramEnquiry: (gradeLabel: string, type: EnquiryFormInput['enquiryType']) => void;
}

export const AcademicProgramsSection: React.FC<AcademicProgramsSectionProps> = ({
  onSelectProgramEnquiry,
}) => {
  const [selectedLevel, setSelectedLevel] = useState<'all' | AcademicProgram['id']>('all');

  const visiblePrograms =
    selectedLevel === 'all'
      ? ACADEMIC_PROGRAMS
      : ACADEMIC_PROGRAMS.filter((p) => p.id === selectedLevel);

  return (
    <section
      id="academic-programs"
      aria-labelledby="programs-heading"
      className="py-16 lg:py-24 border-b border-stone-200 dark:border-slate-800 bg-[#F7F4EE]/50 dark:bg-[#0E1420]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Interactive Wing Filter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wide text-[#9A3412] dark:text-amber-400 mb-2">
              03. Academic Programs (Grades 1 – 12)
            </div>
            <h2
              id="programs-heading"
              className="text-3xl sm:text-4xl font-serif font-semibold text-stone-900 dark:text-white tracking-tight"
            >
              Four Developmental Wings Tailored to Every Stage of Growth.
            </h2>
            <p className="mt-3 text-base text-stone-600 dark:text-slate-300 leading-relaxed">
              From inquiry-led foundational literacy in Primary to specialized pre-university research in Senior Secondary, explore our curriculum continuum.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div
            role="group"
            aria-label="Filter academic programs by school wing"
            className="flex flex-wrap items-center gap-1 p-1.5 bg-stone-200/80 dark:bg-slate-800 rounded-lg self-start lg:self-auto"
          >
            <button
              type="button"
              onClick={() => setSelectedLevel('all')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                selectedLevel === 'all'
                  ? 'bg-white dark:bg-blue-600 text-stone-900 dark:text-white shadow-xs'
                  : 'text-stone-600 dark:text-slate-300 hover:text-stone-900 dark:hover:text-white'
              }`}
            >
              All 4 Wings
            </button>
            {ACADEMIC_PROGRAMS.map((prog) => (
              <button
                key={prog.id}
                type="button"
                onClick={() => setSelectedLevel(prog.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  selectedLevel === prog.id
                    ? 'bg-white dark:bg-blue-600 text-stone-900 dark:text-white shadow-xs'
                    : 'text-stone-600 dark:text-slate-300 hover:text-stone-900 dark:hover:text-white'
                }`}
              >
                {prog.level.replace(' Wing', '')}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div
          className={`grid grid-cols-1 ${
            selectedLevel === 'all' ? 'lg:grid-cols-2' : 'lg:grid-cols-1 max-w-4xl'
          } gap-6`}
        >
          {visiblePrograms.map((program, idx) => (
            <article
              key={program.id}
              className="rounded-xl border border-stone-200 dark:border-slate-800 bg-white dark:bg-[#111726] p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                {/* Clean unboxed metadata header */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-stone-200 dark:border-slate-800 text-xs text-stone-600 dark:text-slate-400">
                  <div className="flex items-center gap-2 font-mono">
                    <span className="font-semibold text-[#1E3A8A] dark:text-blue-400">
                      0{idx + 1}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-semibold text-stone-900 dark:text-white">
                      {program.classes}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">{program.ageRange}</span>
                  </div>
                  <span className="font-mono text-stone-500 dark:text-slate-400 tabular-nums">
                    {program.ratio}
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-semibold text-stone-900 dark:text-white">
                  {program.level}
                </h3>
                <div className="text-xs font-medium text-[#9A3412] dark:text-amber-400 mt-1 mb-3">
                  {program.curriculum}
                </div>

                <p className="text-sm sm:text-base text-stone-600 dark:text-slate-300 leading-relaxed mb-6">
                  {program.summary}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-slate-400 mb-3">
                    Key Pedagogical Features
                  </div>
                  <ul className="space-y-2.5">
                    {program.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-2.5 text-sm text-stone-700 dark:text-slate-300"
                      >
                        <Check
                          className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Core Subjects Unboxed Inline List */}
                <div className="pt-4 border-t border-stone-100 dark:border-slate-800/70">
                  <span className="text-xs font-semibold text-stone-500 dark:text-slate-400 mr-2">
                    Core Subjects:
                  </span>
                  <span className="text-xs text-stone-600 dark:text-slate-300">
                    {program.subjects.join(' · ')}
                  </span>
                </div>
              </div>

              {/* Outcome Metric & Action */}
              <div className="mt-6 pt-4 border-t border-stone-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs font-mono text-stone-600 dark:text-slate-400 tabular-nums">
                  {program.outcomeMetric}
                </div>
                <button
                  type="button"
                  onClick={() =>
                    onSelectProgramEnquiry(`${program.classes} (${program.level})`, 'application')
                  }
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E3A8A] dark:text-blue-400 hover:underline cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>Apply for {program.classes}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
