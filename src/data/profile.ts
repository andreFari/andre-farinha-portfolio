export const profile = {
  name: 'André Farinha',
  initials: 'AF',
  role: 'Software Developer & Product Builder',
  location: 'Portugal',
  email: 'support@techbridge.pt',
  linkedin: 'https://www.linkedin.com/in/andr%C3%A9-farinha-908558293/',
  github: 'https://github.com/andreFari',
  techbridge: 'https://techbridge.pt',
  controlHub: 'https://gestor.techbridge.pt',
  enerFocus: '',
};

export const about = {
  intro:
    'I am a software developer and product builder based in Portugal. I enjoy taking an idea from its first sketch to a working product, combining development, product thinking and interface design.',
  detail:
    'I created Techbridge as the structure through which I develop my own products and build software for client organisations. My work has included mobile applications, internal business platforms, operational tools and automation.',
};

export const experience = [
  {
    role: 'Founder & Product Builder',
    organisation: 'Techbridge',
    period: 'Present',
    description:
      'Created Techbridge to develop my own digital products and client projects, from early product definition to implementation and delivery.',
    bullets: [
      'Product planning and requirements analysis',
      'Web and mobile application development',
      'Client communication and project delivery',
    ],
    href: profile.techbridge,
  },
  {
    role: 'Summer Software Development Intern',
    organisation: 'Babel',
    period: 'Summer internship',
    description:
      'Worked within a professional software team and gained practical experience with collaborative development, delivery processes and production-oriented work.',
    bullets: [
      'Team-based software development',
      'Professional development workflows',
      'Practical experience in a technology company',
    ],
  },
];

export const projects = [
  {
    name: 'ENER Focus',
    type: 'Android application',
    description: 'A digital wellbeing app designed to help users limit distracting applications and protect focus time.',
    bullets: ['Usage limits and app blocking', 'Restricted focus mode', 'Android and Google Play preparation'],
    href: profile.enerFocus,
  },
  {
    name: 'Control Hub',
    type: 'Web and mobile product',
    description: 'A shared organisation hub for everyday responsibilities, vehicles, reminders and family information.',
    bullets: ['Tasks, shopping and reminders', 'Vehicles and maintenance', 'Shared household organisation'],
    href: profile.controlHub,
  },
  {
    name: 'Farinha & Farinha',
    type: 'Internal business platform',
    description: 'A tailored system supporting daily company operations across office and field teams.',
    bullets: ['Working hours and projects', 'Fleet, equipment and maintenance', 'Documents, alerts and reports'],
  },
  {
    name: 'Territorial Operations',
    type: 'Map-based management platform',
    description: 'A system for recording incidents, defining work areas and assigning teams or companies on a map.',
    bullets: ['Map-based work areas', 'Incident status tracking', 'Assignment and reporting'],
  },
];

export const education = [
  {
    qualification: 'BSc in Informatics and Multimedia',
    institution: 'Polytechnic Institute of Castelo Branco — IPCB',
    description: 'Software development, multimedia, interaction design and digital product creation.',
  },
  {
    qualification: 'CTeSP in Informatics',
    institution: 'Polytechnic Institute of Castelo Branco — IPCB',
    description: 'Practical technical foundation in computing, programming, systems and digital technologies.',
  },
];

export const strengths = [
  'Product definition',
  'Requirements analysis',
  'Full-stack development',
  'Mobile development',
  'UI and UX implementation',
  'Business process analysis',
  'Automation and integrations',
  'Project delivery',
];

export const technologies = [
  'JavaScript',
  'TypeScript',
  'Node.js',
  'React',
  'React Native',
  'Expo',
  'Astro',
  'PostgreSQL',
  'SQLite',
  'Docker',
  'Linux',
  'Git',
  'REST APIs',
  'Local AI',
];
