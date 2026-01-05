import { useEffect, useState, RefObject } from 'react';

export function useIntersectionObserver(
  elementRefs: RefObject<HTMLElement>[],
  options: IntersectionObserverInit = {}
) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, {
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0.1,
      ...options,
    });

    elementRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [elementRefs, options]);

  return activeId;
}