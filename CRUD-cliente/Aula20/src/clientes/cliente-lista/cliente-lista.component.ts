import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ClienteService } from '../service/cliente.service';
import { Subscription } from 'rxjs';
import { Cliente } from 'src/model/model.cliente';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css'],
})
export class ClienteListaComponent implements OnInit, OnDestroy {
  clientes: Cliente[] = [];
  private clientesSubscription: Subscription;
  public estaCarregando = false;

  constructor(public clienteService: ClienteService) {}

  ngOnInit(): void {
    this.estaCarregando = true;

    this.clienteService.getClientes();

    this.clientesSubscription = this.clienteService
      .getListaDeClientesAtualizadaObservable()
      .subscribe((clientes: Cliente[]) => {
        this.estaCarregando = false;

        this.clientes = clientes;
      });
  }

  ngOnDestroy(): void {
    this.clientesSubscription.unsubscribe();
  }

  onDelete(id: string): void {
    this.clienteService.removerCliente(id);
  }
}
