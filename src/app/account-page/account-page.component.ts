import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from '../shared/services/auth/auth.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit {
  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone,
    // private afAuth: AngularFireAuth,
  ) { }

  ngOnInit(): void {
    // this.afAuth.authState.subscribe(d => console.log(d));
  }

  logout() {
    // this.afAuth.signOut();
  }
}
