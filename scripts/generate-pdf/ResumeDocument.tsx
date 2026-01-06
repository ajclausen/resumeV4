import React from 'react';
import { Document, Page, Text, View, Link } from '@react-pdf/renderer';
import { BIO, EXPERIENCE, EDUCATION, CERTIFICATIONS, PROJECTS } from '../../src/data';
import { styles } from './styles';

// Helper to strip markdown bold markers
const cleanText = (text: string): string => {
  return text.replace(/\*\*(.*?)\*\*/g, '$1');
};

// Top 3 experiences for main content (+ projects section)
const TOP_EXPERIENCES = EXPERIENCE.slice(0, 3);

// Technical certifications
const TECH_CERTS = CERTIFICATIONS.filter(c => c.id !== 'eagle-scout');

// Featured projects
const FEATURED_PROJECTS = PROJECTS.filter(p => p.featured);

// Core skills for sidebar (extracted from tech categories)
const CORE_SKILLS = [
  'React & TypeScript',
  'Node.js & Python',
  'PostgreSQL & GraphQL',
  'Docker & Linux',
  'Cloudflare Zero Trust',
  'Ubiquiti UniFi',
  'VLAN & Network Design',
  '10G Fiber & IoT',
];

export const ResumeDocument: React.FC = () => (
  <Document
    title={`${BIO.name} - Resume`}
    author={BIO.name}
    subject="Professional Resume"
  >
    <Page size="LETTER" style={styles.page}>
      {/* Left Sidebar */}
      <View style={styles.sidebar}>
        <Text style={styles.sidebarName}>{BIO.name}</Text>
        <Text style={styles.sidebarTitle}>{BIO.title}</Text>

        {/* Contact */}
        <View style={styles.sidebarSection}>
          <Text style={styles.sidebarSectionTitle}>Contact</Text>
          <Text style={styles.sidebarItem}>{BIO.email}</Text>
          <Text style={styles.sidebarItem}>{BIO.location}</Text>
          <Link src="https://linkedin.com/in/andrewjclausen" style={styles.sidebarLink}>
            LinkedIn
          </Link>
          <Link src="https://github.com/ajclausen" style={styles.sidebarLink}>
            GitHub
          </Link>
        </View>

        {/* Skills */}
        <View style={styles.sidebarSection}>
          <Text style={styles.sidebarSectionTitle}>Skills</Text>
          {CORE_SKILLS.map((skill) => (
            <Text key={skill} style={styles.sidebarSkill}>• {skill}</Text>
          ))}
        </View>

        {/* Certifications */}
        <View style={styles.sidebarSection}>
          <Text style={styles.sidebarSectionTitle}>Certifications</Text>
          {TECH_CERTS.map((cert) => (
            <View key={cert.id} style={styles.certItem}>
              <Text style={styles.certName}>{cert.name}</Text>
              <Text style={styles.certMeta}>{cert.issuer} • {cert.year}</Text>
            </View>
          ))}
        </View>

        {/* Education */}
        <View style={styles.sidebarSection}>
          <Text style={styles.sidebarSectionTitle}>Education</Text>
          {EDUCATION.map((edu) => (
            <View key={edu.id} style={styles.certItem}>
              <Text style={styles.certName}>{edu.degree}</Text>
              <Text style={styles.certMeta}>{edu.institution}</Text>
              <Text style={styles.certMeta}>{edu.period}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.main}>
        {/* About Summary */}
        <Text style={styles.sectionHeader}>About</Text>
        <Text style={{ fontSize: 9, color: '#475569', lineHeight: 1.5, marginBottom: 14 }}>
          {BIO.summary[0]}
        </Text>

        {/* Experience */}
        <Text style={styles.sectionHeader}>Experience</Text>

        {TOP_EXPERIENCES.map((job) => (
          <View key={job.id} style={styles.experienceItem}>
            <View style={styles.experienceHeader}>
              <View>
                <Text style={styles.role}>{job.role}</Text>
                <Text style={styles.company}>{job.company}</Text>
              </View>
              <Text style={styles.period}>{job.period}</Text>
            </View>

            {Array.isArray(job.description) ? (
              <View style={styles.bulletList}>
                {job.description.slice(0, 3).map((item, i) => (
                  <View key={i} style={styles.bulletItem}>
                    <Text style={styles.bullet}>▸</Text>
                    <Text style={styles.bulletText}>{cleanText(item)}</Text>
                  </View>
                ))}
              </View>
            ) : (
              <Text style={styles.bulletText}>{job.description}</Text>
            )}
          </View>
        ))}

        {/* Projects */}
        <Text style={styles.sectionHeaderSmall}>Projects</Text>
        {FEATURED_PROJECTS.map((project) => (
          <View key={project.id} style={{ marginBottom: 8 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <Text style={styles.role}>{project.title}</Text>
              <Text style={{ fontSize: 7, fontFamily: 'JetBrains Mono', color: '#94a3b8' }}>
                {project.techStack.join(' • ')}
              </Text>
            </View>
            <Text style={{ fontSize: 9, color: '#475569', lineHeight: 1.4, marginTop: 2 }}>
              {project.description}
            </Text>
          </View>
        ))}

      </View>
    </Page>
  </Document>
);
