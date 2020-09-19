import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteListaComponent } from 'src/clientes/cliente-lista/cliente-lista.component';
import { ClinteInserirComponent } from 'src/clientes/cliente-inserir/cliente-inserir.component';

const routes: Routes = [
  { path: '', component: ClienteListaComponent },
  { path: 'criar', component: ClinteInserirComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
