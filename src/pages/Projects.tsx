import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Projects() {
  const filters = ["All Work", "Positioning", "GTM", "Research", "Unit Economics", "Lifecycle Growth", "0->1 Build"];

  const projects = [
    {
      id: "acko",
      title: "ACKO Insurance",
      subtitle: "General Insurance Disruptor",
      category: "FINTECH",
      image: "https://raw.githubusercontent.com/akshatjain4377-commits/Akshat-Jain-PMM-Portfolio/main/acko-insurance.png",
      strategicDecision: "Implementation of a highly accurate Risk-based pricing model to optimize premium competitiveness.",
      executionSummary: "Led multi-channel GTM for auto insurance, leveraging telematics data to personalize offerings.",
      outcome: "Reduced customer acquisition cost by 18% while improving risk assessment accuracy."
    },
    {
      id: "peak-view",
      title: "The Peak View Stories",
      subtitle: "Premium Lifestyle Publication",
      category: "MEDIA",
      image: "https://raw.githubusercontent.com/akshatjain4377-commits/Akshat-Jain-PMM-Portfolio/main/the-peak-view-stories.jpg",
      strategicDecision: "Pivot from broad lifestyle content to high-intent \"luxury travel\" and \"wealth management\" verticals.",
      executionSummary: "Developed a scalable content engine using semantic SEO and influencer partnerships.",
      outcome: "3.5x increase in organic high-intent traffic within 6 months."
    },
    {
      id: "business-standard",
      title: "Business Standard",
      subtitle: "Legacy Financial Daily",
      category: "LEGACY MEDIA",
      image: "https://raw.githubusercontent.com/akshatjain4377-commits/Akshat-Jain-PMM-Portfolio/main/business-standard.jpg",
      strategicDecision: "Revamping the subscription tier structure based on user consumption frequency data.",
      executionSummary: "Introduced behavioral triggers in the digital reading experience to prompt renewals.",
      outcome: "Achieved a 25% increase in annual subscription retention rates."
    },
    {
      id: "digital-pr",
      title: "Digital PR Authority Engine",
      subtitle: "SaaS Growth Engine",
      category: "SAAS GROWTH",
      image: "https://raw.githubusercontent.com/akshatjain4377-commits/Akshat-Jain-PMM-Portfolio/main/digital-pr.png",
      strategicDecision: "Automating authority-building through proprietary data reports and automated outreach.",
      executionSummary: "Built a system to convert internal data into pitchable PR assets for top-tier tech publications.",
      outcome: "Secured 40+ high-authority backlinks in 90 days with zero additional media spend."
    }
  ];

  return (
    <div className="min-h-screen bg-brand-bg">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
         <motion.div 
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.7 }}
  className="relative flex flex-1 items-center justify-center overflow-hidden rounded-3xl bg-brand-card lg:h-[400px] group"
>
  <img 
    src="https://raw.githubusercontent.com/akshatjain4377-commits/Akshat-Jain-PMM-Portfolio/main/work-section-hero.png"
    alt="Product Marketing Case Studies"
    className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
  />
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-bg/30 via-transparent to-brand-bg/20"></div>
  <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 shadow-[0_0_60px_rgba(20,184,166,0.15)]"></div>
</motion.div>
            
          <div className="flex-1 space-y-8 lg:pl-12">
            <span className="rounded-full border border-brand-accent/30 bg-brand-accent/10 px-4 py-2 text-xs font-semibold tracking-widest text-brand-accent">
              SELECTED WORK
            </span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl font-bold leading-[1.1] tracking-tight text-brand-text md:text-6xl"
            >
              STRATEGY IN ACTION
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-brand-muted"
            >
              Positioning. Research. GTM. Growth Systems.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a href="#case-studies" className="rounded-full bg-brand-accent px-8 py-4 text-sm font-semibold text-brand-bg hover:bg-brand-accent-hover transition-colors">
                View Case Studies
              </a>
              <Link to="/contact" className="rounded-full border border-brand-border bg-brand-card px-8 py-4 text-sm font-semibold text-brand-text hover:bg-brand-border transition-colors">
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Filters */}
      <section className="border-t border-brand-border bg-brand-bg py-8 sticky top-16 z-40 backdrop-blur-md bg-brand-bg/90">
        <div className="mx-auto flex max-w-7xl items-center gap-8 overflow-x-auto px-6 pb-4 md:pb-0 hide-scrollbar">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-muted shrink-0">EXPERTISE</span>
          <div className="flex items-center gap-3">
            {filters.map((filter, i) => (
              <button 
                key={i}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-medium transition-colors ${
                  i === 0 
                    ? 'bg-brand-accent text-brand-bg' 
                    : 'border border-brand-border bg-brand-card text-brand-text hover:border-brand-accent/50'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section id="case-studies" className="bg-brand-bg py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects.map((project, i) => (
              <Link 
                key={i} 
                to={`/work/${project.id}`} 
                className="group flex flex-col overflow-hidden rounded-3xl border border-brand-border bg-brand-card transition-colors hover:border-brand-accent/30"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-brand-bg">
                  <div className="absolute left-6 top-6 z-10 rounded-sm bg-brand-bg/80 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-accent backdrop-blur-sm">
                    {project.category}
                  </div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
                
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="mb-1 text-2xl font-bold text-brand-text">{project.title}</h3>
                  <p className="mb-8 font-display text-sm italic text-brand-accent">{project.subtitle}</p>
                  
                  <div className="mb-6 space-y-2">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-muted">STRATEGIC DECISION</h4>
                    <p className="text-sm leading-relaxed text-brand-text/90">{project.strategicDecision}</p>
                  </div>
                  
                  <div className="mb-8 space-y-2">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-muted">EXECUTION SUMMARY</h4>
                    <p className="text-sm leading-relaxed text-brand-text/90">{project.executionSummary}</p>
                  </div>
                  
                  <div className="mt-auto border-l-2 border-brand-accent bg-brand-bg/50 p-4">
                    <h4 className="mb-1 text-[10px] font-bold uppercase tracking-widest text-brand-accent">OUTCOME</h4>
                    <p className="text-sm font-medium text-brand-text">{project.outcome}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-[40px] bg-brand-accent p-12 text-center md:p-24">
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-brand-bg md:text-5xl lg:text-6xl">
              Ready to build your next growth engine?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg font-medium text-brand-bg/80 md:text-xl">
              I help high-growth startups and legacy brands navigate complex markets through research-backed positioning and GTM excellence.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button className="rounded-full bg-brand-bg px-8 py-4 text-sm font-bold text-brand-accent hover:bg-brand-bg/90 transition-colors">
                Book a Strategy Call
              </button>
              <button className="rounded-full border-2 border-brand-bg px-8 py-4 text-sm font-bold text-brand-bg hover:bg-brand-bg/10 transition-colors">
                View LinkedIn
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
