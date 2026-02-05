import { useState, useEffect } from 'react';

export function useScrollSpy(ids: string[], offset: number = 100) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      let currentSection = '';
      
      for (const id of ids) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          // Check if we are within this section
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = id;
          }
        }
      }
      
      if (currentSection !== activeId) {
        setActiveId(currentSection);
      }
    };

    // Throttle the event listener for performance
    let ticking = false;
    const listener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', listener);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', listener);
  }, [ids, offset, activeId]);

  return activeId;
}