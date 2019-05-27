import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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
    const headers = new HttpHeaders().set('X-Skip-Interceptor', '');
    return this.http.post(Config.apiRoute + '/login', loginParams, {headers});
  }

  submitRegistrationData(registrationData): Observable<any> {
    const headers = new HttpHeaders().set('X-Skip-Interceptor', '');
    return this.http.post(Config.apiRoute + '/register', registrationData, {headers});
  }

  getLoginRecords(userId): Observable<any> {
    return this.http.get(Config.apiRoute + '/getLoginDetails?id=' + userId);
  }
}
