import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private books: string[] = ['Pan Tadeusz', 'Ferdydurke', 'Wesele']

  constructor() { }

  getBooks(): string[] {
    return this.books;
  }

  addBook(book: string){
    this.books.push(book);
  }

  removeBook(book: string){
    const idx = this.books.indexOf(book);
    if (idx >= 0) {
      this.books.splice(idx, 1);
    }
  }

}
