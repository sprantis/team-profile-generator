const Intern = require('../lib/Intern');

describe('Intern', () => {
  describe('getRole()', () => {
    it('should return \'Intern\'', () => {
      const testValue = 'Intern';
      const e = new Intern('Sarah', 1, 'test@test.com', 'UNH');
      expect(e.getRole()).toBe(testValue);
    });
  });

  describe('getSchool()', () => {
    it('should return employee\'s school', () => {
      const testValue = 'UNH';
      const e = new Intern('Sarah', 1, 'test@test.com', testValue);
      expect(e.getSchool()).toBe(testValue);
    });
  });
});
