import { combineReducers } from 'redux';
import client from '../configs/apolloClient';

const reducer = combineReducers({
  apollo: client.reducer(),
});

export default reducer;
