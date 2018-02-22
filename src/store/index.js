import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../modules';

let store = null; // eslint-disable-line

const reducer = combineReducers(reducers);

if (__DEV__) { // eslint-disable-line
  const devToolsEnhancer = require('remote-redux-devtools'); // eslint-disable-line
  store = createStore(
    reducer,
    {},
    compose(
      applyMiddleware(thunk),
      devToolsEnhancer.default({
        realtime: true,
        hostname: 'localhost',
        port: 8000,
        suppressConnectErrors: false,
      }),
    ),
  );
} else {
  store = createStore(
    reducer,
    {},
    applyMiddleware(thunk),
  );
}

export default store;
