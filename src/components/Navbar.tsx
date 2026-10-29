import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Moon, Sun, Menu, X } from 'lucide-react';

type Theme = 'light' | 'dark';

const links = [
  { label: 'Work', to: '/work' },
  { label: 'Writing', to: '/writing' },
  { label: 'Resources', to: '/resources' },
  { label: 'About', to: '/about' },
];

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'light';
    return window.localStorage.getItem('aj-portfolio-theme') === 'dark' ? 'dark' : 'light';
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
          <div className="theme-toggle" role="group" aria-label="Choose website theme">
            <button
              type="button"
              onClick={() => setTheme('light')}
              aria-pressed={theme === 'light'}
              className={theme === 'light' ? 'is-selected' : ''}
              title="Light theme"
            >
              <Sun aria-hidden="true" />
              <span>Light</span>
            </button>
            <button
              type="button"
              onClick={() => setTheme('dark')}
              aria-pressed={theme === 'dark'}
              className={theme === 'dark' ? 'is-selected' : ''}
              title="Dark theme"
            >
              <Moon aria-hidden="true" />
              <span>Dark</span>
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
