import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthorizationService } from './services/authorization.service';

@Injectable({providedIn: 'root'})
export class AuthorizationCanActivate implements CanActivate {
  constructor(private auth: AuthorizationService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.isAuthorized(state.url) ?
      true : this.router.parseUrl('/access-denied');
  }
}
