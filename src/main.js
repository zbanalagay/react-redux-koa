import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
// import { createHistory, useBasename } from 'history';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import configureStore from './redux/configureStore';

const store = configureStore(window.__INITIAL_STATE__);

const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: (state) => state.router
});

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<App store={store} history={history} routes={routes} />, app);
