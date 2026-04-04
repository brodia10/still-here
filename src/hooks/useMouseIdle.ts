import { useState, useEffect, useRef } from 'react';

export function useMouseIdle(timeout = 2000): boolean {
  const [isActive, setIsActive] = useState(true);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const onMove = () => {
      setIsActive(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setIsActive(false), timeout);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    timer.current = setTimeout(() => setIsActive(false), timeout);

    return () => {
      window.removeEventListener('mousemove', onMove);
      clearTimeout(timer.current);
    };
  }, [timeout]);

  return isActive;
}
