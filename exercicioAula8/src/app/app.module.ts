import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfoProfessoresComponent } from './info-professores/info-professores.component';

import { RouterModule } from '@angular/router';
import { CursosComponent } from './cursos/cursos.component';
import { OlaComponent } from './ola/ola.component';

const routes = [
  { path: 'ola', component: OlaComponent },
  { path: '', redirectTo: 'ola', pathMatch: 'full' },
  {
    path: 'professores',
    component: InfoProfessoresComponent,
  },
  { path: 'cursos', component: CursosComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    InfoProfessoresComponent,
    CursosComponent,
    OlaComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
