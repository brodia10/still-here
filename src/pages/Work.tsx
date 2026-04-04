import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gallery } from '../components/Gallery/Gallery';
import styles from './Work.module.css';

interface WorkProps {
  onSectionChange?: (section: string | null) => void;
}

export function Work({ onSectionChange }: WorkProps) {
  const [showTitle, setShowTitle] = useState(false);
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    const titleTimer = setTimeout(() => setShowTitle(true), 600);
    const heroTimer = setTimeout(() => setShowHero(true), 1800);
    return () => {
      clearTimeout(titleTimer);
      clearTimeout(heroTimer);
    };
  }, []);

  return (
    <>
      <div className={styles.opening}>
        <motion.div
          className={styles.hero}
          initial={{ opacity: 0 }}
          animate={{ opacity: showHero ? 1 : 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <img
            src="/images/god-is-indifferent/deer-cracked-pavement.jpg"
            alt="deer stepping off curb onto cracked pavement, caught in light against total darkness"
            className={styles.heroImage}
          />
        </motion.div>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: showTitle ? 1 : 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          left behind{' '}
          <span className={styles.slash}>/</span>
          {' '}still here
        </motion.h1>
      </div>
      <Gallery seriesKey="work" onSectionChange={onSectionChange} />
    </>
  );
}
