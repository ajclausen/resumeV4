import type { Job, Education, Certification, Project, TechCategory } from './types';
import { Server, Globe, Code, Database, Cpu, Shield, Wifi, Layers, Terminal, Cloud, Radio, Activity, Video, Lock } from 'lucide-react';

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
    description: [
      "Architected **enterprise network overhaul** implementing Ubiquiti UniFi with 802.1Q VLANs across 50+ facilities nationwide, improving security posture and enabling granular traffic control for 10,000+ IoT sensors.",
      "Led **Cloudflare Zero Trust migration** replacing legacy Verizon APN, reducing costs by $36K annually while enabling secure remote access and eliminating single point of failure.",
      "Designed custom **10G fiber backhaul** for 693-sensor Las Vegas casino deployment, achieving **99.9% uptime SLA** in high-traffic environment with 50ms latency requirement.",
      "Built production applications streamlining operations: **React cost calculator** (reduced quotes from 30 to 5 minutes), **Ruby microservice** for ERP integration (saved 24 hours/week), and custom monitoring dashboard.",
      "Implemented **infrastructure as code** practices using Docker and automated deployment pipelines, reducing deployment time by 75% and eliminating configuration drift."
    ],
    skills: ["React", "TypeScript", "Node.js", "Ruby", "PostgreSQL", "Docker", "Cloudflare Tunnels", "Ubiquiti UniFi", "10G Fiber", "Linux"]
  },
  {
    id: "nexusopus",
    role: "President",
    company: "NexusOpus",
    period: "Oct 2017 — Mar 2020",
    description: [
      "Recovered compromised **WordPress infrastructure** through manual security audit and reimplementation.",
      "Managed **DNS, SSL certificates, and web hosting** for educational institution serving 500+ students.",
      "Implemented automated **backup system and security hardening protocols**, preventing future breaches."
    ],
    skills: ["WordPress", "Security Recovery", "DNS Management", "FTP", "Database Admin", "Adobe Suite"]
  },
  {
    id: "flexware",
    role: "Junior Systems Engineer",
    company: "Flexware Innovation",
    period: "Sep 2019 — Jan 2020",
    description: [
      "Advanced from zero Linux/networking experience to **primary technical resource in 3 months**, deploying 20+ IoT gateway systems.",
      "Configured **Ubuntu-based gateways** with custom networking stack, managing DHCP, DNS, and mesh network topology for 50-100 sensors per site.",
      "Demonstrated exceptional technical growth, earning **direct-hire offer** as client's first full-time infrastructure engineer."
    ],
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
    id: "security-plus",
    name: "CompTIA Security+",
    issuer: "CompTIA",
    year: "2025",
    url: "https://www.credly.com/badges/7f17d88b-5764-409b-8a1f-17f83e8fa196/public_url",
    badge: "/comptia-security-ce-certification.png"
  },
  {
    id: "network-plus",
    name: "CompTIA Network+",
    issuer: "CompTIA",
    year: "2025",
    url: "https://www.credly.com/badges/37447265-29b4-42bb-9146-27117c2a0a29/public_url",
    badge: "/comptia-network-ce-certification.1.png"
  },
  {
    id: "comptia-a-plus",
    name: "CompTIA A+",
    issuer: "CompTIA",
    year: "2025",
    url: "https://www.credly.com/badges/67e453c5-07cc-45cf-9805-c747c5b87cd1/public_url",
    badge: "/comptia-a-ce-certification.1.png"
  },
  {
    id: "linux-essentials",
    name: "LPI Linux Essentials",
    issuer: "Linux Professional Institute",
    year: "2025",
    url: "https://www.credly.com/badges/d7d368b1-b110-4ec9-930c-a401e903b945/public_url",
    badge: "/linux-essentials-certificate.png"
  },
  {
    id: "itil-v4",
    name: "ITIL v4 Foundations",
    issuer: "AXELOS",
    year: "2025",
    badge: "/ITIL-4-Certification.webp"
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

export const TECH_CATEGORIES: TechCategory[] = [
  {
    title: "Infrastructure & Network",
    gradient: "from-cyan-500 to-blue-600",
    items: [
      { name: "Ubiquiti UniFi", icon: Wifi, color: "text-blue-400" },
      { name: "Ubuntu Core/Snaps", icon: Terminal, color: "text-orange-500" },
      { name: "Cloudflare Zero Trust", icon: Shield, color: "text-orange-400" },
      { name: "VLAN Design", icon: Layers, color: "text-cyan-400" },
      { name: "Azure Cloud", icon: Cloud, color: "text-blue-500" },
      { name: "Docker & LXC", icon: Server, color: "text-blue-400" }
    ]
  },
  {
    title: "Development",
    gradient: "from-violet-500 to-purple-600",
    items: [
      { name: "React/TypeScript", icon: Code, color: "text-cyan-400" },
      { name: "Python", icon: Terminal, color: "text-yellow-300" },
      { name: "Node.js", icon: Server, color: "text-green-500" },
      { name: "PostgreSQL", icon: Database, color: "text-blue-400" },
      { name: "GraphQL", icon: Globe, color: "text-pink-500" },
      { name: "Next.js", icon: Globe, color: "text-white" }
    ]
  },
  {
    title: "Specialized Engineering",
    gradient: "from-pink-500 to-rose-600",
    items: [
      { name: "WebRTC", icon: Video, color: "text-red-400" },
      { name: "RTSP Streaming", icon: Radio, color: "text-orange-400" },
      { name: "GStreamer", icon: Activity, color: "text-yellow-400" },
      { name: "Protocol Reverse Eng.", icon: Lock, color: "text-emerald-400" },
      { name: "Packet Analysis", icon: Activity, color: "text-blue-400" },
      { name: "IoT Sensors", icon: Cpu, color: "text-green-400" }
    ]
  }
];