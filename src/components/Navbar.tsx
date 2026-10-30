import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, BookOpen, Compass, Menu, X } from 'lucide-react';

type Mode = 'journey' | 'reading';
function getInitialMode(): Mode {
  if (typeof window === 'undefined') return 'journey';
  try { return window.localStorage.getItem('aj-portfolio-mode') === 'reading' ? 'reading' : 'journey'; }
  catch { return 'journey'; }
}

const links = [
  { label: 'Overview', to: '/', kind: 'route' },
  { label: 'Capabilities', to: '/#capabilities', kind: 'anchor' },
  { label: 'Work', to: '/work', kind: 'route' },
  { label: 'Field notes', to: '/writing', kind: 'route' },
  { label: 'Experience', to: '/about', kind: 'route' },
];

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mode, setMode] = useState<Mode>(getInitialMode);

  useEffect(() => {
    document.documentElement.dataset.mode = mode;
    try { window.localStorage.setItem('aj-portfolio-mode', mode); } catch { /* optional preference */ }
  }, [mode]);

  const active = (to: string) => {
    if (to === '/') return location.pathname === '/';
    if (to === '/work') return location.pathname.startsWith('/work');
    if (to === '/writing') return location.pathname.startsWith('/writing');
    if (to === '/about') return location.pathname === '/about';
    return false;
  };
  const closeMenu = () => setMobileOpen(false);

  const renderLink = (item: (typeof links)[number], mobile = false) => {
    const className = `site-nav__link ${mobile ? 'site-nav__link--mobile' : ''} ${active(item.to) ? 'is-active' : ''}`;
    if (item.kind === 'anchor') return <a key={item.to} href={item.to} onClick={closeMenu} className={className}>{item.label}</a>;
    return <Link key={item.to} to={item.to} onClick={closeMenu} aria-current={active(item.to) ? 'page' : undefined} className={className}>{item.label}</Link>;
  };

  return (
    <header className="site-header product-site-header">
      <nav aria-label="Main navigation" className="site-header__inner">
        <Link to="/" onClick={closeMenu} className="site-brand" aria-label="Akshat Jain, overview">
          <span className="site-brand__monogram">AJ<span>.</span></span>
          <span className="site-brand__copy"><span className="site-brand__name">Akshat Jain</span><span className="site-brand__descriptor">Product marketing and product stories</span></span>
        </Link>
        <div className="site-nav hidden lg:flex" aria-label="Portfolio sections">{links.map((item) => renderLink(item))}</div>
        <div className="site-header__actions">
          <div className="mode-toggle" role="group" aria-label="Choose browsing mode">
            <button type="button" onClick={() => setMode('journey')} aria-pressed={mode === 'journey'} className={mode === 'journey' ? 'is-selected' : ''} title="Tour mode"><Compass aria-hidden="true" /><span>Tour mode</span></button>
            <button type="button" onClick={() => setMode('reading')} aria-pressed={mode === 'reading'} className={mode === 'reading' ? 'is-selected' : ''} title="Reading mode"><BookOpen aria-hidden="true" /><span>Reading mode</span></button>
          </div>
          <Link to="/contact" className="site-header__contact hidden xl:inline-flex">Say hello <ArrowUpRight aria-hidden="true" /></Link>
          <button type="button" className="site-mobile-toggle lg:hidden" aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => setMobileOpen((open) => !open)}>{mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
        </div>
      </nav>
      {mobileOpen && <div id="mobile-navigation" className="site-mobile-menu lg:hidden"><p className="site-micro mb-3">Explore the portfolio</p>{links.map((item) => renderLink(item,true))}<Link to="/contact" onClick={closeMenu} className="site-mobile-menu__contact">Say hello <ArrowUpRight aria-hidden="true" /></Link></div>}
    </header>
  );
}
