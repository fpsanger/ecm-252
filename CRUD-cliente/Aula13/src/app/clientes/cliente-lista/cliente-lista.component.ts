import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from 'src/app/model/model.cliente';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css'],
})
export class ClienteListaComponent implements OnInit {
  @Input() clientes: Cliente[] = [];

  constructor() {}

  ngOnInit(): void {}
}
