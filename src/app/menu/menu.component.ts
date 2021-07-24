import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticazioneService } from '../common/autenticazione.service';
import { ElencopiattiService } from '../common/elencopiatti.service';
import { Piatto } from '../common/piatto';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(
    private mioServizio: AutenticazioneService,
    private elenco: ElencopiattiService,
    private Nav: Router
  ) {}

  elencopiatti: Piatto[];
  selezionato: number = 0;
  piattoSelezionato: Piatto;
  path = 'https://raw.githubusercontent.com/GiorgioBonetti/FotoCibi/main/';
  search: string;
  item: Piatto;

  ngOnInit() {
    this.elencopiatti = this.elenco.elencoPiatti;
    this.selezionatoMetodo(0);
  }

  isAutorizzato(): boolean {
    return this.mioServizio.getAutorizza();
  }

  selezionatoMetodo(indice: number) {
    this.selezionato = indice;
    this.piattoSelezionato = this.elenco[indice];
  }
  cliccato(indice: number) {
    this.selezionatoMetodo(indice);
    this.Nav.navigate(['unpiatto']);
  }
}
