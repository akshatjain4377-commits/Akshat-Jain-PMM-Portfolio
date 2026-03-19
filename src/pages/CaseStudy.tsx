import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Target, TrendingUp, Users } from 'lucide-react';

export default function CaseStudy() {
  const { id } = useParams();

  // Mock data for case studies based on ID
  const studyData = {
  acko: {
    title: "ACKO Insurance",
    subtitle: "Insurance isn’t bought. It’s trusted over time.",
    category: "FINTECH",
    heroImage: "https://picsum.photos/seed/acko-hero/1920/1080",

    context:
      "ACKO is a digital-first insurer scaling through motor insurance and embedded partnerships. Despite strong revenue (~₹2,160 Cr), the business faced high burn, increasing regulatory pressure (IRDAI expense caps), and dependence on aggregators for discovery. At the same time, motor growth was plateauing while health insurance demand was expanding.",

    problem:
      "ACKO’s growth model was misaligned with sustainability. Health insurance acquisition (~₹14k CAC) was too expensive under regulatory caps, while motor insurance, though scalable, had lower lifetime value. Discovery was controlled by aggregators, limiting pricing power and margins.",

    insight:
  "Customer research revealed that insurance decisions are not transactional—they are driven by trust built over time. Users approach motor insurance as a low-risk, mandatory purchase, but treat health insurance as a high-trust, high-stakes decision. We also observed that moments like claims, renewals, and financial stress events shape long-term perception far more than initial acquisition touchpoints. This highlighted that retention and trust—not acquisition—drive real value.",

    strategy:
      "Shifted from an acquisition-led model to a retention-first growth engine. Positioned motor insurance as a trust and renewal engine, improved claims experience as the core product promise, and used behavioral triggers (renewals, challans, valuation signals) to drive cross-sell into health. These decisions were directly informed by customer behavior patterns observed during research. Introduced the concept of a unified insurance control center (ACKO Vault) to increase retention, enable proactive engagement, and build ecosystem lock-in.",

    metrics: [
      { label: "LTV/CAC Potential", value: "4.1x" },
      { label: "Retention (Cross-sell)", value: "Up to 92%" },
      { label: "Health CAC Challenge", value: "₹14k → Optimized via Motor" }
    ],

    learnings: [
      "Retention is a stronger growth lever than acquisition in regulated markets.",
      "Trust is built at the moment of claim, not at the moment of purchase.",
      "Lifecycle thinking beats channel thinking in high-consideration products.",
      "The best GTM strategy aligns with unit economics, not just demand."
    ]
},
   "peak-view": {
  title: "The Peak View Stories",
  subtitle: "Building a shareable, identity-driven media brand from scratch",
  category: "MEDIA",
  heroImage: "https://picsum.photos/seed/peak-hero/1920/1080",

  context:
    "The lifestyle content space is saturated with broad, low-differentiation content competing on volume. Most platforms lack a distinct voice, optimize for traffic over shareability, and struggle to build loyal audiences. The Peak View Stories was built as an experimental media product to test whether a strong identity and distribution-first approach could break through.",

  problem:
    "Breaking through in content today is not a supply problem—it’s a distribution and identity problem. Generic content doesn’t get shared, SEO takes time without authority, and new platforms struggle to build recall in a crowded market.",

  insight:
    "People don’t share information—they share identity. Satire and opinion-driven content signal personality, making it more likely to be shared, remembered, and engaged with compared to generic informational content.",

  strategy:
    "Built a satire-led media platform with a strong, distinct voice and an AI-assisted content engine to enable rapid production. Prioritized Instagram-first distribution to optimize for virality and shareability over traditional SEO. Layered authority through digital PR by positioning myself as the founder and earning backlinks. Experimented with paid acquisition using small-budget Google Ads to validate additional growth channels.",

  metrics: [
    { label: "Organic Search Traffic", value: "10K+ (6 months)" },
    { label: "Users Acquired", value: "7.6K" },
    { label: "Viral Reach", value: "1.5M-2M+ per post" },
    { label: "Repeatable Distribution", value: "10K–100K/post" }
  ],

  learnings: [
    "Content that signals identity spreads faster than content that delivers information.",
    "Distribution-first thinking outperforms SEO-first for new media products.",
    "Consistency in mid-tier performance matters more than one-off virality.",
    "Founder-led storytelling accelerates authority and trust.",
    "AI is a production multiplier, but positioning drives performance."
  ]
},
    "business-standard": {
  title: "Business Standard",
  subtitle: "Turning financial pages into decision-making products",
  category: "MEDIA / FINANCE",
  heroImage: "https://picsum.photos/seed/bs-hero/1920/1080",

  context:
    "context:
  "Owned SEO and content growth for Business Standard’s Markets and Companies sections (IPOs, earnings, and corporate coverage). While the platform had strong authority and traffic, key pages were built for information display rather than user decision-making.",",

  problem:
    "High-intent financial pages (IPO trackers and stock pages) acted as information dead-ends. Users would check basic data like price or IPO dates and exit, leading to low engagement, missed SEO opportunities, and weak retention.",

  insight:
    "Users in financial markets are not just looking for data—they are looking for guidance. Queries like 'Is this IPO worth investing?' or 'Is this stock undervalued?' reflect decision-stage intent. However, existing pages only provided raw data, not interpretation or next steps.",

  strategy:
    "Redesigned key pages from static information hubs into guided research experiences. For IPO pages, introduced structured data, segmentation (Mainboard vs SME), detailed company overviews, and comparison tools to improve discoverability and engagement. For stock pages, proposed a 'research journey' with features like QGVT score (quality, growth, valuation, technicals), SWOT analysis, and sticky navigation to eliminate dead-ends. Shifted SEO approach from keyword targeting to intent-based content, capturing queries around investment decisions rather than just data points.",

  metrics: [
    { label: "Content Coverage", value: "IPO + Earnings + Companies" },
    { label: "User Journey Fix", value: "Reduced Dead-Ends" },
    { label: "SEO Approach", value: "Intent-led Strategy" }
  ],

  learnings: [
    "High-intent users need guidance, not just information.",
    "The biggest growth lever is often fixing user drop-offs, not just acquiring traffic.",
    "SEO works best when aligned with user decision journeys, not just keywords.",
    "Turning pages into products significantly improves engagement and retention.",
    "Financial content is trust-driven—clarity and structure build credibility."
  ]
},
   "digital-pr": {
  title: "Digital PR Authority Engine",
  subtitle: "Turning founder expertise into earned media and authority",
  category: "GROWTH / AUTHORITY",
  heroImage: "https://picsum.photos/seed/pr-hero/1920/1080",

  context:
    "Worked at a digital PR agency (RankSoldier) focused on building authority for founders, CEOs, and businesses through earned media placements. Clients across industries needed high-quality backlinks and visibility from trusted publications to improve credibility and search performance.",

  problem:
    "Most brands struggle to build authority because traditional PR is expensive and content marketing alone doesn’t guarantee visibility. Founders have expertise, but lack the right distribution channels and narrative framing to get featured in top publications.",

  insight:
    "Media platforms already have demand—they are constantly looking for expert opinions and credible perspectives. The real challenge is not creating content, but matching the right expertise with the right narrative at the right time. Journalists don’t want pitches—they want ready-to-publish insights.",

  strategy:
    "Built a repeatable system to convert founder expertise into media-ready responses using platforms like HARO, Terkel, Qwoted, and SourceBottle. Focused on crafting concise, insight-driven answers aligned with journalist queries. Prioritized credibility, clarity, and speed of response to increase acceptance rates. Later scaled the process by managing interns, maintaining quality control, and optimizing output across multiple clients. Applied the same method to build founder authority for my own platform (The Peak View Stories), earning placements in multiple publications.",

  metrics: [
    { label: "Top-tier Placement", value: "Forbes Feature" },
    { label: "Authority Links Built", value: "Multiple Publications" },
    { label: "Platforms Used", value: "HARO, Qwoted, Terkel" },
    { label: "Role Growth", value: "Intern → Project Manager" }
  ],

  learnings: [
    "Authority is built through distribution, not just content creation.",
    "The best PR is not promotional—it’s perspective-driven.",
    "Speed and relevance matter more than long-form pitches.",
    "Founder-led narratives significantly increase credibility and acceptance.",
    "Media demand already exists—you just need to plug into it effectively."
  ]
   }
},

  const data = studyData[id as keyof typeof studyData] || studyData['acko'];

  return (
    <div className="min-h-screen bg-brand-bg">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-brand-bg/60 z-10"></div>
        <img 
          src={data.heroImage} 
          alt={data.title} 
          className="absolute inset-0 h-full w-full object-cover" 
          referrerPolicy="no-referrer" 
        />
        
        <div className="relative z-20 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-24">
          <Link to="/work" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-brand-accent hover:text-brand-accent-hover transition-colors">
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

      {/* Content Sections */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-24">
            
            {/* Context & Problem */}
            <div className="space-y-12">
              <div id="context">
                <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-brand-text">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-card border border-brand-border text-sm text-brand-accent">01</span>
                  The Context
                </h2>
                <p className="text-lg leading-relaxed text-brand-muted">{data.context}</p>
              </div>
              
              <div id="problem">
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
              <div id="insight">
                <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-brand-text">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-card border border-brand-border text-sm text-brand-accent">03</span>
                  The Insight
                </h2>
                <p className="text-lg leading-relaxed text-brand-muted">{data.insight}</p>
              </div>
              
              <div id="strategy">
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

          {/* Sidebar / Metrics */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              <div id="metrics" className="rounded-3xl border border-brand-border bg-brand-card p-8">
                <h3 className="mb-8 text-sm font-bold uppercase tracking-widest text-brand-muted">Business Impact</h3>
                <div className="space-y-8">
                  {data.metrics.map((metric, i) => (
                    <div key={i} className="border-b border-brand-border pb-6 last:border-0 last:pb-0">
                      <div className="mb-2 text-4xl font-display font-bold text-brand-accent">{metric.value}</div>
                      <div className="text-sm font-medium text-brand-muted">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="rounded-3xl bg-brand-accent p-8 text-brand-bg">
                <h3 className="mb-4 text-xl font-bold">Need similar results?</h3>
                <p className="mb-6 text-sm font-medium opacity-90">Let's discuss how we can apply these growth principles to your product.</p>
                <button className="w-full rounded-full bg-brand-bg py-3 text-sm font-bold text-brand-accent hover:bg-brand-bg/90 transition-colors">
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
