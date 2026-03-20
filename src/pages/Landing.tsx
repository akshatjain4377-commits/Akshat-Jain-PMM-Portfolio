import { Link } from 'react-router-dom';

import { motion } from 'motion/react';

import { ArrowRight, RefreshCw, Target, TrendingUp, Search } from 'lucide-react';

export default function Landing() {

  return (

    <div className="min-h-screen bg-brand-bg">

      {/* ── HERO ── */}

      <section className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 py-24 lg:flex-row lg:py-32">

        <div className="flex-1 space-y-8">

          {/* Eyebrow */}

          <motion.p

            initial={{ opacity: 0, y: 10 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.4 }}

            className="text-sm font-semibold uppercase tracking-widest text-brand-accent"

          >

            Product Marketing · Positioning · GTM Strategy

          </motion.p>

          {/* Headline */}

          <motion.h1

            initial={{ opacity: 0, y: 20 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.5, delay: 0.1 }}

            className="text-5xl font-bold leading-[1.1] tracking-tight text-brand-text md:text-6xl lg:text-7xl"

          >

            I Help Products Find{' '}

            <span className="text-brand-accent">Their Right Story.</span>

          </motion.h1>

          {/* Subline */}

          <motion.p

            initial={{ opacity: 0, y: 20 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.5, delay: 0.2 }}

            className="max-w-xl text-lg text-brand-muted md:text-xl leading-relaxed"

          >

            Product marketer with 4+ years at the intersection of customer insight,

            competitive positioning, and GTM execution. I don't just describe what

            a product does — I find the angle that makes the right person stop and say:

            that's exactly what I need.

          </motion.p>

          {/* Proof strip */}

          <motion.div

            initial={{ opacity: 0, y: 20 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.5, delay: 0.3 }}

            className="flex flex-wrap gap-6 text-sm text-brand-muted"

          >

            <span><strong className="text-brand-text">2 product proposals</strong> authored & in roadmap pipeline</span>

            <span><strong className="text-brand-text">Forbes</strong> client placement via earned media</span>

            <span><strong className="text-brand-text">1.5M+</strong> organic views on a brand built from zero</span>

          </motion.div>

          {/* CTAs */}

          <motion.div

            initial={{ opacity: 0, y: 20 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.5, delay: 0.4 }}

            className="flex flex-wrap items-center gap-4"

          >

            <Link

              to="/work"

              className="rounded-full bg-brand-accent px-8 py-4 text-sm font-semibold text-brand-bg hover:bg-brand-accent-hover transition-colors"

            >

              View My Work

            </Link>

            <Link

              to="/contact"

              className="rounded-full border border-brand-border bg-brand-card px-8 py-4 text-sm font-semibold text-brand-text hover:bg-brand-border transition-colors"

            >

              Connect with Me

            </Link>

          </motion.div>

        </div>

        {/* Hero image */}

        <motion.div

          initial={{ opacity: 0, scale: 0.95 }}

          animate={{ opacity: 1, scale: 1 }}

          transition={{ duration: 0.6, delay: 0.2 }}

          className="flex h-full items-center justify-center"

        >

          <img

            src="https://raw.githubusercontent.com/akshatjain4377-commits/Akshat-Jain-PMM-Portfolio/main/product-growth-loop.png"

            alt="Product Growth System"

            className="w-full max-w-[400px] rounded-2xl shadow-2xl hover:scale-105 transition duration-500"

          />

        </motion.div>

      </section>

      {/* ── HOW I THINK ABOUT PMM ── */}

      <section className="border-t border-brand-border bg-brand-bg py-24">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="mb-4 text-3xl font-bold tracking-tight text-brand-text md:text-4xl">

            How I Think About Product Marketing

          </h2>

          <p className="mb-12 text-brand-muted max-w-2xl">

            PMM lives at the intersection of the customer, the product, and the market.

            Getting it right means being fluent in all three — simultaneously.

          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

            {[

              {

                icon: <Search className="h-5 w-5 text-brand-accent" />,

                title: "Customer Insight Before Everything",

                desc: "Positioning built on assumptions fails. I start with search intent, user behaviour, and competitive perception — then work backwards to messaging that actually lands."

              },

              {

                icon: <Target className="h-5 w-5 text-brand-accent" />,

                title: "Positioning is a Choice, Not a Tagline",

                desc: "The best positioning isn't the cleverest line — it's the clearest answer to: why this product, for this person, over every alternative. I find that answer first."

              },

              {

                icon: <TrendingUp className="h-5 w-5 text-brand-accent" />,

                title: "GTM is a System, Not a Launch",

                desc: "A launch without a retention plan is just a spike. I build GTM motions that connect acquisition, activation, and renewal into one compounding system."

              }

            ].map((item, i) => (

              <motion.div

                key={i}

                initial={{ opacity: 0, y: 20 }}

                whileInView={{ opacity: 1, y: 0 }}

                viewport={{ once: true }}

                transition={{ duration: 0.5, delay: i * 0.1 }}

                className="rounded-2xl border border-brand-border bg-brand-card p-8 transition-colors hover:border-brand-accent/30"

              >

                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-brand-bg border border-brand-border">

                  {item.icon}

                </div>

                <h3 className="mb-4 text-xl font-semibold text-brand-text">{item.title}</h3>

                <p className="text-sm leading-relaxed text-brand-muted">{item.desc}</p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* ── SELECTED WORK ── */}

      <section className="border-t border-brand-border bg-brand-bg py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-12">

            <h2 className="mb-4 text-3xl font-bold tracking-tight text-brand-text md:text-4xl">

              Selected Work

            </h2>

            <p className="text-brand-muted">

              Positioning problems solved, GTM strategies built, and markets entered —

              across insurance, financial media, and independent brand building.

            </p>

          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

            {/* ACKO Insurance */}

            <Link

              to="/work/acko"

              className="group block overflow-hidden rounded-2xl border border-brand-border bg-brand-card transition-colors hover:border-brand-accent/50"

            >

              <div className="aspect-[16/9] w-full overflow-hidden bg-brand-bg p-8">

                <img

                  src="https://raw.githubusercontent.com/akshatjain4377-commits/Akshat-Jain-PMM-Portfolio/main/acko-insurance.png"

                  alt="ACKO Insurance"

                  className="h-full w-full object-cover rounded-lg opacity-80 group-hover:opacity-100 transition-opacity"

                  referrerPolicy="no-referrer"

                />

              </div>

              <div className="p-8">

                <div className="mb-4 flex gap-2">

                  <span className="rounded-full border border-brand-accent/30 bg-brand-accent/10 px-3 py-1 text-xs font-medium text-brand-accent">Positioning</span>

                  <span className="rounded-full border border-brand-border bg-brand-bg px-3 py-1 text-xs font-medium text-brand-muted">GTM Strategy</span>

                </div>

                <h3 className="mb-4 text-2xl font-bold text-brand-text">ACKO Insurance</h3>

                <div className="space-y-2 text-sm text-brand-muted">

                  <p><strong className="text-brand-text font-medium">Problem:</strong> Scale achieved in motor — but how does ACKO earn the right to win in health?</p>

                  <p><strong className="text-brand-text font-medium">Approach:</strong> Trust-centric positioning using motor as the acquisition layer and cross-sell into health as the LTV engine.</p>

                  <p><strong className="text-brand-text font-medium">Strategic Outcome:</strong> Hybrid GTM framework projecting 4.1x LTV/CAC improvement through ecosystem lock-in.</p>

                </div>

              </div>

            </Link>

            {/* Business Standard */}

            <Link

              to="/work/business-standard"

              className="group block overflow-hidden rounded-2xl border border-brand-border bg-brand-card transition-colors hover:border-brand-accent/50"

            >

              <div className="aspect-[16/9] w-full overflow-hidden bg-brand-bg p-8">

                <img

                  src="https://raw.githubusercontent.com/akshatjain4377-commits/Akshat-Jain-PMM-Portfolio/main/business-standard.jpg"

                  alt="Business Standard"

                  className="h-full w-full object-cover rounded-lg opacity-80 group-hover:opacity-100 transition-opacity"

                  referrerPolicy="no-referrer"

                />

              </div>

              <div className="p-8">

                <div className="mb-4 flex gap-2">

                  <span className="rounded-full border border-brand-accent/30 bg-brand-accent/10 px-3 py-1 text-xs font-medium text-brand-accent">Product Proposals</span>

                  <span className="rounded-full border border-brand-border bg-brand-bg px-3 py-1 text-xs font-medium text-brand-muted">GTM</span>

                </div>

                <h3 className="mb-4 text-2xl font-bold text-brand-text">Business Standard</h3>

                <div className="space-y-2 text-sm text-brand-muted">

                  <p><strong className="text-brand-text font-medium">Problem:</strong> High-intent financial audience arriving but not staying — pages built for crawlers, not investors.</p>

                  <p><strong className="text-brand-text font-medium">Approach:</strong> Authored two cross-functional product proposals (IPO Tracker + Share Price pages), benchmarking competitor UX and presenting phased roadmaps to product and editorial stakeholders.</p>

                  <p><strong className="text-brand-text font-medium">Outcome:</strong> Rankings lifted 8.2 → 5.0 on priority terms; both proposals in product pipeline.</p>

                </div>

              </div>

            </Link>

            {/* The Peak View Stories */}

            <Link

              to="/work/peak-view"

              className="group block overflow-hidden rounded-2xl border border-brand-border bg-brand-card transition-colors hover:border-brand-accent/50"

            >

              <div className="aspect-[16/9] w-full overflow-hidden bg-brand-bg p-8">

                <img

                  src="https://raw.githubusercontent.com/akshatjain4377-commits/Akshat-Jain-PMM-Portfolio/main/the-peak-view-stories.jpg"

                  alt="The Peak View Stories"

                  className="h-full w-full object-cover rounded-lg opacity-80 group-hover:opacity-100 transition-opacity"

                  referrerPolicy="no-referrer"

                />

              </div>

              <div className="p-8">

                <div className="mb-4 flex gap-2">

                  <span className="rounded-full border border-brand-accent/30 bg-brand-accent/10 px-3 py-1 text-xs font-medium text-brand-accent">Brand Building</span>

                  <span className="rounded-full border border-brand-border bg-brand-bg px-3 py-1 text-xs font-medium text-brand-muted">0→1 Launch</span>

                </div>

                <h3 className="mb-4 text-2xl font-bold text-brand-text">The Peak View Stories</h3>

                <div className="space-y-2 text-sm text-brand-muted">

                  <p><strong className="text-brand-text font-medium">Problem:</strong> How do you build a brand with zero budget, zero audience, and zero distribution in a crowded media niche?</p>

                  <p><strong className="text-brand-text font-medium">Approach:</strong> Defined positioning and tone-of-voice from scratch; built the full content system and Instagram distribution independently using AI tools.</p>

                  <p><strong className="text-brand-text font-medium">Outcome:</strong> 1.5M+ organic reel views (zero paid); 7,600 website users via SEO; featured in Under30CEO, TechBullion, CMO Times as Founder.</p>

                </div>

              </div>

            </Link>

            {/* Digital PR */}

            <Link

              to="/work/digital-pr"

              className="group block overflow-hidden rounded-2xl border border-brand-border bg-brand-card transition-colors hover:border-brand-accent/50"

            >

              <div className="aspect-[16/9] w-full overflow-hidden bg-brand-bg p-8">

                <img

                  src="https://raw.githubusercontent.com/akshatjain4377-commits/Akshat-Jain-PMM-Portfolio/main/digital-pr.png"

                  alt="Digital PR Authority Engine"

                  className="h-full w-full object-cover rounded-lg opacity-80 group-hover:opacity-100 transition-opacity"

                  referrerPolicy="no-referrer"

                />

              </div>

              <div className="p-8">

                <div className="mb-4 flex gap-2">

                  <span className="rounded-full border border-brand-accent/30 bg-brand-accent/10 px-3 py-1 text-xs font-medium text-brand-accent">Messaging</span>

                  <span className="rounded-full border border-brand-border bg-brand-bg px-3 py-1 text-xs font-medium text-brand-muted">Authority Building</span>

                </div>

                <h3 className="mb-4 text-2xl font-bold text-brand-text">Digital PR Authority Engine</h3>

                <div className="space-y-2 text-sm text-brand-muted">

                  <p><strong className="text-brand-text font-medium">Problem:</strong> Founders have expertise — but no one outside their network knows it. How do you build credibility at scale without paid media?</p>

                  <p><strong className="text-brand-text font-medium">Approach:</strong> Built repeatable messaging frameworks and outreach systems using HARO, Qwoted, SourceBottle, and Terkel to earn third-party validation.</p>

                  <p><strong className="text-brand-text font-medium">Outcome:</strong> Secured Forbes placement for a client; personally featured in Under30CEO, TechBullion, and CMO Times as Founder.</p>

                </div>

              </div>

            </Link>

          </div>

        </div>

      </section>

      {/* ── FEATURED IN ── */}

      <section className="border-t border-brand-border bg-brand-bg py-16">

        <div className="mx-auto max-w-7xl px-6 text-center">

          <p className="mb-8 text-xs font-semibold uppercase tracking-widest text-brand-muted">

            Work Experience & Featured In

          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 grayscale transition-all hover:grayscale-0">

            <span className="text-xl font-bold text-brand-text">Business Standard</span>

            <span className="text-xl font-bold italic text-brand-text">RankSoldier</span>

            <span className="text-xl font-bold text-brand-text">Under30CEO</span>

            <span className="text-xl font-bold text-brand-text">TechBullion</span>

            <span className="text-xl font-bold text-brand-text">CMO Times</span>

          </div>

        </div>

      </section>

      {/* ── THE LONG GAME ── */}

      <section className="border-t border-brand-border bg-brand-bg py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="flex flex-col items-center justify-between gap-16 rounded-3xl bg-brand-card p-12 md:flex-row lg:p-24">

            <div className="flex-1 space-y-6">

              <h2 className="text-3xl font-bold tracking-tight text-brand-text md:text-4xl">

                The Long Game

              </h2>

              <p className="text-lg leading-relaxed text-brand-muted">

                The best PMMs aren't just strategists — they're genuinely curious about people.

                I come from a background where I had to figure out what audiences actually

                respond to, not what a brief said they should. That instinct — finding the

                real insight before building the narrative — is what I bring to every product.

              </p>

              <p className="text-lg leading-relaxed text-brand-muted">

                Whether it's a financial media platform, an insurance product, or a brand

                built from scratch — the question is always the same: what does this person

                actually need to hear, and why should they believe it?

              </p>

            </div>

            <div className="relative h-64 w-64 shrink-0 overflow-hidden rounded-full border-4 border-brand-accent/20 md:h-80 md:w-80">

              <img

                src="https://raw.githubusercontent.com/akshatjain4377-commits/Akshat-Jain-PMM-Portfolio/main/akshat-jain-about-me.jpeg"

                alt="Akshat Jain"

                className="h-full w-full object-cover"

                referrerPolicy="no-referrer"

              />

              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-brand-accent/50"></div>

            </div>

          </div>

        </div>

      </section>

    </div>

  );

}
