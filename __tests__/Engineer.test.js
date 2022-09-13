const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
  describe('getRole()', () => {
    it('should return \'Engineer\'', () => {
      const testValue = 'Engineer';
      const e = new Engineer('Sarah', 1, 'test@test.com', 'sprantis');
      expect(e.getRole()).toBe(testValue);
    });
  });

  describe('getGitHub()', () => {
    it('should return employee\'s GitHub username', () => {
      const testValue = 'sprantis';
      const e = new Engineer('Sarah', 1, 'test@test.com', testValue);
      expect(e.getGithub()).toBe(testValue);
    });
  });
});
