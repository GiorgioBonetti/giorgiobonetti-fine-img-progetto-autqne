import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AutenticazioneService } from '../common/autenticazione.service';
import { ElencopiattiService } from '../common/elencopiatti.service';
import { OridiniamoService } from '../common/oridiniamo.service';
import { Piatto } from '../common/piatto';
import { OrdineComponent } from '../ordine/ordine.component';

@Component({
  selector: 'app-un-piatto',
  templateUrl: './un-piatto.component.html',
  styleUrls: ['./un-piatto.component.css']
})
export class UnPiattoComponent implements OnInit {
  @Input() piatto: Piatto;
  @Input() piattoById: string;
  @Input() vedere: boolean = true;

  @Output() evento = new EventEmitter();

  path: string;
  constructor(
    private mioServizio: AutenticazioneService,
    private elenco: ElencopiattiService,
    private oridine: OridiniamoService
  ) {}

  ngOnInit() {
    // this.piatto = this.elenco.elencoPiatti[0];
    this.path =
      'https://raw.githubusercontent.com/GiorgioBonetti/FotoCibi/main/';
    if(this.piattoById != null)
      this.trovaPiatto();
  }

  isAutorizzato(): boolean {
    return this.mioServizio.getAutorizza();
  }

  addOrdine(piattoOrdine: Piatto) {
    this.oridine.addPiatto(piattoOrdine);
  }

  rimuovi(i: Piatto) {
    this.oridine.removePiatto(i);
    this.evento.emit();
  }

  trovaPiatto() {
    for(let i of this.elenco.elencoPiatti)
      if(i.id == this.piattoById)
        this.piatto = i;
  }
}
