import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ResidentialComponent } from './residential/residential.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    GalleryComponent,
    ResidentialComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
