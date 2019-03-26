import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../../../services/order.service';

@Component({
  selector: 'app-basic-data',
  templateUrl: './basic-data.component.html',
  styleUrls: ['./basic-data.component.scss']
})
export class BasicDataComponent implements OnInit {
  order: Order;

  constructor(route: ActivatedRoute) {
    this.order = route.parent.snapshot.data['details']
  }

  ngOnInit() {
  }

}
