import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Curso } from '../model/curso';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  form: FormGroup;
  @Output() onSave = new EventEmitter();
  @Input() cursos: Curso[] = [];
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this._formBuilder.group({
      nome: [''],
      descricao: [''],
    });
  }

  save() {
    this.cursos.push(this.form.value);
    console.log(this.cursos);
    this.onSave.emit(this.cursos);
  }
}
