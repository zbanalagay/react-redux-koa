require('dotenv').config();

const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const compiler = webpack(webpackConfig);

const koa = require('koa');
const serve = require('koa-static');
const historyApiFallback = require('koa-connect-history-api-fallback');

const app = koa();

app.use(require('koa-webpack-dev-middleware')(compiler, {
  quiet: true,
  noInfo: true,
  stats: {
    colors: true,
    reasons: true
  },
  publicPath: webpackConfig.output.publicPath
}));
app.use(function* (next) {
  yield require('webpack-hot-middleware')(compiler).bind(null, this.req, this.res);
  yield next;
});

app.use(historyApiFallback());
app.use(serve(`${__dirname}/../app/dist`));

app.listen(process.env.PORT);
console.log('Koa is listening on port 3000');
