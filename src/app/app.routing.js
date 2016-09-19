import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent, ContactComponent } from 'components';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
