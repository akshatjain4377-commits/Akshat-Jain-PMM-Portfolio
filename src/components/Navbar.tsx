import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [
  { label: 'Work', to: '/work' },
  { label: 'Writing', to: '/writing' },
  { label: 'Resources', to: '/resources' },
  { label: 'About', to: '/about' },
];

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (to: string) => {
    if (to === '/work') return location.pathname.startsWith('/work');
    if (to === '/writing') return location.pathname.startsWith('/writing');
    if (to === '/resources') return location.pathname.startsWith('/resources');
    return location.pathname === to;
  };

  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border/80 bg-brand-bg/95 backdrop-blur-md">
      <nav aria-label="Main navigation" className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-5 px-5 md:px-8">
        <Link to="/" onClick={closeMenu} className="group flex shrink-0 items-center gap-3 text-brand-text">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-border font-display text-lg transition group-hover:border-brand-accent">A</span>
          <span className="leading-tight">
            <span className="block font-display text-lg">Akshat Jain</span>
            <span className="mt-0.5 hidden text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-muted sm:block">Product marketing</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              aria-current={isActive(link.to) ? 'page' : undefined}
              className={`relative py-2 text-sm transition-colors hover:text-brand-text ${isActive(link.to) ? 'font-semibold text-brand-text' : 'text-brand-muted'}`}
            >
              {link.label}
              {isActive(link.to) && <span className="absolute inset-x-0 -bottom-1 h-px bg-brand-accent" />}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://raw.githubusercontent.com/akshatjain4377-commits/Akshat-Jain-PMM-Portfolio/main/akshat-jain-cv.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-brand-border px-4 py-2.5 text-sm font-semibold text-brand-text transition hover:border-brand-accent"
          >
            Resume <ArrowUpRight className="ml-1 inline h-3.5 w-3.5" aria-hidden="true" />
          </a>
          <Link to="/contact" className="rounded-full bg-brand-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-accent-hover">
            Let’s talk
          </Link>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-border text-brand-text md:hidden"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <div id="mobile-navigation" className="border-t border-brand-border bg-brand-bg px-5 py-5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                aria-current={isActive(link.to) ? 'page' : undefined}
                className={`rounded-xl px-4 py-3 text-base ${isActive(link.to) ? 'bg-brand-card font-semibold text-brand-text' : 'text-brand-muted'}`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" onClick={closeMenu} className="mt-2 rounded-xl bg-brand-accent px-4 py-3 text-center font-semibold text-white">
              Let’s talk
            </Link>
            <a
              href="https://raw.githubusercontent.com/akshatjain4377-commits/Akshat-Jain-PMM-Portfolio/main/akshat-jain-cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl px-4 py-3 text-center text-sm font-semibold text-brand-muted"
            >
              Open résumé
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
