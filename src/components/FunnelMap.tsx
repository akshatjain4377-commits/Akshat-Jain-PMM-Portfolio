import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, BookOpen, BriefcaseBusiness, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const stages = [
  {
    id: 'discover',
    number: '01',
    label: 'Discover',
    summary: 'Ideas that challenge the default way of thinking.',
    destination: '/writing',
    destinationLabel: 'Explore writing',
    detail: 'Essays, positioning notes and practical resources from The Second Draft.',
    icon: BookOpen,
    width: '100%',
    tone: 'bg-[#E4E9E3] text-[#1B2A26]',
  },
  {
    id: 'evaluate',
    number: '02',
    label: 'Evaluate',
    summary: 'The reasoning behind the work.',
    destination: '/work',
    destinationLabel: 'Explore selected work',
    detail: 'Problems, customer insights, strategic choices and evidence across selected projects.',
    icon: BriefcaseBusiness,
    width: '82%',
    tone: 'bg-[#B7C6BD] text-[#1B2A26]',
  },
  {
    id: 'connect',
    number: '03',
    label: 'Connect',
    summary: 'The person and principles behind it.',
    destination: '/about',
    destinationLabel: 'About & experience',
    detail: 'My background, approach to product marketing and a direct route to get in touch.',
    icon: Compass,
    width: '64%',
    tone: 'bg-[#6F8980] text-white',
  },
];

export default function FunnelMap() {
  const [active, setActive] = useState('evaluate');
  const selected = stages.find((stage) => stage.id === active) ?? stages[1];

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

  const exploreStage = (stageId: string) => {
    setActive(stageId);
    const section = document.getElementById(stageId);
    if (!section) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    section.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  };

  return (
    <section aria-labelledby="funnel-heading" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
        <div className="max-w-xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#718078]">A map of my work</p>
          <h2 id="funnel-heading" className="font-display text-3xl leading-tight tracking-[-0.04em] text-[#1B2A26] md:text-5xl">
            From a useful idea to a clearer decision.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-[#596861] md:text-lg">
            Good product marketing connects what we notice in the market to the choices we make and the outcomes we can explain. Explore any stage; there is no required route.
          </p>
          <div className="mt-7 flex items-center gap-2 text-sm text-[#718078]">
            <span className="inline-block h-px w-8 bg-[#9EAAA2]" />
            Select a stage to explore
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#DCE2DC] bg-[#FBFAF6] p-4 md:p-7">
          <div className="space-y-2" role="group" aria-label="Explore the portfolio by stage">
            {stages.map((stage) => {
              const Icon = stage.icon;
              const isActive = active === stage.id;
              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => exploreStage(stage.id)}
                  aria-pressed={isActive}
                  className={`mx-auto flex min-h-[88px] items-center justify-between gap-4 rounded-xl px-4 py-4 text-left transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#344F44] md:px-6 ${stage.tone} ${isActive ? 'ring-2 ring-[#344F44] ring-offset-2 ring-offset-[#FBFAF6]' : 'opacity-80 hover:opacity-100'}`}
                  style={{ width: stage.width }}
                >
                  <span className="flex min-w-0 items-center gap-3 md:gap-4">
                    <span className="text-xs font-semibold tracking-widest opacity-70">{stage.number}</span>
                    <span className="min-w-0">
                      <span className="block font-display text-lg md:text-xl">{stage.label}</span>
                      <span className="mt-1 block text-xs leading-5 opacity-75 md:text-sm">{stage.summary}</span>
                    </span>
                  </span>
                  <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                </button>
              );
            })}
          </div>

          <div className="mt-5 rounded-2xl bg-white p-5 md:p-6" aria-live="polite">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#718078]">Stage {selected.number}</p>
                <h3 className="mt-2 font-display text-xl text-[#1B2A26]">{selected.label}</h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-[#596861]">{selected.detail}</p>
              </div>
              <span className="rounded-full bg-[#E9EEE8] p-2 text-[#344F44]">
                <ArrowDownRight className="h-5 w-5" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                to={selected.destination}
                className="inline-flex items-center gap-2 rounded-full bg-[#263B32] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#3A5548] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#344F44]"
              >
                {selected.destinationLabel}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              {selected.id === 'discover' && (
                <Link to="/resources" className="inline-flex items-center gap-2 rounded-full border border-[#DCE2DC] px-5 py-3 text-sm font-semibold text-[#263B32] transition hover:bg-[#F1F3EE]">
                  Browse resources
                </Link>
              )}
              {selected.id === 'connect' && (
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-[#DCE2DC] px-5 py-3 text-sm font-semibold text-[#263B32] transition hover:bg-[#F1F3EE]">
                  Contact me
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
