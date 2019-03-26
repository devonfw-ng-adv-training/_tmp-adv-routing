import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export interface IsDirty {
  isDirty(): boolean;
}

@Injectable({providedIn: 'root'})
export class IsDirtyCanDeactivate implements CanDeactivate<IsDirty> {
  canDeactivate(component: IsDirty,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return !component.isDirty();
  }
}
