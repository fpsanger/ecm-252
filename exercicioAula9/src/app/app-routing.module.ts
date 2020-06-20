import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OlaComponent } from './ola/ola.component';
import { CursosComponent } from './cursos/cursos.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  { path: 'ola', component: OlaComponent },
  { path: '', redirectTo: 'ola', pathMatch: 'full' },
  { path: 'cursos', component: CursosComponent },
  { path: 'cadastro', component: FormularioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
