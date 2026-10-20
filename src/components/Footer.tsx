import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1C1917] dark:bg-[#070A10] text-stone-300 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-stone-800">
          <div className="md:col-span-5">
            <div className="text-xl font-serif font-semibold text-white tracking-tight">
              EAK International School
            </div>
            <p className="text-xs text-stone-400 mt-2 max-w-sm leading-relaxed">
              An 18-acre co-educational day school committed to academic excellence, scientific inquiry, conservatory arts, and character leadership since 1999.
            </p>
            <div className="mt-4 text-xs font-mono text-stone-400">
              CBSE Affiliation No. 830492 · Cambridge Center IN842
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs font-semibold tracking-wide text-stone-400 mb-3">
              Admissions Portal Navigation
            </div>
            <ul className="grid grid-cols-2 gap-2 text-xs text-stone-300">
              <li>
                <a href="#why-choose" className="hover:text-white hover:underline">
                  02. Why Choose EAK
                </a>
              </li>
              <li>
                <a href="#academic-programs" className="hover:text-white hover:underline">
                  03. Academic Programs
                </a>
              </li>
              <li>
                <a href="#school-highlights" className="hover:text-white hover:underline">
                  04. School Highlights
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-white hover:underline">
                  05. Campus Facilities
                </a>
              </li>
              <li>
                <a href="#admission-process" className="hover:text-white hover:underline">
                  06. Admission Process
                </a>
              </li>
              <li>
                <a href="#important-dates" className="hover:text-white hover:underline">
                  07. Important Dates
                </a>
              </li>
              <li>
                <a href="#required-documents" className="hover:text-white hover:underline">
                  08. Document Checklist
                </a>
              </li>
              <li>
                <a href="#fee-information" className="hover:text-white hover:underline">
                  09. Fee Structure
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white hover:underline">
                  10. Testimonials
                </a>
              </li>
              <li>
                <a href="#faq-section" className="hover:text-white hover:underline">
                  11. Admissions FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs font-semibold tracking-wide text-stone-400 mb-3">
              Admissions Office &amp; Hours
            </div>
            <div className="space-y-2 text-xs text-stone-300 leading-relaxed">
              <p>Knowledge Park Boulevard, Sector 42, Bengaluru – 560102</p>
              <p className="font-mono tabular-nums text-stone-400">
                Mon – Sat: 9:00 AM – 4:00 PM IST
              </p>
              <p className="font-mono tabular-nums text-amber-300">
                +91 (080) 4892-2027
              </p>
              <p className="text-stone-400">admissions@eakschool.edu.in</p>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} EAK International School. All rights reserved · Academic Session 2027–28.
          </div>
          <div>
            Admissions Helpline: +91 (080) 4892-2027 · Knowledge Park Boulevard, Bengaluru
          </div>
        </div>
      </div>
    </footer>
  );
};
