import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-order-overview',
  templateUrl: './order-overview.component.html',
  styleUrls: ['./order-overview.component.scss']
})
export class OrderOverviewComponent implements OnInit, OnDestroy {
  private unsubscribe = new Subject();

  descriptionFormControl = new FormControl();

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        params => this.descriptionFormControl.setValue(params['description']));
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.unsubscribe();
  }

  search() {
    this.router.navigate(
      [{description: this.descriptionFormControl.value}], {relativeTo: this.route});
  }

  goToDetails() {
    this.router.navigate(['/order/1234']);
  }
}
