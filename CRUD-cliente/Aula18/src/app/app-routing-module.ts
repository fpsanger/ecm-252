import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteListaComponent } from 'src/clientes/cliente-lista/cliente-lista.component';
import { ClienteInserirComponent } from 'src/clientes/cliente-inserir/cliente-inserir.component';

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
