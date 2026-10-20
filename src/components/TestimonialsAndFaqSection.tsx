import React, { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import {
  PARENT_TESTIMONIALS,
  FAQ_ITEMS,
  FaqItem,
} from '../data/schoolData';
import { filterFaqs } from '../utils/admissionsLogic';

export const TestimonialsAndFaqSection: React.FC = () => {
  const [openFaqIds, setOpenFaqIds] = useState<string[]>([
    FAQ_ITEMS[0].id,
    FAQ_ITEMS[1].id,
  ]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories: Array<'All' | FaqItem['category']> = [
    'All',
    'Admissions',
    'Assessment',
    'Fees & Scholarships',
    'Campus & Visits',
  ];

  const filteredFaqList = filterFaqs(FAQ_ITEMS, searchQuery, selectedCategory);

  const toggleFaq = (id: string) => {
    setOpenFaqIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setOpenFaqIds(filteredFaqList.map((f) => f.id));
  };

  const collapseAll = () => {
    setOpenFaqIds([]);
  };

  return (
    <div className="border-b border-stone-200 dark:border-slate-800">
      {/* SECTION 10: PARENT TESTIMONIALS */}
      <section
        id="testimonials"
        aria-labelledby="testimonials-heading"
        className="py-16 lg:py-24 border-b border-stone-200 dark:border-slate-800 bg-[#F7F4EE]/50 dark:bg-[#0E1420]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold tracking-wide text-[#9A3412] dark:text-amber-400 mb-2">
              10. Parent Testimonials &amp; Family Voices
            </div>
            <h2
              id="testimonials-heading"
              className="text-3xl sm:text-4xl font-serif font-semibold text-stone-900 dark:text-white tracking-tight"
            >
              Why Families Trust EAK International School With Their Children’s Future.
            </h2>
            <p className="mt-3 text-base text-stone-600 dark:text-slate-300 leading-relaxed">
              Read firsthand experiences from parents across Primary, Middle, and Senior Secondary grades on how our faculty and campus culture shaped their children’s confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PARENT_TESTIMONIALS.map((item) => (
              <article
                key={item.id}
                className="rounded-xl border border-stone-200 dark:border-slate-800 bg-white dark:bg-[#111726] p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  {/* Unboxed Outcome Kicker */}
                  <div className="text-xs font-mono text-[#1E3A8A] dark:text-blue-400 pb-3 mb-4 border-b border-stone-100 dark:border-slate-800">
                    Outcome · {item.outcomeHighlight}
                  </div>

                  <blockquote className="text-base sm:text-lg font-serif italic text-stone-800 dark:text-slate-200 leading-relaxed mb-6">
                    “{item.quote}”
                  </blockquote>
                </div>

                <footer className="pt-4 border-t border-stone-200/80 dark:border-slate-800 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold text-stone-900 dark:text-white">
                      {item.parentName}
                    </div>
                    <div className="text-xs text-stone-500 dark:text-slate-400 mt-0.5">
                      {item.parentRole} · {item.studentInfo}
                    </div>
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: FREQUENTLY ASKED QUESTIONS (FAQ ACCORDION) */}
      <section
        id="faq-section"
        aria-labelledby="faq-heading"
        className="py-16 lg:py-24"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-xs font-semibold tracking-wide text-[#9A3412] dark:text-amber-400 mb-2">
                11. Frequently Asked Questions (FAQ)
              </div>
              <h2
                id="faq-heading"
                className="text-3xl sm:text-4xl font-serif font-semibold text-stone-900 dark:text-white tracking-tight"
              >
                Answers to Common Admissions &amp; Campus Questions.
              </h2>
            </div>

            <div className="flex items-center gap-3 text-xs shrink-0">
              <button
                type="button"
                onClick={expandAll}
                className="font-semibold text-[#1E3A8A] dark:text-blue-400 hover:underline cursor-pointer whitespace-nowrap"
              >
                Expand All
              </button>
              <span aria-hidden="true" className="text-stone-400">·</span>
              <button
                type="button"
                onClick={collapseAll}
                className="font-semibold text-stone-600 dark:text-slate-400 hover:underline cursor-pointer whitespace-nowrap"
              >
                Collapse All
              </button>
            </div>
          </div>

          {/* Search & Category Filter Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
            <div className="relative flex-1">
              <Search
                className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions (e.g., transfer certificate, entrance test, bus)..."
                aria-label="Search frequently asked questions"
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-stone-300 dark:border-slate-700 bg-white dark:bg-[#111726] text-stone-900 dark:text-white placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
              />
            </div>

            <div
              role="group"
              aria-label="Filter FAQs by topic"
              className="flex flex-wrap items-center gap-1 p-1 bg-stone-200/80 dark:bg-slate-800 rounded-lg"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    selectedCategory === cat
                      ? 'bg-white dark:bg-slate-900 text-stone-900 dark:text-white shadow-xs'
                      : 'text-stone-600 dark:text-slate-300 hover:text-stone-900 dark:hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Accordion List */}
          {filteredFaqList.length === 0 ? (
            <div className="p-8 text-center rounded-xl border border-stone-200 dark:border-slate-800 bg-white dark:bg-[#111726]">
              <p className="text-sm text-stone-600 dark:text-slate-300">
                No questions matched “{searchQuery}”. Try clearing the search filter or ask our Admissions Team below.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="mt-3 text-xs font-semibold text-[#1E3A8A] dark:text-blue-400 hover:underline cursor-pointer"
              >
                Reset FAQ Filters
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredFaqList.map((faq, idx) => {
                const isOpen = openFaqIds.includes(faq.id);
                const panelId = `faq-panel-${faq.id}`;
                const buttonId = `faq-btn-${faq.id}`;
                return (
                  <div
                    key={faq.id}
                    className="rounded-xl border border-stone-200 dark:border-slate-800 bg-white dark:bg-[#111726] overflow-hidden"
                  >
                    <h3>
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-stone-50/80 dark:hover:bg-slate-800/40 transition-colors cursor-pointer"
                      >
                        <div className="flex items-baseline gap-3">
                          <span className="text-xs font-mono font-semibold text-[#1E3A8A] dark:text-blue-400 shrink-0 tabular-nums">
                            Q0{idx + 1}.
                          </span>
                          <span className="text-base sm:text-lg font-serif font-semibold text-stone-900 dark:text-white">
                            {faq.question}
                          </span>
                        </div>
                        <ChevronDown
                          className={`w-5 h-5 text-stone-500 dark:text-slate-400 shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-[#1E3A8A] dark:text-blue-400' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                    </h3>
                    {isOpen && (
                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        className="px-6 pb-5 pt-1 border-t border-stone-100 dark:border-slate-800/80 text-sm sm:text-base text-stone-600 dark:text-slate-300 leading-relaxed"
                      >
                        <div className="text-xs font-mono text-stone-400 dark:text-slate-500 mb-1.5">
                          Category: {faq.category}
                        </div>
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
