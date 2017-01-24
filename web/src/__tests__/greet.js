import greet from '../greet';

describe('greet', () => {
  it('should take a string as a param', () => {
    expect(greet('Geoff')).toBe('Hey Geoff!');
  });

  it('should provide a default param value of `Stranger`', () => {
    expect(greet()).toBe('Hey Stranger!');
  });
});
