import { Component, OnInit, Input } from '@angular/core';
import { Curso } from '../model/curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit {
  constructor() {}

  cursos: Curso[] = [];

  ngOnInit() {}

  save(curso) {
    this.cursos = curso;
  }
}
