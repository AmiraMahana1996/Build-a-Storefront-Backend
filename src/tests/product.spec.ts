import supertest from 'supertest';
import App from '../app';

import ProdutService from '.././services/product';
import UserService from '.././services/user';
import OrderService from '.././services/order';
import categoryService from '.././services/category';

import productHandler from '.././handlers/product';
import categorytHandler from '.././handlers/category';
import userHandler from '../handlers/user';
import orderHandler from '../handlers/order';
const app = new App([
  new productHandler(),
  new categorytHandler(),
  new userHandler(),
  new orderHandler(),
]);

// create a request object
supertest(app);

// test resize request with name without width and height
//product tests
describe(' product api', () => {
  it('test create method', async () => {
    ProdutService.create({
      name: 'mobile',
      price: 2000,
      category_id: 1,
    }).then((result) => {
      expect(result).toEqual({
        id: 2,
        name: 'mobile',
        price: 2000,
        category_id: 1,
      });
    });
  });
  it('test update method', async () => {
    ProdutService.update('1', {
      name: 'laptop',
      price: 2000,
      category_id: 1,
    }).then((result) => {
      expect(result).toEqual({
        id: 1,
        name: 'laptop',
        price: 2000,
        category_id: 1,
      });
    });
  });
  it('test show method', async () => {
    ProdutService.show('1').then((result) => {
      expect(result).toEqual({
        id: 1,
        name: 'laptop',
        price: 2000,
        category_id: 1,
      });
    });
  });

  it('test index method', async () => {
    ProdutService.index().then((result) => {
      expect(result).toEqual([
        {
          id: 1,
          name: 'laptop',
          price: 2000,
          category_id: 1,
        },
      ]);
    });
  });

  it('test getByCategoryId method', async () => {
    ProdutService.getProductsByCategory('1').then((result) => {
      expect(result).toEqual({
        id: 1,
        name: 'laptop',
        price: 2000,
        category_id: 1,
      });
    });
  });
});

//test user api
describe('user api', () => {
  it('test create method', async () => {
    UserService.register({
      firstname: 'amira',
      lastname: 'ali',
      email: 'ali@gmail.com',
      password: 'ali',
    }).then((result) => {
      expect(result).toEqual({
        id: 1,
        firstname: 'amira',
        lastname: 'ali',
        password:
          '$argon2id$v=19$m=64000,t=3,p=1$MHqH9AWW7ZngVIvMjZHAoQ$PVX/37nGZwmTu+vY4PPUjLTsXJ6mlVKxlskX/SitCkc',
        email: 'ali@gmail.com',
      });
    });
  });
  it('test login method', async () => {
    UserService.login('ali@gmail.com', 'ali').then((result) => {
      expect(result).toEqual({
        id: 1,
        firstname: 'amira',
        lastname: 'ali',
        password:
          '$argon2id$v=19$m=64000,t=3,p=1$MHqH9AWW7ZngVIvMjZHAoQ$PVX/37nGZwmTu+vY4PPUjLTsXJ6mlVKxlskX/SitCkc',
        email: 'ali@gmail.com',
      });
    });
  });
  it('test show method', async () => {
    UserService.show('1').then((result) => {
      expect(result).toEqual({
        id: 1,
        firstname: 'amira',
        lastname: 'ali',
        password:
          '$argon2id$v=19$m=64000,t=3,p=1$MHqH9AWW7ZngVIvMjZHAoQ$PVX/37nGZwmTu+vY4PPUjLTsXJ6mlVKxlskX/SitCkc',
        email: 'ali@gmail.com',
      });
    });
  });

  it('test index method', async () => {
    UserService.index().then((result) => {
      expect(result).toEqual([
        {
          id: 1,
          firstname: 'amira',
          lastname: 'ali',
          password:
            '$argon2id$v=19$m=64000,t=3,p=1$MHqH9AWW7ZngVIvMjZHAoQ$PVX/37nGZwmTu+vY4PPUjLTsXJ6mlVKxlskX/SitCkc',
          email: 'ali@gmail.com',
        },
      ]);
    });
  });
});

//test category api

//category test api
describe('category api', () => {
  it('test create method', async () => {
    categoryService
      .create({
        name: 'kids',
      })
      .then((result) => {
        expect(result).toEqual({
          id: 1,
          name: 'kids',
        });
      });
  });

  it('test index method', async () => {
    categoryService.index().then((result) => {
      expect(result).toEqual([
        {
          id: 1,
          name: 'kids',
        },
      ]);
    });
  });

  it('test show method', async () => {
    categoryService.show('1').then((result) => {
      expect(result).toEqual({
        id: 1,
        name: 'kids',
      });
    });
  });

  it('test update method', async () => {
    categoryService
      .update('1', {
        name: 'women',
      })
      .then((result) => {
        expect(result).toEqual({
          id: 1,
          name: 'women',
        });
      });
  });

  it('test delete method', async () => {
    categoryService.delete('1').then((result) => {
      expect(result).toEqual({
        id: 1,
        name: 'women',
      });
    });
  });
});

//order test api
describe('order api', () => {
  it('test create method', async () => {
    OrderService.create({
      product_id: 1,
      product_qty: 1,
      user_id: 1,
      status: 'complete',
    }).then((result) => {
      expect(result).toEqual({
        id: 1,
        product_id: 1,
        product_qty: 1,
        user_id: 1,
        status: 'complete',
      });
    });
  });

  it('test getCompleteOrders method', async () => {
    OrderService.getCompleteOrders('1').then((result) => {
      expect(result).toEqual([
        {
          id: 1,
          product_id: 1,
          product_qty: 1,
          user_id: 1,
          status: 'complete',
        },
      ]);
    });
  });

  it('test show method', async () => {
    OrderService.getCurrentOrders('1').then((result) => {
      expect(result).toEqual([]);
    });
  });
});
