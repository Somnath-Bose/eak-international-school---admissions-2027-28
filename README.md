# EAK International School — Admissions Landing Page (Academic Session 2027–28)

A responsive, accessible school admissions landing page built for **EAK International School (Academic Session 2027–28)** with full dark mode support, interactive fee estimation, document readiness tracking, FAQ filtering, and client-side validated admission/visit enquiry flows.

## Required 12 Sections Implemented

1. **01 Hero Section (`src/components/HeroSection.tsx`)**: School name, *“Admissions Open — Academic Session 2027–28”*, clear value proposition, interactive campus architecture preview, and **Apply Now**, **Schedule a Visit**, and **Enquire Now** actions.
2. **02 Why Choose This School? (`src/components/WhyChooseSection.tsx`)**: Six institutional differentiators presented in an asymmetric editorial Bento grid.
3. **03 Academic Programs (`src/components/AcademicProgramsSection.tsx`)**: Dedicated wings for **Primary (Grades 1–5)**, **Middle (Grades 6–8)**, **Secondary (Grades 9–10)**, and **Senior Secondary (Grades 11–12)** with interactive wing filters, age ranges, student–teacher ratios, and curriculum highlights.
4. **04 School Highlights (`src/components/HeroSection.tsx`)**: Four credibility-building statistics (`28 Years`, `14,500+ Alumni`, `240+ Faculty`, `36+ Sports & Activities`).
5. **05 Campus Facilities (`src/components/FacilitiesSection.tsx`)**: Visual cards with custom architectural SVG illustrations and expandable specifications across Smart Classrooms, Science & Robotics Labs, Central Library, Olympic Sports Complex, GPS Transport Fleet, Pediatric Medical Infirmary, and Organic Dining Hall.
6. **06 Admission Process (`src/components/AdmissionProcessAndDates.tsx`)**: Interactive 5-step flow (`1. Enquiry → 2. Application → 3. Assessment / Interaction → 4. Selection → 5. Enrollment`).
7. **07 Important Dates (`src/components/AdmissionProcessAndDates.tsx`)**: Sample cycle dates for Application Opening, Application Deadline, Assessment & Interaction, Result Announcement, and Enrollment Deadline.
8. **08 Required Documents (`src/components/AdmissionProcessAndDates.tsx`)**: Interactive checklist with live progress bar (`X of 6 Verified`) for birth certificate, previous school records, passport-size photographs, address proof, parent ID proof, and medical fitness record.
9. **09 Fee Information (`src/components/FeeInformationSection.tsx`)**: Official fee schedule (`Grade 1–5: Rs. 45,000 / Rs. 8,000`, `Grade 6–8: Rs. 58,000 / Rs. 10,000`, `Grade 9–12: Rs. 72,000 / Rs. 12,000`) paired with an interactive Fee & Installment Calculator.
10. **10 Parent Testimonials (`src/components/TestimonialsAndFaqSection.tsx`)**: Four attributable parent stories with student grade context and outcome highlights.
11. **11 Frequently Asked Questions (`src/components/TestimonialsAndFaqSection.tsx`)**: Interactive accordion with Expand/Collapse All, keyword search, and topic category filters.
12. **12 Final Call to Action & Enquiry Desk (`src/components/FinalCtaAndEnquirySection.tsx` & `src/components/EnquiryModal.tsx`)**: *“Give Your Child a Future-Ready Education”* closing banner with **Apply Now**, **Book a Campus Visit**, and **Talk to Our Admissions Team** triggers, validated enquiry form, and live Session Enquiries tracker.

## Technologies & Libraries Used

- **React 19 + TypeScript**: Modular functional components and strongly typed data/state models.
- **Tailwind CSS v4 (`@tailwindcss/vite`)**: Responsive layout, custom `@theme` typography (`Fraunces`, `Plus Jakarta Sans`, `JetBrains Mono`), and class-based Dark Mode (`@custom-variant dark`).
- **Lucide React (`lucide-react`)**: Accessible iconography for interactive controls.
- **Node Built-in Test Runner (`node:test`)**: Unit tests for fee calculation, form validation, document checklist math, and FAQ filtering (`src/utils/admissionsLogic.test.ts`).

## Setup & Run Instructions

```bash
# 1. Install dependencies
npm install

# 2. Start local development server (runs on http://localhost:3000)
npm run dev

# 3. Run unit tests
node --test src/utils/admissionsLogic.test.ts

# 4. Build for production
npm run build
```
