import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { galleries } from '../../data/galleries';
import { GalleryImage } from '../GalleryImage/GalleryImage';
import styles from './Gallery.module.css';

interface GalleryProps {
  seriesKey: string;
  intro?: string;
  onSectionChange?: (section: string | null) => void;
}

function Breath({ text, onVisible }: { text: string; onVisible?: () => void }) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const { ref: sectionRef, inView: sectionVisible } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (sectionVisible && onVisible) onVisible();
  }, [sectionVisible, onVisible]);

  return (
    <div
      ref={(node) => { ref(node); sectionRef(node); }}
      className={`${styles.breath} ${inView ? styles.breathVisible : ''}`}
    >
      <p className={styles.breathText}>{text}</p>
    </div>
  );
}

const breathToRoute: Record<string, string> = {
  'god is indifferent and the streetlights are beautiful': '/god-is-indifferent',
  'the world continued without them': '/the-world-continued',
  'dear fellow member': '/dear-fellow-member',
  'what the light chose': '/what-the-light-chose',
};

export function Gallery({ seriesKey, intro, onSectionChange }: GalleryProps) {
  const series = galleries[seriesKey];
  if (!series) return null;

  const introText = intro ?? series.intro;

  return (
    <div className={styles.gallery}>
      {introText && (
        <p className={styles.intro}>{introText}</p>
      )}
      <div className={styles.images}>
        {series.images.map((img, i) => (
          <div key={`${seriesKey}-${i}`}>
            {img.breath && (
              <Breath
                text={img.breath}
                onVisible={onSectionChange ? () => onSectionChange(breathToRoute[img.breath!] ?? null) : undefined}
              />
            )}
            <GalleryImage
              src={img.src}
              alt={img.alt}
              aspect={img.aspect}
              size={img.size}
              align={img.align}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
