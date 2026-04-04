import { useInView } from 'react-intersection-observer';
import { getPlaceholderSrc } from '../../lib/placeholder';
import styles from './GalleryImage.module.css';

interface GalleryImageProps {
  src: string;
  alt: string;
  aspect: [number, number];
}

export function GalleryImage({ src, alt, aspect }: GalleryImageProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const imageSrc = src || getPlaceholderSrc(aspect[0] * 100, aspect[1] * 100);
  const aspectRatio = `${aspect[0]} / ${aspect[1]}`;

  return (
    <div
      ref={ref}
      className={`${styles.wrapper} ${inView ? styles.visible : ''}`}
      style={{ aspectRatio }}
    >
      <img
        src={imageSrc}
        alt={alt}
        loading="lazy"
        className={styles.image}
      />
    </div>
  );
}
