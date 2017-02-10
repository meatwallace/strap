import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import middleware from './middleware';
import reducer from './reducers';

export const initialState = {};

export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(
      ...middleware,
    ),
  ),
);

export default store;
