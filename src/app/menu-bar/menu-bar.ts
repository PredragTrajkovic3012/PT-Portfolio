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

  ngOnInit(): void {}

  menuOpen = signal(true);

  toggleMenu() {
    this.menuOpen.update((v) => !v);
  }
}
