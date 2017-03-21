import genActionType from '../genActionType';

describe('genActionType', () => {
  it('should accept 2 string params', () => {
    expect(() => genActionType('one', 'two')).not.toThrow();
  });

  it('should generate a correctly formatted action type string', () => {
    const module = 'module';
    const action = 'ACTION';

    expect(genActionType(module, action)).toBe(`${module}/${action}`);
  });
});
