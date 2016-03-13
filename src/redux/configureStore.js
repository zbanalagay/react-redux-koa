import promiseMiddleware from 'redux-promise';
import rootReducer from './rootReducer';
import DevTools from '../containers/devTools/devTools';
import { applyMiddleware, compose, createStore } from 'redux';

export default function configureStore(initialState) {
  let createStoreWithMiddleware = null;
  const middleware = applyMiddleware(promiseMiddleware);

  createStoreWithMiddleware = compose(middleware, DevTools.instrument());

  const store = createStoreWithMiddleware(createStore)(
    rootReducer, initialState
    );
  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer').default;

      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
