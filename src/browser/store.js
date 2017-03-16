import { createStore, applyMiddleware, compose } from 'redux';
import middleware from './middleware';
import reducer from './reducers';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {};

export const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware)),
);

export default store;
