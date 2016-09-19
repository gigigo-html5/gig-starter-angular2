import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import GalleryComponent from './gallery.component';
import GalleryService from './gallery.service';
import GalleryResolve from './gallery.resolve';
import { routing } from './gallery.routing';


@NgModule({
    imports:        [routing, CommonModule],
    providers:      [GalleryService, GalleryResolve],
    declarations:   [GalleryComponent]
})

export class GalleryModule { }
