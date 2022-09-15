// Testing for Employee class
const Employee = require('../lib/Employee.js');

// Group together 'Employee' related tests with describe()
describe('Employee', () => {

  // Testing typeof new instance is object
  describe('new instance', () => {
    it('should be a new instance', () => {
      const e = new Employee();
      expect(typeof(e)).toBe('object');
    });
  });

  // Testing for name
  describe('getName()', () => {
    it('should return the employee\'s name', () => {
      const testValue = 'Sarah';
      const e = new Employee(testValue);
      expect(e.getName()).toBe(testValue);
    });
  });

  // Testing for ID
  describe('getId()', () => {
    it('should return employee\'s ID', () => {
      const testValue = 100;
      const e = new Employee('Sarah', testValue);
      expect(e.getId()).toBe(testValue);
    });
  });

  // Testing for email
  describe('getEmail()', () => {
    it('should return employee\'s email', () => {
      const testValue = 'test@gmail.com';
      const e = new Employee('Sarah', 1, testValue);
      expect(e.getEmail()).toBe(testValue);
    });
  });
});