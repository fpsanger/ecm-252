import { Component } from '@angular/core';
import { Previsao } from './model/previsao';
import { PrevisoesService } from './previsoes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Aula12-injecao-dependencias-http';

  // previsoes: Previsao[] = [
  //   {
  //     data: '20/02/2020 15:00',
  //     descricao: 'Sol',
  //     tempMax: 32,
  //     tempMin: 27,
  //     humidity: 0.87,
  //     imgURL: '../assets/01d.png',
  //   },
  //   {
  //     data: '20/02/2020 18:00',
  //     descricao: 'Sol com nuvens',
  //     tempMax: 28,
  //     tempMin: 22,
  //     humidity: 0.85,
  //     imgURL: '../assets/02d.png',
  //   },
  //   {
  //     data: '20/02/2020 21:00',
  //     descricao: 'Noite limpa',
  //     tempMax: 24,
  //     tempMin: 18,
  //     humidity: 0.82,
  //     imgURL: '../assets/01n.png',
  //   },
  // ];

  previsoes: Previsao[];

  constructor(private previsoesService: PrevisoesService) {
    previsoesService.obterPrevisoes().subscribe((previsoes) => {
      this.previsoes = previsoes['list'];
      console.log(this.previsoes);
    });
  }
}
