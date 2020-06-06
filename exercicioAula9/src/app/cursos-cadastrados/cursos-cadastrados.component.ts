import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cursos-cadastrados',
  templateUrl: './cursos-cadastrados.component.html',
  styleUrls: ['./cursos-cadastrados.component.css'],
})
export class CursosCadastradosComponent implements OnInit {
  @Input() cursos;

  constructor() {}

  ngOnInit(): void {}
}
