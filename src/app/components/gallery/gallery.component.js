import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';


@Component({
    selector: 'gallery',
    templateUrl: './gallery.view.html'
})

export default class GalleryComponent implements OnInit {


    constructor(route: ActivatedRoute) {
        this.route = route;
    }

    ngOnInit() {
        this.photos = this.route.snapshot.data['photos'];
        console.log(this.photos);
    }

}
