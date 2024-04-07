import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { KeycloakService } from 'keycloak-angular';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private keycloakService: KeycloakService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = '';

    this.keycloakService.getToken().then((token) => {
      token = token;
    });

    let requestClone;

    if (token) {
      requestClone = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    } else {
      requestClone = request;
    }

    return next.handle(requestClone);
  }
}
