import { fromJS } from 'immutable';
import history from '../../configs/history';
import reducer, { STATE_KEY, navigate } from '../routing';

describe('routing::', () => {
  describe('STATE_KEY::', () => {
    it('should be `routing`', () => {
      expect(STATE_KEY).toBe('routing');
    });
  });

  describe('reducer::', () => {
    it('should return an initial state', () => {
      const initialState = fromJS({ location: history.location, action: history.action });

      expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle NAVIGATE', () => {
      const expectedState = fromJS({ location: {}, action: 'PUSH' });

      const actions = [
        navigate({ location: {}, action: 'PUSH' }),
      ];

      const newState = actions.reduce(reducer, undefined);

      expect(newState).toEqual(expectedState);
    });
  });
});
