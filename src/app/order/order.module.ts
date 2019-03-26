import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { OrderOverviewComponent } from './components/order-overview/order-overview.component';
import { BasicDataComponent } from './components/order-details/basic-data/basic-data.component';
import { PositionsComponent } from './components/order-details/positions/positions.component';

@NgModule({
  declarations: [OrderDetailsComponent, OrderOverviewComponent, BasicDataComponent, PositionsComponent],
  imports: [
    SharedModule
  ],
  exports: [OrderDetailsComponent]
})
export class OrderModule {
}
