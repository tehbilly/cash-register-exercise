import { Component, OnInit } from '@angular/core';

import { OrderService } from './order-service';
import { OrderItem } from './order';

@Component({
  template: require('./order-items.html')
})
export class OrderItemsComponent implements OnInit {
  availableItems: OrderItem[];

  constructor(private orderService: OrderService) {};

  ngOnInit() {
    // Mocking data, because it works for now.
    this.availableItems = [
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
    ];
  }

  selectItem(item: OrderItem) {
    console.log('Selected: ', item);
    this.orderService.addItem(item);
  }
}
