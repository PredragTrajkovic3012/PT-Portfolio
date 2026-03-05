import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  currentYear = new Date().getFullYear();

  socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/predrag-trajkovic-1b8929155/',
      icon: 'linkedin',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/PredragTrajkovic3012',
      icon: 'github',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/predragtrajkovic4/',
      icon: 'instagram',
    },
  ];
}
