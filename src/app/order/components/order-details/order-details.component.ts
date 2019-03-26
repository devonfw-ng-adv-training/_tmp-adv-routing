import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BasicDataComponent } from './basic-data/basic-data.component';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit, AfterContentInit {
  @ContentChild(BasicDataComponent)
  basicData: BasicDataComponent;

  constructor(private route: ActivatedRoute, private router: Router) {
    console.log('From OrderDetails', route.snapshot.data);
  }

  ngOnInit() {
    if (!this.route.children || !(this.route.children.length > 0)) {
      this.router.navigate(
        ['basic-data'], {relativeTo: this.route});
    }
  }

  ngAfterContentInit(): void {
    console.log(this.basicData);
  }
}
