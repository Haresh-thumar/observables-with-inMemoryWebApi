import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  storeBookUrl = "http://localhost:3000/posts";

  createbook(book: Book): Observable<Book[]> {
    let httpheaders = new HttpHeaders().set('Content-Type', 'application/Json');
    let options = {
      headers: httpheaders
    };
    return this.http.post<Book[]>(this.storeBookUrl, book, options);
  }

  // createbook(body): Observable<Book[]> {
  //   return this.http.post<Book[]>(this.storeBookUrl, body);
  // }

  getbooksFromStore(): Observable<Book[]> {
    return this.http.get<Book[]>(this.storeBookUrl);
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
