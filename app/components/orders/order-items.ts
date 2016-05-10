import { Component, OnInit } from '@angular/core';

import { OrderService } from './order-service';
import { OrderItem } from './order';

@Component({
  template: require('./order-items.html')
})
export class OrderItemsComponent implements OnInit {
  availableItems: OrderItem[] = [];

  constructor(private orderService: OrderService) {};

  ngOnInit() {
    this.orderService.getAvailableItems().then((items) => {
      this.availableItems = items;
    });
  }

  selectItem(item: OrderItem) {
    console.log('Selected: ', item);
    this.orderService.addItem(item);
  }
}
