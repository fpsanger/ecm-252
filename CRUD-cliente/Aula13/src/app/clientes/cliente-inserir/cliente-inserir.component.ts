import { Component, EventEmitter, Output } from '@angular/core';
import { Cliente } from 'src/app/model/model.cliente';

@Component({
  selector: 'app-cliente-inserir',
  templateUrl: './cliente-inserir.component.html',
  styleUrls: ['./cliente-inserir.component.css'],
})
export class ClinteInserirComponent {
  @Output() clienteAdicionado = new EventEmitter<Cliente>();
  nome: string;
  fone: string;
  email: string;

  onAdicionarCliente() {
    const cliente: Cliente = {
      nome: this.nome,
      fone: this.fone,
      email: this.email,
    };
    this.clienteAdicionado.emit(cliente);
  }
}
