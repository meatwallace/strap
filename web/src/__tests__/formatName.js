import formatName from '../formatName';

const output = 'A Formatted String';

describe('formatName', () => {
  it('should remove all extraneous spaces from a string', () => {
    expect(formatName(' A   Formatted   String  ')).toBe(output);
  });

  it('should capitalize the first char of each word and lower the rest', () => {
    expect(formatName('a foRmaTTed stRinG')).toBe(output);
  });
});
