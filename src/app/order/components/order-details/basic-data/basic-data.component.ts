import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../../../services/order.service';
import { IsDirty } from '../../../../shared/security/is-dirty.can-deactivate';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-data',
  templateUrl: './basic-data.component.html',
  styleUrls: ['./basic-data.component.scss']
})
export class BasicDataComponent implements OnInit, IsDirty {
  orderForm: FormGroup;

  constructor(route: ActivatedRoute, formBuilder: FormBuilder) {
    const order: Order = route.parent.snapshot.data['details'];

    this.orderForm = formBuilder.group({
      description: (order && order.description) || ''
    });
  }

  ngOnInit() {
  }

  isDirty(): boolean {
    return this.orderForm.dirty;
  }
}
