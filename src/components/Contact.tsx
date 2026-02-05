import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { BIO } from '../data';
import { Section } from './Section';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-slate-200 dark:from-slate-950 dark:to-slate-900 pointer-events-none" />

      {/* Decorative orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-400/5 dark:bg-accent-400/10 rounded-full blur-[100px] pointer-events-none animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-[200px] h-[200px] bg-cyan-400/5 dark:bg-cyan-400/8 rounded-full blur-[80px] pointer-events-none animate-blob-reverse" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <Section>
          <p className="text-accent-500 dark:text-accent-400 font-mono mb-4">05. What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">Get In Touch</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and challenges. Whether you have a question about fiber backhauls, React state management, or just want to say hi, feel free to reach out!
          </p>

          <div className="flex flex-col items-center gap-6">
            <a
              href={`mailto:${BIO.email}`}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent-500 to-cyan-500 hover:from-accent-400 hover:to-cyan-400 text-white dark:text-slate-950 rounded-lg transition-all hover:scale-105 font-semibold shadow-[0_0_25px_-5px_rgba(20,184,166,0.4)] hover:shadow-[0_0_40px_-5px_rgba(20,184,166,0.6)]"
            >
              <Mail className="w-5 h-5 group-hover:rotate-6 transition-transform" />
              Say Hello
            </a>

            <div className="flex gap-8 mt-8">
              <a href="https://www.linkedin.com/in/andrewjclausen/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg text-slate-500 hover:text-accent-500 dark:text-slate-400 dark:hover:text-accent-400 hover:bg-accent-500/5 transition-all">
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://github.com/ajclausen" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg text-slate-500 hover:text-accent-500 dark:text-slate-400 dark:hover:text-accent-400 hover:bg-accent-500/5 transition-all">
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
        </Section>
      </div>

      <footer className="absolute bottom-0 w-full bg-slate-200/50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-600">
          <p>Designed & Built by Andrew Clausen</p>

          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/10 dark:border-emerald-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">All Systems Operational</span>
          </div>
        </div>
      </footer>
    </section>
  );
};