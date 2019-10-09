import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './Reducers/index';

let reduxCompose = compose;

if (__DEV__) {
  reduxCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
// const configureStore = () => {
//     return createStore(Reducers, reduxCompose(applyMiddleware(promiseMiddleware)))
// }
const configureStore = function(initialState = {}) {
  // Middleware and store enhancers
  const enhancers = [applyMiddleware(thunk)];

  const store = createStore(
    rootReducer,
    initialState,
    reduxCompose(...enhancers)
  );

  return store;
};

export default configureStore;
