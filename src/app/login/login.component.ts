import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import { FirebaseUISignInFailure, FirebaseUISignInSuccessWithAuthResult } from 'firebaseui-angular';
import { AuthService } from '../shared/services/auth/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

interface User {
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  afs: AngularFirestore;

  constructor(
    public authService: AuthService,
    private afAuth: AngularFireAuth,
    private router: Router,
    afs: AngularFirestore
  ) {
    this.afs = afs;
  }

  ngOnInit(): void {
    this.afAuth.authState.subscribe();
  }

  logout() {
    this.afAuth.signOut();
  }

  successCallback(data: FirebaseUISignInSuccessWithAuthResult) {
    const userCollection = this.afs.collection<User>('users');

    if (data.authResult.additionalUserInfo.isNewUser) {
      const { displayName = '', email = '', photoURL = '', uid = '' } = data.authResult.user;

      userCollection.add({
        displayName,
        email,
        photoURL,
        uid,
      });
    }

    this.router.navigate(['/']);
  }

  errorCallback(data: FirebaseUISignInFailure) {
    console.warn('errorCallback', data);
  }

  uiShownCallback() {
  }
}
