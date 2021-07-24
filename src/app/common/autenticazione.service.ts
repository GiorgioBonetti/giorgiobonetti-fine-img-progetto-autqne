import { Injectable } from '@angular/core';

@Injectable()
export class AutenticazioneService {
  autorizzato: boolean = false;

  constructor() {}

  setAutorizza(stato: boolean) {
    this.autorizzato = stato;
  }

  getAutorizza(): boolean {
    return this.autorizzato;
  }  
}
