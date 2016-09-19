import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HeaderComponent, MenuComponent, HomeComponent } from 'components';
import { routing } from './app.routing';

@NgModule({
  imports:      [
      BrowserModule,
      routing
  ],
  declarations: [
      AppComponent,
      HeaderComponent,
      MenuComponent,
      HomeComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
