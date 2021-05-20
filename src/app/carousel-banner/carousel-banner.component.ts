import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
interface Slide {
  mobileUrl: string;
  deskUrl: string;
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
  private slideCollection: AngularFirestoreCollection<Slide>;
  slides: Observable<Slide[]>;

  constructor(afs: AngularFirestore) {
    this.slideCollection = afs.collection<Slide>('banner');
    this.slides = this.slideCollection.valueChanges();

    console.log(this.slideCollection);
  }

  ngOnInit(): void {
  }

}
