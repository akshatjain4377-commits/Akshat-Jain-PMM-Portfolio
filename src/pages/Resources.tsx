import { useState } from 'react';
import { ArrowDownToLine, Check, Copy, FileCheck2, GitCompareArrows, MessageSquareText } from 'lucide-react';

const resources = [
  {
    id: 'positioning',
    number: '01',
    category: 'STRATEGY',
    title: 'Positioning clarity check',
    purpose: 'Use before refreshing a homepage, running a messaging workshop or writing a new value proposition.',
    icon: FileCheck2,
    questions: [
      'Who is the specific customer and what situation are they in?',
      'What problem are they trying to solve, and why now?',
      'What would they use, choose or do instead, including doing nothing?',
      'What do we help them do meaningfully better than those alternatives?',
      'What evidence would make that difference believable?',
      'What are we deliberately not trying to be?',
    ],
  },
  {
    id: 'messaging',
    number: '02',
    category: 'MESSAGE',
    title: 'Messaging review',
    purpose: 'Use when a landing page sounds polished but is not clear, credible or motivating.',
    icon: MessageSquareText,
    questions: [
      'Can the intended audience recognise their situation in the first few lines?',
      'Is the promise about an outcome the customer values, not just a feature?',
      'Does the copy explain how the product delivers that outcome?',
      'Is there proof close to the claim: data, customer evidence, workflow or demonstration?',
      'Does the message address the biggest reason to hesitate?',
      'Is the next step obvious and proportionate to the reader’s intent?',
    ],
  },
  {
    id: 'alternatives',
    number: '03',
    category: 'COMPETITIVE',
    title: 'Alternatives map',
    purpose: 'Use before drafting a competitor page or deciding how to differentiate in a crowded category.',
    icon: GitCompareArrows,
    questions: [
      'What triggers a customer to look for a new solution?',
      'What do they compare us with: direct competitors, workarounds, internal tools or the status quo?',
      'What does each alternative do well from the customer’s point of view?',
      'Where does our product create a meaningful difference for a defined segment?',
      'Which claims can we prove, and which are currently assumptions?',
      'What would make a sensible customer choose an alternative over us?',
    ],
  },
];

export default function Resources() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copyError, setCopyError] = useState<string | null>(null);

  const copyTemplate = async (resource: typeof resources[number]) => {
    const text = [
      resource.title,
      '',
      resource.purpose,
      '',
      ...resource.questions.map((question, index) => `${index + 1}. ${question}`),
    ].join('\n');

    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(resource.id);
      setCopyError(null);
      window.setTimeout(() => setCopiedId((current) => current === resource.id ? null : current), 1800);
    } catch {
      setCopyError(resource.id);
      setCopiedId(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F2EB] text-[#1B2A26]">
      <section className="mx-auto max-w-6xl px-6 pb-14 pt-16 md:pb-20 md:pt-24">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#596861]">The working shelf · Resources</p>
        <div className="grid gap-8 border-b border-[#D5DCD3] pb-12 md:grid-cols-[1.1fr_0.9fr] md:items-end md:pb-16">
          <h1 className="font-display text-5xl leading-[0.98] tracking-[-0.06em] md:text-7xl">
            Tools for clearer<br /><span className="text-[#344F44]">marketing decisions.</span>
          </h1>
          <p className="max-w-lg text-base leading-7 text-[#596861] md:pb-1 md:text-lg">
            Small, practical starting points for the messy bit between knowing there’s a problem and deciding what to do about it. Copy a checklist and adapt it to your team.
          </p>
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-[#D5DCD3] bg-[#FBFAF6] p-5 md:mt-10 md:p-6">
          <span className="mt-0.5 rounded-full bg-[#FBFAF6] p-2 text-[#344F44]"><ArrowDownToLine className="h-4 w-4" aria-hidden="true" /></span>
          <div>
            <p className="text-sm font-semibold">Use these as prompts, not verdicts.</p>
            <p className="mt-1 text-sm leading-6 text-[#596861]">They’re working templates, not validated scoring systems. The questions should provoke useful discussion; they shouldn’t replace customer evidence or judgement.</p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {resources.map((resource) => {
            const Icon = resource.icon;
            return (
              <article key={resource.id} className="flex flex-col rounded-3xl border border-[#D5DCD3] bg-[#FBFAF6] p-6 md:p-8">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#344F44]">{resource.number} / {resource.category}</span>
                  <Icon className="h-5 w-5 text-[#344F44]" aria-hidden="true" />
                </div>
                <h2 className="mt-5 font-display text-2xl leading-tight tracking-[-0.035em] md:text-3xl">{resource.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[#596861]">{resource.purpose}</p>
                <ol className="mt-6 space-y-3 border-t border-[#D5DCD3] pt-5">
                  {resource.questions.map((question, index) => (
                    <li key={question} className="flex gap-3 text-sm leading-6">
                      <span className="mt-0.5 text-xs font-semibold tabular-nums text-[#829187]">{String(index + 1).padStart(2, '0')}</span>
                      <span>{question}</span>
                    </li>
                  ))}
                </ol>
                <div className="mt-auto pt-7">
                  <button
                    type="button"
                    onClick={() => void copyTemplate(resource)}
                    className="inline-flex items-center gap-2 rounded-full bg-[#1B2A26] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#263B32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#344F44]"
                  >
                    {copiedId === resource.id ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
                    {copiedId === resource.id ? 'Copied to clipboard' : 'Copy checklist'}
                  </button>
                  <p className="mt-2 min-h-5 text-xs text-[#718078]" aria-live="polite">
                    {copiedId === resource.id ? 'Ready to paste into your working doc.' : copyError === resource.id ? 'Clipboard access was blocked. You can still select and copy the questions above.' : 'Includes the title, context and all questions.'}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 border-t border-[#D5DCD3] pt-7 text-sm leading-6 text-[#596861]">
          Want the thinking behind the tools? <a href="https://www.linkedin.com/newsletters/the-second-draft-7357808364178870273" target="_blank" rel="noreferrer" className="font-semibold text-[#1B2A26] underline decoration-[#A9B8AA] underline-offset-4">Read The Second Draft <span aria-hidden="true">↗</span></a>.
        </div>
      </section>
    </div>
  );
}
