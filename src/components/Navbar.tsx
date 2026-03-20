import { Link, useLocation } from 'react-router-dom';
import { Hexagon, Check, Copy, Linkedin, Twitter, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const location = useLocation();
  const isCaseStudy = location.pathname.includes('/work/');

  // ── Active section tracker ──────────────────────────────────────────────────
  const [activeSection, setActiveSection] = useState('context');

  useEffect(() => {
    if (!isCaseStudy) return;
    const sections = ['context', 'problem', 'insight', 'strategy', 'metrics'];
    const observers = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isCaseStudy, location.pathname]);

  // ── Smooth scroll handler ───────────────────────────────────────────────────
  const handleSectionClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
    setActiveSection(id);
  };

  // ── Share dropdown ──────────────────────────────────────────────────────────
  const [shareOpen, setShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const shareRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (shareRef.current && !shareRef.current.contains(e.target)) {
        setShareOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => { setCopied(false); setShareOpen(false); }, 1800);
  };

  const handleLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setShareOpen(false);
  };

  const handleTwitter = () => {
    const text = `Check out this PMM case study by Akshat Jain`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setShareOpen(false);
  };

  const sections = ['context', 'problem', 'insight', 'strategy', 'metrics'];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-brand-border bg-brand-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* ── Logo — unchanged ── */}
        <Link
          to="/"
          className="flex items-center gap-2 text-brand-text hover:text-brand-accent transition-colors"
        >
          <Hexagon className="h-6 w-6 text-brand-accent" />
          <span className="font-display font-bold text-lg tracking-tight">Akshat Jain</span>
        </Link>

        {/* ── Nav links ── */}
        {isCaseStudy ? (
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleSectionClick(e, id)}
                className={`capitalize transition-colors ${
                  activeSection === id
                    ? 'text-brand-accent'
                    : 'text-brand-muted hover:text-brand-text'
                }`}
              >
                {id}
              </a>
            ))}
          </div>
        ) : (
          // ── Home nav — completely unchanged ──
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-muted">
            <Link to="/work" className="hover:text-brand-text transition-colors">Work</Link>
            <Link to="/about" className="hover:text-brand-text transition-colors">About</Link>
            <Link to="/contact" className="hover:text-brand-text transition-colors">Contact</Link>
          </div>
        )}

        {/* ── Right button ── */}
        <div className="flex items-center gap-4">
          {isCaseStudy ? (

            // ── Share button with dropdown ──
            <div className="relative" ref={shareRef}>
              <button
                onClick={() => setShareOpen((prev) => !prev)}
                className="rounded-full bg-brand-accent px-5 py-2 text-sm font-semibold text-brand-bg hover:bg-brand-accent-hover transition-colors"
              >
                Share
              </button>

              {shareOpen && (
                <div className="absolute right-0 top-12 w-52 overflow-hidden rounded-2xl border border-brand-border bg-brand-card shadow-xl">

                  {/* Copy link */}
                  <button
                    onClick={handleCopyLink}
                    className="flex w-full items-center gap-3 px-4 py-3 text-sm text-brand-text hover:bg-brand-border transition-colors"
                  >
                    {copied
                      ? <Check className="h-4 w-4 text-brand-accent" />
                      : <Copy className="h-4 w-4 text-brand-muted" />
                    }
                    {copied ? 'Link copied!' : 'Copy link'}
                  </button>

                  {/* LinkedIn */}
                  <button
                    onClick={handleLinkedIn}
                    className="flex w-full items-center gap-3 px-4 py-3 text-sm text-brand-text hover:bg-brand-border transition-colors"
                  >
                    <Linkedin className="h-4 w-4 text-brand-muted" />
                    Share on LinkedIn
                  </button>

                  {/* Twitter / X */}
                  <button
                    onClick={handleTwitter}
                    className="flex w-full items-center gap-3 px-4 py-3 text-sm text-brand-text hover:bg-brand-border transition-colors"
                  >
                    <Twitter className="h-4 w-4 text-brand-muted" />
                    Share on Twitter
                  </button>

                </div>
              )}
            </div>

          ) : (

            // ── Resume download — completely unchanged ──
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href =
                  "https://raw.githubusercontent.com/akshatjain4377-commits/Akshat-Jain-PMM-Portfolio/main/akshat-jain-cv.pdf";
                link.download = "akshat-jain-cv.pdf";
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
