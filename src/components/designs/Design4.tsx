import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ArrowUpRight, Check, Mail, MapPin, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { BIO, EXPERIENCE, EDUCATION, CERTIFICATIONS, PROJECTS, TECH_CATEGORIES } from '../../data';
import '../../styles/agency.css';

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
  const { theme, toggleTheme } = useTheme();

  // Mouse-following radial gradient on hero
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  // Set body bg + theme-color for iOS safe areas
  useEffect(() => {
    const bgColor = theme === 'dark' ? '#0c0c0c' : '#f8fafc';
    document.body.style.background = bgColor;
    const tc = document.querySelector('meta[name="theme-color"]');
    if (tc) tc.setAttribute('content', bgColor);
    return () => { document.body.style.background = ''; };
  }, [theme]);

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

      <div className="lux-root">
        {/* Grain texture overlay */}
        <div className="lux-grain" />

        {/* Theme Toggle */}
        <button
          className="lux-theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun /> : <Moon />}
        </button>

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
                        <span className="lux-cert-meta">
                          <span className="lux-cert-issuer-full">{cert.issuer}</span>
                          <span className="lux-cert-issuer-short">{cert.issuer === 'Linux Professional Institute' ? 'LPI' : cert.issuer}</span>
                          {' '}&middot; {cert.year}
                        </span>
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
