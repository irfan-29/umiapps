// A small piece of line art per product. Drawn rather than imported so the
// cards stay sharp at any size and ship no extra image requests.
export default function AppGlyph({ name, className = '' }) {
  const common = {
    className,
    viewBox: '0 0 48 48',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
    focusable: 'false',
  };

  if (name === 'hasanath') {
    // The real Hasanath app icon, not a stand-in glyph: the same teal rounded
    // tile and mosque figure used by the favicon, manifest and loading marks.
    return (
      <svg
        className={className}
        viewBox="0 0 1024 1024"
        role="img"
        aria-label="Hasanath"
        focusable="false"
      >
        <rect width="1024" height="1024" rx="224" fill="#0d9488" />
        <path
          fill="#ffffff"
          transform="translate(204.8 836.48) scale(0.64)"
          d="M278-638q-21 0-29.5-8.5T240-676q0-40 19-74t51-56l125-84q20-14 45-14t45 14l125 84q32 22 51 56t19 74q0 21-8.5 29.5T682-638H278ZM40-200v-411q-18-11-29-28.5T0-680q0-23 24-56t56-64q32 31 56 64t24 56q0 23-11 40.5T120-611v171h80v-80q0-25 16-48t46-30h436q30 7 46 30t16 48v80h80v-171q-18-11-29-28.5T800-680q0-23 24-56t56-64q32 31 56 64t24 56q0 23-11 40.5T920-611v411q0 33-23.5 56.5T840-120H600q-17 0-28.5-11.5T560-160v-120q0-33-23.5-56.5T480-360q-33 0-56.5 23.5T400-280v120q0 17-11.5 28.5T360-120H120q-33 0-56.5-23.5T40-200Z"
        />
      </svg>
    );
  }

  if (name === 'class') {
    return (
      <svg {...common}>
        <rect x="7" y="10" width="34" height="31" rx="6" />
        <path d="M7 19h34M16 6v8M32 6v8" />
        <path d="M14 26h4M22 26h4M30 26h4M14 33h4M22 33h4" />
      </svg>
    );
  }

  if (name === 'blogz') {
    return (
      <svg {...common}>
        <path d="M12 6h18a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6H15a6 6 0 0 1-6-6V9a3 3 0 0 1 3-3Z" />
        <path d="M16 17h12M16 24h16M16 31h9" />
        <path d="M33 34.5 38.5 29" />
      </svg>
    );
  }

  if (name === 'medifinder') {
    return (
      <svg {...common}>
        <rect x="8.5" y="16" width="31" height="16" rx="8" transform="rotate(-38 24 24)" />
        <path d="m18.5 29.5 11-11" />
        <path d="M31 10.5a5 5 0 0 1 7 7" />
      </svg>
    );
  }

  if (name === 'scomode') {
    return (
      <svg {...common}>
        <path d="M24 6 40 15v18L24 42 8 33V15L24 6Z" />
        <path d="M24 6v18M8 15l16 9 16-9M24 24v18" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M24 6 39 12v11c0 9.5-6.4 15.8-15 19-8.6-3.2-15-9.5-15-19V12L24 6Z" />
      <circle cx="24" cy="21" r="4" />
      <path d="M24 25v8" />
    </svg>
  );
}
