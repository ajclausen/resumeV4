import React from 'react';
import { Folder, ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../data';
import { Section } from './Section';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Section>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-12 flex items-center gap-3">
            <span className="text-accent-500 dark:text-accent-400">03.</span> Featured Projects
            <span className="h-px bg-slate-200 dark:bg-slate-800 flex-grow ml-4"></span>
          </h2>
        </Section>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <Section key={project.id} delay={index * 100} className="h-full">
              <div className="group relative h-full bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl dark:hover:shadow-none dark:hover:border-accent-500/30">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800 text-accent-500 dark:text-accent-400 group-hover:text-accent-600 dark:group-hover:text-accent-300 transition-colors">
                    <Folder className="w-6 h-6" />
                  </div>
                  <div className="flex gap-4">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-accent-500 dark:text-slate-400 dark:hover:text-accent-400 transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-accent-500 dark:text-slate-400 dark:hover:text-accent-400 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 group-hover:text-accent-500 dark:group-hover:text-accent-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-auto pt-4 flex flex-wrap gap-3 text-xs font-mono text-slate-500 dark:text-slate-500">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="bg-slate-100 dark:bg-slate-800/50 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Section>
          ))}
        </div>
      </div>
    </section>
  );
};