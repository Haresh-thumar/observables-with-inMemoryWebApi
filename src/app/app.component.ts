import { Component, OnInit } from '@angular/core';
import { Book, BookService } from './book.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Haresh App';

  haxBooks: Book[] = [];

  ngOnInit(): void {
    this.getHareshBooks();
  }

  constructor(private bookservice: BookService) { }

  getHareshBooks() {
    this.bookservice.getbooksFromStore().subscribe(books => this.haxBooks = books);
  }
}
