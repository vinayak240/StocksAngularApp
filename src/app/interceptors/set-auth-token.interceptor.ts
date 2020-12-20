import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtService } from '../services/jwt.service';

@Injectable()
export class SetAuthTokenInterceptor implements HttpInterceptor {
  constructor(private tokenservice: JwtService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.tokenservice.getIsAuthenticated()) {
      request = request.clone({
        setHeaders: {
          Authorization: ('Bearer ' + this.tokenservice.getToken()) as string
        }
      });
    }
    return next.handle(request);
  }
}
