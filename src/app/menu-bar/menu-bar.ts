import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-menu-bar',
  imports: [RouterModule, MatIconModule],
  templateUrl: './menu-bar.html',
  styleUrl: './menu-bar.scss',
})
export class MenuBar {
  protected readonly title = signal('my-portfolio');

  menuOpen = signal(false);

  ngOnInit(): void {
    // Open menu on desktop by default
    if (window.innerWidth >= 768) {
      this.menuOpen.set(true);
    }
  }

  toggleMenu() {
    this.menuOpen.update((v) => !v);
  }

  closeMenuOnMobile() {
    // Close menu on mobile after navigation
    if (window.innerWidth < 768) {
      this.menuOpen.set(false);
    }
  }
}
