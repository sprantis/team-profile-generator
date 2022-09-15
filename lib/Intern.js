// Intern Class
const Employee = require('./Employee.js');

class Intern extends Employee {
    // Intern Properties
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    };

    // Intern Methods
    getRole() {
        return 'Intern';
    };

    getSchool() {
        return this.school;
    };
};

module.exports = Intern;