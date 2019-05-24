import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Config } from '../Config/apiRouteUrl';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(
    private http: HttpClient
  ) { }
  private userDetails = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('user')));
  private registerBoolean = new BehaviorSubject<boolean>(false);
  setUserDetails(data) {
    this.userDetails.next(data);
  }
  get getUserDetails() {
    return this.userDetails.asObservable();
  }

  setRegisterDone() {
    this.registerBoolean.next(true);
  }

  getRegisterDone() {
    return this.registerBoolean.asObservable();
  }

  submitLoginCall(loginParams): Observable<any> {
    return this.http.post(Config.apiRoute + '/login', loginParams);
  }

  submitRegistrationData(registrationData): Observable<any> {
    return this.http.post(Config.apiRoute + '/register', registrationData);
  }
}
