import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsComponent } from './forms/forms.component';
import { OlaComponent } from './ola/ola.component';

const routes: Routes = [
  { path: 'ola', component: OlaComponent },
  { path: '', redirectTo: 'ola', pathMatch: 'full' },
  { path: 'forms', component: FormsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
