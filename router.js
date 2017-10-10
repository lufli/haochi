const Authentication = require('./controllers/authentication');
const Restaurant = require('./controllers/restaurant');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false});
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
  // user
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
  // restaurant
  app.post('/restaurant', requireAuth, Restaurant.create);
  app.get('/restaurant', requireAuth, Restaurant.show);
};