import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent implements OnInit {

  loginData: any = {};
  userData: any = {};

  textOfHeader: any;
  time: any;
  i: any;
  textLength: any;

  constructor(
    private configData: SettingsService,
    private router: Router
  ) { }

  ngOnInit() {

    this.textOfHeader = 'Employee Attendance Tracker';
    this.textLength = this.textOfHeader.length;
    this.i = 0;

    displayLoginPageHeader(this.textOfHeader, this.textLength, this.i);
  }

  submitLogin() {
    const loginPayloadData = {
      email: this.loginData.email,
      password: this.loginData.password
    };
    this.configData.submitLoginCall(loginPayloadData)
      .subscribe( response => {
        this.userData = response.data;
        sessionStorage.setItem(JSON.stringify(this.userData), 'user');
        if (this.userData.id) {
          this.router.navigate(['dashboard']);
        }
        console.log(response, 'response');
      });
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
