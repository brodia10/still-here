import styles from './About.module.css';

export function About() {
  return (
    <div className={styles.about}>
      <div className={styles.left}>
      <p className={styles.text}>
        i photograph what i love, what i fear, what i can't stop looking at. i shoot from inside the moment, never outside it. this project came from personal experience — from knowing both sides of left behind and still here from the inside. tenderness & grit.
      </p>
      <p className={styles.text}>
        the philosophical spine is absurdist. the universe is indifferent. things are abandoned. fall apart. forgotten. and yet. still here. one must imagine sisyphus happy.
      </p>
      <div className={styles.links}>
        <a href="https://instagram.com/still.here.film" target="_blank" rel="noopener noreferrer">
          instagram @still.here.film
        </a>
        <a href="https://postsecretvoicemail.com" target="_blank" rel="noopener noreferrer">
          postsecretvoicemail.com
        </a>
        <a href="https://soundcloud.com" target="_blank" rel="noopener noreferrer">
          soundcloud
        </a>
        <a href="mailto:brook@example.com">
          contact
        </a>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <p className={styles.cardTitle}>post secret voicemail</p>
          <p className={styles.cardDesc}>
            strangers sharing secrets anonymously in their own voice. no profile. no image. only the human voice.
          </p>
        </div>
        <div className={styles.card}>
          <p className={styles.cardTitle}>music</p>
          <p className={styles.cardDesc}>
            composer. producer. cleveland.
          </p>
        </div>
      </div>
      </div>
      <div className={styles.right}>
        <img
          src="/images/about-portrait.jpg"
          alt="brook rodia"
        />
      </div>
    </div>
  );
}
