const Manager = require('../lib/Manager');

describe('Manager', () => {
  describe('getRole()', () => {
    it('should return \'Manager\'', () => {
      const testValue = 'Manager';
      const e = new Manager('Sarah', 1, 'test@test.com', 100);
      expect(e.getRole()).toBe(testValue);
    });
  });

  describe('getOfficeNumber()', () => {
    it('should return employee\'s office number', () => {
      const testValue = 100;
      const e = new Manager('Sarah', 1, 'test@test.com', testValue);
      expect(e.getOfficeNumber()).toBe(testValue);
    });
  });
});
