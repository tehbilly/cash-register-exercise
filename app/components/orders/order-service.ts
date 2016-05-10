import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { Order, OrderLineItem, OrderItem } from './order';

let orderNumber: number = 1;

@Injectable()
export class OrderService {
  order: Order;

  // Our ree-active sources
  private orderUpdatedSource: BehaviorSubject<Order>;
  public orderUpdates: Observable<Order>;

  constructor() {
    this.newOrder();

    this.orderUpdatedSource = new BehaviorSubject(this.order);
    this.orderUpdates = this.orderUpdatedSource.asObservable();
  }

  newOrder() {
    this.order = new Order();
    console.log(this.orderUpdatedSource);
    // this.orderUpdatedSource.next(this.order);
  }

  assignOrderNumber() {
    // TODO: Get this from backend
    this.order.orderNumber = orderNumber;
    orderNumber += 1;
    // Reset number if we've hit our crazy cap!
    if (orderNumber > 100) {
      orderNumber = 1;
    }

    this.orderUpdatedSource.next(this.order);
  }

  addItem(item: OrderItem) {
    this.order.addItem(item);

    this.orderUpdatedSource.next(this.order);
  }
}
