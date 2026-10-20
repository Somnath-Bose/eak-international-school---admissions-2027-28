import React, { useState } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';
import { FEE_STRUCTURE, FeeRow } from '../data/schoolData';
import {
  calculateFeeEstimate,
  formatRupees,
  EnquiryFormInput,
} from '../utils/admissionsLogic';

interface FeeInformationSectionProps {
  onOpenModal: (type: EnquiryFormInput['enquiryType']) => void;
}

export const FeeInformationSection: React.FC<FeeInformationSectionProps> = ({
  onOpenModal,
}) => {
  const [gradeRangeId, setGradeRangeId] = useState<FeeRow['id']>('grade-1-5');
  const [paymentMode, setPaymentMode] = useState<'quarterly' | 'annual'>('quarterly');
  const [includeTransport, setIncludeTransport] = useState<boolean>(false);
  const [includeMealPlan, setIncludeMealPlan] = useState<boolean>(false);
  const [hasSiblingDiscount, setHasSiblingDiscount] = useState<boolean>(false);

  const estimate = calculateFeeEstimate({
    gradeRangeId,
    paymentMode,
    includeTransport,
    includeMealPlan,
    hasSiblingDiscount,
  });

  return (
    <section
      id="fee-information"
      aria-labelledby="fee-heading"
      className="py-16 lg:py-24 border-b border-stone-200 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wide text-[#9A3412] dark:text-amber-400 mb-2">
            09. Fee Information (Academic Session 2027–28)
          </div>
          <h2
            id="fee-heading"
            className="text-3xl sm:text-4xl font-serif font-semibold text-stone-900 dark:text-white tracking-tight"
          >
            Transparent Fee Structure with Zero Hidden Charges.
          </h2>
          <p className="mt-3 text-base text-stone-600 dark:text-slate-300 leading-relaxed">
            Review the official grade-wise fee schedule for Academic Session 2027–28 below, or use the interactive estimator to calculate quarterly installments and sibling concessions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Official Fee Schedule Table (7 Columns) */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-stone-200 dark:border-slate-800 bg-white dark:bg-[#111726] overflow-hidden">
              <div className="px-6 py-4 border-b border-stone-200 dark:border-slate-800 flex items-center justify-between">
                <h3 className="text-base font-serif font-semibold text-stone-900 dark:text-white">
                  2027–28 Annual &amp; Admission Fee Schedule
                </h3>
                <span className="text-xs font-mono text-stone-500 dark:text-slate-400">
                  Currency: INR (Rs.)
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#1E3A8A] dark:bg-slate-900 text-white text-xs font-mono uppercase tracking-wider">
                      <th scope="col" className="py-3.5 px-5">
                        Grade
                      </th>
                      <th scope="col" className="py-3.5 px-5">
                        Annual Fee
                      </th>
                      <th scope="col" className="py-3.5 px-5">
                        Admission Fee
                      </th>
                      <th scope="col" className="py-3.5 px-5 hidden sm:table-cell">
                        Quarterly Plan
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 dark:divide-slate-800 text-sm">
                    {FEE_STRUCTURE.map((row) => {
                      const isSelected = row.id === gradeRangeId;
                      return (
                        <tr
                          key={row.id}
                          onClick={() => setGradeRangeId(row.id)}
                          className={`cursor-pointer transition-colors ${
                            isSelected
                              ? 'bg-blue-50/60 dark:bg-blue-950/30'
                              : 'hover:bg-stone-50 dark:hover:bg-slate-800/50'
                          }`}
                        >
                          <td className="py-4 px-5">
                            <div className="font-semibold text-stone-900 dark:text-white">
                              {row.gradeRange}
                            </div>
                            <div className="text-xs text-stone-500 dark:text-slate-400">
                              {row.levelName}
                            </div>
                          </td>
                          <td className="py-4 px-5 font-mono font-semibold text-stone-900 dark:text-white tabular-nums whitespace-nowrap">
                            {row.annualFeeFormatted}
                          </td>
                          <td className="py-4 px-5 font-mono text-stone-700 dark:text-slate-300 tabular-nums whitespace-nowrap">
                            {row.admissionFeeFormatted}
                          </td>
                          <td className="py-4 px-5 font-mono text-xs text-stone-600 dark:text-slate-400 tabular-nums hidden sm:table-cell whitespace-nowrap">
                            {formatRupees(row.quarterlyInstallment)} / qtr
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="p-5 bg-[#FBF9F5] dark:bg-slate-900/60 border-t border-stone-200 dark:border-slate-800 text-xs text-stone-600 dark:text-slate-400 space-y-1.5">
                <p>
                  <strong className="font-semibold text-stone-900 dark:text-white">Note:</strong> Admission Fee is a one-time non-refundable payment payable strictly at the time of initial enrollment.
                </p>
                <p>
                  Annual Fee includes all smart classroom digital resources, science/robotics laboratory consumables, library access, and campus medical cover.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Fee Estimator & Installment Calculator (5 Columns) */}
          <div className="lg:col-span-5 rounded-xl border border-stone-200 dark:border-slate-800 bg-white dark:bg-[#111726] p-6 sm:p-7">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1E3A8A] dark:text-blue-400 mb-2">
              <Calculator className="w-4 h-4" aria-hidden="true" />
              <span>Interactive Fee Estimator</span>
            </div>
            <h3 className="text-xl font-serif font-semibold text-stone-900 dark:text-white mb-4">
              Calculate Your Child’s 2027–28 Fee Breakdown
            </h3>

            {/* Grade Selector */}
            <div className="mb-4">
              <label className="block text-xs font-semibold text-stone-700 dark:text-slate-300 mb-2">
                Select Grade Band
              </label>
              <div className="grid grid-cols-3 gap-2">
                {FEE_STRUCTURE.map((row) => (
                  <button
                    key={row.id}
                    type="button"
                    onClick={() => setGradeRangeId(row.id)}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                      gradeRangeId === row.id
                        ? 'bg-[#1E3A8A] text-white border-[#1E3A8A] dark:bg-blue-600 dark:border-blue-500'
                        : 'bg-stone-50 dark:bg-slate-900 text-stone-700 dark:text-slate-300 border-stone-200 dark:border-slate-700 hover:border-stone-400'
                    }`}
                  >
                    {row.gradeRange}
                  </button>
                ))}
              </div>
            </div>

            {/* Payment Frequency */}
            <div className="mb-4">
              <label className="block text-xs font-semibold text-stone-700 dark:text-slate-300 mb-2">
                Payment Schedule
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMode('quarterly')}
                  className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    paymentMode === 'quarterly'
                      ? 'bg-stone-900 dark:bg-slate-700 text-white border-stone-900 dark:border-slate-600'
                      : 'bg-stone-50 dark:bg-slate-900 text-stone-700 dark:text-slate-300 border-stone-200 dark:border-slate-700'
                  }`}
                >
                  4 Quarterly Installments
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMode('annual')}
                  className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    paymentMode === 'annual'
                      ? 'bg-stone-900 dark:bg-slate-700 text-white border-stone-900 dark:border-slate-600'
                      : 'bg-stone-50 dark:bg-slate-900 text-stone-700 dark:text-slate-300 border-stone-200 dark:border-slate-700'
                  }`}
                >
                  Single Annual (5% Rebate)
                </button>
              </div>
            </div>

            {/* Optional Add-ons & Concessions */}
            <div className="space-y-2.5 mb-5 pt-2 border-t border-stone-200 dark:border-slate-800">
              <label className="flex items-center justify-between gap-2 text-xs text-stone-700 dark:text-slate-300 cursor-pointer">
                <span className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={hasSiblingDiscount}
                    onChange={(e) => setHasSiblingDiscount(e.target.checked)}
                    className="rounded border-stone-300 text-[#1E3A8A] focus:ring-[#1E3A8A]"
                  />
                  <span>Apply Sibling Concession (10% off Tuition)</span>
                </span>
                <span className="font-mono text-emerald-700 dark:text-emerald-400 tabular-nums">
                  -10%
                </span>
              </label>

              <label className="flex items-center justify-between gap-2 text-xs text-stone-700 dark:text-slate-300 cursor-pointer">
                <span className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={includeTransport}
                    onChange={(e) => setIncludeTransport(e.target.checked)}
                    className="rounded border-stone-300 text-[#1E3A8A] focus:ring-[#1E3A8A]"
                  />
                  <span>Add GPS AC Bus Transport (Optional)</span>
                </span>
                <span className="font-mono text-stone-500 dark:text-slate-400 tabular-nums">
                  +Rs. 18,000/yr
                </span>
              </label>

              <label className="flex items-center justify-between gap-2 text-xs text-stone-700 dark:text-slate-300 cursor-pointer">
                <span className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={includeMealPlan}
                    onChange={(e) => setIncludeMealPlan(e.target.checked)}
                    className="rounded border-stone-300 text-[#1E3A8A] focus:ring-[#1E3A8A]"
                  />
                  <span>Add Annapurna Hot Lunch Plan (Optional)</span>
                </span>
                <span className="font-mono text-stone-500 dark:text-slate-400 tabular-nums">
                  +Rs. 14,000/yr
                </span>
              </label>
            </div>

            {/* Calculated Output Summary */}
            <div
              data-testid="fee-calculator-summary"
              className="p-4 rounded-lg bg-[#F7F4EE] dark:bg-slate-900 border border-stone-200 dark:border-slate-800 space-y-2 text-xs"
            >
              <div className="flex justify-between text-stone-600 dark:text-slate-400">
                <span>Base Annual Fee ({estimate.gradeRange}):</span>
                <span className="font-mono tabular-nums">{formatRupees(estimate.baseAnnualFee)}</span>
              </div>
              <div className="flex justify-between text-stone-600 dark:text-slate-400">
                <span>One-Time Admission Fee:</span>
                <span className="font-mono tabular-nums">{formatRupees(estimate.admissionFee)}</span>
              </div>
              {estimate.discountAmount > 0 && (
                <div className="flex justify-between text-emerald-700 dark:text-emerald-400 font-medium">
                  <span>Rebate / Sibling Concession:</span>
                  <span className="font-mono tabular-nums">-{formatRupees(estimate.discountAmount)}</span>
                </div>
              )}
              {(estimate.transportAnnualFee > 0 || estimate.mealPlanAnnualFee > 0) && (
                <div className="flex justify-between text-stone-600 dark:text-slate-400">
                  <span>Optional Transport &amp; Dining:</span>
                  <span className="font-mono tabular-nums">
                    +{formatRupees(estimate.transportAnnualFee + estimate.mealPlanAnnualFee)}
                  </span>
                </div>
              )}

              <div className="pt-2.5 border-t border-stone-300 dark:border-slate-700 flex items-baseline justify-between">
                <span className="font-semibold text-stone-900 dark:text-white text-sm">
                  Total First-Year Fee:
                </span>
                <span className="text-lg font-mono font-bold text-stone-900 dark:text-white tabular-nums">
                  {formatRupees(estimate.totalFirstYearPayable)}
                </span>
              </div>

              <div className="flex items-baseline justify-between text-[#1E3A8A] dark:text-blue-400 font-semibold">
                <span>
                  {paymentMode === 'quarterly'
                    ? 'Payable at Enrollment (Adm + Q1):'
                    : 'Payable at Enrollment (Full Year):'}
                </span>
                <span className="font-mono tabular-nums">
                  {formatRupees(estimate.payableAtEnrollment)}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onOpenModal('application')}
              className="mt-4 w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white bg-[#1E3A8A] hover:bg-[#172E6E] dark:bg-blue-600 dark:hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
            >
              <span>Request Detailed Fee Sheet &amp; Apply</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
