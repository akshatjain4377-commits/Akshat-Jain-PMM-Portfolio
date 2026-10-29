import { useState } from 'react';
import { ArrowRight, ArrowUpRight, BriefcaseBusiness, Compass, Layers3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const filters = ['All work', 'Positioning', 'GTM strategy', 'Product proposals', '0→1 building', 'Earned media'] as const;
type Filter = typeof filters[number];

const projects = [
  {
    id: 'business-standard',
    title: 'Business Standard',
    subtitle: 'Turning financial pages into decision-support products.',
    type: 'Professional experience',
    discipline: ['Product proposals', 'GTM strategy', 'Positioning'],
    image: 'https://raw.githubusercontent.com/akshatjain4377-commits/Akshat-Jain-PMM-Portfolio/main/business-standard.jpg',
    question: 'How could high-intent financial pages become more useful to investors, not just search destinations?',
    contribution: 'Independently authored two cross-functional proposals for IPO Tracker and Share Price/Company pages, including competitor benchmarking and phased roadmaps.',
    evidence: 'Average position improved from 8.2 to 5.0 on priority search terms.',
    icon: BriefcaseBusiness,
  },
  {
    id: 'acko',
    title: 'ACKO Insurance',
    subtitle: 'A retention-led route from motor insurance to health.',
    type: 'PMM capstone · Strategy exercise',
    discipline: ['Positioning', 'GTM strategy'],
    image: 'https://raw.githubusercontent.com/akshatjain4377-commits/Akshat-Jain-PMM-Portfolio/main/acko-insurance.png',
    question: 'How might ACKO use existing motor relationships to build trust and improve the economics of health insurance?',
    contribution: 'Developed a trust-centric positioning and hybrid GTM framework, using lifecycle triggers and cross-sell to connect the two categories.',
    evidence: '4.1× LTV/CAC improvement was a modelled projection in the capstone, not a shipped or measured result.',
    icon: Layers3,
  },
  {
    id: 'peak-view',
    title: 'The Peak View Stories',
    subtitle: 'Building a media brand from zero.',
    type: 'Independent build',
    discipline: ['0→1 building', 'Positioning', 'GTM strategy'],
    image: 'https://raw.githubusercontent.com/akshatjain4377-commits/Akshat-Jain-PMM-Portfolio/main/the-peak-view-stories.jpg',
    question: 'Can a new media brand earn attention with no paid budget or existing audience?',
    contribution: 'Defined the positioning and voice, built the platform, produced content and owned Instagram distribution and SEO.',
    evidence: '1.5M+ organic reel views and 7,600 website users through SEO.',
    icon: Compass,
  },
  {
    id: 'digital-pr',
    title: 'Digital PR Authority Engine',
    subtitle: 'Turning expertise into credible third-party visibility.',
    type: 'Team work · RankSoldier Digital',
    discipline: ['Earned media', 'Messaging', 'GTM strategy'],
    image: 'https://raw.githubusercontent.com/akshatjain4377-commits/Akshat-Jain-PMM-Portfolio/main/digital-pr.png',
    question: 'How do you turn founder expertise into media-ready insight that journalists can use?',
    contribution: 'Built repeatable query-monitoring, expert-matching and messaging workflows across earned-media platforms.',
    evidence: 'The team secured a client placement in Forbes; I also used the playbook for my own earned-media features.',
    icon: Layers3,
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All work');
  const visibleProjects = projects.filter((project) => activeFilter === 'All work' || project.discipline.includes(activeFilter as string));

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-16 md:px-8 md:pb-16 md:pt-24">
        <div className="grid gap-8 border-b border-brand-border pb-12 md:grid-cols-[1.1fr_0.9fr] md:items-end md:pb-16">
          <div>
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-accent">02 · Evaluate</p>
            <h1 className="max-w-3xl font-display text-5xl leading-[0.98] tracking-[-0.055em] md:text-7xl">
              Strategy is the work<br /><span className="italic text-[#71877A]">behind the work.</span>
            </h1>
          </div>
          <div className="max-w-lg">
            <p className="text-base leading-7 text-brand-muted md:text-lg">
              A selection of problems I’ve worked on, the choices behind the approach, and the evidence we can point to. Each project is labelled by context so professional work, team work and capstone thinking don’t get blurred together.
            </p>
            <p className="mt-4 text-xs leading-5 text-brand-muted">Select a discipline to narrow the view. Every card opens the full case study.</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 py-7" role="group" aria-label="Filter case studies">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`rounded-full border px-4 py-2.5 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent ${activeFilter === filter ? 'border-brand-accent bg-brand-accent text-white' : 'border-brand-border bg-brand-card text-brand-muted hover:border-brand-accent/60 hover:text-brand-text'}`}
            >
              {filter}
            </button>
          ))}
          <span className="ml-auto self-center text-xs tabular-nums text-brand-muted">{visibleProjects.length} {visibleProjects.length === 1 ? 'case study' : 'case studies'}</span>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {visibleProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Link
                key={project.id}
                to={`/work/${project.id}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-brand-border bg-brand-card transition duration-200 hover:-translate-y-1 hover:border-brand-accent/60"
              >
                <div className="relative overflow-hidden bg-[#E5E9E1]">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="aspect-[16/8] w-full object-cover transition duration-500 group-hover:scale-[1.025]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-[#F4F2EB]/95 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-[#344F44]">{project.type}</span>
                  <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#F4F2EB]/95 text-[#344F44]">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <div className="flex flex-wrap gap-2">
                    {project.discipline.map((tag) => (
                      <span key={tag} className="rounded-full border border-brand-border px-2.5 py-1 text-[10px] font-medium text-brand-muted">{tag}</span>
                    ))}
                  </div>
                  <h2 className="mt-5 font-display text-2xl leading-tight tracking-[-0.035em] md:text-3xl">{project.title}</h2>
                  <p className="mt-2 text-sm text-[#71877A]">{project.subtitle}</p>
                  <div className="mt-6 space-y-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-brand-muted">The question</p>
                      <p className="mt-1.5 text-sm leading-6 text-brand-text">{project.question}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-brand-muted">My contribution</p>
                      <p className="mt-1.5 text-sm leading-6 text-brand-muted">{project.contribution}</p>
                    </div>
                  </div>
                  <div className="mt-6 border-l-2 border-brand-accent bg-[#EEF0E9] p-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#71877A]">Evidence / outcome</p>
                    <p className="mt-1.5 text-sm leading-6 text-[#344F44]">{project.evidence}</p>
                  </div>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-accent">
                    Open case study <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="border-t border-brand-border bg-[#EDEFE8]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-8 md:py-16">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#718078]">The next step</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl leading-tight tracking-[-0.04em] text-[#1B2A26] md:text-4xl">Want to discuss the thinking behind a case?</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[#596861]">I’m happy to talk through a decision, trade-off or question that the case study couldn’t fit on the page.</p>
          </div>
          <Link to="/contact" className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-[#263B32] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#3A5548] md:self-auto">
            Start a conversation <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
