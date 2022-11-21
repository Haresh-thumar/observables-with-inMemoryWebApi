import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { pipe, throwError } from 'rxjs';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  // bookUrl = "/api/books";

  constructor(private http: HttpClient) { }


  /*==============================================================================
                            Use Observables + async pipe
  ==============================================================================*/
  // getbooksFromStore(): Observable<Book[]> {
  //   return this.http.get<Book[]>(this.bookUrl);
  // }


  /*==============================================================================
                  Use Observables + async pipe + ngIf with loader
  ==============================================================================*/
  // getbooksFromStore(id: number): Observable<Book> {
  //   return this.http.get<Book>(this.bookUrl + "/" + id);
  // }


  /*==============================================================================
                            HttpClient Get Method
  ==============================================================================*/
  storeBookUrl = "api/books";

  // Post Api Methods
  createbook(book: Book): Observable<Book[]> {
    let httpheaders = new HttpHeaders().set('Content-Type', 'application/Json');
    let options = {
      headers: httpheaders
    };
    return this.http.post<Book[]>(this.storeBookUrl, book, options);
  }

  // Get Api Methods
  getbooksFromStore(): Observable<Book[]> {
    return this.http.get<Book[]>(this.storeBookUrl);
  }

  getBookById(bookid:string){
    return this.http.get<Book>(this.storeBookUrl + '/' + bookid);
  }

  // Put Api Methods
  Updatebook(book: Book): Observable<number> {
    let httpheaders = new HttpHeaders().set('Content-Type', 'application/Json');
    let options = {
      headers: httpheaders
    };
    return this.http.post<number>(this.storeBookUrl + '/' + book.id, book, options);
  }

  // Put Delete Methods
  deletebook(bookid: String): Observable<number> {
    let httpheaders = new HttpHeaders().set('Content-Type', 'application/Json');
    let options = {
      headers: httpheaders
    };
    return this.http.delete<number>(this.storeBookUrl + '/' + bookid);
  }

}


export class Book {
  id: number;
  name: string;
  owner: string;
  category: string;
  country: string;
  email: string;
  mobile: number;
}
