import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Config } from '../Config/apiRouteUrl';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(
    private http: HttpClient
  ) { }

  submitLoginCall(loginParams): Observable<any> {
    return this.http.post(Config.apiRoute + '/login', loginParams);
  }
}
