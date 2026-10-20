import React from 'react';
import { DIFFERENTIATORS } from '../data/schoolData';

export const WhyChooseSection: React.FC = () => {
  return (
    <section
      id="why-choose"
      aria-labelledby="why-choose-heading"
      className="py-16 lg:py-24 border-b border-stone-200 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wide text-[#9A3412] dark:text-amber-400 mb-2">
            02. Why Choose EAK International School?
          </div>
          <h2
            id="why-choose-heading"
            className="text-3xl sm:text-4xl font-serif font-semibold text-stone-900 dark:text-white tracking-tight"
          >
            Six Pillars of an Education Built for the Next Decade.
          </h2>
          <p className="mt-4 text-base text-stone-600 dark:text-slate-300 leading-relaxed">
            Parents choose EAK International School because we refuse to compromise between high academic achievement and joyful, well-rounded childhood development.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIFFERENTIATORS.map((item) => (
            <article
              key={item.id}
              className={`rounded-xl border border-stone-200 dark:border-slate-800 bg-white dark:bg-[#111726] p-6 sm:p-8 flex flex-col justify-between transition-colors hover:border-stone-400 dark:hover:border-slate-600 ${
                item.span === 'large' ? 'lg:col-span-2 bg-[#F7F4EE]/60 dark:bg-[#131C2E]' : ' lg:col-span-1'
              }`}
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-stone-500 dark:text-slate-400 mb-4">
                  <span className="font-mono font-semibold text-sm text-[#1E3A8A] dark:text-blue-400">
                    {item.index}
                  </span>
                  <span className="font-mono tabular-nums text-stone-600 dark:text-slate-300">
                    {item.metric}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-semibold text-stone-900 dark:text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-stone-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200/80 dark:border-slate-800/80 flex items-center justify-between text-xs text-stone-500 dark:text-slate-400">
                <span>Audited Annual Academic Benchmark</span>
                <a
                  href="#academic-programs"
                  className="font-semibold text-[#1E3A8A] dark:text-blue-400 hover:underline"
                >
                  Explore Curriculum →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
