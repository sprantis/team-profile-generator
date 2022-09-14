// Testing for Manager class
// Able to use require for tests, but not for Inquirer and FS for some reason. 
const Manager = require('../lib/Manager');

// Group together 'Manager' related tests with describe()
describe('Manager', () => {

  // Testing for correct role
  describe('getRole()', () => {
    it('should return \'Manager\'', () => {
      const testValue = 'Manager';
      const e = new Manager('Sarah', 1, 'test@test.com', 100);
      expect(e.getRole()).toBe(testValue);
    });
  });

  // Testing for office number
  describe('getOfficeNumber()', () => {
    it('should return employee\'s office number', () => {
      const testValue = 100;
      const e = new Manager('Sarah', 1, 'test@test.com', testValue);
      expect(e.getOfficeNumber()).toBe(testValue);
    });
  });
});
