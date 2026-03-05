import {
  DOCUMENT,
  Inject,
  Injectable,
  Renderer2,
  RendererFactory2,
  signal,
} from '@angular/core';

interface ThemeColor {
  name: string;
  value: string;
  class: string;
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  darkMode = signal(window.matchMedia('(prefers-color-scheme: dark)').matches);
  currentColor = signal<ThemeColor>({
    name: 'blue',
    value: '#2563eb',
    class: 'theme-blue',
  });
  private renderer: Renderer2;
  constructor(
    rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document,
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);

    this.updateBodyClass();
  }

  toggleDarkMode() {
    this.darkMode.set(!this.darkMode());
    this.updateBodyClass();
  }

  setColor(color: ThemeColor) {
    this.currentColor.set(color);
    this.renderer.removeClass(this.document.body, 'theme-blue');
    this.renderer.removeClass(this.document.body, 'theme-red');
    this.renderer.removeClass(this.document.body, 'theme-green');
    this.renderer.addClass(this.document.body, color.class);
  }

  private updateBodyClass() {
    if (this.darkMode()) {
      this.renderer.addClass(this.document.body, 'dark');
    } else {
      this.renderer.removeClass(this.document.body, 'dark');
    }
  }
}
