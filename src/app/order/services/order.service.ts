import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface Order {
  id: number;
  description: string;
}

@Injectable({providedIn: 'root'})
export class OrderService {
  getOne(id: number): Observable<Order> {
    return of({
      id,
      description: 'SOme order'
    }).pipe(delay(2000));
  }
}
