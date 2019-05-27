import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
  providers: []
})
export class DashboardComponent implements OnInit {

  constructor(
    private router: Router,
    private routeConfig: SettingsService
  ) { }

  ngOnInit() {
    this.fetchDashboardData();
  }

  fetchDashboardData() {
    const userDetails = JSON.parse(sessionStorage.getItem('user'));
    const userId = userDetails.id;
    this.routeConfig.getLoginRecords(userId).subscribe( response => {
      console.log(response);
    });
  }

}
