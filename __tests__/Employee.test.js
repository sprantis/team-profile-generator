const Employee = require('../lib/Employee');

describe('Employee', () => {
  describe('new instance', () => {
    it('should be a new instance', () => {
      const e = new Employee();
      expect(typeof(e)).toBe('object');
    });
  });

  describe('getName()', () => {
    it('should return the employee\'s name', () => {
      const testValue = 'Sarah';
      const e = new Employee(testValue);
      expect(e.getName()).toBe(testValue);
    });
  });

  describe('getId()', () => {
    it('should return employee\'s ID', () => {
      const testValue = 100;
      const e = new Employee('Sarah', testValue);
      expect(e.getId()).toBe(testValue);
    });
  });

  describe('getEmail()', () => {
    it('should return employee\'s email', () => {
      const testValue = 'test@gmail.com';
      const e = new Employee('Sarah', 1, testValue);
      expect(e.getEmail()).toBe(testValue);
    });
  });
});