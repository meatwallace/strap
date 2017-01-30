import { fromJS } from 'immutable';
import history from '../configs/history';
import genActionType from '../lib/genActionType';

// State key
export const STATE_KEY = 'routing';

// Types
const NAVIGATE = genActionType(STATE_KEY, 'NAVIGATE');

// Reducer
const initialState = fromJS({ location: history.location, action: history.action });

export default (state = initialState, action) => {
  const { type, payload } = action;


  if (type === NAVIGATE) {
    return state.merge({ location: payload.location, action: payload.action });
  }

  return state;
};

// Action Creators
export const navigate = ({ location, action }) => ({
  type: NAVIGATE,
  payload: {
    location,
    action,
  },
});
