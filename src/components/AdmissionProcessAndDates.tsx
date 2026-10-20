import React, { useState } from 'react';
import { CheckSquare, Square, Calendar, ArrowRight, RotateCcw, CheckCheck } from 'lucide-react';
import {
  ADMISSION_STEPS,
  IMPORTANT_DATES,
  REQUIRED_DOCUMENTS,
} from '../data/schoolData';
import {
  calculateDocumentProgress,
  EnquiryFormInput,
} from '../utils/admissionsLogic';

interface AdmissionProcessAndDatesProps {
  onOpenModal: (type: EnquiryFormInput['enquiryType']) => void;
}

export const AdmissionProcessAndDates: React.FC<AdmissionProcessAndDatesProps> = ({
  onOpenModal,
}) => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [checkedDocIds, setCheckedDocIds] = useState<string[]>([
    'birth-cert',
    'photos',
  ]);

  const selectedStepObj =
    ADMISSION_STEPS.find((s) => s.stepNumber === activeStep) ?? ADMISSION_STEPS[0];

  const docProgress = calculateDocumentProgress(
    checkedDocIds,
    REQUIRED_DOCUMENTS.length
  );

  const toggleDocument = (id: string) => {
    setCheckedDocIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleCheckAll = () => {
    setCheckedDocIds(REQUIRED_DOCUMENTS.map((d) => d.id));
  };

  const handleResetDocs = () => {
    setCheckedDocIds([]);
  };

  return (
    <section
      id="admission-process"
      aria-labelledby="admission-process-heading"
      className="py-16 lg:py-24 border-b border-stone-200 dark:border-slate-800 bg-[#F7F4EE]/50 dark:bg-[#0E1420]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* SECTION 06: ADMISSION PROCESS (5-Step Flow) */}
        <div>
          <div className="max-w-3xl mb-10">
            <div className="text-xs font-semibold tracking-wide text-[#9A3412] dark:text-amber-400 mb-2">
              06. Admission Process (5-Step Flow)
            </div>
            <h2
              id="admission-process-heading"
              className="text-3xl sm:text-4xl font-serif font-semibold text-stone-900 dark:text-white tracking-tight"
            >
              A Transparent, Stress-Free Five-Step Journey from Enquiry to Enrollment.
            </h2>
            <p className="mt-3 text-base text-stone-600 dark:text-slate-300 leading-relaxed">
              Our admissions process is designed to understand each child’s readiness while giving parents complete clarity at every milestone: <strong className="font-semibold text-stone-900 dark:text-white">1. Enquiry → 2. Application → 3. Assessment / Interaction → 4. Selection → 5. Enrollment</strong>.
            </p>
          </div>

          {/* 5-Step Interactive Flow Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
            {ADMISSION_STEPS.map((step) => {
              const isSelected = step.stepNumber === activeStep;
              return (
                <button
                  key={step.stepNumber}
                  type="button"
                  onClick={() => setActiveStep(step.stepNumber)}
                  aria-pressed={isSelected}
                  className={`text-left p-5 rounded-xl border transition-colors cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-[#1E3A8A] dark:border-blue-500 bg-white dark:bg-[#152036] ring-1 ring-[#1E3A8A] dark:ring-blue-500'
                      : 'border-stone-200 dark:border-slate-800 bg-white/80 dark:bg-[#111726] hover:border-stone-400 dark:hover:border-slate-600'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs font-mono mb-3">
                      <span className="font-bold text-[#1E3A8A] dark:text-blue-400">
                        STEP 0{step.stepNumber}
                      </span>
                      <span className="text-stone-500 dark:text-slate-400 tabular-nums">
                        {step.duration}
                      </span>
                    </div>
                    <div className="text-lg font-serif font-semibold text-stone-900 dark:text-white mb-1.5">
                      {step.stepNumber}. {step.title}
                    </div>
                    <p className="text-xs text-stone-600 dark:text-slate-300 leading-relaxed">
                      {step.shortLabel}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-stone-100 dark:border-slate-800 text-[11px] font-semibold text-[#1E3A8A] dark:text-blue-400">
                    {isSelected ? 'Selected Milestone' : 'Inspect Step →'}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Detailed Panel */}
          <div className="rounded-xl border border-stone-200 dark:border-slate-800 bg-white dark:bg-[#111726] p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="text-xs font-mono uppercase tracking-wider text-[#9A3412] dark:text-amber-400 mb-1">
                Step 0{selectedStepObj.stepNumber} of 05 · Estimated Timeline: {selectedStepObj.duration}
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-semibold text-stone-900 dark:text-white mb-2">
                {selectedStepObj.stepNumber}. {selectedStepObj.title} — {selectedStepObj.shortLabel}
              </h3>
              <p className="text-sm sm:text-base text-stone-600 dark:text-slate-300 leading-relaxed">
                {selectedStepObj.description}
              </p>
            </div>
            <div className="shrink-0 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  onOpenModal(
                    selectedStepObj.stepNumber === 1 ? 'campus-visit' : 'application'
                  )
                }
                className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-[#1E3A8A] hover:bg-[#172E6E] dark:bg-blue-600 dark:hover:bg-blue-500 rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>{selectedStepObj.parentAction}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* SECTION 07 & SECTION 08: IMPORTANT DATES & REQUIRED DOCUMENTS SIDE BY SIDE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* SECTION 07: IMPORTANT DATES (5 Columns) */}
          <div id="important-dates" className="lg:col-span-5">
            <div className="text-xs font-semibold tracking-wide text-[#9A3412] dark:text-amber-400 mb-2">
              07. Important Admission Dates (2027–28)
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-stone-900 dark:text-white tracking-tight mb-3">
              Key Academic Session 2027–28 Milestones.
            </h3>
            <p className="text-sm text-stone-600 dark:text-slate-300 mb-6 leading-relaxed">
              Mark these Cycle 1 dates on your calendar. Early applicants receive priority slot selection for campus interactions.
            </p>

            <div className="space-y-3">
              {IMPORTANT_DATES.map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-xl border border-stone-200 dark:border-slate-800 bg-white dark:bg-[#111726]"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-stone-500 dark:text-slate-400 mb-1.5">
                    <span className="font-mono font-semibold text-[#1E3A8A] dark:text-blue-400">
                      {item.phase}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{item.applicableGrades}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h4 className="text-base font-serif font-semibold text-stone-900 dark:text-white">
                      {item.event}
                    </h4>
                    <div className="inline-flex items-center gap-1.5 text-sm font-mono font-semibold text-[#9A3412] dark:text-amber-400 tabular-nums">
                      <Calendar className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {item.note}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 08: REQUIRED DOCUMENTS INTERACTIVE CHECKLIST (7 Columns) */}
          <div id="required-documents" className="lg:col-span-7">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
              <div>
                <div className="text-xs font-semibold tracking-wide text-[#9A3412] dark:text-amber-400 mb-2">
                  08. Required Documents Checklist
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-stone-900 dark:text-white tracking-tight">
                  Interactive Application Readiness Checklist.
                </h3>
                <p className="text-sm text-stone-600 dark:text-slate-300 mt-2">
                  Tick each document below as you gather your folder to verify your readiness before submitting the online application.
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={handleCheckAll}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-700 dark:text-slate-200 bg-stone-200/80 dark:bg-slate-800 hover:bg-stone-300 dark:hover:bg-slate-700 rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <CheckCheck className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Mark All Ready</span>
                </button>
                <button
                  type="button"
                  onClick={handleResetDocs}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-600 dark:text-slate-400 hover:text-stone-900 dark:hover:text-white rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Reset</span>
                </button>
              </div>
            </div>

            {/* Readiness Progress Bar */}
            <div
              data-testid="document-readiness-summary"
              className="p-4 rounded-xl border border-stone-200 dark:border-slate-800 bg-white dark:bg-[#111726] mb-4"
            >
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span className="font-semibold text-stone-900 dark:text-white tabular-nums">
                  Document Readiness: {docProgress.completedCount} of {REQUIRED_DOCUMENTS.length} Verified ({docProgress.percentage}%)
                </span>
                <span className="text-stone-600 dark:text-slate-400 tabular-nums">
                  {docProgress.isComplete
                    ? 'All Required Documents Ready for Upload'
                    : `${docProgress.remainingCount} Remaining`}
                </span>
              </div>
              <div className="w-full h-2 bg-stone-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#1E3A8A] dark:bg-blue-500 transition-all duration-200"
                  style={{ width: `${docProgress.percentage}%` }}
                />
              </div>
            </div>

            {/* Interactive Checklist Rows */}
            <div className="space-y-3">
              {REQUIRED_DOCUMENTS.map((doc) => {
                const isChecked = checkedDocIds.includes(doc.id);
                return (
                  <div
                    key={doc.id}
                    onClick={() => toggleDocument(doc.id)}
                    role="checkbox"
                    aria-checked={isChecked}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleDocument(doc.id);
                      }
                    }}
                    className={`p-4 sm:p-5 rounded-xl border transition-colors cursor-pointer flex items-start gap-3.5 ${
                      isChecked
                        ? 'border-emerald-700/40 dark:border-emerald-500/40 bg-emerald-50/40 dark:bg-emerald-950/20'
                        : 'border-stone-200 dark:border-slate-800 bg-white dark:bg-[#111726] hover:border-stone-400 dark:hover:border-slate-600'
                    }`}
                  >
                    <div className="mt-0.5 shrink-0 text-[#1E3A8A] dark:text-blue-400">
                      {isChecked ? (
                        <CheckSquare className="w-5 h-5 text-emerald-700 dark:text-emerald-400" aria-hidden="true" />
                      ) : (
                        <Square className="w-5 h-5 text-stone-400 dark:text-slate-500" aria-hidden="true" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4
                          className={`text-base font-serif font-semibold ${
                            isChecked
                              ? 'text-stone-900 dark:text-white'
                              : 'text-stone-900 dark:text-white'
                          }`}
                        >
                          {doc.title}
                        </h4>
                        <span className="text-xs font-mono text-stone-500 dark:text-slate-400">
                          {doc.mandatoryFor}
                        </span>
                      </div>
                      <div className="text-xs font-medium text-[#9A3412] dark:text-amber-400 mt-0.5">
                        Format: {doc.format}
                      </div>
                      <p className="text-xs text-stone-600 dark:text-slate-300 mt-1.5 leading-relaxed">
                        {doc.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
