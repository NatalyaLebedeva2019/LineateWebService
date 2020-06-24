const db = require('../config/db');
const User = db.User;

async function getUsers(ctx) {
  const users = await User.findAll();
  ctx.body = users;
}

async function getUser(ctx) {
  const user = await User.findByPk(ctx.params.id);
  ctx.body = user;
}

async function editUser(ctx) {
  const id = ctx.params.id;
  const { name, email, phone, password, isClient, isCourier, balance } = ctx.request.body;

  try {
    if (name !== null) await User.update({ name }, { where: {id}});
    if (email) await User.update({ email }, { where: { id }});
    if (phone) await User.update({ phone }, { where: { id }});
    if (password) await User.update({ password }, { where: { id }});
    if (isClient !== null) await User.update({ isClient }, { where: { id }});
    if (isCourier !== null) await User.update({ isCourier }, { where: { id }});
    if (balance) await User.update({ balance }, { where: { id }});
    const user = await User.findByPk(id);
    ctx.body = user;
  } catch (error) {
    ctx.status = 400;
  }
}

async function deleteUser(ctx) {
  const result = await User.destroy({where: {id: ctx.params.id}});
  ctx.body = result;
}

async function registerUser(ctx) {
  const { name, email, password, phone, isClient, isCourier }= ctx.request.body;

  if (!name) ctx.throw(400, 'Empty name');
  if (!email) ctx.throw(400, 'Empty email');
  if (!password) ctx.throw(400, 'Empty password');
  if (!phone) ctx.throw(400, 'Empty phone');
  if (isCourier === null) ctx.throw(400, 'Empty isCourier');
  if (isClient === null) ctx.throw(400, 'Empty isClient');
  if (!isCourier && !isClient) ctx.throw(400, 'Not client and not courier');

  try {
    const user = await User.create({
      name,
      email,
      phone,
      password,
      isCourier,
      isClient,
      balance: '0',
    });
    await ctx.login(user);
    ctx.body = ctx.state.user;
  } catch (error) {
    ctx.status = 400;
  }
}

async function login(ctx) {
  const body = ctx.request.body;
  if (!body.email) ctx.throw(400, 'Empty email');
  if (!body.password) ctx.throw(400, 'Empty password');

  const user = await User.findOne({ 
    where: { email : body.email }
  });
    
  if (!user) ctx.throw(400, 'Bad email');

  if (user.password !== body.password) ctx.throw(400, 'Bad password');

  await ctx.login(user);
  ctx.body = ctx.state.user;
}

async function logout(ctx) {
  await ctx.logout();
  ctx.body = ctx.state.user;
}

function getCurrentUser(ctx) {
  ctx.body = ctx.state.user;
}

module.exports = {
  getUsers,
  registerUser,
  login,
  getUser,
  editUser,
  deleteUser,
  logout,
  getCurrentUser,
};
