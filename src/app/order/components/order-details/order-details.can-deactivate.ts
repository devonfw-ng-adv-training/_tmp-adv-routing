import { ActivatedRouteSnapshot, CanDeactivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Order, OrderService } from '../../services/order.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { OrderDetailsComponent } from './order-details.component';

@Injectable({providedIn: 'root'})
export class OrderDetailsCanDeactivate implements CanDeactivate<OrderDetailsComponent> {
  canDeactivate(component: OrderDetailsComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return undefined;
  }
}
