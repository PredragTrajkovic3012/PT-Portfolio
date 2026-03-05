export const SKILL_ICONS: Record<string, string> = {
  // Frontend
  HTML5: 'language',
  HTML: 'language',
  CSS: 'style',
  CSS3: 'style',
  JavaScript: 'code',
  TypeScript: 'code',
  Angular: 'layers',
  'Angular v19': 'layers',
  React: 'layers',
  RxJS: 'autorenew',
  Signals: 'electric_bolt',
  'Signal Store': 'electric_bolt',
  NGRX: 'code',
  'Tailwind CSS': 'tune',
  PrimeNG: 'code',
  Drupal: 'code',
  'Responsive Design': 'dashboard',
  'Responsive UI Development': 'dashboard',

  // Backend
  Python: 'code',
  Django: 'code',
  Java: 'coffee',
  'Java Spring': 'coffee',
  NodeJS: 'router',
  'Node.js': 'router',

  // Database & DevOps
  SQL: 'storage',
  Docker: 'cloud',
  'REST APIs': 'api',
  Microservices: 'code',
  'API Integration': 'api',

  // Other
  'Machine Learning': 'smart_toy',
  'Data Processing': 'storage',
  'AI-assisted Features': 'smart_toy',
  'Real-time Data Handling': 'electric_bolt',
  'Sports Betting Systems': 'code',
};

export function getSkillIcon(skill: string): string | null {
  return SKILL_ICONS[skill] || null;
}
