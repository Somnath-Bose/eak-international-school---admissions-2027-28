import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateFeeEstimate,
  validateEnquiryForm,
  calculateDocumentProgress,
  filterFaqs,
  createReferenceId,
} from './admissionsLogic.ts';

test('calculateFeeEstimate matches exact assignment fee table for Grade 1-5 quarterly', () => {
  const result = calculateFeeEstimate({
    gradeRangeId: 'grade-1-5',
    paymentMode: 'quarterly',
    includeTransport: false,
    includeMealPlan: false,
    hasSiblingDiscount: false,
  });

  assert.equal(result.baseAnnualFee, 45000);
  assert.equal(result.admissionFee, 8000);
  assert.equal(result.discountAmount, 0);
  assert.equal(result.totalFirstYearPayable, 53000);
  assert.equal(result.perQuarterInstallment, 11250);
  assert.equal(result.payableAtEnrollment, 19250);
});

test('calculateFeeEstimate applies annual payment rebate and sibling concession for Grade 9-12', () => {
  const result = calculateFeeEstimate({
    gradeRangeId: 'grade-9-12',
    paymentMode: 'annual',
    includeTransport: true,
    includeMealPlan: false,
    hasSiblingDiscount: true,
  });

  assert.equal(result.baseAnnualFee, 72000);
  assert.equal(result.admissionFee, 12000);
  // 15% total discount on 72,000 = 10,800
  assert.equal(result.discountAmount, 10800);
  assert.equal(result.netTuitionFee, 61200);
  assert.equal(result.transportAnnualFee, 18000);
  assert.equal(result.totalFirstYearPayable, 61200 + 18000 + 12000);
});

test('validateEnquiryForm catches empty and invalid inputs', () => {
  const invalidResult = validateEnquiryForm({
    parentName: 'A',
    email: 'invalid-email',
    phone: '12345',
    studentName: '',
    targetGrade: '',
    enquiryType: 'campus-visit',
    preferredVisitDate: '',
  });

  assert.equal(invalidResult.isValid, false);
  assert.ok(invalidResult.errors.parentName);
  assert.ok(invalidResult.errors.email);
  assert.ok(invalidResult.errors.phone);
  assert.ok(invalidResult.errors.studentName);
  assert.ok(invalidResult.errors.targetGrade);
  assert.ok(invalidResult.errors.preferredVisitDate);
});

test('validateEnquiryForm accepts valid admission enquiry payload', () => {
  const validResult = validateEnquiryForm({
    parentName: 'Priya Sharma',
    email: 'priya.sharma@example.com',
    phone: '9876543210',
    studentName: 'Kabir Sharma',
    targetGrade: 'Grade 4 (Primary)',
    enquiryType: 'application',
  });

  assert.equal(validResult.isValid, true);
  assert.deepEqual(validResult.errors, {});
});

test('calculateDocumentProgress accurately tracks checklist readiness', () => {
  const partial = calculateDocumentProgress(['birth-cert', 'photos', 'parent-id'], 6);
  assert.equal(partial.completedCount, 3);
  assert.equal(partial.remainingCount, 3);
  assert.equal(partial.percentage, 50);
  assert.equal(partial.isComplete, false);

  const full = calculateDocumentProgress(['1', '2', '3', '4', '5', '6'], 6);
  assert.equal(full.percentage, 100);
  assert.equal(full.isComplete, true);
});

test('filterFaqs filters by category and search query', () => {
  const assessmentOnly = filterFaqs(undefined, '', 'Assessment');
  assert.equal(assessmentOnly.length, 1);
  assert.equal(assessmentOnly[0].id, 'faq-assessment');

  const searchResult = filterFaqs(undefined, 'Transfer Certificate', 'All');
  assert.equal(searchResult.length, 1);
  assert.equal(searchResult[0].id, 'faq-documents');
});

test('createReferenceId generates deterministic formatted IDs', () => {
  assert.equal(createReferenceId(1, 'application'), 'EAK-APP-202701');
  assert.equal(createReferenceId(2, 'campus-visit'), 'EAK-TOUR-202702');
});
