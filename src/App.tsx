/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { AcademicProgramsSection } from './components/AcademicProgramsSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { AdmissionProcessAndDates } from './components/AdmissionProcessAndDates';
import { FeeInformationSection } from './components/FeeInformationSection';
import { TestimonialsAndFaqSection } from './components/TestimonialsAndFaqSection';
import { FinalCtaAndEnquirySection } from './components/FinalCtaAndEnquirySection';
import { EnquiryModal } from './components/EnquiryModal';
import { Footer } from './components/Footer';
import {
  EnquiryFormInput,
  SubmittedEnquiry,
  createReferenceId,
} from './utils/admissionsLogic';

const INITIAL_ENQUIRIES: SubmittedEnquiry[] = [
  {
    referenceId: 'EAK-APP-202701',
    parentName: 'Nandini & Saurabh Menon',
    studentName: 'Advait Menon',
    email: 'nandini.menon@example.com',
    phone: '9845011223',
    targetGrade: 'Grade 3 (Primary Wing)',
    enquiryType: 'application',
    submittedAt: 'Today, 09:40 AM',
    status: 'Application Initiated',
  },
  {
    referenceId: 'EAK-TOUR-202702',
    parentName: 'Capt. Raghavendra Rao',
    studentName: 'Tanvi Rao',
    email: 'raghav.rao@example.com',
    phone: '9880233445',
    targetGrade: 'Grade 7 (Middle Wing)',
    enquiryType: 'campus-visit',
    preferredVisitDate: '2026-11-14',
    submittedAt: 'Yesterday, 04:15 PM',
    status: 'Confirmed Slot',
  },
];

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem('eak-theme') === 'dark';
    }
    return false;
  });

  const [submittedEnquiries, setSubmittedEnquiries] =
    useState<SubmittedEnquiry[]>(INITIAL_ENQUIRIES);

  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: EnquiryFormInput['enquiryType'];
    grade: string;
  }>({
    isOpen: false,
    type: 'application',
    grade: '',
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      window.localStorage.setItem('eak-theme', 'dark');
    } else {
      root.classList.remove('dark');
      window.localStorage.setItem('eak-theme', 'light');
    }
  }, [darkMode]);

  const handleToggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleOpenModal = (
    type: EnquiryFormInput['enquiryType'],
    grade: string = ''
  ) => {
    setModalState({
      isOpen: true,
      type,
      grade,
    });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleSubmitEnquiry = (input: EnquiryFormInput): SubmittedEnquiry => {
    const nextSeq = submittedEnquiries.length + 1;
    const referenceId = createReferenceId(nextSeq, input.enquiryType);
    const status: SubmittedEnquiry['status'] =
      input.enquiryType === 'campus-visit'
        ? 'Confirmed Slot'
        : input.enquiryType === 'application'
        ? 'Application Initiated'
        : 'Counselor Assigned';

    const newRecord: SubmittedEnquiry = {
      ...input,
      referenceId,
      submittedAt: 'Just now',
      status,
    };

    setSubmittedEnquiries((prev) => [newRecord, ...prev]);
    return newRecord;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1C1917] dark:bg-[#0B0F17] dark:text-[#F3F4F6]">
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
        onOpenModal={(type) => handleOpenModal(type)}
        submittedCount={submittedEnquiries.length}
      />

      <main className="flex-1">
        {/* Section 01 (Hero) & Section 04 (School Highlights) */}
        <HeroSection onOpenModal={(type) => handleOpenModal(type)} />

        {/* Section 02: Why Choose This School? */}
        <WhyChooseSection />

        {/* Section 03: Academic Programs (Primary, Middle, Secondary, Senior Secondary) */}
        <AcademicProgramsSection
          onSelectProgramEnquiry={(grade, type) => handleOpenModal(type, grade)}
        />

        {/* Section 05: Facilities */}
        <FacilitiesSection />

        {/* Section 06 (Admission Process), Section 07 (Important Dates) & Section 08 (Required Documents) */}
        <AdmissionProcessAndDates
          onOpenModal={(type) => handleOpenModal(type)}
        />

        {/* Section 09: Fee Information & Estimator */}
        <FeeInformationSection onOpenModal={(type) => handleOpenModal(type)} />

        {/* Section 10 (Parent Testimonials) & Section 11 (Frequently Asked Questions) */}
        <TestimonialsAndFaqSection />

        {/* Section 12: Final Call to Action & Interactive Enquiry Form */}
        <FinalCtaAndEnquirySection
          submittedEnquiries={submittedEnquiries}
          onSubmitEnquiry={handleSubmitEnquiry}
          onOpenModal={(type) => handleOpenModal(type)}
        />
      </main>

      <Footer />

      <EnquiryModal
        isOpen={modalState.isOpen}
        initialType={modalState.type}
        initialGrade={modalState.grade}
        onClose={handleCloseModal}
        onSubmitEnquiry={handleSubmitEnquiry}
      />
    </div>
  );
}
