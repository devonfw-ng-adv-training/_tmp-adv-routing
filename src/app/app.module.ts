import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrderModule } from './order/order.module';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ResolveStart, Router, RouterModule } from '@angular/router';
import { OrderDetailsComponent } from './order/components/order-details/order-details.component';
import { OrderOverviewComponent } from './order/components/order-overview/order-overview.component';
import { BasicDataComponent } from './order/components/order-details/basic-data/basic-data.component';
import { PositionsComponent } from './order/components/order-details/positions/positions.component';
import { OrderDetailsResolve } from './order/components/order-details/order-details.resolve';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({}),
    RouterModule.forRoot([
      {path: '', pathMatch: 'full', redirectTo: '/orders'},
      {
        path: 'order/:orderId',
        component: OrderDetailsComponent,
        resolve: {
          details: OrderDetailsResolve
        },
        data: {
          path: 'fdsfds'
        },
        children: [
          {
            path: 'basic-data',
            component: BasicDataComponent
          },
          {
            path: 'positions',
            component: PositionsComponent
          }

        ]
      },
      {
        path: 'orders',
        component: OrderOverviewComponent
      }]),
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(translate: TranslateService, router: Router) {
    translate.setDefaultLang('en');
    translate.setTranslation('en', {
      order: {
        hello: 'Hello'
      }
    });



  }
}
