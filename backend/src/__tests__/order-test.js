const request = require('supertest');
const db = require('../config/db');
const Product = db.Product;
const User = db.User;
const Order = db.Order;

describe('orders', () => {
  const app = require('../app');
  let productId;
  let userId;
  let orderId;

  beforeAll(async () => {
    const product = await Product.create({
      name: 'test',
      price: '777',
      content: 'test',
      image: 'test',
    });
    productId = product.id;
    const user = await User.create({
      name: 'test',
      email: 'test@mail.ru',
      phone: '777',
      password: 'test',
      isCourier: true,
      isClient: true,
      balance: 50000,
    });
    userId = user.id;
    const order = await Order.create({
      product_id: productId,
      client_id: userId,
      courier_id: userId,
      status: 'created',
    });
    orderId = order.id;
  });

  afterAll(async () => {
    await Order.remove({where: {}});
    await Product.remove({where: {}});
    await User.remove({where: {}});
  });

  test('get order', (done) => {
    request(app.callback())
      .get('/api/v1/orders/'+ orderId)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) {
          done(err);
        }
        expect(res.body.id).toBe(orderId);
        done();
      });
  });

  test('create order', (done) => {
    request(app.callback())
      .post('/api/v1/orders/')
      .send({
        product_id: productId,
        client_id: userId,
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) {
          done(err);
        }
        console.log(res.body);
        const { id, product_id, client_id, courier_id, status } = res.body;
        expect(id).not.toBeUndefined();
        expect(product_id).toBe(productId);
        expect(client_id).toBe(userId);
        expect(courier_id).toBeNull();
        expect(status).toBe('created');
        done();
      });
  });

  test('create order null product', (done) => {
    request(app.callback())
      .post('/api/v1/orders/')
      .send({
        product_id: null,
        client_id: userId,
      })
      .expect(400, done);
  });

  test('create order null client', (done) => {
    request(app.callback())
      .post('/api/v1/orders/')
      .send({
        product_id: productId,
        client_id: null,
      })
      .expect(400, done);
  });

  test('take order in delivery', (done) => {
    request(app.callback())
      .put('/api/v1/orders/' + orderId)
      .send({
        courier_id: userId
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) {
          done(err);
        }
        expect(res.body.courier_id).toBe(userId);
        expect(res.body.status).toBe('delivering');
        done();
      });
  });

  test('take order in delivery invalid courier', (done) => {
    request(app.callback())
      .put('/api/v1/orders/' + orderId)
      .send({
        courier_id: '0'
      })
      .expect(400, done);
  });

  test('take order in delivery invalid order', (done) => {
    request(app.callback())
      .put('/api/v1/orders/' + '0')
      .send({
        courier_id: '0'
      })
      .expect(400, done);
  });

  test('edit status to "delivered"', (done) => {
    request(app.callback())
      .put('/api/v1/orders/' + orderId)
      .send({
        status: 'delivered'
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) {
          done(err);
        }
        expect(res.body.status).toBe('delivered');
        done();
      });
  });

  test('edit status to "done"', (done) => {
    request(app.callback())
      .put('/api/v1/orders/' + orderId)
      .send({
        status: 'done'
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) {
          done(err);
        }
        expect(res.body.status).toBe('done');
        done();
      });
  });

  test('edit status to "canceled"', (done) => {
    request(app.callback())
      .put('/api/v1/orders/' + orderId)
      .send({
        status: 'canceled'
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) {
          done(err);
        }
        expect(res.body.status).toBe('canceled');
        done();
      });
  });

  test('edit invalid status', (done) => {
    request(app.callback())
      .put('/api/v1/orders/' + orderId)
      .send({
        status: 'test'
      })
      .expect(400, done);
  });
});