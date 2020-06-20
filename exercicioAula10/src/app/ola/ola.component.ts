import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ola',
  templateUrl: './ola.component.html',
  styleUrls: ['./ola.component.css'],
})
export class OlaComponent {
  valor: number;

  obterEstilosParaOCard() {
    return {
      backgroundColor: '#eee6ff',
      padding: '8px',
      width: '25rem',
      border: 'none',
      borderRadius: '4px',
    };
  }

  obterClassesRodape() {
    return ['rodape'];
  }

  ehPar(): boolean {
    return this.valor % 2 == 0;
  }
}
