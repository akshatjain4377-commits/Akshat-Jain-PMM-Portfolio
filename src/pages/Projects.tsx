import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useState } from 'react';

// Maps each filter tag to the project card it should scroll to
const filterToProject = {
  "Positioning":          "acko",
  "GTM":                  "acko",
  "Unit Economics":       "acko",
  "Competitive Analysis": "acko",
  "Product Proposals":    "business-standard",
  "Customer Research":    "business-standard",
  "0→1 Build":            "peak-view",
  "Messaging":            "peak-view",
  "Authority Building":   "digital-pr",
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("Positioning");

  const filters = ["Positioning", "GTM", "Messaging", "0→1 Build", "Customer Research", "Unit Economics", "Competitive Analysis", "Authority Building", "Product Proposals"];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    const targetId = filterToProject[filter];
    if (!targetId) return;
    const el = document.getElementById(`project-${targetId}`);
    if (el) {
      // offset for sticky nav bar (~128px)
      const top = el.getBoundingClientRect().top + window.scrollY - 128;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const projects = [
    {
      id: "acko",
      title: "ACKO Insurance",
      subtitle: "Digital-First Insurance Disruptor",
      category: "INSURANCE · GTM STRATEGY",
      image: "https://raw.githubusercontent.com/akshatjain4377-commits/Akshat-Jain-PMM-Portfolio/main/acko-insurance.png",
      tags: ["Positioning", "GTM", "Unit Economics", "Competitive Analysis"],
      strategicDecision: "ACKO had scaled in motor insurance but hadn't earned the right to win in health. The question: how do you cross-sell into a high-trust, high-stakes category without blowing your CAC budget?",
      executionSummary: "Developed a trust-centric hybrid GTM framework using motor as the low-friction acquisition layer and health as the long-term LTV engine — mapping the full competitive landscape, market sizing, and messaging hierarchy.",
      outcome: "Hybrid GTM framework projecting 4.1x LTV/CAC improvement through ecosystem lock-in and Motor→Health cross-sell."
    },
    {
      id: "business-standard",
      title: "Business Standard",
      subtitle: "India's Leading Financial Daily",
      category: "FINANCIAL MEDIA · PRODUCT PROPOSALS",
      image: "https://raw.githubusercontent.com/akshatjain4377-commits/Akshat-Jain-PMM-Portfolio/main/business-standard.jpg",
      tags: ["Product Proposals", "GTM", "Customer Research", "Positioning"],
      strategicDecision: "High-intent financial audiences were arriving on IPO and Share Price pages — and immediately leaving. Pages were built for crawlers, not investors. No next step. No retention hook. No reason to come back.",
      executionSummary: "Independently authored two cross-functional product proposals (IPO Tracker revamp + Share Price page redesign), benchmarking competitor UX across Moneycontrol, Livemint, and Chittorgarh, then presenting phased implementation roadmaps to editorial and product stakeholders.",
      outcome: "Core market rankings lifted from 8.2 → 5.0 on priority terms. Both proposals currently in the product roadmap pipeline."
    },
    {
      id: "peak-view",
      title: "The Peak View Stories",
      subtitle: "Independent Satire News Platform",
      category: "MEDIA · 0→1 BRAND BUILD",
      image: "https://raw.githubusercontent.com/akshatjain4377-commits/Akshat-Jain-PMM-Portfolio/main/the-peak-view-stories.jpg",
      tags: ["0→1 Build", "Positioning", "Messaging", "Authority Building"],
      strategicDecision: "How do you build a media brand from absolute zero — no budget, no audience, no distribution — and still find product-market fit in a crowded niche?",
      executionSummary: "Defined the positioning and tone-of-voice from scratch. Built the full website using AI-assisted vibe coding. Owned all content production, AI-generated visuals, and Instagram distribution independently. Applied Digital PR playbook to build personal brand authority as Founder.",
      outcome: "1.5M+ organic reel views with zero paid spend. 7,600 website users via SEO alone. Featured in Under30CEO, TechBullion, and CMO Times as Founder."
    },
    {
      id: "digital-pr",
      title: "Digital PR Authority Engine",
      subtitle: "Thought Leadership & Earned Media",
      category: "MESSAGING · AUTHORITY BUILDING",
      image: "https://raw.githubusercontent.com/akshatjain4377-commits/Akshat-Jain-PMM-Portfolio/main/digital-pr.png",
      tags: ["Messaging", "Authority Building", "0→1 Build", "GTM"],
      strategicDecision: "Founders and CEOs have genuine expertise — but zero third-party credibility outside their own networks. How do you build earned authority at scale without a PR budget or existing brand recognition?",
      executionSummary: "Built repeatable messaging frameworks and systematic outreach pipelines using HARO, Qwoted, SourceBottle, and Terkel. Matched each founder's point-of-view to the right journalist queries, then packaged responses that earned publication consistently.",
      outcome: "Secured a Forbes placement for a client — the team's first major earned media win. Personally featured in Under30CEO, TechBullion, and CMO Times as Founder of The Peak View Stories."
    }
  ];

  return (
    <div className="min-h-screen bg-brand-bg">

      {/* ── HERO ── */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">

          {/* Image — fixed: use aspect ratio container + object-contain so nothing gets cropped */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative flex flex-1 items-center justify-center overflow-hidden rounded-3xl bg-brand-card group"
            style={{ minHeight: '320px' }}
          >
            <img
              src="https://raw.githubusercontent.com/akshatjain4377-commits/Akshat-Jain-PMM-Portfolio/main/work-section-hero.png"
              alt="Product Marketing Case Studies"
              className="h-full w-full object-contain transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-110 p-4"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-bg/20 via-transparent to-brand-bg/10"></div>
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-brand-border"></div>
          </motion.div>

          {/* Copy */}
          <div className="flex-1 space-y-8 lg:pl-12">
            <span className="rounded-full border border-brand-accent/30 bg-brand-accent/10 px-4 py-2 text-xs font-semibold tracking-widest text-brand-accent">
              SELECTED WORK
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl font-bold leading-[1.1] tracking-tight text-brand-text md:text-6xl"
            >
              STRATEGY IN ACTION
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-md text-xl text-brand-muted"
            >
              Real positioning problems. Real GTM decisions. Real outcomes —
              across insurance, financial media, and brands built from scratch.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#case-studies"
                className="rounded-full bg-brand-accent px-8 py-4 text-sm font-semibold text-brand-bg hover:bg-brand-accent-hover transition-colors"
              >
                View Case Studies
              </a>
              <Link
                to="/contact"
                className="rounded-full border border-brand-border bg-brand-card px-8 py-4 text-sm font-semibold text-brand-text hover:bg-brand-border transition-colors"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── EXPERTISE FILTERS ── */}
      <section className="border-t border-brand-border bg-brand-bg/90 py-8 sticky top-16 z-40 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-8 overflow-x-auto px-6 pb-4 md:pb-0 hide-scrollbar">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-muted shrink-0">EXPERTISE</span>
          <div className="flex items-center gap-3">
            {filters.map((filter, i) => (
              <button
                key={i}
                onClick={() => handleFilterClick(filter)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-medium transition-colors ${
                  activeFilter === filter
                    ? 'bg-brand-accent text-brand-bg'
                    : 'border border-brand-border bg-brand-card text-brand-text hover:border-brand-accent/50'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES GRID ── */}
      <section id="case-studies" className="bg-brand-bg py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects.map((project, i) => {
              const isHighlighted = filterToProject[activeFilter] === project.id;
              return (
              <Link
                key={i}
                id={`project-${project.id}`}
                to={`/work/${project.id}`}
                className={`group flex flex-col overflow-hidden rounded-3xl border bg-brand-card transition-all duration-300 scroll-mt-36 ${
                  isHighlighted
                    ? 'border-brand-accent shadow-[0_0_0_2px] shadow-brand-accent/40'
                    : 'border-brand-border hover:border-brand-accent/30'
                }`}
              >
                {/* Image */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-brand-bg">
                  <div className="absolute left-6 top-6 z-10 rounded-sm bg-brand-bg/80 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-accent backdrop-blur-sm">
                    {project.category}
                  </div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="mb-1 text-2xl font-bold text-brand-text">{project.title}</h3>
                  <p className="mb-8 text-sm italic text-brand-accent">{project.subtitle}</p>

                  {/* Tags */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="rounded-full border border-brand-border bg-brand-bg px-3 py-1 text-xs font-medium text-brand-muted">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mb-6 space-y-2">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-muted">THE PROBLEM</h4>
                    <p className="text-sm leading-relaxed text-brand-text/90">{project.strategicDecision}</p>
                  </div>

                  <div className="mb-8 space-y-2">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-muted">THE APPROACH</h4>
                    <p className="text-sm leading-relaxed text-brand-text/90">{project.executionSummary}</p>
                  </div>

                  <div className="mt-auto border-l-2 border-brand-accent bg-brand-bg/50 p-4">
                    <h4 className="mb-1 text-[10px] font-bold uppercase tracking-widest text-brand-accent">OUTCOME</h4>
                    <p className="text-sm font-medium text-brand-text">{project.outcome}</p>
                  </div>
                </div>
              </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA — rewritten for PMM job seeker, not freelancer ── */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-[40px] bg-brand-accent p-12 text-center md:p-24">
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-brand-bg md:text-5xl lg:text-6xl">
              Looking for a PMM who builds from zero?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg font-medium text-brand-bg/80 md:text-xl">
              I'm actively exploring Product Marketing roles in fintech, SaaS, and consumer tech —
              where I can own positioning, GTM strategy, and growth from the ground up.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="rounded-full bg-brand-bg px-8 py-4 text-sm font-bold text-brand-accent hover:bg-brand-bg/90 transition-colors"
              >
                Get in Touch
              </Link>
              <a
                href="https://www.linkedin.com/in/akshatjain1102/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-brand-bg px-8 py-4 text-sm font-bold text-brand-bg hover:bg-brand-bg/10 transition-colors"
              >
                View LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
