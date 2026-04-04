import { useInView } from 'react-intersection-observer';
import { getPlaceholderSrc } from '../../lib/placeholder';
import type { ImageSize, ImageAlign } from '../../data/galleries';
import styles from './GalleryImage.module.css';

interface GalleryImageProps {
  src: string;
  alt: string;
  aspect: [number, number];
  size?: ImageSize;
  align?: ImageAlign;
}

const sizeMap: Record<ImageSize, string> = {
  full: '100%',
  large: '85%',
  medium: '65%',
  small: '45%',
};

const alignMap: Record<ImageAlign, string> = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
};

export function GalleryImage({ src, alt, aspect, size = 'full', align = 'center' }: GalleryImageProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const imageSrc = src || getPlaceholderSrc(aspect[0] * 100, aspect[1] * 100);
  const aspectRatio = `${aspect[0]} / ${aspect[1]}`;

  return (
    <div
      className={styles.container}
      style={{ justifyContent: alignMap[align] }}
    >
      <div
        ref={ref}
        className={`${styles.wrapper} ${inView ? styles.visible : ''}`}
        style={{ aspectRatio, width: sizeMap[size] }}
      >
        <img
          src={imageSrc}
          alt={alt}
          loading="lazy"
          className={styles.image}
        />
      </div>
    </div>
  );
}
