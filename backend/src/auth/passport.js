const passport = require('koa-passport');
const LocalStrategy = require('passport-local').Strategy;

const db = require('../config/db');
const User = db.User;

passport.serializeUser(function(user, done) {
  done(null, user.id);
});
  
passport.deserializeUser(async function(id, done) {
  User.findByPk(id)
    .then((user) => done(null, user))
    .catch((err) => done(err));
});

passport.use(new LocalStrategy(
  async function(email, password, done) {
    User.findOne({ 
      where: {
        email : email
      }
    }).then(user => {
      if (!user) return done(null, false, { message: 'Incorrect name.' });
      if (password !== user.password) return done(null, false, { message: 'Incorrect password.' });
      return done(null, user);
    }).catch(err =>{ return done(err); });
  }
));

module.exports = passport;
