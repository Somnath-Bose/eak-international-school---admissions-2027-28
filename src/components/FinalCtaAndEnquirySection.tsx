import React, { useState } from 'react';
import {
  ArrowRight,
  Calendar,
  PhoneCall,
  CheckCircle2,
  AlertCircle,
  Clock,
  MapPin,
} from 'lucide-react';
import {
  EnquiryFormInput,
  SubmittedEnquiry,
  validateEnquiryForm,
} from '../utils/admissionsLogic';

interface FinalCtaAndEnquirySectionProps {
  submittedEnquiries: SubmittedEnquiry[];
  onSubmitEnquiry: (input: EnquiryFormInput) => SubmittedEnquiry;
  onOpenModal: (type: EnquiryFormInput['enquiryType']) => void;
}

const GRADE_OPTIONS = [
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

export const FinalCtaAndEnquirySection: React.FC<FinalCtaAndEnquirySectionProps> = ({
  submittedEnquiries,
  onSubmitEnquiry,
  onOpenModal,
}) => {
  const [enquiryType, setEnquiryType] = useState<EnquiryFormInput['enquiryType']>('application');
  const [parentName, setParentName] = useState('');
  const [studentName, setStudentName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [targetGrade, setTargetGrade] = useState('');
  const [preferredVisitDate, setPreferredVisitDate] = useState('2026-11-14');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormInput, string>>>({});
  const [latestSubmission, setLatestSubmission] = useState<SubmittedEnquiry | null>(null);

  const handleActionSelect = (type: EnquiryFormInput['enquiryType']) => {
    setEnquiryType(type);
    setErrors({});
    setLatestSubmission(null);
    const formEl = document.getElementById('enquiry-form-card');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

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
      message,
    };

    const validation = validateEnquiryForm(payload);
    if (!validation.isValid) {
      setErrors(validation.errors);
      setLatestSubmission(null);
      return;
    }

    setErrors({});
    const created = onSubmitEnquiry(payload);
    setLatestSubmission(created);
    setParentName('');
    setStudentName('');
    setEmail('');
    setPhone('');
    setTargetGrade('');
    setMessage('');
  };

  return (
    <section
      id="enquiry-section"
      aria-labelledby="final-cta-heading"
      className="py-16 lg:py-24 bg-[#F7F4EE] dark:bg-[#0D131F] border-b border-stone-200 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* SECTION 12: FINAL CALL TO ACTION BANNER */}
        <div className="rounded-2xl bg-[#1C1917] dark:bg-[#131C2E] text-white p-8 sm:p-12 lg:p-14 border border-stone-800 dark:border-slate-700">
          <div className="max-w-3xl">
            <div className="text-xs font-mono tracking-wide text-amber-300 mb-3">
              12. Final Call to Action · Academic Session 2027–28
            </div>
            <h2
              id="final-cta-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold tracking-tight text-white leading-tight mb-4"
            >
              Give Your Child a Future-Ready Education.
            </h2>
            <p className="text-base sm:text-lg text-stone-300 leading-relaxed mb-8">
              Take the next step toward joining the EAK International School community. Submit an online admission application, book a personalized weekday or Saturday campus visit, or speak directly with our Senior Admissions Counselor.
            </p>

            {/* Required 3 Action Buttons: Apply Now, Book a Campus Visit, Talk to Our Admissions Team */}
            <div className="flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={() => handleActionSelect('application')}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => handleActionSelect('campus-visit')}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-white bg-stone-800 hover:bg-stone-700 border border-stone-600 rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <Calendar className="w-4 h-4 text-amber-300" aria-hidden="true" />
                <span>Book a Campus Visit</span>
              </button>

              <button
                type="button"
                onClick={() => onOpenModal('callback')}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-stone-200 hover:text-white bg-transparent hover:bg-stone-800/60 border border-stone-700 rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <PhoneCall className="w-4 h-4 text-amber-300" aria-hidden="true" />
                <span>Talk to Our Admissions Team</span>
              </button>
            </div>
          </div>
        </div>

        {/* EMBEDDED ENQUIRY FORM & LIVE APPLICATION TRACKER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Interactive Enquiry Form (7 Columns) */}
          <div
            id="enquiry-form-card"
            className="lg:col-span-7 rounded-xl border border-stone-200 dark:border-slate-800 bg-white dark:bg-[#111726] p-6 sm:p-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-6 border-b border-stone-200 dark:border-slate-800">
              <div>
                <h3 className="text-2xl font-serif font-semibold text-stone-900 dark:text-white">
                  Online Admission Enquiry &amp; Visit Desk
                </h3>
                <p className="text-xs text-stone-500 dark:text-slate-400 mt-1">
                  Instant reference number generated upon submission · Session 2027–28
                </p>
              </div>

              {/* Enquiry Mode Segmented Switch */}
              <div
                role="group"
                aria-label="Select enquiry type"
                className="flex items-center gap-1 p-1 bg-stone-100 dark:bg-slate-800 rounded-lg self-start"
              >
                <button
                  type="button"
                  onClick={() => {
                    setEnquiryType('application');
                    setErrors({});
                  }}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    enquiryType === 'application'
                      ? 'bg-white dark:bg-blue-600 text-stone-900 dark:text-white shadow-xs'
                      : 'text-stone-600 dark:text-slate-400'
                  }`}
                >
                  Apply Now
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setEnquiryType('campus-visit');
                    setErrors({});
                  }}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    enquiryType === 'campus-visit'
                      ? 'bg-white dark:bg-blue-600 text-stone-900 dark:text-white shadow-xs'
                      : 'text-stone-600 dark:text-slate-400'
                  }`}
                >
                  Campus Visit
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setEnquiryType('callback');
                    setErrors({});
                  }}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    enquiryType === 'callback'
                      ? 'bg-white dark:bg-blue-600 text-stone-900 dark:text-white shadow-xs'
                      : 'text-stone-600 dark:text-slate-400'
                  }`}
                >
                  Counselor Call
                </button>
              </div>
            </div>

            {latestSubmission && (
              <div
                role="status"
                data-testid="enquiry-confirmation-banner"
                className="mb-6 p-4 rounded-lg border border-emerald-600/40 bg-emerald-50/70 dark:bg-emerald-950/30 text-stone-900 dark:text-slate-100"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <div className="text-sm font-semibold">
                      Enquiry Registered Successfully · Reference ID:{' '}
                      <span className="font-mono text-[#1E3A8A] dark:text-blue-400">
                        {latestSubmission.referenceId}
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 dark:text-slate-300 mt-1">
                      Thank you, <strong>{latestSubmission.parentName}</strong>. We have logged your request for{' '}
                      <strong>{latestSubmission.studentName}</strong> ({latestSubmission.targetGrade}). Our Admissions Office will contact you at {latestSubmission.phone}.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="parent-name-input"
                    className="block text-xs font-semibold text-stone-700 dark:text-slate-300 mb-1.5"
                  >
                    Parent / Guardian Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="parent-name-input"
                    type="text"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    placeholder="e.g., Dr. Rohan Kulkarni"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-stone-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                  />
                  {errors.parentName && (
                    <p className="mt-1 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.parentName}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="student-name-input"
                    className="block text-xs font-semibold text-stone-700 dark:text-slate-300 mb-1.5"
                  >
                    Child’s Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="student-name-input"
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="e.g., Ira Kulkarni"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-stone-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                  />
                  {errors.studentName && (
                    <p className="mt-1 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.studentName}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="parent-email-input"
                    className="block text-xs font-semibold text-stone-700 dark:text-slate-300 mb-1.5"
                  >
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="parent-email-input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="parent@example.com"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-stone-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="parent-phone-input"
                    className="block text-xs font-semibold text-stone-700 dark:text-slate-300 mb-1.5"
                  >
                    10-Digit Mobile Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="parent-phone-input"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="9876543210"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-stone-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="target-grade-select"
                    className="block text-xs font-semibold text-stone-700 dark:text-slate-300 mb-1.5"
                  >
                    Grade Applying For (Session 2027–28) <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="target-grade-select"
                    value={targetGrade}
                    onChange={(e) => setTargetGrade(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-stone-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                  >
                    <option value="">Select target grade...</option>
                    {GRADE_OPTIONS.map((grade) => (
                      <option key={grade} value={grade}>
                        {grade}
                      </option>
                    ))}
                  </select>
                  {errors.targetGrade && (
                    <p className="mt-1 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.targetGrade}</span>
                    </p>
                  )}
                </div>

                {enquiryType === 'campus-visit' && (
                  <div>
                    <label
                      htmlFor="visit-date-input"
                      className="block text-xs font-semibold text-stone-700 dark:text-slate-300 mb-1.5"
                    >
                      Preferred Campus Visit Date <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="visit-date-input"
                      type="date"
                      value={preferredVisitDate}
                      onChange={(e) => setPreferredVisitDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-stone-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                    />
                    {errors.preferredVisitDate && (
                      <p className="mt-1 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.preferredVisitDate}</span>
                      </p>
                    )}
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor="enquiry-notes-input"
                  className="block text-xs font-semibold text-stone-700 dark:text-slate-300 mb-1.5"
                >
                  Specific Questions for Admissions Counselor (Optional)
                </label>
                <textarea
                  id="enquiry-notes-input"
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Mention any questions regarding curriculum stream, bus route, or scholarship eligibility..."
                  className="w-full px-3.5 py-2 text-sm rounded-lg border border-stone-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-[#1E3A8A] hover:bg-[#172E6E] dark:bg-blue-600 dark:hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
              >
                <span>
                  {enquiryType === 'application'
                    ? 'Submit Admission Application Enquiry'
                    : enquiryType === 'campus-visit'
                    ? 'Confirm Guided Campus Visit Slot'
                    : 'Request Admissions Counselor Call'}
                </span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </form>
          </div>

          {/* Right Column: Live Submitted Enquiries Log & Campus Contact Card (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl border border-stone-200 dark:border-slate-800 bg-white dark:bg-[#111726] p-6">
              <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-stone-200 dark:border-slate-800">
                <h4 className="text-base font-serif font-semibold text-stone-900 dark:text-white">
                  Recent Session Enquiries ({submittedEnquiries.length})
                </h4>
                <span className="text-xs font-mono text-stone-500 dark:text-slate-400">
                  Live Portal Queue
                </span>
              </div>

              <div
                data-testid="submitted-enquiries-list"
                className="space-y-3 max-h-72 overflow-y-auto pr-1"
              >
                {submittedEnquiries.map((item) => (
                  <div
                    key={item.referenceId}
                    className="p-3.5 rounded-lg border border-stone-200 dark:border-slate-800 bg-[#FBF9F5] dark:bg-slate-900/70 text-xs"
                  >
                    <div className="flex items-center justify-between font-mono text-[11px] text-[#1E3A8A] dark:text-blue-400 mb-1">
                      <span className="font-semibold">{item.referenceId}</span>
                      <span className="text-emerald-700 dark:text-emerald-400 font-medium">
                        {item.status}
                      </span>
                    </div>
                    <div className="font-semibold text-stone-900 dark:text-white">
                      {item.studentName} · {item.targetGrade}
                    </div>
                    <div className="text-stone-500 dark:text-slate-400 mt-0.5">
                      Parent: {item.parentName} · Submitted {item.submittedAt}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Admissions Office Direct Details */}
            <div className="rounded-xl border border-stone-200 dark:border-slate-800 bg-white dark:bg-[#111726] p-6 space-y-3 text-xs text-stone-600 dark:text-slate-300">
              <h4 className="text-base font-serif font-semibold text-stone-900 dark:text-white">
                Admissions Office &amp; Campus Address
              </h4>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#9A3412] dark:text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  EAK International School, Knowledge Park Boulevard, Sector 42, Bengaluru – 560102
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#1E3A8A] dark:text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  Visiting Hours: Monday to Saturday, 9:00 AM – 4:00 PM IST
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <PhoneCall className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="font-mono tabular-nums">
                  Direct Helpline: +91 (080) 4892-2027 · admissions@eakschool.edu.in
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
