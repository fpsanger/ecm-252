import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookInsertComponent } from './book-insert/book-insert.component';
import { BookListComponent } from './book-list/book-list.component';

const routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: 'book/insert', component: BookInsertComponent },
  { path: 'book/list', component: BookListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
