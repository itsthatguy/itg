/* eslint-disable no-console */
import {
  applyMiddleware,
  createStore,
  compose
} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';

const composeFn = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeFn(applyMiddleware(thunk));

export default function configureStore () {
  const store = createStore(
    rootReducer,
    enhancer
  );

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
