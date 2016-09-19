import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { HttpModule } from '@angular/http';
import { AppComponent }   from './app.component';
import { HeaderComponent, MenuComponent, HomeComponent, ContactComponent } from 'components';
import { routing } from './app.routing';
import { GalleryModule } from './components/gallery/gallery.module';
import { ContactModule } from './components/contact/contact.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        GalleryModule,
        ContactModule,
        routing
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        MenuComponent,
        HomeComponent
    ],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
