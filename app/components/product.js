import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

const PROMO_CODE_TEXT = {
  '2F1': '2 for 1',
  MBD: 'Multi-buy Discount',
};

export default class ProductComponent extends Component {
  @tracked quantity = 0;
  @service intl;

  @action
  addToCart() {
    this.quantity++;
  }

  get promoText() {
    const product = this.args.product;
    const promoCode = product.promoCode;

    if (promoCode.includes('DCNT')) {
      return `${product.promoActivatesAt} for ${this.intl.formatNumber(
        product.price * product.promoActivatesAt -
          product.price * product.promoActivatesAt * product.promoDiscount,
        { style: 'currency', currency: 'EUR' }
      )}`;
    }

    return PROMO_CODE_TEXT[promoCode];
  }
}
