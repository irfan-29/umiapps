import { useId } from 'react';

// UMI's emblem: a circular launch window.
//
// The story is deliberately simple now — a warm sun rising behind geometric
// mountains, with a rocket climbing out of the valley. There is no road or
// ribbon, so nothing reads as a snake or a river running the wrong way. The
// mountain ridge forms an open "U" around the sun, and the rocket supplies the
// upward line.
//
// Every gradient id is per-instance so the nav, hero and footer can share a
// page without colliding.
export default function UmiLogo({
  className = '',
  animated = true,
  wordmark = false,
  title = 'UMI Apps',
}) {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const id = (name) => `umi-${name}-${uid}`;
  const url = (name) => `url(#${id(name)})`;

  return (
    <span
      className={`umi-logo${animated ? ' umi-logo--animated' : ''}${
        className ? ` ${className}` : ''
      }`}
    >
      <svg
        className="umi-logo__mark"
        viewBox="0 0 128 128"
        role="img"
        aria-label={title}
      >
        <defs>
          <linearGradient id={id('ring')} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#2dd4bf" />
            <stop offset="0.38" stopColor="#6366f1" />
            <stop offset="0.7" stopColor="#ff7a59" />
            <stop offset="1" stopColor="#ffd166" />
          </linearGradient>

          <radialGradient id={id('outerGlow')} cx="0.5" cy="0.5" r="0.5">
            <stop offset="0.7" stopColor="#ff8a3d" stopOpacity="0" />
            <stop offset="0.86" stopColor="#ff8a3d" stopOpacity="0.2" />
            <stop offset="1" stopColor="#ff8a3d" stopOpacity="0" />
          </radialGradient>

          <linearGradient id={id('sky')} x1="0" y1="0" x2="0.3" y2="1">
            <stop offset="0" stopColor="#050814" />
            <stop offset="0.38" stopColor="#0b1430" />
            <stop offset="0.7" stopColor="#1b2150" />
            <stop offset="1" stopColor="#3a2350" />
          </linearGradient>

          <radialGradient id={id('horizon')} cx="0.5" cy="0.62" r="0.62">
            <stop offset="0" stopColor="#ffb45c" stopOpacity="0.5" />
            <stop offset="0.45" stopColor="#ff6b6b" stopOpacity="0.22" />
            <stop offset="1" stopColor="#ff6b6b" stopOpacity="0" />
          </radialGradient>

          <radialGradient id={id('sun')} cx="0.5" cy="0.34" r="0.74">
            <stop offset="0" stopColor="#fff8d6" />
            <stop offset="0.32" stopColor="#ffd166" />
            <stop offset="0.68" stopColor="#ff9a4d" />
            <stop offset="1" stopColor="#ff5e7a" />
          </radialGradient>

          <radialGradient id={id('sunGlow')} cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#ffd166" stopOpacity="0.5" />
            <stop offset="0.5" stopColor="#ff8a3d" stopOpacity="0.16" />
            <stop offset="1" stopColor="#ff8a3d" stopOpacity="0" />
          </radialGradient>

          <linearGradient id={id('peakBack')} x1="0" y1="0" x2="0.24" y2="1">
            <stop offset="0" stopColor="#8ff5e4" />
            <stop offset="0.48" stopColor="#2dd4bf" />
            <stop offset="1" stopColor="#0f766e" />
          </linearGradient>

          <linearGradient id={id('peakMid')} x1="0" y1="0" x2="0.24" y2="1">
            <stop offset="0" stopColor="#7dd3fc" />
            <stop offset="0.5" stopColor="#3b82f6" />
            <stop offset="1" stopColor="#1e3a8a" />
          </linearGradient>

          <linearGradient id={id('peakFront')} x1="0" y1="0" x2="0.3" y2="1">
            <stop offset="0" stopColor="#26345f" />
            <stop offset="0.55" stopColor="#0b1328" />
            <stop offset="1" stopColor="#05080f" />
          </linearGradient>

          <linearGradient id={id('snow')} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="1" stopColor="#dbeafe" />
          </linearGradient>

          <linearGradient id={id('rocket')} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fffaf0" />
            <stop offset="0.55" stopColor="#f3e8d2" />
            <stop offset="1" stopColor="#d9cbae" />
          </linearGradient>

          <linearGradient id={id('fin')} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ff8a5c" />
            <stop offset="1" stopColor="#f43f5e" />
          </linearGradient>

          <linearGradient id={id('flameOuter')} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ffe29a" />
            <stop offset="0.5" stopColor="#ff9f43" />
            <stop offset="1" stopColor="#ff5e7a" />
          </linearGradient>

          <linearGradient id={id('flameInner')} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="1" stopColor="#ffd166" />
          </linearGradient>

          <radialGradient id={id('gloss')} cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.22" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>

          <radialGradient id={id('vignette')} cx="0.5" cy="0.42" r="0.62">
            <stop offset="0.68" stopColor="#03060f" stopOpacity="0" />
            <stop offset="1" stopColor="#03060f" stopOpacity="0.52" />
          </radialGradient>

          <linearGradient id={id('sheen')} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="0.5" stopColor="#ffffff" stopOpacity="0.18" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          <linearGradient id={id('starTrail')} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0.9" />
          </linearGradient>

          <clipPath id={id('clip')}>
            <circle cx="64" cy="64" r="58" />
          </clipPath>
        </defs>

        <circle cx="64" cy="64" r="62" fill={url('outerGlow')} />

        <g clipPath={url('clip')}>
          <circle cx="64" cy="64" r="58" fill={url('sky')} />
          <circle cx="64" cy="78" r="58" fill={url('horizon')} />
          <circle
            cx="64"
            cy="64"
            r="53"
            fill="none"
            stroke="#ffffff"
            strokeOpacity="0.05"
            strokeWidth="1"
          />

          <g fill="#fdf6e3">
            <circle
              className="umi-star"
              cx="24"
              cy="30"
              r="1.2"
              style={{ animationDelay: '0s' }}
            />
            <circle
              className="umi-star"
              cx="40"
              cy="18"
              r="0.8"
              style={{ animationDelay: '1.4s' }}
            />
            <circle
              className="umi-star"
              cx="101"
              cy="24"
              r="1.1"
              style={{ animationDelay: '2.2s' }}
            />
            <circle
              className="umi-star"
              cx="109"
              cy="44"
              r="0.7"
              style={{ animationDelay: '0.7s' }}
            />
            <circle
              className="umi-star"
              cx="16"
              cy="48"
              r="0.8"
              style={{ animationDelay: '2.9s' }}
            />
            <path
              className="umi-star"
              d="M80 18l.9 2.6 2.6.9-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9z"
              style={{ animationDelay: '1.8s' }}
            />
          </g>

          <g transform="translate(26 24)">
            <g className="umi-shoot">
              <path
                d="M0 0 L16 5"
                stroke={url('starTrail')}
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </g>
          </g>

          {/* The sun sits in the valley, with a thin halo for a polished edge. */}
          <circle cx="64" cy="68" r="40" fill={url('sunGlow')} />
          <circle className="umi-sun-core" cx="64" cy="68" r="22" fill={url('sun')} />
          <circle
            className="umi-halo"
            cx="64"
            cy="68"
            r="23.2"
            fill="none"
            stroke="#ffe9b8"
            strokeOpacity="0.3"
            strokeWidth="0.8"
          />

          <path
            d="M24 63 C 44 60 84 66 104 62"
            stroke="#070b18"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.18"
          />
          <path
            d="M38 72 C 54 70 76 74 92 71"
            stroke="#070b18"
            strokeWidth="1.3"
            strokeLinecap="round"
            opacity="0.12"
          />

          {/* Back range: the bright teal ridge. */}
          <path
            d="M-6 94 L18 60 L32 72 L52 34 L66 62 L78 44 L94 68 L110 50 L134 94 Z"
            fill={url('peakBack')}
          />
          <path d="M52 34 L44 46 L48 44.3 L52 47 L56 44.3 L60 46 Z" fill={url('snow')} />
          <path
            d="M110 50 L104 59 L107.5 57.5 L110 60 L112.5 57.5 L116 59 Z"
            fill={url('snow')}
            opacity="0.9"
          />
          <path
            d="M52 36 L40 52"
            stroke="#b8fff2"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.28"
          />
          <path
            d="M78 46 L70 58"
            stroke="#b8fff2"
            strokeWidth="0.8"
            strokeLinecap="round"
            opacity="0.18"
          />

          {/* Middle range: cool blue depth. */}
          <path
            d="M-6 104 L14 76 L30 92 L46 60 L62 92 L78 68 L94 88 L112 64 L134 104 Z"
            fill={url('peakMid')}
            opacity="0.97"
          />
          <path
            d="M46 60 L40 69 L43.5 67.5 L46 70 L48.5 67.5 L52 69 Z"
            fill="#e8f4ff"
            opacity="0.88"
          />
          <path
            d="M46 62 L34 82"
            stroke="#bfdbfe"
            strokeWidth="0.8"
            strokeLinecap="round"
            opacity="0.24"
          />

          {/* Front range: a deliberate U-shaped valley framing the launch. */}
          <path
            d="M-6 124 L12 100 L28 112 L42 88 L64 112 L86 90 L102 112 L118 96 L134 124 Z"
            fill={url('peakFront')}
          />
          <path
            d="M42 88 L64 112"
            stroke="#8ff5e4"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.2"
          />
          <path
            d="M86 90 L64 112"
            stroke="#93c5fd"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.16"
          />

          {/* Rocket: a clean diagonal ascent, flame only — no path or trail. */}
          <g transform="translate(87 45)">
            <g className="umi-rocket-float">
              <g className="umi-rocket-launch">
                <g transform="rotate(38)">
                  <path
                    className="umi-flame-outer"
                    d="M-4.2 10 C -5.2 20 0 29 0 29 C 0 29 5.2 20 4.2 10 Z"
                    fill={url('flameOuter')}
                  />
                  <path
                    className="umi-flame-inner"
                    d="M-2.4 10 C -2.8 16 0 22 0 22 C 0 22 2.8 16 2.4 10 Z"
                    fill={url('flameInner')}
                  />
                  <path d="M-3.2 8 L3.2 8 L3.8 11.2 L-3.8 11.2 Z" fill="#b9ad96" />
                  <path
                    d="M0 -21 C5.2 -12.6 6.8 -3 5.6 8 L-5.6 8 C-6.8 -3 -5.2 -12.6 0 -21 Z"
                    fill={url('rocket')}
                  />
                  <path
                    d="M-.4 -20 C2.6 -13.6 4.2 -6 5 0 L-1.6 -4.2 Z"
                    fill="#ffffff"
                    opacity="0.62"
                  />
                  <path d="M-5.6 1 L-11 10.5 L-5.6 9.2 Z" fill={url('fin')} />
                  <path d="M5.6 1 L11 10.5 L5.6 9.2 Z" fill={url('fin')} />
                  <circle
                    cx="0"
                    cy="-3.4"
                    r="3"
                    fill="#0ea5b7"
                    stroke="#f7ecd2"
                    strokeWidth="1.1"
                  />
                  <circle cx="-0.9" cy="-4.3" r="0.9" fill="#ffffff" opacity="0.9" />
                </g>
              </g>
            </g>
          </g>

          {/* Glass highlight, edge vignette and a slow sheen sweep. */}
          <ellipse
            cx="44"
            cy="26"
            rx="36"
            ry="18"
            fill={url('gloss')}
            transform="rotate(-26 44 26)"
            opacity="0.5"
          />
          <circle cx="64" cy="64" r="58" fill={url('vignette')} />

          <g className="umi-sheen">
            <rect
              x="-30"
              y="-10"
              width="18"
              height="148"
              fill={url('sheen')}
              transform="skewX(-18)"
            />
          </g>
        </g>

        <circle
          cx="64"
          cy="64"
          r="58.5"
          fill="none"
          stroke="#ffffff"
          strokeOpacity="0.1"
          strokeWidth="1"
        />
        <circle cx="64" cy="64" r="60.5" fill="none" stroke={url('ring')} strokeWidth="2.6" />

        <g transform="translate(64 64)">
          <circle
            className="umi-orbit-dash"
            r="63"
            fill="none"
            stroke="#ffffff"
            strokeOpacity="0.12"
            strokeWidth="1"
            strokeDasharray="1.5 7"
          />
          <g className="umi-orbit">
            <circle cx="0" cy="-59" r="3.6" fill="#ffd08a" opacity="0.18" />
            <circle cx="0" cy="-59" r="1.8" fill="#ffd08a" />
          </g>
        </g>
      </svg>

      {wordmark && (
        // The descriptor is laid out as four separate letters so it can be
        // justified edge-to-edge with the name above. The SVG carries the
        // accessible label, so the visual wordmark itself is decorative.
        <span className="umi-logo__wordmark" aria-hidden="true">
          <span className="umi-logo__name">U.M.I.</span>
          <span className="umi-logo__apps">
            {['A', 'P', 'P', 'S'].map((letter, index) => (
              <span key={`${letter}${index}`}>{letter}</span>
            ))}
          </span>
        </span>
      )}
    </span>
  );
}
