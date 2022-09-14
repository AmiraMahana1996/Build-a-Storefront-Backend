import supertest from 'supertest';
import App from '../app';

import ProdutService from '../services/product';
import UserService from '../services/user';
import OrderService from '../services/order';
import categoryService from '../services/category';

import productHandler from '../handlers/product';
import categorytHandler from '../handlers/category';
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

//test user api
describe('user api', () => {
  it('test create method', () => {
    return UserService.register({
      firstname: 'amira',
      lastname: 'ali',
      email: 'ali@gmail.com',
      password: 'ali',
    }).then((result) => {
      expect(result.id).toEqual(2);
    });
  });
  it('test login method', () => {
    return UserService.login('ali@gmail.com', 'ali').then((result) => {
      expect(result.id).toEqual(1);
    });
  });
  it('test show method', () => {
    return UserService.show('1').then((result) => {
      expect(result).toEqual({
        id: 1,
        firstname: 'amira',
        lastname: 'ali',
        password: 'ali',
        email: 'ali@gmail.com',
      });
    });
  });

  it('test index method', () => {
    return UserService.index().then((result) => {
      expect(result.length).toBeGreaterThan(0);
    });
  });
});

//category test api
describe('category api', () => {
  it('test create method', () => {
    return categoryService
      .create({
        name: 'kids',
      })
      .then((result) => {
        expect(result.id).toEqual(2);
      });
  });

  it('test index method', () => {
    return categoryService.index().then((result) => {
      expect(result.length).toBeGreaterThan(0);
    });
  });

  it('test show method', () => {
    return categoryService.show('1').then((result) => {
      expect(result.id).toEqual(1);
    });
  });
});

//product tests
describe(' product api', () => {
  it('test create method', () => {
    return ProdutService.create({
      name: 'mobile',
      price: 2000,
      category_id: 1,
    })
      .then((result) => {
        expect(result.id).toEqual(2);
      })
      .catch((reject) => {
        console.log(reject);
      });
  });

  it('test update method', () => {
    return ProdutService.update(1, {
      name: 'updatedMobile',
      price: 2000,
      category_id: 1,
    })
      .then((result) => {
        expect(result).toEqual({
          id: 1,
          name: 'updatedMobile',
          price: 2000,
          category_id: 1,
        });
      })
      .catch((reject) => {
        console.log(reject);
      });
  });
  it('test show method', () => {
    return ProdutService.show('1')
      .then((result) => {
        expect(result).toEqual({
          id: 1,
          name: 'updatedMobile',
          price: 2000,
          category_id: 1,
        });
      })
      .catch((reject) => {
        console.log(reject);
      });
  });

  it('test index method', () => {
    return ProdutService.index()
      .then((result) => {
        expect(result.length).toBeGreaterThan(0);
      })
      .catch((reject) => {
        console.log(reject);
      });
  });

  it('test getByCategoryId method', () => {
    return ProdutService.getProductsByCategory('1')
      .then((result) => {
        expect(result).toEqual({
          id: 1,
          name: 'kids',
          price: 2000,
          category_id: 1,
        });
      })
      .catch((reject) => {
        console.log(reject);
      });
  });
});

//test category api

//order test api
describe('order api', () => {
  it('test create method', () => {
    return OrderService.create({
      product_id: 1,
      product_qty: 1,
      user_id: 1,
      status: 'complete',
    })
      .then((result) => {
        expect(result.id).toEqual(2);
      })
      .catch((reject) => {
        console.log(reject);
      });
  });
  it('test getCompleteOrders method', () => {
    return OrderService.getCompleteOrders('1')
      .then((result) => {
        expect(result.length).toEqual(2);
      })
      .catch((reject) => {
        console.log(reject);
      });
  });

  it('test getCurrentOrders method', () => {
    return OrderService.getCurrentOrders('1')
      .then((result) => {
        expect(result).toEqual([]);
      })
      .catch((reject) => {
        console.log(reject);
      });
  });
});
