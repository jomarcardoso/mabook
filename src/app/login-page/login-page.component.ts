import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {
  FirebaseUISignInFailure,
  FirebaseUISignInSuccessWithAuthResult
} from 'firebaseui-angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth, private router: Router) {
  }

  ngOnInit(): void {
    this.afAuth.authState.subscribe();
  }

  logout() {
    this.afAuth.signOut();
  }

  successCallback(data: FirebaseUISignInSuccessWithAuthResult) {
    this.router.navigate(['page']);
  }

  errorCallback(data: FirebaseUISignInFailure) {
    console.warn('errorCallback', data);
  }

  uiShownCallback() {
  }
}
