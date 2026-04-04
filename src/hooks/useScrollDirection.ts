import { useState, useEffect, useRef } from 'react';

export type ScrollDirection = 'up' | 'down' | null;

export function useScrollDirection(threshold = 10): { direction: ScrollDirection; scrollY: number } {
  const [direction, setDirection] = useState<ScrollDirection>(null);
  const [scrollY, setScrollY] = useState(0);
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        setScrollY(currentY);

        if (Math.abs(currentY - lastY.current) > threshold) {
          setDirection(currentY > lastY.current ? 'down' : 'up');
          lastY.current = currentY;
        }

        ticking.current = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return { direction, scrollY };
}
