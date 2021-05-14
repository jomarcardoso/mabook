import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselBannerComponent } from './carousel-banner/carousel-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselBannerComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
