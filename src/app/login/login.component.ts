import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebaseui from 'firebaseui';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import EmailAuthProvider = firebase.auth.EmailAuthProvider;
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
import { Config } from '@angular/fire/analytics';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(
    private mioServizio: AutenticazioneService,
    private afAuth: AngularFireAuth, 
    private router: Router  ) {}

  ngOnInit() {
    if (this.isAutorizzato()) {
      this.pwd = '****';
    } else {
      this.testo = 'ACCEDI';
    }

    this.afAuth.app.then(app => {
      const uiConfig: Config = {
        signInOptions: [
          EmailAuthProvider.PROVIDER_ID,
          GoogleAuthProvider.PROVIDER_ID
        ],
        callbacks: {
          sigInSuccerWithAuthResult: this.onLoginSuccesfull.bind(this)
        }
      };
      this.ui = new firebaseui.auth.AuthUI(app.auth());
      this.ui.start('#firebaseui-auth-container', uiConfig);
      this.ui.disableAutoSignIn();
    });


  }

  isAutorizzato(): boolean {
    return this.mioServizio.getAutorizza();
  }

  ngOnDestroy() {
    this.ui.delete();
  }

  onLoginSuccesfull(result) {
    console.log('Firebase UI result:', result);
    this.router.navigateByUrl('');
  }
}
