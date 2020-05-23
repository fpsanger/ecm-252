import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-angular-diretivas',
  templateUrl: './angular-diretivas.component.html',
  styleUrls: ['./angular-diretivas.component.css'],
})
export class AngularDiretivasComponent {
  @Input() pessoas;

  textoBotao = 'Esconder';
  esconder = false;

  // pessoas = [
  //   { nome: 'José', idade: 18 },
  //   { nome: 'Maria', idade: 22 },
  // ];

  alterarExibicao() {
    this.textoBotao = this.esconder ? 'Exibir' : 'Esconder';
    this.esconder = !this.esconder;
  }

  // adicionar(nome, idade) {
  //   this.pessoas = [{ nome: nome, idade: idade }, ...this.pessoas];
  // }

  // constructor() {}

  // ngOnInit(): void {}
}
