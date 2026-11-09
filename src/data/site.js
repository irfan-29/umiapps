// Single source of truth for the landing page copy, links and project data.
// Keeping it here means the JSX stays layout-only and content is easy to update.

export const site = {
  name: 'UMI Apps',
  founder: 'Mohammed Irfan U',
  role: 'Founder & CEO',
  email: 'umiappsofficial@gmail.com',
  tagline: 'Thoughtful apps for everyday life.',
  description:
    'The studio behind Hasanath and a set of thoughtful apps for learning, writing, health and the web.',
  // Hasanath is the flagship product; the live deployment is the canonical link.
  hasanath: 'https://hasanath.vercel.app',
  github: 'https://github.com/irfan-29',
};

export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Founder', href: '#founder' },
  { label: 'Contact', href: '#contact' },
];

export const socials = [
  { label: 'GitHub', href: 'https://github.com/irfan-29', icon: 'github' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/umirfan29/',
    icon: 'linkedin',
  },
  { label: 'X', href: 'https://twitter.com/umirfan29', icon: 'x' },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/_.md.irfan._/',
    icon: 'instagram',
  },
  { label: 'YouTube', href: 'https://www.youtube.com/@UMIApps', icon: 'youtube' },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=100074650873451',
    icon: 'facebook',
  },
];

export const projects = [
  {
    slug: 'hasanath',
    name: 'Hasanath',
    kind: 'Flagship product',
    description:
      'A calm, private home for your deen — salah tracking, the full Qur’an, hadith, challenges with friends, charity and monthly reflections, on web and Android.',
    tags: ['React', 'Node.js', 'Android'],
    colors: ['#0b3b36', '#0f766e'],
    flagship: true,
    links: [
      { label: 'Visit Hasanath', href: 'https://hasanath.vercel.app', kind: 'live' },
    ],
  },
  {
    slug: 'class',
    name: 'Class',
    kind: 'Student productivity',
    description:
      'Timetables, attendance and tasks in one calm dashboard — built to make a student week easier to run.',
    tags: ['React', 'Node.js', 'MongoDB'],
    colors: ['#6366f1', '#22d3ee'],
    links: [
      { label: 'Live app', href: 'https://class-umi-apps.onrender.com/', kind: 'live' },
      { label: 'Code', href: 'https://github.com/irfan-29/class-irfan', kind: 'code' },
      { label: 'Demo', href: 'https://youtu.be/077xx5e1HDo', kind: 'video' },
    ],
  },
  {
    slug: 'blogz',
    name: 'Blogz',
    kind: 'Publishing',
    description:
      'A clean, modern place to publish your writing and discover what everyone else is thinking about.',
    tags: ['Writing', 'Community', 'Web app'],
    colors: ['#f472b6', '#a855f7'],
    links: [
      { label: 'Live app', href: 'https://blog-site-irfan.onrender.com/', kind: 'live' },
      { label: 'Code', href: 'https://github.com/irfan-29/Blog-site-irfan', kind: 'code' },
    ],
  },
  {
    slug: 'medifinder',
    name: 'MediFinder',
    kind: 'Health',
    description:
      'Search a medicine name and uncover the details behind the pill — clear, quick and easy to read.',
    tags: ['Search', 'Health', 'Utility'],
    colors: ['#34d399', '#0ea5e9'],
    links: [
      { label: 'Code', href: 'https://github.com/irfan-29/MediFinder', kind: 'code' },
    ],
  },
  {
    slug: 'scomode',
    name: 'Scomode',
    kind: 'Client work',
    description:
      'An industry website designed and shipped with Gowtham for Scomode Tech — polished, fast and responsive.',
    tags: ['Client work', 'Web design'],
    colors: ['#fbbf24', '#f97316'],
    links: [
      { label: 'Live site', href: 'https://scomodetech.com/', kind: 'live' },
      { label: 'Code', href: 'https://github.com/irfan-29/scomodeTech', kind: 'code' },
    ],
  },
  {
    slug: 'spg',
    name: 'SPG',
    kind: 'Security',
    description:
      'Strong Password Generator — create memorable passwords from your own details, or generate one at random.',
    tags: ['Security', 'Utility', 'Web app'],
    colors: ['#2dd4bf', '#818cf8'],
    links: [
      { label: 'Live app', href: 'https://spg-umi-apps.netlify.app/', kind: 'live' },
      { label: 'Code', href: 'https://github.com/irfan-29/spg', kind: 'code' },
    ],
  },
];

export const stack = [
  'React',
  'Node.js',
  'MongoDB',
  'Java',
  'MySQL',
  'Python',
  'JavaScript',
  'Express',
];
