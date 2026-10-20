import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import {
  EnquiryFormInput,
  SubmittedEnquiry,
  validateEnquiryForm,
} from '../utils/admissionsLogic';

interface EnquiryModalProps {
  isOpen: boolean;
  initialType: EnquiryFormInput['enquiryType'];
  initialGrade?: string;
  onClose: () => void;
  onSubmitEnquiry: (input: EnquiryFormInput) => SubmittedEnquiry;
}

const MODAL_GRADES = [
  'Grade 1 (Primary Wing)',
  'Grade 2 (Primary Wing)',
  'Grade 3 (Primary Wing)',
  'Grade 4 (Primary Wing)',
  'Grade 5 (Primary Wing)',
  'Grade 6 (Middle Wing)',
  'Grade 7 (Middle Wing)',
  'Grade 8 (Middle Wing)',
  'Grade 9 (Secondary Wing)',
  'Grade 11 — Science (PCM / PCB)',
  'Grade 11 — Commerce & Economics',
  'Grade 11 — Humanities & Liberal Arts',
];

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  initialType,
  initialGrade = '',
  onClose,
  onSubmitEnquiry,
}) => {
  const [enquiryType, setEnquiryType] = useState<EnquiryFormInput['enquiryType']>(initialType);
  const [parentName, setParentName] = useState('');
  const [studentName, setStudentName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [targetGrade, setTargetGrade] = useState(initialGrade);
  const [preferredVisitDate, setPreferredVisitDate] = useState('2026-11-18');
  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormInput, string>>>({});
  const [submittedRecord, setSubmittedRecord] = useState<SubmittedEnquiry | null>(null);

  useEffect(() => {
    setEnquiryType(initialType);
    if (initialGrade) {
      setTargetGrade(initialGrade);
    }
    setErrors({});
    setSubmittedRecord(null);
  }, [initialType, initialGrade, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload: EnquiryFormInput = {
      parentName,
      studentName,
      email,
      phone,
      targetGrade,
      enquiryType,
      preferredVisitDate: enquiryType === 'campus-visit' ? preferredVisitDate : undefined,
    };

    const validation = validateEnquiryForm(payload);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    const created = onSubmitEnquiry(payload);
    setSubmittedRecord(created);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-enquiry-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs"
    >
      <div className="relative w-full max-w-lg rounded-2xl border border-stone-200 dark:border-slate-700 bg-white dark:bg-[#111726] p-6 sm:p-8 shadow-xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-start justify-between gap-4 pb-4 mb-5 border-b border-stone-200 dark:border-slate-800">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#9A3412] dark:text-amber-400">
              EAK International School · Session 2027–28
            </div>
            <h2
              id="modal-enquiry-title"
              className="text-xl sm:text-2xl font-serif font-semibold text-stone-900 dark:text-white mt-0.5"
            >
              {enquiryType === 'application'
                ? 'Start Online Admission Application'
                : enquiryType === 'campus-visit'
                ? 'Schedule a Guided Campus Visit'
                : 'Speak With Our Admissions Counselor'}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 dark:text-slate-400 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submittedRecord ? (
          <div className="py-4 space-y-4">
            <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/40 flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-semibold text-stone-900 dark:text-white">
                  Request Confirmed · Ref ID: <span className="font-mono">{submittedRecord.referenceId}</span>
                </div>
                <p className="text-xs text-stone-600 dark:text-slate-300 mt-1 leading-relaxed">
                  We have registered the enquiry for <strong>{submittedRecord.studentName}</strong> ({submittedRecord.targetGrade}). You can view your active entry in the Session Enquiries section on this page.
                </p>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-[#1E3A8A] hover:bg-[#172E6E] rounded-lg cursor-pointer"
              >
                Done &amp; Return to Page
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div className="flex items-center gap-1 p-1 bg-stone-100 dark:bg-slate-800 rounded-lg">
              {(['application', 'campus-visit', 'callback'] as const).map((mode) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => {
                    setEnquiryType(mode);
                    setErrors({});
                  }}
                  className={`flex-1 py-1.5 px-2 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                    enquiryType === mode
                      ? 'bg-white dark:bg-slate-900 text-stone-900 dark:text-white shadow-xs'
                      : 'text-stone-600 dark:text-slate-400'
                  }`}
                >
                  {mode === 'application'
                    ? 'Apply Now'
                    : mode === 'campus-visit'
                    ? 'Book Visit'
                    : 'Request Call'}
                </button>
              ))}
            </div>

            <div>
              <label
                htmlFor="modal-parent-name"
                className="block text-xs font-semibold text-stone-700 dark:text-slate-300 mb-1"
              >
                Parent / Guardian Full Name *
              </label>
              <input
                id="modal-parent-name"
                type="text"
                value={parentName}
                onChange={(e) => setParentName(e.target.value)}
                placeholder="Enter parent full name"
                className="w-full px-3.5 py-2 text-sm rounded-lg border border-stone-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-stone-900 dark:text-white"
              />
              {errors.parentName && (
                <p className="mt-1 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.parentName}</span>
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="modal-student-name"
                className="block text-xs font-semibold text-stone-700 dark:text-slate-300 mb-1"
              >
                Child’s Full Name *
              </label>
              <input
                id="modal-student-name"
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Enter child full name"
                className="w-full px-3.5 py-2 text-sm rounded-lg border border-stone-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-stone-900 dark:text-white"
              />
              {errors.studentName && (
                <p className="mt-1 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.studentName}</span>
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="modal-email"
                  className="block text-xs font-semibold text-stone-700 dark:text-slate-300 mb-1"
                >
                  Email Address *
                </label>
                <input
                  id="modal-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="parent@example.com"
                  className="w-full px-3.5 py-2 text-sm rounded-lg border border-stone-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-stone-900 dark:text-white"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="modal-phone"
                  className="block text-xs font-semibold text-stone-700 dark:text-slate-300 mb-1"
                >
                  Mobile Number *
                </label>
                <input
                  id="modal-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="9876543210"
                  className="w-full px-3.5 py-2 text-sm rounded-lg border border-stone-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-stone-900 dark:text-white"
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.phone}</p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="modal-grade"
                className="block text-xs font-semibold text-stone-700 dark:text-slate-300 mb-1"
              >
                Target Grade (Session 2027–28) *
              </label>
              <select
                id="modal-grade"
                value={targetGrade}
                onChange={(e) => setTargetGrade(e.target.value)}
                className="w-full px-3.5 py-2 text-sm rounded-lg border border-stone-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-stone-900 dark:text-white"
              >
                <option value="">Select grade...</option>
                {MODAL_GRADES.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
              {errors.targetGrade && (
                <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.targetGrade}</p>
              )}
            </div>

            {enquiryType === 'campus-visit' && (
              <div>
                <label
                  htmlFor="modal-visit-date"
                  className="block text-xs font-semibold text-stone-700 dark:text-slate-300 mb-1"
                >
                  Preferred Visit Date *
                </label>
                <input
                  id="modal-visit-date"
                  type="date"
                  value={preferredVisitDate}
                  onChange={(e) => setPreferredVisitDate(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm rounded-lg border border-stone-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-stone-900 dark:text-white"
                />
              </div>
            )}

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 text-xs font-semibold text-stone-600 dark:text-slate-300 hover:text-stone-900 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-[#1E3A8A] hover:bg-[#172E6E] dark:bg-blue-600 dark:hover:bg-blue-500 rounded-lg cursor-pointer"
              >
                <span>Submit Request</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
