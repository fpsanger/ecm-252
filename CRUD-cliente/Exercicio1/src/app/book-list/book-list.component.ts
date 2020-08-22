import { Component, OnInit } from '@angular/core';
import { IBook } from '../model/book.interface';
import { Subscription } from 'rxjs';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books: IBook[] = [];
  private booksSubscription: Subscription;

  constructor(public bookService: BookService) {}

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
    this.booksSubscription = this.bookService
      .getUpdatedBookListObservable()
      .subscribe((books: IBook[]) => {
        this.books = books;
      });
  }

  ngOnDestroy(): void {
    this.booksSubscription.unsubscribe();
  }
}
