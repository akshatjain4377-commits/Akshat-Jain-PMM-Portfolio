import { useEffect, useState } from 'react';

function FunnelCar() {
  return (
    <svg className="scroll-car-progress__vehicle" viewBox="0 0 120 48" aria-hidden="true">
      <g className="scroll-car-progress__body">
        <path d="M12 28 L20 25 L30 14 Q34 10 42 10 L72 10 Q80 10 87 18 L97 22 L108 24 L113 29 L113 34 L8 34 L8 30 Z" fill="var(--color-brand-accent)" />
        <path d="M34 14 Q37 12 42 12 L53 12 L53 22 L25 22 Z" fill="var(--color-brand-card)" opacity="0.94" />
        <path d="M57 12 L71 12 Q78 12 84 20 L57 20 Z" fill="var(--color-brand-card)" opacity="0.94" />
        <path d="M10 29 L23 29 L20 32 L10 32 Z" fill="var(--color-brand-text)" />
        <path d="M99 24 L111 26 L113 29 L100 29 Z" fill="var(--color-brand-text)" />
        <path d="M27 25 L91 25" stroke="var(--color-brand-card)" strokeWidth="1.2" opacity="0.65" />
      </g>
      <g className="scroll-car-progress__wheel scroll-car-progress__wheel--rear">
        <circle cx="31" cy="34" r="9" fill="var(--color-brand-text)" />
        <circle cx="31" cy="34" r="4.5" fill="var(--color-brand-card)" />
        <path d="M31 30 V38 M27 34 H35 M28.2 31.2 L33.8 36.8 M33.8 31.2 L28.2 36.8" stroke="var(--color-brand-muted)" strokeWidth="1" />
      </g>
      <g className="scroll-car-progress__wheel scroll-car-progress__wheel--front">
        <circle cx="91" cy="34" r="9" fill="var(--color-brand-text)" />
        <circle cx="91" cy="34" r="4.5" fill="var(--color-brand-card)" />
        <path d="M91 30 V38 M87 34 H95 M88.2 31.2 L93.8 36.8 M93.8 31.2 L88.2 36.8" stroke="var(--color-brand-muted)" strokeWidth="1" />
      </g>
    </svg>
  );
}

export default function ScrollCarProgress() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const funnel = document.querySelector<HTMLElement>('.funnel-journey');
        const funnelTop = funnel ? funnel.getBoundingClientRect().top + window.scrollY : 0;
        const funnelLength = funnel ? Math.max(1, funnel.offsetHeight - window.innerHeight * 0.65) : Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        const next = Math.max(0, Math.min(1, (window.scrollY - funnelTop) / funnelLength));
        setProgress(next);
        setVisible(window.scrollY > 100);
      });
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const stage = progress < 0.36 ? 'Discover' : progress < 0.72 ? 'Evaluate' : 'Connect';
  const position = 7 + progress * 86;

  return (
    <div
      className={`scroll-car-progress ${visible ? 'scroll-car-progress--visible' : ''}`}
      role="progressbar"
      aria-label="Journey through the marketing funnel"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress * 100)}
      aria-valuetext={`${stage} stage`}
      data-stage={stage.toLowerCase()}
    >
      <div className="scroll-car-progress__inner">
        <div className="scroll-car-progress__track" />
        <div className="scroll-car-progress__fill" style={{ width: `${progress * 86}%` }} />
        <span className="scroll-car-progress__stop scroll-car-progress__stop--discover" />
        <span className="scroll-car-progress__stop scroll-car-progress__stop--evaluate" />
        <span className="scroll-car-progress__stop scroll-car-progress__stop--connect" />
        <span className="scroll-car-progress__label scroll-car-progress__label--discover">Discover</span>
        <span className="scroll-car-progress__label scroll-car-progress__label--evaluate">Evaluate</span>
        <span className="scroll-car-progress__label scroll-car-progress__label--connect">Connect</span>
        <div className="scroll-car-progress__car" style={{ left: `${position}%` }}>
          <FunnelCar />
        </div>
      </div>
      <span className="scroll-car-progress__sr-only">Scroll progress: {stage}</span>
    </div>
  );
}
