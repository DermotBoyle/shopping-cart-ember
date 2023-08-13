import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ProductsRoute extends Route {
  @service store;
  @service intl;

  beforeModel() {
    this.intl.setLocale(['en-us']);
  }

  async model() {
    return this.store.findAll('product');
  }
}
