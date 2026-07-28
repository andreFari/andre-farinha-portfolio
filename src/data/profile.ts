export const profile = {
  name: 'André Farinha',
  initials: 'AF',
  role: 'Product Builder & Software Developer',
  headline: 'Product Builder & Software Developer · Founder at Techbridge',
  location: 'Portugal',
  email: 'support@techbridge.pt',
  linkedin: 'https://www.linkedin.com/in/andr%C3%A9-farinha-908558293/',
  github: 'https://github.com/REPLACE-WITH-YOUR-GITHUB',
  techbridge: 'https://techbridge.pt',
  controlHub: 'https://gestor.techbridge.pt',
  enerFocus: 'https://gestor.techbridge.pt/',
};

export const about = {
  intro:
    'I build software for real operational problems: mobile applications, internal business systems, automations and tools that replace scattered spreadsheets, repeated messages and manual validation.',
  detail:
    'My work covers the full product path — understanding how people actually work, defining the source of truth, building the backend and interfaces, shipping the first useful version and improving it from real usage.',
  focus: ['Business software', 'Mobile products', 'Workflow automation', 'Local AI and integrations'],
};

export const timeline = [
  {
    period: 'Education',
    title: 'BSc in Informatics and Multimedia',
    organisation: 'Polytechnic Institute of Castelo Branco — IPCB',
    text: 'A multidisciplinary foundation across software development, interactive products, digital media and interface design.',
  },
  {
    period: 'Summer internship',
    title: 'Software development internship',
    organisation: 'Babel',
    text: 'My first professional experience inside a software team, working with delivery processes, collaboration and production-oriented development.',
  },
  {
    period: 'Now',
    title: 'Founder and product builder',
    organisation: 'Techbridge',
    text: 'Building mobile products, internal platforms, integrations and automation for companies, teams and families.',
  },
];

export const techbridgeCapabilities = [
  {
    code: 'A',
    title: 'Internal business software',
    text: 'One operational system for teams, projects, equipment, documents, approvals, alerts and reporting.',
  },
  {
    code: 'B',
    title: 'Mobile applications',
    text: 'Focused products and field tools designed around the constraints of real users and real devices.',
  },
  {
    code: 'C',
    title: 'Automation and integrations',
    text: 'Removing repetitive work by connecting data, services, notifications and existing workflows.',
  },
  {
    code: 'D',
    title: 'Applied and local AI',
    text: 'Using AI where it creates measurable value, while keeping privacy, cost and operational control in view.',
  },
];

export const products = [
  {
    id: '01',
    name: 'ENER Focus',
    category: 'Android · Digital wellbeing',
    problem: 'Social apps are easy to reopen even after a user has decided to stop.',
    built:
      'An Android focus product with app blocking, usage limits, restricted sessions and protection against common bypass behaviour.',
    outcome: 'A stricter, clearer system for turning an intention to focus into an enforced rule.',
    href: profile.enerFocus,
  },
  {
    id: '02',
    name: 'Control Hub',
    category: 'Web + mobile · Shared operations',
    problem: 'Family responsibilities, vehicles, documents and reminders usually live in unrelated apps and conversations.',
    built:
      'A shared hub for tasks, shopping, vehicles, maintenance, documents, appointments, birthdays, subscriptions and alerts.',
    outcome: 'One place for a household or group to know what exists, what is due and who owns the next action.',
    href: profile.controlHub,
  },
];

export const systems = [
  {
    client: 'Farinha & Farinha',
    label: 'Company operations platform',
    description:
      'A production system that connects office and field operations instead of leaving each process in a separate spreadsheet, chat or paper record.',
    areas: [
      'Projects, teams and working hours',
      'Vehicles, machines and maintenance',
      'Documents, incidents and material requests',
      'Operational, financial and salary reporting',
      'Alerts, audit trails and automated backups',
    ],
  },
  {
    client: 'FMLP',
    label: 'Management assistance software',
    description:
      'A tailored platform for centralising records, following internal work and replacing repeated manual checks with a dependable workflow.',
    areas: [
      'Centralised operational records',
      'Clear ownership and status tracking',
      'Reduced duplicate data entry',
      'Management visibility and reporting',
    ],
  },
];

export const principles = [
  ['01', 'Start with the operation', 'Technology comes after understanding the work, the people and the failure points.'],
  ['02', 'Create one source of truth', 'Data, permissions and business rules belong in a dependable backend — not in scattered screens.'],
  ['03', 'Ship a useful core', 'The first release must solve the central problem. Real usage decides what deserves to grow next.'],
  ['04', 'Automate repetition', 'People should spend time on judgement and decisions, not copying the same information between tools.'],
];

export const stack = [
  'JavaScript',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'React',
  'React Native',
  'Expo',
  'Astro',
  'Docker',
  'Linux',
  'n8n',
  'Local AI',
];
