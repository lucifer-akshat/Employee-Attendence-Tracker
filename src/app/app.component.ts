import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SettingsService} from './settings.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'employee-attendence-tracker';

  constructor(private router: Router,  private configData: SettingsService) {

  }

  ngOnInit() {
    this.configData.getUserDetails.subscribe(val => {
      console.log(val, 'val');
    });
  }

}


