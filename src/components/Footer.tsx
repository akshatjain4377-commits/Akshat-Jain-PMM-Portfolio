import { Hexagon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-bg py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 text-brand-text hover:text-brand-accent transition-colors mb-4">
              <Hexagon className="h-6 w-6 text-brand-accent" />
              <span className="font-display font-bold text-lg tracking-tight">Akshat Jain</span>
            </Link>
            <p className="max-w-xs text-sm text-brand-muted">
              Product Marketing is where business clarity becomes customer belief.
            </p>
          </div>
          
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-brand-muted">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="text-brand-text hover:text-brand-accent transition-colors">Home</Link></li>
              <li><Link to="/" className="text-brand-text hover:text-brand-accent transition-colors">Growth Philosophy</Link></li>
              <li><Link to="/work" className="text-brand-text hover:text-brand-accent transition-colors">Selected Work</Link></li>
              <li><Link to="/about" className="text-brand-text hover:text-brand-accent transition-colors">The Human Edge</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-brand-muted">Connect</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/contact" className="flex items-center gap-2 text-brand-text hover:text-brand-accent transition-colors">@ Contact Me</Link></li>
              <li><a href="#" className="flex items-center gap-2 text-brand-text hover:text-brand-accent transition-colors">🔗 LinkedIn</a></li>
              <li><a href="#" className="flex items-center gap-2 text-brand-text hover:text-brand-accent transition-colors">📥 Download Resume</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 flex flex-col items-center justify-between border-t border-brand-border pt-8 text-xs text-brand-muted md:flex-row">
          <p>© 2024 Akshat Jain. Built for Growth.</p>
          <div className="mt-4 flex gap-6 md:mt-0">
            <a href="#" className="hover:text-brand-text transition-colors">Twitter</a>
            <a href="#" className="hover:text-brand-text transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-brand-text transition-colors">Medium</a>
            <a href="#" className="hover:text-brand-text transition-colors">Newsletter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
