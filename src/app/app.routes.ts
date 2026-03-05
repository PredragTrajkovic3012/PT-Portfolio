import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'summary', pathMatch: 'full' },
      {
        path: 'summary',
        loadComponent: () =>
          import('./pages/summary/summary').then((m) => m.Summary),
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('./pages/projects/projects').then((m) => m.Projects),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./pages/contact/contact').then((m) => m.Contact),
      },
      {
        path: '**',
        loadComponent: () =>
          import('./pages/not-found/not-found').then((m) => m.NotFound),
      },
    ],
  },
];
