import { Injectable } from '@angular/core';
import { IBook } from '../model/book.interface';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BookService {
  private books: IBook[] = [];
  private updatedBookList = new Subject<IBook[]>();
  getBooks(): IBook[] {
    return [...this.books];
  }
  addBook(name: string, author: string) {
    const book: IBook = { name: name, author: author };
    this.books.push(book);
    this.updatedBookList.next([...this.books]);
  }

  getUpdatedBookListObservable() {
    return this.updatedBookList.asObservable();
  }
}
