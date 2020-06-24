const db = require('../config/db');
const Order = db.Order;
const Product = db.Product;
const User = db.User;
const constants = require('../config/constants');

async function getOrders(ctx) {
  const { id } = await User.findByPk(ctx.params.id);
  if (!id) ctx.throw(400, 'User not found');

  let orders = await Order.findAll({
    where: {'client_id': id},
    attributes: ['id', 'status'],
    include: [
      'product',
      {
        association: 'courier',
        attributes: ['name', 'phone'],
      }
    ]
  });

  let requestsOrders = await Order.findAll({
    where: {'courier_id': id},
    attributes: ['id', 'status'],
    include: [
      'product',
      {
        association: 'client',
        attributes: ['name', 'phone'],
      }
    ]
  });

  let deliveryOrders = await Order.findAll({
    where: {'status': 'created'},
    attributes: ['id', 'status'],
    include: [ 'product',
      'product',
      {
        association: 'client',
        attributes: ['name', 'phone'],
      }
    ]
  });

  ctx.body = {
    orders,
    deliveryOrders,
    requestsOrders,
  };
}

async function addOrder(ctx) {
  const { client_id, product_id } = ctx.request.body;

  const client = await User.findOne({ where: {
    id: client_id,
    isClient: true
  }});
  if (!client) ctx.throw(400, 'User not found');

  const product = await Product.findByPk(product_id);
  if (!product) ctx.throw(400, 'Product not found');

  if (Number(client.balance) < Number(product.price)) ctx.throw(400, 'Not enough money');

  try {
    const order = await Order.create({
      status: constants.CREATED,
      client_id,
      product_id,
    });
    ctx.body = order;
    const balance = client.balance - product.price;
    await User.update({ balance }, { where: { id: client_id }});
  } catch (error) {
    ctx.status = 400;
  } 
}

async function getOrder(ctx) {
  const order = await Order.findByPk(ctx.params.id, {
    attributes: ['id', 'status', 'product_id', 'client_id', 'courier_id'],
  });
  ctx.body = order;
}

async function takeInDelivery(ctx) {
  const id = ctx.params.id;
  const { courier_id } = ctx.request.body;
  const order = await Order.findByPk(id, {
    attributes: ['id', 'status', 'product_id', 'client_id', 'courier_id'],
  });
  if (!order) ctx.throw(400, 'order not found');
  const courier = await User.findByPk(courier_id);
  if (!courier) ctx.throw(400, 'user not found');
  await Order.update({
    courier_id: courier_id,
    status: constants.DELIVERING
  }, { 
    where: {id} 
  });
  const newOrder = await Order.findByPk(id, {
    attributes: ['id', 'status', 'product_id', 'client_id', 'courier_id'],
  });
  ctx.body = newOrder;
}

async function changeStatus(ctx) {
  const id = ctx.params.id;
  const { status } = ctx.request.body;
  let order = await Order.findByPk(id, {
    attributes: ['status'],
    include: [
      'product',
      {
        association: 'courier',
        attributes: ['id', 'balance'],
      }
    ]
  });
  if (!order) ctx.throw(400, 'order not found');
  if (status !== constants.CANCELED &&
    status !== constants.DELIVERED &&
    status !== constants.DONE) {
    ctx.throw(400, 'Uncorrect status');
  }
  if (status === constants.DELIVERED || status === constants.DONE) {
    if (!order.courier) ctx.throw(400, 'order has not courier');
  }
  if (status === constants.DONE) {
    const balance = Number(order.courier.balance) + Number(order.product.price) * 0.1;
    await User.update({ balance }, { where: { id: order.courier.id }});
  }

  await Order.update({ status }, { where: { id }});
  order = await Order.findByPk(id, {
    attributes: ['id', 'status', 'product_id', 'client_id', 'courier_id'],
  });
  ctx.body = order;
}

async function editStatusOfOrder(ctx) {
  const { status, courier_id } = ctx.request.body;
  if (status) await changeStatus(ctx);
  if (courier_id) await takeInDelivery(ctx);
}

module.exports = {
  addOrder,
  getOrder,
  editStatusOfOrder,
  getOrders
};
