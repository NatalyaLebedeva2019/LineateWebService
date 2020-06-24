const request = require('supertest');
const db = require('../config/db');
const User = db.User;

describe('POST /api/v1/users/register', () => {
  const app = require('../app');
  
  afterAll(async () => {
    await User.destroy({ where: {} });
  });

  test('reg valid', (done) => {
    request(app.callback())
      .post('/api/v1/users/register')
      .send({
        name: 'test',
        email: 'test@mail.ru',
        phone: '777',
        password: 'test',
        isCourier: true,
        isClient: true,
      })
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
  
  test('reg null name', (done) => {
    request(app.callback())
      .post('/api/v1/users/register')
      .send({
        name: null,
        email: 'test@mail.ru',
        phone: '777',
        password: 'test',
        isCourier: true,
        isClient: true,
      })
      .expect(400, done);
  });
  
  test('reg empty name', (done) => {
    request(app.callback())
      .post('/api/v1/users/register')
      .send({
        name: '',
        email: 'test@mail.ru',
        phone: '777',
        password: 'test',
        isCourier: true,
        isClient: true,
      })
      .expect(400, done);
  });
  
  test('reg null email', (done) => {
    request(app.callback())
      .post('/api/v1/users/register')
      .send({
        name: 'test',
        email: null,
        phone: '777',
        password: 'test',
        isCourier: true,
        isClient: true,
      })
      .expect(400, done);
  });
  
  test('reg empty email', (done) => {
    request(app.callback())
      .post('/api/v1/users/register')
      .send({
        name: 'test',
        email: '',
        phone: '777',
        password: 'test',
        isCourier: true,
        isClient: true,
      })
      .expect(400, done);
  });
  
  test('reg invalid email', (done) => {
    request(app.callback())
      .post('/api/v1/users/register')
      .send({
        name: 'test',
        email: 'test',
        phone: '777',
        password: 'test',
        isCourier: true,
        isClient: true,
      })
      .expect(400, done);
  });
  
  test('reg null phone', (done) => {
    request(app.callback())
      .post('/api/v1/users/register')
      .send({
        name: 'test',
        email: 'test@mail.ru',
        phone: null,
        password: 'test',
        isCourier: true,
        isClient: true,
      })
      .expect(400, done);
  });
  
  test('reg empty phone', (done) => {
    request(app.callback())
      .post('/api/v1/users/register')
      .send({
        name: 'test',
        email: 'test@mail.ru',
        phone: '',
        password: 'test',
        isCourier: true,
        isClient: true,
      })
      .expect(400, done);
  });
  
  test('reg null password', (done) => {
    request(app.callback())
      .post('/api/v1/users/register')
      .send({
        name: 'test',
        email: 'test@mail.ru',
        phone: '777',
        password: null,
        isCourier: true,
        isClient: true,
      })
      .expect(400, done);
  });
  
  test('reg empty password', (done) => {
    request(app.callback())
      .post('/api/v1/users/register')
      .send({
        name: 'test',
        email: 'test@mail.ru',
        phone: '777',
        password: '',
        isCourier: true,
        isClient: true,
      })
      .expect(400, done);
  });
  
  test('reg null isCourier', (done) => {
    request(app.callback())
      .post('/api/v1/users/register')
      .send({
        name: 'test',
        email: 'test@mail.ru',
        phone: '777',
        password: 'password',
        isCourier: null,
        isClient: true,
      })
      .expect(400, done);
  });
  
  test('reg invalid isClourier', (done) => {
    request(app.callback())
      .post('/api/v1/users/register')
      .send({
        name: 'test',
        email: 'test@mail.ru',
        phone: '777',
        password: 'password',
        isCourier: 'test',
        isClient: true,
      })
      .expect(400, done);
  });
  
  test('reg null isClient', (done) => {
    request(app.callback())
      .post('/api/v1/users/register')
      .send({
        name: 'test',
        email: 'test@mail.ru',
        phone: '777',
        password: 'password',
        isCourier: false,
        isClient: null,
      })
      .expect(400, done);
  });
  
  test('reg invalid isClient', (done) => {
    request(app.callback())
      .post('/api/v1/users/register')
      .send({
        name: 'test',
        email: 'test@mail.ru',
        phone: '777',
        password: 'password',
        isCourier: false,
        isClient: 'test',
      })
      .expect(400, done);
  });
  
  test('reg not client and not courier', (done) => {
    request(app.callback())
      .post('/api/v1/users/register')
      .send({
        name: 'test',
        email: 'test@mail.ru',
        phone: '777',
        password: 'password',
        isCourier: false,
        isClient: false,
      })
      .expect(400, done);
  });  
});
