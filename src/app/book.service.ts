import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  bookUrl = "/api/books";

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
  getbooksFromStore(id: number): Observable<Book> {
    return this.http.get<Book>(this.bookUrl + "/" + id);
  }


}


export interface Book {
  id: number,
  name: string,
  owner: string,
  category: string,
  country: string,
  email: string,
  mobile: number
}
