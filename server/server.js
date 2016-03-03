require('dotenv').config();

const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const compiler = webpack(webpackConfig);
const devMiddlware = require('./middleware/dev-middleware');

const koa = require('koa');
const serve = require('koa-static');
const historyApiFallback = require('koa-connect-history-api-fallback');

const app = koa();

if (process.env.NODE_ENV === 'development') {
  app.use(devMiddlware.webpackDevMiddleware(webpackConfig, compiler));
  app.use(devMiddlware.webpackHotMiddleware(compiler));
}

app.use(historyApiFallback());
app.use(serve(`${__dirname}/../app/dist`));

app.listen(process.env.PORT);
console.log('Koa is listening on port 3000');
