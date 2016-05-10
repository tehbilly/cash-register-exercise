import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, Routes } from '@angular/router';

import { OrderItem } from './order';
import { OrderService } from './order-service';
import { OrderItemsComponent } from './order-items';
import { OrderDetailsComponent } from './order-details';

@Component({
  selector: 'order-entry',
  template: require('./order-entry.html'),
  directives: [OrderDetailsComponent, ROUTER_DIRECTIVES],
  providers: [OrderService]
})
@Routes([{
  path: "/",
  component: OrderItemsComponent
}])
export class OrderEntryComponent {
  constructor(private orderService: OrderService) {}
}
