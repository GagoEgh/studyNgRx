import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MainInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const http = 'https://conduit.productionready.io/api'; //'https://api.realworld.io/api'//
   
    const cloneReq = request.clone({
      url: `${http}${request.url}`
    })
    return next.handle(cloneReq);
  }
}
