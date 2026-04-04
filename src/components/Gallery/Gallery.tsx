import { galleries } from '../../data/galleries';
import { GalleryImage } from '../GalleryImage/GalleryImage';
import styles from './Gallery.module.css';

interface GalleryProps {
  seriesKey: string;
  intro?: string;
}

export function Gallery({ seriesKey, intro }: GalleryProps) {
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
          <GalleryImage
            key={`${seriesKey}-${i}`}
            src={img.src}
            alt={img.alt}
            aspect={img.aspect}
          />
        ))}
      </div>
    </div>
  );
}
