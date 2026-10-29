import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Moon, Sun, Menu, X } from 'lucide-react';

type Theme = 'paddock' | 'night';

const links = [
  { label: 'Work', to: '/work', code: '01' },
  { label: 'Writing', to: '/writing', code: '02' },
  { label: 'Resources', to: '/resources', code: '03' },
  { label: 'About', to: '/about', code: '04' },
  { label: 'Contact', to: '/contact', code: '05' },
];

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'paddock';
    return window.localStorage.getItem('aj-portfolio-theme') === 'night' ? 'night' : 'paddock';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('aj-portfolio-theme', theme);
  }, [theme]);

  const isActive = (to: string) => {
    if (to === '/work') return location.pathname.startsWith('/work');
    if (to === '/writing') return location.pathname.startsWith('/writing');
    if (to === '/resources') return location.pathname.startsWith('/resources');
    return location.pathname === to;
  };

  const closeMenu = () => setMobileOpen(false);

  const renderLinks = (mobile = false) => links.map((link) => (
    <Link
      key={link.to}
      to={link.to}
      onClick={mobile ? closeMenu : undefined}
      aria-current={isActive(link.to) ? 'page' : undefined}
      className={`race-nav-link ${mobile ? 'race-nav-link--mobile' : ''} ${isActive(link.to) ? 'race-nav-link--active' : ''}`}
    >
      <span className="race-nav-link__code">{link.code}</span>
      <span>{link.label}</span>
      {isActive(link.to) && <span className="race-nav-link__status" aria-hidden="true" />}
    </Link>
  ));

  return (
    <header className="race-topbar">
      <nav aria-label="Main navigation" className="race-topbar__inner">
        <Link to="/" onClick={closeMenu} className="race-brand" aria-label="Akshat Jain, home">
          <span className="race-brand__mark">AJ<span>/</span>07</span>
          <span className="race-brand__online"><span aria-hidden="true" /> PMM SYSTEM ONLINE</span>
        </Link>

        <div className="race-nav hidden md:flex" aria-label="Portfolio sections">
          {renderLinks()}
        </div>

        <div className="race-topbar__controls">
          <div className="race-theme-switch" role="group" aria-label="Choose colour theme">
            <button
              type="button"
              onClick={() => setTheme('paddock')}
              aria-pressed={theme === 'paddock'}
              className={theme === 'paddock' ? 'is-selected' : ''}
              title="Paddock light theme"
            >
              <Sun aria-hidden="true" />
              <span>DAY</span>
            </button>
            <button
              type="button"
              onClick={() => setTheme('night')}
              aria-pressed={theme === 'night'}
              className={theme === 'night' ? 'is-selected' : ''}
              title="Night race theme"
            >
              <Moon aria-hidden="true" />
              <span>NIGHT</span>
            </button>
          </div>

          <a
            href="https://raw.githubusercontent.com/akshatjain4377-commits/Akshat-Jain-PMM-Portfolio/main/akshat-jain-cv.pdf"
            target="_blank"
            rel="noreferrer"
            className="race-resume hidden xl:inline-flex"
          >
            Resume <ArrowUpRight aria-hidden="true" />
          </a>

          <button
            type="button"
            className="race-mobile-toggle md:hidden"
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
        <div id="mobile-navigation" className="race-mobile-menu md:hidden">
          <p className="race-micro mb-3">NAVIGATION // SELECT DESTINATION</p>
          {renderLinks(true)}
          <a
            href="https://raw.githubusercontent.com/akshatjain4377-commits/Akshat-Jain-PMM-Portfolio/main/akshat-jain-cv.pdf"
            target="_blank"
            rel="noreferrer"
            className="race-nav-link race-nav-link--mobile"
          >
            <span className="race-nav-link__code">PDF</span>
            <span>Open resume</span>
            <ArrowUpRight className="ml-auto h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      )}
    </header>
  );
}
