import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import { FirebaseUISignInFailure, FirebaseUISignInSuccessWithAuthResult } from 'firebaseui-angular';
import { AuthService } from '../shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    public authService: AuthService,
    private afAuth: AngularFireAuth,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.afAuth.authState.subscribe(d => console.log(d));
  }

  logout() {
    this.afAuth.signOut();
  }

  successCallback(data: FirebaseUISignInSuccessWithAuthResult) {
    console.log('successCallback', data);
    this.router.navigate(['page']);
  }

  errorCallback(data: FirebaseUISignInFailure) {
    console.warn('errorCallback', data);
  }

  uiShownCallback() {
    console.log('UI shown');
  }
}
