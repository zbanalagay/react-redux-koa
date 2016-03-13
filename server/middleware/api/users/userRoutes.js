const userRoutes = require('koa-router')();

userRoutes.get('/asyncAdd', function* () {
  this.response.body = 5;
});

module.exports = userRoutes;
