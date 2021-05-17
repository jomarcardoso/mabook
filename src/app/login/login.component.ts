import { Component, OnInit } from '@angular/core';
import { FirebaseUISignInFailure, FirebaseUISignInSuccessWithAuthResult } from 'firebaseui-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  successCallback(signInSuccessData: FirebaseUISignInSuccessWithAuthResult) {
    console.log(signInSuccessData);
  }

  errorCallback(errorData: FirebaseUISignInFailure) {
    console.log(errorData);
  }

  uiShownCallback() {
    console.log('callback')
  }

}
