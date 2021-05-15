// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { FirebaseOptions } from "@angular/fire";

const firebaseConfig: FirebaseOptions = {
  apiKey: 'AIzaSyAdDSsuHjbcVR9TRWTN4ILVyrt94aPez_8',
  authDomain: 'mabook-d8a92.firebaseapp.com',
  projectId: 'mabook-d8a92',
  storageBucket: 'mabook-d8a92.appspot.com',
  messagingSenderId: '521851974766',
  appId: '1:521851974766:web:6aad1b7afba9df8583a27f',
  measurementId: 'G-JTT7726GWE',
  // https://mabook-d8a92.firebaseapp.com/__/auth/handler
}

export const environment = {
  production: false,
  firebaseConfig,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
