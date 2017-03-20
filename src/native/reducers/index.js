import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import client from '../configs/apollo';

const reducers = {
  form,
  apollo: client.reducer(),
};

export default combineReducers(reducers);
