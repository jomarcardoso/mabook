import { Component, OnInit } from '@angular/core';

interface Slide {
  src: string;
  alt: string;
  active: boolean;
  title: string;
  description: string;
}

@Component({
  selector: 'app-carousel-banner',
  templateUrl: './carousel-banner.component.html',
  styleUrls: ['./carousel-banner.component.scss']
})
export class CarouselBannerComponent implements OnInit {
  slides: Slide[] = [{
    active: false,
    alt: 'b',
    src: 'a',
    description: 'descrição do slide',
    title: 'Título do slide',
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
