import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit {

  constructor(
    private router: Router,
    private configData: SettingsService
  ) { }

  registrationData: any = {};

  ngOnInit() {
  }

  submitRegistration() {
    this.configData.submitRegistrationData(this.registrationData).subscribe( response => {
      console.log(response);
      if (response.code === 200) {
        this.router.navigate(['login']);
        this.configData.setRegisterDone();
      }
    });
  }

}
