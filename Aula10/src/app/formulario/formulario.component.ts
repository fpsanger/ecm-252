import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  valor: number;
  constructor() {}

  obterEstilosParaOBotao() {
    return {
      backgroundColor: '#eee6ff',
      padding: '8px',
      width: '20%',
      border: 'none',
      borderRadius: '4px',
    };
  }

  obterClassesRodape() {
    return ['rodape'];
  }

  gerarValor() {
    this.valor = Math.round(Math.random() * 100) + 1;
  }

  ehPar(): boolean {
    return this.valor % 2 == 0;
  }
}
