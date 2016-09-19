import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import ContactComponent from './contact.component';

const ContactRoutes: Routes = [
    {
        path: 'contact',
        component: ContactComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(ContactRoutes);
