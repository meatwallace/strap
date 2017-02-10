import { combineReducers } from 'redux';
import client from '@common/config/apollo';

const reducer = combineReducers({
  apollo: client.reducer(),
});

export default reducer;
