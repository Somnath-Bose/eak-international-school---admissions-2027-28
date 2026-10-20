import { FEE_STRUCTURE, FAQ_ITEMS, type FaqItem } from '../data/schoolData.ts';

export interface FeeCalculatorInput {
  gradeRangeId: 'grade-1-5' | 'grade-6-8' | 'grade-9-12';
  paymentMode: 'annual' | 'quarterly';
  includeTransport: boolean;
  includeMealPlan: boolean;
  hasSiblingDiscount: boolean;
}

export interface FeeCalculationResult {
  gradeRange: string;
  baseAnnualFee: number;
  admissionFee: number;
  discountAmount: number;
  netTuitionFee: number;
  transportAnnualFee: number;
  mealPlanAnnualFee: number;
  totalFirstYearPayable: number;
  payableAtEnrollment: number;
  perQuarterInstallment: number;
}

export interface EnquiryFormInput {
  parentName: string;
  email: string;
  phone: string;
  studentName: string;
  targetGrade: string;
  enquiryType: 'application' | 'campus-visit' | 'callback';
  preferredVisitDate?: string;
  message?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof EnquiryFormInput, string>>;
}

export interface SubmittedEnquiry extends EnquiryFormInput {
  referenceId: string;
  submittedAt: string;
  status: 'Confirmed Slot' | 'Application Initiated' | 'Counselor Assigned';
}

export function formatRupees(amount: number): string {
  return `Rs. ${Math.round(amount).toLocaleString('en-IN')}`;
}

export function calculateFeeEstimate(input: FeeCalculatorInput): FeeCalculationResult {
  const row = FEE_STRUCTURE.find((r) => r.id === input.gradeRangeId) ?? FEE_STRUCTURE[0];
  const baseAnnualFee = row.annualFee;
  const admissionFee = row.admissionFee;

  // 10% sibling discount on base annual tuition fee, plus 5% rebate on single annual payment
  let discountRate = 0;
  if (input.hasSiblingDiscount) {
    discountRate += 0.1;
  }
  if (input.paymentMode === 'annual') {
    discountRate += 0.05;
  }

  const discountAmount = Math.round(baseAnnualFee * discountRate);
  const netTuitionFee = baseAnnualFee - discountAmount;

  const transportAnnualFee = input.includeTransport ? 18000 : 0;
  const mealPlanAnnualFee = input.includeMealPlan ? 14000 : 0;

  const totalAnnualRecurring = netTuitionFee + transportAnnualFee + mealPlanAnnualFee;
  const totalFirstYearPayable = totalAnnualRecurring + admissionFee;

  const perQuarterInstallment =
    input.paymentMode === 'quarterly' ? Math.round(totalAnnualRecurring / 4) : 0;

  const payableAtEnrollment =
    input.paymentMode === 'annual'
      ? totalFirstYearPayable
      : admissionFee + perQuarterInstallment;

  return {
    gradeRange: row.gradeRange,
    baseAnnualFee,
    admissionFee,
    discountAmount,
    netTuitionFee,
    transportAnnualFee,
    mealPlanAnnualFee,
    totalFirstYearPayable,
    payableAtEnrollment,
    perQuarterInstallment,
  };
}

export function validateEnquiryForm(input: EnquiryFormInput): ValidationResult {
  const errors: Partial<Record<keyof EnquiryFormInput, string>> = {};

  const parentName = input.parentName.trim();
  if (!parentName || parentName.length < 2) {
    errors.parentName = 'Please enter parent or guardian full name (at least 2 characters).';
  }

  const studentName = input.studentName.trim();
  if (!studentName || studentName.length < 2) {
    errors.studentName = 'Please enter the child’s full name.';
  }

  const email = input.email.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.email = 'Please enter a valid email address (e.g. parent@example.com).';
  }

  const digitsOnly = input.phone.replace(/[\s\-+()]/g, '');
  if (!digitsOnly || !/^\d{10,13}$/.test(digitsOnly)) {
    errors.phone = 'Please enter a valid 10-digit mobile number.';
  }

  if (!input.targetGrade || input.targetGrade.trim() === '') {
    errors.targetGrade = 'Please select the grade applying for in 2027–28.';
  }

  if (input.enquiryType === 'campus-visit' && (!input.preferredVisitDate || input.preferredVisitDate.trim() === '')) {
    errors.preferredVisitDate = 'Please choose a preferred campus visit date.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function calculateDocumentProgress(checkedIds: string[], totalCount: number): {
  completedCount: number;
  remainingCount: number;
  percentage: number;
  isComplete: boolean;
} {
  const safeTotal = Math.max(1, totalCount);
  const completedCount = Math.min(checkedIds.length, safeTotal);
  const remainingCount = Math.max(0, safeTotal - completedCount);
  const percentage = Math.round((completedCount / safeTotal) * 100);

  return {
    completedCount,
    remainingCount,
    percentage,
    isComplete: completedCount === safeTotal,
  };
}

export function filterFaqs(
  items: FaqItem[] = FAQ_ITEMS,
  searchQuery: string = '',
  category: string = 'All'
): FaqItem[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();

  return items.filter((item) => {
    const matchesCategory = category === 'All' || item.category === category;
    const matchesQuery =
      !normalizedQuery ||
      item.question.toLowerCase().includes(normalizedQuery) ||
      item.answer.toLowerCase().includes(normalizedQuery);
    return matchesCategory && matchesQuery;
  });
}

export function createReferenceId(sequenceNumber: number, enquiryType: EnquiryFormInput['enquiryType']): string {
  const prefix =
    enquiryType === 'application'
      ? 'EAK-APP'
      : enquiryType === 'campus-visit'
      ? 'EAK-TOUR'
      : 'EAK-ENQ';
  const padded = String(202700 + sequenceNumber).padStart(6, '0');
  return `${prefix}-${padded}`;
}
