import { Component } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES } from '@angular/router';

import { OrderEntryComponent } from '../orders/order-entry';

@Component({
  selector: 'cash-app',
  template: require('./app.html'),
  directives: [
    ROUTER_DIRECTIVES
  ]
})
@Routes([
  {path: '/', component: OrderEntryComponent}
])
export class AppComponent {}
