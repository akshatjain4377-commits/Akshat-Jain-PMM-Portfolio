import { useState } from 'react';
import { Gauge, MousePointer2, Zap } from 'lucide-react';

export default function RaceCar() {
  const [revving, setRevving] = useState(false);

  return (
    <div className="racecar-console">
      <div className="racecar-console__top">
        <div>
          <p className="race-micro">VEHICLE // AJ-01</p>
          <p className="racecar-console__title">THE STORYTELLER</p>
        </div>
        <span className={`race-status ${revving ? 'race-status--active' : ''}`}>
          <span aria-hidden="true" />
          {revving ? 'ENGINE LIVE' : 'STANDBY'}
        </span>
      </div>

      <div className={`racecar-stage ${revving ? 'racecar-stage--revving' : ''}`}>
        <div className="racecar-stage__orbit racecar-stage__orbit--one" aria-hidden="true" />
        <div className="racecar-stage__orbit racecar-stage__orbit--two" aria-hidden="true" />
        <div className="racecar-stage__crosshair racecar-stage__crosshair--one" aria-hidden="true" />
        <div className="racecar-stage__crosshair racecar-stage__crosshair--two" aria-hidden="true" />

        <button
          type="button"
          className="racecar-trigger"
          onClick={() => setRevving((value) => !value)}
          aria-pressed={revving}
          aria-label={revving ? 'Return the race car to idle' : 'Rev the race car engine'}
          title={revving ? 'Return to idle' : 'Tap to rev'}
        >
          <svg className="racecar-art" viewBox="0 0 900 270" role="img" aria-labelledby="racecar-title racecar-description">
            <title id="racecar-title">AJ-01 concept race car</title>
            <desc id="racecar-description">A custom red and graphite racing car side profile drawn for this portfolio.</desc>
            <defs>
              <linearGradient id="racecar-body" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#FF334F" />
                <stop offset="50%" stopColor="#D90429" />
                <stop offset="100%" stopColor="#8E001B" />
              </linearGradient>
              <linearGradient id="racecar-wing" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#4C525B" />
                <stop offset="100%" stopColor="#111318" />
              </linearGradient>
            </defs>

            <ellipse cx="475" cy="208" rx="370" ry="17" fill="currentColor" opacity="0.07" />

            <g className="racecar-wheel" transform="translate(269 177)">
              <circle r="43" fill="#101216" />
              <circle r="35" fill="#262B32" stroke="#737B86" strokeWidth="2" />
              <circle r="25" fill="#12151A" stroke="#454C55" strokeWidth="2" />
              <circle r="7" fill="#D90429" />
              {Array.from({ length: 8 }, (_, i) => (
                <line key={i} x1="0" y1="-10" x2="0" y2="-24" transform={`rotate(${i * 45})`} stroke="#A3A9B2" strokeWidth="2.5" strokeLinecap="round" />
              ))}
            </g>
            <g className="racecar-wheel" transform="translate(666 177)">
              <circle r="43" fill="#101216" />
              <circle r="35" fill="#262B32" stroke="#737B86" strokeWidth="2" />
              <circle r="25" fill="#12151A" stroke="#454C55" strokeWidth="2" />
              <circle r="7" fill="#D90429" />
              {Array.from({ length: 8 }, (_, i) => (
                <line key={i} x1="0" y1="-10" x2="0" y2="-24" transform={`rotate(${i * 45})`} stroke="#A3A9B2" strokeWidth="2.5" strokeLinecap="round" />
              ))}
            </g>

            <g>
              <path d="M100 139 L188 139 L196 149 L145 158 L102 158 Z" fill="url(#racecar-wing)" />
              <path d="M111 126 L195 126 L195 135 L111 135 Z" fill="#191C22" />
              <path d="M120 118 L197 118 L197 126 L120 126 Z" fill="#343A43" />
              <path d="M132 135 L149 135 L149 158 L132 158 Z" fill="url(#racecar-body)" />
              <path d="M145 158 L246 158 L272 146 L357 137 L398 111 L457 106 Q498 105 530 135 L588 139 L660 141 L721 154 L813 155 L813 170 L737 172 L706 187 L634 187 L614 164 L350 164 L332 187 L269 187 L244 165 L145 166 L105 171 L100 160 Z" fill="url(#racecar-body)" stroke="#8E001B" strokeWidth="2" />
              <path d="M345 139 L400 114 L457 110 Q489 110 516 136 L458 139 L416 145 Z" fill="#161A20" />
              <path d="M397 116 L455 112 Q485 113 508 134 L434 132 Z" fill="#353B44" />
              <path d="M425 109 Q460 72 498 104 L518 135 L488 133 L474 115 Q452 103 434 131 L409 133 Z" fill="#171A20" stroke="#69717B" strokeWidth="2" />
              <path d="M424 110 Q463 74 497 107" fill="none" stroke="#C0C4CA" strokeWidth="4" strokeLinecap="round" />
              <path d="M505 133 L581 138 L606 145 L533 145 Z" fill="#242931" />
              <path d="M604 145 L668 146 L721 158 L690 163 L635 159 Z" fill="#171A20" />
              <path d="M721 154 L824 154 L824 164 L735 166 Z" fill="url(#racecar-wing)" />
              <path d="M737 166 L828 166 L828 173 L732 173 Z" fill="#14171C" />
              <path d="M278 149 L333 143 L350 147 L319 154 L278 154 Z" fill="#FFFFFF" opacity="0.8" />
              <path d="M369 145 L388 145 L381 149 L362 149 Z" fill="#191C22" />
              <path d="M385 145 L404 145 L397 149 L378 149 Z" fill="#191C22" />
              <path d="M401 145 L420 145 L413 149 L394 149 Z" fill="#191C22" />
              <path d="M450 143 L490 143 L512 149 L450 149 Z" fill="#FFFFFF" opacity="0.9" />
              <path d="M145 161 L245 160 L259 164 L145 165 Z" fill="#F1F2F3" opacity="0.8" />
              <path d="M631 160 L695 163 L704 167 L634 166 Z" fill="#F1F2F3" opacity="0.8" />
              <path d="M121 174 L210 173 L226 179 L121 179 Z" fill="#14171C" />
              <path d="M740 176 L825 176 L825 181 L739 181 Z" fill="#14171C" />
              <circle cx="577" cy="153" r="4" fill="#D90429" />
              <circle cx="361" cy="153" r="4" fill="#F7F7F4" />
              <path d="M147 182 L215 182" stroke="#D90429" strokeWidth="3" />
              <path d="M707 186 L731 186" stroke="#D90429" strokeWidth="3" />
            </g>

            <g fill="none" stroke="currentColor" opacity="0.22">
              <path d="M70 225 H845" strokeWidth="1" />
              <path d="M118 230 H205 M221 230 H246 M302 230 H386 M420 230 H504 M541 230 H625 M681 230 H765" strokeDasharray="3 8" />
            </g>
            {revving && (
              <g className="racecar-speed-lines" stroke="#D90429" strokeWidth="3" strokeLinecap="round">
                <path d="M20 140 H89" />
                <path d="M36 153 H82" />
                <path d="M8 166 H72" />
              </g>
            )}
          </svg>
        </button>

        <div className="racecar-badge racecar-badge--top">
          <span className="race-micro">AERO / 01</span>
          <strong>BUILT TO CONNECT</strong>
        </div>
        <div className="racecar-badge racecar-badge--bottom">
          <span className="race-micro">RACE STRATEGY</span>
          <strong>INSIGHT → STORY → CHOICE</strong>
        </div>
      </div>

      <div className="race-telemetry">
        <div className="race-telemetry__item">
          <Gauge aria-hidden="true" />
          <span className="race-micro">RPM</span>
          <strong>{revving ? '9,600' : '1,200'}</strong>
        </div>
        <div className="race-telemetry__item">
          <Zap aria-hidden="true" />
          <span className="race-micro">SPEED</span>
          <strong>{revving ? '312' : '000'} <small>KM/H</small></strong>
        </div>
        <div className="race-telemetry__item race-telemetry__item--action">
          <MousePointer2 aria-hidden="true" />
          <span className="race-micro">{revving ? 'ENGINE LIVE' : 'CLICK TO REV'}</span>
          <strong>{revving ? 'FULL SEND' : 'READY'}</strong>
        </div>
      </div>
      <p className="racecar-hint" aria-live="polite">{revving ? 'That is the sound of a headline finally landing.' : 'Tap the car to rev. No lap time, just a little personality.'}</p>
    </div>
  );
}
