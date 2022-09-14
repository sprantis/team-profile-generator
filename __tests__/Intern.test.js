// Testing for Intern class
// Able to use require for tests, but not for Inquirer and FS for some reason. 
const Intern = require('../lib/Intern');

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
