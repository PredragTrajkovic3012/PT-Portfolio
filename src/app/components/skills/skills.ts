import { Component } from '@angular/core';

interface Skill {
  name: string;
  category: string;
  level: number; // 1-5
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skills: Skill[] = [
    // Frontend
    { name: 'Angular', category: 'Frontend', level: 5 },
    { name: 'TypeScript', category: 'Frontend', level: 5 },
    { name: 'RxJS', category: 'Frontend', level: 5 },
    { name: 'NgRx', category: 'Frontend', level: 4 },
    { name: 'HTML5', category: 'Frontend', level: 5 },
    { name: 'CSS/SCSS', category: 'Frontend', level: 5 },
    { name: 'Tailwind CSS', category: 'Frontend', level: 5 },
    { name: 'Signals', category: 'Frontend', level: 4 },
    { name: 'Bootstrap', category: 'Frontend', level: 4 },
    { name: 'Figma', category: 'Frontend', level: 4 },

    // Backend
    { name: 'Node.js', category: 'Backend', level: 5 },
    { name: 'Python', category: 'Backend', level: 4 },
    { name: 'Java', category: 'Backend', level: 3 },
    { name: '.NET', category: 'Backend', level: 3 },
    { name: 'SQL', category: 'Backend', level: 4 },

    // Tools & Other
    { name: 'Git', category: 'Tools', level: 5 },
    { name: 'VS Code', category: 'Tools', level: 5 },
    { name: 'npm/yarn', category: 'Tools', level: 5 },
    { name: 'Kubernetes', category: 'Tools', level: 4 },
    { name: 'AWS', category: 'Tools', level: 4 },
    { name: 'Jira', category: 'Tools', level: 5 },
    { name: 'Trello', category: 'Tools', level: 4 },
    { name: 'Responsive Design', category: 'Design', level: 5 },
  ];

  // Group skills by category
  get skillsByCategory() {
    const grouped = new Map<string, Skill[]>();
    this.skills.forEach((skill) => {
      if (!grouped.has(skill.category)) {
        grouped.set(skill.category, []);
      }
      grouped.get(skill.category)!.push(skill);
    });
    return Array.from(grouped.entries());
  }

  // Get proficiency percentage
  getProficiency(level: number): number {
    return (level / 5) * 100;
  }
}
