import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Output() pessoaAdicionada = new EventEmitter();

  mostrar = false;

  nome: string;
  idade: number;
  //exibirCaixa = false;

  textoBotao = 'Esconder';
  esconder = false;

  // numero;
  // produto;

  // gerarNumero() {
  //   this.numero = Math.floor(Math.random() * 6) + 1;
  // }

  pessoas = [
    { nome: 'José', idade: 18 },
    { nome: 'Maria', idade: 22 },
  ];

  alterarExibicao() {
    this.textoBotao = this.esconder ? 'Exibir' : 'Esconder';
    this.esconder = !this.esconder;
  }

  adicionar(nome, idade) {
    this.pessoas = [{ nome: nome, idade: idade }, ...this.pessoas];
    this.pessoaAdicionada.emit(this.pessoas);
  }

  // alterarNome(nome) {
  //   console.log(nome.target.value);
  //   this.nome = nome.target.value;
  // }

  // adicionar(nomeInput) {
  //   this.nome = nomeInput.value;
  //   this.exibirCaixa = true;
  // }

  // alterarProduto(produtoInput) {
  //   this.produto = 'Novo produto: ' + produtoInput.value;
  // }

  onAdicionarPessoa(pessoa) {
    this.pessoas = [pessoa, ...this.pessoas];
  }

  cadastrarPessoa() {
    this.mostrar = !this.mostrar;
  }
}
