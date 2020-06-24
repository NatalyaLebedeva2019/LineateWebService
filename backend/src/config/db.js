'use strict';

const Sequelize = require('sequelize');
const testConfig = require('./config-test.json');
const developConfig = require('./config.json');
const config = developConfig;

const dbHost = config.host,
  dbPort = config.port,
  dbUsername = config.username,
  dbPassword = config.password,
  dbName = config.dbName;

const db = {
  sequelize: new Sequelize(dbName, dbUsername, dbPassword, {
    host: dbHost,
    dialect: 'postgres',
    port: dbPort
  })
};

db.User = db.sequelize.import('../models/user.js');
db.Product = db.sequelize.import('../models/product.js');
db.Order = db.sequelize.import('../models/order.js');

db.User.hasMany(db.Order);
db.Order.belongsTo(db.User, {foreignKey: 'client_id', as: 'client'});
db.User.hasMany(db.Order);
db.Order.belongsTo(db.User,  {foreignKey: 'courier_id', as: 'courier'});
db.Product.hasMany(db.Order);
db.Order.belongsTo(db.Product,  {foreignKey: 'product_id', as: 'product'});

module.exports = db;
