import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthorizationService {
  isAuthorized(url: string) {
    return url.indexOf('orders') !== -1;
  }
}
