const request = require('supertest');
const db = require('../config/db');
const Product = db.Product;

describe('products', () => {
  const app = require('../app');
  let productId;

  beforeAll(async () => {
    const result = await Product.create({
      name: 'test',
      price: '777',
      content: 'test',
      image: 'test',
    });
    productId = result.id;
  });

  afterAll(async () => {
    await Product.destroy({ where: {} });
  });

  test('add valid product', (done) => {
    request(app.callback())
      .post('/api/v1/products')
      .send({
        name: 'test',
        content: 'content',
        price: '777',
        image: 'image'
      })
      .expect(200)
      .end((err, res) => {
        if (err) {
          done(err);
        }
        expect(res.body.id).not.toBeNull();
        done();
      });
  });

  test('add null product name', (done) => {
    request(app.callback())
      .post('/api/v1/products')
      .send({
        name: null,
      })
      .expect(400, done);
  });

  test('add empty product name', (done) => {
    request(app.callback())
      .post('/api/v1/products')
      .send({
        name: '',
      })
      .expect(400, done);
  });

  test('add invalid product price', (done) => {
    request(app.callback())
      .post('/api/v1/products')
      .send({
        name: 'test',
        price: 'test'
      })
      .expect(400, done);
  });

  test('get products', (done) => {
    request(app.callback())
      .get('/api/v1/products')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test('get product', (done) => {
    request(app.callback())
      .get('/api/v1/products/' + productId)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) {
          done(err);
        }
        expect(res.body.id).toBe(productId);
        done();
      });
  });

  test('edit product', (done) => {
    const
      name = '123',
      price = '123',
      image = '123',
      content = '123';

    request(app.callback())
      .put('/api/v1/products/' + productId)
      .send({
        name,
        price,
        image,
        content,
      })
      .expect(200)
      .end((err, res) => {
        if (err) {
          done(err);
        }
        expect(res.body.name).toBe(name);
        expect(res.body.price).toBe(price);
        expect(res.body.image).toBe(image);
        expect(res.body.content).toBe(content);
        done();
      });
  });

  test('delete product', (done) => {
    request(app.callback())
      .delete('/api/v1/products/' + productId)
      .expect(200, done);
  });
});