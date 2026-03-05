import { Component, Inject, signal } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Project } from './projects.constant';
import { getSkillIcon } from './skill-icons.constant';

@Component({
  selector: 'app-project-detail-dialog',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div
      class="dialog-content"
      [style.--color-global]="getThemeColor()"
      [style.--color-text]="'#222222'"
    >
      <!-- HEADER INFO AT TOP -->
      <div class="mb-6">
        <h2 class="text-2xl font-bold text-[var(--color-global)] mb-4">
          {{ data.project.name }}
        </h2>
        <div
          class="flex flex-col md:flex-row gap-6 text-sm bg-[var(--color-global)]/5 p-4 rounded-lg"
        >
          <div>
            <p
              class="text-[var(--color-text)]/60 text-xs uppercase tracking-wide"
            >
              Company
            </p>
            <p class="font-semibold text-[var(--color-text)]">
              {{ data.project.company }}
            </p>
          </div>
          <div>
            <p
              class="text-[var(--color-text)]/60 text-xs uppercase tracking-wide"
            >
              Position
            </p>
            <p class="font-semibold text-[var(--color-text)]">
              {{ data.project.position }}
            </p>
          </div>
          <div>
            <p
              class="text-[var(--color-text)]/60 text-xs uppercase tracking-wide"
            >
              Period
            </p>
            <p class="font-semibold text-[var(--color-text)]">
              {{ data.project.period }}
            </p>
          </div>
          <div>
            <p
              class="text-[var(--color-text)]/60 text-xs uppercase tracking-wide"
            >
              Location
            </p>
            <p class="font-semibold text-[var(--color-text)]">
              {{ data.project.location }}
            </p>
          </div>
        </div>
      </div>

      <!-- IMAGES & CONTENT SECTION -->
      <div>
        <!-- MAIN IMAGE -->
        @if (data.project.images && data.project.images.length > 0) {
          <div class="mb-6">
            <img
              (click)="openLightbox(selectedImage())"
              [src]="selectedImage()"
              [alt]="data.project.name"
              class="w-full h-64 md:h-72 object-cover rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
            />
          </div>

          <!-- THUMBNAIL GALLERY -->
          <div class="mb-6">
            <div class="flex gap-2 overflow-x-auto pb-2">
              @for (image of data.project.images; track image) {
                <button
                  (click)="setSelectedImage(image)"
                  [class.active]="selectedImage() === image"
                  class="flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-all duration-200 
                         hover:border-[var(--color-global)] cursor-pointer"
                  [style.borderColor]="
                    selectedImage() === image
                      ? 'var(--color-global)'
                      : '#e5e7eb'
                  "
                >
                  <img
                    [src]="image"
                    [alt]="data.project.name"
                    class="w-full h-full object-cover"
                  />
                </button>
              }
            </div>
          </div>
        }

        <!-- DESCRIPTION -->
        <div class="mb-6">
          <h3 class="text-lg font-bold mb-3 text-[var(--color-text)]">
            About this project
          </h3>
          <p class="text-[var(--color-text)]/80 leading-relaxed text-sm">
            {{ data.project.fullDescription }}
          </p>
        </div>

        <!-- SKILLS -->
        <div class="mb-4">
          <h3 class="text-lg font-bold mb-3 text-[var(--color-text)]">
            Technologies Used
          </h3>
          <div class="flex flex-wrap gap-3">
            @for (skill of data.project.skills; track skill) {
              <span
                class="flex items-center gap-2 px-3 py-2 rounded-full bg-[var(--color-global)]/20 text-[var(--color-global)] 
                       text-xs font-semibold hover:bg-[var(--color-global)]/30 transition-colors duration-200"
                [title]="skill"
              >
                @if (hasIcon(skill)) {
                  <mat-icon class="text-sm">{{
                    getIconDefinition(skill)
                  }}</mat-icon>
                }
                {{ skill }}
              </span>
            }
          </div>
        </div>
      </div>

      <!-- CLOSE BUTTON -->
      <div class="mt-8 flex justify-end">
        <button
          (click)="close()"
          class="px-6 py-2 bg-[var(--color-global)] text-white font-bold rounded-lg
                 hover:shadow-lg transition-all duration-300"
        >
          Close
        </button>
      </div>

      <!-- LIGHTBOX OVERLAY -->
      @if (isLightboxOpen()) {
        <div (click)="closeLightbox()" class="lightbox-overlay">
          <div (click)="$event.stopPropagation()" class="lightbox-content">
            <!-- CLOSE BUTTON IN LIGHTBOX -->
            <button
              (click)="closeLightbox()"
              class="lightbox-close-btn"
              [style.color]="'var(--color-global)'"
            >
              <mat-icon>close</mat-icon>
            </button>

            <img
              [src]="lightboxImage()"
              [alt]="data.project.name"
              class="lightbox-image"
            />
          </div>
        </div>
      }
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        --color-global: #2563eb;
        --color-text: #222222;
      }

      .dialog-content {
        padding: 24px;
        max-height: calc(90vh - 48px);
        overflow-y: auto;
        position: relative;
      }

      .dialog-content::-webkit-scrollbar {
        width: 8px;
      }

      .dialog-content::-webkit-scrollbar-track {
        background: #f1f5f9;
        border-radius: 4px;
      }

      .dialog-content::-webkit-scrollbar-thumb {
        background: var(--color-global);
        border-radius: 4px;
      }

      .dialog-content::-webkit-scrollbar-thumb:hover {
        background: var(--color-global);
        opacity: 0.8;
      }

      button[class*='w-20'] {
        transition: all 0.2s ease;
      }

      button[class*='w-20']:hover {
        transform: scale(1.05);
      }

      button[class*='w-20'].active {
        transform: scale(1.05);
      }

      .lightbox-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.85);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        animation: fadeIn 0.3s ease-in-out;
      }

      .lightbox-content {
        position: relative;
        width: 90%;
        height: 90%;
        max-width: 90vw;
        max-height: 90vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .lightbox-image {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        border-radius: 8px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
      }

      .lightbox-close-btn {
        position: absolute;
        top: 16px;
        right: 16px;
        background: transparent;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        transition: all 0.2s ease;
        z-index: 1001;
      }

      .lightbox-close-btn:hover {
        background-color: rgba(255, 255, 255, 0.1);
        transform: scale(1.1);
      }

      .lightbox-close-btn mat-icon {
        font-size: 28px;
        width: 28px;
        height: 28px;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    `,
  ],
})
export class ProjectDetailDialogComponent {
  selectedImage = signal<string>('');
  isLightboxOpen = signal<boolean>(false);
  lightboxImage = signal<string>('');

  constructor(
    public dialogRef: MatDialogRef<ProjectDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { project: Project; themeColor: any },
  ) {
    if (this.data.project.images && this.data.project.images.length > 0) {
      this.selectedImage.set(this.data.project.images[0]);
    }
  }

  setSelectedImage(image: string): void {
    this.selectedImage.set(image);
  }

  openLightbox(image: string): void {
    this.lightboxImage.set(image);
    this.isLightboxOpen.set(true);
  }

  closeLightbox(): void {
    this.isLightboxOpen.set(false);
  }

  getThemeColor(): string {
    const colorMap: { [key: string]: string } = {
      blue: '#2563eb',
      red: '#dc2626',
      green: '#16a34a',
    };
    return colorMap[this.data.themeColor.name] || '#2563eb';
  }

  getSkillIcon(skill: string): string | null {
    return getSkillIcon(skill);
  }

  hasIcon(skill: string): boolean {
    return getSkillIcon(skill) !== null;
  }

  getIconDefinition(skill: string): string {
    return getSkillIcon(skill) || 'code';
  }

  close(): void {
    this.dialogRef.close();
  }
}
