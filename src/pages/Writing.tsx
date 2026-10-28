import { ArrowRight, ArrowUpRight, BookOpen, Clock3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const essays = [
  {
    category: 'MESSAGING · LANDING PAGES',
    title: 'Before You Rewrite That Landing Page, Ask These Four Questions',
    summary: 'A practical pause before opening the copy doc: check the problem, audience, promise and evidence first.',
    meta: 'Published · LinkedIn newsletter',
    status: 'Published',
    published: true,
  },
  {
    category: 'POSITIONING',
    title: 'Is Your Brand Running Without a Positioning?',
    summary: 'A missing positioning statement does not mean customers have no perception of your brand. The risk is that teams may be telling different stories.',
    meta: 'In development',
    status: 'Drafting',
    published: false,
  },
  {
    category: 'COMPETITIVE STRATEGY',
    title: 'Is Your Positioning Actually Yours, or Did You Borrow It From Your Competitors?',
    summary: 'Competitor research is useful until it quietly turns into competitor imitation. How do you find a position customers can recognise as yours?',
    meta: 'In development',
    status: 'Idea in progress',
    published: false,
  },
];

export default function Writing() {
  return (
    <div className="min-h-screen bg-[#F4F2EB] text-[#1B2A26]">
      <section className="mx-auto max-w-6xl px-6 pb-14 pt-16 md:pb-20 md:pt-24">
        <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#65766D]">
          <BookOpen className="h-4 w-4" aria-hidden="true" />
          The Second Draft · Writing
        </p>
        <div className="grid gap-8 border-b border-[#D5DCD3] pb-12 md:grid-cols-[1.2fr_0.8fr] md:items-end md:pb-16">
          <h1 className="font-display text-5xl leading-[0.98] tracking-[-0.06em] md:text-7xl">
            Marketing ideas,<br /><span className="text-[#71877A]">reconsidered.</span>
          </h1>
          <p className="max-w-lg text-base leading-7 text-[#596861] md:pb-1 md:text-lg">
            The Second Draft is where I unpack the questions behind positioning, messaging, product marketing and growth. Not another list of best practices—just ideas worth thinking through properly.
          </p>
        </div>

        <div className="grid gap-10 py-12 md:grid-cols-[0.45fr_1fr] md:py-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#718078]">The editorial lens</p>
            <p className="mt-4 max-w-xs text-sm leading-6 text-[#596861]">Start with a problem. Question the obvious answer. Leave with something useful to try.</p>
            <Link to="/resources" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#263B32] hover:text-[#71877A]">
              Looking for tools? Browse resources <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="space-y-0">
            {essays.map((essay) => (
              <article key={essay.title} className="border-t border-[#D5DCD3] py-6 md:py-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#71877A]">{essay.category}</p>
                  <span className={`rounded-full border px-3 py-1 text-[11px] ${essay.published ? 'border-[#9FB6A4] bg-[#E4EAE1] text-[#344F44]' : 'border-[#D5DCD3] text-[#65766D]'}`}>{essay.status}</span>
                </div>
                <h2 className="mt-4 max-w-3xl font-display text-2xl leading-tight tracking-[-0.035em] md:text-3xl">{essay.title}</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-[#596861] md:text-base">{essay.summary}</p>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-4 text-xs text-[#718078]">
                  <span className="flex items-center gap-2"><Clock3 className="h-3.5 w-3.5" aria-hidden="true" />{essay.meta}</span>
                  {essay.published ? (
                    <a href="https://www.linkedin.com/newsletters/the-second-draft-7357808364178870273" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-semibold text-[#263B32] hover:text-[#71877A]">
                      Read edition <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ) : (
                    <span className="text-[#9AA59D]">Not published</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-[1.5rem] bg-[#E5E9E1] p-6 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#718078]">A note on this publication</p>
          <h2 className="mt-3 max-w-2xl font-display text-2xl leading-tight tracking-[-0.04em] md:text-3xl">The first draft is a thought. The second is the one worth sharing.</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#596861]">This redesign separates published pieces from ideas still in development. The long-term direction is to make the website the canonical home for each essay, then use shorter LinkedIn adaptations to bring readers back here.</p>
          <a href="https://www.linkedin.com/newsletters/the-second-draft-7357808364178870273" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#263B32] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#3A5548]">
            Follow The Second Draft on LinkedIn <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  );
}
