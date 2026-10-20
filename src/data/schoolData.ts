export interface Differentiator {
  id: string;
  index: string;
  title: string;
  metric: string;
  description: string;
  span: 'large' | 'normal';
}

export interface AcademicProgram {
  id: 'primary' | 'middle' | 'secondary' | 'senior-secondary';
  level: string;
  classes: string;
  ageRange: string;
  ratio: string;
  curriculum: string;
  summary: string;
  features: string[];
  subjects: string[];
  outcomeMetric: string;
}

export interface SchoolHighlight {
  id: string;
  value: string;
  label: string;
  context: string;
}

export interface FacilityItem {
  id: string;
  category: 'Academics' | 'Athletics' | 'Student Care';
  title: string;
  capacityOrSpec: string;
  summary: string;
  details: string[];
  hours: string;
  illustrationType: 'classroom' | 'lab' | 'library' | 'sports' | 'transport' | 'medical' | 'cafeteria';
}

export interface AdmissionStep {
  stepNumber: number;
  title: string;
  shortLabel: string;
  duration: string;
  description: string;
  parentAction: string;
}

export interface ImportantDateItem {
  id: string;
  phase: string;
  event: string;
  date: string;
  applicableGrades: string;
  note: string;
}

export interface RequiredDocumentItem {
  id: string;
  title: string;
  format: string;
  mandatoryFor: string;
  detail: string;
}

export interface FeeRow {
  id: 'grade-1-5' | 'grade-6-8' | 'grade-9-12';
  gradeRange: string;
  levelName: string;
  annualFee: number;
  admissionFee: number;
  annualFeeFormatted: string;
  admissionFeeFormatted: string;
  quarterlyInstallment: number;
  includes: string;
}

export interface TestimonialItem {
  id: string;
  parentName: string;
  parentRole: string;
  studentInfo: string;
  quote: string;
  outcomeHighlight: string;
}

export interface FaqItem {
  id: string;
  category: 'Admissions' | 'Assessment' | 'Fees & Scholarships' | 'Campus & Visits';
  question: string;
  answer: string;
}

export const SCHOOL_HIGHLIGHTS: SchoolHighlight[] = [
  {
    id: 'years',
    value: '28 Years',
    label: 'Academic Excellence',
    context: 'Established 1999 · CBSE & Cambridge Pathways',
  },
  {
    id: 'alumni',
    value: '14,500+',
    label: 'Global Alumni Network',
    context: 'Placed across 180+ premier global universities',
  },
  {
    id: 'faculty',
    value: '240+',
    label: 'Postgraduate Faculty',
    context: '12:1 student-teacher ratio across all grades',
  },
  {
    id: 'activities',
    value: '36+',
    label: 'Sports & Co-Curriculars',
    context: '18-acre Wi-Fi 6 & solar-powered green campus',
  },
];

export const DIFFERENTIATORS: Differentiator[] = [
  {
    id: 'faculty',
    index: '01.',
    title: 'Experienced Mentors & Low Class Ratios',
    metric: '12:1 Student–Teacher Ratio · 78% Postgraduate Faculty',
    description:
      'Every classroom is led by subject specialists with an average of 11+ years of teaching experience, ensuring individualized academic diagnostics and mentorship for every learner.',
    span: 'large',
  },
  {
    id: 'results',
    index: '02.',
    title: 'Proven Board & Competitive Results',
    metric: '98.6% Cohort Distinction Rate (2025–26)',
    description:
      'Consistent top-decile performance in Grade 10 and 12 board examinations alongside national Olympiad, debate, and STEM research fellowships.',
    span: 'normal',
  },
  {
    id: 'infrastructure',
    index: '03.',
    title: 'Purpose-Built Modern Infrastructure',
    metric: '18-Acre IGBC Platinum Certified Campus',
    description:
      'Acoustically engineered smart classrooms, wet and dry innovation labs, a 42,000-volume media library, and climate-controlled indoor athletic arenas.',
    span: 'normal',
  },
  {
    id: 'holistic',
    index: '04.',
    title: 'Holistic Character & Arts Education',
    metric: '4 Hours Weekly Dedicated to Performing Arts & Community Service',
    description:
      'Structured conservatory training in classical and contemporary music, theatre, visual arts, and mandatory civic leadership projects from Grade 3.',
    span: 'normal',
  },
  {
    id: 'sports',
    index: '05.',
    title: 'Championship Sports & Athletics Program',
    metric: 'Olympic-Size Heated Pool · 400m Synthetic Track',
    description:
      'Professional coaching before and after school across swimming, lawn tennis, basketball, cricket, archery, and gymnastics with sports nutrition guidance.',
    span: 'normal',
  },
  {
    id: 'safety-tech',
    index: '06.',
    title: 'Safe Campus & Technology-Enabled Learning',
    metric: 'RFID Campus Access · Live GPS Bus Tracking · AI-Assisted STEM Labs',
    description:
      '360-degree verified security supervision, full-time pediatric nurses on campus, and responsible digital literacy integrated into daily coursework.',
    span: 'large',
  },
];

export const ACADEMIC_PROGRAMS: AcademicProgram[] = [
  {
    id: 'primary',
    level: 'Primary Wing',
    classes: 'Grades 1 – 5',
    ageRange: 'Ages 6 – 10 Years',
    ratio: '12:1 Ratio (Two Co-Teachers in Grades 1–2)',
    curriculum: 'Foundational Literacy, Numeracy & Inquiry-Based Learning',
    summary:
      'Builds deep conceptual fluency in language, mathematics, and environmental discovery through hands-on manipulatives, storytelling, and joyful studio projects without rote pressure.',
    features: [
      'Phonics-to-literature reading labs & bilingual fluency workshops',
      'Concrete-Pictorial-Abstract (CPA) Singapore Math methodology',
      'Weekly makerspace tinkering, pottery, and outdoor kitchen gardening',
      'Continuous formative observation instead of high-stakes exams',
    ],
    subjects: ['English Literature', 'Mathematics', 'Environmental Studies', 'Hindi / Third Language', 'Computational Thinking', 'Visual & Performing Arts'],
    outcomeMetric: '100% Grade-Level Reading & Numeracy Benchmark by Grade 3',
  },
  {
    id: 'middle',
    level: 'Middle Wing',
    classes: 'Grades 6 – 8',
    ageRange: 'Ages 11 – 13 Years',
    ratio: '15:1 Ratio with Dedicated Homeroom Advisors',
    curriculum: 'Interdisciplinary STEM, Humanities & Skill Exploration',
    summary:
      'Transitions learners from foundational curiosity to analytical rigor. Students conduct laboratory experiments, build autonomous robotics, and participate in Model UN and civic debates.',
    features: [
      'Separate Physics, Chemistry, and Biology laboratory practicums',
      'Python programming, electronics prototyping, and design thinking',
      'Choice of French, German, Sanskrit, or Spanish as third language',
      'Term-end research symposiums and guided adolescent wellness mentoring',
    ],
    subjects: ['English', 'Advanced Mathematics', 'Integrated Sciences', 'History & Civics', 'Geography', 'Coding & Robotics', 'Modern Foreign Languages'],
    outcomeMetric: '84% Participation in State & National Science Olympiads',
  },
  {
    id: 'secondary',
    level: 'Secondary Wing',
    classes: 'Grades 9 – 10',
    ageRange: 'Ages 14 – 15 Years',
    ratio: '15:1 Ratio with Subject Mentors',
    curriculum: 'National Board Preparation & Applied Research Portfolio',
    summary:
      'Combines rigorous academic preparation for Grade 10 board examinations with real-world internships, financial literacy, and personalized psychometric stream counseling.',
    features: [
      'Diagnostic mastery tracking with small-group remedial and enrichment clinics',
      'Board laboratory portfolio guidance and structured mock exam series',
      'Mandatory 30-hour social impact project and entrepreneurship bootcamp',
      'One-on-one aptitude testing for Senior Secondary stream selection',
    ],
    subjects: ['English Language & Lit', 'Standard / Applied Mathematics', 'Physics, Chemistry & Biology', 'Social Sciences', 'Artificial Intelligence / Economics'],
    outcomeMetric: '94.2% Mean Board Score Across Last 5 Graduating Cohorts',
  },
  {
    id: 'senior-secondary',
    level: 'Senior Secondary Wing',
    classes: 'Grades 11 – 12',
    ageRange: 'Ages 16 – 18 Years',
    ratio: '12:1 Seminar-Style Cohort Ratio',
    curriculum: 'Specialized Streams: Science (PCM/PCB), Commerce & Humanities',
    summary:
      'Pre-university academic specialization paired with an in-house University Placement Cell guiding applications to IITs, AIIMS, Ivy League, Oxbridge, and leading liberal arts institutions.',
    features: [
      'Flexible elective combinations across STEM, Economics, Psychology, and Legal Studies',
      'Dedicated university counseling for India (CUET/JEE/NEET) & Global (SAT/UCAS) admissions',
      'Faculty-mentored capstone research papers and industry summer fellowships',
      'Alumni mentorship circles and mock interview panels',
    ],
    subjects: ['Physics / Chemistry / Maths / Bio', 'Economics / Accountancy / Business', 'Psychology / Political Science / History', 'Computer Science / Fine Arts'],
    outcomeMetric: 'Rs. 18.4 Cr+ in Merit University Scholarships Awarded to Class of 2026',
  },
];

export const FACILITIES: FacilityItem[] = [
  {
    id: 'smart-classrooms',
    category: 'Academics',
    title: 'Ergonomic Smart Classrooms',
    capacityOrSpec: '96 Studios · Max 24 Students per Room',
    summary:
      'Daylight-optimized learning studios featuring 4K interactive flat panels, acoustic wall treatments, CO2 air-quality sensors, and modular collaborative seating.',
    details: [
      'Interactive 75-inch touch displays with instant lesson capture for parent review',
      'HEPA-13 central air filtration maintaining AQI below 25 indoors year-round',
      'Individual lockable cubbies and flexible seminar table layouts',
    ],
    hours: '7:45 AM – 3:30 PM (Mon–Fri)',
    illustrationType: 'classroom',
  },
  {
    id: 'science-computer-labs',
    category: 'Academics',
    title: 'Science, AI & Robotics Laboratories',
    capacityOrSpec: '8 Specialized Labs · 1:1 Workstation Ratio',
    summary:
      'Dedicated wet and dry laboratories for Physics, Chemistry, Biotechnology, 3D Fabrication, and AI Computing equipped with research-grade instrumentation.',
    details: [
      'Fume-hood equipped Chemistry lab with eyewash stations and safety interlocks',
      'Robotics arena with VEX kits, Raspberry Pi clusters, and SLA 3D printers',
      'Digital microscopy and spectrophotometry units for Senior Secondary research',
    ],
    hours: '8:00 AM – 4:30 PM (Supervised Access)',
    illustrationType: 'lab',
  },
  {
    id: 'central-library',
    category: 'Academics',
    title: 'The Vikram Sarabhai Central Library',
    capacityOrSpec: '42,000+ Print Volumes · 180 Reading Seats',
    summary:
      'A two-level archival and digital reading sanctuary with quiet study carrels, storytelling amphitheatres for primary readers, and global journal subscriptions.',
    details: [
      'Curated collections in English, Hindi, French, German, and world literature',
      'Digital access to JSTOR, Britannica Academic, and PressReader',
      'Dedicated Primary Reading Forest and Senior Research Commons',
    ],
    hours: '7:30 AM – 5:00 PM (Mon–Sat)',
    illustrationType: 'library',
  },
  {
    id: 'sports-complex',
    category: 'Athletics',
    title: 'Olympic Sports & Aquatic Complex',
    capacityOrSpec: '6.5 Acres Outdoor + 45,000 sq.ft Indoor Arena',
    summary:
      'All-weather athletic infrastructure featuring an 8-lane heated swimming pool, 400m World Athletics-compliant synthetic track, and hardwood indoor courts.',
    details: [
      'FINA-standard 50m temperature-controlled pool with certified lifeguards',
      '4 synthetic lawn tennis courts, 3 wooden badminton courts, and squash glass court',
      'FIFA-size natural turf football field and floodlit cricket practice nets',
    ],
    hours: '6:30 AM – 6:00 PM (Morning & Evening Coaching)',
    illustrationType: 'sports',
  },
  {
    id: 'transport',
    category: 'Student Care',
    title: 'GPS-Monitored AC Transport Fleet',
    capacityOrSpec: '54 EV & CNG Buses · 42 Verified City Routes',
    summary:
      'Air-conditioned school coaches equipped with real-time parent app GPS tracking, dual interior CCTV cameras, speed governors, and a trained female attendant on every bus.',
    details: [
      'Instant SMS/App notification when your child boards and alights the bus',
      'RFID smart-card attendance swipe at bus entry and campus gate',
      'First-aid certified driver and Lady Transport Marshal on all 42 routes',
    ],
    hours: 'Morning Pickups & 2:30 PM / 4:30 PM Dispersal Runs',
    illustrationType: 'transport',
  },
  {
    id: 'medical-support',
    category: 'Student Care',
    title: '12-Bed Pediatric Medical Infirmary',
    capacityOrSpec: '2 Full-Time Nurses · Visiting Pediatrician & Counselor',
    summary:
      'Round-the-clock on-campus clinical care with isolation observation bays, annual health screenings, psychological counseling suites, and a dedicated emergency ambulance.',
    details: [
      'Direct tie-up with Apollo Children’s Hospital (1.8 km from campus gate)',
      'Biannual dental, vision, and nutritional growth tracking for all students',
      'Confidential student wellness and mindfulness counseling rooms',
    ],
    hours: '7:15 AM – 5:30 PM (All Operational Days)',
    illustrationType: 'medical',
  },
  {
    id: 'cafeteria',
    category: 'Student Care',
    title: 'Annapurna Organic Dining Hall',
    capacityOrSpec: '650-Seat Dining Commons · FSSAI 5-Star Hygiene Rated',
    summary:
      'Nutritionist-curated vegetarian hot breakfasts and wholesome lunches prepared fresh in a zero-trans-fat stainless steel kitchen using farm-traceable produce.',
    details: [
      'Monthly rotating menu reviewed by a pediatric dietitian and parent committee',
      'Strict nut-free and allergen-labeled counters for students with dietary sensitivities',
      'RO+UV mineralized drinking water stations across every corridor',
    ],
    hours: 'Breakfast 8:15 AM · Lunch 12:15 PM – 1:45 PM',
    illustrationType: 'cafeteria',
  },
];

export const ADMISSION_STEPS: AdmissionStep[] = [
  {
    stepNumber: 1,
    title: 'Enquiry',
    shortLabel: 'Submit Online Enquiry & Campus Tour',
    duration: 'Day 1 (5 mins)',
    description:
      'Submit the online admission enquiry form or book a guided campus visit. An admissions counselor will share the digital prospectus and grade-specific availability.',
    parentAction: 'Fill Enquiry Form or Book Campus Visit',
  },
  {
    stepNumber: 2,
    title: 'Application',
    shortLabel: 'Complete Application & Upload Documents',
    duration: 'Within 7 Days',
    description:
      'Complete the formal registration form and upload the required student and parent verification documents (birth certificate, academic transcripts, and ID proof).',
    parentAction: 'Submit Application Packet & Checklist',
  },
  {
    stepNumber: 3,
    title: 'Assessment / Interaction',
    shortLabel: 'Age-Appropriate Interaction or Readiness Check',
    duration: 'Scheduled Saturday',
    description:
      'Grades 1–5 participate in an informal faculty & parent interaction. Grades 6–12 complete a diagnostic proficiency check in English, Mathematics, and Scientific Reasoning.',
    parentAction: 'Attend On-Campus Interaction Session',
  },
  {
    stepNumber: 4,
    title: 'Selection',
    shortLabel: 'Admission Offer & Scholarship Notification',
    duration: 'Within 5 Working Days',
    description:
      'The Admissions Committee reviews holistic readiness and communicates the formal Offer of Admission via email and parent portal along with fee payment timelines.',
    parentAction: 'Review Official Offer Letter',
  },
  {
    stepNumber: 5,
    title: 'Enrollment',
    shortLabel: 'Fee Deposit, Orientation & Uniform Kit',
    duration: 'Within 14 Days of Offer',
    description:
      'Confirm the seat by remitting the admission fee and first-term tuition, submitting original Transfer Certificate, and attending the New Parent Orientation.',
    parentAction: 'Complete Fee Payment & Seat Confirmation',
  },
];

export const IMPORTANT_DATES: ImportantDateItem[] = [
  {
    id: 'app-open',
    phase: 'Phase 01',
    event: 'Application Opening',
    date: 'November 02, 2026',
    applicableGrades: 'Grades 1 to 12',
    note: 'Online prospectus, registration portal, and weekday campus tours open.',
  },
  {
    id: 'app-deadline',
    phase: 'Phase 02',
    event: 'Application Deadline (Cycle 1)',
    date: 'January 15, 2027',
    applicableGrades: 'Grades 1 to 9 & Grade 11',
    note: 'Final date to submit completed application forms with supporting documents.',
  },
  {
    id: 'assessment-date',
    phase: 'Phase 03',
    event: 'Assessment & Parent Interaction',
    date: 'January 23 – January 30, 2027',
    applicableGrades: 'All Applicant Cohorts',
    note: 'Morning slots (9:30 AM – 12:30 PM) assigned individually via email.',
  },
  {
    id: 'result-date',
    phase: 'Phase 04',
    event: 'Result Announcement & Offer Letters',
    date: 'February 08, 2027',
    applicableGrades: 'All Selected Candidates',
    note: 'First merit list and scholarship awards published on the Admissions Portal.',
  },
  {
    id: 'enrollment-deadline',
    phase: 'Phase 05',
    event: 'Enrollment & Fee Confirmation Deadline',
    date: 'February 24, 2027',
    applicableGrades: 'Confirmed Seat Holders',
    note: 'Academic Session 2027–28 commences on Monday, April 05, 2027.',
  },
];

export const REQUIRED_DOCUMENTS: RequiredDocumentItem[] = [
  {
    id: 'birth-cert',
    title: 'Municipal Birth Certificate',
    format: 'Self-attested photocopy & digital PDF scan',
    mandatoryFor: 'Mandatory for All Grades (1–12)',
    detail: 'Issued by Municipal Corporation or Registrar of Births and Deaths with child’s full name.',
  },
  {
    id: 'school-records',
    title: 'Previous School Academic Records & Transfer Certificate',
    format: 'Last 2 years report cards + Original TC',
    mandatoryFor: 'Mandatory for Grades 2–12',
    detail: 'Final report card of previous grade and PEN / UDISE Transfer Certificate (original TC can be submitted before March 25, 2027).',
  },
  {
    id: 'photos',
    title: 'Passport-Size Colour Photographs',
    format: '4 Student Photos + 2 Each of Parents (White Background)',
    mandatoryFor: 'Mandatory for All Grades (1–12)',
    detail: 'Taken within the last 3 months in formal attire (35mm x 45mm matte finish).',
  },
  {
    id: 'address-proof',
    title: 'Current Residential Address Proof',
    format: 'Passport / Aadhaar / Utility Bill / Registered Lease',
    mandatoryFor: 'Mandatory for All Grades (1–12)',
    detail: 'Used for transport route allocation and official correspondence verification.',
  },
  {
    id: 'parent-id',
    title: 'Parent / Legal Guardian Government ID Proof',
    format: 'Aadhaar Card, PAN Card, or Passport of Both Parents',
    mandatoryFor: 'Mandatory for All Grades (1–12)',
    detail: 'Self-attested copy required for campus security RFID issuance and statutory records.',
  },
  {
    id: 'medical-cert',
    title: 'Child Immunization & Medical Fitness Record',
    format: 'Signed by Registered Pediatrician + Blood Group Report',
    mandatoryFor: 'Mandatory prior to Session Start',
    detail: 'Ensures our campus infirmary has accurate allergy and vaccination history.',
  },
];

export const FEE_STRUCTURE: FeeRow[] = [
  {
    id: 'grade-1-5',
    gradeRange: 'Grade 1–5',
    levelName: 'Primary Wing',
    annualFee: 45000,
    admissionFee: 8000,
    annualFeeFormatted: 'Rs. 45,000',
    admissionFeeFormatted: 'Rs. 8,000',
    quarterlyInstallment: 11250,
    includes: 'Tuition, Smart Classroom Resources, Library & Primary Activity Studio',
  },
  {
    id: 'grade-6-8',
    gradeRange: 'Grade 6–8',
    levelName: 'Middle Wing',
    annualFee: 58000,
    admissionFee: 10000,
    annualFeeFormatted: 'Rs. 58,000',
    admissionFeeFormatted: 'Rs. 10,000',
    quarterlyInstallment: 14500,
    includes: 'Tuition, Science & Robotics Lab Practicums, Library & Athletics Coaching',
  },
  {
    id: 'grade-9-12',
    gradeRange: 'Grade 9–12',
    levelName: 'Secondary & Senior Secondary',
    annualFee: 72000,
    admissionFee: 12000,
    annualFeeFormatted: 'Rs. 72,000',
    admissionFeeFormatted: 'Rs. 12,000',
    quarterlyInstallment: 18000,
    includes: 'Tuition, Advanced Research Labs, Board Prep Clinics & University Counseling',
  },
];

export const PARENT_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    parentName: 'Dr. Ananya Deshmukh',
    parentRole: 'Senior Pediatrician, Apollo Hospitals',
    studentInfo: 'Mother of Aarav (Grade 4) & Meera (Grade 8)',
    quote:
      'When we relocated to the city two years ago, my son struggled with math anxiety. Within one term at EAK International School, the hands-on Singapore Math labs and 12:1 teacher attention completely transformed his confidence. Both of my children now look forward to Monday mornings.',
    outcomeHighlight: 'Transitioned from math hesitancy to State Olympiad Silver Medalist in 14 months',
  },
  {
    id: 'test-2',
    parentName: 'Rajeshwar & Kavita Iyer',
    parentRole: 'Principal Architect & Chartered Accountant',
    studentInfo: 'Parents of Siddharth (Grade 11 — PCM & Computer Science)',
    quote:
      'Most senior secondary schools force families to choose between coaching factories and holistic personality growth. EAK gave Siddharth rigorous Physics and AI lab mentorship while supporting his national debate tournament schedule and university portfolio.',
    outcomeHighlight: '97.4% Grade 10 Board Aggregate & National Robotics Finalist',
  },
  {
    id: 'test-3',
    parentName: 'Vikramjit Singh Gill',
    parentRole: 'Vice President of Engineering, FinTech Global',
    studentInfo: 'Father of Noor (Grade 2)',
    quote:
      'As working parents, campus safety and transparent communication were non-negotiable for us. From live GPS bus alerts to the organic dining hall and warm homeroom teachers who know every child’s learning style, EAK sets the gold standard.',
    outcomeHighlight: '100% transparent parent-teacher communication & stress-free primary onboarding',
  },
  {
    id: 'test-4',
    parentName: 'Meenakshi Sundaram',
    parentRole: 'Classical Vocalist & Arts Educator',
    studentInfo: 'Mother of Devika (Grade 6)',
    quote:
      'What stood out during our first campus visit was how seriously the school treats both scientific inquiry and performing arts. Devika spends her mornings in the robotics studio and her afternoons swimming in the heated Olympic pool.',
    outcomeHighlight: 'Balanced growth across STEM innovation and state-level aquatic athletics',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-classes',
    category: 'Admissions',
    question: 'Which grades are accepting applications for the 2027–28 academic session?',
    answer:
      'Admissions for Academic Session 2027–28 are open for Grade 1 through Grade 9 and Grade 11 (Science, Commerce, and Humanities streams). Limited lateral-entry seats in Grade 10 and Grade 12 are considered strictly for transfer cases with matching board subjects and strong academic records.',
  },
  {
    id: 'faq-process',
    category: 'Admissions',
    question: 'What is the step-by-step admission process and how long does it take?',
    answer:
      'Our five-step admission process consists of: (1) Online Enquiry or Campus Visit, (2) Application Submission with required documents, (3) Age-appropriate Student Interaction or Readiness Assessment, (4) Selection & Offer Notification within 5 working days, and (5) Seat Enrollment via fee deposit. The entire cycle typically completes within 12 to 15 days.',
  },
  {
    id: 'faq-assessment',
    category: 'Assessment',
    question: 'Is there an entrance examination for Primary classes (Grades 1–5)?',
    answer:
      'For Grades 1 to 5, there is no formal written examination. Instead, we conduct a joyful, stress-free 30-minute interactive session with the child and parents to understand foundational language readiness, curiosity, and developmental milestones. Written proficiency diagnostics in English, Mathematics, and Science begin from Grade 6 onwards.',
  },
  {
    id: 'faq-documents',
    category: 'Admissions',
    question: 'Can we submit the application if we do not have the Transfer Certificate (TC) yet?',
    answer:
      'Yes. You may apply and secure provisional admission using your child’s Municipal Birth Certificate, previous year’s final report card, current year’s mid-term report card, photographs, and parent ID/address proof. The original Transfer Certificate (TC) from the previous school must be submitted on or before March 25, 2027.',
  },
  {
    id: 'faq-visit',
    category: 'Campus & Visits',
    question: 'How do we schedule a guided campus tour and meet the faculty?',
    answer:
      'Campus visits are conducted Monday through Saturday between 9:00 AM and 4:00 PM by prior appointment. Simply click "Schedule a Visit" or "Book a Campus Visit" on this page, choose your preferred date, and our Admissions Counselor will host a 45-minute personalized tour of the classrooms, labs, sports arena, and dining hall.',
  },
  {
    id: 'faq-fees',
    category: 'Fees & Scholarships',
    question: 'Can the annual fee be paid in installments, and are sibling concessions available?',
    answer:
      'Yes. Families may opt to pay the Annual Fee in four equal quarterly installments with zero installment surcharge, or avail a 5% early-payment rebate on single-installment annual payment. A 10% tuition fee concession is awarded to the second child (sibling) enrolled at EAK International School.',
  },
  {
    id: 'faq-transport',
    category: 'Campus & Visits',
    question: 'How does the school ensure student safety on campus and in school buses?',
    answer:
      'Our 18-acre campus is secured by RFID entry gates, 280+ HD CCTV cameras, and verified security personnel. All 54 air-conditioned school buses feature real-time GPS parent tracking, dual interior cameras, speed governors, and a trained female transport attendant from the first pickup to the final drop.',
  },
];
