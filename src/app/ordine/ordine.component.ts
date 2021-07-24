import { Component, OnInit } from '@angular/core';
import { AutenticazioneService } from '../common/autenticazione.service';
import { OridiniamoService } from '../common/oridiniamo.service';
import { Piatto } from '../common/piatto';

@Component({
  selector: 'app-ordine',
  templateUrl: './ordine.component.html',
  styleUrls: ['./ordine.component.css']
})
export class OrdineComponent implements OnInit {
  ordini: Piatto[];
  totaleSoldi: number;
  path: string;

  constructor(
    private ordine: OridiniamoService,
    private mioServizio: AutenticazioneService
  ) {}

  ngOnInit() {
    this.path = 'https://raw.githubusercontent.com/GiorgioBonetti/FotoCibi/main/';
    this.totaleSoldi = 0;
    this.vettore();
    this.totale();
  }

  vettore() {
    this.ordini = this.ordine.getPiatto();
  }
  
  totale() {
    this.totaleSoldi = this.ordine.getTotale();
  }

  isAutorizzato(): boolean {
    return this.mioServizio.getAutorizza();
  }
}
