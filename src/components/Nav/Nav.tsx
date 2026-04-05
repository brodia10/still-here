import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { useMouseIdle } from '../../hooks/useMouseIdle';
import { useActiveSection } from '../../hooks/useActiveSection';
import styles from './Nav.module.css';

const routes = [
  { path: '/', label: 'work' },
  { path: '/god-is-indifferent', label: 'god is indifferent and the streetlights are beautiful' },
  { path: '/the-world-continued', label: 'the world continued without them' },
  { path: '/dear-fellow-member', label: 'dear fellow member' },
  { path: '/about', label: 'about' },
];

export function Nav() {
  const { direction, scrollY } = useScrollDirection();
  const mouseActive = useMouseIdle(2000);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const activeSection = useActiveSection();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // lock body scroll when overlay is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const nearTop = scrollY < 100;
  const visible = nearTop || direction === 'up' || mouseActive || menuOpen;
  const isHome = location.pathname === '/';

  const isRouteActive = (path: string, routeIsActive: boolean) => {
    if (isHome && activeSection) {
      return path === activeSection;
    }
    return routeIsActive;
  };

  return (
    <>
      {/* hamburger lives outside the nav so it's always accessible on mobile */}
      <button
        className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="menu"
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        className={`${styles.nav} ${!visible ? styles.hidden : ''} ${!nearTop ? styles.scrolled : ''}`}
      >
        <ul className={styles.links}>
          {routes.map((route) => (
            <li key={route.path}>
              <NavLink
                to={route.path}
                className={({ isActive }) =>
                  `${styles.link} ${isRouteActive(route.path, isActive) ? styles.active : ''}`
                }
                end={route.path === '/'}
              >
                {route.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className={`${styles.overlay} ${menuOpen ? styles.open : ''}`}>
        {routes.map((route) => (
          <NavLink
            key={route.path}
            to={route.path}
            className={({ isActive }) =>
              `${styles.overlayLink} ${isRouteActive(route.path, isActive) ? styles.active : ''}`
            }
            end={route.path === '/'}
            onClick={() => setMenuOpen(false)}
          >
            {route.label}
          </NavLink>
        ))}
      </div>
    </>
  );
}
