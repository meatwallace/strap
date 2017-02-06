import setting from '../setting';

jest.mock('../../config/settings');

describe('setting', () => {
  it('should take a string as a parameter', () => {
    expect(() => setting('string')).not.toThrow();
  });

  it('should return the value at the key that matches the param', () => {
    expect(setting('key')).toBe('value');
  });

  it('should return undefined if the key is not found', () => {
    expect(() => setting('doesntExist')).not.toThrow();
    expect(setting('doesntExist')).not.toBeDefined();
  });
});
