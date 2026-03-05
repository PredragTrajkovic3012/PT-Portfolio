import { Injectable, signal } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  isLoading = signal(false);

  constructor(private router: Router) {
    this.initializeLoaderTracking();
  }

  private initializeLoaderTracking(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe(() => {
        this.isLoading.set(true);
      });

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        // Čekaj 600ms da se animacija lepše vidi
        setTimeout(() => {
          this.isLoading.set(false);
        }, 600);
      });
  }
}
