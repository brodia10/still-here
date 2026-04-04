import { Gallery } from '../components/Gallery/Gallery';

export function Work() {
  return (
    <>
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'flex-end',
        padding: '2rem',
      }}>
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)',
          fontWeight: 400,
          letterSpacing: '0.02em',
          color: 'var(--text-muted)',
        }}>
          left behind{' '}
          <span style={{
            color: 'var(--accent)',
            textShadow: '0 0 12px rgba(193, 127, 36, 0.4)',
          }}>/</span>
          {' '}still here
        </h1>
      </div>
      <Gallery seriesKey="work" />
    </>
  );
}
