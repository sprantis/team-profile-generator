// Testing for Engineer class
// Able to use require for tests, but not for Inquirer and FS for some reason. 
const Engineer = require('../lib/Engineer');

// Group together 'Engineer' related tests with describe()
describe('Engineer', () => {

  // Testing for correct role
  describe('getRole()', () => {
    it('should return \'Engineer\'', () => {
      const testValue = 'Engineer';
      const e = new Engineer('Sarah', 1, 'test@test.com', 'sprantis');
      expect(e.getRole()).toBe(testValue);
    });
  });

  // Testing for GitHub username
  describe('getGitHub()', () => {
    it('should return employee\'s GitHub username', () => {
      const testValue = 'sprantis';
      const e = new Engineer('Sarah', 1, 'test@test.com', testValue);
      expect(e.getGithub()).toBe(testValue);
    });
  });
});
