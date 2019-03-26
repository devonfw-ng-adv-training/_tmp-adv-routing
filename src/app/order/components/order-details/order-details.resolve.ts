import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Order, OrderService } from '../../services/order.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class OrderDetailsResolve implements Resolve<Order> {
  constructor(private orders: OrderService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Order> {
    return this.orders.getOne(+route.params['orderId']);
  }
}
