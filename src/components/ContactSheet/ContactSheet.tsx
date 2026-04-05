import { useInView } from 'react-intersection-observer';
import styles from './ContactSheet.module.css';

interface Frame {
  src: string;
  alt: string;
}

const frames: Frame[] = [
  // row 1 — establishing, the room, the first laugh
  { src: '/images/contact-sheet/01-couple-portrait-soft.jpg', alt: 'couple standing close in amber light, quiet, the room behind them' },
  { src: '/images/contact-sheet/03-couple-wide-smiling.jpg', alt: 'wider, both smiling, ceiling fan and warm light above' },
  { src: '/images/contact-sheet/02-couple-laughing.jpg', alt: 'the laugh breaks, both lit up' },
  { src: '/images/contact-sheet/14-couple-leaning.jpg', alt: 'leaning in, hair catching light' },
  { src: '/images/contact-sheet/05-couple-close-laughing.jpg', alt: 'close, both laughing, glasses catching the light' },

  // row 2 — energy building, motion, the best frames
  { src: '/images/contact-sheet/07-couple-close-big-laugh.jpg', alt: 'the big laugh, teeth and light' },
  { src: '/images/contact-sheet/09-motion-blur-warm.jpg', alt: 'motion blur, she moved, he is still smiling' },
  { src: '/images/contact-sheet/10-looking-up-smiling.jpg', alt: 'looking up together, hair and light' },
  { src: '/images/contact-sheet/12-laughing-eyes-closed.jpg', alt: 'eyes closed laughing, the purest frame' },
  { src: '/images/contact-sheet/08-couple-close-amber.jpg', alt: 'deep amber, faces close, warmth everywhere' },

  // row 3 — resolution, warmth, the end of the roll
  { src: '/images/contact-sheet/17-hair-toss-blur.jpg', alt: 'hair in motion, leaning back, blur and amber' },
  { src: '/images/contact-sheet/24-big-laugh-close.jpg', alt: 'the biggest laugh, everything in it' },
  { src: '/images/contact-sheet/15-looking-at-each-other.jpg', alt: 'looking at each other, the room forgotten' },
  { src: '/images/contact-sheet/25-couple-smiling-warm.jpg', alt: 'smiling together, warm amber' },
  { src: '/images/contact-sheet/20-smiling-warm-glow.jpg', alt: 'warm glow, gentle, end of the roll' },
];

interface FilmStripProps {
  stripFrames: Frame[];
  stripIndex: number;
  filmStock: string;
  framesPerStrip: number;
}

// seeded pseudo-random: deterministic per strip so offsets don't shift on re-render
function seededRandom(seed: number) {
  const x = Math.sin(seed * 127.1) * 43758.5453;
  return x - Math.floor(x);
}

function FilmStrip({ stripFrames, stripIndex, filmStock, framesPerStrip }: FilmStripProps) {
  const startFrame = stripIndex * framesPerStrip;

  // each strip gets a slight horizontal offset (like hand-placed strips)
  const offset = (seededRandom(stripIndex + 1) - 0.5) * 12; // -6px to +6px

  return (
    <div
      className={styles.strip}
      style={{ '--strip-offset': `${offset}px` } as React.CSSProperties}
    >
      <div className={styles.frames}>
        {stripFrames.map((frame, i) => {
          // subtle per-frame width variation
          const widthJitter = 1 + (seededRandom((stripIndex + 1) * 100 + i) - 0.5) * 0.06;
          return (
            <div
              key={i}
              className={styles.frame}
              style={{ flexGrow: widthJitter, flexShrink: 1, flexBasis: 0 }}
            >
              <img
                src={`${import.meta.env.BASE_URL}${frame.src.replace(/^\//, '')}`}
                alt={frame.alt}
                loading="lazy"
                className={styles.image}
              />
            </div>
          );
        })}
      </div>

      <div className={styles.rebate}>
        {stripFrames.map((_, i) => {
          const n = startFrame + i + 1;
          const secondary = startFrame + i + framesPerStrip + 1;
          return (
            <div key={i} className={styles.rebateCell}>
              <div className={styles.rebateLine1}>
                <span className={styles.frameNum}>{n}</span>
                <span className={styles.frameSub}>{n}A</span>
              </div>
              <div className={styles.rebateLine2}>
                <span className={styles.secondaryNum}>{secondary}</span>
                <span className={styles.stockName}>{filmStock}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface ContactSheetProps {
  filmStock?: string;
}

export function ContactSheet({ filmStock = 'KODACHROME 64' }: ContactSheetProps) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const framesPerStrip = 5;
  const strips: Frame[][] = [];
  for (let i = 0; i < frames.length; i += framesPerStrip) {
    strips.push(frames.slice(i, i + framesPerStrip));
  }

  return (
    <div className={styles.sheet}>
      <div ref={ref} className={`${styles.paper} ${inView ? styles.paperVisible : ''}`}>
        {strips.map((strip, i) => (
          <FilmStrip
            key={i}
            stripFrames={strip}
            stripIndex={i}
            filmStock={filmStock}
            framesPerStrip={framesPerStrip}
          />
        ))}
      </div>
    </div>
  );
}
