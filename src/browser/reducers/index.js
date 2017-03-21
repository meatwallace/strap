import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import client from '../configs/apollo';

const reducer = combineReducers({
  apollo: client.reducer(),
  router: routerReducer,
});

export default reducer;
