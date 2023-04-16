import { Component } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {
  newBook: any;
  constructor(private bookService: BookService) {

  }

  addBook() {
    this.bookService.addBook(this.newBook);
    this.newBook = '';
  }
}
