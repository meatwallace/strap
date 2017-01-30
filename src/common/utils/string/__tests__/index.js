import { lowerCase } from '../';

describe('stringUtils::', () => {
  describe('lowerCase::', () => {
    it('should make all characters in a string lowercase', () => {
      expect(lowerCase('a mixEd Bag oF LEttErs')).toBe('a mixed bag of letters');
    });
  });
});
