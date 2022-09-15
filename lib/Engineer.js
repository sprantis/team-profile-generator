// Engineer class
const Employee = require('./Employee.js');

class Engineer extends Employee {
    
    // Engineer Properties
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    };

    // Engineer Methods
    getRole() {
        return 'Engineer';
    };

    getGithub() {
        return this.github;
    };
};

module.exports = Engineer;