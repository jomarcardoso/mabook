import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/services/auth/auth.service';
import { Banner } from '../shared/services/banner/banner.constants';

@Component({
  selector: 'app-carousel-banner',
  templateUrl: './carousel-banner.component.html',
  styleUrls: ['./carousel-banner.component.scss']
})
export class CarouselBannerComponent implements OnInit {
  private slideCollection: AngularFirestoreCollection<Banner>;
  slides: Observable<Banner[]>;
  openedCreateModal = false;

  constructor(afs: AngularFirestore, public authService: AuthService) {
    this.slideCollection = afs.collection<Banner>('banner');
    this.slides = this.slideCollection.valueChanges();
  }

  ngOnInit(): void {
  }

  openCreateModal() {
    this.openedCreateModal = true;
  }

}
