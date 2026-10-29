import { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import FunnelMap from '../components/FunnelMap';

const projects = [
  {
    id: 'business-standard',
    name: 'Business Standard',
    kind: 'PROFESSIONAL EXPERIENCE',
    discipline: 'Product proposals · Growth',
    image: 'https://raw.githubusercontent.com/akshatjain4377-commits/Akshat-Jain-PMM-Portfolio/main/business-standard.jpg',
    question: 'How could high-intent financial pages become more useful to investors?',
    signal: 'Priority search terms moved from an average position of 8.2 to 5.0.',
    className: 'md:col-span-7',
  },
  {
    id: 'acko',
    name: 'ACKO Insurance',
    kind: 'PMM CAPSTONE',
    discipline: 'Positioning · GTM strategy',
    image: 'https://raw.githubusercontent.com/akshatjain4377-commits/Akshat-Jain-PMM-Portfolio/main/acko-insurance.png',
    question: 'How might motor scale help ACKO earn trust in health insurance?',
    signal: 'A proposed retention-led cross-sell model. The economics are projections, not shipped results.',
    className: 'md:col-span-5',
  },
  {
    id: 'peak-view',
    name: 'The Peak View Stories',
    kind: 'INDEPENDENT BUILD',
    discipline: '0 to 1 brand · Distribution',
    image: 'https://raw.githubusercontent.com/akshatjain4377-commits/Akshat-Jain-PMM-Portfolio/main/the-peak-view-stories.jpg',
    question: 'Can a new media brand earn attention with no paid budget or existing audience?',
    signal: '1.5M+ organic reel views and 7,600 website users via SEO.',
    className: 'md:col-span-12',
  },
];

const funnelStages = [
  { id: 'discover', number: '01', label: 'Discover', descriptor: 'Ideas and perspective' },
  { id: 'evaluate', number: '02', label: 'Evaluate', descriptor: 'Work and evidence' },
  { id: 'connect', number: '03', label: 'Connect', descriptor: 'About and conversation' },
] as const;

function FunnelJourneyRail({ activeStage, onSelect }: { activeStage: string; onSelect: (id: string) => void }) {
  const activeIndex = funnelStages.findIndex((stage) => stage.id === activeStage);
  const nextStageId = activeIndex >= 2 ? 'discover' : funnelStages[activeIndex + 1].id;
  const nextAction = activeIndex >= 2 ? 'Climb back up' : 'Continue down';

  return (
    <aside className="journey-rail sticky top-28 hidden h-fit self-start pb-10 pt-12 xl:block" aria-label="Funnel journey progress">
      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#6B727C]">Your journey</p>
      <div className="relative mt-6 pl-1">
        <span className="absolute bottom-4 left-[13px] top-4 w-px bg-[#D4D7DB]" aria-hidden="true" />
        <span
          className="journey-rail-progress absolute left-[12px] top-4 w-[3px] rounded-full bg-[#D90429]"
          style={{ height: `${Math.max(0, activeIndex) * 50}%` }}
          aria-hidden="true"
        />
        <div className="relative space-y-6">
          {funnelStages.map((stage, index) => {
            const active = stage.id === activeStage;
            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => onSelect(stage.id)}
                aria-current={active ? 'step' : undefined}
                className="group flex w-full items-start gap-3 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D90429]"
              >
                <span className={`relative z-10 mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[8px] font-bold transition-colors ${active ? 'border-[#D90429] bg-[#D90429] text-white' : index < activeIndex ? 'border-[#B1B6BF] bg-[#F1D8DD] text-[#17191D]' : 'border-[#B8BDC5] bg-[#F3F3F1] text-[#6B727C]'}`}>
                  {stage.number}
                </span>
                <span className="min-w-0 pb-1">
                  <span className={`block text-xs font-semibold transition-colors ${active ? 'text-[#17191D]' : 'text-[#6B727C] group-hover:text-[#D90429]'}`}>{stage.label}</span>
                  <span className="mt-1 block max-w-[115px] text-[10px] leading-4 text-[#858B93]">{stage.descriptor}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
      <p className="mt-8 max-w-[135px] text-[10px] leading-4 text-[#858B93]">The path narrows as the questions become more specific.</p>
      <button
        type="button"
        onClick={() => onSelect(activeStage)}
        className="mt-5 inline-flex items-center gap-2 text-[10px] font-bold text-[#D90429] hover:text-[#D90429]"
      >
        Continue down <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
      </button>
    </aside>
  );
}

export default function Landing() {
  const [activeStage, setActiveStage] = useState('discover');

  useEffect(() => {
    const targets = funnelStages
      .map((stage) => document.getElementById(stage.id))
      .filter((element): element is HTMLElement => element instanceof HTMLElement);

    if (!('IntersectionObserver' in window) || targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveStage(visible.target.id);
      },
      { rootMargin: '-22% 0px -58% 0px', threshold: [0.05, 0.15, 0.35] },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  const jumpToStage = (id: string) => {
    setActiveStage(id);
    const section = document.getElementById(id);
    if (!section) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    section.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  };

  return (
    <div className="bg-brand-bg text-brand-text">
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-12 md:px-8 md:pb-16 md:pt-20">
        <div className="grid items-start gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-center lg:gap-12">
          <div>
            <p className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-accent">
              <span className="h-px w-8 bg-brand-accent" />
              Product marketing · Positioning · GTM
            </p>
            <h1 className="max-w-3xl font-display text-5xl leading-[0.99] tracking-[-0.055em] md:text-6xl lg:text-[5rem]">
              I work on whether products are <span className="italic text-[#D90429]">worth finding.</span>
            </h1>
            <p className="mt-6 max-w-2xl font-display text-xl leading-snug text-[#D90429] md:text-2xl">
              I spent years understanding how buyers find products. Now I write about the stories that make the difference.
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-brand-muted md:text-base">
              Today, I work in product marketing at Refrens. My background in SEO and building a media brand from zero shapes how I approach positioning, messaging and go-to-market.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button type="button" onClick={() => jumpToStage('discover')} className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D90429]">
                Enter the funnel <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </button>
              <Link to="/work" className="inline-flex items-center gap-2 rounded-full border border-brand-border px-6 py-3.5 text-sm font-semibold text-brand-text transition hover:border-brand-accent">
                Browse case studies <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <p className="mt-5 text-xs text-brand-muted">Ideas first. Evidence next. Conversation when it makes sense.</p>
          </div>

          <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none">
            <FunnelMap />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 border-y border-brand-border sm:grid-cols-3">
          <div className="flex items-baseline gap-3 border-b border-brand-border py-5 sm:border-b-0 sm:border-r sm:pr-6 md:py-7">
            <span className="font-display text-3xl tracking-tight md:text-4xl">1.5M+</span>
            <span className="max-w-[130px] text-xs leading-5 text-brand-muted">organic reel views on an independent brand</span>
          </div>
          <div className="flex items-baseline gap-3 border-b border-brand-border py-5 sm:border-b-0 sm:border-r sm:px-6 md:py-7">
            <span className="font-display text-3xl tracking-tight md:text-4xl">8.2 → 5.0</span>
            <span className="max-w-[140px] text-xs leading-5 text-brand-muted">average ranking on priority search terms</span>
          </div>
          <div className="flex items-baseline gap-3 py-5 sm:pl-6 md:py-7">
            <span className="font-display text-3xl tracking-tight md:text-4xl">2</span>
            <span className="max-w-[160px] text-xs leading-5 text-brand-muted">cross-functional product proposals authored</span>
          </div>
        </div>
      </section>

      <div className="funnel-journey relative isolate overflow-hidden bg-[#EBEDEF]">
        <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1000 2400" preserveAspectRatio="none" aria-hidden="true">
          <path d="M 25 0 L 975 0 L 760 2400 L 240 2400 Z" fill="#E5EAE2" fillOpacity="0.42" />
          <path d="M 25 0 L 240 2400" fill="none" stroke="#B7C6BB" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          <path d="M 975 0 L 760 2400" fill="none" stroke="#B7C6BB" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          <path d="M 70 0 L 285 2400" fill="none" stroke="#CBD6CA" strokeWidth="1" strokeDasharray="4 12" vectorEffect="non-scaling-stroke" />
          <path d="M 930 0 L 715 2400" fill="none" stroke="#CBD6CA" strokeWidth="1" strokeDasharray="4 12" vectorEffect="non-scaling-stroke" />
        </svg>

        <div className="relative mx-auto max-w-[1440px] px-3 md:px-6 xl:px-10">
          <div className="grid xl:grid-cols-[150px_minmax(0,1fr)] xl:gap-8">
            <FunnelJourneyRail activeStage={activeStage} onSelect={jumpToStage} />

            <div className="min-w-0">
              <section id="discover" className="scroll-mt-24 py-10 md:py-14">
                <div className={`journey-panel journey-panel--discover mx-auto w-full max-w-[1180px] rounded-[2rem] border bg-[#FFFFFF]/95 p-5 md:p-8 lg:p-10 ${activeStage === 'discover' ? 'journey-panel--active' : ''}`}>
                  <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F8EDEF] font-display text-base text-[#D90429]">01</span>
                        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#6B727C]">Discover · Top of funnel</p>
                      </div>
                      <h2 className="mt-6 max-w-md font-display text-4xl leading-[1.02] tracking-[-0.045em] md:text-5xl">Start with the question, not the answer.</h2>
                      <p className="mt-5 max-w-md text-sm leading-7 text-brand-muted md:text-base">
                        Articles and newsletter essays help a reader recognise a problem, learn a useful idea and discover how I think about marketing.
                      </p>
                      <Link to="/writing" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-accent transition hover:text-brand-accent-hover">
                        Explore The Second Draft <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>

                    <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
                      <article className="flex flex-col rounded-2xl border border-brand-border bg-white p-5 md:p-6">
                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-muted">
                          <BookOpen className="h-4 w-4" aria-hidden="true" /> The Second Draft
                        </div>
                        <p className="mt-7 text-[9px] font-bold uppercase tracking-[0.2em] text-[#D90429]">Featured newsletter edition</p>
                        <h3 className="mt-3 font-display text-2xl leading-tight tracking-[-0.035em] md:text-3xl">Before You Rewrite That Landing Page, Ask These Four Questions</h3>
                        <p className="mt-4 text-sm leading-6 text-brand-muted">A practical pause before opening the copy document. Check the problem, audience, promise and evidence first.</p>
                        <a href="https://www.linkedin.com/newsletters/the-second-draft-7357808364178870273" target="_blank" rel="noreferrer" className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-brand-accent">
                          Read on LinkedIn <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        </a>
                      </article>

                      <article className="flex flex-col rounded-2xl bg-[#F0F1F3] p-5 text-[#17191D] md:p-6">
                        <Lightbulb className="h-5 w-5" aria-hidden="true" />
                        <p className="mt-7 text-[9px] font-bold uppercase tracking-[0.2em] text-[#626973]">Take something useful</p>
                        <h3 className="mt-3 font-display text-2xl leading-tight tracking-[-0.035em]">A better question changes the work.</h3>
                        <p className="mt-4 text-sm leading-6 text-[#626973]">Copyable checklists and prompts for the messy bit between noticing a problem and deciding what to do.</p>
                        <Link to="/resources" className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-[#17191D]">
                          Browse resources <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      </article>
                    </div>
                  </div>
                </div>
              </section>

              <section id="evaluate" className="scroll-mt-24 py-6 md:py-10">
                <div className={`journey-panel journey-panel--evaluate mx-auto w-full md:w-[94%] max-w-[1070px] rounded-[2rem] border border-[#D4D7DB] bg-[#E7E9EC]/95 p-5 md:p-8 lg:p-10 ${activeStage === 'evaluate' ? 'journey-panel--active' : ''}`}>
                  <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div className="max-w-2xl">
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F1D8DD] font-display text-base text-[#17191D]">02</span>
                        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#626973]">Evaluate · Middle of funnel</p>
                      </div>
                      <h2 className="mt-6 font-display text-4xl leading-[1.02] tracking-[-0.045em] md:text-5xl">See the thinking behind the work.</h2>
                      <p className="mt-5 max-w-xl text-sm leading-7 text-[#626973] md:text-base">
                        Case studies move from a problem to the insight, strategic choice, execution and evidence. Professional work, capstone thinking and independent projects are clearly labelled.
                      </p>
                    </div>
                    <Link to="/work" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#D90429] transition hover:text-[#D90429]">
                      All case studies <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>

                  <div className="mt-8 grid gap-4 md:grid-cols-12">
                    {projects.map((project) => (
                      <Link key={project.id} to={`/work/${project.id}`} className={`group flex flex-col overflow-hidden rounded-2xl border border-[#D4D7DB] bg-[#FFFFFF] transition duration-200 hover:-translate-y-1 hover:border-[#D90429] ${project.className}`}>
                        <div className="relative overflow-hidden bg-[#F0F1F3]">
                          <img src={project.image} alt={project.name} loading="lazy" className="aspect-[16/7] w-full object-cover transition duration-500 group-hover:scale-[1.025]" />
                          <span className="absolute left-3 top-3 rounded-full bg-[#F3F3F1]/95 px-3 py-1.5 text-[9px] font-bold tracking-[0.13em] text-[#D90429]">{project.kind}</span>
                        </div>
                        <div className="flex flex-1 flex-col p-5 md:p-6">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#D90429]">{project.discipline}</p>
                          <h3 className="mt-3 font-display text-2xl leading-tight tracking-[-0.035em] md:text-3xl">{project.name}</h3>
                          <p className="mt-3 text-sm leading-6 text-[#626973]">{project.question}</p>
                          <p className="mt-4 border-l-2 border-[#D90429] pl-3 text-xs leading-5 text-[#D90429]">{project.signal}</p>
                          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#D90429]">Read the case study <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" /></span>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <p className="mt-5 text-[10px] leading-5 text-[#626973]">ACKO is a capstone strategy exercise, and its unit-economics figures are projections. Business Standard ranking results are observed; product proposals are described as authored work, not shipped features.</p>
                </div>
              </section>

              <section id="connect" className="scroll-mt-24 py-6 pb-16 md:py-10 md:pb-24">
                <div className={`journey-panel journey-panel--connect mx-auto w-full md:w-[86%] max-w-[930px] rounded-[2rem] border border-[#17191D] bg-[#17191D] p-5 text-white md:p-8 lg:p-10 ${activeStage === 'connect' ? 'journey-panel--active' : ''}`}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F1D8DD] font-display text-base text-[#17191D]">03</span>
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/65">Connect · Bottom of funnel</p>
                  </div>
                  <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.18em] text-[#F1D8DD]">The person behind the perspective</p>
                  <h2 className="mt-3 max-w-2xl font-display text-3xl leading-[1.04] tracking-[-0.04em] md:text-4xl">A career built around one question: why do people choose?</h2>
                  <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 md:text-base">
                    My route into product marketing crossed audience research, search, earned media and building a media brand from zero. Today, I bring that perspective to positioning, messaging and go-to-market, and keep writing about the decisions behind the discipline.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link to="/about" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                      More about me <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                    <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#F3F3F1] px-5 py-3 text-sm font-semibold text-[#17191D] transition hover:bg-white">
                      Start a conversation <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
