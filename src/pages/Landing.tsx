import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, RefreshCw, Target, TrendingUp, Search } from 'lucide-react';

export default function Landing() {
  return (
    <div className="min-h-screen bg-brand-bg">
      {/* Hero Section */}
      <section className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 py-24 lg:flex-row lg:py-32">
        <div className="flex-1 space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold leading-[1.1] tracking-tight text-brand-text md:text-6xl lg:text-7xl"
          >
            I Build Growth Systems for Products That Want to Win.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-xl text-lg text-brand-muted md:text-xl"
          >
            Product Marketing focused on positioning clarity, customer insight, disciplined unit economics, and sustainable go-to-market strategy.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link to="/work" className="rounded-full bg-brand-accent px-8 py-4 text-sm font-semibold text-brand-bg hover:bg-brand-accent-hover transition-colors">
              View Projects
            </Link>
            <Link to="/contact" className="rounded-full border border-brand-border bg-brand-card px-8 py-4 text-sm font-semibold text-brand-text hover:bg-brand-border transition-colors">
              Connect with Me
            </Link>
          </motion.div>
        </div>
        
        <motion.div>
  <img
    src="images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    alt="Product Growth System"
    className="rounded-2xl shadow-2xl hover:scale-105 transition duration-500"
  />
     </motion.div>
      </section>

      {/* How I Think About Growth */}
      <section className="border-t border-brand-border bg-brand-bg py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-brand-text md:text-4xl">How I Think About Growth</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                icon: <Search className="h-5 w-5 text-brand-accent" />,
                title: "Insight First",
                desc: "Customer psychology, deep-dive interviews, and comprehensive competitive mapping to find the 'why' behind the 'what'."
              },
              {
                icon: <Target className="h-5 w-5 text-brand-accent" />,
                title: "Positioning with Precision",
                desc: "Crafting strategic narratives anchored in true differentiation, ensuring the product is the only logical choice for the target audience."
              },
              {
                icon: <TrendingUp className="h-5 w-5 text-brand-accent" />,
                title: "Revenue Discipline",
                desc: "Sustainable growth frameworks driven by optimized CAC, maximized LTV, and relentless focus on user retention."
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

      {/* Selected Work Preview */}
      <section className="border-t border-brand-border bg-brand-bg py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-brand-text md:text-4xl">Selected Work Preview</h2>
            <p className="text-brand-muted">A look at how I've scaled products across insurance, media, and tech.</p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Project 1 */}
            <Link to="/work/acko" className="group block overflow-hidden rounded-2xl border border-brand-border bg-brand-card transition-colors hover:border-brand-accent/50">
              <div className="aspect-[16/9] w-full overflow-hidden bg-brand-bg p-8">
                <img src="https://picsum.photos/seed/chart/800/450" alt="ACKO Insurance" className="h-full w-full object-cover rounded-lg opacity-80 group-hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
              </div>
              <div className="p-8">
                <div className="mb-4 flex gap-2">
                  <span className="rounded-full border border-brand-accent/30 bg-brand-accent/10 px-3 py-1 text-xs font-medium text-brand-accent">Insurance</span>
                  <span className="rounded-full border border-brand-border bg-brand-bg px-3 py-1 text-xs font-medium text-brand-muted">GTM</span>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-brand-text">ACKO Insurance</h3>
                <div className="space-y-2 text-sm text-brand-muted">
                  <p><strong className="text-brand-text font-medium">Context:</strong> Redefining digital-first insurance for millennials.</p>
                  <p><strong className="text-brand-text font-medium">Lever:</strong> Trust-centric positioning via behavioral nudges.</p>
                  <p><strong className="text-brand-text font-medium">Outcome:</strong> 40% increase in policy renewals via mobile app.</p>
                </div>
              </div>
            </Link>

            {/* Project 2 */}
            <Link to="/work/peak-view" className="group block overflow-hidden rounded-2xl border border-brand-border bg-brand-card transition-colors hover:border-brand-accent/50">
              <div className="aspect-[16/9] w-full overflow-hidden bg-brand-bg p-8">
                <img src="https://picsum.photos/seed/magazine/800/450" alt="The Peak View Stories" className="h-full w-full object-cover rounded-lg opacity-80 group-hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
              </div>
              <div className="p-8">
                <div className="mb-4 flex gap-2">
                  <span className="rounded-full border border-brand-accent/30 bg-brand-accent/10 px-3 py-1 text-xs font-medium text-brand-accent">Media</span>
                  <span className="rounded-full border border-brand-border bg-brand-bg px-3 py-1 text-xs font-medium text-brand-muted">Content Strategy</span>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-brand-text">The Peak View Stories</h3>
                <div className="space-y-2 text-sm text-brand-muted">
                  <p><strong className="text-brand-text font-medium">Context:</strong> Independent news platform scaling in competitive niche.</p>
                  <p><strong className="text-brand-text font-medium">Lever:</strong> Hyper-local SEO & viral storytelling loops.</p>
                  <p><strong className="text-brand-text font-medium">Outcome:</strong> 1.2M monthly active readers reached organically.</p>
                </div>
              </div>
            </Link>

            {/* Project 3 */}
            <Link to="/work/business-standard" className="group block overflow-hidden rounded-2xl border border-brand-border bg-brand-card transition-colors hover:border-brand-accent/50">
              <div className="aspect-[16/9] w-full overflow-hidden bg-brand-bg p-8">
                <img src="https://picsum.photos/seed/newspaper/800/450" alt="Business Standard" className="h-full w-full object-cover rounded-lg opacity-80 group-hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
              </div>
              <div className="p-8">
                <div className="mb-4 flex gap-2">
                  <span className="rounded-full border border-brand-accent/30 bg-brand-accent/10 px-3 py-1 text-xs font-medium text-brand-accent">B2B</span>
                  <span className="rounded-full border border-brand-border bg-brand-bg px-3 py-1 text-xs font-medium text-brand-muted">Branding</span>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-brand-text">Business Standard</h3>
                <div className="space-y-2 text-sm text-brand-muted">
                  <p><strong className="text-brand-text font-medium">Context:</strong> Transitioning a legacy print giant to subscription-first.</p>
                  <p><strong className="text-brand-text font-medium">Lever:</strong> Conversion rate optimization (CRO) on paywall funnels.</p>
                  <p><strong className="text-brand-text font-medium">Outcome:</strong> 25% lift in digital subscription revenue in 6 months.</p>
                </div>
              </div>
            </Link>

            {/* Project 4 */}
            <Link to="/work" className="group block overflow-hidden rounded-2xl border border-brand-border bg-brand-card transition-colors hover:border-brand-accent/50">
              <div className="aspect-[16/9] w-full overflow-hidden bg-brand-bg p-8">
                <img src="https://picsum.photos/seed/network/800/450" alt="Digital PR Authority Engine" className="h-full w-full object-cover rounded-lg opacity-80 group-hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
              </div>
              <div className="p-8">
                <div className="mb-4 flex gap-2">
                  <span className="rounded-full border border-brand-accent/30 bg-brand-accent/10 px-3 py-1 text-xs font-medium text-brand-accent">SaaS</span>
                  <span className="rounded-full border border-brand-border bg-brand-bg px-3 py-1 text-xs font-medium text-brand-muted">Scale</span>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-brand-text">Digital PR Authority Engine</h3>
                <div className="space-y-2 text-sm text-brand-muted">
                  <p><strong className="text-brand-text font-medium">Context:</strong> Automated PR tool for high-growth startups.</p>
                  <p><strong className="text-brand-text font-medium">Lever:</strong> Product-led growth (PLG) via free value-add reports.</p>
                  <p><strong className="text-brand-text font-medium">Outcome:</strong> Acquired 50+ enterprise clients in Q1 launch phase.</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="border-t border-brand-border bg-brand-bg py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="mb-8 text-xs font-semibold uppercase tracking-widest text-brand-muted">Trusted By & Featured In</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 grayscale transition-all hover:grayscale-0">
            <span className="text-xl font-bold text-brand-text">Business Standard</span>
            <span className="text-xl font-bold italic text-brand-text">RankSoldier</span>
            <span className="text-xl font-bold text-brand-text">RankerzMedia</span>
            <span className="text-xl font-bold text-brand-text uppercase tracking-tighter">THE PEAK VIEW</span>
            <span className="text-xl font-bold text-brand-text">Forbes</span>
          </div>
        </div>
      </section>

      {/* The Long Game */}
      <section className="border-t border-brand-border bg-brand-bg py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-16 rounded-3xl bg-brand-card p-12 md:flex-row lg:p-24">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-brand-text md:text-4xl">The Long Game</h2>
              <p className="text-lg leading-relaxed text-brand-muted">
                Beyond spreadsheets and funnels, I believe growth is a byproduct of diverse experiences. Whether it's playing a high-stakes cricket match or building satire platforms that challenge the status quo, I look for systems in everything.
              </p>
              <p className="text-lg leading-relaxed text-brand-muted">
                I thrive on meeting new people and understanding the human stories behind the data. For me, marketing isn't just about selling; it's about building long-term belief systems.
              </p>
            </div>
            <div className="relative h-64 w-64 shrink-0 overflow-hidden rounded-full border-4 border-brand-accent/20 md:h-80 md:w-80">
              <img src="https://picsum.photos/seed/portrait/400/400" alt="Akshat Jain" className="h-full w-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-brand-accent/50"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
