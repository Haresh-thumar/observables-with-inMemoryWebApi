import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-jquery-file',
  templateUrl: './jquery-file.component.html',
  styleUrls: ['./jquery-file.component.scss']
})
export class JqueryFileComponent implements OnInit {
  title = "jquery-file";
  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      $("button").click(function () {
        var div = $("div");
        div.animate({ left: '100px' }, "slow");
        div.animate({ fontSize: '50px' }, "slow");
      })
    })
  }

}
