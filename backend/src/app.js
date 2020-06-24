const path = require('path');
const Koa = require('koa');
const serve = require('koa-static');
const logger = require('koa-pino-logger');
const router = require('./routes/router');
const bodyParser = require('koa-bodyparser');
const send = require('koa-send');
const passport = require('koa-passport');
const session = require('koa-session');

const staticDir = path.resolve(__dirname, '..', '..', 'frontend', 'public');
const app = new Koa();

app.use(logger());

app.keys = ['super-secret-key'];
app.use(session(app));

app.use(bodyParser());

require('./auth/passport');
app.use(passport.initialize());
app.use(passport.session());

app.use(router.routes());
app.use(router.allowedMethods());
app.use(serve(staticDir));

//Default route
app.use(async function (ctx) {
  await send(ctx, 'index.html', { root: staticDir});
});

//app.listen();
app.listen(3000, () => {});

module.exports = app;
