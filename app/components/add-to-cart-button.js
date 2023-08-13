import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ProductComponent extends Component {
  @service shoppingCart;

  @action
  addToEmptyCart() {
    this.shoppingCart.addItem(this.args.product.code, this.args.product);
  }

  get hasItemBeenAdded() {
    return this.shoppingCart.hasItem(this.args.product.code);
  }
}
