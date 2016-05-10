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
    // TODO: Properly plan out a reasonable (read: not hacky) update stream
    // I'd love to be able to utilize the async pipe, but other areas require attention at the moment
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

  // List of all available items
  getAvailableItems() {
    // Static data for now, easy to switch out later
    return Promise.resolve([
      {"name": "Supreme Pizza", "price": 16.99},
      {"name": "BBQ Chicken Pizza", "price": 14.99},
      {"name": "Veggie Pizza", "price": 12.99},
      {"name": "Meat Lover's Pizza", "price": 17.99},
      {"name": "Hawaiian Pizza", "price": 14.99},
      {"name": "Supreme Calzone", "price": 8.99},
      {"name": "BBQ Chicken Calzone", "price": 7.99},
      {"name": "Veggie Calzone", "price": 6.99},
      {"name": "Meat Lover's Calzone", "price": 8.99},
      {"name": "Hawaiian Calzone", "price": 7.99},
      {"name": "Side Salad", "price": 3.99},
      {"name": "Caesar Salad", "price": 4.99},
      {"name": "Cobb Salad", "price": 4.99},
      {"name": "Chef Salad", "price": 5.99},
      {"name": "Grilled Cheese", "price": 3.99},
      {"name": "Coke", "price": 1.00},
      {"name": "Diet Coke", "price": 1.00},
      {"name": "Sprite", "price": 1.00},
      {"name": "Dr. Pepper", "price": 1.00},
      {"name": "Root Beer", "price": 1.00}
    ]);
  }
}
