import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'employee-attendence-tracker';

  textOfHeader: any;
  time: any;
  i: any;
  textLength: any;

  constructor() {

  }

  ngOnInit() {

    this.textOfHeader = 'Employee Attendance Tracker';
    this.textLength = this.textOfHeader.length;
    this.i = 0;

    displayLoginPageHeader(this.textOfHeader, this.textLength, this.i);
  }

}

function displayLoginPageHeader(header, textLength, i) {
  if (textLength > i) {
    document.getElementById('app-header').innerHTML += header[i];
  }
  i++;
  startDisplayHeader(header, textLength, i);
}

function startDisplayHeader(header, textLength, i) {
  setTimeout(() => {
    displayLoginPageHeader(header, textLength, i);
  }, 100);
}
