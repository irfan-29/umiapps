const ICONS = {
  github: {
    fill: true,
    body: (
      <path d="M12 .5C5.73.5.9 5.33.9 11.6c0 4.9 3.17 9.05 7.57 10.52.55.1.75-.24.75-.53v-2.06c-3.08.67-3.73-1.3-3.73-1.3-.5-1.28-1.23-1.62-1.23-1.62-1-.69.08-.68.08-.68 1.11.08 1.7 1.14 1.7 1.14.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.46-.28-5.05-1.23-5.05-5.47 0-1.21.43-2.2 1.14-2.98-.11-.28-.5-1.41.11-2.94 0 0 .93-.3 3.05 1.14a10.6 10.6 0 0 1 5.56 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.22 2.66.11 2.94.71.78 1.14 1.77 1.14 2.98 0 4.25-2.6 5.19-5.07 5.46.4.35.76 1.03.76 2.08v3.08c0 .3.2.64.76.53a11.1 11.1 0 0 0 7.56-10.52C23.1 5.33 18.27.5 12 .5Z" />
    ),
  },
  linkedin: {
    fill: true,
    body: (
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    ),
  },
  x: {
    fill: true,
    body: (
      <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.4l-5.8-7.58-6.63 7.58H.48l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93Zm-1.29 19.5h2.04L6.49 3.24H4.3L17.61 20.65Z" />
    ),
  },
  instagram: {
    body: (
      <>
        <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
      </>
    ),
  },
  youtube: {
    body: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="4" />
        <path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" />
      </>
    ),
  },
  facebook: {
    fill: true,
    body: (
      <path d="M14 8.5V6.8c0-.8.5-1 1-1h2.5V2.2h-3.4C10.9 2.2 10 4.2 10 6.4v2.1H7.5V12H10v9.8h4V12h3l.5-3.5H14Z" />
    ),
  },
  mail: {
    body: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <path d="m4 7.5 8 5.5 8-5.5" />
      </>
    ),
  },
  arrow: {
    body: (
      <>
        <path d="M7 17 17 7" />
        <path d="M8 7h9v9" />
      </>
    ),
  },
  copy: {
    body: (
      <>
        <rect x="9" y="9" width="11" height="11" rx="2.5" />
        <path d="M5 15V5.5A2.5 2.5 0 0 1 7.5 3H17" />
      </>
    ),
  },
  check: {
    body: <path d="m5 12.5 4.5 4.5L19 7" />,
  },
  sun: {
    body: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
      </>
    ),
  },
  moon: {
    body: <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5 8.5 8.5 0 1 0 20.5 14.5Z" />,
  },
  menu: {
    body: <path d="M4 7h16M4 12h16M4 17h16" />,
  },
  close: {
    body: <path d="m6 6 12 12M18 6 6 18" />,
  },
  external: {
    body: (
      <>
        <path d="M14 4h6v6" />
        <path d="m20 4-9 9" />
        <path d="M20 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5" />
      </>
    ),
  },
  play: {
    body: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m10 8.5 5.5 3.5-5.5 3.5v-7Z" fill="currentColor" stroke="none" />
      </>
    ),
  },
  code: {
    body: (
      <>
        <path d="m8 8-4 4 4 4" />
        <path d="m16 8 4 4-4 4" />
      </>
    ),
  },
  spark: {
    body: (
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z" />
    ),
  },
  pin: {
    body: (
      <>
        <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
  },
  briefcase: {
    body: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2.5" />
        <path d="M8 7V5.5A2.5 2.5 0 0 1 10.5 3h3A2.5 2.5 0 0 1 16 5.5V7" />
        <path d="M3 12.5h18" />
      </>
    ),
  },
  cap: {
    body: (
      <>
        <path d="m2 9 10-5 10 5-10 5L2 9Z" />
        <path d="M6 11.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5" />
      </>
    ),
  },
  arrowDown: {
    body: (
      <>
        <path d="M12 5v14" />
        <path d="m6 13 6 6 6-6" />
      </>
    ),
  },
};

export default function Icon({ name, size = 20, className = '', ...rest }) {
  const icon = ICONS[name];
  if (!icon) return null;

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      fill={icon.fill ? 'currentColor' : 'none'}
      stroke={icon.fill ? 'none' : 'currentColor'}
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      {icon.body}
    </svg>
  );
}
