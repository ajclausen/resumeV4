import React from 'react';
import { BIO } from '../data';
import { Section } from './Section';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-100/50 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <div className="mt-8 grid grid-cols-2 gap-4 text-sm font-mono text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="text-accent-500 dark:text-accent-400">▹</span> System Architecture
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent-500 dark:text-accent-400">▹</span> React & TypeScript
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent-500 dark:text-accent-400">▹</span> Cloudflare Zero Trust
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent-500 dark:text-accent-400">▹</span> Linux Administration
                </div>
              </div>
            </Section>
          </div>
        </div>
      </div>
    </section>
  );
};