import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UnPiattoComponent } from './un-piatto/un-piatto.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { AutenticazioneService } from './common/autenticazione.service';
import { ElencopiattiService } from './common/elencopiatti.service';
import { OrdineComponent } from './ordine/ordine.component';
import { OridiniamoService } from './common/oridiniamo.service';
import { ErroreComponent } from './errore/errore.component';
// import { AngularFireModule } from 'angularfire2';

const LISTA_ROUTES = [
  { path: '', component: LoginComponent },
  { path: 'accesso', component: LoginComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'ordine', component: OrdineComponent },
  { path: 'unpiatto', component: UnPiattoComponent },
  { path: '**', component: ErroreComponent }
];

// const firebaseConfig = {
//   apiKey: 'AIzaSyCQw4MkPA-J5DHaBdfFDCEHrtumdDWGF8o',
//   authDomain: 'prova-e4cf7.firebaseapp.com',
//   databaseURL: 'https://prova-e4cf7-default-rtdb.firebaseio.com',
//   projectId: 'prova-e4cf7',
//   storageBucket: 'prova-e4cf7.appspot.com',
//   messagingSenderId: '498971305844',
//   appId: '1:498971305844:web:d5d270d93dd135fe836e21',
//   measurementId: 'G-MSGFFCT0C4'
// };

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(LISTA_ROUTES),
    // AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [
    AppComponent,
    UnPiattoComponent,
    MenuComponent,
    LoginComponent,
    OrdineComponent,
    ErroreComponent
  ],
  bootstrap: [AppComponent],
  providers: [AutenticazioneService, ElencopiattiService, OridiniamoService]
})
export class AppModule {}
