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

  buttonText = 'Cadastrar Curso';
  registerVisible = false;

  ngOnInit() {}

  toggleRegister() {
    this.buttonText = this.registerVisible ? 'Cadastrar Curso' : 'Esconder';
    this.registerVisible = !this.registerVisible;
  }

  save(curso) {
    this.cursos = curso;
    console.log('Foi');
    console.log(curso);
  }
}
