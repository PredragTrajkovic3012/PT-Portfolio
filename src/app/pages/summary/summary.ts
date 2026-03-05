import {
  Component,
  ViewChild,
  ElementRef,
  computed,
  effect,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme-service';
import { References } from '../../components/references/references';
import { Skills } from '../../components/skills/skills';

interface HobbyImage {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-summary',
  imports: [References, Skills, CommonModule],
  templateUrl: './summary.html',
  styleUrl: './summary.scss',
})
export class Summary {
  @ViewChild('profileImg') profileImg!: ElementRef<HTMLImageElement>;

  selectedImage = signal<HobbyImage | null>(null);
  isLightboxOpen = signal(false);

  hobbyImages: HobbyImage[] = [
    { src: '/hobbies/ski.PNG', alt: 'Skiing' },
    { src: '/hobbies/swimmer.PNG', alt: 'Swimming' },
    { src: '/hobbies/cs.jpg', alt: 'Gaming' },
    { src: '/hobbies/pistol.PNG', alt: 'Extreme Sports' },
  ];

  constructor(public themeService: ThemeService) {
    effect(() => {
      this.profileImage();
      this.resetAnimation();
    });
  }

  profileImage = computed(() => {
    const colorName = this.themeService.currentColor().name;
    return `/profile-pic/${colorName}_me.png`;
  });

  openLightbox(image: HobbyImage) {
    this.selectedImage.set(image);
    this.isLightboxOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.isLightboxOpen.set(false);
    document.body.style.overflow = 'auto';
  }

  onLightboxBackdropClick() {
    this.closeLightbox();
  }

  private resetAnimation() {
    if (this.profileImg?.nativeElement) {
      const img = this.profileImg.nativeElement;
      img.classList.remove('profile-image-animate');
      void img.offsetWidth;
      img.classList.add('profile-image-animate');
    }
  }
}
