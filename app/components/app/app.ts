import { Component, OnInit } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES } from '@angular/router';

import { OrderService } from '../orders/order-service';
import { OrderItemsComponent } from '../orders/order-items';
import { OrderPaymentComponent } from '../orders/order-payment';
import { OrderDetailsComponent } from '../orders/order-details';

@Component({
  selector: 'cash-app',
  template: require('./app.html'),
  directives: [
    ROUTER_DIRECTIVES,
    OrderDetailsComponent
  ],
  providers: [
    OrderService
  ]
})
@Routes([
  {
    path: '/',
    component: OrderItemsComponent
  },
  {
    path: '/tender',
    component: OrderPaymentComponent
  }
])
export class AppComponent implements OnInit {
  constructor(private orderService: OrderService, private router: Router) {}

  ngOnInit() {
    // A rather pitiful attempt to wrangle the new router
    // At least it makes me feel better
    this.router.navigate(['/']);
  }
}
