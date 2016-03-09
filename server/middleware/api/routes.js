const router = require('koa-router')();
const userRoutes = require('./users/userRoutes');

router.use('/users', userRoutes.routes());

module.exports = router;
