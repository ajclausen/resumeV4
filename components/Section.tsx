import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

export const Section: React.FC<SectionProps> = ({ id, className = "", children, delay = 0 }) => {
  const [ref, isVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      id={id}
      ref={ref}
      className={`
        transition-all duration-1000 ease-out transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
        ${className}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </section>
  );
};