import { BookService } from './../book.service';
import { Book } from './../test-data';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  books: Observable<Book[]>

  constructor(private BookServiceService: BookService) { }

  ngOnInit(): void {

    /*------------------- LocalStorage and SessionStorage -----------------*/
    // let obj = {
    //   fname: 'haresh', lname: 'kumar'
    // }

    // Add Data in LocalStorage & SessionStorage
    // localStorage.setItem('ObjectId', JSON.stringify(obj)); // pass the Object
    // localStorage.setItem('userId', 'local Haresh-kumar'); // pass the String
    // localStorage.setItem('CustomerId', 'local Rutvik-kumar'); // pass the String
    // sessionStorage.setItem('sessionData', 'sessionStorage'); // pass the String

    // Delete Data From LocalStorage & SessionStorage (data will be null)
    // localStorage.removeItem('localData');
    // sessionStorage.removeItem('sessionData');

    // Clear Data From LocalStorage & SessionStorage
    // localStorage.clear();
    // sessionStorage.clear();

    // console the storage data
    // console.log(JSON.parse(localStorage.getItem('ObjectId')));  // Get the Object
    // console.log(localStorage.getItem('userId'));  // Get the String
    // console.log(localStorage.getItem('CustomerId')); // Get the String
    // console.log(sessionStorage.getItem('sessionData')); // Get the String


    // condition checking for Data LocalStorage & SessionStorage
    // if (sessionStorage.length > 0) {
    //   alert("Data is Available");
    // }
    // else {
    //   alert("Data is Not Available");
    // }

    // condition checking for Browser Support SessionStorage
    // if (window.sessionStorage) {
    //   alert("SessionStorage Browser Supported");
    // }
    // else {
    //   alert("SessionStorage Browser Not Supported");
    // }


    /*------------------- Auxiliary Route -----------------*/
    this.books = this.BookServiceService.getBooks();


  }





}
