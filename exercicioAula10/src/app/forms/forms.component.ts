import { Component, OnInit } from '@angular/core';
import { Aluno } from '../model/aluno';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  form: FormGroup;
  aluno: Aluno = new Aluno();

  alunos: Aluno[] = [];
  cursos = ['Engenharia', 'Administracao', 'Design'];
  curso: string;
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      nome: [null, [Validators.required]],
      idade: [null],
      email: [null],
      curso: [null],
    });
  }

  temValor(): boolean {
    return this.form.get('nome').value;
  }

  save() {
    // this.aluno.nome = this.form.get('nome').value;
    // this.aluno.idade = this.form.get('idade').value;
    // this.aluno.email = this.form.get('email').value;

    this.curso = this.form.get('curso').value;
    this.alunos.push(this.form.value);
  }
}
