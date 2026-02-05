import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ArrowUpRight, Check, Mail, MapPin } from 'lucide-react';
import { BIO, EXPERIENCE, EDUCATION, CERTIFICATIONS, PROJECTS, TECH_CATEGORIES } from '../../data';

/* ---------------------------------------------------------------------------
   Design 4 — Dark Luxury Agency
   --------------------------------------------------------------------------
   Near-black palette with copper/gold metallic accents. Massive typography.
   Space Grotesk for headings. Sophisticated micro-interactions.
   Commanding, expensive, refined.
   -------------------------------------------------------------------------- */

// ---------------------------------------------------------------------------
// Utility: parse **bold** into copper-accented spans
// ---------------------------------------------------------------------------
function parseBold(text: string): React.ReactNode[] {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1
      ? <span key={i} className="lux-copper-text">{part}</span>
      : <React.Fragment key={i}>{part}</React.Fragment>
  );
}

// ---------------------------------------------------------------------------
// Utility: section number
// ---------------------------------------------------------------------------
function sectionNum(n: number): string {
  return String(n).padStart(2, '0');
}

// ---------------------------------------------------------------------------
// Hook: scroll-triggered reveal via IntersectionObserver
// ---------------------------------------------------------------------------
function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function Reveal({ children, className = '', delay = 0, style = {} }: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Sub-component: Horizontal Marquee/Ticker
// ---------------------------------------------------------------------------
function Marquee() {
  const allTech = TECH_CATEGORIES.flatMap(cat => cat.items.map(item => item.name));
  const repeated = [...allTech, ...allTech, ...allTech, ...allTech];

  return (
    <div className="lux-marquee-wrap">
      <div className="lux-marquee-track">
        {repeated.map((tech, i) => (
          <React.Fragment key={i}>
            <span className="lux-marquee-item">{tech}</span>
            <span className="lux-marquee-separator" aria-hidden="true" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Sub-component: Copper Divider (full-width thin line)
// ---------------------------------------------------------------------------
function CopperDivider() {
  return <div className="lux-copper-divider" />;
}

// ---------------------------------------------------------------------------
// Sub-component: Section Header with large number
// ---------------------------------------------------------------------------
function SectionHeader({ number, title }: { number: number; title: string }) {
  return (
    <Reveal>
      <div className="lux-section-header">
        <span className="lux-section-num">{sectionNum(number)}</span>
        <h2 className="lux-section-title">{title}</h2>
      </div>
    </Reveal>
  );
}

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------
export const Design4: React.FC = () => {
  const [currentYear] = useState(() => new Date().getFullYear());
  const heroRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse-following radial gradient on hero
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  // Subtle parallax scale on hero text via scroll
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const heroScale = 1 + scrollY * 0.0001;
  const heroOpacity = Math.max(0, 1 - scrollY * 0.0015);

  return (
    <>
      <style>{`
        /* ── Google Font Import ── */
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        /* ── CSS Custom Properties ── */
        .lux-root {
          --bg: #0c0c0c;
          --bg-surface: #1a1a1a;
          --bg-surface-hover: #222222;
          --text-primary: #e8e8e8;
          --text-secondary: #888888;
          --text-muted: #555555;
          --copper: #c9956b;
          --copper-light: #d4a574;
          --copper-dim: rgba(201, 149, 107, 0.15);
          --copper-glow: rgba(201, 149, 107, 0.08);
          --rose: #c47d7d;
          --font-heading: 'Space Grotesk', system-ui, -apple-system, sans-serif;
          --font-body: 'Inter', system-ui, -apple-system, sans-serif;
        }

        /* ── Base Reset ── */
        .lux-root {
          background: var(--bg);
          color: var(--text-primary);
          font-family: var(--font-body);
          font-size: 16px;
          line-height: 1.7;
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .lux-root *, .lux-root *::before, .lux-root *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .lux-root a {
          color: inherit;
          text-decoration: none;
        }

        /* ── Grain/Noise Texture Overlay ── */
        .lux-grain {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 100;
          opacity: 0.035;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 256px 256px;
        }

        /* ── Container ── */
        .lux-container {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px;
        }

        @media (max-width: 768px) {
          .lux-container {
            padding: 0 24px;
          }
        }

        /* ── Full Width Container ── */
        .lux-full-width {
          position: relative;
          z-index: 1;
          width: 100%;
        }

        /* ═══════════════════════════════════════════
           COPPER DIVIDER
           ═══════════════════════════════════════════ */
        .lux-copper-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(201, 149, 107, 0.1) 10%,
            var(--copper) 50%,
            rgba(201, 149, 107, 0.1) 90%,
            transparent 100%
          );
        }

        /* ═══════════════════════════════════════════
           SECTION HEADER
           ═══════════════════════════════════════════ */
        .lux-section-header {
          display: flex;
          align-items: baseline;
          gap: 24px;
          margin-bottom: 80px;
        }

        .lux-section-num {
          font-family: var(--font-heading);
          font-size: clamp(48px, 6vw, 72px);
          font-weight: 300;
          color: var(--copper);
          line-height: 1;
          letter-spacing: -0.02em;
          opacity: 0.6;
          flex-shrink: 0;
        }

        .lux-section-title {
          font-family: var(--font-heading);
          font-size: clamp(36px, 4vw, 56px);
          font-weight: 300;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          line-height: 1.1;
          color: var(--text-primary);
        }

        /* ═══════════════════════════════════════════
           HERO
           ═══════════════════════════════════════════ */
        .lux-hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
        }

        .lux-hero-glow {
          position: absolute;
          border-radius: 50%;
          width: 800px;
          height: 800px;
          pointer-events: none;
          background: radial-gradient(
            circle,
            rgba(201, 149, 107, 0.06) 0%,
            rgba(201, 149, 107, 0.02) 40%,
            transparent 70%
          );
          transform: translate(-50%, -50%);
          transition: left 0.3s ease-out, top 0.3s ease-out;
          z-index: 0;
        }

        .lux-hero-content {
          position: relative;
          z-index: 1;
          padding: 160px 48px 120px;
          max-width: 100%;
        }

        @media (max-width: 768px) {
          .lux-hero-content {
            padding: 120px 24px 80px;
          }
        }

        .lux-hero-label {
          font-family: var(--font-heading);
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--copper);
          margin-bottom: 48px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .lux-hero-label::before {
          content: '';
          display: block;
          width: 40px;
          height: 1px;
          background: var(--copper);
        }

        .lux-hero-name {
          font-family: var(--font-heading);
          font-size: clamp(80px, 14vw, 180px);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: -0.03em;
          line-height: 0.88;
          color: var(--text-primary);
          margin: 0;
          will-change: transform, opacity;
        }

        .lux-hero-name span {
          display: block;
        }

        .lux-hero-name span:last-child {
          color: transparent;
          -webkit-text-stroke: 1px rgba(232, 232, 232, 0.35);
        }

        .lux-hero-line {
          width: 80px;
          height: 1px;
          background: var(--copper);
          margin: 48px 0;
        }

        .lux-hero-tagline {
          font-family: var(--font-body);
          font-size: clamp(16px, 1.8vw, 20px);
          font-weight: 300;
          color: var(--text-secondary);
          max-width: 520px;
          line-height: 1.7;
          letter-spacing: 0.01em;
        }

        .lux-hero-meta {
          margin-top: 48px;
          display: flex;
          align-items: center;
          gap: 32px;
          flex-wrap: wrap;
        }

        .lux-hero-location {
          font-family: var(--font-heading);
          font-size: 12px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .lux-hero-location svg {
          width: 14px;
          height: 14px;
          color: var(--copper);
        }

        .lux-hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-family: var(--font-heading);
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--copper);
          padding: 16px 0;
          border: none;
          background: none;
          cursor: pointer;
          text-decoration: none;
          transition: color 0.3s ease;
          position: relative;
        }

        .lux-hero-cta::after {
          content: '';
          position: absolute;
          bottom: 12px;
          left: 0;
          width: 100%;
          height: 1px;
          background: var(--copper);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .lux-hero-cta:hover::after {
          transform: scaleX(1);
        }

        .lux-hero-cta:hover {
          color: var(--copper-light);
        }

        .lux-hero-cta svg {
          width: 16px;
          height: 16px;
          transition: transform 0.3s ease;
        }

        .lux-hero-cta:hover svg {
          transform: translate(2px, -2px);
        }

        .lux-hero-scroll {
          position: absolute;
          bottom: 48px;
          left: 48px;
          font-family: var(--font-heading);
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--text-muted);
          writing-mode: vertical-rl;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .lux-hero-scroll::after {
          content: '';
          display: block;
          width: 1px;
          height: 48px;
          background: linear-gradient(180deg, var(--copper), transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }

        @keyframes scrollPulse {
          0%, 100% { opacity: 1; height: 48px; }
          50% { opacity: 0.4; height: 32px; }
        }

        @media (max-width: 768px) {
          .lux-hero-scroll {
            display: none;
          }
        }

        /* ═══════════════════════════════════════════
           MARQUEE / TICKER
           ═══════════════════════════════════════════ */
        .lux-marquee-wrap {
          width: 100%;
          overflow: hidden;
          padding: 48px 0;
          position: relative;
          z-index: 1;
        }

        .lux-marquee-wrap::before,
        .lux-marquee-wrap::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 120px;
          z-index: 2;
          pointer-events: none;
        }

        .lux-marquee-wrap::before {
          left: 0;
          background: linear-gradient(90deg, var(--bg), transparent);
        }

        .lux-marquee-wrap::after {
          right: 0;
          background: linear-gradient(270deg, var(--bg), transparent);
        }

        .lux-marquee-track {
          display: flex;
          align-items: center;
          gap: 0;
          white-space: nowrap;
          animation: marqueeScroll 60s linear infinite;
          width: max-content;
        }

        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .lux-marquee-item {
          font-family: var(--font-heading);
          font-size: clamp(24px, 3.5vw, 48px);
          font-weight: 300;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--text-muted);
          padding: 0 12px;
          transition: color 0.3s ease;
          cursor: default;
          flex-shrink: 0;
        }

        .lux-marquee-item:hover {
          color: var(--copper);
        }

        .lux-marquee-separator {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--copper);
          opacity: 0.3;
          margin: 0 20px;
          flex-shrink: 0;
          vertical-align: middle;
        }

        /* ═══════════════════════════════════════════
           ABOUT
           ═══════════════════════════════════════════ */
        .lux-about-section {
          padding: 160px 0;
        }

        @media (max-width: 768px) {
          .lux-about-section {
            padding: 100px 0;
          }
        }

        .lux-about-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 80px;
        }

        @media (max-width: 768px) {
          .lux-about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        .lux-about-label {
          font-family: var(--font-heading);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--copper);
          padding-top: 6px;
        }

        .lux-about-text p {
          color: var(--text-secondary);
          font-size: 16px;
          line-height: 1.85;
          margin-bottom: 28px;
        }

        .lux-about-text p:last-child {
          margin-bottom: 0;
        }

        .lux-copper-text {
          color: var(--copper);
          font-weight: 500;
        }

        /* ═══════════════════════════════════════════
           EXPERIENCE
           ═══════════════════════════════════════════ */
        .lux-exp-section {
          padding: 160px 0;
        }

        @media (max-width: 768px) {
          .lux-exp-section {
            padding: 100px 0;
          }
        }

        .lux-exp-list {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .lux-exp-item {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 60px;
          padding: 48px 0 48px 24px;
          border-top: 1px solid rgba(201, 149, 107, 0.1);
          position: relative;
          transition: background 0.4s ease;
        }

        .lux-exp-item:last-child {
          border-bottom: 1px solid rgba(201, 149, 107, 0.1);
        }

        /* Copper left border on hover */
        .lux-exp-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--copper);
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .lux-exp-item:hover::before {
          transform: scaleY(1);
        }

        .lux-exp-item:hover {
          background: rgba(201, 149, 107, 0.02);
        }

        @media (max-width: 768px) {
          .lux-exp-item {
            grid-template-columns: 1fr;
            gap: 16px;
            padding: 36px 0 36px 24px;
          }
        }

        .lux-exp-left {
          padding-top: 4px;
        }

        .lux-exp-company {
          font-family: var(--font-heading);
          font-size: 14px;
          font-weight: 500;
          color: var(--copper);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .lux-exp-period {
          font-family: 'JetBrains Mono', 'SF Mono', 'Courier New', monospace;
          font-size: 12px;
          letter-spacing: 0.05em;
          color: var(--text-muted);
        }

        .lux-exp-role {
          font-family: var(--font-heading);
          font-size: clamp(22px, 2.5vw, 28px);
          font-weight: 600;
          color: var(--text-primary);
          letter-spacing: -0.01em;
          line-height: 1.2;
          margin-bottom: 20px;
        }

        .lux-exp-desc {
          list-style: none;
          padding: 0;
          margin: 0 0 24px 0;
        }

        .lux-exp-desc li {
          position: relative;
          padding-left: 20px;
          margin-bottom: 12px;
          font-size: 15px;
          line-height: 1.75;
          color: var(--text-secondary);
        }

        .lux-exp-desc li:last-child {
          margin-bottom: 0;
        }

        .lux-exp-desc li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 11px;
          width: 6px;
          height: 1px;
          background: var(--copper);
        }

        .lux-exp-desc-single {
          font-size: 15px;
          line-height: 1.75;
          color: var(--text-secondary);
          margin-bottom: 24px;
        }

        .lux-exp-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .lux-exp-skill {
          font-family: var(--font-heading);
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 5px 14px;
          border: 1px solid rgba(201, 149, 107, 0.2);
          color: var(--text-muted);
          background: transparent;
          transition: all 0.3s ease;
          cursor: default;
        }

        .lux-exp-skill:hover {
          border-color: var(--copper);
          color: var(--copper);
          background: rgba(201, 149, 107, 0.05);
        }

        /* ═══════════════════════════════════════════
           PROJECTS
           ═══════════════════════════════════════════ */
        .lux-proj-section {
          padding: 160px 0;
        }

        @media (max-width: 768px) {
          .lux-proj-section {
            padding: 100px 0;
          }
        }

        .lux-proj-list {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .lux-proj-item {
          display: grid;
          grid-template-columns: 1fr 1px 1.2fr;
          gap: 48px;
          align-items: start;
          padding: 48px 0;
          border-top: 1px solid rgba(201, 149, 107, 0.1);
          transition: background 0.4s ease;
          position: relative;
        }

        .lux-proj-item:last-child {
          border-bottom: 1px solid rgba(201, 149, 107, 0.1);
        }

        .lux-proj-item:hover {
          background: rgba(201, 149, 107, 0.02);
        }

        @media (max-width: 768px) {
          .lux-proj-item {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 36px 0;
          }
        }

        .lux-proj-left {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .lux-proj-num {
          font-family: var(--font-heading);
          font-size: 14px;
          font-weight: 300;
          color: var(--copper);
          letter-spacing: 0.1em;
          opacity: 0.5;
        }

        .lux-proj-title {
          font-family: var(--font-heading);
          font-size: clamp(24px, 3vw, 32px);
          font-weight: 600;
          color: var(--text-primary);
          letter-spacing: -0.01em;
          line-height: 1.2;
        }

        .lux-proj-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 4px;
        }

        .lux-proj-tech span {
          font-family: 'JetBrains Mono', 'SF Mono', 'Courier New', monospace;
          font-size: 11px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--copper);
          opacity: 0.7;
        }

        .lux-proj-tech span:not(:last-child)::after {
          content: ' /';
          color: var(--text-muted);
          margin-left: 2px;
        }

        .lux-proj-divider-vert {
          width: 1px;
          align-self: stretch;
          background: rgba(201, 149, 107, 0.2);
        }

        @media (max-width: 768px) {
          .lux-proj-divider-vert {
            display: none;
          }
        }

        .lux-proj-right {
          padding-top: 4px;
        }

        .lux-proj-desc {
          font-size: 15px;
          line-height: 1.8;
          color: var(--text-secondary);
        }

        .lux-proj-featured {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-heading);
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--copper);
          margin-bottom: 16px;
        }

        .lux-proj-featured::before {
          content: '';
          display: block;
          width: 8px;
          height: 8px;
          border: 1px solid var(--copper);
          border-radius: 50%;
          background: rgba(201, 149, 107, 0.3);
        }

        /* ═══════════════════════════════════════════
           EDUCATION & CERTIFICATIONS
           ═══════════════════════════════════════════ */
        .lux-edu-section {
          padding: 160px 0;
        }

        @media (max-width: 768px) {
          .lux-edu-section {
            padding: 100px 0;
          }
        }

        .lux-edu-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
        }

        @media (max-width: 768px) {
          .lux-edu-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }

        .lux-edu-column-label {
          font-family: var(--font-heading);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--copper);
          margin-bottom: 40px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .lux-edu-column-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(201, 149, 107, 0.15);
        }

        .lux-edu-item {
          margin-bottom: 40px;
        }

        .lux-edu-item:last-child {
          margin-bottom: 0;
        }

        .lux-edu-period {
          font-family: 'JetBrains Mono', 'SF Mono', 'Courier New', monospace;
          font-size: 12px;
          letter-spacing: 0.05em;
          color: var(--copper);
          margin-bottom: 8px;
        }

        .lux-edu-degree {
          font-family: var(--font-heading);
          font-size: 20px;
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.3;
          margin-bottom: 4px;
        }

        .lux-edu-institution {
          font-family: var(--font-heading);
          font-size: 13px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 16px;
        }

        .lux-edu-desc {
          font-size: 14px;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 16px;
        }

        .lux-edu-courses {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .lux-edu-course {
          font-family: var(--font-heading);
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-muted);
          padding: 4px 12px;
          border: 1px solid rgba(201, 149, 107, 0.12);
        }

        /* Certifications */
        .lux-cert-list {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .lux-cert-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px 0;
          border-bottom: 1px solid rgba(201, 149, 107, 0.08);
          transition: all 0.3s ease;
        }

        .lux-cert-item:first-child {
          border-top: 1px solid rgba(201, 149, 107, 0.08);
        }

        .lux-cert-item:hover {
          padding-left: 12px;
          background: rgba(201, 149, 107, 0.02);
        }

        .lux-cert-check {
          flex-shrink: 0;
          width: 18px;
          height: 18px;
          color: var(--copper);
        }

        .lux-cert-name {
          font-family: var(--font-heading);
          font-size: 15px;
          font-weight: 500;
          color: var(--text-primary);
          flex: 1;
        }

        .lux-cert-meta {
          font-family: 'JetBrains Mono', 'SF Mono', 'Courier New', monospace;
          font-size: 11px;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          flex-shrink: 0;
        }

        .lux-cert-link {
          flex-shrink: 0;
          color: var(--text-muted);
          transition: color 0.3s ease;
        }

        .lux-cert-link:hover {
          color: var(--copper);
        }

        .lux-cert-link svg {
          width: 14px;
          height: 14px;
        }

        /* ═══════════════════════════════════════════
           TECH STACK
           ═══════════════════════════════════════════ */
        .lux-tech-section {
          padding: 160px 0;
        }

        @media (max-width: 768px) {
          .lux-tech-section {
            padding: 100px 0;
          }
        }

        .lux-tech-categories {
          display: flex;
          flex-direction: column;
          gap: 56px;
        }

        .lux-tech-cat-title {
          font-family: var(--font-heading);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--copper);
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .lux-tech-cat-title::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(201, 149, 107, 0.12);
        }

        .lux-tech-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0;
        }

        .lux-tech-item {
          font-family: var(--font-heading);
          font-size: 14px;
          font-weight: 400;
          letter-spacing: 0.04em;
          padding: 14px 28px;
          border: 1px solid rgba(201, 149, 107, 0.1);
          margin-right: -1px;
          margin-bottom: -1px;
          color: var(--text-secondary);
          transition: all 0.3s ease;
          cursor: default;
        }

        .lux-tech-item:hover {
          background: var(--copper);
          color: var(--bg);
          border-color: var(--copper);
          position: relative;
          z-index: 1;
        }

        /* ═══════════════════════════════════════════
           CONTACT
           ═══════════════════════════════════════════ */
        .lux-contact-section {
          padding: 200px 0 160px;
        }

        @media (max-width: 768px) {
          .lux-contact-section {
            padding: 120px 0 100px;
          }
        }

        .lux-contact-label {
          font-family: var(--font-heading);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--copper);
          margin-bottom: 40px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .lux-contact-label::before {
          content: '';
          display: block;
          width: 40px;
          height: 1px;
          background: var(--copper);
        }

        .lux-contact-heading {
          font-family: var(--font-heading);
          font-size: clamp(32px, 5vw, 64px);
          font-weight: 300;
          color: var(--text-primary);
          letter-spacing: -0.01em;
          line-height: 1.2;
          margin-bottom: 48px;
          max-width: 700px;
        }

        .lux-contact-email {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          font-family: var(--font-heading);
          font-size: clamp(24px, 4vw, 44px);
          font-weight: 600;
          color: var(--text-primary);
          text-decoration: none;
          letter-spacing: -0.02em;
          transition: color 0.3s ease;
          position: relative;
        }

        .lux-contact-email::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 1px;
          background: var(--copper);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .lux-contact-email:hover {
          color: var(--copper);
        }

        .lux-contact-email:hover::after {
          transform: scaleX(1);
        }

        .lux-contact-email svg {
          width: clamp(20px, 3vw, 32px);
          height: clamp(20px, 3vw, 32px);
          transition: transform 0.3s ease;
        }

        .lux-contact-email:hover svg {
          transform: translate(3px, -3px);
        }

        .lux-contact-detail {
          margin-top: 40px;
          display: flex;
          gap: 48px;
          flex-wrap: wrap;
        }

        .lux-contact-detail-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-heading);
          font-size: 13px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        .lux-contact-detail-item svg {
          width: 16px;
          height: 16px;
          color: var(--copper);
          opacity: 0.6;
        }

        /* ═══════════════════════════════════════════
           FOOTER
           ═══════════════════════════════════════════ */
        .lux-footer {
          padding: 32px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }

        .lux-footer-text {
          font-family: var(--font-heading);
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        .lux-footer-mark {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .lux-footer-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--copper);
          opacity: 0.5;
        }

        .lux-footer-line {
          width: 32px;
          height: 1px;
          background: rgba(201, 149, 107, 0.3);
        }
      `}</style>

      <div className="lux-root">
        {/* Grain texture overlay */}
        <div className="lux-grain" />

        {/* ================================================================
            HERO
           ================================================================ */}
        <section
          className="lux-hero"
          ref={heroRef}
          onMouseMove={handleMouseMove}
        >
          {/* Mouse-following glow */}
          <div
            className="lux-hero-glow"
            style={{
              left: mousePos.x || '50%',
              top: mousePos.y || '50%',
            }}
          />

          <div className="lux-hero-content">
            <Reveal>
              <div className="lux-hero-label">Portfolio</div>
            </Reveal>

            <Reveal delay={100}>
              <h1
                className="lux-hero-name"
                style={{
                  transform: `scale(${heroScale})`,
                  opacity: heroOpacity,
                  transformOrigin: 'left center',
                }}
              >
                <span>{BIO.name.split(' ')[0]}</span>
                <span>{BIO.name.split(' ').slice(1).join(' ')}</span>
              </h1>
            </Reveal>

            <Reveal delay={250}>
              <div className="lux-hero-line" />
            </Reveal>

            <Reveal delay={350}>
              <p className="lux-hero-tagline">{BIO.tagline}</p>
            </Reveal>

            <Reveal delay={450}>
              <div className="lux-hero-meta">
                <a href={`mailto:${BIO.email}`} className="lux-hero-cta">
                  Get in touch
                  <ArrowUpRight />
                </a>
                <span className="lux-hero-location">
                  <MapPin />
                  {BIO.location}
                </span>
              </div>
            </Reveal>
          </div>

          <div className="lux-hero-scroll">
            Scroll
          </div>
        </section>

        {/* ================================================================
            MARQUEE
           ================================================================ */}
        <CopperDivider />
        <Marquee />
        <CopperDivider />

        {/* ================================================================
            ABOUT
           ================================================================ */}
        <section className="lux-about-section">
          <div className="lux-container">
            <SectionHeader number={1} title="About" />
            <div className="lux-about-grid">
              <Reveal>
                <div className="lux-about-label">Profile</div>
              </Reveal>
              <div className="lux-about-text">
                {BIO.summary.map((para, i) => (
                  <Reveal key={i} delay={i * 80}>
                    <p>{parseBold(para)}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CopperDivider />

        {/* ================================================================
            EXPERIENCE
           ================================================================ */}
        <section className="lux-exp-section">
          <div className="lux-container">
            <SectionHeader number={2} title="Experience" />
            <div className="lux-exp-list">
              {EXPERIENCE.map((job, i) => (
                <Reveal key={job.id} delay={i * 50}>
                  <div className="lux-exp-item">
                    <div className="lux-exp-left">
                      <div className="lux-exp-company">{job.company}</div>
                      <div className="lux-exp-period">{job.period}</div>
                    </div>
                    <div>
                      <div className="lux-exp-role">{job.role}</div>
                      {Array.isArray(job.description) ? (
                        <ul className="lux-exp-desc">
                          {job.description.map((desc, j) => (
                            <li key={j}>{parseBold(desc)}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="lux-exp-desc-single">
                          {parseBold(job.description)}
                        </p>
                      )}
                      <div className="lux-exp-skills">
                        {job.skills.map((skill) => (
                          <span key={skill} className="lux-exp-skill">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CopperDivider />

        {/* ================================================================
            MARQUEE (second instance for rhythm)
           ================================================================ */}
        <Marquee />
        <CopperDivider />

        {/* ================================================================
            PROJECTS
           ================================================================ */}
        <section className="lux-proj-section">
          <div className="lux-container">
            <SectionHeader number={3} title="Projects" />
            <div className="lux-proj-list">
              {PROJECTS.map((project, i) => (
                <Reveal key={project.id} delay={i * 80}>
                  <div className="lux-proj-item">
                    <div className="lux-proj-left">
                      <span className="lux-proj-num">{sectionNum(i + 1)}</span>
                      <h3 className="lux-proj-title">{project.title}</h3>
                      <div className="lux-proj-tech">
                        {project.techStack.map((tech) => (
                          <span key={tech}>{tech}</span>
                        ))}
                      </div>
                    </div>
                    <div className="lux-proj-divider-vert" />
                    <div className="lux-proj-right">
                      {project.featured && (
                        <div className="lux-proj-featured">Featured</div>
                      )}
                      <p className="lux-proj-desc">
                        {parseBold(project.description)}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CopperDivider />

        {/* ================================================================
            EDUCATION & CERTIFICATIONS
           ================================================================ */}
        <section className="lux-edu-section">
          <div className="lux-container">
            <SectionHeader number={4} title="Credentials" />
            <div className="lux-edu-grid">
              {/* Education Column */}
              <div>
                <Reveal>
                  <div className="lux-edu-column-label">Education</div>
                </Reveal>
                {EDUCATION.map((edu, i) => (
                  <Reveal key={edu.id} delay={i * 80}>
                    <div className="lux-edu-item">
                      <div className="lux-edu-period">{edu.period}</div>
                      <div className="lux-edu-degree">{edu.degree}</div>
                      <div className="lux-edu-institution">{edu.institution}</div>
                      <p className="lux-edu-desc">{edu.description}</p>
                      {edu.courses && (
                        <div className="lux-edu-courses">
                          {edu.courses.map((course) => (
                            <span key={course} className="lux-edu-course">{course}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Certifications Column */}
              <div>
                <Reveal>
                  <div className="lux-edu-column-label">Certifications</div>
                </Reveal>
                <Reveal delay={100}>
                  <div className="lux-cert-list">
                    {CERTIFICATIONS.map((cert) => (
                      <div key={cert.id} className="lux-cert-item">
                        <Check className="lux-cert-check" strokeWidth={2.5} />
                        <span className="lux-cert-name">{cert.name}</span>
                        <span className="lux-cert-meta">{cert.issuer} &middot; {cert.year}</span>
                        {cert.url && (
                          <a
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="lux-cert-link"
                            title="View credential"
                          >
                            <ArrowUpRight />
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <CopperDivider />

        {/* ================================================================
            TECH STACK
           ================================================================ */}
        <section className="lux-tech-section">
          <div className="lux-container">
            <SectionHeader number={5} title="Tech Stack" />
            <div className="lux-tech-categories">
              {TECH_CATEGORIES.map((cat, i) => (
                <Reveal key={cat.title} delay={i * 80}>
                  <div>
                    <div className="lux-tech-cat-title">{cat.title}</div>
                    <div className="lux-tech-grid">
                      {cat.items.map((item) => (
                        <div key={item.name} className="lux-tech-item">
                          {item.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CopperDivider />

        {/* ================================================================
            CONTACT
           ================================================================ */}
        <section className="lux-contact-section">
          <div className="lux-container">
            <SectionHeader number={6} title="Contact" />
            <Reveal>
              <div className="lux-contact-label">Let's connect</div>
            </Reveal>
            <Reveal delay={100}>
              <h3 className="lux-contact-heading">
                Have a project in mind, or just want to talk infrastructure?
              </h3>
            </Reveal>
            <Reveal delay={200}>
              <a
                href={`mailto:${BIO.email}`}
                className="lux-contact-email"
              >
                {BIO.email}
                <ArrowUpRight />
              </a>
            </Reveal>
            <Reveal delay={300}>
              <div className="lux-contact-detail">
                <div className="lux-contact-detail-item">
                  <MapPin />
                  {BIO.location}
                </div>
                <div className="lux-contact-detail-item">
                  <Mail />
                  Available for opportunities
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ================================================================
            FOOTER
           ================================================================ */}
        <CopperDivider />
        <footer>
          <div className="lux-container">
            <div className="lux-footer">
              <span className="lux-footer-text">
                {BIO.name} &mdash; {currentYear}
              </span>
              <div className="lux-footer-mark">
                <div className="lux-footer-dot" />
                <div className="lux-footer-line" />
                <div className="lux-footer-dot" />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Design4;
