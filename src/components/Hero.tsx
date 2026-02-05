import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin } from 'lucide-react';
import { Section } from './Section';
import { BIO } from '../data';

const TypewriterTerminal = () => {
  const [step, setStep] = useState(0);
  const [text, setText] = useState('');

  // Typing sequence configuration
  useEffect(() => {
    let timeoutId: number;

    const type = (str: string, nextStep: number) => {
      let charIndex = 0;
      const interval = setInterval(() => {
        if (charIndex < str.length) {
          setText(str.slice(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(interval);
          timeoutId = setTimeout(() => setStep(nextStep), 400) as unknown as number;
        }
      }, 50); // Typing speed
    };

    if (step === 0) {
      // Initial delay
      timeoutId = setTimeout(() => setStep(1), 1000) as unknown as number;
    } else if (step === 1) {
      // Type first command
      type('whoami', 2);
    } else if (step === 2) {
      // Show output 1
      timeoutId = setTimeout(() => {
        setText(''); // Clear input line for next command visual (simulated)
        setStep(3);
      }, 800) as unknown as number;
    } else if (step === 3) {
      // Type second command
      type('cat stack.txt', 4);
    } else if (step === 4) {
      // Show output 2
      timeoutId = setTimeout(() => {
        setText('');
        setStep(5);
      }, 1200) as unknown as number;
    } else if (step === 5) {
      // Type third command
      type('./init_project.sh --scale=nationwide', 6);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [step]);

  return (
    <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900/95 dark:bg-slate-900/50 backdrop-blur-sm shadow-2xl min-h-[320px] transform hover:scale-[1.02] transition-transform duration-500">
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-800/20 to-accent-400/10 pointer-events-none" />
      <div className="p-6 font-mono text-xs md:text-sm text-slate-400">
        <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-4">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          <span className="ml-2 text-slate-500 text-[10px]">sys-admin — zsh — 80x24</span>
        </div>

        <div className="space-y-4">
          {/* Line 1 */}
          <div className={step >= 2 ? 'block' : step === 1 ? 'block' : 'hidden'}>
            <div className="flex items-center">
              <span className="text-accent-400 mr-2">➜</span>
              <span className="text-blue-400 mr-2">~</span>
              <span className={step === 1 ? 'text-slate-100' : 'text-slate-300'}>
                {step === 1 ? text : 'whoami'}
                {step === 1 && <span className="animate-pulse inline-block w-2 h-4 bg-slate-400 align-middle ml-1"></span>}
              </span>
            </div>
            {step >= 2 && (
              <div className="mt-1 pl-4 animate-in fade-in slide-in-from-left-2 duration-300">
                <p className="text-slate-100 font-bold">System Engineer & Network Architect</p>
              </div>
            )}
          </div>

          {/* Line 2 */}
          <div className={step >= 4 ? 'block' : step === 3 ? 'block' : 'hidden'}>
            <div className="flex items-center">
              <span className="text-accent-400 mr-2">➜</span>
              <span className="text-blue-400 mr-2">~</span>
              <span className={step === 3 ? 'text-slate-100' : 'text-slate-300'}>
                {step === 3 ? text : 'cat stack.txt'}
                {step === 3 && <span className="animate-pulse inline-block w-2 h-4 bg-slate-400 align-middle ml-1"></span>}
              </span>
            </div>
            {step >= 4 && (
              <div className="grid grid-cols-2 gap-x-4 text-slate-400 pl-4 mt-1 animate-in fade-in slide-in-from-left-2 duration-300">
                <span className="text-emerald-400">React</span><span className="text-emerald-400">Linux</span>
                <span className="text-emerald-400">TypeScript</span><span className="text-emerald-400">Fiber Optics</span>
                <span className="text-emerald-400">Node.js</span><span className="text-emerald-400">Cloudflare</span>
                <span className="text-emerald-400">Docker</span><span className="text-emerald-400">IoT</span>
              </div>
            )}
          </div>

          {/* Line 3 */}
          <div className={step >= 6 ? 'block' : step === 5 ? 'block' : 'hidden'}>
            <div className="flex items-center">
              <span className="text-accent-400 mr-2">➜</span>
              <span className="text-blue-400 mr-2">~</span>
              <span className={step === 5 ? 'text-slate-100' : 'text-slate-300'}>
                {step === 5 ? text : './init_project.sh --scale=nationwide'}
                {step === 5 && <span className="animate-pulse inline-block w-2 h-4 bg-slate-400 align-middle ml-1"></span>}
              </span>
            </div>
            {step >= 6 && (
              <p className="text-accent-400 mt-1 pl-4 animate-in fade-in slide-in-from-left-2 duration-300">
                <span className="inline-block w-2 h-2 rounded-full bg-accent-400 animate-pulse mr-2"></span>
                Deploying 50+ facilities... <span className="text-slate-500">[Done]</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Decoration - Animated */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-accent-400/10 rounded-full blur-[120px] pointer-events-none mix-blend-multiply dark:mix-blend-screen animate-blob" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none mix-blend-multiply dark:mix-blend-screen animate-blob-reverse" />
      <div className="absolute top-[20%] left-[30%] w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none mix-blend-multiply dark:mix-blend-screen animate-blob" style={{ animationDelay: '5s' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3 flex flex-col gap-6">
          <Section delay={100}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-400/10 border border-accent-400/20 text-accent-600 dark:text-accent-400 text-sm font-medium mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
              </span>
              Open to new opportunities
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-[1.1]">
              Building the <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-400 via-cyan-400 to-blue-500 dark:from-accent-300 dark:via-cyan-400 dark:to-blue-400 gradient-text-animate">
                Digital Infrastructure
              </span>
            </h1>
          </Section>

          <Section delay={300}>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              {BIO.tagline}
            </p>
          </Section>

          <Section delay={500}>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#contact" className="px-6 py-3 bg-gradient-to-r from-accent-500 to-cyan-500 hover:from-accent-400 hover:to-cyan-400 text-white dark:text-slate-950 font-semibold rounded-lg transition-all hover:scale-105 shadow-[0_0_25px_-5px_rgba(20,184,166,0.5)] hover:shadow-[0_0_35px_-5px_rgba(20,184,166,0.6)]">
                Get in Touch
              </a>
              <a href="https://github.com/ajclausen" target="_blank" rel="noreferrer" aria-label="GitHub Profile" className="p-3 rounded-lg bg-white dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors border border-slate-200 dark:border-slate-700/50 shadow-sm dark:shadow-none">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/andrewjclausen/" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile" className="p-3 rounded-lg bg-white dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors border border-slate-200 dark:border-slate-700/50 shadow-sm dark:shadow-none">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </Section>
        </div>

        {/* Abstract Visualization / Image Placeholder */}
        <div className="md:col-span-2 relative hidden md:block">
          <Section delay={600} className="relative z-10">
            <TypewriterTerminal />
          </Section>
        </div>
      </div>

      <a href="#about" aria-label="Scroll to About section" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 dark:text-slate-500 hover:text-accent-500 dark:hover:text-accent-400 transition-colors animate-bounce">
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};