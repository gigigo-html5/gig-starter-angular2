import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import GalleryComponent from './gallery.component';
import GalleryResolve from './gallery.resolve';

const GalleryRoutes: Routes = [
    {
        path: 'gallery',
        component: GalleryComponent,
        resolve: {
            photos: GalleryResolve
        }
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(GalleryRoutes);
