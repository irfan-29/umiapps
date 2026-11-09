import { useRef } from 'react';
import UmiLogo from './UmiLogo';
import Icon from './Icon';
import Reveal from './Reveal';
import { stack } from '../data/site';

const chips = [
  { label: 'Hasanath', tone: '#34d399', className: 'stage-chip--1', delay: '-0.6s' },
  { label: 'Class', tone: '#818cf8', className: 'stage-chip--2', delay: '-2.4s' },
  { label: 'Blogz', tone: '#f472b6', className: 'stage-chip--3', delay: '-1.5s' },
  { label: 'SPG', tone: '#2dd4bf', className: 'stage-chip--4', delay: '-3.2s' },
];

export default function Hero() {
  const heroRef = useRef(null);

  // A soft light that follows the pointer makes the hero feel alive without
  // moving any layout. It is skipped entirely for touch and reduced motion.
  const onPointerMove = (event) => {
    const node = heroRef.current;
    if (!node || event.pointerType === 'touch') return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    node.style.setProperty('--my', `${event.clientY - rect.top}px`);
  };

  return (
    <section className="hero" id="top" ref={heroRef} onPointerMove={onPointerMove}>
      <div className="container hero-grid">
        <div className="hero-copy">
          <Reveal as="p" className="eyebrow">
            <span className="eyebrow-dot" />
            Independent software studio
          </Reveal>

          <Reveal as="h1" delay={70}>
            Apps that make <span className="grad-text">everyday life</span> feel
            lighter.
          </Reveal>

          <Reveal as="p" className="hero-lede" delay={140}>
            UMI Apps builds thoughtful tools for learning, writing, health and the
            web. Our flagship, Hasanath, helps people keep salah, Qur’an and good
            deeds close — and the rest of the shelf follows the same idea.
          </Reveal>

          <Reveal className="hero-actions" delay={210}>
            <a className="btn btn-primary" href="#work">
              Explore our work
              <Icon name="arrowDown" size={18} />
            </a>
            <a className="btn btn-ghost" href="#founder">
              Meet the founder
              <Icon name="arrow" size={17} />
            </a>
          </Reveal>

          <Reveal className="hero-meta" delay={280}>
            <div>
              <strong>6 products</strong>
              <span>shipped and counting</span>
            </div>
            <span className="hero-meta-line" aria-hidden="true" />
            <div>
              <strong>Founder-led</strong>
              <span>built close to the metal</span>
            </div>
            <span className="hero-meta-line" aria-hidden="true" />
            <div>
              <strong>Hasanath</strong>
              <span>our flagship product</span>
            </div>
          </Reveal>
        </div>

        <div className="hero-stage" aria-hidden="true">
          <span className="stage-glow" />
          <span className="orbit orbit-1" />
          <span className="orbit orbit-2" />

          <div className="stage-badge">
            <UmiLogo />
          </div>

          {chips.map((chip) => (
            <span
              key={chip.label}
              className={`stage-chip ${chip.className}`}
              style={{ animationDelay: chip.delay }}
            >
              <span className="stage-chip-dot" style={{ background: chip.tone }} />
              {chip.label}
            </span>
          ))}

          <span className="stage-note">
            <Icon name="spark" size={14} />
            Flagship product · Hasanath
          </span>
        </div>
      </div>

      <div className="container">
        <div className="stack-wrap">
          <span className="stack-label">Built with</span>
          <div className="marquee">
            <div className="marquee-track">
              {[...stack, ...stack].map((item, index) => (
                <span className="marquee-item" key={`${item}-${index}`}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
