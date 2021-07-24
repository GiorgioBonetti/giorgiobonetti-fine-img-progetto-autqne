import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticazioneService } from '../common/autenticazione.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  utente: string;
  pwd: string;
  log: boolean;
  testo: string;

  constructor(private mioServizio: AutenticazioneService, private Nav: Router
  ) {}

  ngOnInit() {
    if (this.isAutorizzato()) {
      this.testo = 'ESCI';
      this.utente = 'giorgio';
      this.pwd = '****';
    } else {
      this.testo = 'ACCEDI';
    }
  }

  autorizza() {
    if (!this.isAutorizzato()) {
      if (this.utente == 'giorgio' && this.pwd == 'vale') {
        this.mioServizio.setAutorizza(true);
        this.testo = 'ESCI';
        alert(
          '✅ Ciao ' +
            this.utente.toLocaleUpperCase() +
            ", hai effetuato l'accesso con successo ✅"
        );
        this.Nav.navigate(['menu']);
      } else {
        alert('⚠️ Attenzione username o password SBALGIATA ⚠️');
        this.pwd = '';
      }
    } else {
      this.mioServizio.setAutorizza(false);
      this.testo = 'ACCEDI';
      alert(
        '❌⚠️✅ Ciao ' +
          this.utente.toLocaleUpperCase() +
          ", hai effetuato l'uscita con successo ✅⚠️❌"
      );
      this.utente = '';
      this.pwd = '';
    }
  }

  isAutorizzato(): boolean {
    return this.mioServizio.getAutorizza();
  }
}
