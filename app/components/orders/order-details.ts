import { Component } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { OrderService } from './order-service';
import { Order, OrderLineItem, OrderItem } from './order';

@Component({
  selector: 'order-details',
  template: require('./order-details.html')
})
export class OrderDetailsComponent {
  order: Order;
  subscription: Subscription;
  selectedLineItem: OrderLineItem;

  constructor(private orderService: OrderService) {
    this.subscription = orderService.orderUpdates.subscribe(updatedOrder => {
      this.order = updatedOrder;
      console.log('Got update for order: ', this.order);
    });
  }

  selectLineItem(line: OrderLineItem) {
    this.selectedLineItem = line;
  }

  voidSelectedItem() {
    this.order.voidLineItem(this.selectedLineItem);
    this.selectedLineItem = null;
  }
}
