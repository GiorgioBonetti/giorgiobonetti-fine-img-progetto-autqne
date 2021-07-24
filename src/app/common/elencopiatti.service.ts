import { Injectable } from '@angular/core';
import { Piatto } from './piatto';

@Injectable()
export class ElencopiattiService {

elencoPiatti: Piatto[] = [
  {
    id: '1',
    nome: 'Pasta al ragù',
    portata: 'primo',
    ingredienti: 'Pasta al sugo di carne con il pomodoro',
    nome_creatore: 'Piatto tipico bolognese',
    prezzo: 5.0,
  },
  {
    id: '2',
    nome: 'Pasta al pesto',
    portata: 'primo',
    ingredienti: 'Pasta e basilico, olio, pinoli',
    nome_creatore: 'Piatto tipico genovese',
    prezzo: 5.0,
  },
  {
    id: '3l',
    nome: 'Lasagne',
    portata: 'primo',
    ingredienti: 'Pasta e sugo di carne con il pomodoro, besciamella',
    nome_creatore: 'Piatto tipico dell\' Emilia Romagna',
    prezzo: 8.50,
  },
  {
    id: '4',
    nome: 'Riso ai formaggi',
    portata: 'primo',
    ingredienti: 'Riso con aggiutna di formaggio stracchino, grana e ricotta',
    nome_creatore: 'Piatto tipico dell\' Emilia Romagna',
    prezzo: 7.50,
  },
  {
    id: '5',
    nome: 'Bistecca ai Ferri',
    portata: 'secondo',
    ingredienti: 'Bistecca di manzo',
    nome_creatore: 'Piatto tipico italiano',
    prezzo: 6.50,
  },
  {
    id: '6',
    nome: 'Arrosto',
    portata: 'secondo',
    ingredienti: 'Lonza di maiale',
    nome_creatore: 'Piatto tipico della Danimarca',
    prezzo: 7.50,
  },
  {
    id: '7',
    nome: 'Filetto di pesce',
    portata: 'secondo',
    ingredienti: 'Merzluzzo',
    nome_creatore: 'Pesce proveniente dai Grandi Banchi di Terranova',
    prezzo: 8.0
  },
  {
    id: '8',
    nome: 'Patate al forno',
    portata: 'contorno',
    ingredienti: 'Patate, rosmarino',
    nome_creatore: 'Piatto tipico dell Messico, della Bolivia e del Perù',
    prezzo: 3.0
  },
  {
    id: '9',
    nome: 'Patate fritte',
    portata: 'contorno',
    ingredienti: 'Patate',
    nome_creatore: 'Piatto tipico del Belgio',
    prezzo: 3.0
  },
  {
    id: '10',
    nome: 'Mix di verdure cotte',
    portata: 'contorno',
    ingredienti: 'Broccoli, carote e piselli,',
    nome_creatore: 'Piatto tipico dell\' Italia',
    prezzo: 3.0,
  },
  {
    id: '11',
    nome: 'Pizza Margerita',
    portata: 'pizza',
    ingredienti: 'Pomodoro e mozzarella',
    nome_creatore: 'Piatto creato per la regina Margherita di Savoia nel 1889',
    prezzo: 6.0,
  },
  {
    id: '12',
    nome: 'Pizza Marinara',
    portata: 'pizza',
    ingredienti: 'Pomodoro, olio ed origano',
    nome_creatore: 'Piatto tipico dei marinai nel 1700',
    prezzo: 5.50,
  },
  {
    id: '13',
    nome: 'Pizza Capricciosa',
    portata: 'pizza',
    ingredienti: 'Pomodoro, mozzarella, funghi, carciofi, prosciutto, uova e olive',
    nome_creatore: 'Piatto tipico dell\' Italia',
    prezzo: 7.0,
  },
  {
    id: '14',
    nome: 'Pizza Diavola',
    portata: 'pizza',
    ingredienti: 'Pomodoro, mozzarella, salame piccante, peperoncino',
    nome_creatore: 'Piatto tipico dell\' Italia',
    prezzo: 7.50,
  },
  {
    id: '15',
    nome: 'Pizza Boscaiola',
    portata: 'pizza',
    ingredienti: 'Pomodoro, mozzarella, salsiccia e funghi',
    nome_creatore: 'Piatto tipico dell\' Italia',
    prezzo: 8.0,
  },
  {
    id: '16',
    nome: 'Pizza Quattro formaggi',
    portata: 'pizza',
    ingredienti: 'Mozzarella, parmigiano, gorgonzola e provola',
    nome_creatore: 'Piatto tipico dell\' Italia',
    prezzo: 8.50,
  },
  {
    id: '17',
    nome: 'Pizza Quattro stagioni',
    portata: 'pizza',
    ingredienti: 'Pomodoro, mozzarella, carciofi, prosciutto cotto, funghi e olive. Condimento diviso in quattro spicchi',
    nome_creatore: 'Piatto tipico dell\' Italia',
    prezzo: 7.50,
  },
  {
    id: '18',
    nome: 'Pizza Salsiccia e patate',
    portata: 'pizza',
    ingredienti: 'Mozzarella, salsiccia e patate',
    nome_creatore: 'Piatto tipico dell\' Italia',
    prezzo: 7.0,
  },
  {
    id: '19',
    nome: 'Pizza Napoletana',
    portata: 'pizza',
    ingredienti: 'Pomodoro, mozzarella, acciughe e origano',
    nome_creatore: 'Piatto tipico dell\' Italia',
    prezzo: 7.0,
  },
  {
    id: '20',
    nome: 'Mari e monti',
    portata: 'pizza',
    ingredienti: 'Pomodoro, mozzarella, metà con prosciutto cotto e funghi e metà ½ misto di mare',
    nome_creatore: 'Piatto tipico dell\' Italia',
    prezzo: 9.0,
  },
]
  constructor() { }

}