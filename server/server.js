const koa = require('koa');
const serve = require('koa-static');
const historyApiFallback = require('koa-connect-history-api-fallback');
require('dotenv').config();

const app = koa();

app.use(historyApiFallback());
app.use(serve(`${__dirname}/../app/dist`));

app.listen(process.env.PORT);
console.log('Koa is listening on port 3000');
