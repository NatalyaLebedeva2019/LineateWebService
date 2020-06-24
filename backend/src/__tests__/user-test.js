const request = require('supertest');
const db = require('../config/db');
const User = db.User;

describe('user', () => {
  const app = require('../app');
  let userId;

  beforeAll(async () => {
    const result = await User.create({
      name: 'test',
      email: 'test@mail.ru',
      phone: '777',
      password: 'test',
      isCourier: true,
      isClient: true,
    });
    userId = result.id;
  });
  
  afterAll(async () => {
    await User.destroy({ where: {} });
  });

  test('get users', (done) => {
    request(app.callback())
      .get('/api/v1/users')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test('get user', (done) => {
    request(app.callback())
      .get('/api/v1/users/'+ userId)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) {
          done(err);
        }
        expect(res.body.id).toBe(userId);
        done();
      });
  });

  test('login', (done) => {
    request(app.callback())
      .post('/api/v1/users/login')
      .send({
        email: 'test@mail.ru',
        password: 'test',
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) {
          done(err);
        }
        expect(res.body.id).not.toBeNull();
        done();
      });
  });

  test('ivalid login email', (done) => {
    request(app.callback())
      .post('/api/v1/users/login')
      .send({
        email: null,
        password: 'test',
      })
      .expect(400, done);
  });

  test('ivalid login password', (done) => {
    request(app.callback())
      .post('/api/v1/users/login')
      .send({
        email: 'test@mail.ru',
        password: 'null',
      })
      .expect(400, done);
  });

  test('edit user', (done) => {
    const
      name = 'twst2',
      email = '123@mail.ru',
      phone = '123',
      password = '123',
      isClient = false,
      isCourier = false,
      balance = '123.00';

    request(app.callback())
      .put('/api/v1/users/' + userId)
      .send({
        name,
        email,
        phone,
        password,
        isClient,
        isCourier,
        balance,
      })
      .expect(200)
      .end((err, res) => {
        if (err) {
          done(err);
        }
        expect(res.body.name).toBe(name);
        expect(res.body.email).toBe(email);
        expect(res.body.phone).toBe(phone);
        expect(res.body.password).toBe(password);
        expect(res.body.isClient).toBe(isClient);
        expect(res.body.isCourier).toBe(isCourier);
        expect(res.body.balance).toBe(balance);
        done();
      });
  });

  test('delete user', (done) => {
    request(app.callback())
      .delete('/api/v1/users/' + userId)
      .expect(200, done);
  });
});
