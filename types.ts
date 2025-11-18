import { ComponentType } from 'react';

export interface Skill {
  name: string;
}

export interface Job {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
  courses?: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  url?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
  featured?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: ComponentType<{ className?: string }>;
  label: string;
}