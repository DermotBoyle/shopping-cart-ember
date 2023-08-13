import Model, { attr } from '@ember-data/model';

export default class ProductModel extends Model {
  @attr('string') name;
  @attr('number') price;
  @attr('string') code;
  @attr('string') imgSrc;
  @attr('string') promoCode;
  @attr('number') promoDiscount;
  @attr('number') promoActivatesAt;
}
