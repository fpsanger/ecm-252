import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../model/pessoa';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent {
  pessoa: Pessoa = new Pessoa();
  profissoes = ['Engenheiro', 'Professor', 'Químico', 'Zoólogo'];
  constructor() {}

  salvar(pessoaForm) {
    // this.pessoa.nome = pessoaForm.value.nome;
    // this.pessoa.fone = pessoaForm.value.fone;
    // this.pessoa.email = pessoaForm.value.email;
    // this.pessoa.profissao = pessoaForm.value.profissao;
    console.log(this.pessoa);
    console.log(pessoaForm);
  }
}
