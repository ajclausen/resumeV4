import React from 'react';
import { ArrowUpRight, Calendar } from 'lucide-react';
import { EXPERIENCE } from '../data';
import { Section } from './Section';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Section>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-12 flex items-center gap-3">
            <span className="text-accent-500 dark:text-accent-400">02.</span> Experience
            <span className="h-px bg-gradient-to-r from-slate-300 dark:from-slate-700 to-transparent flex-grow ml-4"></span>
          </h2>
        </Section>

        <div className="relative ml-3 md:ml-6 space-y-12">
          {/* Gradient timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent-500/50 via-slate-300 dark:via-slate-700 to-transparent" />
          {EXPERIENCE.map((job, index) => (
            <div key={job.id} className="relative pl-8 md:pl-12 group">
              {/* Fluid Background Layer - Transitions opacity instead of background-color for smoothness */}
              <div className="absolute -inset-4 rounded-xl bg-slate-50/80 dark:bg-slate-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out pointer-events-none backdrop-blur-sm" />

              {/* Timeline Dot - Independent of content movement */}
              <div className="absolute -left-[6px] md:-left-[6px] top-6 w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-400 dark:border-slate-600 z-20 transition-all duration-500 ease-out group-hover:bg-accent-500 dark:group-hover:bg-accent-400 group-hover:border-accent-500 dark:group-hover:border-accent-400 group-hover:scale-125 shadow-sm" />

              {/* Content Container - subtle slide effect */}
              <div className="relative z-10 transition-transform duration-500 ease-out group-hover:translate-x-1">
                <Section delay={index * 100}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 group-hover:text-accent-500 dark:group-hover:text-accent-400 transition-colors duration-300 flex items-center gap-2">
                      {job.role}
                      <span className="text-slate-500 dark:text-slate-500 text-lg font-normal transition-colors duration-300 group-hover:text-slate-700 dark:group-hover:text-slate-400">@ {job.company}</span>
                    </h3>
                    <span className="text-sm font-mono text-slate-500 uppercase tracking-wider flex items-center gap-1 mt-1 sm:mt-0">
                      <Calendar className="w-3 h-3" /> {job.period}
                    </span>
                  </div>

                  <div className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 max-w-3xl group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
                    {Array.isArray(job.description) ? (
                      <ul className="space-y-2 list-disc pl-4">
                        {job.description.map((item, i) => (
                          <li key={i}>
                            {item.split(/(\*\*.*?\*\*)/).map((part, index) =>
                              part.startsWith('**') && part.endsWith('**') ? (
                                <strong key={index} className="font-semibold text-slate-800 dark:text-slate-200">
                                  {part.slice(2, -2)}
                                </strong>
                              ) : (
                                part
                              )
                            )}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>{job.description}</p>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-white dark:bg-slate-900 text-accent-600 dark:text-accent-400 border border-slate-200 dark:border-slate-800/50 group-hover:border-accent-500/30 dark:group-hover:border-accent-400/30 transition-colors shadow-sm dark:shadow-none"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Section>
              </div>
            </div>
          ))}

          <Section delay={EXPERIENCE.length * 100} className="pl-8 md:pl-12 mt-12 pt-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-500 hover:text-accent-500 dark:hover:text-accent-400 transition-all duration-300 border-b border-transparent hover:border-accent-500 dark:hover:border-accent-400 pb-0.5 group"
            >
              <span className="font-mono text-sm font-medium">View Full Résumé</span>
              <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </Section>
        </div>
      </div>
    </section>
  );
};