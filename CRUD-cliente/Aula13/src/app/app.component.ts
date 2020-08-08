import { Component } from '@angular/core';
import { Cliente } from './model/model.cliente';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  clientes: Cliente[] = [];

  onClienteAdicionado(cliente) {
    this.clientes = [...this.clientes, cliente];
    console.log(this.clientes);
  }
  title = 'Aula13';
}
