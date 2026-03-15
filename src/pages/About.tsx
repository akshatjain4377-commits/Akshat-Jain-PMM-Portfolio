import { motion } from 'motion/react';
import { BookOpen, Search, Globe, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-brand-bg">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-1 space-y-8 lg:pr-12">
            <span className="rounded-full border border-brand-accent/30 bg-brand-accent/10 px-4 py-2 text-xs font-semibold tracking-widest text-brand-accent">
              THE HUMAN LAYER OF PRODUCT MARKETING
            </span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl font-bold leading-[1.1] tracking-tight text-brand-text md:text-6xl lg:text-7xl"
            >
              Beyond the <br /> Spreadsheets. 
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-xl text-xl text-brand-muted"
            >
              I believe growth is not just analytics and dashboards. <br />
It is about understanding people, narratives, and the systems that make products win.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative flex h-[400px] w-full flex-1 items-center justify-center overflow-hidden rounded-3xl bg-brand-card lg:h-[600px]"
          >
            <img 
              src="https://raw.githubusercontent.com/akshatjain4377-commits/Akshat-Jain-PMM-Portfolio/main/akshat-jain-about.jpg" 
              alt="Akshat Jain" 
              className="h-full w-full object-cover opacity-80 grayscale transition-all duration-700 hover:grayscale-0" 
              referrerPolicy="no-referrer" 
            />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-brand-border"></div>
          </motion.div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="border-t border-brand-border bg-brand-bg py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 max-w-2xl">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-brand-text md:text-4xl">How I Think About Growth</h2>
            <p className="text-lg text-brand-muted">The foundational beliefs that guide how I approach markets, positioning, and growth systems.</p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Search className="h-6 w-6 text-brand-accent" />,
                title: "Curiosity First",
                desc: "Never accept the first answer. The real insight is usually three 'whys' deep."
              },
              {
                icon: <Globe className="h-6 w-6 text-brand-accent" />,
                title: "Systemic Thinking",
                desc: "Marketing isn't isolated. It's a system that connects product, sales, and customer success."
              },
              {
                icon: <Zap className="h-6 w-6 text-brand-accent" />,
                title: "Bias for Action",
                desc: "A good plan violently executed now is better than a perfect plan executed next week."
              },
              {
                icon: <BookOpen className="h-6 w-6 text-brand-accent" />,
                title: "Continuous Learning",
                desc: "The market changes daily. If you aren't learning, you're becoming obsolete."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col rounded-2xl border border-brand-border bg-brand-card p-8"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-brand-bg border border-brand-border">
                  {item.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-brand-text">{item.title}</h3>
                <p className="text-sm leading-relaxed text-brand-muted">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
<section className="border-t border-brand-border bg-brand-bg py-24">
  <div className="mx-auto max-w-3xl px-6">

    <h2 className="mb-16 text-center text-3xl font-bold tracking-tight text-brand-text md:text-4xl">
      How I Learned to Build Growth Systems
    </h2>

    <div className="space-y-12">
      {[
        {
          year: "2024 - Present",
          role: "Founder",
          company: "The Peak View Stories",
          desc: "Built and launched a satire news platform end-to-end — from website and editorial positioning to distribution. Scaled organic reach with multiple posts crossing 1.5M+ views while earning PR mentions as the platform’s founder."
        },
        {
          year: "2023 - Present",
          role: "SEO Executive",
          company: "Business Standard",
          desc: "Driving organic growth for the Markets & Companies section by optimizing high-intent financial coverage including IPO stories, earnings, and company pages. Working on improving discoverability and user journeys across financial content."
        },
        {
          year: "2021 - 2022",
          role: "Digital PR & Content Strategist",
          company: "RankSoldier",
          desc: "Built authority and thought leadership for founders through journalist platforms like HARO, Terkel, SourceBottle, and Qwoted. Secured high-authority mentions including Forbes while managing outreach operations and editorial responses."
        },
        {
          year: "2021",
          role: "Market Research Intern",
          company: "Explorra Design Institute",
          desc: "Conducted market research across Tier 1 and Tier 2 colleges by building structured datasets of Deans, HODs, and placement cells to support institutional outreach initiatives."
        }
      ].map((exp, i) => (
        <div key={i} className="relative pl-8 md:pl-0">
          <div className="md:flex md:items-baseline md:justify-between">

            <div className="mb-2 md:mb-0 md:w-1/4">
              <span className="text-sm font-bold text-brand-accent">
                {exp.year}
              </span>
            </div>

            <div className="md:w-3/4 md:pl-8 md:border-l md:border-brand-border">
              <h3 className="text-xl font-bold text-brand-text">
                {exp.role}
              </h3>

              <h4 className="mb-4 font-display text-sm italic text-brand-muted">
                {exp.company}
              </h4>

              <p className="text-brand-muted leading-relaxed">
                {exp.desc}
              </p>
            </div>

          </div>

          {/* Mobile timeline line */}
          <div className="absolute left-0 top-2 bottom-[-3rem] w-px bg-brand-border md:hidden last:bottom-0"></div>
          <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-brand-accent md:hidden"></div>

        </div>
      ))}
    </div>

  </div>
</section>
    </div>
  );
}
