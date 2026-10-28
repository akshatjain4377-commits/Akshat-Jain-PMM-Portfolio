import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerLinks = [
  { label: 'Work', to: '/work' },
  { label: 'Writing', to: '/writing' },
  { label: 'Resources', to: '/resources' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-bg">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-14 md:px-8 md:pt-16">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
          <div className="max-w-xl">
            <Link to="/" className="inline-flex items-center gap-3 text-brand-text transition hover:text-brand-accent">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-border font-display text-lg">A</span>
              <span className="font-display text-xl">Akshat Jain</span>
            </Link>
            <p className="mt-5 max-w-lg font-display text-2xl leading-snug text-brand-text md:text-3xl">
              Customer insight. Clear positioning. Go-to-market that connects.
            </p>
            <p className="mt-4 max-w-md text-sm leading-6 text-brand-muted">
              Product marketing, work in progress, and ideas worth a second draft.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-4 text-sm sm:grid-cols-3 md:grid-cols-2">
            {footerLinks.map((link) => (
              <Link key={link.to} to={link.to} className="text-brand-muted transition hover:text-brand-text">
                {link.label}
              </Link>
            ))}
            <a href="https://www.linkedin.com/in/akshatjain1102/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-brand-muted transition hover:text-brand-text">
              LinkedIn <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/newsletters/the-second-draft-7357808364178870273" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-brand-muted transition hover:text-brand-text">
              The Second Draft <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-brand-border pt-6 text-xs text-brand-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Akshat Jain</p>
          <p>Made to be useful, not just impressive.</p>
        </div>
      </div>
    </footer>
  );
}
