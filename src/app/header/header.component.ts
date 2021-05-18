import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Mabook';
  genders = ['Vampiros', 'Ficção', 'Aventura']

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
