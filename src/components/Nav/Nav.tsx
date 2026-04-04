import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { useMouseIdle } from '../../hooks/useMouseIdle';
import styles from './Nav.module.css';

const routes = [
  { path: '/', label: 'work' },
  { path: '/god-is-indifferent', label: 'god is indifferent and the streetlights are beautiful' },
  { path: '/the-world-continued', label: 'the world continued without them' },
  { path: '/dear-fellow-member', label: 'dear fellow member' },
  { path: '/what-the-light-chose', label: 'what the light chose' },
  { path: '/about', label: 'about' },
];

export function Nav() {
  const { direction, scrollY } = useScrollDirection();
  const mouseActive = useMouseIdle(2000);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const nearTop = scrollY < 100;
  const visible = nearTop || direction === 'up' || mouseActive || menuOpen;

  return (
    <>
      <nav
        className={`${styles.nav} ${!visible ? styles.hidden : ''} ${!nearTop ? styles.scrolled : ''}`}
      >
        <ul className={styles.links}>
          {routes.map((route) => (
            <li key={route.path}>
              <NavLink
                to={route.path}
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ''}`
                }
                end={route.path === '/'}
              >
                {route.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`${styles.overlay} ${menuOpen ? styles.open : ''}`}>
        {routes.map((route) => (
          <NavLink
            key={route.path}
            to={route.path}
            className={({ isActive }) =>
              `${styles.overlayLink} ${isActive ? styles.active : ''}`
            }
            end={route.path === '/'}
          >
            {route.label}
          </NavLink>
        ))}
      </div>
    </>
  );
}
