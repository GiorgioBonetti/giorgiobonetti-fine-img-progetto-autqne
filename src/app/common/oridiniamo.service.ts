import { Injectable } from '@angular/core';
import { Piatto } from './piatto';

@Injectable()
export class OridiniamoService {
  ordin: Piatto[];
  totale: number;

  constructor() {
    this.ordin = [];
  }

  addPiatto(piatto: Piatto) {
    this.ordin.push(piatto);
  }

  removePiatto(piatto: Piatto) {
    for (let i = 0; i < this.ordin.length; i++)
    {
      let index = (this.ordin[i].id).indexOf(piatto.id);
      if (index > -1) 
      {
        this.ordin.splice(index, 1);
        break;
      }
    }
  }

  getPiatto(): Piatto[] {
    return this.ordin;
  }

  getTotale(): number {
    this.totale = 0;
    for (let i of this.ordin) {
      this.totale += i.prezzo;
    }
    return this.totale;
  }
}
