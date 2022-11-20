
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book, BookService } from './book.service';
import { map } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


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
  // haxBooks: Observable<Book>;

  // ngOnInit(): void {
  //   this.getHareshBooks();
  // }

  // constructor(private bookservice: BookService) { }

  // getHareshBooks() {
  //   this.haxBooks = this.bookservice.getbooksFromStore(101);
  // }


  /*==============================================================================
                  Use Pipe Map Operators + Subscribe Method
  ==============================================================================*/
  // Use Pipe Map Method
  // haxBooks: Observable<string>;

  // Use Subscribe Method
  // haxBooks: string;

  // ngOnInit(): void {
  //   this.getHareshBooks();
  // }

  // constructor(private bookservice: BookService) { }

  // getHareshBooks() {
  //****** Use Pipe Map Method ******
  // this.haxBooks = this.bookservice.getbooksFromStore(102).pipe(map(book => "Name : " + book.name));

  //****** Use Subscribe Method ******
  //   this.bookservice.getbooksFromStore(101).pipe(map(book => book.name)).subscribe(name => {
  //     this.haxBooks = name;
  //   });
  // }


  /*==============================================================================
                            HttpClient Get Method
  ==============================================================================*/
  datasaved = false;
  bookform: FormGroup;
  allBooks: Observable<Book[]>;

  constructor(private formbuilder: FormBuilder, private bookservice: BookService) { }

  ngOnInit(): void {
    this.bookform = this.formbuilder.group({
      name: ['', [Validators.required]],
      owner: ['', [Validators.required]],
      email: ['', [Validators.required]],
      category: ['', [Validators.required]],
    })
    this.getHareshBooks();
  }


  onFormSubmit() {
    this.datasaved = false;
    let book = this.bookform.value;
    this.createBook(book);
    this.bookform.reset();
  }

  createBook(book: Book) {
    this.bookservice.createbook(book).subscribe(book => {
      this.datasaved = true
      this.getHareshBooks();
    });
  }

  getHareshBooks() {
    this.allBooks = this.bookservice.getbooksFromStore();
  }


  // constructor() { }

  // ngOnInit(): void { }


}
