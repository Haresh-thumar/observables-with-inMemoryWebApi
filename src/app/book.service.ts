import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  bookUrl = "/api/bookDetail";

  constructor(private http: HttpClient) { }

  getbooksFromStore(): Observable<Book[]> {
    return this.http.get<Book[]>(this.bookUrl);
  }
}


export interface Book {
  id: number,
  name: string,
  owner: string,
  category: string,
  country: string,
  email:string,
  mobile: number
}
