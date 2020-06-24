const db = require('../config/db');
const Product = db.Product;

async function addProduct(ctx) {
  let { name, content, price, image } = ctx.request.body;
  if (!name) ctx.throw(400, 'Empty name');
  if (!price) price = 0;
  try {
    const product = await Product.create({
      name,
      content,
      price,
      image,
    });
    ctx.body = product;
  } catch (error) {
    ctx.status = 400;
  }
}

async function getProducts(ctx) {
  const products = await Product.findAll();
  ctx.body = products;
}

async function getProduct(ctx) {
  const product = await Product.findByPk(ctx.params.id);
  ctx.body = product;
}

async function editProduct(ctx) {
  const id = ctx.params.id;
  let { name, price, content, image } = ctx.request.body;

  try {
    if (name) await Product.update({ name }, { where: {id}});
    if (price) await Product.update({ price }, { where: {id}});
    if (content) await Product.update({ content }, { where: {id}});
    if (image) await Product.update({ image }, { where: {id}});
    const product = await Product.findByPk(id);
    ctx.body = product;
  } catch (error) {
    ctx.status = 400;
  }
}

async function deleteProduct(ctx) {
  const result = await Product.destroy({where: {id: ctx.params.id}});
  ctx.body = result;
}

module.exports = {
  addProduct,
  getProducts,
  getProduct,
  editProduct,
  deleteProduct,
};
