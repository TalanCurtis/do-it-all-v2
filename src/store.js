// Basic store =======
// import { createStore } from 'redux';
// import base_reducer from './reducers/base';

// let store = createStore(base_reducer);

// export default store;


//// store with middle ware
import { createStore, applyMiddleware } from 'redux';
import base_reducer from './reducers/base';
import promiseMiddleware from 'redux-promise-middleware';

let createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware()
)(createStore);

let store = createStoreWithMiddleware(base_reducer);

export default store;

