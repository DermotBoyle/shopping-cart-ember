import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

class CartItem {
  @tracked quantity;

  code;

  constructor(item) {
    this.code = item.code;
    this.quantity = item.quantity;
  }
}

export default class ShoppingCartService extends Service {
  @tracked store = [];

  addItem(key) {
    const existingItem = this.store.find((item) => item.code === key);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.store = [...this.store, new CartItem({ code: key, quantity: 1 })];
    }
    console.log(this.store);
  }

  removeItem(key) {
    const existingItem = this.store.find((item) => item.code === key);

    if (existingItem) {
      this.store[key].quantity--;
      if (this.store[key].quantity === 0) {
        this.store = this.store.filter((item) => item.code !== key);
      }
    }
  }

  hasItem(key) {
    return !!this.store.find((item) => item.code === key);
  }

  getAllItems() {
    return this.store.map(({ code, quantity }) => {
      return { code, quantity };
    });
  }
}
