import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, BookOpen, Compass, Menu, X } from 'lucide-react';

type Mode = 'journey' | 'reading';

function getInitialMode(): Mode {
  if (typeof window === 'undefined') return 'journey';

  try {
    return window.localStorage.getItem('aj-portfolio-mode') === 'reading' ? 'reading' : 'journey';
  } catch {
    // Private browsing and embedded browsers can deny storage access.
    return 'journey';
  }
}

const links = [
  { label: 'Work', to: '/work' },
  { label: 'Writing', to: '/writing' },
  { label: 'Resources', to: '/resources' },
  { label: 'About', to: '/about' },
];

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mode, setMode] = useState<Mode>(getInitialMode);

  useEffect(() => {
    document.documentElement.dataset.mode = mode;

    try {
      window.localStorage.setItem('aj-portfolio-mode', mode);
    } catch {
      // The page still works normally when persistent preferences are unavailable.
    }
  }, [mode]);

  const isActive = (to: string) => {
    if (to === '/work') return location.pathname.startsWith('/work');
    if (to === '/writing') return location.pathname.startsWith('/writing');
    if (to === '/resources') return location.pathname.startsWith('/resources');
    return location.pathname === to;
  };
  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="site-header">
      <nav aria-label="Main navigation" className="site-header__inner">
        <Link to="/" onClick={closeMenu} className="site-brand" aria-label="Akshat Jain, home">
          <span className="site-brand__monogram">AJ<span>.</span></span>
          <span className="site-brand__copy">
            <span className="site-brand__name">Akshat Jain</span>
            <span className="site-brand__descriptor">Product marketing and product stories</span>
          </span>
        </Link>

        <div className="site-nav hidden md:flex" aria-label="Portfolio sections">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              aria-current={isActive(link.to) ? 'page' : undefined}
              className={`site-nav__link ${isActive(link.to) ? 'is-active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="site-header__actions">
          <div className="mode-toggle" role="group" aria-label="Choose browsing mode">
            <button
              type="button"
              onClick={() => setMode('journey')}
              aria-pressed={mode === 'journey'}
              className={mode === 'journey' ? 'is-selected' : ''}
              title="Journey mode, immersive scroll experience"
            >
              <Compass aria-hidden="true" />
              <span>Journey</span>
            </button>
            <button
              type="button"
              onClick={() => setMode('reading')}
              aria-pressed={mode === 'reading'}
              className={mode === 'reading' ? 'is-selected' : ''}
              title="Reading mode, calmer content-first experience"
            >
              <BookOpen aria-hidden="true" />
              <span>Reading</span>
            </button>
          </div>

          <Link to="/contact" className="site-header__contact hidden lg:inline-flex">
            Say hello <ArrowUpRight aria-hidden="true" />
          </Link>

          <button
            type="button"
            className="site-mobile-toggle md:hidden"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div id="mobile-navigation" className="site-mobile-menu md:hidden">
          <p className="site-micro mb-3">EXPLORE</p>
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={closeMenu}
              aria-current={isActive(link.to) ? 'page' : undefined}
              className={`site-mobile-menu__link ${isActive(link.to) ? 'is-active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" onClick={closeMenu} className="site-mobile-menu__contact">
            Say hello <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      )}
    </header>
  );
}
