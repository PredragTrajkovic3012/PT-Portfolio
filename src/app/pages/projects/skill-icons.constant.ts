import {
  faHtml5,
  faCss3Alt,
  faJs,
  faAngular,
  faReact,
  faPython,
  faJava,
  faDocker,
  faNode,
} from '@fortawesome/free-brands-svg-icons';
import {
  faDatabase,
  faCode,
  faWrench,
  faBolt,
  faBrain,
  faGear,
  faSync,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

export const SKILL_ICONS: Record<string, IconDefinition> = {
  // Frontend
  HTML5: faHtml5,
  HTML: faHtml5,
  CSS: faCss3Alt,
  CSS3: faCss3Alt,
  JavaScript: faJs,
  TypeScript: faCode,
  Angular: faAngular,
  'Angular v19': faAngular,
  React: faReact,
  RxJS: faSync,
  Signals: faBolt,
  'Signal Store': faBolt,
  NGRX: faCode,
  'Tailwind CSS': faWrench,
  PrimeNG: faCode,
  Drupal: faCode,
  'Responsive Design': faGear,
  'Responsive UI Development': faGear,

  // Backend
  Python: faPython,
  Django: faCode,
  Java: faJava,
  'Java Spring': faJava,
  NodeJS: faNode,
  'Node.js': faNode,

  // Database & DevOps
  SQL: faDatabase,
  Docker: faDocker,
  'REST APIs': faCode,
  Microservices: faCode,
  'API Integration': faCode,

  // Other
  'Machine Learning': faBrain,
  'Data Processing': faGear,
  'AI-assisted Features': faBrain,
  'Real-time Data Handling': faBolt,
  'Sports Betting Systems': faCode,
};

export function getSkillIcon(skill: string): IconDefinition | null {
  return SKILL_ICONS[skill] || null;
}
