import genActionType from '../genActionType';

jest.mock('../../config/config', () => ({
  get() {
    return 'test';
  },
}));

describe('genActionType', () => {
  it('should accept 2 string params', () => {
    expect(() => genActionType('one', 'two')).not.toThrow();
  });

  it('should generate a correctly formatted action type string', () => {
    const module = 'module';
    const action = 'ACTION';

    expect(genActionType(module, action)).toBe(`test/${module}/${action}`);
  });
});
