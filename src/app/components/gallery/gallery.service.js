import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export default class GalleryService {

    constructor(http:Http) {
        this.url = 'https://jsonplaceholder.typicode.com/photos';
        this.http = http;
    }

    getPhotos() {
        return this.http.get(this.url)
            .map((response) => response.json())
    }
}
