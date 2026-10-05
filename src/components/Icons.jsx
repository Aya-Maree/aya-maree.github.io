const base = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

export const GitHubIcon = () => (
  <svg {...base}>
    <path d="M9 19c-4 1.5-4-2-6-2.5M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  </svg>
);

export const LinkedInIcon = () => (
  <svg {...base}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const MenuIcon = ({ open }) => (
  <svg {...base} width={22} height={22}>
    {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
  </svg>
);

export const ArrowSquiggle = ({ flip = false }) => (
  <svg
    width="48"
    height="28"
    viewBox="0 0 48 28"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
    strokeLinecap="round"
    aria-hidden="true"
    style={flip ? { transform: 'scaleX(-1)' } : undefined}
  >
    <path d="M2 20c10-14 24-14 30-6s-8 10-6 2 14-10 20-6" />
    <path d="m40 6 6 4-6 3" />
  </svg>
);

export const ArrowCurve = () => (
  <svg width="44" height="24" viewBox="0 0 44 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" aria-hidden="true">
    <path d="M2 6c12 14 26 14 38 6" />
    <path d="m34 8 6 4-7 3" />
  </svg>
);
