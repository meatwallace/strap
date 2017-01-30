import genActionType from '../genActionType';
import { APP_NAME } from '../../configs/app';

describe('genActionType', () => {
  it('should accept 2 string params', () => {
    expect(() => genActionType('one', 'two')).not.toThrow();
  });

  it('should throw an error if it is not passed 2 strings', () => {
    const error = 'Func requires 2 string params';

    expect(() => genActionType()).toThrow(error);
    expect(() => genActionType(null, 10)).toThrow(error);
  });

  it('should generate a correctly formatted action type string', () => {
    const module = 'module';
    const action = 'ACTION';

    expect(genActionType(module, action)).toBe(`${APP_NAME}/${module}/${action}`);
  });
});
