import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth/auth.service';
import { Post } from '../../types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() post: Post;

  constructor(
    public authService: AuthService,
  ) {}

  ngOnInit(): void {
  }

}
