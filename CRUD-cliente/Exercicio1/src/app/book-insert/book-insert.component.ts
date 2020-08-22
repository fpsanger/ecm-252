import { Component } from '@angular/core';
import { BookService } from '../service/book.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-insert',
  templateUrl: './book-insert.component.html',
  styleUrls: ['./book-insert.component.css'],
})
export class BookInsertComponent {
  constructor(public bookService: BookService, public _router: Router) {}

  onAddBook(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.bookService.addBook(form.value.name, form.value.author);
    this._router.navigate(['/book/list']);
    form.resetForm();
  }
}
