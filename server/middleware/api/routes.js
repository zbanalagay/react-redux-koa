const router = require('koa-router')();
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes.routes());

module.exports = router;
