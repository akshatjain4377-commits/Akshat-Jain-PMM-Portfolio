import { useRef, useState, type PointerEvent } from 'react';
import {
  ArrowDown, ArrowRight, ArrowUpRight, BookOpen, Compass,
  MessageSquareText, Radar, Rocket, Target, TrendingUp, type LucideIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';

type ModuleId = 'market' | 'positioning' | 'narrative' | 'gtm' | 'growth';

type CapabilityModule = {
  id: ModuleId;
  number: string;
  title: string;
  short: string;
  description: string;
  approach: string;
  areas: string[];
  evidence: string;
  icon: LucideIcon;
  link: string;
  linkLabel: string;
  type: string;
};

const modules: CapabilityModule[] = [
  {
    id: 'market', number: '01', title: 'Market intelligence', short: 'Understand the market.',
    description: 'Start with what customers are trying to do, the alternatives they already consider, and the signals that reveal where a product can matter.',
    approach: 'I look for the behaviour behind the brief: search intent, customer language, competitor choices and the moments where expectations are not being met.',
    areas: ['Customer and audience insight', 'Search behaviour', 'Competitive context', 'Market opportunity'],
    evidence: 'Business Standard', icon: Radar, link: '/work/business-standard', linkLabel: 'See the Business Standard work', type: 'Signals before assumptions',
  },
  {
    id: 'positioning', number: '02', title: 'Positioning', short: 'Find the reason to choose.',
    description: 'Give a product a clear place in the market by connecting the audience, the problem, the alternatives and the value that makes the choice meaningful.',
    approach: 'I work from customer context towards a defensible value proposition. The aim is not a clever line. It is a choice the product, marketing and sales teams can consistently explain.',
    areas: ['Audience and ICP', 'Category and alternatives', 'Differentiation', 'Value proposition'],
    evidence: 'ACKO capstone', icon: Target, link: '/work/acko', linkLabel: 'Explore the positioning capstone', type: 'The reason behind the choice',
  },
  {
    id: 'narrative', number: '03', title: 'Product narrative', short: 'Make the value understandable.',
    description: 'Translate product capability into a story customers can recognise, understand and repeat across the website, content and sales conversations.',
    approach: 'I connect the product story to the customer problem, then carry that logic into messaging, landing pages, sales narratives and useful content.',
    areas: ['Messaging architecture', 'Product storytelling', 'Website narrative', 'Sales enablement'],
    evidence: 'Refrens experience', icon: MessageSquareText, link: '/about', linkLabel: 'See professional experience', type: 'A story people can use',
  },
  {
    id: 'gtm', number: '04', title: 'Go-to-market', short: 'Take the product to market.',
    description: 'Bring product, marketing and sales decisions together around a focused launch or market opportunity.',
    approach: 'I think about the audience, the message, the route to market, the teams involved and the feedback loop before treating a launch as a list of assets.',
    areas: ['Launch planning', 'Channel and campaign choices', 'Cross-functional alignment', 'Sales readiness'],
    evidence: 'Refrens and Business Standard', icon: Rocket, link: '/about', linkLabel: 'Explore the experience', type: 'From strategy to execution',
  },
  {
    id: 'growth', number: '05', title: 'Growth & adoption', short: 'Help the product keep earning attention.',
    description: 'Connect discovery, conversion and ongoing use. Growth is stronger when the story, the experience and the channels reinforce each other.',
    approach: 'My SEO and growth background helps me connect how people discover a product with what they find when they arrive, and what gives them a reason to continue.',
    areas: ['Organic discovery', 'Acquisition and conversion', 'Content distribution', 'Adoption signals'],
    evidence: 'Business Standard and The Peak View Stories', icon: TrendingUp, link: '/work', linkLabel: 'Explore selected work', type: 'Discovery through adoption',
  },
];

const projects = [
  {
    id: 'business-standard', name: 'Business Standard', kind: 'PROFESSIONAL EXPERIENCE',
    discipline: 'Growth · Search intelligence · Product proposals',
    image: 'https://raw.githubusercontent.com/akshatjain4377-commits/Akshat-Jain-PMM-Portfolio/main/business-standard.jpg',
    question: 'How could high-intent financial pages become more useful to investors?',
    signal: 'Priority search terms moved from an average position of 8.2 to 5.0.',
  },
  {
    id: 'acko', name: 'ACKO Insurance', kind: 'PMM CAPSTONE',
    discipline: 'Positioning · GTM strategy',
    image: 'https://raw.githubusercontent.com/akshatjain4377-commits/Akshat-Jain-PMM-Portfolio/main/acko-insurance.png',
    question: 'How might motor scale help ACKO earn trust in health insurance?',
    signal: 'A proposed retention-led cross-sell model. The economics are projections, not shipped results.',
  },
  {
    id: 'peak-view', name: 'The Peak View Stories', kind: 'INDEPENDENT BUILD',
    discipline: '0 to 1 brand · Content · Distribution',
    image: 'https://raw.githubusercontent.com/akshatjain4377-commits/Akshat-Jain-PMM-Portfolio/main/the-peak-view-stories.jpg',
    question: 'Can a new media brand earn attention without paid spend or an existing audience?',
    signal: '1.5M+ organic reel views and 7,600 website users through SEO.',
  },
];

function ModuleIcon({ icon: Icon, size = 20 }: { icon: LucideIcon; size?: number }) {
  return <Icon size={size} strokeWidth={1.7} aria-hidden="true" />;
}

export default function Landing() {
  const [activeModule, setActiveModule] = useState<ModuleId>('positioning');
  const sceneRef = useRef<HTMLDivElement>(null);
  const current = modules.find((item) => item.id === activeModule) ?? modules[1];

  const handleSceneMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'touch' || !sceneRef.current) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    sceneRef.current.style.setProperty('--scene-rotate-x', `${-y * 5}deg`);
    sceneRef.current.style.setProperty('--scene-rotate-y', `${x * 6}deg`);
  };

  const resetSceneMove = () => {
    sceneRef.current?.style.setProperty('--scene-rotate-x', '0deg');
    sceneRef.current?.style.setProperty('--scene-rotate-y', '0deg');
  };

  return (
    <main className="product-tour-page">
      <section className="product-tour-hero" id="overview">
        <div className="product-tour-hero__ambient" aria-hidden="true" />
        <div className="product-tour-hero__inner">
          <div className="product-tour-intro">
            <p className="product-eyebrow"><span /> Product marketing portfolio</p>
            <h1 className="product-tour-headline">I work on whether products are <em>worth finding.</em></h1>
            <p className="product-tour-subhead">I spent years understanding how buyers find products. Now I write about the stories that make the difference.</p>
            <p className="product-tour-summary">I’m a Product Marketing Manager at Refrens, working across the customer funnel for service businesses and traders. My background in SEO, audience insight and building a media brand shapes how I approach positioning, messaging and go-to-market.</p>
            <div className="product-tour-actions">
              <a className="product-button product-button--primary" href="#capabilities">Take the product tour <ArrowRight size={16} aria-hidden="true" /></a>
              <Link className="product-button product-button--quiet" to="/work">View selected work <ArrowUpRight size={16} aria-hidden="true" /></Link>
            </div>
            <div className="product-tour-proof">
              <div><strong>8.2 <span>→</span> 5.0</strong><small>Average search position</small></div>
              <div><strong>1.5M<span>+</span></strong><small>Organic reel views</small></div>
              <div><strong>0 <span>→</span> 1</strong><small>Independent media brand</small></div>
            </div>
            <a href="#capabilities" className="product-scroll-cue"><span className="product-scroll-cue__line" />Scroll to explore the system <ArrowDown size={13} aria-hidden="true" /></a>
          </div>

          <div className="product-tour-showcase">
            <div className="product-showcase-heading">
              <div><p className="product-eyebrow">The product marketing system</p><h2>Five connected capabilities.</h2></div>
              <span className="product-showcase-index">01 / 05</span>
            </div>

            <div className="catalogue-scene" ref={sceneRef} onPointerMove={handleSceneMove} onPointerLeave={resetSceneMove}>
              <div className="catalogue-scene__world">
              <div className="catalogue-scene__backdrop" aria-hidden="true" />
              <div className="catalogue-scene__orbit catalogue-scene__orbit--outer" aria-hidden="true" />
              <div className="catalogue-scene__orbit catalogue-scene__orbit--inner" aria-hidden="true" />
              <div className="catalogue-scene__platform catalogue-scene__platform--back" aria-hidden="true" />
              <div className="catalogue-scene__platform catalogue-scene__platform--front" aria-hidden="true" />
              <div className="catalogue-scene__core">
                <div className="catalogue-scene__core-glow" />
                <span className="catalogue-scene__core-kicker">Connected system</span>
                <strong>PMM</strong><span>PRODUCT<br />MARKETING</span><i />
              </div>

              {modules.map((item) => {
                const selected = activeModule === item.id;
                return (
                  <button type="button" key={item.id} className={`catalogue-module catalogue-module--${item.id} ${selected ? 'is-active' : ''}`}
                    aria-pressed={selected} onClick={() => setActiveModule(item.id)} onFocus={() => setActiveModule(item.id)}>
                    <span className="catalogue-module__topline"><span>{item.number}</span><span>{selected ? 'Selected' : 'Explore'}</span></span>
                    <span className="catalogue-module__icon"><ModuleIcon icon={item.icon} size={20} /></span>
                    <strong>{item.title}</strong><small>{item.short}</small>
                    <span className="catalogue-module__shine" aria-hidden="true" />
                  </button>
                );
              })}
              <div className="catalogue-scene__annotation catalogue-scene__annotation--left">Customer context</div>
              <div className="catalogue-scene__annotation catalogue-scene__annotation--right">Market to momentum</div>
              </div>
            </div>

            <div className="catalogue-inspector" aria-live="polite">
              <div className="catalogue-inspector__icon"><ModuleIcon icon={current.icon} size={20} /></div>
              <div className="catalogue-inspector__copy">
                <p className="product-eyebrow">Module {current.number} / {current.type}</p>
                <h3>{current.short}</h3><p>{current.description}</p>
              </div>
              <Link to={current.link} className="catalogue-inspector__link">{current.linkLabel} <ArrowUpRight size={15} aria-hidden="true" /></Link>
            </div>
            <p className="catalogue-instruction"><Compass size={13} aria-hidden="true" /> Select a capability to explore the thinking, work and writing behind it.</p>
          </div>
        </div>
      </section>

      <section className="capability-catalogue" id="capabilities">
        <div className="product-section-heading">
          <div><p className="product-eyebrow">Inside the catalogue / 01—05</p><h2>What goes into making a product <em>matter.</em></h2></div>
          <p>Explore each discipline. See the approach behind it, then follow the connections to actual work and ideas.</p>
        </div>

        <div className="capability-layout">
          <div className="capability-selector" role="tablist" aria-label="Product marketing capabilities">
            {modules.map((item) => {
              const selected = activeModule === item.id;
              return (
                <button type="button" key={item.id} role="tab" aria-selected={selected} aria-controls="capability-panel"
                  className={`capability-selector__item ${selected ? 'is-active' : ''}`} onClick={() => setActiveModule(item.id)}>
                  <span className="capability-selector__number">{item.number}</span>
                  <span className="capability-selector__icon"><ModuleIcon icon={item.icon} size={18} /></span>
                  <span className="capability-selector__label">{item.title}</span><ArrowUpRight size={15} aria-hidden="true" />
                </button>
              );
            })}
          </div>

          <div className="capability-detail-panel" id="capability-panel" role="tabpanel">
            <div className="capability-detail-panel__visual">
              <div className="capability-detail-panel__orbit" aria-hidden="true" />
              <div className="capability-detail-panel__visual-core"><ModuleIcon icon={current.icon} size={34} /><span>{current.number}</span></div>
              <p>{current.type}</p>
            </div>
            <div className="capability-detail-panel__content">
              <p className="product-eyebrow">Capability / {current.number}</p>
              <h3>{current.title}</h3>
              <p className="capability-detail-panel__lead">{current.description}</p>
              <p>{current.approach}</p>
              <div className="capability-tags">{current.areas.map((area) => <span key={area}>{area}</span>)}</div>
              <div className="capability-detail-panel__evidence"><span>Connected experience</span><strong>{current.evidence}</strong></div>
              <Link to={current.link} className="product-button product-button--primary">{current.linkLabel} <ArrowUpRight size={15} aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="product-work-section" id="work">
        <div className="product-section-heading">
          <div><p className="product-eyebrow">Selected work / Proof in practice</p><h2>Ideas are interesting.<br /><em>Evidence is better.</em></h2></div>
          <Link to="/work" className="product-text-link">All selected work <ArrowUpRight size={15} aria-hidden="true" /></Link>
        </div>
        <div className="product-project-grid">
          {projects.map((project, index) => (
            <article className="product-project-card" key={project.id}>
              <Link to={`/work/${project.id}`} className="product-project-card__image">
                <img src={project.image} alt={`${project.name} project preview`} loading="lazy" />
                <span className="product-project-card__index">0{index + 1}</span><span className="product-project-card__open"><ArrowUpRight size={17} aria-hidden="true" /></span>
              </Link>
              <div className="product-project-card__body">
                <p className="product-eyebrow">{project.kind}</p><h3><Link to={`/work/${project.id}`}>{project.name}</Link></h3>
                <p className="product-project-card__discipline">{project.discipline}</p><p>{project.question}</p>
                <div className="product-project-card__signal">{project.signal}</div>
                <Link to={`/work/${project.id}`} className="product-text-link">Explore project <ArrowRight size={14} aria-hidden="true" /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="product-experience-section" id="experience">
        <div className="product-experience-section__intro">
          <p className="product-eyebrow">The person behind the system</p>
          <h2>Experience shaped by <em>building and learning.</em></h2>
          <p>Product marketing is the current chapter. Search, audience insight and building something from zero shaped the way I got here.</p>
          <Link to="/about" className="product-button product-button--outline">Explore my story <ArrowUpRight size={15} aria-hidden="true" /></Link>
        </div>
        <div className="product-experience-list">
          <article className="product-experience-item product-experience-item--current">
            <span className="product-experience-item__number">01</span>
            <div><p className="product-eyebrow">Current experience</p><h3>Refrens</h3><strong>Product Marketing Manager</strong>
              <p>Working across the customer funnel for service businesses and traders, connecting positioning, messaging and go-to-market execution with product and customer needs.</p>
              <span className="product-experience-item__note">Professional experience · Case studies to follow</span>
            </div><span className="product-experience-item__status">Current</span>
          </article>
          <article className="product-experience-item">
            <span className="product-experience-item__number">02</span>
            <div><p className="product-eyebrow">Growth and search intelligence</p><h3>Business Standard</h3><strong>SEO Executive · Growth & GTM Strategy</strong>
              <p>Worked across high-intent financial categories, GTM initiatives and cross-functional product proposals. Improved average position on priority terms from 8.2 to 5.0.</p>
            </div><span className="product-experience-item__status">2023–2026</span>
          </article>
          <article className="product-experience-item">
            <span className="product-experience-item__number">03</span>
            <div><p className="product-eyebrow">Independent build</p><h3>The Peak View Stories</h3><strong>Founder</strong>
              <p>Built a media brand from zero across positioning, content, website and Instagram distribution. Grew to 1.5M+ organic reel views.</p>
            </div><span className="product-experience-item__status">0 to 1</span>
          </article>
        </div>
      </section>

      <section className="product-field-notes" id="field-notes">
        <div className="product-field-notes__heading">
          <div><p className="product-eyebrow"><BookOpen size={14} aria-hidden="true" /> The Second Draft / Field notes</p><h2>Ideas, frameworks and marketing observations.</h2></div>
          <Link to="/writing" className="product-text-link">All writing <ArrowUpRight size={15} aria-hidden="true" /></Link>
        </div>
        <div className="product-article-grid">
          <article className="product-article-card product-article-card--featured">
            <span className="product-article-card__type">Published newsletter</span><h3>Before You Rewrite That Landing Page, Ask These Four Questions</h3>
            <p>A practical pause before opening the copy document: check the problem, audience, promise and evidence first.</p>
            <Link to="/writing" className="product-text-link">Read the field notes <ArrowRight size={14} aria-hidden="true" /></Link>
          </article>
          <article className="product-article-card">
            <span className="product-article-card__type">In development</span><h3>Is Your Brand Running Without a Positioning?</h3>
            <p>When a documented positioning statement is missing, customers still form a perception. The question is whether your teams tell one coherent story.</p>
            <Link to="/writing" className="product-text-link">Explore The Second Draft <ArrowRight size={14} aria-hidden="true" /></Link>
          </article>
          <article className="product-article-card product-article-card--dark">
            <span className="product-article-card__type">Useful resources</span><h3>Tools for thinking more clearly.</h3>
            <p>Practical checklists, audits and working documents for positioning, messaging and go-to-market.</p>
            <Link to="/resources" className="product-button product-button--light">Explore resources <ArrowUpRight size={14} aria-hidden="true" /></Link>
          </article>
        </div>
      </section>

      <section className="product-tour-cta">
        <div><p className="product-eyebrow">Have a product story to figure out?</p><h2>Let's connect the dots.</h2>
          <p>For a conversation about product marketing, positioning, go-to-market or a good question worth exploring.</p>
        </div>
        <div className="product-tour-cta__actions">
          <Link to="/contact" className="product-button product-button--light">Start a conversation <ArrowUpRight size={15} aria-hidden="true" /></Link>
          <a href="https://www.linkedin.com/in/akshatjain1102/" target="_blank" rel="noreferrer" className="product-cta-link">Find me on LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></a>
        </div>
      </section>
    </main>
  );
}
