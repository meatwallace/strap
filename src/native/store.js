import { createStore, applyMiddleware, compose } from 'redux';
// import middleware from './middleware';
import reducer from './reducers';

export const initialState = {};

export const store = createStore(
  reducer,
  initialState,
  // compose(
    // applyMiddleware(
      // ...middleware,
    // ),
  // ),
);

export default store;
