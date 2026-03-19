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
      subtitle: "Legacy Financial Daily",
      category: "LEGACY MEDIA",
      heroImage: "https://picsum.photos/seed/bs-hero/1920/1080",
      context: "A legacy print giant transitioning to a digital-first, subscription-based revenue model.",
      problem: "High churn rates on digital subscriptions and low conversion from free to paid tiers.",
      insight: "Users were hitting the paywall at the wrong moments in their reading journey, causing frustration rather than conversion.",
      strategy: "Revamped the subscription tier structure based on user consumption frequency data. Introduced behavioral triggers in the digital reading experience to prompt renewals at high-value moments.",
      metrics: [
        { label: "Digital Revenue", value: "+25%" },
        { label: "Annual Retention", value: "+25%" },
        { label: "Paywall Conversion", value: "1.8x" }
      ],
      learnings: [
        "Timing is everything in paywall conversion.",
        "Consumption frequency is the best predictor of churn.",
        "Legacy brands must adapt their UX to digital reading habits."
      ]
    },
    "digital-pr": {
      title: "Digital PR Authority Engine",
      subtitle: "SaaS Growth Engine",
      category: "SAAS GROWTH",
      heroImage: "https://picsum.photos/seed/pr-hero/1920/1080",
      context: "A new automated PR tool for high-growth startups needing to build authority quickly.",
      problem: "Startups lack the budget for traditional PR agencies but need high-quality backlinks for SEO.",
      insight: "Data-driven reports are the most effective way to secure coverage in top-tier tech publications.",
      strategy: "Automated authority-building through proprietary data reports and automated outreach. Built a system to convert internal data into pitchable PR assets.",
      metrics: [
        { label: "Enterprise Clients", value: "50+" },
        { label: "High-Auth Backlinks", value: "40+" },
        { label: "Media Spend", value: "$0" }
      ],
      learnings: [
        "Data is the new currency in digital PR.",
        "Automation can scale outreach, but the pitch must remain personalized.",
        "Product-led growth works best when the product creates immediate, tangible value."
      ]
    }
  };

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
