// Testing for Intern class
const Intern = require('../lib/Intern.js');

// Group together 'Intern' related tests with describe()
describe('Intern', () => {

  // Testing for correct role
  describe('getRole()', () => {
    it('should return \'Intern\'', () => {
      const testValue = 'Intern';
      const e = new Intern('Sarah', 1, 'test@test.com', 'UNH');
      expect(e.getRole()).toBe(testValue);
    });
  });

  // Testing for school
  describe('getSchool()', () => {
    it('should return employee\'s school', () => {
      const testValue = 'UNH';
      const e = new Intern('Sarah', 1, 'test@test.com', testValue);
      expect(e.getSchool()).toBe(testValue);
    });
  });
});
