import { useEffect } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Projects from './pages/Projects';
import CaseStudy from './pages/CaseStudy';
import About from './pages/About';
import Contact from './pages/Contact';
import Writing from './pages/Writing';
import Resources from './pages/Resources';

const caseStudyTitles: Record<string, string> = {
  acko: 'ACKO Insurance',
  'business-standard': 'Business Standard',
  'peak-view': 'The Peak View Stories',
  'digital-pr': 'Digital PR Authority Engine',
};

function NotFound() {
  return (
    <section className="mx-auto flex min-h-[55vh] max-w-4xl flex-col justify-center px-6 py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">404 · Wrong turn</p>
      <h1 className="mt-4 max-w-2xl font-display text-5xl leading-tight md:text-6xl">This page isn’t on the map.</h1>
      <p className="mt-4 max-w-xl text-base leading-7 text-brand-muted">The link may have changed. Start again from the portfolio or jump straight to the work.</p>
      <div className="mt-7 flex flex-wrap gap-3">
        <Link to="/" className="rounded-full bg-brand-accent px-5 py-3 text-sm font-semibold text-white">Back to home</Link>
        <Link to="/work" className="rounded-full border border-brand-border px-5 py-3 text-sm font-semibold">See selected work</Link>
      </div>
    </section>
  );
}

function useRouteMetadata() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const studyId = path.split('/')[2];
    const studyTitle = caseStudyTitles[studyId];
    let title = 'Akshat Jain, Product Marketing, Positioning & GTM';
    let description = 'Akshat Jain is a product marketer connecting customer insight, positioning, messaging and go-to-market.';

    if (path === '/work') {
      title = 'Selected Work, Akshat Jain';
      description = 'Explore selected product marketing, growth and independent brand-building case studies by Akshat Jain.';
    } else if (path.startsWith('/work/')) {
      title = studyTitle ? `${studyTitle}, Case Study | Akshat Jain` : 'Case Study, Akshat Jain';
      description = studyTitle ? `The context, insight, strategic choices and learnings behind Akshat Jain’s ${studyTitle} case study.` : description;
    } else if (path === '/writing' || path.startsWith('/writing/')) {
      title = 'The Second Draft, Writing on Product Marketing';
      description = 'Essays and ideas on positioning, messaging, product marketing, competitive strategy and growth by Akshat Jain.';
    } else if (path === '/resources' || path.startsWith('/resources/')) {
      title = 'PMM Resources & Checklists, Akshat Jain';
      description = 'Practical prompts and checklists for positioning, messaging and competitor alternatives. Use them to guide better marketing decisions.';
    } else if (path === '/about') {
      title = 'About Akshat Jain, Product Marketing';
      description = 'Learn about Akshat Jain’s route from SEO and growth to product marketing, and the principles behind his work.';
    } else if (path === '/contact') {
      title = 'Contact Akshat Jain';
      description = 'Start a conversation with Akshat Jain about product marketing, positioning, messaging or go-to-market.';
    } else if (path !== '/') {
      title = 'Page Not Found, Akshat Jain';
      description = 'The page could not be found. Return to Akshat Jain’s product marketing portfolio.';
    }

    document.title = title;

    const setMeta = (selector: string, attribute: string, value: string, createName?: string) => {
      let element = document.querySelector<HTMLMetaElement>(selector);
      if (!element && createName) {
        element = document.createElement('meta');
        element.setAttribute(attribute, createName);
        document.head.appendChild(element);
      }
      element?.setAttribute(attribute === 'name' || attribute === 'property' ? 'content' : attribute, value);
    };

    setMeta('meta[name="description"]', 'name', description, 'description');
    setMeta('meta[property="og:title"]', 'property', title, 'og:title');
    setMeta('meta[property="og:description"]', 'property', description, 'og:description');

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}${path}`;
  }, [location.pathname]);
}

export default function App() {
  useRouteMetadata();

  return (
    <div className="flex min-h-screen flex-col bg-brand-bg text-brand-text">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/work" element={<Projects />} />
          <Route path="/work/:id" element={<CaseStudy />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
