import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function CaseStudy() {
  const { id } = useParams();

  const studyData = {

    // ── ACKO ──────────────────────────────────────────────────────────────────
    acko: {
      title: "ACKO Insurance",
      subtitle: "Insurance isn't bought. It's trusted over time.",
      category: "FINTECH · GTM STRATEGY",
      heroImage: "https://raw.githubusercontent.com/akshatjain4377-commits/Akshat-Jain-PMM-Portfolio/main/acko-insurance.png",
      context:
        "ACKO is a digital-first insurer that scaled rapidly through motor insurance and embedded partnerships with platforms like Amazon, Ola, Swiggy, and MakeMyTrip. Despite reaching ~₹2,160 Cr in FY24 revenue, the business faced mounting burn, regulatory pressure from IRDAI on Expense of Management (EoM), and heavy dependence on aggregators for discovery. Motor growth was plateauing while health insurance demand across India was expanding rapidly.",
      problem:
        "ACKO's growth model was misaligned with sustainability. Health insurance acquisition costs (~₹14k CAC) were prohibitive under IRDAI's 30% expense cap. Motor insurance was scalable but had lower lifetime value. Discovery was controlled by aggregators, limiting ACKO's pricing power and margin control. The strategic question: where does ACKO lead, and where does it selectively invest?",
      insight:
        "Insurance decisions are not transactional — they are driven by trust built over time. Customer research revealed that users approach motor insurance as a low-risk, mandatory purchase, but treat health insurance as a high-trust, high-stakes decision requiring earned credibility. Critically, moments like claims, renewals, and financial stress events shape long-term brand perception far more than initial acquisition touchpoints. This meant retention and trust — not acquisition spend — were the real growth levers.",
      strategy:
        "Developed a hybrid GTM framework that repositioned motor insurance as the low-friction acquisition layer and health insurance as the long-term LTV engine. Rather than treating them as separate products, the strategy used motor trust as a bridge to health cross-sell — bypassing the ₹14k CAC problem entirely. The framework included: a trust-first positioning model anchored on claims reliability; behavioral cross-sell triggers at renewal, challan, and valuation moments; a unified app ecosystem (ACKO Vault) for retention and lock-in; and a competitive landscape analysis mapping ACKO's positioning against HDFC ERGO, ICICI Lombard, Digit, and indirect players like Policybazaar and PhonePe.",
      metrics: [
        { label: "Projected LTV/CAC Improvement", value: "4.1x" },
        { label: "Combined Ecosystem Retention", value: "~92%" },
        { label: "Health CAC vs Motor CAC", value: "₹14k → ₹4.5k via cross-sell" },
        { label: "Motor Digital Market Share", value: "~16% of digital segment" }
      ],
      learnings: [
        "Retention is a stronger growth lever than acquisition in regulated markets — especially when expense caps limit what you can spend to acquire.",
        "Trust is built at the moment of claim, not at the moment of purchase. Claims experience is the real product.",
        "Lifecycle thinking beats channel thinking in high-consideration categories. The right GTM doesn't ask 'which channel?' — it asks 'which moment in the customer's life?'",
        "The best positioning strategy uses a strength you already have (motor scale) to earn entry into a category you want to win (health trust).",
        "Regulatory constraints — like IRDAI's EoM cap — can be reframed as competitive moats if your unit economics are designed around them."
      ]
    },

    // ── BUSINESS STANDARD ─────────────────────────────────────────────────────
    "business-standard": {
      title: "Business Standard",
      subtitle: "Turning financial pages into decision-making products.",
      category: "FINANCIAL MEDIA · PRODUCT PROPOSALS",
      heroImage: "https://raw.githubusercontent.com/akshatjain4377-commits/Akshat-Jain-PMM-Portfolio/main/business-standard.jpg",
      context:
        "Business Standard is one of India's most authoritative financial publications, with strong organic authority and high-intent audiences — retail investors, traders, and market professionals — arriving daily for IPO updates, earnings results, and company research. I owned SEO and GTM strategy for the Markets and Companies sections, working across editorial and product stakeholders.",
      problem:
        "High-intent financial pages were functioning as information dead-ends. A user arriving to check an IPO or stock price would see the data they came for — and immediately leave. Pages were architecturally built for search crawlers, not for investor decision-making. There was no next step, no retention hook, no cross-navigation, and no reason to come back. This drove high drop-off rates and wasted the organic authority the platform had spent years building.",
      insight:
        "Users arriving on financial pages are not just looking for data — they are in the middle of a decision. They want to know: Is this IPO worth applying for? Is this stock undervalued? What are other investors doing? Raw data answers none of these questions. The insight was that repositioning these pages from 'data displays' to 'decision-support tools' would not only improve engagement but create entirely new SEO surface area for high-intent long-tail queries like 'Is [Stock] a good buy?' or '[Company] SWOT analysis'.",
      strategy:
        "Independently authored two cross-functional product proposals — one for the IPO Tracker page and one for individual Share Price/Company pages — and presented them to editorial and product stakeholders with phased implementation roadmaps. The IPO Tracker proposal recommended: segregation of Mainboard vs SME IPOs; expanded data fields (issue size, lot size, lead managers, listing date); sortable and filterable tables; dedicated IPO detail pages; and an IPO calendar and alert signup for repeat engagement. The Share Price proposal introduced the concept of a BS QGVT Stock Scorecard (Quality, Growth, Valuation, Technicals) — a weighted financial health rating modelled on CIBIL — plus a sticky navigation flow following a professional investor's research workflow, a 'Check Before You Buy' SWOT module, and FAQ sections targeting long-tail intent queries. Both proposals benchmarked competitor UX across Moneycontrol, Livemint, Chittorgarh, and Trendlyne.",
      metrics: [
        { label: "Ranking improvement on priority terms", value: "8.2 → 5.0" },
        { label: "Priority terms tracked", value: "Sensex Today, Nifty Today + IPO queries" },
        { label: "Product proposals authored", value: "2 (in roadmap pipeline)" },
        { label: "Competitors benchmarked", value: "Moneycontrol, Livemint, Chittorgarh, Trendlyne" }
      ],
      learnings: [
        "The best SEO strategy is a product strategy. Fixing user journeys and building decision-support features creates more durable ranking improvements than keyword targeting alone.",
        "High-intent audiences need decision-support content, not just data. The gap between 'here is the information' and 'here is what to do with it' is where engagement is won or lost.",
        "Cross-functional proposals need to speak the language of every stakeholder. For editorial, the pitch was content quality and SEO. For product, it was engagement and retention. The same proposal, framed two ways.",
        "Competitor benchmarking is most useful when it reveals what users expect as a baseline — not what competitors are doing, but what users have been trained to expect from the category.",
        "Independently spotting problems and proposing solutions — without being asked — is how you build credibility inside an organisation faster than any job title can."
      ]
    },

    // ── PEAK VIEW STORIES ─────────────────────────────────────────────────────
    "peak-view": {
      title: "The Peak View Stories",
      subtitle: "Building a shareable, identity-driven media brand from scratch.",
      category: "MEDIA · 0→1 BRAND BUILD",
      heroImage: "https://raw.githubusercontent.com/akshatjain4377-commits/Akshat-Jain-PMM-Portfolio/main/the-peak-view-stories.jpg",
      context:
        "The lifestyle and news content space is oversaturated with low-differentiation platforms competing on volume. Most new media brands lack a distinct voice, optimise for crawlers over shareability, and fail to build audience loyalty. The Peak View Stories was built as an independent experiment: could a strong positioning, a clear tone-of-voice, and distribution-first thinking break through — with zero budget and zero existing audience?",
      problem:
        "Breaking through in content is not a supply problem — it's a distribution and identity problem. Generic content doesn't get shared, SEO takes months without domain authority, and new platforms struggle to build recall in a crowded market. The challenge was to find a positioning angle that made sharing feel like self-expression, not just information passing.",
      insight:
        "People don't share information — they share identity. Satire and opinion-driven content signal personality, which makes it far more likely to be shared, saved, and remembered than generic informational content. The insight: if the content makes someone feel like it says something about who they are, they'll share it without being asked.",
      strategy:
        "Built the full platform independently — website designed and deployed using AI-assisted vibe coding, content produced and published, AI-generated visuals created for every post, and Instagram distribution owned end-to-end. Defined positioning and tone-of-voice from scratch: satirical, sharp, India-aware. Prioritised Instagram-first distribution to optimise for virality and social proof before investing in SEO. Applied the Digital PR playbook from RankSoldier to earn personal earned media placements as Founder — building third-party credibility for the brand through Under30CEO, TechBullion, and CMO Times features.",
      metrics: [
        { label: "Instagram organic reel views (zero paid)", value: "1.5M+" },
        { label: "Individual post peak reach", value: "100K–500K+" },
        { label: "Website active users via SEO (6 months)", value: "7,600" },
        { label: "Indexed pages via organic search", value: "254" },
        { label: "Earned media placements as Founder", value: "3 (Under30CEO, TechBullion, CMO Times)" }
      ],
      learnings: [
        "Content that signals identity spreads faster than content that delivers information. The question to ask before publishing: 'Does sharing this say something about who I am?'",
        "Distribution-first thinking outperforms SEO-first for new platforms. Social proof and organic reach build the authority that SEO later amplifies.",
        "Positioning and tone-of-voice are the product. In a content business, how you say things is the differentiation — not what you say.",
        "Founder-led storytelling accelerates brand authority. Being visible as the person behind the brand builds trust faster than any content calendar.",
        "AI tools are a production multiplier — but positioning is what drives performance. The tool doesn't matter; the angle does."
      ]
    },

    // ── DIGITAL PR ────────────────────────────────────────────────────────────
    "digital-pr": {
      title: "Digital PR Authority Engine",
      subtitle: "Turning founder expertise into earned media and third-party credibility.",
      category: "MESSAGING · AUTHORITY BUILDING",
      heroImage: "https://raw.githubusercontent.com/akshatjain4377-commits/Akshat-Jain-PMM-Portfolio/main/digital-pr.png",
      context:
        "At RankSoldier Digital, I was part of a team focused on building thought leadership and earned media authority for founders and CEOs. The core service: get clients featured in credible publications by positioning their expertise as media-ready insights rather than self-promotional pitches. I joined as a content writing intern and was promoted to Project Manager within 4 months, eventually managing a 10+ person cross-functional team.",
      problem:
        "Founders and CEOs typically have genuine domain expertise — but zero third-party credibility outside their immediate networks. They struggle to get featured not because their knowledge isn't valuable, but because they don't know how to frame it for journalists, which platforms to use, or how to respond to media queries at the speed and relevance journalists need. The result: expertise stays invisible, and authority never compounds.",
      insight:
        "Journalists are not looking for pitches — they are looking for ready-to-publish expert opinions that make their stories better. The founders who get featured consistently are the ones who respond to the right query, with the right framing, faster than everyone else. The insight was that this is a system problem, not a talent problem: if you build a repeatable process for matching expertise to journalist needs, earned media becomes predictable rather than lucky.",
      strategy:
        "Built systematic outreach pipelines across HARO (Help A Reporter Out), Qwoted, SourceBottle, and Terkel — monitoring journalist queries daily and matching them to the most relevant founder or CEO in our client roster. Developed messaging frameworks for each client that translated their domain expertise into tight, quotable insights journalists could drop directly into articles. Trained the team on response speed (the first credible response usually wins), relevance filtering (only respond to queries where the client genuinely adds value), and framing (lead with the insight, not the credentials). The Forbes placement for a client — the team's first major win — came from this system, not from a lucky cold email. Separately applied the same playbook to my own brand as Founder of The Peak View Stories, earning placements in Under30CEO, TechBullion, and CMO Times.",
      metrics: [
        { label: "Top-tier client placement secured", value: "Forbes" },
        { label: "Platforms used systematically", value: "HARO, Qwoted, SourceBottle, Terkel" },
        { label: "Personal placements as Founder", value: "Under30CEO, TechBullion, CMO Times" },
        { label: "Team managed as Project Manager", value: "10+ (interns, admins, HR)" },
        { label: "Promotion timeline", value: "Intern → Project Manager in 4 months" }
      ],
      learnings: [
        "Authority is a distribution problem, not a quality problem. Most founders have the expertise — they just don't have the system to get it in front of the right people at the right moment.",
        "Narrative beats promotion every time. The founders who get featured most are the ones who lead with a genuine insight and let the credibility follow — not the ones who lead with their title.",
        "Earned media compounds. One Forbes placement makes the next pitch easier, because journalists can now verify you've been published before. The first win is the hardest; the system does the rest.",
        "Speed and relevance are the two variables that actually determine who gets featured. A good response sent fast beats a great response sent late.",
        "The same framework that works for clients works for yourself. I used the exact same playbook to earn my own placements — which proved the system was replicable, not dependent on the client's brand."
      ]
    }
  };

  const data = studyData[id] || studyData['acko'];

  return (
    <div className="min-h-screen bg-brand-bg">

      {/* ── HERO ── */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-brand-bg/70 z-10"></div>
        <img
          src={data.heroImage}
          alt={data.title}
          className="absolute inset-0 h-full w-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-20 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-24">
          <Link
            to="/work"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-brand-accent hover:text-brand-accent-hover transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 flex gap-3">
              <span className="rounded-full border border-brand-accent/30 bg-brand-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-accent backdrop-blur-md">
                {data.category}
              </span>
            </div>
            <h1 className="mb-4 text-5xl font-bold leading-[1.1] tracking-tight text-brand-text md:text-7xl">
              {data.title}
            </h1>
            <p className="max-w-2xl text-xl font-medium text-brand-muted md:text-2xl">
              {data.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">

          {/* Main Content */}
          <div className="lg:col-span-8 space-y-24">

            {/* Context & Problem */}
            <div className="space-y-12">
              <div>
                <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-brand-text">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-card border border-brand-border text-sm text-brand-accent">01</span>
                  The Context
                </h2>
                <p className="text-lg leading-relaxed text-brand-muted">{data.context}</p>
              </div>

              <div>
                <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-brand-text">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-card border border-brand-border text-sm text-brand-accent">02</span>
                  The Problem
                </h2>
                <div className="rounded-2xl border-l-4 border-brand-accent bg-brand-card p-8">
                  <p className="text-lg font-medium leading-relaxed text-brand-text">{data.problem}</p>
                </div>
              </div>
            </div>

            {/* Insight & Strategy */}
            <div className="space-y-12">
              <div>
                <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-brand-text">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-card border border-brand-border text-sm text-brand-accent">03</span>
                  The Insight
                </h2>
                <p className="text-lg leading-relaxed text-brand-muted">{data.insight}</p>
              </div>

              <div>
                <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-brand-text">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-card border border-brand-border text-sm text-brand-accent">04</span>
                  The Strategy
                </h2>
                <p className="text-lg leading-relaxed text-brand-muted">{data.strategy}</p>
              </div>
            </div>

            {/* Key Learnings */}
            <div>
              <h2 className="mb-8 text-2xl font-bold text-brand-text">Key Learnings</h2>
              <div className="space-y-4">
                {data.learnings.map((learning, i) => (
                  <div key={i} className="flex items-start gap-4 rounded-xl border border-brand-border bg-brand-card p-6">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-accent" />
                    <p className="text-brand-text">{learning}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">

              {/* Metrics */}
              <div className="rounded-3xl border border-brand-border bg-brand-card p-8">
                <h3 className="mb-8 text-sm font-bold uppercase tracking-widest text-brand-muted">
                  Key Numbers
                </h3>
                <div className="space-y-8">
                  {data.metrics.map((metric, i) => (
                    <div key={i} className="border-b border-brand-border pb-6 last:border-0 last:pb-0">
                      <div className="mb-2 text-3xl font-bold text-brand-accent leading-tight">
                        {metric.value}
                      </div>
                      <div className="text-sm font-medium text-brand-muted">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA — PMM job seeker framing */}
              <div className="rounded-3xl bg-brand-accent p-8 text-brand-bg">
                <h3 className="mb-4 text-xl font-bold">Interested in my work?</h3>
                <p className="mb-6 text-sm font-medium opacity-90">
                  I'm actively exploring PMM roles where I can own positioning,
                  GTM strategy, and growth from the ground up.
                </p>
                <Link
                  to="/contact"
                  className="block w-full rounded-full bg-brand-bg py-3 text-center text-sm font-bold text-brand-accent hover:bg-brand-bg/90 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
