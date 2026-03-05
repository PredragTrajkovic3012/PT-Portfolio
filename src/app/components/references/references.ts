import { Component } from '@angular/core';

interface Reference {
  name: string;
  image: string;
  description: string;
  linkedin?: string;
  rating: number;
  title: string;
}

@Component({
  selector: 'app-references',
  imports: [],
  templateUrl: './references.html',
  styleUrl: './references.scss',
})
export class References {
  references: Reference[] = [
    {
      name: 'Michael Michalis',
      image: '/references/michael_michalis.png',
      title: 'CEO at DMR',
      description:
        'Predrag demonstrated outstanding technical proficiency and a genuine commitment to excellence during his time at DMR. His problem-solving abilities and dedication to clean code set him apart as a top-tier developer.',
      linkedin: 'https://www.linkedin.com/in/michalisamichael/',
      rating: 5,
    },
    {
      name: 'Milos Orlić',
      image: '/references/milos.png',
      title: 'CEO at Intelligent Betting Software',
      description:
        'Predrag brings both technical depth and strategic thinking to every project. His ability to handle complex systems and deliver scalable solutions made a significant impact on our product. Highly recommended.',
      linkedin: 'https://www.linkedin.com/in/milo%C5%A1-orli%C4%87-b51a0929/',
      rating: 5,
    },
    {
      name: 'Milun Jolić',
      image: '/references/milun.png',
      title: 'Marketing Specialist & Friend',
      description:
        'Predrag is not only a brilliant developer but also a great collaborator and friend. His ability to bridge technical and non-technical discussions made cross-functional work incredibly smooth and productive.',
      linkedin: 'https://www.linkedin.com/in/milun-jolic/',
      rating: 5,
    },
    {
      name: 'Nikola Gavrilov',
      image: '/references/nikola.png',
      title: 'Frontend Developer',
      description:
        "Working alongside Predrag reinforced why he's such a valuable team member. His deep Angular expertise, mentorship, and collaborative spirit elevated our entire frontend development practice significantly.",
      linkedin: 'https://www.linkedin.com/in/nikola-gavrilov-97509519a/',
      rating: 5,
    },
    {
      name: 'Djordje Lelek',
      image: '/references/lelek.png',
      title: 'Backend Developer',
      description:
        'Predrag is an exceptional full-stack collaborator. His understanding of backend requirements and ability to build robust, scalable frontends made our joint projects seamless and successful.',
      linkedin: 'https://www.linkedin.com/in/djordje-lelek-3580b7193/',
      rating: 5,
    },
    {
      name: 'Bojan Pribić',
      image: '/references/bojan_pribic.png',
      title: 'Photographer & Designer',
      description:
        'Predrag is an exceptional developer with a keen eye for design and user experience. His technical skills combined with creative thinking made our collaborations truly special and impactful.',

      rating: 5,
    },
  ];

  // Helper method to generate star array
  getStars(rating: number): number[] {
    return Array(rating)
      .fill(0)
      .map((_, i) => i + 1);
  }
}
