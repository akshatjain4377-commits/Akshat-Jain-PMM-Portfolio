import { motion } from 'motion/react';

import { Search, Target, Rocket, TrendingUp } from 'lucide-react';

export default function About() {

  return (

    <div className="min-h-screen bg-brand-bg">

      {/* ── HERO ── */}

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

      {/* ── STORY ── unchanged — this is the strongest section, leave it alone */}

      <section className="border-t border-brand-border bg-brand-bg py-24">

        <div className="mx-auto max-w-3xl px-6">

          <h2 className="mb-8 text-3xl font-bold tracking-tight text-brand-text md:text-4xl">

            Why Product Marketing Made Sense

          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-brand-muted">

            <p>

              I didn't discover product marketing through a job title. I discovered it through a pattern.

            </p>

            <p>

              Early in my career, most of my work revolved around understanding audiences, shaping narratives, and figuring out how information moves across the internet. Whether it was researching markets, building digital authority, or improving distribution systems, the same question kept appearing:

            </p>

            <p className="text-brand-text font-medium">

              Why do some ideas gain momentum while others remain invisible?

            </p>

            <p>

              That curiosity eventually led me to build <span className="text-brand-text font-medium">The Peak View Stories</span> — a satire news platform I launched as an experiment in narrative, audience psychology, and distribution.

            </p>

            <p>

              What started as a creative project quickly became a learning lab. I was thinking about positioning, content loops, audience behaviour, and growth systems all at once. A couple of posts crossed <span className="text-brand-text font-medium">1.5M+ views organically</span>, and for the first time I could see how the entire growth loop worked — from idea to reach to engagement.

            </p>

            <p>

              That experience changed how I looked at marketing. It stopped being about isolated tactics and started feeling like a system connecting product, narrative, and distribution.

            </p>

            <p className="text-brand-text font-medium">

              That connected system is exactly what product marketing sits at the centre of.

            </p>

          </div>

        </div>

      </section>

      {/* ── CORE PRINCIPLES ── unchanged */}

      <section className="border-t border-brand-border bg-brand-bg py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16 max-w-2xl">

            <h2 className="mb-6 text-3xl font-bold tracking-tight text-brand-text md:text-4xl">

              How I Think About Product Growth

            </h2>

            <p className="text-lg text-brand-muted">

              The foundational beliefs that guide how I approach markets, positioning, and growth systems.

            </p>

          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[

              {

                icon: <Search className="h-6 w-6 text-brand-accent" />,

                title: "Customer Insight",

                desc: "Great positioning starts with understanding the customer deeply. Real insight usually sits a few layers beneath what users initially say."

              },

              {

                icon: <Target className="h-6 w-6 text-brand-accent" />,

                title: "Positioning & Messaging",

                desc: "Products compete in perception before they compete in features. Clear positioning and messaging define why the product matters and who it is for."

              },

              {

                icon: <Rocket className="h-6 w-6 text-brand-accent" />,

                title: "Go-to-Market Systems",

                desc: "Growth isn't a campaign. It is a coordinated system connecting product, marketing, sales, and distribution."

              },

              {

                icon: <TrendingUp className="h-6 w-6 text-brand-accent" />,

                title: "Distribution & Momentum",

                desc: "Even great products fail without distribution. The right narrative and channels turn launches into sustained momentum."

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

      {/* ── TIMELINE ── fixed dates, descriptions, added RankerzMedia and MBA */}

      <section className="border-t border-brand-border bg-brand-bg py-24">

        <div className="mx-auto max-w-3xl px-6">

          <h2 className="mb-16 text-center text-3xl font-bold tracking-tight text-brand-text md:text-4xl">

            How I Learned to Build Growth Systems

          </h2>

          <div className="space-y-12">

            {[

              {

                year: "2023 – Present",

                role: "SEO Executive — Growth & GTM Strategy",

                company: "Business Standard",

                desc: "Owned GTM execution for IPO season and high-intent financial events. Lifted core market rankings from position 8.2 → 5.0. Independently authored two cross-functional product proposals — for the IPO Tracker and Share Price pages — benchmarking competitors and presenting phased roadmaps to product and editorial stakeholders. Both proposals currently in the product pipeline."

              },

              {

                year: "2023 – Present",

                role: "Founder",

                company: "The Peak View Stories",

                desc: "Built and launched a satire news platform entirely from scratch — website, positioning, content system, and Instagram distribution. Grew a brand-new account to 1.5M+ organic reel views with zero paid spend. Secured personal earned media placements in Under30CEO, TechBullion, and CMO Times as Founder."

              },

              {

                year: "Oct 2022 – Feb 2023",

                role: "SEO Intern",

                company: "RankerzMedia",

                desc: "Worked on affiliate website SEO — keyword research, on-page optimisation, and content strategy for high-intent commercial queries. Hands-on experimentation that directly informed the Business Standard role."

              },

              {

                year: "Nov 2021 – Sep 2022",

                role: "Project Manager  (Promoted from Content Intern)",

                company: "RankSoldier Digital",

                desc: "Promoted from intern to Project Manager within 4 months. Built thought leadership pipelines for founders and CEOs using HARO, Qwoted, SourceBottle, and Terkel — securing a Forbes placement for a client, the team's first major earned media win. Managed a 10+ person cross-functional team across quality control, client management, and delivery."

              },

              {

                year: "Jul – Oct 2021",

                role: "Market Research Intern",

                company: "Explorra Design Institute",

                desc: "Built contact intelligence databases for Tier 1/2 city colleges — mapping decision-makers across Deans, HODs, and Placement Cells. First exposure to structured market segmentation and outreach strategy."

              }

            ].map((exp, i) => (

              <div key={i} className="relative pl-8 md:pl-0">

                <div className="md:flex md:items-baseline md:justify-between">

                  <div className="mb-2 md:mb-0 md:w-1/4">

                    <span className="text-sm font-bold text-brand-accent">{exp.year}</span>

                  </div>

                  <div className="md:w-3/4 md:pl-8 md:border-l md:border-brand-border">

                    <h3 className="text-xl font-bold text-brand-text">{exp.role}</h3>

                    <h4 className="mb-4 text-sm italic text-brand-muted">{exp.company}</h4>

                    <p className="text-brand-muted leading-relaxed">{exp.desc}</p>

                  </div>

                </div>

                <div className="absolute left-0 top-2 bottom-[-3rem] w-px bg-brand-border md:hidden last:bottom-0"></div>

                <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-brand-accent md:hidden"></div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ── EDUCATION ── added — missing from original */}

      <section className="border-t border-brand-border bg-brand-bg py-24">

        <div className="mx-auto max-w-3xl px-6">

          <h2 className="mb-12 text-3xl font-bold tracking-tight text-brand-text md:text-4xl">

            Education

          </h2>

          <div className="space-y-10">

            {[

              {

                year: "2021 – 2023",

                degree: "MBA — Marketing Management",

                institution: "SVKM's NMIMS",

                detail: "Consumer Behaviour · Brand Management · Digital Strategy · Marketing Analytics"

              },

              {

                year: "2018 – 2021",

                degree: "B.Sc. Mathematics",

                institution: "Gurukula Kangri University",

                detail: "Analytical foundation for data-led marketing decisions and experimentation design"

              }

            ].map((edu, i) => (

              <div key={i} className="md:flex md:items-baseline md:justify-between">

                <div className="mb-2 md:mb-0 md:w-1/4">

                  <span className="text-sm font-bold text-brand-accent">{edu.year}</span>

                </div>

                <div className="md:w-3/4 md:pl-8 md:border-l md:border-brand-border">

                  <h3 className="text-xl font-bold text-brand-text">{edu.degree}</h3>

                  <h4 className="mb-3 text-sm italic text-brand-muted">{edu.institution}</h4>

                  <p className="text-sm text-brand-muted">{edu.detail}</p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>

  );

}
