import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // sessionStorage Data is cleared.
    sessionStorage.clear();

    // console the storage data
    console.log(JSON.parse(localStorage.getItem('ObjectId')));  // Get the Object
    console.log(localStorage.getItem('userId'));  // Get the String
    console.log(localStorage.getItem('CustomerId'));  // Get the String
    console.log(sessionStorage.getItem('sessionData')); // Get the String

    // condition checking for Data LocalStorage & SessionStorage
    // if (sessionStorage.length > 0) {
    //   alert("Data is Available");
    // }
    // else {
    //   alert("Data is Not Available");
    // }

    // condition checking for Browser Support SessionStorage
    if (window.sessionStorage) {
      alert("SessionStorage Browser Supported");
    }
    else {
      alert("SessionStorage Browser Not Supported");
    }

  }

}
