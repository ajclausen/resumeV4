import { StyleSheet } from '@react-pdf/renderer';

// Colors matching website theme
const colors = {
  accent: '#14b8a6',      // Teal-500
  accentDark: '#0d9488',  // Teal-600
  dark: '#0f172a',        // Slate-900
  medium: '#475569',      // Slate-600
  light: '#94a3b8',       // Slate-400
  border: '#e2e8f0',      // Slate-200
  sidebar: '#0f172a',     // Dark sidebar
  sidebarText: '#e2e8f0', // Light text on sidebar
};

export const styles = StyleSheet.create({
  // Page with sidebar layout
  page: {
    fontFamily: 'Inter',
    fontSize: 9,
    flexDirection: 'row',
    backgroundColor: 'white',
  },

  // Left Sidebar
  sidebar: {
    width: 180,
    backgroundColor: colors.sidebar,
    padding: 20,
    paddingTop: 30,
    color: colors.sidebarText,
  },
  sidebarName: {
    fontSize: 18,
    fontWeight: 700,
    color: 'white',
    marginBottom: 4,
  },
  sidebarTitle: {
    fontSize: 10,
    color: colors.accent,
    marginBottom: 20,
    lineHeight: 1.3,
  },
  sidebarSection: {
    marginBottom: 16,
  },
  sidebarSectionTitle: {
    fontSize: 9,
    fontWeight: 700,
    color: colors.accent,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: colors.accentDark,
    borderBottomStyle: 'solid',
  },
  sidebarItem: {
    fontSize: 8,
    color: colors.sidebarText,
    marginBottom: 4,
    lineHeight: 1.4,
  },
  sidebarLink: {
    fontSize: 8,
    color: colors.accent,
    textDecoration: 'none',
    marginBottom: 4,
  },
  sidebarSkill: {
    fontSize: 8,
    color: colors.sidebarText,
    marginBottom: 3,
  },
  certItem: {
    marginBottom: 6,
  },
  certName: {
    fontSize: 8,
    color: 'white',
    fontWeight: 500,
  },
  certMeta: {
    fontSize: 7,
    color: colors.light,
    marginTop: 1,
  },

  // Main Content Area
  main: {
    flex: 1,
    padding: 25,
    paddingLeft: 30,
  },

  // Section Headers
  sectionHeader: {
    fontSize: 11,
    fontWeight: 700,
    color: colors.dark,
    marginTop: 0,
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 1,
    paddingBottom: 4,
    borderBottomWidth: 2,
    borderBottomColor: colors.accent,
    borderBottomStyle: 'solid',
  },
  sectionHeaderSmall: {
    fontSize: 10,
    fontWeight: 700,
    color: colors.dark,
    marginTop: 14,
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 1,
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    borderBottomStyle: 'solid',
  },

  // Experience
  experienceItem: {
    marginBottom: 12,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  role: {
    fontSize: 10,
    fontWeight: 600,
    color: colors.dark,
  },
  company: {
    fontSize: 10,
    color: colors.accent,
    fontWeight: 500,
  },
  period: {
    fontFamily: 'JetBrains Mono',
    fontSize: 8,
    color: colors.light,
  },
  bulletList: {
    paddingLeft: 0,
  },
  bulletItem: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  bullet: {
    width: 12,
    fontSize: 9,
    color: colors.accent,
  },
  bulletText: {
    flex: 1,
    fontSize: 9,
    color: colors.medium,
    lineHeight: 1.4,
  },

  // Education in main
  educationItem: {
    marginBottom: 8,
  },
  degree: {
    fontSize: 10,
    fontWeight: 600,
    color: colors.dark,
  },
  institution: {
    fontSize: 9,
    color: colors.medium,
    marginTop: 2,
  },
});
