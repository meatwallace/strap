import { combineReducers } from 'redux-immutable';
import client from '../configs/apolloClient';

const reducer = combineReducers({
  apollo: client.reducer(),
});

export default reducer;
