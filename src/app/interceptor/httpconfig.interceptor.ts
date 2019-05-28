import { Injectable } from '@angular/core';
import { HttpInterceptor,
HttpRequest,
HttpResponse,
HttpHandler,
HttpEvent,
HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class HttpconfigInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userDetails = JSON.parse(sessionStorage.getItem('user'));
    if (userDetails !== null) {
      const token: string = userDetails.token;
      if (token) {
        request = request.clone({ headers: request.headers.set('Authorization', token) });
      }
      if (!request.headers.has('Content-Type')) {
        request = request.clone({headers: request.headers.set('Content-Type', 'application/JSON')});
      }
      request = request.clone({headers: request.headers.set('Accept', 'application/JSON')}); }
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event---->', event);
        }
        return event;
      })
    );
  }
}
