const router = require('koa-router')();
const counterRoutes = require('./counter/counterRoutes');

router.use('/counter', counterRoutes.routes());

module.exports = router;
