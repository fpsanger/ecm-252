import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteInserirComponent } from 'src/clientes/cliente-inserir/cliente-inserir.component';
import { ClienteListaComponent } from 'src/clientes/cliente-lista/cliente-lista.component';

const routes: Routes = [
  { path: '', component: ClienteListaComponent },
  { path: 'criar', component: ClienteInserirComponent },
  { path: 'editar/:idCliente', component: ClienteInserirComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
