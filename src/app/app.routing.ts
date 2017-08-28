import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ResidentialComponent } from './residential/residential.component';
import { GalleryComponent } from './gallery/gallery.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'residential',
    component: ResidentialComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
