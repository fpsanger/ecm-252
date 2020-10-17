import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { Cliente } from 'src/model/model.cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css'],
})
export class ClienteListaComponent implements OnInit, OnDestroy {
  constructor(public clienteService: ClienteService) {}

  clientes: Cliente[] = [];
  private clientesSubscription: Subscription;
  public estaCarregando: boolean = false;
  totalDeClientes: number = 10;
  totalDeClientesPorPagina: number = 2;
  opcoesTotalDeClientesPorPagina = [2, 5, 10];
  paginaAtual: number = 1; //definir

  ngOnInit(): void {
    this.estaCarregando = true;
    this.clienteService.getClientes(
      this.totalDeClientesPorPagina,
      this.paginaAtual
    );
    this.clientesSubscription = this.clienteService
      .getListaDeClientesAtualizadaObservable()
      .subscribe((clientes: Cliente[]) => {
        this.estaCarregando = false;
        this.clientes = clientes;
      });
  }

  onDelete(id: string): void {
    this.clienteService.removerCliente(id);
  }

  onPaginaAlterada(dadosPagina: PageEvent) {
    //console.log (dadosPagina);
    this.estaCarregando = true;
    this.paginaAtual = dadosPagina.pageIndex + 1; //no paginator a contagem começa de 0
    this.totalDeClientesPorPagina = dadosPagina.pageSize;
    this.clienteService.getClientes(
      this.totalDeClientesPorPagina,
      this.paginaAtual
    );
  }

  ngOnDestroy(): void {
    this.clientesSubscription.unsubscribe();
  }
}
