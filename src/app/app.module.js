import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { HttpModule } from '@angular/http';
import { AppComponent }   from './app.component';
import { HeaderComponent, MenuComponent, HomeComponent, ContactComponent } from 'components';
import { routing } from './app.routing';
import { GalleryModule } from './components/gallery/gallery.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        GalleryModule,
        routing
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        MenuComponent,
        HomeComponent,
        ContactComponent
    ],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
