import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  constructor(
    private configData: SettingsService,
  ) { }
  navbarLoginDetails: any;

  ngOnInit() {
    this.configData.getUserDetails.subscribe( value =>  {
      this.navbarLoginDetails = value;
    });
  }

}
