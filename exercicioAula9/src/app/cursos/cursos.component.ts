import { Component, OnInit, Input } from '@angular/core';
import { Curso } from '../model/curso';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit {
  constructor(private _router: Router) {}

  cursos: Curso[] = [];

  buttonText1 = 'Cadastrar Curso';
  buttonText2 = 'Ver Cursos Cadastrados';
  registerVisible = false;
  cursoVisible = false;

  ngOnInit() {}

  toggleCursos() {
    this.buttonText2 = this.cursoVisible
      ? 'Ver Cursos Cadastrados'
      : 'Esconder';
    this.cursoVisible = !this.cursoVisible;
  }

  toggleRegister() {
    this.buttonText1 = this.registerVisible ? 'Cadastrar Curso' : 'Esconder';
    this.registerVisible = !this.registerVisible;
  }

  save(curso) {
    this.cursos = curso;
  }
}
