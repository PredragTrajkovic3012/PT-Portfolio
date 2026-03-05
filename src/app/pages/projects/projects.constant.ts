export interface Project {
  id: number;
  name: string;
  company: string;
  location: string;
  period: string;
  position: string;
  description: string;
  fullDescription: string;
  skills: string[];
  images: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 0,
    name: 'Only Smart Bets - Tipster Intelligence Platform',
    company: 'Personal Project (with Stefan)',
    location: 'Belgrade, Serbia',
    period: 'January 2026 – Present',
    position: 'Frontend Developer',
    description:
      'Developing a smart tipster platform that helps users discover high-quality betting tips using data, history, and AI-assisted suggestions.',
    fullDescription: `Only Smart Bets is a modern web platform designed to help tipsters easily discover high-quality betting opportunities and connect with other sports analysts. The platform focuses on creating a smarter environment for sports predictions, where users can explore tips, analyze performance, and collaborate with other experienced tipsters.

One of the most interesting aspects of the platform is its recommendation algorithm. Tip suggestions are generated based on multiple factors such as recent form, historical tip performance, patterns in previous predictions, and AI-assisted analysis. This approach provides users with a completely new experience in discovering betting opportunities and analyzing sports data.

The project is a personal initiative developed in collaboration with my colleague Stefan. I am actively working on the platform as a Frontend Developer, focusing on building a scalable and modern Angular application. In addition to development, I contribute insights and product ideas based on the experience I gained over the years working in the betting industry, helping shape features that are practical and valuable for real tipsters.`,
    skills: [
      'Angular',
      'TypeScript',
      'Signals',
      'RxJS',
      'Tailwind CSS',
      'API Integration',
      'AI-assisted Features',
    ],
    images: [
      '/projects/onlysmartbets/OB_1.PNG',
      '/projects/onlysmartbets/OB_2.PNG',
      '/projects/onlysmartbets/OB_3.PNG',
    ],
  },
  {
    id: 1,
    name: 'AllTips - Tipster Platform',
    company: 'TwogNation',
    location: 'Belgrade, Serbia',
    period: 'March 2023 – January 2026',
    position: 'Lead Frontend Developer',
    description:
      'Developed and maintained a tipster web platform using Angular',
    fullDescription: `AllTips is a web platform designed to bring together tipsters from around the world, allowing them to share their sports knowledge and predictions while enabling them to monetize their expertise. The goal of the platform is to create a global community where users can discover, follow, and learn from experienced sports analysts.

This project played a significant role in the development of my career. I took on the role of Frontend Lead, where I was responsible for leading the frontend development and participating in all major stages of the application lifecycle. My responsibilities included collaborating closely with clients, contributing to key product decisions, helping define the application architecture, and ensuring successful integration and delivery of core platform features.`,
    skills: [
      'Angular v19',
      'TypeScript',
      'Signals',
      'Signal Store',
      'RxJS',
      'Tailwind CSS',
      'API Integration',
    ],
    images: [
      '/projects/alltips/alltips_profile.PNG',
      '/projects/alltips/hompage-image4.png',
      '/projects/alltips/mobile_version.png',
    ],
  },
  {
    id: 2,
    name: 'Betting backoffice applications',
    company: 'Intelligent Betting Software',
    location: 'Belgrade, Serbia',
    period: '2022 – 2023',
    position: 'Fullstack Developer',
    description:
      'Built data collection and control applications for sports betting industry',
    fullDescription: `Developed a backoffice platform used to manage and control data collection systems for the sports betting industry. The application was responsible for orchestrating servers that scrape and process sports data such as betting odds and various match-related statistics.
The platform allowed administrators to configure different client-specific settings, including allowed filters, data sources, and processing options. I worked on building complex data management interfaces using Angular for the frontend and Java Spring for backend logic, enabling efficient handling of large and complex data structures.
This project significantly improved my experience with advanced form handling, dynamic configuration systems, and managing large datasets within enterprise applications. It also involved designing scalable architecture, ensuring stable deployments using Docker, and supporting real-time data updates for downstream betting systems.`,
    skills: [
      'Angular',
      'PrimeNG',
      'TypeScript',
      'NodeJS',
      'Rxjs',
      'Java Spring',
      'Docker',
      'SQL',
      'REST APIs',
      'Microservices',
    ],
    images: [
      '/projects/backoffice/b_office_1.png',
      '/projects/backoffice/b_office_2.png',
      '/projects/backoffice/b_office_3.png',
      '/projects/backoffice/b_office_4.png',
    ],
  },
  {
    id: 3,
    name: 'Sportal4 Betting Platform',
    company: 'Intelligent Betting Software',
    location: 'Belgrade, Serbia',
    period: '2022 – 2023',
    position: 'Frontend developer',
    description:
      'Developed features for a sports betting and casino platform allowing users to create betslips and manage deposits.',
    fullDescription: `Worked on the development of a large-scale sports betting and casino platform that allows users to create and manage betslips, place bets, and handle account deposits.

The platform provides real-time sports data, betting markets, and an intuitive interface for users to browse events and build their betting tickets. My responsibilities included developing complex frontend components, managing application state, and integrating multiple backend services responsible for odds, payments, and user management.

During the development process, I worked extensively with dynamic data structures and high-frequency updates typical for betting systems. The project strengthened my experience in building scalable frontend architectures, handling real-time updates, and creating responsive and reliable user interfaces for high-traffic applications.`,
    skills: [
      'Angular',
      'TypeScript',
      'RxJS',
      'REST APIs',
      'NGRX',
      'Real-time Data Handling',
      'Responsive UI Development',
      'Sports Betting Systems',
    ],
    images: [
      '/projects/sportal4/sportal_1.png',
      '/projects/sportal4/sportal_2.png',
      '/projects/sportal4/sportal_3.png',
    ],
  },
  {
    id: 4,
    name: 'Sentiment Analysis SaaS Platform',
    company: 'DMR',
    location: 'Belgrade, Serbia',
    period: 'August 2021 – June 2022',
    position: 'Fullstack Developer',
    description:
      'Contributed to SaaS platforms for sentiment analysis from social networks',
    fullDescription: `Contributed to the development of a SaaS platform for social media sentiment analysis—a "media on media" tool that helps clients quickly and accurately understand public opinion and media trends, which many are willing to pay for. Focused primarily on backend development using Python and Django, implementing core logic and handling large, complex data structures. Developed the frontend of the platform using Angular, ensuring seamless user experience, and occasionally worked with Java Spring on specific modules. Created automation scripts in pure Python and supported the customer success team with data-driven insights.`,
    skills: [
      'Python',
      'Django',
      'Angular',
      'Java Spring',
      'Machine Learning',
      'Data Processing',
      'REST APIs',
    ],
    images: ['/projects/DMR/listening247.PNG'],
  },
  {
    id: 5,
    name: 'Household Budget Tracker',
    company: 'Digital Cube',
    location: 'Belgrade, Serbia',
    period: 'February 2021 – June 2021',
    position: 'Junior Developer',
    description: 'Developed a household budget tracking application',
    fullDescription:
      'Developed a household budget tracking application with responsive and dynamic interface. Used Python (Tornado) for backend and Angular for frontend. Implemented real-time budget calculations and expense categorization.',
    skills: ['Python', 'Tornado', 'Angular', 'HTML5', 'CSS', 'JavaScript'],
    images: [
      '/projects/housebudgetapp/housebudgethome.PNG',
      '/projects/housebudgetapp/savings.PNG',
    ],
  },
  {
    id: 6,
    name: 'Drupal & Angular Projects',
    company: 'Diplo Foundation',
    location: 'Belgrade, Serbia',
    period: 'April 2020 – December 2020',
    position: 'Frontend Developer',
    description: 'Contributed to Drupal and Angular-based projects',
    fullDescription:
      'Contributed to Drupal and Angular-based projects with focus on frontend improvements and UI responsiveness. Worked on responsive design implementation and cross-browser compatibility updates.',
    skills: [
      'Drupal',
      'Angular',
      'HTML5',
      'CSS',
      'JavaScript',
      'Responsive Design',
    ],
    images: ['/projects/diplo/diplo.PNG'],
  },
  {
    id: 7,
    name: 'PlanetApp',
    company: 'Personal Project',
    location: 'Belgrade, Serbia',
    period: '2022',
    position: 'Full Stack Developer',
    description: 'Built a space exploration web application',
    fullDescription:
      'Developed PlanetApp, a comprehensive web application for exploring planets and space information. Created interactive UI with detailed planet information, images, and facts. Used modern web technologies to create a responsive and engaging user experience. Integrated with space APIs for real-time data.',
    skills: [
      'Angular',
      'TypeScript',
      'HTML5',
      'CSS',
      'API Integration',
      'Responsive Design',
    ],
    images: [
      '/projects/planetapp/planete1.PNG',
      '/projects/planetapp/planete2.PNG',
      '/projects/planetapp/editplaneta.PNG',
    ],
  },
];
