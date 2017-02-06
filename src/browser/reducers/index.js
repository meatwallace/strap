import { combineReducers } from 'redux';
import client from '../config/apolloClient';

const reducer = combineReducers({
  apollo: client.reducer(),
});

export default reducer;
