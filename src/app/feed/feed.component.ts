import { Component, OnInit } from '@angular/core';
import { Post } from '../../types';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  title = 'Notícias';
  posts: Post[] = [{
    title: 'Professora minerva lança seu primeiro livro ensinando como estudar idiomas sem sair de casa',
    img: {
      alt: '',
      src: '',
    },
    categories: [],
    date: new Date(),
    description: '',
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
