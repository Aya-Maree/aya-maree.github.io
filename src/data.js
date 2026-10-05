// All site content lives here — edit this file to update the website.
import capstoneImg from './assets/capstone.jpg';
import memorylaneImg from './assets/memorylane.jpg';
import hackathonImg from './assets/hackathon.jpg';
import welcomeImg from './assets/welcome.jpg';
import nourishImg from './assets/nourish.jpg';

export const profile = {
  name: 'Aya Maree',
  email: 'amaree@uwo.ca',
  github: 'https://github.com/Aya-Maree',
  linkedin: 'https://www.linkedin.com/in/aya-maree/',
  resume: 'Aya-Maree-Resume.pdf', // lives in /public
  location: 'London, Ontario',
};

export const heroCallouts = {
  left: [
    ['Software engineer &', 'web developer'],
    ['3 co-ops ·', "Dean's List"],
  ],
  right: ['Western University', "Class of '26"],
};

export const about = {
  headline: 'Software engineer, web developer, and systems thinker',
  pullQuote:
    'I like turning messy, manual processes into tools that just work, and building websites people actually enjoy using.',
  paragraphs: [
    "   I graduated from Western University in Software Engineering, with three co-op terms along the way. I've modernized legacy financial systems at Canada Life, built Qt6 toolchains on Linux at IO Industries, and now help run the Faculty of Science's web platforms.",
    "I love working with stakeholders, figuring out what they really need, and shipping something reliable and well documented. I've done that in finance, industrial tech, healthcare and higher education, so I pick up new teams, tools and problems quickly.",
  ],
};

export const featuredProjects = [
  {
    eyebrow: 'Capstone · PrüvIT & Canadian Sheep Federation',
    title: 'AI Biometric ID for Livestock',
    description:
      'An end-to-end computer vision pipeline that detects sheep and identifies individuals by face, with a human-in-the-loop verification workflow.',
    stack: ['Python', 'YOLOv5', 'FaceNet', 'Flask'],
    image: capstoneImg,
    imageAlt: 'Aya at the capstone showcase, with the AI-Powered Biometric Identification in Livestock project on screen behind her',
    link: null, // add a repo or case-study URL here
  },
  {
    eyebrow: 'Hack Western 10 · Team of 3',
    title: 'MemoryLane',
    description:
      'A full-stack app supporting people living with dementia, using speech-to-text to capture and resurface memories.',
    stack: ['Next.js', 'Flask', 'MongoDB', 'Google Web Speech API'],
    image: memorylaneImg,
    imageAlt: 'Aya and her teammate with the Sun Life judges after winning the Best Health Hack prize at Hack Western 10',
    badge: 'Winner · Sun Life Best Health Hack',
    link: 'https://devpost.com/software/memory-lane-84kcrl',
    linkLabel: 'View on Devpost →',
  },
  {
    eyebrow: 'SheHacks+ 8 · Team of 4',
    title: 'Nourish Path',
    description:
      'A web app supporting people recovering from eating disorders, with an AI chatbot for support, a journal to track thoughts and progress, and a recipe hub that suggests meals from ingredients on hand.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenAI'],
    image: nourishImg,
    imageAlt: 'Aya working with her team at SheHacks+ 8, everyone in green event shirts around a laptop',
    imagePosition: '28% 35%',
    link: 'https://devpost.com/software/nourish-path',
    linkLabel: 'View on Devpost →',
    secondaryLink: 'https://github.com/Aya-Maree/NourishPath',
    secondaryLabel: 'Code →',
  },
  {
    eyebrow: 'Western MSA',
    title: 'Western MSA Website',
    description:
      "Built and launched the Western Muslim Students' Association's website as part of a student dev team, giving the community one place for its digital needs.",
    stack: [],
    link: 'https://western-msa.com',
    linkLabel: 'Visit site →',
  },
  {
    eyebrow: 'Schulich Dentistry',
    title: 'Site QA Crawler',
    description:
      'A Python + BeautifulSoup tool that crawls and validates website data, cutting manual review effort by 90% and improving navigation and SEO.',
    stack: ['Python', 'BeautifulSoup'],
    link: null,
  },
];

// Set to true to show the "More from GitHub" list under the projects again.
export const showGithubProjects = false;

export const githubProjects = [
  { name: 'iFinance', description: 'Personal finance manager desktop app.', stack: 'JavaFX · SQL', url: 'https://github.com/Aya-Maree/iFinance' },
  { name: 'Sorting Hub', description: 'Multithreaded sorting-algorithm visualizer.', stack: 'JavaFX · Threading', url: 'https://github.com/Aya-Maree/Sorting-Hub' },
  { name: 'WorkMom', description: 'Task management and organization web app.', stack: 'HTML · CSS · JS · Python', url: 'https://github.com/Aya-Maree/WorkMom' },
  { name: 'FruitFriendzy', description: 'Fruit-themed 2D platformer game.', stack: 'Python · Pygame', url: 'https://github.com/Aya-Maree/FruitFriendzy' },
];

export const experience = [
  {
    dates: 'Jul 2026 — Present',
    role: 'Web Developer',
    org: 'Faculty of Science, Western',
    summary:
      'Develop and maintain web platforms and CMS sites, supporting website redesign, accessibility compliance and UX improvements with faculty, staff and vendors.',
  },
  {
    dates: 'Jan — Sept 2025',
    role: 'Software Developer Intern',
    org: 'Canada Life',
    summary:
      'Helped modernize legacy financial systems, rebuilding internal apps with .NET Core, C#, React, Angular and AWS in GitHub-based team workflows.',
  },
  {
    dates: 'May 2024 — Jan 2025',
    role: 'Software Developer Intern',
    org: 'IO Industries',
    summary:
      'Built and integrated Qt6 from source on Linux, wrote build automation tooling, and documented it for future upgrades.',
  },
  {
    dates: 'May 2023 — May 2024',
    role: 'Website Editor / Developer',
    org: 'Schulich Dentistry',
    summary: 'Built a Python crawler to validate site data, cutting manual effort by 90%.',
  },
];

export const skills = [
  { label: 'Languages', items: ['Java', 'Python', 'C++', 'C#', 'JavaScript', 'TypeScript', 'SQL', 'HTML/CSS'] },
  { label: 'Frameworks', items: ['React', 'Next.js', '.NET', 'Node.js', 'Express', 'Flask', 'Qt'] },
  { label: 'Cloud & tools', items: ['AWS', 'Docker', 'CI/CD', 'Linux', 'Git/GitHub', 'MongoDB', 'REST APIs'] },
];

export const education = {
  degree: 'B.E.Sc. Software Engineering (Co-op)',
  detail: "Western University, 2021–2026 · Dean's List · GPA 3.7 · Western Scholarship of Excellence",
};

export const leadership = {
  org: 'Western MSA',
  role: 'Executive Vice President & Hackathon Director',
  summary:
    "Led major initiatives across programming, advocacy, technology, and student engagement for Western's Muslim student community.",
  // roles held, in order
  path: ['Executive Secretary', 'Tech Developer', 'Hackathon Director', 'Executive Vice President'],
  highlights: [
    {
      title: 'Muslim Student Welcome',
      text: "Co-created and led Western's inaugural Muslim Student Welcome with Western's Office of Equity, Diversity & Inclusion (EDI), a new Orientation Week initiative that helps incoming and returning Muslim students build community and connect with campus resources. Coordinated MSA executives, university staff, speakers, community partners, vendors, student organizations, programming, outreach, and event logistics.",
      image: welcomeImg,
      imageAlt: 'Aya with students and staff at the Muslim Student Welcome, in front of a Western University backdrop',
    },
    {
      title: 'MSA Hacks, an Islamic-themed hackathon',
      text: "Directed Western's first Islamic-themed hackathon, themed Iqra (Seek Knowledge), bringing together 100+ participants for a large-scale innovation event with technical and non-technical challenges. Also helped build and launch the MSA website alongside the technical team.",
      image: hackathonImg,
      imageAlt: 'Aya presenting the MSA Hacks hackathon to participants, with the Iqra theme slide on screen',
    },
    {
      title: 'Student advocacy',
      text: 'Contributed to advocacy efforts that secured two dedicated prayer spaces on campus.',
      quote: 'Your religion is a strength, not a barrier.',
      press: [
        {
          title: "'We pray with fear': Muslim students worship in stairwell amid limited prayer space",
          outlet: 'The Gazette',
          date: 'Feb 2023',
          url: 'https://westerngazette.ca/news/campus/we-pray-with-fear-muslim-students-worship-in-stairwell-amid-limited-prayer-space/article_7548add4-a7e2-11ed-bd6c-9f0aa09d43ed.html',
        },
        {
          title: 'Navigating religion on campus',
          outlet: 'The Gazette',
          date: 'Sept 2025',
          url: 'https://westerngazette.ca/culture/navigating-religion-on-campus/article_013d6a8b-1a0b-4d8e-a1a3-aea2d2297e08.html',
        },
        {
          title: 'MSA urges Western to expand campus prayer spaces',
          outlet: 'The Gazette',
          date: 'Mar 2026',
          url: 'https://westerngazette.ca/news/msa-urges-western-to-expand-campus-prayer-spaces/article_acfa8d09-240b-432c-a82a-5b872ab1f989.html',
        },
      ],
    },
  ],
};
