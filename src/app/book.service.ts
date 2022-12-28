import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './test-data';
import { of } from 'rxjs';


const BOOKS: Book[] = [
  { "id": 1, "name": "java", "owner": "xyz", "state": "Gujrat", "category": "mobile", "email": "java@gmail.com" },
  { "id": 2, "name": "python", "owner": "abc", "state": "Delhi", "category": "tablet", "email": "python@gmail.com" },
  { "id": 3, "name": "angular", "owner": "pqr", "state": "Rajasthan", "category": "laptop", "email": "angular@gmail.com" },
  { "id": 4, "name": "html", "owner": "efg", "state": "Maharashtra", "category": "desktop", "email": "html@gmail.com" },
  { "id": 5, "name": "css", "owner": "tuv", "state": "Telangana", "category": "mobiter", "email": "css@gmail.com" },
];

let booksobservable = of(BOOKS);

@Injectable({
  providedIn: 'root'
})

export class BookService {

  bookUrl = "/api/books";

  constructor(private http: HttpClient) { }


  /*==============================================================================
                            Use Observables + async pipe
  ==============================================================================*/
  getbooksFromStore(): Observable<Book[]> {
    return this.http.get<Book[]>(this.bookUrl);
  }


  /*==============================================================================
                  Use Observables + async pipe + ngIf with loader
  ==============================================================================*/
  // getbooksFromStore(id: number): Observable<Book> {
  //   return this.http.get<Book>(this.bookUrl + "/" + id);
  // }


  /*==============================================================================
                            HttpClient Get Method
  ==============================================================================*/
  // storeBookUrl = "api/books";

  // Post Api Methods
  // createbook(book: Book): Observable<Book[]> {
  //   let httpheaders = new HttpHeaders().set('Content-Type', 'application/Json');
  //   let options = {
  //     headers: httpheaders
  //   };
  //   return this.http.post<Book[]>(this.storeBookUrl, book, options);
  // }

  // Get Api Methods
  // getbooksFromStore(): Observable<Book[]> {
  //   return this.http.get<Book[]>(this.storeBookUrl);
  // }

  // getBookById(bookid: string) {
  //   return this.http.get<Book>(this.storeBookUrl + '/' + bookid);
  // }

  // Put Api Methods
  // Updatebook(book: Book): Observable<number> {
  //   let httpheaders = new HttpHeaders().set('Content-Type', 'application/Json');
  //   let options = {
  //     headers: httpheaders
  //   };
  //   return this.http.post<number>(this.storeBookUrl + '/' + book.id, book, options);
  // }

  // Put Delete Methods
  // deletebook(bookid: String): Observable<number> {
  //   let httpheaders = new HttpHeaders().set('Content-Type', 'application/Json');
  //   let options = {
  //     headers: httpheaders
  //   };
  //   return this.http.delete<number>(this.storeBookUrl + '/' + bookid);
  // }



  /*==============================================================================
                                  Auxiliary Route
  ==============================================================================*/
  // getBooks(): Observable<Book[]> {
  //   return booksobservable;
  // }



}



