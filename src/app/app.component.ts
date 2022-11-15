
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book, BookService } from './book.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Haresh App';

  /*==============================================================================
                      Use only Observables & subscribe method
  ==============================================================================*/
  // haxBooks: Book[] = [];

  // ngOnInit(): void {
  //   this.getHareshBooks();
  // }

  // constructor(private bookservice: BookService) { }

  // getHareshBooks() {
  //   this.bookservice.getbooksFromStore().subscribe(books => this.haxBooks = books);
  // }


  /*==============================================================================
                            Use observable with Async Pipe
  ==============================================================================*/
  // haxBooks: Observable<Book[]>;

  // ngOnInit(): void {
  //   this.getHareshBooks();
  // }

  // constructor(private bookservice: BookService) { }

  // getHareshBooks() {
  //   this.haxBooks = this.bookservice.getbooksFromStore();
  // }


  /*==============================================================================
                  Use observable + Async Pipe + ngIf with loader
  ==============================================================================*/
  haxBooks: Observable<Book>;

  ngOnInit(): void {
    this.getHareshBooks();
  }

  constructor(private bookservice: BookService) { }

  getHareshBooks() {
    this.haxBooks = this.bookservice.getbooksFromStore(101);
  }



}
