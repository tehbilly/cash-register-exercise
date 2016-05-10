export class Order {
  orderNumber: number;
  timestamp: Date;
  subTotal: number;
  totalTax: number;
  grandTotal: number;

  items: OrderLineItem[] = [];

  addItem(item: OrderItem) {
    for (let i of this.items) {
      if (i.item == item) {
        i.quantity += 1;
        return;
      }
    }

    this.items.push(new OrderLineItem(item));
  }
}

export class OrderLineItem {
  constructor(item: OrderItem) {
    this.item = item;
    this.quantity = 1;
  }

  quantity: number;
  item: OrderItem;
}

export class OrderItem {
  name: string;
  price: number;
}
