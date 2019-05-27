import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '../settings.service';
import { MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition} from '@angular/material';

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

  actionButtonLabel: string = 'Continue';
  registrationMessage: string = 'Registration Successful';
  action: boolean = true;
  setAutoHide: boolean = true;
  autoHide: number = 8000;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private configData: SettingsService,
    private router: Router,
    public snackbar: MatSnackBar
  ) { }

  ngOnInit() {

    this.textOfHeader = 'Employee Attendance Tracker';
    this.textLength = this.textOfHeader.length;
    this.i = 0;

    displayLoginPageHeader(this.textOfHeader, this.textLength, this.i);
    this.configData.getRegisterDone().subscribe( response => {
      console.log(response);
      if (response === true) {
        let config = new MatSnackBarConfig();
        config.verticalPosition = this.verticalPosition;
        config.horizontalPosition = this.horizontalPosition;
        config.duration = this.setAutoHide ? this.autoHide : 0;
        this.snackbar.open(this.registrationMessage, this.action ? this.actionButtonLabel : undefined, config); }
    });
  }

  submitLogin() {
    const loginPayloadData = {
      email: this.loginData.email,
      password: this.loginData.password
    };
    this.configData.submitLoginCall(loginPayloadData)
      .subscribe( response => {
        this.userData = response.data;
        if (this.userData.id) {
          sessionStorage.setItem('user', JSON.stringify(this.userData));
          this.configData.setUserDetails(this.userData);
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
