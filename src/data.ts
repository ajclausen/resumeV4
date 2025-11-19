import type { Job, Education, Certification, Project } from './types';

export const BIO = {
  name: "Andrew Clausen",
  title: "System Engineer & Network Architect",
  tagline: "Bridging the gap between physical infrastructure and modern software.",
  summary: [
    "I'm a self-taught System Engineer who transformed from zero technical knowledge into the sole network architect for 50+ smart parking facilities nationwide. My unconventional path through Apprentice University's hands-on program taught me that the best solutions come from understanding both the technical details and business impact.",
    "At ECO Parking Technologies, I've built the infrastructure that powers some of the nation's largest parking deployments, including a 693-sensor Las Vegas casino requiring custom 10G fiber solutions. When our legacy system threatened to limit our growth, I led the migration to a modern Cloudflare-based architecture, eliminating vendor lock-in and saving thousands monthly.",
    "Beyond infrastructure, I'm a builder at heart. I've created production applications that our teams use daily—from a React-based cost calculator that speeds up sales quotes to a full-stack project tracker that integrates with legacy systems.",
    "Currently pursuing my BSNES degree to formalize my practical experience, I'm excited about the intersection of IoT, cloud infrastructure, and smart city technology."
  ],
  email: "andrew@clausen.app",
  location: "Remote / Indianapolis, IN"
};

export const EXPERIENCE: Job[] = [
  {
    id: "eco-parking",
    role: "System Engineer",
    company: "ECO Parking Technologies",
    period: "Feb 2020 — Present",
    description: "Architect and maintain network infrastructure for 50+ smart parking facilities nationwide, including a 693-sensor Las Vegas casino with custom 10G fiber backhaul. Led company-wide migration from legacy APN to Cloudflare architecture, eliminating vendor lock-in and saving thousands monthly. Built three production applications that streamline operations: React-based cost calculator, full-stack project tracker with Ruby/Fishbowl integration, and network management tools.",
    skills: ["React", "TypeScript", "Node.js", "Ruby", "PostgreSQL", "Docker", "Cloudflare Tunnels", "Ubiquiti UniFi", "10G Fiber", "Linux"]
  },
  {
    id: "nexusopus",
    role: "President",
    company: "NexusOpus",
    period: "Oct 2017 — Mar 2020",
    description: "School-initiated learning opportunity that evolved into managing Apprentice University's web presence. Successfully recovered website after security breach through manual file-by-file inspection. Negotiated tuition reduction in exchange for web management services. Gained hands-on experience with WordPress security, site migrations, and infrastructure management.",
    skills: ["WordPress", "Security Recovery", "DNS Management", "FTP", "Database Admin", "Adobe Suite"]
  },
  {
    id: "flexware",
    role: "Junior Systems Engineer",
    company: "Flexware Innovation",
    period: "Sep 2019 — Jan 2020",
    description: "Started with zero Linux/networking experience and became primary technical resource within months. Built and deployed gateway hardware for smart parking systems, configured mesh networks, and annotated thousands of images for ML training. Impressed leadership leading to direct hire by client company (ECO) as their first full-time technical employee.",
    skills: ["Ubuntu Server", "Linux CLI", "Ubiquiti", "DHCP", "IoT Sensors", "Machine Learning", "Network Architecture"]
  },
  {
    id: "diagnotes",
    role: "Digital Assets Manager",
    company: "Diagnotes, Inc.",
    period: "Mar 2019 — Aug 2019",
    description: "Managed WordPress site with HotJar analytics integration to track user behavior and improve UX. Created interview-driven marketing videos with motion graphics and designed infographics to simplify complex medical concepts. Analyzed Google Analytics data to inform design decisions and improve site navigation.",
    skills: ["WordPress", "HotJar", "Google Analytics", "Premiere Pro", "After Effects", "UX Research"]
  },
  {
    id: "sincerely-hers",
    role: "Assistant Marketing Coordinator",
    company: "Sincerely Hers",
    period: "Sep 2018 — Mar 2019",
    description: "Managed Amazon PPC campaigns maintaining 6% ACoS target through strategic bid optimization. Built VBA macro to automate keyword bid adjustments, eliminating hours of manual work. Worked on API integration connecting Amazon to Microsoft Azure for streamlined marketing workflows.",
    skills: ["Amazon Seller Central", "VBA/Excel Automation", "API Integration", "Azure", "Shopify"]
  },
  {
    id: "omnisource",
    role: "Marketing Assistant",
    company: "OMNISource Marketing",
    period: "2018",
    description: "Marketing and operations apprenticeship combining creative work with fulfillment operations. Updated Shopify sites with new graphics and content, assisted art team with Illustrator file updates, and managed order fulfillment operations including packing, shipping, and quality control.",
    skills: ["Shopify", "Adobe Illustrator", "E-commerce", "Order Fulfillment", "Inventory Management"]
  },
  {
    id: "t2-systems",
    role: "Software Developer",
    company: "T2 Systems",
    period: "2018",
    description: "Built REST/SOAP proxy bridge to connect legacy database with modern APIs. Integrated Sisense analytics into Jira dashboard for improved project visibility. Learned valuable lessons about requirements verification when discovering sign system used SOAP after building REST integration.",
    skills: ["REST API", "SOAP", "Jira", "Sisense Analytics", "Service Proxy", "Mobile Testing"]
  },
  {
    id: "bitwise",
    role: "Web Developer",
    company: "Bitwise Solutions",
    period: "2017",
    description: "Web development apprenticeship focused on WordPress development and QA testing. Performed comprehensive site testing for WCEI and other clients, debugged WordPress issues, created page layouts in Photoshop, and recorded Kentico CMS tutorial videos.",
    skills: ["WordPress", "Kentico CMS", "Photoshop", "QA Testing", "Client Communication"]
  }
];

export const EDUCATION: Education[] = [
  {
    id: "wgu",
    degree: "B.S. Network Engineering and Security",
    institution: "Western Governors University",
    period: "In Progress",
    description: "Formalizing my practical experience with comprehensive studies in network architecture, security protocols, and system administration.",
    courses: ["Network Security", "Cloud Infrastructure", "System Architecture", "Database Management", "Cybersecurity Fundamentals"]
  },
  {
    id: "apprentice",
    degree: "Hands-On Program: Full-Stack & Systems",
    institution: "Apprentice University",
    period: "2017 - 2020",
    description: "Intensive project-based learning program that transformed me from zero technical knowledge to production-ready engineer through real client work."
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "network-plus",
    name: "CompTIA Network+",
    issuer: "CompTIA",
    year: "2025",
    url: "https://www.credly.com/badges/37447265-29b4-42bb-9146-27117c2a0a29/public_url"
  },
  {
    id: "linux-essentials",
    name: "LPI Linux Essentials",
    issuer: "Linux Professional Institute",
    year: "2025",
    url: "https://www.credly.com/badges/d7d368b1-b110-4ec9-930c-a401e903b945/public_url"
  },
  {
    id: "itil-v4",
    name: "ITIL v4 Foundations",
    issuer: "AXELOS",
    year: "2025"
  },
  {
    id: "comptia-a-plus",
    name: "CompTIA A+",
    issuer: "CompTIA",
    year: "2025",
    url: "https://www.credly.com/badges/67e453c5-07cc-45cf-9805-c747c5b87cd1/public_url"
  },
  {
    id: "eagle-scout",
    name: "Eagle Scout",
    issuer: "Boy Scouts of America",
    year: "2015"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "parking-cost-calculator",
    title: "Sales Cost Calculator",
    description: "A React & TypeScript application designed to streamline the sales quoting process. It reduces quote generation time by 80% by automatically calculating hardware requirements, installation labor, and recurring costs based on facility parameters.",
    techStack: ["React", "TypeScript", "Tailwind", "Vite"],
    featured: true
  },
  {
    id: "ops-tracker",
    title: "Operations Project Tracker",
    description: "Full-stack application that bridges the gap between project management and legacy inventory systems. Integrates with Ruby/Fishbowl to track equipment allocation and installation status in real-time.",
    techStack: ["Node.js", "Ruby", "PostgreSQL", "React"],
    featured: true
  },
  {
    id: "network-manager",
    title: "Network Config Manager",
    description: "Internal CLI and dashboard tools for managing configuration consistency across 50+ distributed sites. Automates updates for firewall rules and VLAN configurations via SSH and API hooks.",
    techStack: ["Python", "Bash", "Linux", "Ansible"],
    featured: false
  }
];