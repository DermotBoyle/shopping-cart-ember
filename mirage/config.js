export default function () {
  this.namespace = '/api';

  this.get('/products', function () {
    return {
      data: [
        {
          type: 'product',
          id: '1',
          attributes: {
            name: 'Green tea',
            price: 3.11,
            code: 'GR1',
            imgSrc: '/assets/images/product-green-tea.png',
            promoCode: '2F1',
          },
        },
        {
          type: 'product',
          id: '2',
          attributes: {
            name: 'Strawberries',
            price: 5.0,
            code: 'SR1',
            imgSrc: '/assets/images/product-strawberries.png',
            promoCode: 'DCNT',
            promoActivatesAt: 3,
            promoDiscount: 0.1,
          },
        },
        {
          type: 'product',
          id: '3',
          attributes: {
            name: 'Coffee',
            price: 11.23,
            code: 'CF1',
            imgSrc: '/assets/images/product-coffee.png',
            promoCode: 'MBD',
            promoDiscount: 0.33,
            promoActivatesAt: 3,
          },
        },
      ],
    };
  });
}
