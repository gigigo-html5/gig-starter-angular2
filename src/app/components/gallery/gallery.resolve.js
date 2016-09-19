import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import GalleryService from './gallery.service';

@Injectable()
export default class GalleryResolve implements Resolve {
    constructor(galleryService:GalleryService) {
        this.galleryService = galleryService;
    }

    resolve(route:ActivatedRouteSnapshot) {
        return this.galleryService.getPhotos();
    }
}
