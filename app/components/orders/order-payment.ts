import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { OrderService } from './order-service';

@Component({
  template: require('./order-payment.html'),
  directives: [
    ROUTER_DIRECTIVES
  ]
})
export class OrderPaymentComponent {
  amountTendered: number = 0.00;
  constructor(private orderService: OrderService) {}
}
