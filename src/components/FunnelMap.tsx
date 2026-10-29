import { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, BriefcaseBusiness, Compass, Layers3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const stages = [
  {
    id: 'discover',
    number: '01',
    label: 'Discover',
    summary: 'Find the question worth answering.',
    eyebrow: 'IDEAS · WRITING · RESOURCES',
    featureLabel: 'FROM THE SECOND DRAFT',
    featureTitle: 'Before you rewrite that landing page, ask these four questions.',
    featureBody: 'Start with the customer, the problem and the proof, not the headline.',
    signal: 'A point of view you can put to work.',
    destination: '/writing',
    destinationLabel: 'Explore the writing',
    secondaryDestination: '/resources',
    secondaryLabel: 'Use a checklist',
    width: '100%',
    surface: 'var(--funnel-discover-bg)',
    foreground: 'var(--color-brand-text)',
    icon: BookOpen,
    sectionLabel: 'Jump to Discover',
  },
  {
    id: 'evaluate',
    number: '02',
    label: 'Evaluate',
    summary: 'See how the thinking translates into work.',
    eyebrow: 'CASE STUDIES · DECISIONS · EVIDENCE',
    featureLabel: 'PROFESSIONAL EXPERIENCE · BUSINESS STANDARD',
    featureTitle: 'From a page that ranks to a product that helps people decide.',
    featureBody: 'Two cross-functional proposals rethought how investors could navigate IPO and company research.',
    signal: 'Priority search terms: average position 8.2 → 5.0.',
    destination: '/work',
    destinationLabel: 'Explore selected work',
    secondaryDestination: '/work/business-standard',
    secondaryLabel: 'Open a case study',
    width: '84%',
    surface: 'var(--funnel-evaluate-bg)',
    foreground: '#1B2A26',
    icon: BriefcaseBusiness,
    sectionLabel: 'Jump to Evaluate',
  },
  {
    id: 'connect',
    number: '03',
    label: 'Connect',
    summary: 'Meet the person behind the perspective.',
    eyebrow: 'BACKGROUND · APPROACH · CONVERSATION',
    featureLabel: 'THE THROUGH-LINE',
    featureTitle: 'SEO → Growth → Product Marketing.',
    featureBody: 'A career shaped by audience intent, positioning, distribution and turning insights into clearer decisions.',
    signal: 'Different disciplines. One customer-first lens.',
    destination: '/about',
    destinationLabel: 'Get to know me',
    secondaryDestination: '/contact',
    secondaryLabel: 'Start a conversation',
    width: '68%',
    surface: 'var(--funnel-connect-bg)',
    foreground: '#FBFAF6',
    icon: Compass,
    sectionLabel: 'Jump to Connect',
  },
] as const;

export default function FunnelMap() {
  const [active, setActive] = useState('evaluate');
  const selected = stages.find((stage) => stage.id === active) ?? stages[1];
  const Icon = selected.icon;

  useEffect(() => {
    const targets = stages
      .map((stage) => document.getElementById(stage.id))
      .filter((element): element is HTMLElement => element instanceof HTMLElement);

    if (!('IntersectionObserver' in window) || targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-22% 0px -58% 0px', threshold: [0, 0.15, 0.4] },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  const jumpToStage = () => {
    const section = document.getElementById(selected.id);
    if (!section) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    section.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  };

  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-[2rem] border border-[#D5DCD3] bg-[#FBFAF6] shadow-[0_22px_70px_rgba(27,42,38,0.08)]">
        <div className="flex items-center justify-between gap-3 border-b border-[#D5DCD3] px-5 py-4 md:px-6">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#718078]">An interactive portfolio</p>
            <p className="mt-1 font-display text-lg text-[#1B2A26]">Where would you like to start?</p>
          </div>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D5DCD3] text-[#344F44]" aria-hidden="true">
            <Layers3 className="h-4 w-4" />
          </span>
        </div>

        <div className="px-3 py-5 md:px-5 md:py-6">
          <div className="space-y-2" role="group" aria-label="Choose a portfolio funnel stage">
            {stages.map((stage) => {
              const StageIcon = stage.icon;
              const isActive = active === stage.id;
              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setActive(stage.id)}
                  aria-pressed={isActive}
                  className={`funnel-stage mx-auto flex min-h-[76px] items-center justify-between gap-3 rounded-xl px-4 py-3 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#344F44] md:min-h-[84px] md:px-5 ${isActive ? 'is-active' : 'opacity-80 hover:opacity-100'}`}
                  style={{ width: stage.width, backgroundColor: stage.surface, color: stage.foreground }}
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="text-[10px] font-bold tracking-[0.16em] opacity-65 md:text-xs">{stage.number}</span>
                    <span className="min-w-0">
                      <span className="block font-display text-lg leading-tight md:text-xl">{stage.label}</span>
                      <span className="mt-1 block text-[10px] leading-4 opacity-75 md:text-xs">{stage.summary}</span>
                    </span>
                  </span>
                  <StageIcon className="h-4 w-4 shrink-0 md:h-5 md:w-5" aria-hidden="true" />
                </button>
              );
            })}
          </div>

          <div className="mx-auto mt-3 flex w-[68%] items-center justify-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#829187]" aria-hidden="true">
            <span className="h-px flex-1 bg-[#D5DCD3]" />
            Your next step
            <span className="h-px flex-1 bg-[#D5DCD3]" />
          </div>

          <div key={selected.id} className="funnel-detail mt-5 rounded-2xl bg-white p-5 md:p-6" aria-live="polite">
            <div className="flex items-center justify-between gap-3">
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#718078] md:text-[10px]">{selected.eyebrow}</p>
              <Icon className="h-4 w-4 shrink-0 text-[#344F44]" aria-hidden="true" />
            </div>
            <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.18em] text-[#344F44]">{selected.featureLabel}</p>
            <h3 className="mt-2 font-display text-2xl leading-[1.08] tracking-[-0.035em] text-[#1B2A26] md:text-3xl">
              {selected.featureTitle}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#596861]">{selected.featureBody}</p>
            <div className="mt-4 border-l-2 border-[#344F44] bg-[#FBFAF6] px-4 py-3 text-xs font-medium leading-5 text-[#344F44]">
              {selected.signal}
            </div>
            {selected.id === 'connect' && (
              <div className="mt-4 flex items-center gap-3 rounded-xl border border-[#D5DCD3] p-3">
                <img
                  src="https://raw.githubusercontent.com/akshatjain4377-commits/Akshat-Jain-PMM-Portfolio/main/akshat-jain-about-me.jpeg"
                  alt="Akshat Jain"
                  loading="lazy"
                  className="h-12 w-12 rounded-full border border-[#D5DCD3] object-cover"
                />
                <div>
                  <p className="font-display text-base text-[#1B2A26]">Akshat Jain</p>
                  <p className="mt-0.5 text-xs text-[#718078]">Product marketing · Refrens</p>
                </div>
              </div>
            )}
            <div className="mt-5 flex flex-wrap gap-2">
              <Link to={selected.destination} className="inline-flex items-center gap-2 rounded-full bg-[#1B2A26] px-4 py-3 text-xs font-semibold text-white transition hover:bg-[#263B32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#344F44]">
                {selected.destinationLabel} <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
              <Link to={selected.secondaryDestination} className="inline-flex items-center gap-2 rounded-full border border-[#D5DCD3] px-4 py-3 text-xs font-semibold text-[#1B2A26] transition hover:bg-[#F8F8F9]">
                {selected.secondaryLabel} <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-[#D5DCD3] bg-[#F4F2EB] px-5 py-4 md:px-6">
          <p className="max-w-[70%] text-[10px] leading-4 text-[#718078]">Choose a stage to change what you see. Scrolling the page updates the stage automatically.</p>
          <button type="button" onClick={jumpToStage} className="inline-flex shrink-0 items-center gap-1.5 text-[10px] font-bold text-[#344F44] transition hover:text-[#344F44]">
            {selected.sectionLabel} <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
