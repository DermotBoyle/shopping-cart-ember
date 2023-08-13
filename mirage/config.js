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
            price: 311,
            code: 'GR1',
          },
        },
        {
          type: 'product',
          id: '2',
          attributes: {
            name: 'Strawberries',
            price: 500,
            code: 'SR1',
          },
        },
        {
          type: 'product',
          id: '3',
          attributes: {
            name: 'Coffee',
            price: 1123,
            code: 'CF1',
          },
        },
      ],
    };
  });
}
