import { combineReducers } from 'redux-immutable';
import client from '../configs/apolloClient';
import routing, { STATE_KEY as ROUTING_KEY } from './routing';

const reducer = combineReducers({
  apollo: client.reducer(),
  [ROUTING_KEY]: routing,
});

export default reducer;
