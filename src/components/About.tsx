import React from 'react';
import { BIO } from '../data';
import { Section } from './Section';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-100/50 dark:bg-slate-900/30 relative">
      <div className="absolute inset-0 dot-grid pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Title Column */}
          <div className="md:col-span-1">
            <Section>
               <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-3 sticky top-24">
                <span className="text-accent-500 dark:text-accent-400">01.</span> About Me
              </h2>
            </Section>
          </div>

          {/* Content Column */}
          <div className="md:col-span-2 text-slate-600 dark:text-slate-400 text-lg leading-relaxed space-y-6">
            {BIO.summary.map((paragraph, index) => (
              <Section key={index} delay={index * 100}>
                <p>{paragraph}</p>
              </Section>
            ))}
            
            <Section delay={400}>
              <div className="mt-8 grid grid-cols-2 gap-3 text-sm font-mono text-slate-700 dark:text-slate-300">
                {[
                  'System Architecture',
                  'React & TypeScript',
                  'Cloudflare Zero Trust',
                  'Linux Administration',
                ].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-white/60 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/40 hover:border-accent-500/30 dark:hover:border-accent-400/30 transition-colors"
                  >
                    <span className="text-accent-500 dark:text-accent-400">▹</span>
                    {skill}
                  </div>
                ))}
              </div>
            </Section>
          </div>
        </div>
      </div>
    </section>
  );
};