import React from 'react';
import { GraduationCap, Award, Calendar, ExternalLink } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS } from '../data';
import { Section } from './Section';
import { TechStack } from './TechStack';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-slate-100 dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Section Header */}
        <Section>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-3">
              <span className="text-accent-500 dark:text-accent-400">04.</span>
              Education & Certifications
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl">
              A continuous journey of learning, from formal education to hands-on technical certifications and self-taught mastery.
            </p>
          </div>
        </Section>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">

          {/* Tech Stack - Dominant Tile */}
          <div className="md:col-span-6 lg:col-span-8 row-span-2">
            <Section delay={100} className="h-full">
              <TechStack className="h-full" />
            </Section>
          </div>

          {/* Education - Timeline Tile */}
          <div className="md:col-span-6 lg:col-span-4 row-span-2">
            <Section delay={200} className="h-full">
              <div className="h-full p-1 rounded-2xl bg-gradient-to-br from-slate-200/50 to-slate-300/50 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-xl border border-white/20 dark:border-white/5 shadow-2xl overflow-hidden group">
                <div className="relative z-20 bg-slate-50/80 dark:bg-slate-950/80 rounded-xl p-6 h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-6">
                    <GraduationCap className="w-5 h-5 text-accent-500" />
                    <h3 className="font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider text-sm">Education</h3>
                  </div>

                  <div className="space-y-8 flex-1 overflow-y-auto pr-2 custom-scrollbar relative">
                    {/* Continuous Timeline Line */}
                    <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-accent-500 via-slate-300 dark:via-slate-700 to-transparent" />

                    {EDUCATION.map((edu) => (
                      <div key={edu.id} className="relative pl-8 last:mb-0 group/edu">
                        {/* Timeline Node */}
                        <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-accent-500 bg-slate-50 dark:bg-slate-900 group-hover/edu:bg-accent-500 transition-colors shadow-[0_0_10px_rgba(20,184,166,0.3)]" />

                        <h4 className="font-bold text-slate-800 dark:text-slate-100 text-base group-hover/edu:text-accent-500 transition-colors">
                          {edu.institution}
                        </h4>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
                          {edu.degree}
                        </p>
                        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-500 font-mono mb-3">
                          <Calendar className="w-3 h-3" />
                          {edu.period}
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed opacity-90">
                          {edu.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Section>
          </div>

          {/* Certifications - Grid Tiles */}
          <div className="md:col-span-6 lg:col-span-12">
            <Section delay={300}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {CERTIFICATIONS.map((cert) => {
                  const Tag = cert.url ? 'a' : 'div';
                  return (
                    <Tag
                      key={cert.id}
                      href={cert.url}
                      target={cert.url ? "_blank" : undefined}
                      rel={cert.url ? "noopener noreferrer" : undefined}
                      className={`
                        group relative p-4 rounded-xl border transition-all duration-300
                        ${cert.url
                          ? 'bg-white dark:bg-slate-900/50 border-slate-200 dark:border-slate-800/50 hover:border-accent-500/50 hover:shadow-lg dark:hover:shadow-accent-500/10 cursor-pointer'
                          : 'bg-slate-50 dark:bg-slate-900/30 border-transparent cursor-default'}
                      `}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <Award className={`w-5 h-5 ${cert.url ? 'text-accent-500' : 'text-slate-400'}`} />
                        {cert.url && <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-accent-500 transition-colors" />}
                      </div>
                      <h4 className="font-bold text-slate-700 dark:text-slate-200 text-sm mb-1 group-hover:text-accent-500 transition-colors">
                        {cert.name}
                      </h4>
                      <div className="flex justify-between items-center text-xs text-slate-500">
                        <span>{cert.issuer}</span>
                        <span className="font-mono bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
                          {cert.year}
                        </span>
                      </div>
                    </Tag>
                  );
                })}
              </div>
            </Section>
          </div>

        </div>
      </div>
    </section>
  );
};