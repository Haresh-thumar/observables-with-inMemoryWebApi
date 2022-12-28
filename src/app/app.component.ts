
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from './book.service';
import { Book } from './test-data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Haresh App';

  isChecked: any;


  // constructor() { }

  // ngOnInit() { }

  /*==============================================================================
                      Use only Observables & subscribe method
  ==============================================================================*/
  haxBooks: Book[] = [];

  ngOnInit(): void {
    this.getHareshBooks();
  }

  constructor(private bookservice: BookService) { }

  getHareshBooks() {
    this.bookservice.getbooksFromStore().subscribe(books => this.haxBooks = books);
  }


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
  // datasaved: boolean = false;
  // dataDeleted: boolean = false;
  // bookform: FormGroup;
  // allBooks: Observable<Book[]>;
  // bookidToUpdate = null;

  // actionBtn: boolean = false;

  // constructor(private formbuilder: FormBuilder, private bookservice: BookService) { }

  // ngOnInit(): void {
  //   this.bookform = this.formbuilder.group({
  //     name: ['', [Validators.required]],
  //     owner: ['', [Validators.required]],
  //     email: ['', [Validators.required]],
  //     category: ['', [Validators.required]],
  //   })
  //   this.getAll();
  // }

  // onFormSubmit() {
  //   this.datasaved = false;
  //   let book = this.bookform.value;
  //   this.createBook(book);
  //   this.bookform.reset();
  // }

  // createBook(book: Book) {
  //   if (this.bookidToUpdate == null){
  //     this.bookservice.createbook(book).subscribe(book => {
  //       this.datasaved = true
  //       this.getAll();
  //       this.bookidToUpdate = null;
  //       window.alert("Form submit success...");
  //   });
  // }else{
  //   book.id = this.bookidToUpdate;
  //   this.bookservice.Updatebook(book).subscribe(book => {
  //     this.datasaved = true
  //     this.getAll();
  //     this.bookidToUpdate = null;
  //     this.actionBtn=false;
  //   });
  // }
  // }

  // booktoedit(bookid:any){
  //   this.bookservice.getBookById(bookid).subscribe(book => {
  //     this.actionBtn = true;
  //     this.bookidToUpdate = bookid;
  //     this.bookform.patchValue(book);
  //   });

  // }

  // getAll() {
  //   this.allBooks = this.bookservice.getbooksFromStore();
  // }

  // deleteBook(bookid:any){
  //   this.bookservice.deletebook(bookid).subscribe(book => {
  //     this.dataDeleted = true;
  //     this.getAll();
  //   });
  //   this.dataDeleted = false;
  // }


  // setInterval timing function in saved & deleted state


  // constructor() { }

  // ngOnInit(): void { }



  /*==============================================================================
                              Get Checkbox Value
  ==============================================================================*/
  // myProperty = false;

  // checkValue(event: any) {
  //   console.log('%c[ checkbox Event ]', 'font-size:13px; background:pink; color:#bf2c9f;', event);
  // }



}

