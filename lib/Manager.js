// Manager Class
const Employee = require('./Employee.js');

class Manager extends Employee {
    // Manager Properties
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    };

    // Manager Methods
    getRole() {
        return 'Manager';
    };

    getOfficeNumber() {
        return this.officeNumber;
    };

};

module.exports = Manager;