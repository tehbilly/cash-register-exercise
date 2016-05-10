export class Order {
  orderNumber: number;
  timestamp: Date;
  subTotal: number = 0.00;
  taxPercent: number = 0.053; // Virginia tax chosen just 'cause
  taxTotal: number = 0.00;
  grandTotal: number = 0.00;

  items: OrderLineItem[] = [];

  addItem(item: OrderItem) {
    for (let i of this.items) {
      if (i.item == item) {
        i.quantity += 1;
        return;
      }
    }

    this.items.push(new OrderLineItem(item));

    this.updateTotals();
  }

  updateTotals() {
    // Calculate new subtotal
    let sub = 0.00;
    for (let li of this.items) {
      sub += li.quantity * li.item.price;
    }
    this.subTotal = sub;

    // Ze tax
    this.taxTotal = this.subTotal * this.taxPercent;

    // Final-ee
    this.grandTotal = this.subTotal + this.taxTotal;
  }

  voidLineItem(line: OrderLineItem) {
    this.items = this.items.filter((li) => {
      return li != line;
    });
    this.updateTotals();
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
