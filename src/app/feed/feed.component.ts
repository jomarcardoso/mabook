import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Post } from '../../types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  private postCollection: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;
  title = 'Novidades da semana';

  constructor(afs: AngularFirestore) {
    this.postCollection = afs.collection<Post>('news');
    this.posts = this.postCollection.valueChanges();
  }

  ngOnInit(): void {
  }

}
