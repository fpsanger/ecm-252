import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OlaComponent } from './ola/ola.component';

const routes = [
  { path: 'ola', component: OlaComponent },
  { path: '', redirectTo: 'ola', pathMatch: 'full' },
  { path: 'cursos', component: CursosComponent },
  { path: 'cadastro', component: FormularioComponent },
];

@NgModule({
  declarations: [AppComponent, CursosComponent, FormularioComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
