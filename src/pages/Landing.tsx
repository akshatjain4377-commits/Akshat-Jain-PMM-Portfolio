import { ArrowRight, ArrowUpRight, BookOpen, BriefcaseBusiness, Lightbulb } from 'lucide-react';
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
    signal: 'A proposed retention-led cross-sell model; projected economics, not shipped results.',
    className: 'md:col-span-5',
  },
  {
    id: 'peak-view',
    name: 'The Peak View Stories',
    kind: 'INDEPENDENT BUILD',
    discipline: '0→1 brand · Distribution',
    image: 'https://raw.githubusercontent.com/akshatjain4377-commits/Akshat-Jain-PMM-Portfolio/main/the-peak-view-stories.jpg',
    question: 'Can a new media brand earn attention with no paid budget or existing audience?',
    signal: '1.5M+ organic reel views and 7,600 website users via SEO.',
    className: 'md:col-span-12',
  },
];

export default function Landing() {
  return (
    <div className="bg-brand-bg text-brand-text">
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-12 md:px-8 md:pb-20 md:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <p className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-accent">
              <span className="h-px w-8 bg-brand-accent" />
              Product marketing · Positioning · GTM
            </p>
            <h1 className="max-w-3xl font-display text-5xl leading-[0.99] tracking-[-0.055em] md:text-6xl lg:text-[5.4rem]">
              I connect what customers need to what products need to <span className="italic text-[#71877A]">say.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-brand-muted md:text-lg md:leading-8">
              I’m a product marketer at Refrens, working across the customer funnel for service businesses and traders. A background in SEO, audience insight and building a media brand from zero shapes how I approach positioning, messaging and go-to-market: start with what people actually do, then build the story and system around it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/work" className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-accent-hover">
                Explore selected work <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link to="/writing" className="inline-flex items-center gap-2 rounded-full border border-brand-border px-6 py-3.5 text-sm font-semibold text-brand-text transition hover:border-brand-accent">
                Read The Second Draft <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <p className="mt-5 text-xs text-brand-muted">The work, the thinking behind it, and the person doing the thinking.</p>
          </div>

          <div className="relative mx-auto w-full max-w-[430px] lg:max-w-none">
            <div className="absolute -right-3 -top-3 h-28 w-28 rounded-full border border-[#B9C7BB] md:-right-5 md:-top-5 md:h-36 md:w-36" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[45%_45%_1.25rem_1.25rem] border border-brand-border bg-[#E5E9E1]">
              <img
                src="https://raw.githubusercontent.com/akshatjain4377-commits/Akshat-Jain-PMM-Portfolio/main/akshat-jain-about-me.jpeg"
                alt="Akshat Jain"
                className="aspect-[4/5] w-full object-cover object-center"
                fetchPriority="high"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#17251F]/90 via-[#17251F]/30 to-transparent p-6 pt-20 text-white md:p-8 md:pt-24">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">The connecting thread</p>
                <p className="mt-2 max-w-xs font-display text-2xl leading-tight md:text-3xl">Find the insight. Make the choice. Tell the story.</p>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-4 rounded-2xl border border-brand-border bg-brand-card px-4 py-3 shadow-sm md:-left-8 md:px-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-muted">Career arc</p>
              <p className="mt-1 font-display text-lg">SEO → Growth → PMM</p>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 border-y border-brand-border sm:grid-cols-3">
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

      <div className="border-y border-brand-border bg-[#EDEFE8]">
        <FunnelMap />
      </div>

      <section id="discover" className="scroll-mt-24 border-b border-brand-border">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-8 md:py-24 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-accent">01 · Discover</p>
            <h2 className="mt-4 max-w-md font-display text-4xl leading-tight tracking-[-0.045em] md:text-5xl">The questions worth asking before the answers.</h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-brand-muted md:text-base">
              Writing is where I test ideas in public: positioning, messaging, growth, and the judgement calls behind the frameworks.
            </p>
            <Link to="/writing" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-accent transition hover:text-brand-accent-hover">
              Visit The Second Draft <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-[1.15fr_0.85fr]">
            <article className="flex flex-col rounded-3xl border border-brand-border bg-brand-card p-6 md:p-8">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-muted">
                <BookOpen className="h-4 w-4" aria-hidden="true" /> The Second Draft
              </div>
              <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.2em] text-[#71877A]">Featured from the newsletter</p>
              <h3 className="mt-3 font-display text-2xl leading-tight tracking-[-0.035em] md:text-3xl">Before You Rewrite That Landing Page, Ask These Four Questions</h3>
              <p className="mt-4 text-sm leading-6 text-brand-muted">A practical pause before opening the copy doc: check the problem, audience, promise and evidence first.</p>
              <a href="https://www.linkedin.com/newsletters/the-second-draft-7357808364178870273" target="_blank" rel="noreferrer" className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-brand-accent">
                Read on LinkedIn <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </article>

            <article className="flex flex-col rounded-3xl bg-[#DDE5DC] p-6 text-[#1B2A26] md:p-8">
              <Lightbulb className="h-5 w-5" aria-hidden="true" />
              <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.2em] text-[#596861]">For your next working session</p>
              <h3 className="mt-3 font-display text-2xl leading-tight tracking-[-0.035em]">Useful beats clever.</h3>
              <p className="mt-4 text-sm leading-6 text-[#596861]">Checklists and prompts designed to help turn a marketing question into a better decision.</p>
              <Link to="/resources" className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-[#263B32]">
                Browse resources <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section id="evaluate" className="scroll-mt-24 border-b border-brand-border">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-accent">02 · Evaluate</p>
              <h2 className="mt-4 font-display text-4xl leading-tight tracking-[-0.045em] md:text-5xl">Show the thinking, not just the deliverable.</h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-brand-muted md:text-base">A small selection of problems, insights and strategic decisions. Professional work, capstone work and independent experiments are labelled separately.</p>
            </div>
            <Link to="/work" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-brand-accent transition hover:text-brand-accent-hover">
              All case studies <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-12">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/work/${project.id}`}
                className={`group flex flex-col overflow-hidden rounded-3xl border border-brand-border bg-brand-card transition duration-200 hover:-translate-y-1 hover:border-brand-accent/60 ${project.className}`}
              >
                <div className="relative overflow-hidden bg-[#E5E9E1]">
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    className="aspect-[16/8] w-full object-cover transition duration-500 group-hover:scale-[1.025] md:aspect-[16/7]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-[#F4F2EB]/95 px-3 py-1.5 text-[9px] font-bold tracking-[0.14em] text-[#344F44]">
                    {project.kind}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#71877A]">{project.discipline}</p>
                  <h3 className="mt-3 font-display text-2xl leading-tight tracking-[-0.035em] md:text-3xl">{project.name}</h3>
                  <p className="mt-4 max-w-xl text-sm leading-6 text-brand-muted">{project.question}</p>
                  <p className="mt-5 border-l-2 border-brand-accent pl-4 text-sm leading-6 text-brand-text">{project.signal}</p>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-accent">
                    Read the case study <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-5 max-w-3xl text-xs leading-5 text-brand-muted">Note: ACKO is a capstone strategy exercise; its unit-economics figures are projections. Business Standard ranking results are observed, while proposals are described as authored work rather than shipped features.</p>
        </div>
      </section>

      <section id="connect" className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
          <div className="grid gap-10 overflow-hidden rounded-[2rem] bg-[#E2E8E0] p-6 md:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:p-14">
            <div className="flex min-h-[260px] flex-col justify-between rounded-3xl bg-[#344F44] p-6 text-white md:p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/70">03 · Connect</p>
              <div>
                <p className="font-display text-3xl leading-tight md:text-4xl">From SEO to product marketing.</p>
                <p className="mt-3 max-w-sm text-sm leading-6 text-white/75">One recurring question: what makes the right person stop, understand and choose?</p>
              </div>
            </div>
            <div className="flex flex-col justify-center py-2 md:py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#718078]">A little about me</p>
              <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight tracking-[-0.04em] text-[#1B2A26] md:text-4xl">I’m interested in the gap between what a product does and what a customer believes it can do.</h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#596861] md:text-base">
                My route into PMM crossed audience research, search, earned media and building a brand from zero. Today, I bring that perspective to positioning, messaging and go-to-market work—while continuing to write about the decisions behind the discipline.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/about" className="inline-flex items-center gap-2 rounded-full border border-[#CAD5C9] px-5 py-3 text-sm font-semibold text-[#263B32] transition hover:bg-white/60">
                  More about me <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#263B32] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#3A5548]">
                  Start a conversation <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
