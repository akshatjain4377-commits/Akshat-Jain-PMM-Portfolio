import { Link, useLocation } from 'react-router-dom';
import { Hexagon } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const isCaseStudy = location.pathname.includes('/work/');

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-brand-border bg-brand-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 text-brand-text hover:text-brand-accent transition-colors">
          <Hexagon className="h-6 w-6 text-brand-accent" />
          <span className="font-display font-bold text-lg tracking-tight">Akshat Jain</span>
        </Link>

        {isCaseStudy ? (
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-muted">
            <a href="#context" className="hover:text-brand-text transition-colors">Context</a>
            <a href="#problem" className="hover:text-brand-text transition-colors">Problem</a>
            <a href="#insight" className="hover:text-brand-text transition-colors">Insight</a>
            <a href="#strategy" className="hover:text-brand-text transition-colors">Strategy</a>
            <a href="#metrics" className="hover:text-brand-text transition-colors">Metrics</a>
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-muted">
            <Link to="/" className="hover:text-brand-text transition-colors">Growth Philosophy</Link>
            <Link to="/work" className="hover:text-brand-text transition-colors">Work</Link>
            <Link to="/about" className="hover:text-brand-text transition-colors">About</Link>
            <Link to="/contact" className="hover:text-brand-text transition-colors">Contact</Link>
          </div>
        )}

        <div className="flex items-center gap-4">
  {isCaseStudy ? (
    <button className="rounded-full bg-brand-accent px-5 py-2 text-sm font-semibold text-brand-bg hover:bg-brand-accent-hover transition-colors">
      Share
    </button>
  ) : (
    <button
      onClick={() => {
        const link = document.createElement("a");
        link.href =
          "https://raw.githubusercontent.com/akshatjain4377-commits/Akshat-Jain-PMM-Portfolio/main/akshat-jain-resume.pdf";
        link.download = "Akshat-Jain-Resume.pdf";
        link.click();
      }}
      className="rounded-full bg-brand-accent px-5 py-2 text-sm font-semibold text-brand-bg hover:bg-brand-accent-hover transition-colors"
    >
      Resume
    </button>
  )}
</div>
      </div>
    </nav>
  );
}
