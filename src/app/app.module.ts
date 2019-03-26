import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrderModule } from './order/order.module';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { OrderDetailsComponent } from './order/components/order-details/order-details.component';
import { OrderOverviewComponent } from './order/components/order-overview/order-overview.component';
import { BasicDataComponent } from './order/components/order-details/basic-data/basic-data.component';
import { PositionsComponent } from './order/components/order-details/positions/positions.component';
import { OrderDetailsResolve } from './order/components/order-details/order-details.resolve';
import { AccessDeniedComponent } from './shared/security/components/access-denied/access-denied.component';
import { AuthorizationCanActivate } from './shared/security/authorization.can-activate';
import { IsDirtyCanDeactivate } from './shared/security/is-dirty.can-deactivate';


const routes: Routes = [
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
        component: BasicDataComponent,
        canDeactivate: [
          IsDirtyCanDeactivate
        ]
      },
      {
        path: 'positions',
        component: PositionsComponent
      }

    ]
  },
  {
    path: 'orders',
    component: OrderOverviewComponent,
    canActivate: [
      AuthorizationCanActivate
    ]
  },
  {
    path: 'access-denied',
    component: AccessDeniedComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({}),
    RouterModule.forRoot(routes),
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
